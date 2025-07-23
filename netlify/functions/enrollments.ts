import { Handler } from "@netlify/functions";

interface EnrollmentData {
  studentInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  courseInfo: {
    id: string;
    category: string;
    level: string;
    description: string;
    originalPrice?: string;
    price: string;
    duration: string;
  };
  timestamp: string;
  status: string;
}

// In-memory storage for demo purposes
// In production, this would be replaced with a proper database
let enrollments: (EnrollmentData & { id: string })[] = [];

export const handler: Handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    const { httpMethod, body } = event;

    switch (httpMethod) {
      case "POST": {
        // Create new enrollment
        if (!body) {
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: "Request body is required" }),
          };
        }

        const enrollmentData: EnrollmentData = JSON.parse(body);
        const newEnrollment = {
          ...enrollmentData,
          id: Date.now().toString(),
        };

        enrollments.push(newEnrollment);

        return {
          statusCode: 201,
          headers,
          body: JSON.stringify({
            message: "Enrollment created successfully",
            id: newEnrollment.id,
          }),
        };
      }

      case "PATCH": {
        // Update enrollment status
        if (!body) {
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: "Request body is required" }),
          };
        }

        const { email, status } = JSON.parse(body);

        const enrollmentIndex = enrollments.findIndex(
          (enrollment) => enrollment.studentInfo.email === email,
        );

        if (enrollmentIndex === -1) {
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: "Enrollment not found" }),
          };
        }

        enrollments[enrollmentIndex].status = status;
        enrollments[enrollmentIndex].timestamp = new Date().toISOString();

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            message: "Enrollment updated successfully",
            enrollment: enrollments[enrollmentIndex],
          }),
        };
      }

      case "GET": {
        // Get all enrollments (for admin purposes)
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            enrollments,
            total: enrollments.length,
          }),
        };
      }

      default:
        return {
          statusCode: 405,
          headers,
          body: JSON.stringify({ error: "Method not allowed" }),
        };
    }
  } catch (error) {
    console.error("Error processing enrollment request:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

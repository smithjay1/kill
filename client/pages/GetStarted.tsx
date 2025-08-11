import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import AIHelpChat from "@/components/AIHelpChat";

export default function GetStarted() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const courseCategories = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: "🌐",
      courses: [
        {
          id: "web-essentials",
          level: "Beginner",
          description: "HTML, CSS, Page Structure, Responsive Layouts",
          originalPrice: "₦80,000",
          price: "₦60,000",
          duration: "8 weeks",
          featured: false,
        },
        {
          id: "frontend-js",
          level: "Beginner to Intermediate",
          description: "JavaScript, DOM, Git & GitHub, APIs",
          originalPrice: "₦100,000",
          price: "₦80,000",
          duration: "10 weeks",
          featured: true,
        },
        {
          id: "fullstack",
          level: "Advanced",
          description: "ReactJS, Node.js, MongoDB/SQL, REST APIs",
          originalPrice: "₦150,000",
          price: "₦120,000",
          duration: "16 weeks",
          featured: false,
        },
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: "📊",
      courses: [
        {
          id: "data-combo",
          level: "Beginner",
          description: "Excel, Power BI Basics, SQL & MySQL Fundamentals",
          originalPrice: "₦80,000",
          price: "₦60,000",
          duration: "8 weeks",
          featured: false,
        },
        {
          id: "data-mastery",
          level: "Beginner to Intermediate",
          description: "Advanced Excel, Power BI Mastery, SQL & MySQL Advanced",
          originalPrice: "₦100,000",
          price: "₦80,000",
          duration: "12 weeks",
          featured: true,
        },
        {
          id: "sales-analysis",
          level: "Advanced",
          description:
            "Customer Segmentation, Market Research, MySQL Analytics",
          originalPrice: "₦150,000",
          price: "₦120,000",
          duration: "12 weeks",
          featured: false,
        },
      ],
    },
    {
      id: "video-editing",
      title: "CapCut Video Editing",
      icon: "🎬",
      courses: [
        {
          id: "capcut-mastery",
          level: "Beginner to Advanced",
          description:
            "CapCut Interface, Trimming, Audio Sync, Transitions, TikTok/Reels Optimization",
          originalPrice: "₦60,000",
          price: "₦50,000",
          duration: "6 weeks",
          featured: true,
        },
      ],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnrollNow = () => {
    // Validation
    if (!selectedCourse) {
      alert("Please select a course first");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Find the selected course details
    const selectedCourseDetails = courseCategories
      .flatMap((category) => category.courses)
      .find((course) => course.id === selectedCourse);

    if (!selectedCourseDetails) {
      alert("Course details not found");
      return;
    }

    // Find the category for the selected course
    const selectedCategory = courseCategories.find((category) =>
      category.courses.some((course) => course.id === selectedCourse),
    );

    // Store enrollment data in localStorage and redirect to payment page
    const enrollmentData = {
      studentInfo: formData,
      courseInfo: {
        id: selectedCourse,
        category: selectedCategory?.title || "N/A",
        level: selectedCourseDetails.level,
        description: selectedCourseDetails.description,
        originalPrice: selectedCourseDetails.originalPrice,
        price: selectedCourseDetails.price,
        duration: selectedCourseDetails.duration,
      },
    };

    localStorage.setItem("enrollmentData", JSON.stringify(enrollmentData));
    window.location.href = "/payment";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b">
        <div className="max-w-4xl mx-auto flex items-center">
          <Button
            variant="ghost"
            className="text-brand-blue hover:text-blue-600 mr-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to LUMORA HUB
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Course
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our professional training programs designed to take you
            from beginner to expert level.
          </p>
        </div>

        {/* Course Selection */}
        <div className="mb-12">
          <div className="bg-gray-50 rounded-lg p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Choose Your Learning Path
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Select the skill you want to master and your experience level
            </p>

            <div className="space-y-6">
              {courseCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center text-gray-900">
                    <ChevronDown className="w-5 h-5 mr-2" />
                    <span className="text-lg font-semibold">
                      {category.icon} {category.title}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 ml-7">
                    {category.courses.map((course) => (
                      <Card
                        key={course.id}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedCourse === course.id
                            ? "ring-2 ring-brand-blue bg-blue-50"
                            : "bg-white hover:bg-gray-50"
                        } ${course.featured ? "ring-1 ring-brand-blue" : ""}`}
                        onClick={() => setSelectedCourse(course.id)}
                      >
                        <CardContent className="p-6">
                          {course.featured && (
                            <Badge className="bg-brand-blue text-white mb-3">
                              Popular
                            </Badge>
                          )}
                          <div className="text-center">
                            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-white font-bold text-lg">
                                ₦
                              </span>
                            </div>
                            <h3 className="text-gray-900 font-semibold mb-2">
                              {course.level}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {course.description}
                            </p>
                            <div className="flex flex-col items-center mb-2">
                              {course.originalPrice && (
                                <span className="text-sm text-gray-500 line-through mb-1">
                                  {course.originalPrice}
                                </span>
                              )}
                              <div className="text-brand-blue font-bold text-xl">
                                {course.price}
                              </div>
                            </div>
                            <div className="text-gray-600 text-sm">
                              {course.duration}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4 text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white"
                            >
                              Select
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Section */}
            <div className="mt-8 p-4 bg-brand-blue/5 rounded-lg border border-brand-blue/20">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-brand-blue mr-3 mt-1" />
                <div>
                  <h3 className="text-brand-blue font-semibold mb-2">
                    More Skills Coming Soon!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Next semester additional course tracks: Future additions
                    include Data Science, Digital Marketing, Photography, UI/UX
                    and more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Form */}
        <div className="bg-white rounded-lg p-8 border shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-medium">
                First Name
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-medium">
                Last Name
              </label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                className="border-gray-300"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2 font-medium">
              Email Address
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="border-gray-300"
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm mb-2 font-medium">
              Phone Number
            </label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+234 XXX XXX XXXX"
              className="border-gray-300"
            />
          </div>

          <Button
            onClick={handleEnrollNow}
            className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 text-lg"
            disabled={!selectedCourse}
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Help Section */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Need help choosing the right course?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/academy" className="text-brand-blue hover:text-blue-600">
              View All Programs
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="/innovation"
              className="text-brand-blue hover:text-blue-600"
            >
              Read Our Blog
            </a>
            <span className="text-gray-400">•</span>
            <a href="/contact" className="text-brand-blue hover:text-blue-600">
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* AI Help Chat */}
      <AIHelpChat />
    </div>
  );
}

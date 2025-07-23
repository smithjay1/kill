import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Copy,
  CheckCircle,
  MessageCircle,
  Mail,
  CreditCard,
  Clock,
  User,
  BookOpen,
  Loader2,
} from "lucide-react";

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
}

export default function Payment() {
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(null);
  const [step, setStep] = useState<'payment' | 'proof' | 'confirming'>('payment');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accountDetails = {
    bankName: "Parallex Bank",
    accountName: "Okoh Ibhate Mc-Vester",
    accountNumber: "2000015362"
  };

  useEffect(() => {
    const storedData = localStorage.getItem('enrollmentData');
    if (storedData) {
      setEnrollmentData(JSON.parse(storedData));
      // Save enrollment data to database
      saveEnrollmentData(JSON.parse(storedData));
    } else {
      // Redirect back if no enrollment data found
      window.location.href = '/get-started';
    }
  }, []);

  const saveEnrollmentData = async (data: EnrollmentData) => {
    try {
      await fetch('/.netlify/functions/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          status: 'pending_payment'
        }),
      });
    } catch (error) {
      console.error('Failed to save enrollment data:', error);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handlePaymentMade = () => {
    setStep('proof');
  };

  const generateMessage = () => {
    if (!enrollmentData) return "";

    return `🎓 AETHER HUB Payment Confirmation

👤 Student Information:
• Name: ${enrollmentData.studentInfo.firstName} ${enrollmentData.studentInfo.lastName}
• Email: ${enrollmentData.studentInfo.email}
• Phone: ${enrollmentData.studentInfo.phone}

📚 Course Details:
• Category: ${enrollmentData.courseInfo.category}
• Course: ${enrollmentData.courseInfo.level}
• Description: ${enrollmentData.courseInfo.description}
• Price Paid: ${enrollmentData.courseInfo.price}
• Duration: ${enrollmentData.courseInfo.duration}

💳 Payment Information:
• Amount: ${enrollmentData.courseInfo.price}
• Payment Method: Bank Transfer
• Account: ${accountDetails.accountName}

I have made the payment for the course enrollment. Please find the payment screenshot attached. Kindly confirm receipt and provide the next steps.

Thank you!`;
  };

  const handleWhatsAppSubmission = async () => {
    setIsSubmitting(true);
    setStep('confirming');

    // Show confirmation animation for 2 seconds
    setTimeout(async () => {
      try {
        // Update status in database
        await fetch('/.netlify/functions/enrollments', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: enrollmentData?.studentInfo.email,
            status: 'proof_submitted_whatsapp'
          }),
        });

        const message = generateMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "2347025340480";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Clear enrollment data and redirect to home
        localStorage.removeItem('enrollmentData');
        window.open(whatsappURL, "_blank");

        // Redirect to home page after a short delay
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } catch (error) {
        console.error('Failed to update enrollment status:', error);
        setIsSubmitting(false);
        setStep('proof');
      }
    }, 2000);
  };

  const handleEmailSubmission = async () => {
    setIsSubmitting(true);
    setStep('confirming');

    // Show confirmation animation for 2 seconds
    setTimeout(async () => {
      try {
        // Update status in database
        await fetch('/.netlify/functions/enrollments', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: enrollmentData?.studentInfo.email,
            status: 'proof_submitted_email'
          }),
        });

        const message = generateMessage();
        const subject = `Course Enrollment Payment - ${enrollmentData?.courseInfo.level} (${enrollmentData?.courseInfo.category})`;
        const emailURL = `mailto:aether.hub1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        // Clear enrollment data and redirect to home
        localStorage.removeItem('enrollmentData');
        window.open(emailURL, "_blank");

        // Redirect to home page after a short delay
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } catch (error) {
        console.error('Failed to update enrollment status:', error);
        setIsSubmitting(false);
        setStep('proof');
      }
    }, 2000);
  };

  if (!enrollmentData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading enrollment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-brand-blue hover:text-blue-600"
            onClick={() => {
              if (step === 'confirming') {
                return; // Don't allow navigation during confirmation
              }
              window.location.href = '/';
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step === 'payment' ? 'Back to Course Selection' : 'Back to AETHER HUB'}
          </Button>
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F4a06828822da45c4870e6864312e9b18?format=webp&width=800"
              alt="AETHER HUB Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-800">AETHER HUB</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {step === 'payment' && (
          <>
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">Course Selected</span>
                </div>
                <div className="w-12 h-0.5 bg-brand-blue"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-brand-blue">Payment</span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-gray-500" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Confirmation</span>
                </div>
              </div>
            </div>

            {/* Course Summary */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Summary</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <User className="w-5 h-5 mr-2 text-brand-blue" />
                      Student Information
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Name:</strong> {enrollmentData.studentInfo.firstName} {enrollmentData.studentInfo.lastName}</p>
                      <p><strong>Email:</strong> {enrollmentData.studentInfo.email}</p>
                      <p><strong>Phone:</strong> {enrollmentData.studentInfo.phone}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-brand-blue" />
                      Course Details
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Category:</strong> {enrollmentData.courseInfo.category}</p>
                      <p><strong>Level:</strong> {enrollmentData.courseInfo.level}</p>
                      <p><strong>Duration:</strong> {enrollmentData.courseInfo.duration}</p>
                      <div className="flex items-center space-x-2">
                        {enrollmentData.courseInfo.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {enrollmentData.courseInfo.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-brand-blue">
                          {enrollmentData.courseInfo.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Instructions</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Payment Amount</h3>
                      <p className="text-blue-800 text-lg font-bold">{enrollmentData.courseInfo.price}</p>
                      <p className="text-blue-700 text-sm mt-1">
                        Please make the exact payment to secure your enrollment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Transfer Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="text-sm text-gray-600">Bank Name</span>
                        <p className="font-semibold text-gray-900">{accountDetails.bankName}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="text-sm text-gray-600">Account Name</span>
                        <p className="font-semibold text-gray-900">{accountDetails.accountName}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="text-sm text-gray-600">Account Number</span>
                        <p className="font-semibold text-gray-900">{accountDetails.accountNumber}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(accountDetails.accountNumber)}
                        className="flex items-center"
                      >
                        {copiedAccount ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="ml-1">{copiedAccount ? 'Copied!' : 'Copy'}</span>
                      </Button>
                    </div>

                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Important Notes:</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Use your full name as the payment reference</li>
                    <li>• Take a screenshot of your payment confirmation</li>
                    <li>• Enrollment will be confirmed within 24 hours of payment verification</li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    onClick={handlePaymentMade}
                    className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3"
                  >
                    I Have Made the Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {step === 'proof' && (
          <>
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">Course Selected</span>
                </div>
                <div className="w-12 h-0.5 bg-green-500"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">Payment Made</span>
                </div>
                <div className="w-12 h-0.5 bg-brand-blue"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-brand-blue">Submit Proof</span>
                </div>
              </div>
            </div>

            {/* Payment Proof Submission */}
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Proof Submission</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Great! Now please submit your payment screenshot through either WhatsApp or Email.
                  Your enrollment details and course information will be automatically included.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card
                    className={`border-2 border-green-200 hover:border-green-300 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={isSubmitting ? undefined : handleWhatsAppSubmission}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        {isSubmitting ? (
                          <Loader2 className="w-6 h-6 text-white animate-spin" />
                        ) : (
                          <MessageCircle className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Send payment proof via WhatsApp with pre-filled course details
                      </p>
                      <Button
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Submit via WhatsApp'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card
                    className={`border-2 border-blue-200 hover:border-blue-300 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={isSubmitting ? undefined : handleEmailSubmission}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        {isSubmitting ? (
                          <Loader2 className="w-6 h-6 text-white animate-spin" />
                        ) : (
                          <Mail className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Send payment proof via email with pre-filled enrollment information
                      </p>
                      <Button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Submit via Email'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Your course details and student information will be automatically included in the message.
                    Just attach your payment screenshot and send!
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {step === 'confirming' && (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative">
                    <CheckCircle className="w-8 h-8 text-white animate-pulse" />
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Confirmed!</h2>
                <p className="text-gray-600 mb-4">
                  Your enrollment has been successfully submitted. You'll be redirected to continue with your proof submission.
                </p>
                <div className="flex items-center justify-center">
                  <Loader2 className="w-5 h-5 text-brand-blue animate-spin mr-2" />
                  <span className="text-brand-blue">Redirecting...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

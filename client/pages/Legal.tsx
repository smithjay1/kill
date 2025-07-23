import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronRight, 
  HelpCircle, 
  FileText, 
  Shield, 
  Mail, 
  Phone,
  MessageCircle,
  Menu,
  X
} from "lucide-react";

export default function Legal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("help");

  const sections = [
    { id: "help", title: "Help Center", icon: HelpCircle },
    { id: "terms", title: "Terms of Service", icon: FileText },
    { id: "privacy", title: "Privacy Policy", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F4a06828822da45c4870e6864312e9b18?format=webp&width=800"
                alt="AETHER HUB Logo"
                className="w-8 h-8"
              />
              <div className="text-xl font-bold text-gray-800">AETHER HUB</div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-brand-blue transition-colors">
                Home
              </a>
              <a href="/academy" className="text-gray-700 hover:text-brand-blue transition-colors">
                Academy
              </a>
              <a href="/innovation" className="text-gray-700 hover:text-brand-blue transition-colors">
                Innovation
              </a>
            </div>

            <Button
              className="hidden md:flex bg-brand-blue hover:bg-blue-600 text-white"
              onClick={() => (window.location.href = "/get-started")}
            >
              Get Started
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-brand-blue"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md">Home</a>
                <a href="/academy" className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md">Academy</a>
                <a href="/innovation" className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md">Innovation</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-brand-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Support & Legal Information
          </h1>
          <p className="text-xl opacity-90">
            Find answers, understand our terms, and learn about how we protect your privacy
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`${
                  activeSection === section.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200`}
              >
                <section.icon className="w-4 h-4 mr-2" />
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Help Center */}
          {activeSection === "help" && (
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <HelpCircle className="w-8 h-8 text-brand-blue mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Help Center</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-brand-blue pl-4">
                        <h4 className="font-semibold text-gray-900">How do I enroll in a course?</h4>
                        <p className="text-gray-600 mt-1">Click the "Enroll Now" button on any course card, fill out the registration form, and complete payment to secure your spot.</p>
                      </div>
                      <div className="border-l-4 border-brand-blue pl-4">
                        <h4 className="font-semibold text-gray-900">What payment methods do you accept?</h4>
                        <p className="text-gray-600 mt-1">We accept bank transfers, debit cards, and mobile money payments. Installment plans are available for selected courses.</p>
                      </div>
                      <div className="border-l-4 border-brand-blue pl-4">
                        <h4 className="font-semibold text-gray-900">Are the courses live or pre-recorded?</h4>
                        <p className="text-gray-600 mt-1">Our courses feature live instructor-led sessions with recorded materials for review. You'll get the best of both worlds!</p>
                      </div>
                      <div className="border-l-4 border-brand-blue pl-4">
                        <h4 className="font-semibold text-gray-900">Do you provide certificates?</h4>
                        <p className="text-gray-600 mt-1">Yes! Upon successful completion, you'll receive an industry-recognized certificate that you can add to your LinkedIn profile.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Mail className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">Email Support</h4>
                        <p className="text-gray-600 text-sm mt-1">aether.hub1@gmail.com</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Phone className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">Phone Support</h4>
                        <p className="text-gray-600 text-sm mt-1">Available Mon-Fri 9AM-6PM</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <MessageCircle className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-900">Live Chat</h4>
                        <p className="text-gray-600 text-sm mt-1">24/7 automated assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Terms of Service */}
          {activeSection === "terms" && (
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-brand-blue mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                    <p className="leading-relaxed">
                      By accessing and using AETHER HUB's services, you agree to be bound by these Terms of Service. 
                      If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Course Enrollment and Payment</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Course fees must be paid in full before accessing course materials</li>
                      <li>Refunds are available within 7 days of enrollment if no course materials have been accessed</li>
                      <li>Course prices are subject to change without prior notice</li>
                      <li>Payment plans may be available for selected courses</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Course Access and Completion</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Course access is granted for the duration specified in the course description</li>
                      <li>Students are responsible for attending live sessions or accessing recorded content</li>
                      <li>Certificates are issued upon successful completion of course requirements</li>
                      <li>Course materials are for personal use only and may not be shared or redistributed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h3>
                    <p className="leading-relaxed">
                      All course materials, including videos, documents, and presentations, are the intellectual property of AETHER HUB. 
                      Unauthorized reproduction or distribution is strictly prohibited.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. User Conduct</h3>
                    <p className="leading-relaxed">
                      Users are expected to maintain professional conduct during all interactions. Harassment, spam, 
                      or disruptive behavior will result in immediate suspension of services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h3>
                    <p className="leading-relaxed">
                      AETHER HUB is not liable for any indirect, incidental, or consequential damages arising from the use of our services. 
                      Our total liability is limited to the amount paid for the specific course.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Last Updated:</strong> December 2024. These terms may be updated periodically. 
                      Continued use of our services constitutes acceptance of any changes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Privacy Policy */}
          {activeSection === "privacy" && (
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-brand-blue mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
                    <p className="leading-relaxed mb-3">
                      We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support.
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                      <li>Personal information: name, email address, phone number</li>
                      <li>Payment information: billing address and payment method details</li>
                      <li>Course data: progress, completion status, and performance metrics</li>
                      <li>Communication data: support tickets and feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Provide and maintain our educational services</li>
                      <li>Process payments and manage your account</li>
                      <li>Send course updates, announcements, and educational content</li>
                      <li>Improve our services and develop new features</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h3>
                    <p className="leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. 
                      We may share information with trusted third parties who assist us in operating our website and conducting our business.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
                    <p className="leading-relaxed">
                      We implement appropriate security measures to protect your personal information against unauthorized access, 
                      alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Access and update your personal information</li>
                      <li>Request deletion of your personal data</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Request a copy of your data</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking</h3>
                    <p className="leading-relaxed">
                      We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                      and provide personalized content. You can control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                    <p className="leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at aether.hub1@gmail.com 
                      or through our support channels.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Last Updated:</strong> December 2024. We may update this policy periodically. 
                      We will notify you of any material changes via email or prominent notice on our website.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F4a06828822da45c4870e6864312e9b18?format=webp&width=800"
                  alt="AETHER HUB Logo"
                  className="w-8 h-8"
                />
                <div className="text-xl font-bold text-white">AETHER HUB</div>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of tech professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/academy" className="hover:text-white">Academy</a></li>
                <li><a href="/innovation" className="hover:text-white">Innovation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/legal" className="hover:text-white">Help Center</a></li>
                <li><a href="/legal" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/legal" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
                  <span className="text-white text-sm">📧</span>
                </div>
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
                  <span className="text-white text-sm">🐦</span>
                </div>
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600">
                  <span className="text-white text-sm">💼</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 AETHER HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import AIHelpChat from "@/components/AIHelpChat";
import PageAnimation from "@/components/PageAnimation";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation - Responsive */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fc834e0e7d61b4d6c8ab3dc57953cf518?format=webp&width=800"
                  alt="LUMORA HUB Logo"
                  className="w-8 h-8"
                />
                <div className="text-xl font-bold text-gray-800">
                  LUMORA HUB
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Home
                </a>
                <a
                  href="/academy"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Academy
                </a>
                <a
                  href="/innovation"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Innovation
                </a>
              </div>

              {/* Desktop CTA Button */}
              <Button className="hidden md:flex bg-brand-blue hover:bg-blue-600 text-white">
                Get Started
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-brand-blue"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-100">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                  <a
                    href="/"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/academy"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Academy
                  </a>
                  <a
                    href="/innovation"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Innovation
                  </a>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-brand-blue hover:bg-blue-600 text-white"
                      onClick={() => {
                        window.location.href = "/get-started";
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-brand-lightgreen rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out to us. We'll get back to you within 24
              hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mr-4"
            >
              Send Another Message
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-brand-blue hover:bg-blue-600 text-white"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PageAnimation>
      <div className="min-h-screen bg-white">
        {/* Navigation - Responsive */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fc834e0e7d61b4d6c8ab3dc57953cf518?format=webp&width=800"
                  alt="LUMORA HUB Logo"
                  className="w-8 h-8"
                />
                <div className="text-xl font-bold text-gray-800">
                  LUMORA HUB
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Home
                </a>
                <a
                  href="/academy"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Academy
                </a>
                <a
                  href="/innovation"
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Innovation
                </a>
              </div>

              {/* Desktop CTA Button */}
              <Button
                className="hidden md:flex bg-brand-blue hover:bg-blue-600 text-white"
                onClick={() => (window.location.href = "/get-started")}
              >
                Get Started
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-brand-blue"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-100">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                  <a
                    href="/"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/academy"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Academy
                  </a>
                  <a
                    href="/innovation"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Innovation
                  </a>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-brand-blue hover:bg-blue-600 text-white"
                      onClick={() => {
                        window.location.href = "/get-started";
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our programs? Need guidance on your learning
              journey? We're here to help you succeed.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600">aether.hub1@gmail.com</p>
                      <p className="text-gray-600">support@aetherhub.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600">+2347025340480</p>
                      <p className="text-gray-600">+22059800142</p>
                      <p className="text-gray-600">+2347068751521</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-lightgreen/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-600">
                        123 Tech Hub Street
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSubjectChange}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="courses">
                          Course Information
                        </SelectItem>
                        <SelectItem value="admissions">
                          Admissions & Enrollment
                        </SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 w-full md:w-auto"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  How do I enroll in a course?
                </h3>
                <p className="text-gray-600">
                  You can enroll by visiting our Get Started page, selecting
                  your preferred course, and completing the enrollment form.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept bank transfers, card payments, and installment plans
                  for all our courses.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Do you offer scholarships?
                </h3>
                <p className="text-gray-600">
                  Yes! Check out our AETHER ADVANTAGE program for scholarship
                  opportunities and mentorship support.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Are courses available online?
                </h3>
                <p className="text-gray-600">
                  Most of our courses are available online with live instruction
                  and recorded sessions for flexibility.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fc834e0e7d61b4d6c8ab3dc57953cf518?format=webp&width=800"
                    alt="LUMORA HUB Logo"
                    className="w-10 h-10"
                  />
                  <div className="text-2xl font-bold text-white">
                    LUMORA HUB
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We're here to help you succeed in your tech journey. Reach out
                  anytime for support and guidance.
                </p>
                <div className="pt-4">
                  <p className="text-gray-500 text-sm">
                    Professional support team available
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="/academy"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Academy
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a
                      href="/innovation"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Innovation Hub
                    </a>
                  </li>
                  <li>
                    <a
                      href="/get-started"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">Contact Info</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-blue" />
                    <span>aether.hub1@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-brand-green" />
                    <span>+2347025340480</span>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      Help Center
                    </a>
                    <span className="mx-2">•</span>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      Terms & Privacy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-12 text-center">
              <p className="text-gray-400">
                &copy; 2024 LUMORA HUB. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* AI Help Chat */}
        <AIHelpChat />
      </div>
    </PageAnimation>
  );
}

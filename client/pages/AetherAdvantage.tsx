import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  GraduationCap,
  MessageCircle,
  Wrench,
  Globe,
  Briefcase,
  Target,
  FileText,
  Search,
  Users,
  Rocket,
  Sparkles,
  Quote,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import AIHelpChat from "@/components/AIHelpChat";

export default function AetherAdvantage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "AETHER ADVANTAGE gave me more than access — it gave me confidence. I went from beginner to hired in just 5 months.",
      author: "Samuel A.",
      role: "Data Analyst Intern",
      avatar: "SA",
    },
    {
      quote:
        "I couldn't afford most programs, but AETHER helped me get in, stay consistent, and graduate with real projects.",
      author: "Mirabel E.",
      role: "Web Developer",
      avatar: "ME",
    },
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Up to 100% course scholarships",
      description: "Full or partial funding for your tech education",
    },
    {
      icon: MessageCircle,
      title: "Monthly 1-on-1 mentorship sessions",
      description: "Personal guidance from industry experts",
    },
    {
      icon: Wrench,
      title: "Project-based learning tracks",
      description: "Build real-world applications and portfolios",
    },
    {
      icon: Globe,
      title: "Access to global virtual internships",
      description: "Remote opportunities with international companies",
    },
    {
      icon: Briefcase,
      title: "Career review & portfolio audit",
      description: "Professional feedback on your career materials",
    },
    {
      icon: Target,
      title: "Featured on our upcoming hiring board",
      description: "Top candidates get priority placement opportunities",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Apply Online",
      description: "Tell us your story and goals",
      icon: FileText,
    },
    {
      number: 2,
      title: "Screening & Review",
      description: "We assess based on passion, need, and potential",
      icon: Search,
    },
    {
      number: 3,
      title: "Get Matched",
      description: "Accepted learners join a relevant course cohort",
      icon: Users,
    },
    {
      number: 4,
      title: "Start Learning",
      description: "Begin your journey with support from AETHER mentors",
      icon: Rocket,
    },
    {
      number: 5,
      title: "Showcase Your Growth",
      description: "Graduate with real-world projects, ready for opportunity",
      icon: Sparkles,
    },
  ];

  const targetAudience = [
    {
      emoji: "🧑‍🎓",
      title: "Students hungry to break into tech",
      description: "Fresh minds ready to learn and grow",
    },
    {
      emoji: "🧕🏽",
      title: "Career changers ready to reinvent themselves",
      description: "Professionals pivoting to technology",
    },
    {
      emoji: "🚀",
      title: "Young professionals looking to scale faster",
      description: "Ambitious individuals seeking acceleration",
    },
    {
      emoji: "💡",
      title: "Self-learners who just need the right push",
      description: "Motivated learners ready for guidance",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              <div className="text-xl font-bold text-gray-800">LUMORA HUB</div>
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
              <a
                href="/lumora-advantage"
                className="text-brand-blue font-medium hover:text-blue-600 transition-colors"
              >
                AETHER ADVANTAGE
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
                <a
                  href="/lumora-advantage"
                  className="block px-3 py-2 text-brand-blue font-medium hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AETHER ADVANTAGE
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
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-lightgreen/20 via-white to-brand-green/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Advantage
              <span className="block text-brand-blue">Begins Here.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Where ambition meets opportunity — AETHER ADVANTAGE is your
              gateway to scholarships, elite mentorship, and skill-building
              programs designed to elevate your tech career.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Whether you're just getting started or seeking to go further, the
              AETHER ADVANTAGE offers more than access — it offers momentum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 text-lg animate-pulse">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 text-lg border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Aether Advantage */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is AETHER ADVANTAGE?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AETHER ADVANTAGE is a special initiative designed to:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Support learners through partial or full scholarships
              </h3>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Provide mentorship from industry experts
              </h3>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-lightgreen/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Unlock access to exclusive workshops, projects, and career prep
                sessions
              </h3>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our goal?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To build a community of high-potential individuals and empower
              them to compete globally in tech.
            </p>
          </div>
        </div>
      </section>

      {/* Who is it For */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who is it For?
            </h2>
            <p className="text-xl text-brand-blue font-semibold">
              We don't just pick the best. We build them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1"
              >
                <div className="text-4xl mb-4">{audience.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-600">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What You Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge className="bg-brand-blue text-white px-6 py-2 text-lg">
              🎯 Bonus: Top candidates get featured on our upcoming hiring
              board.
            </Badge>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
          </div>

          <div className="relative">
            <Card className="p-12 text-center bg-gradient-to-br from-brand-green to-brand-blue text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <Quote className="w-16 h-16 mx-auto mb-8 opacity-80" />
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <cite className="font-bold text-lg block">
                      {testimonials[currentTestimonial].author}
                    </cite>
                    <div className="text-sm opacity-90">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Carousel controls */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length,
                  )
                }
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length,
                  )
                }
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue/20 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8 space-y-6 lg:space-y-0`}
                >
                  <div className="lg:w-1/2">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block w-6 h-6 bg-brand-blue rounded-full border-4 border-white shadow-lg"></div>

                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-brand-blue" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 text-lg">
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to Elevate */}
      <section className="px-6 py-20 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate?</h2>
          <p className="text-xl mb-4">
            No experience? No problem. Just bring the passion.
          </p>
          <p className="text-lg opacity-90 mb-12">
            Join hundreds of learners taking the fast lane into the global tech
            scene with AETHER ADVANTAGE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-brand-charcoal"
            >
              View Eligibility
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Add-on */}
      <section className="px-6 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Need Help?
            <a href="#" className="text-brand-blue hover:underline ml-2">
              View FAQs
            </a>{" "}
            |
            <a href="#" className="text-brand-blue hover:underline ml-2">
              Chat with an Advisor
            </a>
          </p>
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
                <div className="text-2xl font-bold text-white">LUMORA HUB</div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Unlocking opportunities through scholarships and mentorship for
                aspiring tech professionals.
              </p>
              <div className="pt-4">
                <p className="text-gray-500 text-sm">
                  AETHER ADVANTAGE - Your pathway to tech success
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold mb-6 text-lg">Programs</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="/academy"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Academy
                  </a>
                </li>
                <li>
                  <a
                    href="/lumora-advantage"
                    className="hover:text-white transition-colors duration-200"
                  >
                    AETHER ADVANTAGE
                  </a>
                </li>
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
                    Apply Now
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Chat with Advisor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400">
              &copy; 2024 LUMORA HUB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Apply Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <Button className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
          Apply Now
        </Button>
      </div>

      {/* AI Help Chat */}
      <AIHelpChat />
    </div>
  );
}

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronRight,
  BookOpen,
  Building2,
  Users,
  Play,
  ExternalLink,
  Plus,
  Menu,
  X,
} from "lucide-react";
import AIHelpChat from "@/components/AIHelpChat";
import PageAnimation from "@/components/PageAnimation";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <PageAnimation>
      <div className="min-h-screen bg-white">
        {/* Navigation - Transparent & Responsive */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F95cd289e2a7540f08aa477797bfdd222?format=webp&width=800"
                  alt="AETHER HUB Logo"
                  className="w-8 h-8"
                />
                <div className="text-xl font-bold text-gray-800 hidden md:block">
                  AETHER HUB
                </div>
                {isMobileMenuOpen && (
                  <div className="text-xl font-bold text-gray-800 md:hidden transition-all duration-300 ease-in-out">
                    AETHER HUB
                  </div>
                )}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/"
                  className="text-brand-blue font-medium hover:text-blue-600 transition-colors"
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
                    className="block px-3 py-2 text-brand-blue font-medium hover:bg-gray-50 rounded-md"
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
                    href="/aether-advantage"
                    className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
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
        <section className="relative px-6 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tech is the Future and the Future is now!!
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We are idea generators, goal seekers, challenge-driven
                professionals.
              </p>
              <Button
                className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3"
                onClick={() => (window.location.href = "/get-started")}
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Video Play Button */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-blue rounded-full">
                  <Play className="w-5 h-5 text-white ml-1" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    Creative Concept
                  </div>
                  <div className="text-sm text-gray-500">Quality Videos</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - Animated Collage */}
            <div className="relative">
              <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
                {/* Geometric shapes and circles representing the collage */}
                <div className="col-span-2 aspect-square bg-brand-yellow rounded-2xl animate-pulse"></div>
                <div className="aspect-square bg-brand-blue rounded-full animate-bounce"></div>
                <div className="aspect-square bg-gray-800 rounded-full overflow-hidden animate-spin">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop"
                    alt="Tech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-brand-green rounded-full overflow-hidden animate-pulse">
                  <img
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=200&fit=crop"
                    alt="Code"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-brand-blue rounded-full overflow-hidden animate-bounce">
                  <img
                    src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=200&h=200&fit=crop"
                    alt="Data"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-square bg-brand-lightgreen rounded-2xl animate-pulse"></div>
                <div className="aspect-square bg-gray-600 rounded-full overflow-hidden animate-spin">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-brand-yellow rounded-full animate-bounce"></div>
                <div className="aspect-square bg-gray-700 rounded-full overflow-hidden animate-pulse">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop"
                    alt="Learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-brand-blue rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  AETHER HUB = Impact
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AETHER HUB is a learning and innovation-driven platform
                  focused on delivering practical, expert-led tech training. Our
                  programs are designed to empower students, creators, and
                  companies with globally relevant skills.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-brand-blue mb-2">
                      25,000+
                    </div>
                    <div className="text-sm text-gray-600">Trainees</div>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-brand-blue mb-2">
                      70+
                    </div>
                    <div className="text-sm text-gray-600">Cities Reached</div>
                  </CardContent>
                </Card>
                <Card className="p-6 col-span-2">
                  <CardContent className="p-0">
                    <div className="text-lg font-medium text-gray-600">
                      Placements & Internships
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Coming Soon
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-brand-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Education & Training Programs
                </h3>
                <p className="text-gray-600">
                  Expert-led courses designed to empower with globally relevant
                  skills.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-brand-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Business Consulting
                </h3>
                <p className="text-gray-600">
                  Strategic guidance to help businesses thrive in the digital
                  age.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-brand-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Branding & Rebranding
                </h3>
                <p className="text-gray-600">
                  Create powerful brand identities that resonate with your
                  audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROGRAMS Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our hands-on, expert-led courses designed to fast-track
              your tech career.
            </p>
            <Button
              className="bg-brand-blue hover:bg-blue-600 text-white"
              onClick={() => (window.location.href = "/academy")}
            >
              Explore the Academy
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-6 py-16 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">LATEST FROM OUR BLOG</h2>
              <p className="text-lg opacity-90">
                Stay updated with the latest trends and insights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "7 Steps to Become an Advanced Data Analyst",
                  author: "admin",
                  category: "Tech Article",
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
                },
                {
                  title: "What is AGENTIC AI?",
                  author: "admin",
                  category: "Tech Article",
                  image:
                    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
                },
                {
                  title: "Meta Llama 4 Just Dropped: What You Need to Know",
                  author: "admin",
                  category: "Tech Article",
                  image:
                    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
                },
                {
                  title:
                    "How to Pass Microsoft Data Analyst Exam in One Attempt",
                  author: "admin",
                  category: "Tech Article",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
                },
              ].map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {post.author} • {post.category}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="bg-white text-brand-blue hover:bg-gray-100"
                onClick={() => (window.location.href = "/articles")}
              >
                View More Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                We've got you covered, 24/7.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  Will I receive a certificate upon course completion?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you will receive a certificate upon successful completion
                  of your course.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  What's the time commitment?
                </AccordionTrigger>
                <AccordionContent>
                  Our courses are designed to be flexible, typically requiring
                  10-15 hours per month.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  Are there assessments or exams?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we have practical assessments and projects to ensure you
                  master the skills.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  Who do I contact for support?
                </AccordionTrigger>
                <AccordionContent>
                  Our support team is available 24/7 via email and live chat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  How does the course boost my career?
                </AccordionTrigger>
                <AccordionContent>
                  Our courses provide practical skills and industry connections
                  to accelerate your career growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Button className="bg-brand-blue hover:bg-blue-600 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Mentorship Section - White Background */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  AETHER HUB believes mentorship is a powerful tool for personal
                  and professional growth.
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get expert-led guidance with personalized mentorship from
                  industry professionals. Our experts are here to guide you
                  through your tech journey.
                </p>
                <Button
                  className="bg-brand-blue text-white hover:bg-blue-600"
                  onClick={() => (window.location.href = "/innovation")}
                >
                  Meet Our Experts
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=600&h=400&fit=crop"
                  alt="Mentorship and Learning"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="px-6 py-16 bg-gradient-to-r from-brand-blue via-blue-600 to-brand-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="inline-block animate-bounce">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Where Tech Dreams Become Reality
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of learners who have transformed their careers with
              AETHER HUB. Your journey to tech excellence starts with a single
              step.
            </p>
            <div className="mt-8 flex justify-center space-x-8 text-sm opacity-80">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2 animate-pulse"></span>
                25,000+ Success Stories
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-brand-lightgreen rounded-full mr-2 animate-pulse"></span>
                Industry-Leading Curriculum
              </div>
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
                    src="https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F95cd289e2a7540f08aa477797bfdd222?format=webp&width=800"
                    alt="AETHER HUB Logo"
                    className="w-10 h-10"
                  />
                  <div className="text-2xl font-bold text-white">
                    AETHER HUB
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Empowering the next generation of tech professionals with
                  industry-relevant skills and practical training.
                </p>
                <div className="pt-4">
                  <p className="text-gray-500 text-sm">
                    Join 25,000+ learners worldwide
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">Company</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Careers
                    </a>
                  </li>
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
                      href="/innovation"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Our Experts
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">Support</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Privacy Policy
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
            </div>

            <div className="border-t border-gray-800 pt-8 mt-12 text-center">
              <p className="text-gray-400">
                &copy; 2024 AETHER HUB. All rights reserved.
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

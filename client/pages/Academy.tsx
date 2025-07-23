import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Star,
  CheckCircle,
  Trophy,
  Users,
  Calendar,
  Clock,
  Menu,
  X,
} from "lucide-react";
import AIHelpChat from "@/components/AIHelpChat";
import PageAnimation from "@/components/PageAnimation";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function Academy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courses = {
    dataAnalytics: [
      {
        id: "data-combo",
        title: "Data Analytics Combo",
        level: "Beginner",
        levelColor: "bg-green-500",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2Ff4fbbb16028b4733bbea03df215f8208?format=webp&width=800",
        description:
          "Excel for Analytics, Power BI Basics, SQL Fundamentals, MySQL Basics, Data Presentation, Personal Branding",
        duration: "8 weeks",
        mode: "Virtual",
        originalPrice: "₦80,000",
        price: "₦60,000",
        features: [
          "Excel Analytics",
          "Power BI Basics",
          "SQL & MySQL Fundamentals",
          "Presentation Skills",
        ],
      },
      {
        id: "data-mastery",
        title: "Digital Marketing",
        level: "Beginner to Intermediate",
        levelColor: "bg-blue-500",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F2359ed48cba2445c86732c1b7a1b7024?format=webp&width=800",
        description:
          "Social Media Marketing, Content Creation, SEO Basics, Google Ads, Email Marketing, Brand Strategy, Digital Analytics",
        duration: "10 weeks",
        mode: "Virtual",
        originalPrice: "₦100,000",
        price: "₦80,000",
        features: [
          "Social Media Strategy",
          "Content Marketing",
          "SEO & Google Ads",
          "Email Campaigns",
        ],
      },
      {
        id: "sales-analysis",
        title: "Data Analysis/Advance",
        level: "Advanced",
        levelColor: "bg-red-500",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F52b00b8c56b74003bb3a49ec893364f9?format=webp&width=800",
        description:
          "Advanced Excel, Power BI Mastery, SQL Advanced, MySQL Database Management, MCDA Exam Prep 12 weeks Virtual Advanced Excel Power BI Mastery SQL & MySQL Advanced",
        duration: "12 weeks",
        mode: "Virtual",
        originalPrice: "₦150,000",
        price: "₦120,000",
        features: [
          "Advanced Excel Mastery",
          "Power BI Professional",
          "SQL & MySQL Advanced",
          "MCDA Exam Preparation",
        ],
      },
    ],
    webDevelopment: [
      {
        id: "web-essentials",
        title: "Web Dev Essentials",
        level: "Beginner",
        levelColor: "bg-green-500",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F78e6d7a6d371466e9d5dfff0cb45a68b?format=webp&width=800",
        description:
          "HTML, CSS, Page Structure, Responsive Layouts, Hosting & Deployment Basics",
        duration: "8 weeks",
        mode: "Virtual",
        originalPrice: "₦80,000",
        price: "₦60,000",
        features: [
          "HTML & CSS",
          "Responsive Design",
          "Basic Hosting",
          "Project Portfolio",
        ],
      },
      {
        id: "frontend-js",
        title: "Frontend Development (JavaScript)",
        level: "Beginner to Intermediate",
        levelColor: "bg-yellow-500",
        image:
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
        description:
          "JS (ES6+), DOM, Git & GitHub, Flexbox, Grid Layouts, APIs (Basic Fetch)",
        duration: "10 weeks",
        mode: "Virtual",
        originalPrice: "₦100,000",
        price: "₦80,000",
        features: [
          "Modern JavaScript",
          "Git & GitHub",
          "CSS Grid & Flexbox",
          "API Integration",
        ],
      },
      {
        id: "fullstack",
        title: "Full Stack Web Development",
        level: "Advanced",
        levelColor: "bg-red-500",
        image:
          "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop",
        description:
          "ReactJS, Node.js & Express, MongoDB/SQL, REST APIs & Authentication, Deployment",
        duration: "16 weeks",
        mode: "Virtual",
        originalPrice: "₦150,000",
        price: "₦120,000",
        features: [
          "React Development",
          "Backend with Node.js",
          "Database Design",
          "Full Deployment",
        ],
      },
    ],
    videoEditing: [
      {
        id: "capcut-mastery",
        title: "CapCut Video Editing Mastery",
        level: "Beginner-Advanced",
        levelColor: "bg-green-500",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F5aabd9e522c541a0af345580914b16ca?format=webp&width=800",
        description:
          "CapCut Interface, Trimming, Audio Sync, Subtitles, Transitions, TikTok/Reels Optimization",
        duration: "6 weeks",
        mode: "Virtual",
        originalPrice: "₦60,000",
        price: "₦50,000",
        features: [
          "Mobile & Desktop CapCut",
          "Advanced Effects",
          "Social Media Optimization",
          "Text Animation",
        ],
      },
    ],
    comingSoon: [
      {
        id: "sales-data-analysis",
        title: "Sales Data Analysis",
        level: "Coming Soon",
        levelColor: "bg-orange-500",
        isComingSoon: true,
      },
      {
        id: "after-effects",
        title: "Motion Animation (Adobe After Effects)",
        level: "Coming Soon",
        levelColor: "bg-orange-500",
        isComingSoon: true,
      },
      {
        id: "blender",
        title: "Motion Animation (Blender)",
        level: "Coming Soon",
        levelColor: "bg-orange-500",
        isComingSoon: true,
      },
    ],
  };

  const CourseCard = ({ course }: { course: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        {course.isComingSoon ? (
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
            <div className="text-center">
              <Badge className="bg-orange-500 text-white mb-2 animate-pulse">
                Coming Soon
              </Badge>
              <div className="text-orange-600 font-medium">Stay Tuned!</div>
            </div>
          </div>
        ) : (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <Badge
          className={`absolute top-3 left-3 text-white ${course.levelColor}`}
        >
          {course.level}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
          {course.title}
        </h3>

        {!course.isComingSoon && (
          <>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {course.description}
            </p>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {course.mode}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {course.features
                ?.slice(0, 3)
                .map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                {course.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {course.originalPrice}
                  </span>
                )}
                <div className="text-2xl font-bold text-brand-blue">
                  {course.price}
                </div>
              </div>
              <Button
                className="bg-brand-blue hover:bg-blue-600 text-white"
                onClick={() => (window.location.href = "/get-started")}
              >
                Enroll Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </>
        )}

        {course.isComingSoon && (
          <div className="text-center py-4">
            <p className="text-gray-600 mb-4">
              Advanced motion graphics and animation training
            </p>
            <Button variant="outline" disabled>
              Notify Me
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

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
                  src="https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F95cd289e2a7540f08aa477797bfdd222?format=webp&width=800"
                  alt="AETHER HUB Logo"
                  className="w-8 h-8"
                />
                <div className="text-xl font-bold text-gray-800">
                  AETHER HUB
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
                  className="text-brand-blue font-medium hover:text-blue-600 transition-colors"
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
                    className="block px-3 py-2 text-brand-blue font-medium hover:bg-gray-50 rounded-md"
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
        <section className="relative px-6 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your <span className="text-brand-blue italic">Journey</span>
                <br />
                to Mastery Begins Here
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Break into tech. Build your skills. Land your dream job. At{" "}
                <strong>AETHER HUB</strong>, we don't just teach—we mentor,
                guide, and equip you with future-ready skills for real-world
                impact. From mastering tools like SQL, Power BI, ReactJS, or
                CapCut to building professional portfolios, your transformation
                starts here.
              </p>

              {/* Highlights */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    25,000+ Trained Globally
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">4.9/5 Average Rating</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-brand-blue" />
                <span className="text-gray-700">
                  Hands-on Projects & Real-World Capstones
                </span>
              </div>

              <Button
                className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 mt-6"
                onClick={() => {
                  const coursesSection =
                    document.querySelector("#courses-section");
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Hero Visual - Animated */}
            <div className="relative">
              <div className="grid grid-cols-4 gap-2 max-w-md mx-auto mb-4">
                <div className="col-span-2 aspect-square bg-brand-yellow rounded-2xl animate-pulse"></div>
                <div className="aspect-square bg-brand-blue rounded-full animate-bounce"></div>
                <div className="aspect-square bg-gray-800 rounded-full animate-spin overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop"
                    alt="Education"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-brand-green rounded-full animate-pulse overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop"
                    alt="Learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-brand-blue rounded-full animate-bounce overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=200&h=200&fit=crop"
                    alt="Coding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-square bg-brand-lightgreen rounded-2xl animate-pulse"></div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-4 right-0 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-blue">
                      25000+
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <span className="text-2xl font-bold text-brand-blue">
                        4.9
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Training Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F19bd3359cf6f4906a345f3f2c964b093?format=webp&width=800"
                alt="Professional Training"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-blue leading-tight">
                Elevate Your Career With Our Professional Training
              </h2>
              <p className="text-gray-600 leading-relaxed">
                As industry tech demands continue to shape today, we are
                uniquely positioned and built to provide that super-advanced
                business skills you deserve for an ever-upgrading marketplace. A
                tech boost offered by an expert driven facility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Discover the tech and become a strong <strong>"OGETHER"</strong>
                . This is practically planning, supervising, and employing
                business initiatives, whether individual, or by organization,
                proficient and skills and the time of work.
              </p>
            </div>
          </div>
        </section>

        {/* Our Courses Section */}
        <section id="courses-section" className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                Our Courses
              </h2>
            </div>

            {/* Data Analytics Track */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                📊 DATA ANALYTICS TRACK
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {courses.dataAnalytics.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Web Development Track */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                💻 WEB DEVELOPMENT TRACK
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {courses.webDevelopment.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Video Editing Track */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                🎬 CAPCUT VIDEO EDITING
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {courses.videoEditing.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Coming Soon */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                🧪 Coming Soon
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {courses.comingSoon.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-brand-blue text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Future Starts Here</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't wait to unlock your potential.
            </p>
            <Button
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3"
              onClick={() => (window.location.href = "/get-started")}
            >
              Enroll Today
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
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
                  Your gateway to professional tech education and career
                  advancement.
                </p>
                <div className="pt-4">
                  <p className="text-gray-500 text-sm">
                    Industry-certified training programs
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">Courses</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="#courses-section"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Data Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses-section"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses-section"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Video Editing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/get-started"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Enroll Now
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

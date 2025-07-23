import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  MapPin,
  Building2,
  Users,
  FileText,
  Globe,
  Star,
  Quote,
  Briefcase,
  Calendar,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import AIHelpChat from "@/components/AIHelpChat";
import PageAnimation from "@/components/PageAnimation";

export default function Innovation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amara Adebayo",
      role: "Data Analyst",
      initials: "AA",
      quote: "I started with AETHER HUB in March, completely new to Data Analysis. Through their comprehensive training program, I learned Excel, Power BI, and SQL. The instructors were incredibly supportive, and the hands-on approach made complex concepts easy to understand. Today, I'm confident in my data analysis skills and ready to take on new challenges in the field.",
      gradient: "from-green-500 via-teal-500 to-blue-600"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      initials: "MR",
      quote: "AETHER HUB transformed my career completely. The React and Node.js bootcamp was intensive but incredibly rewarding. The real-world projects and mentorship from industry experts gave me the confidence to land my dream job. The curriculum is up-to-date with the latest technologies and industry standards.",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "UX/UI Designer",
      initials: "SC",
      quote: "The UX/UI design program at AETHER HUB exceeded my expectations. From wireframing to prototyping, I learned industry-standard tools like Figma and Adobe Creative Suite. The portfolio projects I built during the course directly helped me secure interviews at top tech companies. The community support is outstanding.",
      gradient: "from-orange-500 via-red-500 to-pink-600"
    },
    {
      id: 4,
      name: "David Okonkwo",
      role: "Digital Marketing Specialist",
      initials: "DO",
      quote: "AETHER HUB's digital marketing course opened up a whole new world for me. I learned everything from SEO and content marketing to social media strategy and analytics. The practical assignments and real client projects gave me hands-on experience that traditional courses lack. I now run my own digital marketing agency.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const featuredCities = [
    {
      name: "Lagos",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Nigeria's tech capital",
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      description: "European fintech hub",
    },
    {
      name: "New York",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
      description: "Global business center",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      description: "Innovation capital",
    },
  ];

  const jobListings = [
    {
      title: "Frontend Developer at Astra Tech",
      location: "Lagos, Nigeria",
      type: "Full-time",
      company: "Astra Tech",
      logo: "AT",
    },
    {
      title: "Data Analyst at DataCorp",
      location: "New York, United States",
      type: "Remote",
      company: "DataCorp",
      logo: "DC",
    },
    {
      title: "UX Designer at Creative Solutions",
      location: "London, United Kingdom",
      type: "Contract",
      company: "Creative Solutions",
      logo: "CS",
    },
    {
      title: "Backend Engineer at TechFlow",
      location: "Remote",
      type: "Full-time",
      company: "TechFlow",
      logo: "TF",
    },
  ];

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
                  className="text-gray-700 hover:text-brand-blue transition-colors"
                >
                  Academy
                </a>
                <a
                  href="/innovation"
                  className="text-brand-blue font-medium hover:text-blue-600 transition-colors"
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
                    className="block px-3 py-2 text-brand-blue font-medium hover:bg-gray-50 rounded-md"
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
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue leading-tight">
                Build your Team with Industry-trained Tech Professionals
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're starting out or leveling up, AETHER HUB equips
                you with practical, real-world skills in Data Analytics, Web
                Development, Digital Marketing, and more — all led by seasoned
                professionals.
              </p>
              <Button
                className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3"
                onClick={() => {
                  window.location.href = "/academy#courses";
                }}
              >
                Explore Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse Courses by Keyword or Category
              </h2>
              <p className="text-lg text-gray-600">
                Find the perfect course to advance your tech career
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Course Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="data-analytics">Data Analytics</SelectItem>
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="digital-marketing">
                    Digital Marketing
                  </SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                </SelectContent>
              </Select>
              <Button
                className={`transition-all duration-200 ${
                  searchQuery.trim() || selectedCategory
                    ? 'bg-brand-blue hover:bg-blue-600 shadow-lg'
                    : 'bg-brand-blue hover:bg-blue-600'
                }`}
                onClick={() => {
                  if (searchQuery.trim() || selectedCategory) {
                    // Redirect to academy page with search parameters
                    const params = new URLSearchParams();
                    if (searchQuery.trim())
                      params.append("search", searchQuery);
                    if (selectedCategory)
                      params.append("category", selectedCategory);
                    window.location.href = `/academy?${params.toString()}#courses`;
                  } else {
                    window.location.href = "/academy#courses";
                  }
                }}
              >
                {searchQuery.trim() || selectedCategory ? 'Search Courses' : 'Browse All'}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Active Search Status */}
            {(searchQuery.trim() || selectedCategory) && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-800">
                    <Search className="w-4 h-4 mr-2" />
                    <span className="font-medium">Active Search:</span>
                    {searchQuery.trim() && (
                      <Badge variant="secondary" className="ml-2">
                        "{searchQuery}"
                      </Badge>
                    )}
                    {selectedCategory && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedCategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("");
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-gray-600 mb-4">Popular Tags:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Beginner Data Analysis",
                  "Full Stack Web Dev",
                  "Social Media Strategy",
                  "UI/UX Design",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-brand-blue hover:text-white transition-colors duration-200"
                    onClick={() => {
                      setSearchQuery(tag);
                      // Auto-set category based on tag
                      if (tag.includes("Data Analysis")) {
                        setSelectedCategory("data-analytics");
                      } else if (tag.includes("Web Dev")) {
                        setSelectedCategory("web-dev");
                      } else if (tag.includes("Social Media")) {
                        setSelectedCategory("digital-marketing");
                      } else if (tag.includes("UI/UX")) {
                        setSelectedCategory("ui-ux");
                      }
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon: Start Hiring */}
        <section className="px-6 py-16 relative">
          <div className="absolute inset-0 bg-gray-100 opacity-60"></div>
          <div className="max-w-7xl mx-auto text-center relative">
            <Badge className="mb-4 bg-orange-500 text-white">Coming Soon</Badge>
            <h2 className="text-3xl font-bold text-gray-500 mb-6">
              Hire Aether-trained Talents
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              We're building the future of tech hiring. Soon, you'll be able to
              connect with our top-performing trainees who are ready to add
              value to your team.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center opacity-60">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                  Free Resume Bank Access
                </h3>
                <p className="text-gray-400">
                  Browse pre-screened candidate profiles
                </p>
              </div>

              <div className="text-center opacity-60">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                  Certified Tech-Savvy Talents
                </h3>
                <p className="text-gray-400">
                  Industry-verified skills and certifications
                </p>
              </div>

              <div className="text-center opacity-60">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                  Remote-Ready & Globally Competitive
                </h3>
                <p className="text-gray-400">
                  Trained for modern work environments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AETHER HUB */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why AETHER HUB?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AETHER HUB, we don't just teach — we mentor, guide, and prepare
              learners for real-world challenges. Our curriculum is hands-on and
              industry-aligned, focusing on both foundational skills and
              advanced techniques. Whether you're just starting or looking to
              specialize, our expert-led programs are designed to help you
              thrive in the global tech space.
            </p>
          </div>
        </section>

        {/* Jobs - Coming Soon */}
        <section className="px-6 py-16 relative">
          <div className="absolute inset-0 bg-gray-100 opacity-60"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-500 text-white">
                Coming Soon
              </Badge>
              <h2 className="text-3xl font-bold text-gray-500 mb-4">
                Explore Global Job Opportunities
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                We're working on exciting partnerships to connect our graduates
                with remote-friendly roles across borders. Stay tuned!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 opacity-60">
              {jobListings.map((job, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500 font-bold text-sm">
                            {job.logo}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-500 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {job.company}
                          </p>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-gray-400">
                        {job.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-4">
                  Featured Cities
                </h2>
                <p className="text-lg text-gray-600">
                  Our students are joining us from across the world. From Lagos
                  to London, we're building a global tech community.
                </p>
              </div>
              <a href="#" className="text-brand-blue hover:underline">
                SEE ALL LOCATIONS
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCities.map((city, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                        <p className="text-sm opacity-90 mb-4">
                          {city.description}
                        </p>
                        <div className="flex items-center text-xs opacity-75">
                          <MapPin className="w-3 h-3 mr-1" />
                          {city.name}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Employers - Coming Soon */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500 text-white">Coming Soon</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Employers
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We're connecting with top companies around the world to open doors
              for our best learners. Aether-trained professionals will soon be
              found in some of the most exciting tech companies globally.
            </p>

            <div className="grid md:grid-cols-4 gap-8 opacity-60">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="p-6 bg-white rounded-lg border">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Slideshow */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Student Success Stories
              </h2>
              <p className="text-lg text-gray-600">Hear from our graduates who transformed their careers</p>
            </div>

            <div className="relative">
              {/* Main Testimonial Card */}
              <Card className={`p-12 text-center bg-gradient-to-br ${testimonials[currentTestimonial].gradient} text-white relative overflow-hidden transition-all duration-500 ease-in-out`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <Quote className="w-16 h-16 mx-auto mb-8 opacity-80" />
                  <blockquote className="text-2xl font-medium mb-8 leading-relaxed max-w-4xl mx-auto min-h-[120px] flex items-center justify-center">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">{testimonials[currentTestimonial].initials}</span>
                    </div>
                    <div className="text-left">
                      <cite className="font-bold text-lg block">
                        {testimonials[currentTestimonial].name}
                      </cite>
                      <div className="text-sm opacity-90">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial
                        ? 'bg-brand-blue scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 max-w-md mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-brand-blue h-1 rounded-full transition-all duration-200 ease-linear"
                    style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{currentTestimonial + 1} of {testimonials.length}</span>
                  <span>Auto-rotating every 5s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="px-6 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Experts
              </h2>
              <div className="w-16 h-1 bg-brand-blue mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our industry experts bring years of real-world experience to
                guide you through your tech journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Mc-Vester Okoh",
                  role: "Brand Strategist",
                  expertise: "Adobe After Effects, Power BI & My SQL",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
                },
                {
                  name: "Abdul Kader",
                  role: "Senior Full Stack Developer",
                  expertise: "React, Node.js, Blender Animations",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
                },
                {
                  name: "Duke Diamond",
                  role: "Video Editor",
                  expertise: "Filmmaker, Mobile Videographer, Cinematographer",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
                },
              ].map((expert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white border-0 shadow-md"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-brand-blue font-semibold mb-2">
                      {expert.role}
                    </p>
                    <p className="text-gray-600 mb-3 text-sm">
                      {expert.expertise}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="bg-brand-blue hover:bg-blue-600 text-white"
                onClick={() => (window.location.href = "/contact")}
              >
                Connect with Our Experts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Callout */}
        <section className="px-6 py-16 bg-brand-blue text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Be the First to Know About New Courses & Opportunities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Sign up to stay informed about course launches, scholarships, and
              job updates (when hiring opens).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                id="newsletter-email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900"
              />
              <Button
                className="bg-white text-brand-blue hover:bg-gray-100"
                onClick={() => {
                  const email = (
                    document.getElementById(
                      "newsletter-email",
                    ) as HTMLInputElement
                  )?.value;
                  if (email) {
                    const subject = "Newsletter Subscription from AETHER HUB";
                    const body = `Hi AETHER HUB Team,\n\nI would like to subscribe to your newsletter with the email: ${email}\n\nThank you!`;
                    window.location.href = `mailto:aether.hub1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  } else {
                    alert("Please enter your email address");
                  }
                }}
              >
                Subscribe
              </Button>
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
                  Building the future workforce with expert-led training and
                  industry connections.
                </p>
                <div className="pt-4">
                  <p className="text-gray-500 text-sm">
                    Connect with industry professionals
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">
                  Available Courses
                </h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="/academy"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Data Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="/academy"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/academy"
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
                      Start Learning
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold mb-6 text-lg">Connect</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Contact Our Experts
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
                      Terms of Use
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

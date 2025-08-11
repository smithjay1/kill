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
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  // Course mapping for direct navigation
  const courseMapping: { [key: string]: string } = {
    "data analysis": "/academy#data-analytics-course",
    "data analytics": "/academy#data-analytics-course",
    "beginner data analysis": "/academy#data-analytics-course",
    python: "/academy#python-programming-course",
    "python programming": "/academy#python-programming-course",
    "web development": "/academy#web-development-course",
    "web dev": "/academy#web-development-course",
    "full stack": "/academy#full-stack-course",
    "full stack web dev": "/academy#full-stack-course",
    react: "/academy#react-development-course",
    "react development": "/academy#react-development-course",
    "digital marketing": "/academy#digital-marketing-course",
    "social media": "/academy#social-media-course",
    "social media strategy": "/academy#social-media-course",
    "ui/ux": "/academy#ui-ux-design-course",
    "ui/ux design": "/academy#ui-ux-design-course",
    "video editing": "/academy#video-editing-course",
    design: "/academy#ui-ux-design-course",
  };

  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/aetherhu.b?igsh=Yml3bHRuOXhnNzlv",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@aetherhub?_t=ZM-8yGVyccKg3a&_r=1",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-.843c-.869-.8-1.373-1.65-1.492-2.748C16.076 1.321 15.734 1 15.346 1h-3.188c-.388 0-.73.321-.904.713-.174.392-.174.849 0 1.241.174.392.516.713.904.713h1.242c.388 0 .73-.321.904-.713.087-.196.087-.425 0-.621-.087-.196-.26-.367-.456-.465-.087-.044-.174-.088-.261-.131.087.044.174.087.261.131.196.098.369.269.456.465.087.196.087.425 0 .621-.174.392-.516.713-.904.713h-1.242c-.388 0-.73-.321-.904-.713-.174-.392-.174-.849 0-1.241.174-.392.516-.713.904-.713h3.188c.388 0 .73.321.776.713.119 1.098.623 1.948 1.492 2.748.391.361.826.656 1.138.843.156.094.304.177.443.258z" />
        </svg>
      ),
      color: "bg-black hover:bg-gray-800",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/16ytqLvCdi/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@aetherhu.b",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.742-1.756-.4-.46-.962-.693-1.67-.693-.744.057-1.39.353-1.916.882-.526.529-.96 1.299-1.292 2.282l-1.943-.493c.48-1.454 1.119-2.631 1.914-3.527 1.038-1.174 2.326-1.746 3.94-1.746 1.043 0 1.922.278 2.616.825.758.6 1.314 1.47 1.651 2.58.337 1.11.337 2.474.337 4.043v.343c0 .573.016 1.04.048 1.401.032.36.08.63.144.808.128.356.384.534.768.534.212 0 .407-.035.584-.106.177-.07.337-.175.48-.313.143-.138.27-.305.38-.5.233-.413.233-.853.233-1.32v-.686l.035-.52c.083-1.19.42-2.218 1.009-3.084.589-.866 1.455-1.614 2.598-2.244l.765 1.741c-.835.459-1.478 1.027-1.928 1.705-.33.497-.517 1.048-.561 1.653 1.063.388 1.928 1.018 2.598 1.889.67.871 1.006 1.94 1.009 3.207.002 1.267-.334 2.4-1.009 3.4-.675 1-1.676 1.832-3.004 2.497-1.328.665-2.956.998-4.884 1H12.181Z" />
        </svg>
      ),
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/aetherhub_?t=wL5bW_skxV7EFQ3C6xTbag&s=09",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "bg-gray-900 hover:bg-black",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Amara Adebayo",
      role: "Data Analyst",
      initials: "AA",
      quote:
        "I started with LUMORA HUB in March, completely new to Data Analysis. Through their comprehensive training program, I learned Excel, Power BI, and SQL. The instructors were incredibly supportive, and the hands-on approach made complex concepts easy to understand. Today, I'm confident in my data analysis skills and ready to take on new challenges in the field.",
      gradient: "from-green-500 via-teal-500 to-blue-600",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      initials: "MR",
      quote:
        "LUMORA HUB transformed my career completely. The React and Node.js bootcamp was intensive but incredibly rewarding. The real-world projects and mentorship from industry experts gave me the confidence to land my dream job. The curriculum is up-to-date with the latest technologies and industry standards.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "UX/UI Designer",
      initials: "SC",
      quote:
        "The UX/UI design program at LUMORA HUB exceeded my expectations. From wireframing to prototyping, I learned industry-standard tools like Figma and Adobe Creative Suite. The portfolio projects I built during the course directly helped me secure interviews at top tech companies. The community support is outstanding.",
      gradient: "from-orange-500 via-red-500 to-pink-600",
    },
    {
      id: 4,
      name: "David Okonkwo",
      role: "Digital Marketing Specialist",
      initials: "DO",
      quote:
        "LUMORA HUB's digital marketing course opened up a whole new world for me. I learned everything from SEO and content marketing to social media strategy and analytics. The practical assignments and real client projects gave me hands-on experience that traditional courses lack. I now run my own digital marketing agency.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    },
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
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
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
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=300&fit=crop",
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F7c2a5a6ba5504317888722f3a307de45?format=webp&width=800"
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
                Whether you're starting out or leveling up, LUMORA HUB equips
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
                    ? "bg-brand-blue hover:bg-blue-600 shadow-lg"
                    : "bg-brand-blue hover:bg-blue-600"
                }`}
                onClick={() => {
                  if (searchQuery.trim()) {
                    const searchKey = searchQuery.toLowerCase().trim();
                    const directCourse = courseMapping[searchKey];

                    if (directCourse) {
                      // Redirect to specific course
                      window.location.href = directCourse;
                    } else {
                      // Fallback to general academy search
                      const params = new URLSearchParams();
                      params.append("search", searchQuery);
                      if (selectedCategory)
                        params.append("category", selectedCategory);
                      window.location.href = `/academy?${params.toString()}#courses`;
                    }
                  } else if (selectedCategory) {
                    // Category only search
                    const params = new URLSearchParams();
                    params.append("category", selectedCategory);
                    window.location.href = `/academy?${params.toString()}#courses`;
                  } else {
                    window.location.href = "/academy#courses";
                  }
                }}
              >
                {searchQuery.trim() || selectedCategory
                  ? "Search Courses"
                  : "Browse All"}
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
                        {selectedCategory
                          .replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
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
                  "Python Programming",
                  "React Development",
                  "Digital Marketing",
                  "Video Editing",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-brand-blue hover:text-white transition-colors duration-200"
                    onClick={() => {
                      const tagKey = tag.toLowerCase();
                      const directCourse = courseMapping[tagKey];

                      if (directCourse) {
                        // Direct navigation to specific course
                        window.location.href = directCourse;
                      } else {
                        // Fallback to search functionality
                        setSearchQuery(tag);
                        // Auto-set category based on tag
                        if (
                          tag.includes("Data Analysis") ||
                          tag.includes("Python")
                        ) {
                          setSelectedCategory("data-analytics");
                        } else if (
                          tag.includes("Web Dev") ||
                          tag.includes("React")
                        ) {
                          setSelectedCategory("web-dev");
                        } else if (
                          tag.includes("Social Media") ||
                          tag.includes("Digital Marketing")
                        ) {
                          setSelectedCategory("digital-marketing");
                        } else if (
                          tag.includes("UI/UX") ||
                          tag.includes("Video Editing")
                        ) {
                          setSelectedCategory("ui-ux");
                        }
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

        {/* Why LUMORA HUB */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why LUMORA HUB?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At LUMORA HUB, we don't just teach — we mentor, guide, and prepare
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
              <p className="text-lg text-gray-600">
                Hear from our graduates who transformed their careers
              </p>
            </div>

            <div className="relative">
              {/* Main Testimonial Card */}
              <Card
                className={`p-12 text-center bg-gradient-to-br ${testimonials[currentTestimonial].gradient} text-white relative overflow-hidden transition-all duration-500 ease-in-out`}
              >
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
                      <span className="text-lg font-bold">
                        {testimonials[currentTestimonial].initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <cite className="font-bold text-lg block">
                        {testimonials[currentTestimonial].name}
                      </cite>
                      <div className="text-sm opacity-90">
                        {testimonials[currentTestimonial].role}
                      </div>
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
                        ? "bg-brand-blue scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
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
                    style={{
                      width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-center text-sm text-gray-500 mt-2">
                  <span>
                    {currentTestimonial + 1} of {testimonials.length}
                  </span>
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
                    "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F9a2186739dc1499997f117387b212bcb?format=webp&width=800",
                },
                {
                  name: "Abdul Kader",
                  role: "Senior Full Stack Developer",
                  expertise: "React, Node.js, Blender Animations",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2Ff048146412be432ebe7cd4424bb48430?format=webp&width=800",
                },
                {
                  name: "Duke Diamond",
                  role: "Video Editor",
                  expertise: "Filmmaker, Mobile Videographer, Cinematographer",
                  image:
                    "https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F68cafca719744e5da6deff45cbcf8c08?format=webp&width=800",
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
                placeholder="example@gmail.com"
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
                    setShowSocialMedia(true);
                  } else {
                    alert("Please enter your email address");
                  }
                }}
              >
                Subscribe
              </Button>
            </div>

            {/* Social Media Selection */}
            {showSocialMedia && (
              <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg relative">
                <button
                  onClick={() => setShowSocialMedia(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  Choose Your Platform
                </h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  Select which social media platform you'd like to follow us on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialMediaLinks.map((social) => (
                    <Button
                      key={social.name}
                      className={`${social.color} text-white transition-all duration-200 hover:scale-105 text-sm py-2`}
                      onClick={() => {
                        window.open(social.url, "_blank");
                        setShowSocialMedia(false);
                      }}
                    >
                      <span className="mr-2">{social.icon}</span>
                      {social.name}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3"
                  onClick={() => setShowSocialMedia(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2F7c2a5a6ba5504317888722f3a307de45?format=webp&width=800"
                    alt="LUMORA HUB Logo"
                    className="w-10 h-10"
                  />
                  <div className="text-2xl font-bold text-white">
                    LUMORA HUB
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

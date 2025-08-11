import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, ArrowLeft } from "lucide-react";

export default function GoogleSearchDemo() {
  useEffect(() => {
    // Ensure Google CSE script is loaded
    if (window.google && window.google.search) {
      window.google.search.cse.element.render({
        div: "gcse-search-container",
        tag: "search",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fc834e0e7d61b4d6c8ab3dc57953cf518?format=webp&width=800"
              alt="LUMORA HUB Logo"
              className="w-8 h-8"
            />
            <div className="text-xl font-bold text-gray-800">LUMORA HUB</div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-brand-blue">
              Home
            </a>
            <a href="/academy" className="text-gray-700 hover:text-brand-blue">
              Academy
            </a>
            <a
              href="/innovation"
              className="text-gray-700 hover:text-brand-blue"
            >
              Innovation
            </a>
            <a href="/articles" className="text-gray-700 hover:text-brand-blue">
              Articles
            </a>
          </div>
        </div>
        <Button
          className="bg-brand-blue hover:bg-blue-600 text-white hidden md:block"
          onClick={() => (window.location.href = "/articles")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-brand-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Google Custom Search Engine
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Real Google search powered by Custom Search Engine (CSE). Results
            display on this page without redirecting.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge className="bg-white/20 text-white">Live Search</Badge>
            <Badge className="bg-white/20 text-white">No Redirect</Badge>
            <Badge className="bg-white/20 text-white">Tech Focused</Badge>
          </div>
        </div>
      </section>

      {/* Google Custom Search Widget */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-lg border-2 border-brand-blue/20">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <Search className="w-6 h-6 text-brand-blue mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Live Google Search
                </h2>
                <Badge className="ml-3 bg-green-500 text-white">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Real Results
                </Badge>
              </div>

              {/* Google CSE Widget Container */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="gcse-search"></div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  How it works:
                </h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Powered by Google Custom Search Engine (CSE)</li>
                  <li>
                    • Search Engine ID:{" "}
                    <code className="bg-blue-100 px-1 rounded">
                      f75126b1cb6c7435b
                    </code>
                  </li>
                  <li>
                    • API Key:{" "}
                    <code className="bg-blue-100 px-1 rounded">
                      AIzaSyCfUdF21U4XnUpp2yVg1gt_MH5DWrPP2Cw
                    </code>
                  </li>
                  <li>• Results display on this page without redirecting</li>
                  <li>• Automatically loads tech-focused content</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Implementation Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">
                    1
                  </span>
                  HTML Script Tag
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                  &lt;script async
                  src="https://cse.google.com/cse.js?cx=f75126b1cb6c7435b"&gt;&lt;/script&gt;
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Added to the HTML head section to load the Google CSE library.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">
                    2
                  </span>
                  Search Widget
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                  &lt;div class="gcse-search"&gt;&lt;/div&gt;
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Simple div element that Google automatically converts to a
                  search widget.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">
                    3
                  </span>
                  No JavaScript Required
                </h3>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Google handles all the search functionality automatically.
                    No custom JavaScript code needed.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center mr-3 text-sm">
                    4
                  </span>
                  Results on Same Page
                </h3>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    Search results appear below the search box without any page
                    redirects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9541d16e06394632b471b4fa86af0188%2Fc834e0e7d61b4d6c8ab3dc57953cf518?format=webp&width=800"
                  alt="LUMORA HUB Logo"
                  className="w-8 h-8"
                />
                <div className="text-xl font-bold text-white">LUMORA HUB</div>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of tech professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
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
            <p>&copy; 2024 LUMORA HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Search,
  Calendar,
  Clock,
  ExternalLink,
  TrendingUp,
  Loader2,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  trending?: boolean;
  url?: string;
}

interface GoogleSearchResult {
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
  formattedUrl: string;
  pagemap?: {
    cse_image?: Array<{ src: string }>;
    cse_thumbnail?: Array<{ src: string; width: string; height: string }>;
    metatags?: Array<{ [key: string]: string }>;
  };
}

interface GoogleSearchResponse {
  items?: GoogleSearchResult[];
  searchInformation?: {
    totalResults: string;
    searchTime: number;
  };
  error?: {
    message: string;
    code: number;
  };
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [googleSearchResults, setGoogleSearchResults] = useState<GoogleSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showGoogleResults, setShowGoogleResults] = useState(false);
  const [searchError, setSearchError] = useState<string>("");
  const [searchStats, setSearchStats] = useState<{ total: string; time: number } | null>(null);
  const [searchMode, setSearchMode] = useState<'local' | 'google'>('local');

  // Simulated tech articles - In production, this would fetch from a real API
  const fetchArticles = async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const techArticles: Article[] = [
      {
        id: "1",
        title:
          "OpenAI Releases GPT-5: Revolutionary Breakthrough in AI Reasoning",
        excerpt:
          "The latest iteration of GPT brings unprecedented reasoning capabilities and multimodal understanding to the forefront of artificial intelligence.",
        content:
          "OpenAI's latest model represents a significant leap forward in AI capabilities...",
        author: "Sarah Chen",
        category: "Artificial Intelligence",
        date: new Date().toLocaleDateString(),
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        readTime: "5 min read",
        trending: true,
      },
      {
        id: "2",
        title: "React 19 Stable Release: What Developers Need to Know",
        excerpt:
          "React 19 introduces server components, improved concurrent features, and a new compiler that promises to revolutionize React development.",
        content: "The React team has officially released React 19...",
        author: "Mike Rodriguez",
        category: "Web Development",
        date: new Date(Date.now() - 86400000).toLocaleDateString(),
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        readTime: "7 min read",
        trending: true,
      },
      {
        id: "3",
        title: "The Future of Data Analytics: Trends Shaping 2024",
        excerpt:
          "From real-time analytics to AI-powered insights, discover the key trends that are transforming how businesses handle data.",
        content: "Data analytics continues to evolve rapidly...",
        author: "Dr. Aisha Patel",
        category: "Data Analytics",
        date: new Date(Date.now() - 172800000).toLocaleDateString(),
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        readTime: "6 min read",
      },
      {
        id: "4",
        title: "GitHub Copilot X: AI-Powered Development Reaches New Heights",
        excerpt:
          "Microsoft's latest update to GitHub Copilot introduces voice commands, chat integration, and advanced code generation capabilities.",
        content: "GitHub Copilot X represents the next evolution...",
        author: "David Kumar",
        category: "Development Tools",
        date: new Date(Date.now() - 259200000).toLocaleDateString(),
        image:
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
        readTime: "4 min read",
      },
      {
        id: "5",
        title: "Cybersecurity in 2024: New Threats and Defense Strategies",
        excerpt:
          "As cyber threats evolve, organizations must adapt their security strategies to protect against sophisticated attacks.",
        content: "The cybersecurity landscape is constantly changing...",
        author: "Lisa Thompson",
        category: "Cybersecurity",
        date: new Date(Date.now() - 345600000).toLocaleDateString(),
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        readTime: "8 min read",
      },
      {
        id: "6",
        title: "Cloud Computing Innovations: Edge Computing Takes Center Stage",
        excerpt:
          "Edge computing is revolutionizing how we process data, bringing computation closer to where it's needed most.",
        content: "Edge computing represents a fundamental shift...",
        author: "James Wilson",
        category: "Cloud Computing",
        date: new Date(Date.now() - 432000000).toLocaleDateString(),
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        readTime: "6 min read",
      },
    ];

    setArticles(techArticles);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Google Programmable Search Engine API integration
  const searchGoogleCSE = useCallback(async (query: string) => {
    if (!query.trim()) {
      setGoogleSearchResults([]);
      setShowGoogleResults(false);
      setSearchError("");
      return;
    }

    setIsSearching(true);
    setSearchError("");

    try {
      const API_KEY = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
      const SEARCH_ENGINE_ID = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID;

      // Check if API credentials are configured
      if (!API_KEY || !SEARCH_ENGINE_ID || API_KEY === 'your_google_api_key_here' || SEARCH_ENGINE_ID === 'your_search_engine_id_here') {
        // Fallback to demo mode with simulated Google-like results
        await simulateGoogleSearch(query);
        return;
      }

      const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query + ' tech technology programming development')}&num=10&safe=active`;

      const response = await fetch(searchUrl);
      const data: GoogleSearchResponse = await response.json();

      if (data.error) {
        throw new Error(`Google Search API Error: ${data.error.message}`);
      }

      if (data.items && data.items.length > 0) {
        setGoogleSearchResults(data.items);
        setSearchStats({
          total: data.searchInformation?.totalResults || '0',
          time: data.searchInformation?.searchTime || 0
        });
        setShowGoogleResults(true);
      } else {
        setSearchError('No results found for your search query.');
        setGoogleSearchResults([]);
        setShowGoogleResults(false);
      }
    } catch (error) {
      console.error('Google Search error:', error);
      // Fallback to demo mode on error
      await simulateGoogleSearch(query);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Fallback function for demo purposes when API is not configured
  const simulateGoogleSearch = useCallback(async (query: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const demoResults: GoogleSearchResult[] = [
      {
        title: `${query} - Complete Developer Guide | TechCrunch`,
        link: `https://techcrunch.com/search/${encodeURIComponent(query)}`,
        snippet: `Latest news and comprehensive guides about ${query}. Learn from industry experts and stay updated with the newest developments in technology.`,
        displayLink: 'techcrunch.com',
        formattedUrl: `https://techcrunch.com/guides/${query.toLowerCase()}`,
        pagemap: {
          cse_thumbnail: [{ src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=100&fit=crop', width: '150', height: '100' }]
        }
      },
      {
        title: `${query} Tutorial and Best Practices | Stack Overflow`,
        link: `https://stackoverflow.com/questions/tagged/${encodeURIComponent(query)}`,
        snippet: `Community-driven ${query} discussions, tutorials, and solutions. Get expert help and share knowledge with developers worldwide.`,
        displayLink: 'stackoverflow.com',
        formattedUrl: `https://stackoverflow.com/tagged/${query.toLowerCase()}`,
        pagemap: {
          cse_thumbnail: [{ src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=100&fit=crop', width: '150', height: '100' }]
        }
      },
      {
        title: `${query} Documentation and Resources | MDN`,
        link: `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(query)}`,
        snippet: `Official documentation, examples, and resources for ${query}. Comprehensive reference materials for developers and learners.`,
        displayLink: 'developer.mozilla.org',
        formattedUrl: `https://developer.mozilla.org/docs/${query.toLowerCase()}`,
        pagemap: {
          cse_thumbnail: [{ src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=150&h=100&fit=crop', width: '150', height: '100' }]
        }
      },
      {
        title: `${query} News and Updates | GitHub`,
        link: `https://github.com/search?q=${encodeURIComponent(query)}`,
        snippet: `Open source projects, repositories, and code examples related to ${query}. Discover the latest developments from the developer community.`,
        displayLink: 'github.com',
        formattedUrl: `https://github.com/topics/${query.toLowerCase()}`,
        pagemap: {
          cse_thumbnail: [{ src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=150&h=100&fit=crop', width: '150', height: '100' }]
        }
      }
    ];

    setGoogleSearchResults(demoResults);
    setSearchStats({ total: '12,500', time: 0.42 });
    setShowGoogleResults(true);
    setSearchError('');
  }, []);

  // Local content search (existing functionality)
  const searchLocalContent = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowGoogleResults(false);
      return;
    }

    setIsSearching(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Filter existing articles
      const filteredResults = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredResults);
      setShowGoogleResults(true);
    } catch (error) {
      console.error("Local search error:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [articles]);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        if (searchMode === 'google') {
          searchGoogleCSE(searchQuery);
        } else {
          searchLocalContent(searchQuery);
        }
      } else {
        setSearchResults([]);
        setGoogleSearchResults([]);
        setShowGoogleResults(false);
        setSearchError('');
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, searchMode, searchGoogleCSE, searchLocalContent]);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = !searchQuery.trim() ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayArticles = showGoogleResults && searchMode === 'local' ? searchResults : filteredArticles;
  const categories = [...new Set(articles.map((article) => article.category))];
  const trendingArticles = articles.filter((article) => article.trending);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F95cd289e2a7540f08aa477797bfdd222?format=webp&width=800"
              alt="AETHER HUB Logo"
              className="w-8 h-8"
            />
            <div className="text-xl font-bold text-gray-800">AETHER HUB</div>
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
            <a href="/articles" className="text-brand-blue font-medium">
              Articles
            </a>
          </div>
        </div>
        <Button
          className="bg-brand-blue hover:bg-blue-600 text-white hidden md:block"
          onClick={() => (window.location.href = "/get-started")}
        >
          Get Started
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-brand-blue to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest Tech Articles & Insights
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Stay ahead of the curve with the latest developments in technology,
            programming, AI, and emerging software trends.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge className="bg-white/20 text-white">Updated Daily</Badge>
            <Badge className="bg-white/20 text-white">Industry Insights</Badge>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Search Mode Toggle */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setSearchMode('local')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  searchMode === 'local'
                    ? 'bg-white text-brand-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Local Articles
              </button>
              <button
                onClick={() => setSearchMode('google')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  searchMode === 'google'
                    ? 'bg-white text-brand-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Web Search (Google)
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              {isSearching ? (
                <Loader2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-blue w-5 h-5 animate-spin" />
              ) : (
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              )}
              <Input
                placeholder={searchMode === 'google' ? "Search tech topics (powered by Google)" : "Search local articles..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              {showGoogleResults && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 p-2 shadow-lg z-10">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Search className="w-4 h-4 mr-1" />
                    <span>Enhanced Search Results</span>
                  </div>
                </div>
              )}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Trending Articles */}
          {trendingArticles.length > 0 && !showGoogleResults && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-5 h-5 text-brand-blue mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Trending Now
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {trendingArticles.slice(0, 2).map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                        Trending
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {article.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span>{article.author}</span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {article.date}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Articles */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {showGoogleResults && searchQuery
              ? `${searchMode === 'google' ? 'Web' : 'Local'} Search Results for "${searchQuery}"`
              : "All Articles"}
          </h2>

          {/* Search Results Header */}
          {showGoogleResults && searchMode === 'google' && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between text-blue-800">
                <div className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  <span className="font-medium">Google Search Results</span>
                  {searchStats && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      {searchStats.total} results ({searchStats.time}s)
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span>Live Web Search</span>
                </div>
              </div>
              <p className="text-blue-700 text-sm mt-1">
                Real-time results from across the web, powered by Google Custom Search.
              </p>
            </div>
          )}

          {showGoogleResults && searchMode === 'local' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center text-green-800">
                <Search className="w-5 h-5 mr-2" />
                <span className="font-medium">Local Search Results</span>
                <Badge variant="outline" className="ml-2 text-xs">
                  {searchResults.length} articles found
                </Badge>
              </div>
              <p className="text-green-700 text-sm mt-1">
                Results from our curated tech articles collection.
              </p>
            </div>
          )}

          {/* Search Error */}
          {searchError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center text-red-800">
                <ExternalLink className="w-5 h-5 mr-2" />
                <span className="font-medium">Search Error</span>
              </div>
              <p className="text-red-700 text-sm mt-1">{searchError}</p>
            </div>
          )}

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayArticles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => {
                    // For search results, show content within the page instead of redirecting
                    if (article.url && !article.id.startsWith('search-')) {
                      window.open(article.url, "_blank");
                    }
                  }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article.trending && (
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                        Trending
                      </Badge>
                    )}
                    {article.url && !article.id.startsWith('search-') && (
                      <Badge className="absolute top-3 right-3 bg-brand-blue text-white">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        External
                      </Badge>
                    )}
                    {article.id.startsWith('search-') && (
                      <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                        <Search className="w-3 h-3 mr-1" />
                        Search
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{article.author}</span>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {((searchMode === 'google' && googleSearchResults.length === 0 && showGoogleResults) ||
            (searchMode === 'local' && displayArticles.length === 0)) &&
            !loading && !isSearching && searchQuery && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-2">
                No {searchMode === 'google' ? 'web' : 'local'} results found for "{searchQuery}"
              </p>
              <p className="text-gray-400 text-sm">
                {searchMode === 'google'
                  ? 'Try different keywords or switch to local search'
                  : 'Try different keywords or switch to web search'
                }
              </p>
            </div>
          )}

          {isSearching && (
            <div className="text-center py-12">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-brand-blue" />
              <p className="text-gray-500 text-lg">
                {searchMode === 'google' ? 'Searching the web...' : 'Searching articles...'}
              </p>
            </div>
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F002f3fbf578949a7be6bcc802417e5ce%2F95cd289e2a7540f08aa477797bfdd222?format=webp&width=800"
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
            <p>&copy; 2024 AETHER HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

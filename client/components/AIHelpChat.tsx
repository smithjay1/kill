import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface QuickAction {
  id: string;
  text: string;
  action: () => void;
}

export default function AIHelpChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hi! I'm LUMORA AI, your virtual assistant. I'm here to help you with information about our courses, pricing, enrollment, and more. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions: QuickAction[] = [
    {
      id: "courses",
      text: "View Courses",
      action: () => {
        addMessage("Tell me about your courses", "user");
        setTimeout(() => {
          addMessage(
            `📚 We offer several comprehensive tech courses:

**Data Analytics Track:**
• Beginner (₦50,000) - Excel, Power BI, SQL & MySQL Fundamentals
• Intermediate (₦60,000) - Advanced Excel, Power BI Mastery, SQL & MySQL Advanced  
• Advanced (₦80,000) - Customer Segmentation, Market Research, MySQL Analytics

**Web Development Track:**
• Beginner (₦50,000) - HTML, CSS, Responsive Layouts
• Intermediate (₦60,000) - JavaScript, DOM, Git & GitHub, APIs
• Advanced (₦80,000) - ReactJS, Node.js, MongoDB/SQL, REST APIs

**Video Editing:**
• CapCut Mastery (₦60,000) - Complete video editing for social media

Would you like more details about any specific course?`,
            "ai",
          );
        }, 1000);
      },
    },
    {
      id: "pricing",
      text: "Course Pricing",
      action: () => {
        addMessage("What are your course prices?", "user");
        setTimeout(() => {
          addMessage(
            `💰 Our course pricing is structured by level:

• **Beginner Level:** ₦50,000
• **Intermediate Level:** ₦60,000  
• **Advanced Level:** ₦80,000

All courses include:
✅ Expert-led instruction
✅ Hands-on projects
✅ Certificate upon completion
✅ Career support
✅ Access to our community

We also offer **LUMORA ADVANTAGE** scholarships for eligible students!`,
            "ai",
          );
        }, 1000);
      },
    },
    {
      id: "enrollment",
      text: "How to Enroll",
      action: () => {
        addMessage("How do I enroll in a course?", "user");
        setTimeout(() => {
          addMessage(
            `🎓 Enrollment is easy! Here's how:

1. **Choose Your Course:** Visit our Academy page or click "Get Started"
2. **Select Your Level:** Pick Beginner, Intermediate, or Advanced
3. **Fill Out Form:** Provide your details (name, email, phone)
4. **Submit via WhatsApp:** Click "Enroll Now" to send your application via WhatsApp to +2347025340480

You can also email us directly at **aether.hub1@gmail.com**

Ready to start? Click the "Get Started" button in the top navigation!`,
            "ai",
          );
        }, 1000);
      },
    },
    {
      id: "contact",
      text: "Contact Info",
      action: () => {
        addMessage("How can I contact you?", "user");
        setTimeout(() => {
          addMessage(
            `📞 Here are all the ways to reach us:

**Email:** aether.hub1@gmail.com
**Phone Numbers:**
• +2347025340480
• +22059800142
• +2347068751521

**WhatsApp:** +2347025340480

**Website Sections:**
• Contact page for detailed inquiries
• Innovation page to meet our experts
• Academy page for course information

We're here to help you succeed in your tech journey!`,
            "ai",
          );
        }, 1000);
      },
    },
  ];

  const predefinedResponses: { [key: string]: string } = {
    hello:
      "Hello! Welcome to LUMORA HUB! 👋 I'm here to help you with any questions about our tech courses and programs.",
    hi: "Hi there! 😊 How can I assist you with your tech learning journey today?",
    help: "I'm here to help! I can provide information about our courses, pricing, enrollment process, schedules, and more. What would you like to know?",
    "data analytics": `📊 Our Data Analytics track includes:
• Beginner (₦50,000): Excel, Power BI Basics, SQL & MySQL Fundamentals
• Intermediate (₦60,000): Advanced Excel, Power BI Mastery, SQL & MySQL Advanced
• Advanced (₦80,000): Customer Segmentation, Market Research, MySQL Analytics

All courses include hands-on projects and real-world applications!`,
    "web development": `💻 Our Web Development track covers:
• Beginner (₦50,000): HTML, CSS, Responsive Layouts
• Intermediate (₦60,000): JavaScript, DOM, Git & GitHub, APIs
• Advanced (₦80,000): ReactJS, Node.js, MongoDB/SQL, REST APIs

Perfect for building modern, professional websites and applications!`,
    capcut: `🎬 Our CapCut Video Editing Mastery course (₦60,000) covers:
• CapCut Interface & Tools
• Trimming & Audio Sync
• Transitions & Effects
• TikTok/Reels Optimization
• Professional Workflows

Great for social media content creation!`,
    scholarship: `🎓 LUMORA ADVANTAGE offers:
• Up to 100% course scholarships
• Monthly 1-on-1 mentorship sessions
• Project-based learning tracks
• Internship opportunities
• Career guidance and job placement support

Visit our LUMORA ADVANTAGE page to learn more!`,
    price: `💰 Our pricing structure:
• Beginner Level: ₦50,000
• Intermediate Level: ₦60,000
• Advanced Level: ₦80,000

All courses include expert instruction, projects, certificates, and career support!`,
    duration: `⏰ Course durations vary:
• Data Analytics: 8-12 weeks
• Web Development: 6-16 weeks  
• CapCut Video Editing: 6 weeks

All courses are designed to fit around your schedule with flexible virtual learning!`,
    certificate:
      "✅ Yes! You'll receive a professional certificate upon successful completion of any course. Our certificates are industry-recognized and help boost your career prospects.",
    location:
      "🌍 All our courses are conducted virtually, so you can learn from anywhere! We have students from Lagos to London, and our global community spans over 70+ cities.",
    schedule:
      "📅 Our courses offer flexible scheduling with virtual classes. Most courses require 10-15 hours per month, designed to fit around your current commitments.",
    support:
      "🤝 We provide comprehensive support including expert instructors, 1-on-1 mentorship, career guidance, and access to our community of 25,000+ learners worldwide!",
  };

  const addMessage = (text: string, sender: "user" | "ai") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // Check for exact matches first
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }

    // Check for common variations
    if (input.includes("course") || input.includes("program")) {
      return predefinedResponses["help"];
    }
    if (
      input.includes("cost") ||
      input.includes("fee") ||
      input.includes("money")
    ) {
      return predefinedResponses["price"];
    }
    if (
      input.includes("time") ||
      input.includes("long") ||
      input.includes("when")
    ) {
      return predefinedResponses["duration"];
    }
    if (
      input.includes("contact") ||
      input.includes("reach") ||
      input.includes("call")
    ) {
      return predefinedResponses["contact"];
    }
    if (
      input.includes("enroll") ||
      input.includes("register") ||
      input.includes("join")
    ) {
      return predefinedResponses["enrollment"];
    }

    // Default response
    return `I understand you're asking about "${userInput}". 

Here are some things I can help you with:
• Course information and pricing
• Enrollment process
• Contact details
• Schedules and duration
• Certificates and career support

You can also:
📧 Email us: aether.hub1@gmail.com
📱 WhatsApp: +2347025340480
🌐 Visit our Academy page for detailed course info

What specific information would you like to know?`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, "user");
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(inputValue);
      addMessage(response, "ai");
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickContact = (method: "whatsapp" | "email") => {
    if (method === "whatsapp") {
      const message = encodeURIComponent(
        "Hi AETHER HUB! I need help with your courses and would like to speak with someone.",
      );
      window.open(`https://wa.me/2347025340480?text=${message}`, "_blank");
    } else {
      window.open("mailto:aether.hub1@gmail.com", "_blank");
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue hover:bg-blue-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-96 h-[500px] shadow-xl transition-all duration-300 ${isMinimized ? "h-14" : ""}`}
      >
        {/* Header */}
        <div className="bg-brand-blue text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold">LUMORA AI</div>
              <div className="text-xs opacity-90">Online • Ready to help</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 p-1"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%]`}>
                    {message.sender === "ai" && (
                      <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-brand-blue text-white"
                          : "bg-white border shadow-sm"
                      }`}
                    >
                      <div className="text-sm whitespace-pre-line">
                        {message.text}
                      </div>
                    </div>
                    {message.sender === "user" && (
                      <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white border shadow-sm rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t bg-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickActions.map((action) => (
                  <Button
                    key={action.id}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="text-xs"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="flex gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickContact("whatsapp")}
                  className="flex-1 text-xs"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickContact("email")}
                  className="flex-1 text-xs"
                >
                  <Mail className="w-3 h-3 mr-1" />
                  Email
                </Button>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything about AETHER HUB..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-brand-blue hover:bg-blue-600"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

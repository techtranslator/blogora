"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, BookOpen, Users, Award, TrendingUp, Sparkles } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isAIActive, setIsAIActive] = useState(false);
  const [init, setInit] = useState(false);

  // Mock blog data for search
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      category: "Technology",
      tags: ["Web Dev", "JavaScript", "Frameworks"],
      author: "Alex Johnson",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Mastering UI/UX Design Principles",
      excerpt: "Learn the fundamental principles that make interfaces intuitive and delightful.",
      category: "Design",
      tags: ["UI/UX", "Design Systems", "User Experience"],
      author: "Sarah Chen",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Advanced React Patterns",
      excerpt: "Deep dive into advanced React patterns for building scalable applications.",
      category: "Development",
      tags: ["React", "State Management", "Performance"],
      author: "Michael Rodriguez",
      readTime: "15 min read"
    },
    {
      id: 4,
      title: "AI in Modern Business",
      excerpt: "How artificial intelligence is transforming business operations and decision making.",
      category: "Business",
      tags: ["AI", "Machine Learning", "Innovation"],
      author: "Dr. Emma Wilson",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Sustainable Living Tips",
      excerpt: "Practical advice for reducing your environmental footprint in daily life.",
      category: "Lifestyle",
      tags: ["Sustainability", "Environment", "Green Living"],
      author: "James Peterson",
      readTime: "6 min read"
    }
  ];

  const aiSuggestions = [
    "Show me the latest articles about AI",
    "Find design tutorials for beginners",
    "Recommend business strategy content",
    "What's new in web development?",
    "Show me quick 5-minute reads"
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        post.category.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleAISearch = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
    setIsAIActive(true);
    setTimeout(() => setIsAIActive(false), 2000);
  };

  const particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: -1
    },
    particles: {
      color: {
        value: "#8b5cf6",
      },
      links: {
        color: "#8b5cf6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const stats = [
    { icon: BookOpen, value: "100K+", label: "Premium Articles" },
    { icon: Users, value: "50M+", label: "Active Readers" },
    { icon: Award, value: "10K+", label: "Expert Authors" },
    { icon: TrendingUp, value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="w-full h-full"
          />
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,rgba(0,0,0,0)_70%)] z-0"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-400">World's Largest Blogging Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                World's Largest
              </span>
              <br />
              <span className="text-foreground">Premium Blogging</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Join 50M+ readers exploring 100,000+ premium articles from 10,000+ expert authors. 
              Curated content across technology, design, business, and lifestyle.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                {isAIActive && (
                  <Sparkles className="absolute left-12 top-1/2 transform -translate-y-1/2 text-yellow-400 w-5 h-5 animate-pulse" />
                )}
                <input
                  type="text"
                  placeholder="Search articles, authors, topics..."
                  className="w-full pl-12 pr-4 py-4 bg-background/80 backdrop-blur-xl border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all">
                  Search
                </button>
              </div>

              {/* AI Suggestions */}
              {searchQuery.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                    AI-Powered Suggestions
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {aiSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAISearch(suggestion)}
                        className="text-xs bg-secondary text-foreground px-3 py-1.5 rounded-full hover:bg-accent transition-colors"
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Search Results Dropdown */}
              {showSearchResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.id}`}
                          className="block px-4 py-3 hover:bg-accent transition-colors"
                          onClick={() => {
                            setSearchQuery("");
                            setShowSearchResults(false);
                          }}
                        >
                          <h4 className="font-medium">{post.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                {post.category}
                              </span>
                              {post.tags.slice(0, 2).map((tag: string, idx: number) => (
                                <span key={idx} className="text-xs text-muted-foreground ml-2">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <p className="text-muted-foreground">No articles found. Try different keywords.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center"
                >
                  Explore Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/subscribe">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass border border-border font-semibold rounded-2xl hover:bg-accent transition-all"
                >
                  Subscribe Now
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -left-10 w-64 h-80 glass rounded-3xl p-6 shadow-2xl"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl w-full h-full flex flex-col justify-end p-4">
                  <h3 className="font-bold text-lg">Tech Trends 2024</h3>
                  <p className="text-sm text-muted-foreground mt-2">Latest insights in AI and development</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-20 -right-10 w-64 h-80 glass rounded-3xl p-6 shadow-2xl z-10"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl w-full h-full flex flex-col justify-end p-4">
                  <h3 className="font-bold text-lg">Design Mastery</h3>
                  <p className="text-sm text-muted-foreground mt-2">UI/UX principles for modern interfaces</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-10 w-64 h-80 glass rounded-3xl p-6 shadow-2xl"
              >
                <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl w-full h-full flex flex-col justify-end p-4">
                  <h3 className="font-bold text-lg">Business Growth</h3>
                  <p className="text-sm text-muted-foreground mt-2">Strategies for scaling your startup</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center glass rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Filter, User, Tag, TrendingUp, Eye, Heart, Share2, Bookmark, Loader, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { blogPosts, getUniqueCategories, getFeaturedBlogPosts } from "@/lib/blogData";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { AdSense } from "@/components/AdSense";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minReadTime, setMinReadTime] = useState("");
  const [maxReadTime, setMaxReadTime] = useState("");

  // Get all unique tags
  const getAllTags = () => {
    const allTags = blogPosts.flatMap(post => post.tags);
    return Array.from(new Set(allTags));
  };

  const tags = getAllTags();
  const categories = getUniqueCategories();
  const sortOptions = [
    { value: "date", label: "Latest" },
    { value: "popular", label: "Most Popular" },
    { value: "views", label: "Most Viewed" },
    { value: "likes", label: "Most Liked" }
  ];

  // Filter posts based on search term, category, tags, and read time
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => post.tags.includes(tag));
    
    // Filter by read time
    const postReadTime = parseInt(post.readTime);
    const matchesMinReadTime = minReadTime === "" || postReadTime >= parseInt(minReadTime);
    const matchesMaxReadTime = maxReadTime === "" || postReadTime <= parseInt(maxReadTime);
    
    return matchesSearch && matchesCategory && matchesTags && matchesMinReadTime && matchesMaxReadTime;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "popular") {
      return (b.views + b.likes * 10) - (a.views + a.likes * 10);
    } else if (sortBy === "views") {
      return b.views - a.views;
    } else if (sortBy === "likes") {
      return b.likes - a.likes;
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Get featured posts
  const featuredPosts = getFeaturedBlogPosts();

  // Simulate loading for demonstration
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("date");
    setSelectedTags([]);
    setMinReadTime("");
    setMaxReadTime("");
  };

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold">Premium Blogging Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            World&apos;s Largest <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span> Platform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            100,000+ premium articles from 10,000+ expert authors. Join 50M+ readers discovering insights daily.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
            {[
              { value: "100K+", label: "Articles" },
              { value: "50M+", label: "Readers" },
              { value: "10K+", label: "Authors" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Search and Filter Bar */}
      <section className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 rounded-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                aria-label="Search articles"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-10 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                aria-label="Filter by category"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-4 pr-10 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                aria-label="Sort articles"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Advanced Filters Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-background/50 border border-border rounded-xl flex items-center space-x-2 hover:bg-primary/10 transition-all"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tags Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 12).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 text-sm rounded-full border transition-all ${
                          selectedTags.includes(tag)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background/50 border-border hover:bg-primary/10"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Read Time Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Read Time (minutes)</h3>
                  <div className="flex space-x-3">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minReadTime}
                      onChange={(e) => setMinReadTime(e.target.value)}
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxReadTime}
                      onChange={(e) => setMaxReadTime(e.target.value)}
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Selected Filters */}
                {(selectedTags.length > 0 || minReadTime || maxReadTime) && (
                  <div>
                    <h3 className="font-semibold mb-3">Active Filters</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <div key={tag} className="flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {tag}
                          <button 
                            onClick={() => toggleTag(tag)}
                            className="ml-2 hover:bg-primary/20 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      {minReadTime && (
                        <div className="flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          Min: {minReadTime} min
                          <button 
                            onClick={() => setMinReadTime("")}
                            className="ml-2 hover:bg-primary/20 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      {maxReadTime && (
                        <div className="flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          Max: {maxReadTime} min
                          <button 
                            onClick={() => setMaxReadTime("")}
                            className="ml-2 hover:bg-primary/20 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      <button
                        onClick={clearFilters}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-muted/80 transition-colors"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Featured Articles</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary font-semibold flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={`featured-${post.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Link href={`/blog/${post.id}`} aria-label={`Read article: ${post.title}`}>
                {/* Image */}
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-semibold">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-xs font-semibold">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-8">All Articles</h2>
        
        {sortedPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Link href={`/blog/${post.id}`} aria-label={`Read article: ${post.title}`}>
                  {/* Image */}
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                    {/* Author */}
                    <div className="flex items-center space-x-3 mb-4">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{post.author.name}</p>
                        <p className="text-xs text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-background/50 text-xs rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-background/50 text-xs rounded-full border border-border">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bookmark className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <Share2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSortBy("date");
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
            >
              Reset Filters
            </motion.button>
          </div>
        )}

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <span>Load More Articles</span>
            )}
          </motion.button>
        </motion.div>
        
        {/* AdSense Below Load More */}
        <div className="mt-16">
          <AdSense adSlot="your-blog-page-ad-slot" adFormat="horizontal" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles and insights delivered to your inbox every week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              aria-label="Email for newsletter subscription"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
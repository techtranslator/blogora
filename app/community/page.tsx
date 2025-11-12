"use client";

import { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { MessageCircle, Users, TrendingUp, Calendar, Search, Filter, Heart, Bookmark, Share2, Plus, Trophy, Award } from "lucide-react";
import Link from "next/link";
import { blogPosts, authors } from "@/lib/blogData";

// Mock community data
const mockDiscussions = [
  {
    id: 1,
    title: "What's everyone working on this week?",
    excerpt: "Share your current projects, challenges, and wins with the community!",
    author: authors[0],
    replies: 24,
    likes: 12,
    tags: ["General", "Discussion"],
    date: "2025-10-18",
    category: "General"
  },
  {
    id: 2,
    title: "Best resources for learning React in 2025?",
    excerpt: "Looking for the most up-to-date tutorials and courses for React development.",
    author: authors[1],
    replies: 18,
    likes: 22,
    tags: ["React", "Resources"],
    date: "2025-10-17",
    category: "Development"
  },
  {
    id: 3,
    title: "Show off your latest project!",
    excerpt: "Post screenshots, links, and descriptions of your recent work.",
    author: authors[2],
    replies: 31,
    likes: 45,
    tags: ["Showcase", "Projects"],
    date: "2025-10-16",
    category: "Projects"
  },
  {
    id: 4,
    title: "How do you handle state management in large applications?",
    excerpt: "Discussion about best practices for complex state management solutions.",
    author: authors[3],
    replies: 15,
    likes: 18,
    tags: ["State Management", "Architecture"],
    date: "2025-10-15",
    category: "Development"
  },
  {
    id: 5,
    title: "Favorite design tools in 2025?",
    excerpt: "What's your go-to design software and why? Share your workflow.",
    author: authors[4],
    replies: 27,
    likes: 32,
    tags: ["Design", "Tools"],
    date: "2025-10-14",
    category: "Design"
  }
];

const mockLeaderboard = [
  { id: 1, user: authors[0], points: 1240, rank: 1 },
  { id: 2, user: authors[1], points: 980, rank: 2 },
  { id: 3, user: authors[2], points: 875, rank: 3 },
  { id: 4, user: authors[3], points: 760, rank: 4 },
  { id: 5, user: authors[4], points: 650, rank: 5 }
];

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

  const categories = ["All", "General", "Development", "Design", "Projects"];
  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "popular", label: "Most Popular" },
    { value: "replies", label: "Most Replies" }
  ];

  // Filter discussions
  const filteredDiscussions = mockDiscussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          discussion.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort discussions
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (sortBy === "popular") {
      return (b.likes + b.replies) - (a.likes + a.replies);
    } else if (sortBy === "replies") {
      return b.replies - a.replies;
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6 backdrop-blur-xl border border-white/10">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Community Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
            <span className="text-foreground"> with Experts</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join discussions, share knowledge, and collaborate with fellow developers, designers, and content creators.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "5M+", label: "Community Members", icon: Users },
            { value: "120K+", label: "Active Discussions", icon: MessageCircle },
            { value: "870K+", label: "Solutions Shared", icon: TrendingUp },
            { value: "99%", label: "Satisfaction Rate", icon: Award }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl text-center backdrop-blur-xl border border-white/10 hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-6 rounded-2xl mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search discussions, tags, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    aria-label="Search discussions"
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
                    aria-label="Sort discussions"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {/* New Discussion Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>New Discussion</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Discussions List */}
            <div className="space-y-6">
              {sortedDiscussions.map((discussion, index) => (
                <motion.article
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 hover:shadow-xl transition-all cursor-pointer"
                >
                  <Link href={`/community/${discussion.id}`} className="block p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 relative rounded-full overflow-hidden">
                          <Image 
                            src={discussion.author.avatar} 
                            alt={discussion.author.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{discussion.author.name}</h3>
                          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{discussion.date}</span>
                            </div>
                            <span>{discussion.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                        {discussion.category}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-3">{discussion.title}</h2>
                    <p className="text-muted-foreground mb-4">{discussion.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {discussion.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-background/50 text-xs rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-5 h-5" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                          <Heart className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                          <Bookmark className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Load More Discussions
              </motion.button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Leaderboard */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">Top Contributors</h2>
              </div>
              
              <div className="space-y-4">
                {mockLeaderboard.map((user) => (
                  <div key={user.id} className="flex items-center space-x-3 p-3 glass rounded-xl">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm">
                      {user.rank}
                    </div>
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                      <Image 
                        src={user.user.avatar} 
                        alt={user.user.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{user.user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.points} points</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-2 bg-background/50 border border-border rounded-lg text-center text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                View Full Leaderboard
              </motion.button>
            </div>

            {/* Popular Tags */}
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Design", "AI", "CSS", "Node.js", "UX", "DevOps", "Mobile", "Security"].map((tag, index) => (
                  <motion.button
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-background/50 text-sm rounded-full border border-border hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Be respectful and constructive</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Stay on topic and relevant</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>No spam or self-promotion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Share knowledge generously</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
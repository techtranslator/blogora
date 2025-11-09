"use client";

// Fix unescaped entities for Vercel deployment - take 5

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Bookmark, Clock, TrendingUp, Eye, Heart, Calendar, User, Settings, Bell, X } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

// Mock user data
const mockUser = {
  name: "Alex Morgan",
  email: "alex@example.com",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  joinDate: "Jan 2023",
  articlesRead: 42,
  bookmarks: 18,
  readingStreak: 7
};

// Mock reading history and bookmarks
const mockReadingHistory = [
  { id: 1, postId: 5, title: "DevOps Best Practices for Modern Teams", date: "2025-10-15", progress: 100 },
  { id: 2, postId: 12, title: "AI in Content Creation: Tools and Techniques", date: "2025-10-12", progress: 75 },
  { id: 3, postId: 8, title: "State Management in React Applications", date: "2025-10-10", progress: 50 },
  { id: 4, postId: 22, title: "Sustainable Web Development Practices", date: "2025-10-05", progress: 30 },
];

const mockBookmarks = [
  { id: 1, postId: 15, title: "Data Science Fundamentals for Beginners", date: "2025-10-14" },
  { id: 2, postId: 3, title: "Mastering Tailwind CSS: Advanced Techniques", date: "2025-10-11" },
  { id: 3, postId: 19, title: "Quantum Computing: Preparing for the Future", date: "2025-10-08" },
  { id: 4, postId: 7, title: "The Art of Minimalist Design", date: "2025-10-03" },
];

export function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [readingHistory, setReadingHistory] = useState(mockReadingHistory);
  const [bookmarks, setBookmarks] = useState(mockBookmarks);

  // Get full post data for reading history and bookmarks
  const readingHistoryWithPosts = readingHistory.map(item => {
    const post = blogPosts.find(p => p.id === item.postId);
    return { ...item, post };
  }).filter(item => item.post);

  const bookmarksWithPosts = bookmarks.map(item => {
    const post = blogPosts.find(p => p.id === item.postId);
    return { ...item, post };
  }).filter(item => item.post);

  // Remove bookmark
  const removeBookmark = (id: number) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-display font-bold mb-2">Your Dashboard</h1>
          <p className="text-muted-foreground">Track your reading progress and saved articles</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg">{mockUser.name}</h2>
                  <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{mockUser.articlesRead}</div>
                  <div className="text-xs text-muted-foreground">Read</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{mockUser.bookmarks}</div>
                  <div className="text-xs text-muted-foreground">Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{mockUser.readingStreak}</div>
                  <div className="text-xs text-muted-foreground">Streak</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">Member since {mockUser.joinDate}</p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <nav className="space-y-2">
                {[
                  { id: "overview", label: "Overview", icon: User },
                  { id: "reading", label: "Reading History", icon: BookOpen },
                  { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
                  { id: "settings", label: "Settings", icon: Settings },
                  { id: "notifications", label: "Notifications", icon: Bell },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeTab === item.id
                          ? "bg-primary/20 text-primary"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-500" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{mockUser.articlesRead}</h3>
                    <p className="text-muted-foreground">Articles Read</p>
                  </div>
                  
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Bookmark className="w-6 h-6 text-purple-500" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{mockUser.bookmarks}</h3>
                    <p className="text-muted-foreground">Bookmarks</p>
                  </div>
                  
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-orange-500/20 rounded-lg">
                        <Calendar className="w-6 h-6 text-orange-500" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{mockUser.readingStreak}</h3>
                    <p className="text-muted-foreground">Day Streak</p>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {readingHistoryWithPosts.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 glass rounded-xl">
                        <img 
                          src={item.post?.image} 
                          alt={item.post?.title} 
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold line-clamp-1">{item.post?.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4" />
                              <span>{item.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <Link href={`/blog/${item.postId}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-primary rounded-lg text-primary-foreground text-sm font-semibold"
                          >
                            Continue
                          </motion.button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Reading Recommendations */}
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.slice(0, 4).map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                      >
                        <Link href={`/blog/${post.id}`} className="block">
                          <div className="relative h-32">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{post.readTime}</span>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{post.views}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === "reading" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Reading History</h2>
                {readingHistoryWithPosts.length > 0 ? (
                  <div className="space-y-4">
                    {readingHistoryWithPosts.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 glass rounded-xl">
                        <img 
                          src={item.post?.image} 
                          alt={item.post?.title} 
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold line-clamp-1">{item.post?.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4" />
                              <span>{item.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Link href={`/blog/${item.postId}`}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-primary rounded-lg text-primary-foreground text-sm font-semibold"
                            >
                              Continue
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No reading history yet</h3>
                    <p className="text-muted-foreground mb-6">Start reading articles to see them appear here</p>
                    <Link href="/blog">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-primary rounded-lg text-primary-foreground font-semibold"
                      >
                        Browse Articles
                      </motion.button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
            
            {activeTab === "bookmarks" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Bookmarks</h2>
                {bookmarksWithPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookmarksWithPosts.map((item) => (
                      <motion.article
                        key={item.id}
                        whileHover={{ y: -5 }}
                        className="glass rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                      >
                        <Link href={`/blog/${item.postId}`} className="block">
                          <div className="relative h-40">
                            <img 
                              src={item.post?.image} 
                              alt={item.post?.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                removeBookmark(item.id);
                              }}
                              className="absolute top-3 right-3 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
                            >
                              <Bookmark className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            </button>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-2 line-clamp-2">{item.post?.title}</h3>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{item.post?.author.name}</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bookmark className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No bookmarks yet</h3>
                    <p className="text-muted-foreground mb-6">Save articles to read later by clicking the bookmark icon</p>
                    <Link href="/blog">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-primary rounded-lg text-primary-foreground font-semibold"
                      >
                        Browse Articles
                      </motion.button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
            
            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          defaultValue={mockUser.name}
                          className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={mockUser.email}
                          className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive updates and newsletters</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Dark Mode</p>
                          <p className="text-sm text-muted-foreground">Enable dark theme</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-primary rounded-lg text-primary-foreground font-semibold"
                    >
                      Save Changes
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === "notifications" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Notifications</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start space-x-4 p-4 glass rounded-xl">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Bell className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">New article published</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          &quot;The Future of Quantum Computing&quot; has been published in the Technology category.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
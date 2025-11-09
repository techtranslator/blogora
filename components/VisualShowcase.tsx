"use client";

// Force rebuild for Vercel deployment

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, TrendingUp, Award, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const featuredContent = [
  {
    id: 1,
    title: "The Future of Web Design",
    excerpt: "Exploring cutting-edge trends shaping the future of digital experiences with AI-powered interfaces and immersive 3D experiences",
    category: "Design",
    author: "Alex Morgan",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-blue-500 to-cyan-500",
    views: "125K",
    likes: "8.2K"
  },
  {
    id: 2,
    title: "React Performance Optimization",
    excerpt: "Advanced techniques to make your React applications lightning fast with code splitting and lazy loading strategies",
    category: "Development",
    author: "Jordan Smith",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-purple-500 to-pink-500",
    views: "98K",
    likes: "12.4K"
  },
  {
    id: 3,
    title: "AI in Content Creation",
    excerpt: "How artificial intelligence is revolutionizing content strategy and automating creative processes for modern marketers",
    category: "AI",
    author: "Taylor Kim",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-orange-500 to-red-500",
    views: "156K",
    likes: "15.7K"
  },
  {
    id: 4,
    title: "UX Research Methods",
    excerpt: "Proven techniques for understanding your users better through qualitative and quantitative research methodologies",
    category: "UX",
    author: "Casey Davis",
    readTime: "20 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-green-500 to-emerald-500",
    views: "87K",
    likes: "6.8K"
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    excerpt: "Building scalable and secure cloud architectures with modern DevOps practices and containerization technologies",
    category: "DevOps",
    author: "Riley Johnson",
    readTime: "25 min read",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-indigo-500 to-violet-500",
    views: "112K",
    likes: "9.3K"
  },
  {
    id: 6,
    title: "Mobile App Trends",
    excerpt: "The latest innovations in mobile application development with cross-platform solutions and native performance",
    category: "Mobile",
    author: "Sam Wilson",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-pink-500 to-rose-500",
    views: "94K",
    likes: "7.5K"
  }
];

export function VisualShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate featured content
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6 backdrop-blur-xl border border-white/10">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Editor&apos;s Choice
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-spacing-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              World&apos;s Most Beautiful
            </span>
            <br />
            <span className="text-foreground">Blog Content</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-spacing-wide">
            Curated by our editorial team from thousands of submissions worldwide
          </p>
        </motion.div>

        {/* Featured Content Showcase */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Featured Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10" />
                <img 
                  src={featuredContent[currentIndex].image} 
                  alt={featuredContent[currentIndex].title}
                  className="w-full h-80 md:h-full object-cover"
                />
                <div className={`absolute top-6 left-6 px-4 py-2 bg-gradient-to-r ${featuredContent[currentIndex].gradient} text-white rounded-full font-semibold text-sm`}>
                  {featuredContent[currentIndex].category}
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-spacing-tight">
                    {featuredContent[currentIndex].title}
                  </h3>
                  <p className="text-white/90 mb-4 text-spacing-wide">
                    {featuredContent[currentIndex].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-white/80">
                        <Users className="w-4 h-4" />
                        <span>{featuredContent[currentIndex].author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <TrendingUp className="w-4 h-4" />
                        <span>{featuredContent[currentIndex].readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredContent[currentIndex].id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm"
                      >
                        Read Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="h-full flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-spacing-tight">
                    {featuredContent[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-grow text-spacing-wide">
                    {featuredContent[currentIndex].excerpt}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="glass p-4 rounded-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1">
                        {featuredContent[currentIndex].views}
                      </div>
                      <div className="text-sm text-muted-foreground">Views</div>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-1">
                        {featuredContent[currentIndex].likes}
                      </div>
                      <div className="text-sm text-muted-foreground">Likes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {featuredContent[currentIndex].author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{featuredContent[currentIndex].author}</div>
                        <div className="text-sm text-muted-foreground">Author</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {featuredContent[currentIndex].readTime}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredContent[currentIndex].id}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all"
                    >
                      Read Full Article
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="w-12 h-12 rounded-full glass backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-12 h-12 rounded-full glass backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredContent.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {[
            { name: "Design", count: "1.2K", icon: "🎨", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80", gradient: "from-blue-500 to-cyan-500" },
            { name: "Development", count: "2.4K", icon: "💻", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", gradient: "from-purple-500 to-pink-500" },
            { name: "AI & ML", count: "890", icon: "🤖", image: "https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", gradient: "from-orange-500 to-red-500" },
            { name: "UX Research", count: "750", icon: "🔍", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", gradient: "from-green-500 to-emerald-500" },
            { name: "DevOps", count: "620", icon: "⚙️", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", gradient: "from-indigo-500 to-violet-500" },
            { name: "Mobile", count: "1.1K", icon: "📱", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", gradient: "from-pink-500 to-rose-500" },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl text-center backdrop-blur-xl border border-white/10 hover:shadow-xl transition-all cursor-pointer card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(&apos;${category.image}&apos;)` }} />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30" />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl mx-auto mb-4 relative z-10`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-lg mb-1 text-white relative z-10 text-spacing-tight">{category.name}</h3>
              <p className="text-white/80 text-sm relative z-10 text-spacing-wide">{category.count} articles</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
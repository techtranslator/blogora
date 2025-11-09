"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import Link from "next/link";

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Web Design in 2025",
    excerpt: "Explore the latest trends shaping the future of web design, from AI-powered interfaces to immersive 3D experiences.",
    category: "Design",
    date: "Oct 18, 2025",
    readTime: "8 min read",
    gradient: "from-blue-500 to-cyan-500",
    author: {
      name: "Alex Morgan",
      role: "Senior Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    tags: ["Web Design", "Trends", "UI/UX"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Building High-Performance React Applications",
    excerpt: "Learn best practices for optimizing React apps, including code splitting, lazy loading, and performance monitoring.",
    category: "Development",
    date: "Oct 15, 2025",
    readTime: "12 min read",
    gradient: "from-purple-500 to-pink-500",
    author: {
      name: "Jordan Smith",
      role: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    tags: ["React", "Performance", "JavaScript"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS: Advanced Techniques",
    excerpt: "Deep dive into advanced Tailwind CSS patterns, custom configurations, and optimization strategies.",
    category: "CSS",
    date: "Oct 12, 2025",
    readTime: "10 min read",
    gradient: "from-orange-500 to-red-500",
    author: {
      name: "Taylor Kim",
      role: "Content Strategist",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    tags: ["CSS", "Tailwind", "Frontend"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export function FeaturedPosts() {
  // Animation controls
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  // Animate on scroll
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and insightful articles handpicked by our editorial team
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
              className="group relative card-hover glass rounded-2xl overflow-hidden"
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
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
                      className="w-8 h-8 rounded-full object-cover image-hover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-background/50 text-xs rounded-full border border-border animate-fade-in-up"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Read More */}
                  <motion.div 
                    className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all button"
            >
              View All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
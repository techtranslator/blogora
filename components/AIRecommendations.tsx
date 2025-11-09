"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export function AIRecommendations({ currentPostId }: { currentPostId?: number }) {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate AI recommendation algorithm
  useEffect(() => {
    // Filter out the current post if we're on a post page
    let availablePosts = blogPosts;
    if (currentPostId) {
      availablePosts = blogPosts.filter(post => post.id !== currentPostId);
    }

    // Simple recommendation algorithm based on category similarity and popularity
    const recommended = availablePosts
      .sort((a, b) => {
        // Prioritize posts with similar categories
        const categoryMatchA = currentPostId 
          ? blogPosts.find(p => p.id === currentPostId)?.category === a.category 
          : false;
        const categoryMatchB = currentPostId 
          ? blogPosts.find(p => p.id === currentPostId)?.category === b.category 
          : false;
        
        // Factor in views and likes for popularity
        const popularityA = a.views + a.likes * 10;
        const popularityB = b.views + b.likes * 10;
        
        // Combine factors
        const scoreA = (categoryMatchA ? 2 : 1) * popularityA;
        const scoreB = (categoryMatchB ? 2 : 1) * popularityB;
        
        return scoreB - scoreA;
      })
      .slice(0, 4);

    // Simulate loading delay for AI processing
    const timer = setTimeout(() => {
      setRecommendations(recommended);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentPostId]);

  if (loading) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 -z-10" />
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 backdrop-blur-xl border border-white/10 w-fit">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Recommendations
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 -z-10" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 backdrop-blur-xl border border-white/10 w-fit"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Recommendations
          </span>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 hover:shadow-xl transition-all cursor-pointer"
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
                {/* Image */}
                <div className="relative h-40">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold mb-2 line-clamp-2 text-spacing-tight">{post.title}</h3>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-2 mb-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-muted-foreground">{post.author.name}</span>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
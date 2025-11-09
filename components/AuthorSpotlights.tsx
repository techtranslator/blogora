"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const authors = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Senior Designer & UI Expert",
    bio: "Alex has over 10 years of experience in UI/UX design and has contributed to over 200 articles on design principles and best practices.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    articles: 87,
    followers: "12.4K",
    expertise: ["UI Design", "Figma", "Prototyping"],
    gradient: "from-blue-500 to-cyan-500",
    background: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Tech Lead & Full-Stack Developer",
    bio: "Jordan specializes in React, Node.js, and cloud architecture. He's authored 120+ technical articles and tutorials.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    articles: 120,
    followers: "18.7K",
    expertise: ["React", "Node.js", "AWS"],
    gradient: "from-purple-500 to-pink-500",
    background: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Taylor Kim",
    role: "Content Strategist & SEO Specialist",
    bio: "Taylor focuses on content marketing and SEO strategies. She's written 95+ articles on digital marketing and content creation.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    articles: 95,
    followers: "9.2K",
    expertise: ["SEO", "Content Strategy", "Analytics"],
    gradient: "from-orange-500 to-red-500",
    background: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
];

export function AuthorSpotlights() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Authors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our expert authors who share their knowledge and insights with our community
          </p>
        </motion.div>

        {/* Authors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 card-hover relative overflow-hidden"
            >
              <Link href={`/authors/${author.id}`} className="block">
                {/* Background Image */}
                <div className="relative h-40">
                  <img 
                    src={author.background} 
                    alt={author.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30" />
                </div>
                
                {/* Author Header */}
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <img 
                        src={author.avatar} 
                        alt={author.name} 
                        className="w-16 h-16 rounded-full object-cover border-4 border-white image-hover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${author.gradient} flex items-center justify-center animate-pulse-slow`}>
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{author.name}</h3>
                      <p className="text-sm text-muted-foreground">{author.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {author.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1 bg-background/50 text-xs rounded-full border border-border animate-fade-in-up"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass p-3 rounded-xl text-center">
                      <div className="flex items-center justify-center text-primary mb-1">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="text-lg font-bold">{author.articles}</div>
                      <div className="text-xs text-muted-foreground">Articles</div>
                    </div>
                    <div className="glass p-3 rounded-xl text-center">
                      <div className="flex items-center justify-center text-primary mb-1">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="text-lg font-bold">{author.followers}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                  </div>

                  {/* View Profile */}
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold flex items-center link-hover">
                      View Profile →
                    </span>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/authors">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all button"
            >
              View All Authors
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
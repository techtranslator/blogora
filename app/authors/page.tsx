"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Award, TrendingUp, Search, Filter } from "lucide-react";
import Link from "next/link";

const authors = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Senior Designer & UI Expert",
    bio: "UI/UX designer with 10+ years of experience creating beautiful digital experiences.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    articles: 870,
    followers: "1.2M",
    expertise: ["UI Design", "Figma", "Prototyping"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Tech Lead & Full-Stack Developer",
    bio: "Full-stack developer specializing in React and Node.js ecosystems.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    articles: 1200,
    followers: "1.8M",
    expertise: ["React", "Node.js", "AWS"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Taylor Kim",
    role: "Content Strategist & SEO Specialist",
    bio: "Digital marketing expert with a passion for storytelling and content creation.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    articles: 950,
    followers: "920K",
    expertise: ["SEO", "Content Strategy", "Analytics"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Sam Wilson",
    role: "Frontend Engineer & Accessibility Expert",
    bio: "Frontend specialist focused on creating accessible and inclusive web experiences.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    articles: 670,
    followers: "850K",
    expertise: ["Accessibility", "HTML/CSS", "JavaScript"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Riley Johnson",
    role: "DevOps Engineer & Cloud Architect",
    bio: "Cloud infrastructure expert with a focus on scalable and secure deployments.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    articles: 540,
    followers: "730K",
    expertise: ["DevOps", "AWS", "Docker", "Kubernetes"],
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: 6,
    name: "Casey Davis",
    role: "Mobile Developer & UX Researcher",
    bio: "Mobile app developer with expertise in user research and cross-platform solutions.",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=150&h=150&fit=crop&crop=face",
    articles: 780,
    followers: "1M",
    expertise: ["React Native", "Flutter", "User Research"],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function AuthorsPage() {
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
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold">Expert Authors</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Authors</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover the 10,000+ talented writers and experts who share their knowledge and insights with our 50M+ community
          </p>
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
                placeholder="Search authors by name or expertise..."
                className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                className="pl-12 pr-10 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
              >
                <option>All Expertise</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>DevOps</option>
                <option>Mobile</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                className="pl-4 pr-10 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
              >
                <option>Sort by: Popularity</option>
                <option>Sort by: Articles</option>
                <option>Sort by: Followers</option>
                <option>Sort by: Name</option>
              </select>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Authors Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <Link href={`/authors/${author.id}`} className="block">
                {/* Author Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img 
                      src={author.avatar} 
                      alt={author.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${author.gradient} flex items-center justify-center`}>
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
                        className="px-3 py-1 bg-background/50 text-xs rounded-full border border-border"
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
                  <span className="text-primary font-semibold flex items-center">
                    View Profile →
                  </span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Load More Authors
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
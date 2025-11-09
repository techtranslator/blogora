"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Eye, Heart, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

// Mock data for authors
const getAuthorData = (id: string) => {
  const authors = [
    {
      id: "1",
      name: "Alex Morgan",
      role: "Senior Designer & UI Expert",
      bio: "Alex has over 10 years of experience in UI/UX design and has contributed to over 200 articles on design principles and best practices. She specializes in creating intuitive user interfaces that enhance user engagement and satisfaction.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      articles: 87,
      followers: "12.4K",
      expertise: ["UI Design", "Figma", "Prototyping", "User Research", "Design Systems"],
      gradient: "from-blue-500 to-cyan-500",
      joined: "Jan 2020",
      website: "https://alexmorgan.design",
      twitter: "@alexmorgandesign"
    },
    {
      id: "2",
      name: "Jordan Smith",
      role: "Tech Lead & Full-Stack Developer",
      bio: "Jordan specializes in React, Node.js, and cloud architecture. He's authored 120+ technical articles and tutorials. With a background in computer science and 8+ years of experience, Jordan focuses on building scalable and performant web applications.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      articles: 1200,
      followers: "1.8M",
      expertise: ["React", "Node.js", "AWS", "Docker", "Microservices"],
      gradient: "from-purple-500 to-pink-500",
      joined: "Mar 2019",
      website: "https://jordansmith.dev",
      twitter: "@jordansmithdev"
    },
    {
      id: "3",
      name: "Taylor Kim",
      role: "Content Strategist & SEO Specialist",
      bio: "Taylor focuses on content marketing and SEO strategies. She's written 95+ articles on digital marketing and content creation. With a passion for data-driven marketing, Taylor helps brands increase their online visibility and engagement.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      articles: 950,
      followers: "920K",
      expertise: ["SEO", "Content Strategy", "Analytics", "Social Media", "Email Marketing"],
      gradient: "from-orange-500 to-red-500",
      joined: "Aug 2020",
      website: "https://taylorkim.content",
      twitter: "@taylorkimcontent"
    }
  ];

  return authors.find(author => author.id === id) || authors[0];
};

// Mock data for author's articles
const getAuthorArticles = (authorId: string) => {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Design in 2025",
      excerpt: "Explore the latest trends shaping the future of web design, from AI-powered interfaces to immersive 3D experiences.",
      category: "Design",
      date: "Oct 18, 2025",
      readTime: "8 min read",
      views: 1240,
      likes: 89,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Creating Smooth Animations with Framer Motion",
      excerpt: "A comprehensive guide to creating beautiful, performant animations using Framer Motion in React.",
      category: "Animation",
      date: "Oct 8, 2025",
      readTime: "15 min read",
      views: 2103,
      likes: 187,
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      id: 7,
      title: "The Art of Minimalist Design",
      excerpt: "How to create impactful designs with less, focusing on whitespace, typography, and visual hierarchy.",
      category: "Design",
      date: "Oct 2, 2025",
      readTime: "7 min read",
      views: 1456,
      likes: 92,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return articles;
};

export default function AuthorProfile({ params }: { params: { id: string } }) {
  const author = getAuthorData(params.id);
  const articles = getAuthorArticles(params.id);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/authors" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Authors</span>
          </Link>
        </motion.div>

        {/* Author Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br ${author.gradient} flex items-center justify-center`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-display font-bold mb-2">{author.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{author.role}</p>
                <p className="text-muted-foreground mb-6">{author.bio}</p>

                {/* Expertise */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 glass text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="flex items-center justify-center text-primary mb-2">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold">{author.articles}</div>
                    <div className="text-sm text-muted-foreground">Articles</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="flex items-center justify-center text-primary mb-2">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold">{author.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="flex items-center justify-center text-primary mb-2">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold">4.8K</div>
                    <div className="text-sm text-muted-foreground">Likes</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="flex items-center justify-center text-primary mb-2">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold">2020</div>
                    <div className="text-sm text-muted-foreground">Joined</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Author's Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-display font-bold mb-8">Articles by {author.name}</h2>
          
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Link href={`/blog/${article.id}`}>
                    {/* Image Placeholder */}
                    <div className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-semibold">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

                      {/* Stats */}
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
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
              <p className="text-muted-foreground">This author hasn't published any articles yet.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Search, Filter, User, Tag, TrendingUp, Eye, Heart, Share2, Bookmark, ChevronRight } from "lucide-react";
import Link from "next/link";

// Mock data for subcategories
const getSubcategoryData = (categorySlug: string, subcategorySlug: string) => {
  const subcategories: Record<string, any> = {
    "web-development": {
      "frontend": {
        name: "Frontend Development",
        description: "Master the art of creating beautiful, responsive user interfaces with modern frontend technologies",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Web Development"
      },
      "backend": {
        name: "Backend Development",
        description: "Build robust, scalable server-side applications and APIs with modern backend technologies",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Web Development"
      },
      "full-stack": {
        name: "Full-Stack Development",
        description: "Become a versatile developer by mastering both frontend and backend technologies",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        parent: "Web Development"
      },
      "api": {
        name: "API Development",
        description: "Design, build, and secure RESTful and GraphQL APIs for modern applications",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Web Development"
      },
      "devops": {
        name: "DevOps",
        description: "Streamline development and deployment processes with modern DevOps practices",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Web Development"
      }
    },
    "programming": {
      "javascript": {
        name: "JavaScript",
        description: "Master JavaScript, the language of the web, from basics to advanced concepts",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Programming"
      },
      "python": {
        name: "Python",
        description: "Learn Python for web development, data science, automation, and more",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Programming"
      },
      "java": {
        name: "Java",
        description: "Enterprise-level programming with Java, from fundamentals to advanced frameworks",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        parent: "Programming"
      },
      "cpp": {
        name: "C++",
        description: "System programming and performance-critical applications with C++",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Programming"
      },
      "go": {
        name: "Go",
        description: "Modern, efficient programming with Google's Go language",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Programming"
      }
    },
    "design": {
      "ui-design": {
        name: "UI Design",
        description: "Create beautiful, intuitive user interfaces with modern design principles",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        parent: "Design"
      },
      "ux-research": {
        name: "UX Research",
        description: "Understand user needs and behaviors through research and testing",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Design"
      },
      "graphic-design": {
        name: "Graphic Design",
        description: "Visual communication through typography, imagery, and layout",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Design"
      },
      "motion-design": {
        name: "Motion Design",
        description: "Bring designs to life with animation and motion graphics",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        parent: "Design"
      },
      "design-systems": {
        name: "Design Systems",
        description: "Create scalable, consistent design systems for large applications",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        parent: "Design"
      }
    }
  };

  return subcategories[categorySlug]?.[subcategorySlug] || {
    name: "Subcategory",
    description: "Explore articles in this subcategory",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    parent: "Category"
  };
};

// Mock data for authors
const authors = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Senior Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Taylor Kim",
    role: "Content Strategist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  }
];

// Mock data for posts
const posts = [
  {
    id: 1,
    title: "The Future of Web Design in 2025",
    excerpt: "Explore the latest trends shaping the future of web design, from AI-powered interfaces to immersive 3D experiences.",
    category: "Design",
    date: "Oct 18, 2025",
    readTime: "8 min read",
    views: 1240,
    likes: 89,
    gradient: "from-blue-500 to-cyan-500",
    author: authors[0],
    tags: ["Web Design", "Trends", "UI/UX"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Building High-Performance React Applications",
    excerpt: "Learn best practices for optimizing React apps, including code splitting, lazy loading, and performance monitoring.",
    category: "Development",
    date: "Oct 15, 2025",
    readTime: "12 min read",
    views: 2156,
    likes: 142,
    gradient: "from-purple-500 to-pink-500",
    author: authors[1],
    tags: ["React", "Performance", "JavaScript"],
    featured: true,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS: Advanced Techniques",
    excerpt: "Deep dive into advanced Tailwind CSS patterns, custom configurations, and optimization strategies.",
    category: "CSS",
    date: "Oct 12, 2025",
    readTime: "10 min read",
    views: 987,
    likes: 67,
    gradient: "from-orange-500 to-red-500",
    author: authors[2],
    tags: ["CSS", "Tailwind", "Frontend"],
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Next.js 14: What's New and Exciting",
    excerpt: "Discover the latest features in Next.js 14, including improved performance and new developer tools.",
    category: "Framework",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    views: 1543,
    likes: 98,
    gradient: "from-green-500 to-emerald-500",
    author: authors[1],
    tags: ["Next.js", "React", "SSR"],
    featured: false,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
    gradient: "from-indigo-500 to-violet-500",
    author: authors[0],
    tags: ["Animation", "React", "Framer Motion"],
    featured: true,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  },
  {
    id: 6,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Essential SEO strategies to improve your website's visibility and ranking in search engines.",
    category: "SEO",
    date: "Oct 5, 2025",
    readTime: "9 min read",
    views: 1789,
    likes: 124,
    gradient: "from-pink-500 to-rose-500",
    author: authors[2],
    tags: ["SEO", "Marketing", "Optimization"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
    gradient: "from-teal-500 to-cyan-500",
    author: authors[0],
    tags: ["Design", "Minimalism", "UI/UX"],
    featured: false,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
  },
  {
    id: 8,
    title: "State Management in React Applications",
    excerpt: "Comparing different state management solutions for React apps, from Context API to Redux Toolkit.",
    category: "Development",
    date: "Sep 28, 2025",
    readTime: "11 min read",
    views: 1876,
    likes: 134,
    gradient: "from-amber-500 to-orange-500",
    author: authors[1],
    tags: ["React", "State Management", "Redux"],
    featured: false,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
];

export default function SubcategoryPage({ params }: { params: { category: string, subcategory: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  
  const subcategoryData = getSubcategoryData(params.category, params.subcategory);
  
  const sortOptions = [
    { value: "date", label: "Latest" },
    { value: "popular", label: "Most Popular" },
    { value: "views", label: "Most Viewed" }
  ];

  // Filter posts based on search term and subcategory
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    // For demo purposes, we'll show all posts in each subcategory
    return matchesSearch;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "views") {
      return b.views - a.views;
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumbs */}
      <section className="container mx-auto px-6 mb-8">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link href={`/blog/category/${params.category}`} className="text-muted-foreground hover:text-primary transition-colors">
            {subcategoryData.parent}
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">{subcategoryData.name}</span>
        </nav>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold">Subcategory</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            {subcategoryData.name} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            {subcategoryData.description}
          </p>
        </motion.div>
      </section>

      {/* Subcategory Image */}
      <section className="container mx-auto px-6 mb-16">
        <div className="rounded-3xl overflow-hidden h-96 relative">
          <div className="w-full h-full relative">
            <Image 
              src={subcategoryData.image} 
              alt={subcategoryData.name}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-5xl font-display font-bold mb-4">{subcategoryData.name}</h1>
            <p className="text-xl max-w-2xl">{subcategoryData.description}</p>
          </div>
        </div>
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
          </div>
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
                  <div className="w-full h-full relative">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
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
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                      <Image 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
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
                    <div className="w-full h-full relative">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-xs font-semibold">
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
                      <div className="w-8 h-8 relative rounded-full overflow-hidden">
                        <Image 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
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
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Load More Articles
          </motion.button>
        </motion.div>
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
            Stay Updated on {subcategoryData.name}
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles and insights in {subcategoryData.name} delivered to your inbox every week
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
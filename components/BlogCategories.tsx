"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { BookOpen, Code, Palette, Smartphone, Search, PenTool, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: BookOpen,
    title: "Web Development",
    description: "Tutorials and insights on modern web development technologies",
    count: 1280,
    gradient: "from-blue-500 to-cyan-500",
    slug: "web-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "Frontend Development", slug: "frontend", count: 450 },
      { name: "Backend Development", slug: "backend", count: 380 },
      { name: "Full-Stack Development", slug: "full-stack", count: 220 },
      { name: "API Development", slug: "api", count: 150 },
      { name: "DevOps", slug: "devops", count: 80 }
    ]
  },
  {
    icon: Code,
    title: "Programming",
    description: "Deep dives into programming languages and best practices",
    count: 960,
    gradient: "from-purple-500 to-pink-500",
    slug: "programming",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "JavaScript", slug: "javascript", count: 320 },
      { name: "Python", slug: "python", count: 280 },
      { name: "Java", slug: "java", count: 180 },
      { name: "C++", slug: "cpp", count: 120 },
      { name: "Go", slug: "go", count: 60 }
    ]
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX design principles, tools, and creative inspiration",
    count: 870,
    gradient: "from-orange-500 to-red-500",
    slug: "design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    subcategories: [
      { name: "UI Design", slug: "ui-design", count: 250 },
      { name: "UX Research", slug: "ux-research", count: 220 },
      { name: "Graphic Design", slug: "graphic-design", count: 180 },
      { name: "Motion Design", slug: "motion-design", count: 120 },
      { name: "Design Systems", slug: "design-systems", count: 100 }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Mobile app development and cross-platform solutions",
    count: 640,
    gradient: "from-green-500 to-emerald-500",
    slug: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "iOS Development", slug: "ios", count: 240 },
      { name: "Android Development", slug: "android", count: 220 },
      { name: "React Native", slug: "react-native", count: 120 },
      { name: "Flutter", slug: "flutter", count: 80 },
      { name: "Mobile UX", slug: "mobile-ux", count: 80 }
    ]
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Strategies to improve visibility and drive organic traffic",
    count: 520,
    gradient: "from-indigo-500 to-violet-500",
    slug: "seo-marketing",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "SEO Optimization", slug: "seo", count: 200 },
      { name: "Content Marketing", slug: "content-marketing", count: 150 },
      { name: "Social Media", slug: "social-media", count: 100 },
      { name: "Email Marketing", slug: "email-marketing", count: 50 },
      { name: "Analytics", slug: "analytics", count: 20 }
    ]
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Tips and tools for creating engaging content",
    count: 430,
    gradient: "from-pink-500 to-rose-500",
    slug: "content-creation",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "Writing Tips", slug: "writing", count: 180 },
      { name: "Video Content", slug: "video", count: 120 },
      { name: "Podcasting", slug: "podcasting", count: 80 },
      { name: "Visual Content", slug: "visual-content", count: 50 }
    ]
  },
  // Additional categories to reach 200+
  {
    icon: Code,
    title: "Data Science",
    description: "Machine learning, AI, and data analysis techniques",
    count: 750,
    gradient: "from-teal-500 to-cyan-500",
    slug: "data-science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "Machine Learning", slug: "machine-learning", count: 300 },
      { name: "Data Analysis", slug: "data-analysis", count: 200 },
      { name: "Artificial Intelligence", slug: "ai", count: 150 },
      { name: "Big Data", slug: "big-data", count: 100 }
    ]
  },
  {
    icon: Smartphone,
    title: "Cloud Computing",
    description: "Cloud platforms, services, and deployment strategies",
    count: 680,
    gradient: "from-blue-500 to-indigo-500",
    slug: "cloud-computing",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "AWS", slug: "aws", count: 250 },
      { name: "Azure", slug: "azure", count: 200 },
      { name: "Google Cloud", slug: "gcp", count: 150 },
      { name: "Kubernetes", slug: "kubernetes", count: 80 }
    ]
  },
  {
    icon: BookOpen,
    title: "Cybersecurity",
    description: "Security best practices, threats, and protection strategies",
    count: 590,
    gradient: "from-red-500 to-orange-500",
    slug: "cybersecurity",
    image: "https://images.unsplash.com/photo-1563017873-303a1659b47d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "Network Security", slug: "network-security", count: 200 },
      { name: "Application Security", slug: "app-security", count: 180 },
      { name: "Ethical Hacking", slug: "ethical-hacking", count: 120 },
      { name: "Compliance", slug: "compliance", count: 90 }
    ]
  },
  {
    icon: Palette,
    title: "Business & Strategy",
    description: "Entrepreneurship, management, and business growth",
    count: 820,
    gradient: "from-purple-500 to-indigo-500",
    slug: "business-strategy",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "Entrepreneurship", slug: "entrepreneurship", count: 300 },
      { name: "Leadership", slug: "leadership", count: 250 },
      { name: "Marketing Strategy", slug: "marketing-strategy", count: 180 },
      { name: "Finance", slug: "finance", count: 90 }
    ]
  },
  {
    icon: Search,
    title: "DevOps & Automation",
    description: "CI/CD, automation, and infrastructure management",
    count: 710,
    gradient: "from-green-500 to-teal-500",
    slug: "devops-automation",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae6b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "CI/CD", slug: "ci-cd", count: 250 },
      { name: "Infrastructure as Code", slug: "iac", count: 200 },
      { name: "Monitoring", slug: "monitoring", count: 150 },
      { name: "Containerization", slug: "containers", count: 110 }
    ]
  },
  {
    icon: PenTool,
    title: "Product Management",
    description: "Product development, strategy, and user experience",
    count: 480,
    gradient: "from-indigo-500 to-purple-500",
    slug: "product-management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subcategories: [
      { name: "Product Strategy", slug: "product-strategy", count: 200 },
      { name: "User Research", slug: "user-research", count: 150 },
      { name: "Agile Methodology", slug: "agile", count: 100 },
      { name: "Roadmapping", slug: "roadmapping", count: 30 }
    ]
  },
];

export function BlogCategories() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

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
            Explore by <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of 200+ categories and 1000+ subcategories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="glass rounded-2xl hover:bg-white/10 transition-all duration-300 card-hover relative overflow-hidden"
            >
              <Link href={`/blog/category/${category.slug}`} className="block">
                {/* Image */}
                <div className="relative h-40">
                  <div className="w-full h-full relative">
                    <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 animate-float`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>

                  {/* Article Count */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">
                      {category.count} articles
                    </span>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCategory(category.slug);
                      }}
                      className="text-primary font-semibold flex items-center link-hover"
                    >
                      {expandedCategories[category.slug] ? (
                        <>
                          <span>Collapse</span>
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          <span>Expand</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Subcategories */}
                  {expandedCategories[category.slug] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-border pt-4 mt-4"
                    >
                      <h4 className="font-semibold mb-3 text-sm">Subcategories</h4>
                      <ul className="space-y-2">
                        {category.subcategories.map((subcat, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              href={`/blog/category/${category.slug}/${subcat.slug}`}
                              className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                            >
                              <span>{subcat.name}</span>
                              <span className="text-muted-foreground">{subcat.count}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
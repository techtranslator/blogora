"use client";

import { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Tag, Eye, Heart, Share2, Bookmark, MessageCircle, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { getBlogPostById, blogPosts } from "@/lib/blogData";
import { AIRecommendations } from "@/components/AIRecommendations";
import { AdSense } from "@/components/AdSense";
import { BlogPostingStructuredData } from "@/components/StructuredData";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import type { BlogPost } from "@/lib/blogData";

// FAQ Data
const faqs = [
  {
    question: "What are the key web design trends for 2025?",
    answer: "The key trends for 2025 include AI-powered design systems, immersive 3D experiences, and the evolution of neumorphic design with enhanced accessibility features."
  },
  {
    question: "How can I implement AI-powered design in my projects?",
    answer: "Start by exploring AI design tools like Adobe Firefly, Midjourney, or DALL-E for visual assets. For development, consider using AI-powered design systems that can generate layouts and suggest color palettes."
  },
  {
    question: "What tools are best for creating 3D web experiences?",
    answer: "For 3D web experiences, consider using libraries like Three.js, Babylon.js, or React Three Fiber. These tools provide powerful capabilities for creating immersive 3D content directly in the browser."
  },
  {
    question: "How do I optimize React applications for performance?",
    answer: "Key optimization techniques include code splitting with React.lazy(), using useMemo() and useCallback() hooks, implementing proper state management, and monitoring Core Web Vitals with tools like Lighthouse."
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(i => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={post.title}
        description={post.excerpt}
        url={`https://blogora.example.com/blog/${post.id}`}
        image={post.image}
        type="article"
        keywords={post.tags}
        author={post.author.name}
        publishedTime={post.structuredData.datePublished}
        modifiedTime={post.structuredData.dateModified}
        section={post.category}
        tags={post.tags}
      />
      
      {/* Structured Data */}
      <BlogPostingStructuredData post={post} url="https://blogora.example.com" />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Back to blog"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumbs */}
            <Breadcrumbs 
              items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]}
            />
            
            {/* Breadcrumb Structured Data */}
            <BreadcrumbStructuredData 
              items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.id}` }]}
              baseUrl="https://blogora.example.com"
            />
            
            {/* Category and Featured Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold rounded-full`}>
                  {post.category}
                </div>
                {post.featured && (
                  <div className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-sm font-semibold rounded-full border border-yellow-500/30">
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{post.author.name}</div>
                  <div>{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Article Image */}
            <div className="rounded-2xl overflow-hidden mb-12 relative h-96">
              <div className="w-full h-full relative">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              {/* AdSense In-content Placement */}
              <AdSense adSlot="1234567890" adFormat="fluid" />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 glass text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-8 border-t border-b border-border mb-12">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    liked ? "text-red-500 bg-red-500/10" : "text-muted-foreground hover:text-red-500"
                  }`}
                  aria-label={liked ? "Unlike article" : "Like article"}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                  <span>{post.likes + (liked ? 1 : 0)}</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    bookmarked ? "text-blue-500 bg-blue-500/10" : "text-muted-foreground hover:text-blue-500"
                  }`}
                  aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
                >
                  <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
                  <span>Save</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full text-muted-foreground hover:text-green-500 transition-colors"
                  aria-label="Share article"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </motion.button>
              </div>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MessageCircle className="w-5 h-5" />
                <span>12 comments</span>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      {expandedFaqs.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    {expandedFaqs.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="px-6 pb-6 text-muted-foreground"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl mb-12"
            >
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">About {post.author.name}</h3>
                  <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div>
                      <div className="font-semibold">{post.author.articles}</div>
                      <div className="text-muted-foreground">Articles</div>
                    </div>
                    <div>
                      <div className="font-semibold">{post.author.followers}</div>
                      <div className="text-muted-foreground">Followers</div>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
                >
                  Follow
                </motion.button>
              </div>
            </motion.div>
            
            {/* AdSense Below Author Bio */}
            <div className="mb-12">
              <AdSense adSlot="9876543210" adFormat="horizontal" />
            </div>

            {/* AI Recommendations */}
            <AIRecommendations currentPostId={post.id} />

            {/* Related Posts */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {blogPosts.slice(0, 3).map((relatedPost: BlogPost, index: number) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Link href={`/blog/${relatedPost.id}`} aria-label={`Read related article: ${relatedPost.title}`}>
                      {/* Image */}
                      <div className="relative h-32">
                        <div className="w-full h-full relative">
                          <Image 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                        <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-xl rounded-full text-white text-xs font-semibold">
                          {relatedPost.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{relatedPost.views}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-2xl text-center"
            >
              <div className="max-w-xl mx-auto">
                <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold mb-4">
                  Never Miss an Update
                </h2>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter and get the latest articles delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-full bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    aria-label="Email for newsletter subscription"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
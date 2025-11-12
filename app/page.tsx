"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { BlogCategories } from "@/components/BlogCategories";
import { Stats } from "@/components/Stats";
import { AuthorSpotlights } from "@/components/AuthorSpotlights";
import { CTA } from "@/components/CTA";
import { VisualShowcase } from "@/components/VisualShowcase";
import { AIRecommendations } from "@/components/AIRecommendations";
import { ParallaxSection } from "@/components/ParallaxSection";
import { DataVisualization } from "@/components/DataVisualization";
import { CommunityFeatures } from "@/components/CommunityFeatures";
import { AdSense } from "@/components/AdSense";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VisualShowcase />
      
      {/* Interactive Engagement Section */}
      <motion.div 
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-background to-secondary/10"
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Blogora</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The world&apos;s largest premium blogging platform connecting 1M+ readers with expert content.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Premium Content", desc: "10,000+ expert articles" },
              { title: "Global Community", desc: "Readers from 50+ countries" },
              { title: "Expert Authors", desc: "1,000+ industry professionals" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                  {item.title.split(' ')[0]}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Explore Our Content
          </motion.button>
        </div>
      </motion.div>
      
      <ParallaxSection />
      <DataVisualization />
      <FeaturedPosts />
      {/* AdSense Between Sections */}
      <div className="container mx-auto px-6 py-8">
        <AdSense adSlot="your-homepage-ad-slot" adFormat="horizontal" />
      </div>
      <BlogCategories />
      <CommunityFeatures />
      <Stats />
      <AuthorSpotlights />
      <AIRecommendations />
      <CTA />
    </div>
  );
}
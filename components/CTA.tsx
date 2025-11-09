"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, BookOpen, Bell, UserPlus } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* High-Quality Background Image */}
      <div className="absolute inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Stay updated with the latest articles, get exclusive content, and connect with fellow readers and authors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/blog">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.3), 0 10px 10px -5px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all button"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Articles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/subscribe">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-white/20 transition-all button"
              >
                <Bell className="w-5 h-5" />
                <span>Subscribe</span>
              </motion.button>
            </Link>
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl max-w-2xl mx-auto animate-gradient"
          >
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50M+</div>
                <div className="text-white/80 text-sm">Active Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-white/80 text-sm">Expert Authors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100K+</div>
                <div className="text-white/80 text-sm">Articles</div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Curated Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Expert Authors</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Community Driven</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
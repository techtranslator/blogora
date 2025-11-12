"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Award, Clock, Shield, Globe, Users, TrendingUp, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            World&apos;s <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Largest</span> Blogging Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connecting 1M+ readers with premium content from 1,000+ expert authors. Join the future of digital publishing.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {[
              { value: "10K+", label: "Premium Articles" },
              { value: "1M+", label: "Monthly Readers" },
              { value: "1K+", label: "Expert Authors" },
              { value: "50+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass p-4 rounded-xl"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Propositions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto"
        >
          {[
            { icon: Globe, title: "Global Reach", description: "Content distributed worldwide" },
            { icon: Users, title: "Community", description: "1M+ engaged readers" },
            { icon: TrendingUp, title: "Growth", description: "15% monthly traffic increase" },
            { icon: Zap, title: "Performance", description: "Lightning-fast experience" },
          ].map((value, index) => (
            <div key={index} className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/20 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Let&apos;s Talk</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a question, a project idea, or just want to say hello, we&apos;re here to help. Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@aurora.design" },
                { icon: Mail, label: "Direct Contact", value: "huzaifakaim612@gmail.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 glass p-4 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>Select a service</option>
                  <option>Content Creation & Blogging</option>
                  <option>SEO & Digital Marketing</option>
                  <option>AdSense Integration & Optimization</option>
                  <option>Web Development</option>
                  <option>Mobile Apps</option>
                  <option>E-Commerce Solutions</option>
                  <option>UI/UX Design</option>
                  <option>Consulting & Strategy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Budget</label>
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>Select budget range</option>
                  <option>Under $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>Above $100,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Details</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Please provide detailed information about your project, including goals, timeline, and any specific requirements..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="w-4 h-4 rounded text-blue-500 focus:ring-blue-500" />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I agree to the <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-500 hover:underline">Terms of Service</a>
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

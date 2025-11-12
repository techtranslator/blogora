"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Bell, Zap, BookOpen, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Subscribing email:", email);
    setSubmitted(true);
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for casual readers",
      features: [
        "Weekly newsletter",
        "Access to 3 articles per week",
        "Basic commenting",
        "Community access"
      ],
      cta: "Current Plan",
      popular: false
    },
    {
      name: "Premium",
      price: "$5",
      period: "per month",
      description: "For avid readers and professionals",
      features: [
        "Daily newsletter",
        "Unlimited article access",
        "Priority commenting",
        "Exclusive content",
        "Early access to new features",
        "Ad-free reading"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Pro",
      price: "$15",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Premium",
        "Team collaboration tools",
        "Analytics dashboard",
        "Custom branding",
        "Priority support",
        "API access"
      ],
      cta: "Try Free for 14 Days",
      popular: false
    }
  ];

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
            href="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {submitted ? (
          /* Success Message */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="glass p-12 rounded-3xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-display font-bold mb-4">Welcome Aboard!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for subscribing to our newsletter. We&apos;ve sent a confirmation email to <span className="text-primary">{email}</span>.
              </p>
              <p className="text-muted-foreground mb-8">
                You&apos;ll start receiving our weekly insights on design, development, and technology shortly.
              </p>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Hero */}
            <section className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6"
              >
                <Bell className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold">Stay Updated</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-display font-bold mb-6"
              >
                Join Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Community</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12"
              >
                Get the latest articles, insights, and exclusive content delivered directly to your inbox.
              </motion.p>
            </section>

            {/* Newsletter Signup */}
            <section className="max-w-2xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-display font-bold mb-2">Newsletter Signup</h2>
                <p className="text-muted-foreground mb-6">
                  Join 50,000+ readers who receive our weekly insights on design, development, and technology.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Subscribe to Newsletter
                  </motion.button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </motion.div>
            </section>

            {/* Subscription Plans */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-display font-bold mb-4">Subscription Plans</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the plan that works best for you and your team
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass rounded-2xl p-8 relative ${
                      plan.popular ? "ring-2 ring-blue-500/50 scale-105" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50"
                          : "bg-background border border-border hover:bg-white/10"
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-3xl"
              >
                <h2 className="text-3xl font-display font-bold text-center mb-12">Why Subscribe?</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Stay Ahead</h3>
                    <p className="text-muted-foreground">
                      Get early access to industry trends and insights before they become mainstream.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Expert Content</h3>
                    <p className="text-muted-foreground">
                      Access exclusive articles and tutorials from industry experts and thought leaders.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Career Growth</h3>
                    <p className="text-muted-foreground">
                      Accelerate your career with actionable insights and professional development tips.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
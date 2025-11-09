"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Rocket, Code, Palette } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with 95+ PageSpeed scores and sub-second load times.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL, DDoS protection, and regular audits.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Premium Design",
    description: "Award-winning designs that captivate and convert your audience.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Scalable",
    description: "Built to grow with your business from startup to enterprise.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, well-documented code following best practices.",
    gradient: "from-red-400 to-rose-500",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Tailored to your unique needs, not cookie-cutter templates.",
    gradient: "from-indigo-400 to-violet-500",
  },
];

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AURORA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with stunning design to create digital experiences that drive results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-2xl h-full hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

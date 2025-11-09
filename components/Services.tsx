"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, Search, PenTool, BarChart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom websites built with Next.js, React, and modern technologies.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Full-featured online stores with payment integration and inventory management.",
    features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Integration"],
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Data-driven strategies to increase visibility and drive conversions.",
    features: ["Technical SEO", "Content Strategy", "Analytics", "Social Media"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance engagement and usability.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: BarChart,
    title: "Consulting",
    description: "Expert guidance to help you make informed technology decisions.",
    features: ["Strategy Planning", "Tech Audits", "Team Training", "Growth Consulting"],
  },
];

export function Services() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 text-blue-500 font-semibold flex items-center group"
              >
                Learn More
                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

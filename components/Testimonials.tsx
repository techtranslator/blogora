"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "AURORA transformed our digital presence completely. The attention to detail and premium quality is unmatched. Our conversion rate increased by 300%!",
    rating: 5,
    avatar: "SJ",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Michael Chen",
    role: "Founder, DesignCo",
    content: "Working with AURORA was an absolute pleasure. They delivered beyond our expectations and the website performs flawlessly. Highly recommended!",
    rating: 5,
    avatar: "MC",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, GlobalBrand",
    content: "The team at AURORA is exceptional. They understood our vision and created something truly remarkable. The results speak for themselves.",
    rating: 5,
    avatar: "EW",
    gradient: "from-orange-500 to-red-500",
  },
];

export function Testimonials() {
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
            Client <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

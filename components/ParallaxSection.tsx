"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, TrendingUp, Globe } from "lucide-react";

export function ParallaxSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Premium Content",
      description: "Access 10,000+ expert-curated articles across 50+ categories"
    },
    {
      icon: Users,
      title: "Expert Authors",
      description: "Learn from 1,000+ industry professionals and thought leaders"
    },
    {
      icon: TrendingUp,
      title: "Personal Growth",
      description: "Track your reading progress and skill development journey"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with 1M+ readers from around the world"
    }
  ];

  return (
    <div className="relative">
      {/* Parallax Background Section - Simplified */}
      <section 
        className="h-[600px] flex items-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Experience Premium Content
              </span>
              <br />
              <span className="text-foreground">Like Never Before</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our immersive platform combines cutting-edge technology with expert content 
              to deliver an unparalleled reading experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Tilt Cards Section - Simplified */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Blogora Stands Out
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us the world&apos;s largest and most beautiful blogging platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="glass rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 3D Visualization */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Interactive <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">3D Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform features cutting-edge 3D visualizations that bring content to life. 
                Explore data-driven insights through interactive charts and immersive experiences.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-foreground">Real-time data visualization with 3D charts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-foreground">Interactive content exploration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-foreground">Immersive reading experiences with spatial UI</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-3xl glass overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* 3D Cube Visualization */}
                    <div className="absolute inset-0 animate-spin-slow" style={{ transformStyle: "preserve-3d" }}>
                      <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl" 
                           style={{ transform: "translateZ(64px)" }}></div>
                      <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl" 
                           style={{ transform: "rotateY(90deg) translateZ(64px)" }}></div>
                      <div className="absolute w-32 h-32 bg-gradient-to-br from-pink-500/20 to-red-600/20 border border-pink-500/30 rounded-xl" 
                           style={{ transform: "rotateY(180deg) translateZ(64px)" }}></div>
                      <div className="absolute w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-600/20 border border-red-500/30 rounded-xl" 
                           style={{ transform: "rotateY(-90deg) translateZ(64px)" }}></div>
                      <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-600/20 border border-orange-500/30 rounded-xl" 
                           style={{ transform: "rotateX(90deg) translateZ(64px)" }}></div>
                      <div className="absolute w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-green-600/20 border border-yellow-500/30 rounded-xl" 
                           style={{ transform: "rotateX(-90deg) translateZ(64px)" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
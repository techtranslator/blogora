"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We don't settle for good enough. Every detail matters, every interaction counts.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your success is our success. We work as partners, not vendors.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Pushing boundaries, exploring new technologies, always staying ahead.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication, transparent processes, unwavering ethical standards.",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AURORA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            We&apos;re a team of passionate designers and developers creating premium digital experiences that inspire and convert.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, AURORA emerged from a simple belief: digital experiences should be beautiful, functional, and inspiring.
              </p>
              <p>
                We&apos;re not just building websites&mdash;we&apos;re crafting digital art installations that happen to be functional. Every project passes our &quot;Premium Test&quot;: Would this feel at home in a luxury hotel? Would Steve Jobs approve? Does this spark joy?
              </p>
              <p>
                Our team brings together decades of experience from leading tech companies and design studios, united by a passion for excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "50+", label: "Team" },
              { value: "15+", label: "Countries" },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6">Our Values</h2>
          <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

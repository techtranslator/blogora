"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServicesPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-Page Website",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "1 Month Support",
        "Fast Delivery (2 weeks)",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$7,999",
      description: "Ideal for growing businesses",
      features: [
        "15-Page Website",
        "Premium Design",
        "Advanced SEO",
        "CMS Integration",
        "E-Commerce Ready",
        "3 Months Support",
        "Analytics Setup",
        "Performance Optimization",
      ],
      gradient: "from-purple-500 to-pink-500",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$19,999",
      description: "For large-scale projects",
      features: [
        "Unlimited Pages",
        "Custom Design System",
        "Enterprise SEO",
        "Advanced Features",
        "API Integrations",
        "12 Months Support",
        "Dedicated Team",
        "Priority Support",
        "Custom Development",
      ],
      gradient: "from-orange-500 to-red-500",
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
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Premium digital solutions tailored to your business needs
          </p>
        </motion.div>
      </section>

      {/* Pricing Plans */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground">Transparent pricing, exceptional value</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass p-8 rounded-2xl ${
                plan.featured ? "ring-2 ring-primary shadow-2xl shadow-primary/20 scale-105" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                <span className="text-2xl font-bold text-white">{plan.name[0]}</span>
              </div>

              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">/ project</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50"
                    : "glass hover:bg-white/10"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6">Our Process</h2>
          <p className="text-xl text-muted-foreground">How we bring your vision to life</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience" },
            { step: "02", title: "Design", description: "Creating stunning designs that align with your brand" },
            { step: "03", title: "Development", description: "Building with cutting-edge technologies" },
            { step: "04", title: "Launch", description: "Testing, optimization, and successful deployment" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

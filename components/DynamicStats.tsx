"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const initialStats: StatItem[] = [
  { value: 100000, suffix: "+", label: "Articles Published" },
  { value: 50000000, suffix: "+", label: "Monthly Readers" },
  { value: 10000, suffix: "+", label: "Expert Authors" },
  { value: 5000000, suffix: "+", label: "Community Members" },
];

export function DynamicStats() {
  const [stats, setStats] = useState<StatItem[]>(initialStats);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setStats(prevStats => 
        prevStats.map(stat => {
          // Generate a small random increase
          const increment = Math.floor(Math.random() * 100);
          return {
            ...stat,
            value: stat.value + increment
          };
        })
      );
      
      // Reset animation state after a short delay
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
            {stat.value.toLocaleString()}{stat.suffix}
          </div>
          <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
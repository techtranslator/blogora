"use client";

import { motion } from "framer-motion";
import { DynamicStats } from "./DynamicStats";

export function Stats() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-16 rounded-3xl"
        >
          <DynamicStats />
        </motion.div>
      </div>
    </section>
  );
}
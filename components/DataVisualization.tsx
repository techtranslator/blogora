"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell 
} from "recharts";
import { WorldMap } from "./WorldMap";

export function DataVisualization() {
  const [activeTab, setActiveTab] = useState("readers");
  const [animationKey, setAnimationKey] = useState(0);

  // Mock data for visualizations
  const readerData = [
    { month: "Jan", readers: 4000, newReaders: 2400 },
    { month: "Feb", readers: 3000, newReaders: 1398 },
    { month: "Mar", readers: 2000, newReaders: 9800 },
    { month: "Apr", readers: 2780, newReaders: 3908 },
    { month: "May", readers: 1890, newReaders: 4800 },
    { month: "Jun", readers: 2390, newReaders: 3800 },
    { month: "Jul", readers: 3490, newReaders: 4300 },
  ];

  const categoryData = [
    { name: "Technology", value: 400 },
    { name: "Design", value: 300 },
    { name: "Business", value: 300 },
    { name: "Lifestyle", value: 200 },
    { name: "Health", value: 278 },
    { name: "Science", value: 189 },
  ];

  const engagementData = [
    { day: "Mon", engagement: 4000 },
    { day: "Tue", engagement: 3000 },
    { day: "Wed", engagement: 2000 },
    { day: "Thu", engagement: 2780 },
    { day: "Fri", engagement: 1890 },
    { day: "Sat", engagement: 2390 },
    { day: "Sun", engagement: 3490 },
  ];

  const COLORS = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe", "#ede9fe", "#f5f3ff"];

  useEffect(() => {
    // Trigger re-animation when tab changes
    setAnimationKey(prev => prev + 1);
  }, [activeTab]);

  const renderChart = () => {
    switch (activeTab) {
      case "readers":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={readerData} key={animationKey}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Legend />
              <Bar dataKey="readers" name="Total Readers" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="newReaders" name="New Readers" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "categories":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart key={animationKey}>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={(entry) => {
                  const name = entry.name as string;
                  const percent = entry.percent as number | undefined;
                  if (typeof percent === 'number' && !isNaN(percent)) {
                    return `${name}: ${(percent * 100).toFixed(0)}%`;
                  }
                  return name;
                }}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case "engagement":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={engagementData} key={animationKey}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                name="Daily Engagement" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ r: 6, fill: "#8b5cf6" }}
                activeDot={{ r: 8, fill: "#7c3aed" }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case "worldmap":
        return (
          <div className="h-full flex items-center justify-center">
            <WorldMap />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Interactive <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Data Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore real-time statistics and trends from our global blogging community
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-secondary rounded-2xl border border-border">
            {[
              { id: "readers", label: "Reader Growth" },
              { id: "categories", label: "Content Categories" },
              { id: "engagement", label: "Engagement Metrics" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 shadow-2xl"
        >
          <div className="h-96">
            {renderChart()}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-foreground mb-2">50M+</div>
            <div className="text-muted-foreground">Active Readers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-foreground mb-2">100K+</div>
            <div className="text-muted-foreground">Premium Articles</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-foreground mb-2">200+</div>
            <div className="text-muted-foreground">Content Categories</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
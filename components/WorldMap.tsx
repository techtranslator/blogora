"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface CountryData {
  id: string;
  name: string;
  readers: number;
  x: number;
  y: number;
  color: string;
}

const countries: CountryData[] = [
  { id: "us", name: "United States", readers: 15000000, x: 20, y: 35, color: "from-blue-500 to-cyan-500" },
  { id: "ca", name: "Canada", readers: 2500000, x: 18, y: 30, color: "from-blue-500 to-cyan-500" },
  { id: "uk", name: "United Kingdom", readers: 8000000, x: 45, y: 32, color: "from-blue-500 to-cyan-500" },
  { id: "de", name: "Germany", readers: 6500000, x: 47, y: 35, color: "from-blue-500 to-cyan-500" },
  { id: "fr", name: "France", readers: 5200000, x: 46, y: 38, color: "from-blue-500 to-cyan-500" },
  { id: "es", name: "Spain", readers: 3800000, x: 43, y: 42, color: "from-blue-500 to-cyan-500" },
  { id: "it", name: "Italy", readers: 3200000, x: 48, y: 42, color: "from-blue-500 to-cyan-500" },
  { id: "jp", name: "Japan", readers: 9500000, x: 85, y: 38, color: "from-blue-500 to-cyan-500" },
  { id: "cn", name: "China", readers: 12000000, x: 78, y: 35, color: "from-blue-500 to-cyan-500" },
  { id: "in", name: "India", readers: 8500000, x: 72, y: 45, color: "from-blue-500 to-cyan-500" },
  { id: "br", name: "Brazil", readers: 4200000, x: 32, y: 65, color: "from-blue-500 to-cyan-500" },
  { id: "au", name: "Australia", readers: 3500000, x: 85, y: 75, color: "from-blue-500 to-cyan-500" },
  { id: "ru", name: "Russia", readers: 2800000, x: 55, y: 25, color: "from-blue-500 to-cyan-500" },
  { id: "kr", name: "South Korea", readers: 2100000, x: 83, y: 36, color: "from-blue-500 to-cyan-500" },
  { id: "nl", name: "Netherlands", readers: 1800000, x: 46, y: 33, color: "from-blue-500 to-cyan-500" },
  { id: "se", name: "Sweden", readers: 1200000, x: 48, y: 25, color: "from-blue-500 to-cyan-500" },
  { id: "ch", name: "Switzerland", readers: 900000, x: 47, y: 36, color: "from-blue-500 to-cyan-500" },
  { id: "sg", name: "Singapore", readers: 700000, x: 79, y: 55, color: "from-blue-500 to-cyan-500" },
  { id: "ae", name: "UAE", readers: 1100000, x: 62, y: 45, color: "from-blue-500 to-cyan-500" },
  { id: "za", name: "South Africa", readers: 800000, x: 52, y: 75, color: "from-blue-500 to-cyan-500" },
];

export function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [animatedCountries, setAnimatedCountries] = useState<CountryData[]>([]);

  // Animate countries one by one on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCountries(countries);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl overflow-hidden border border-border">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Simplified world map outline */}
          <path 
            d="M15,30 L25,25 L30,30 L35,28 L40,32 L45,30 L50,35 L55,32 L60,35 L65,30 L70,32 L75,28 L80,30 L85,25 L88,30 L85,35 L88,40 L85,45 L80,50 L75,55 L70,60 L65,65 L60,70 L55,75 L50,80 L45,75 L40,70 L35,65 L30,60 L25,55 L20,50 L15,45 L12,40 L15,35 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className="text-muted-foreground"
          />
        </svg>
      </div>
      
      {/* Country Markers */}
      {animatedCountries.map((country, index) => (
        <motion.div
          key={country.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ left: `${country.x}%`, top: `${country.y}%` }}
          onClick={() => setSelectedCountry(country)}
          onMouseEnter={() => setSelectedCountry(country)}
          onMouseLeave={() => setSelectedCountry(null)}
        >
          <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${country.color} flex items-center justify-center shadow-lg`}>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          </div>
          
          {/* Country Label */}
          {selectedCountry?.id === country.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-background/90 backdrop-blur-xl border border-border rounded-lg p-3 shadow-xl whitespace-nowrap z-10"
            >
              <div className="font-semibold">{country.name}</div>
              <div className="text-sm text-muted-foreground">
                {country.readers.toLocaleString()} readers
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
            </motion.div>
          )}
        </motion.div>
      ))}
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-xl border border-border rounded-lg p-3">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-semibold">Global Readership</span>
        </div>
        <div className="text-xs text-muted-foreground">
          50M+ readers across 195+ countries
        </div>
      </div>
    </div>
  );
}
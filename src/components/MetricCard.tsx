"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  date: string;
  tooltip?: ReactNode;
  delay?: number;
}

export default function MetricCard({
  label,
  value,
  unit,
  date,
  tooltip,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-colors duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm text-white/60 font-medium uppercase tracking-wide">
          {label}
        </h3>
        {tooltip && (
          <div className="relative group/tooltip">
            <span className="text-white/40 hover:text-lime-400 cursor-help text-xs border border-white/20 rounded-full w-5 h-5 inline-flex items-center justify-center">
              ⓘ
            </span>
            <div className="absolute right-0 top-6 w-64 bg-neutral-800 border border-white/20 rounded-lg p-3 text-xs text-white/80 opacity-0 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:pointer-events-auto transition-opacity duration-200 z-10 shadow-xl">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
          {value}
        </span>
        {unit && (
          <span className="text-xl text-white/60 font-medium">{unit}</span>
        )}
      </div>
      
      <p className="text-xs text-white/40 mt-3">as of {date}</p>
    </motion.div>
  );
}


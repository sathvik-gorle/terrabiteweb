"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CarbonCalculator() {
  const [concreteAmount, setConcreteAmount] = useState(31000);

  // Based on our pilot data:
  // 31,000 lbs concrete → 10,138 lbs CO2 → 12,110 lbs food waste
  const co2PerLb = 10138 / 31000; // ~0.327 lbs CO2 per lb concrete
  const wastePerLb = 12110 / 31000; // ~0.391 lbs waste per lb concrete

  const calculateCO2 = (concrete: number) => {
    return Math.round(concrete * co2PerLb);
  };

  const calculateWaste = (concrete: number) => {
    return Math.round(concrete * wastePerLb);
  };

  const co2Sequestered = calculateCO2(concreteAmount);
  const wasteDiverted = calculateWaste(concreteAmount);

  // Convert to cubic yards for display (rough conversion: 1 yd³ ≈ 4,000 lbs)
  const cubicYards = (concreteAmount / 4000).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-lime-400/10 to-green-500/10 border border-lime-400/30 rounded-2xl p-8 md:p-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">
          Interactive <span className="text-lime-400">Carbon Calculator</span>
        </h2>
        <p className="text-white/70">
          See how much CO₂ and food waste we can sequester with your project
        </p>
      </div>

      {/* Slider Control */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <label className="text-lg font-semibold text-white">
            Concrete Amount
          </label>
          <div className="text-right">
            <div className="text-3xl font-bold text-lime-400">
              {concreteAmount.toLocaleString()}
            </div>
            <div className="text-sm text-white/60">
              pounds (~{cubicYards} yd³)
            </div>
          </div>
        </div>

        <input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={concreteAmount}
          onChange={(e) => setConcreteAmount(parseInt(e.target.value))}
          className="w-full h-3 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-lime-400 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-lime-400 [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full 
            [&::-moz-range-thumb]:bg-lime-400 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:hover:scale-110"
        />

        <div className="flex justify-between text-xs text-white/50 mt-2">
          <span>1,000 lbs</span>
          <span>50,000 lbs</span>
          <span>100,000 lbs</span>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CO2 Sequestered */}
        <motion.div
          key={co2Sequestered}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-neutral-900/50 border border-white/10 rounded-xl p-6 text-center"
        >
          <div className="text-sm text-white/60 uppercase tracking-wide mb-2">
            CO₂ Sequestered
          </div>
          <div className="text-5xl font-bold text-lime-400 mb-2">
            {co2Sequestered.toLocaleString()}
          </div>
          <div className="text-white/70">pounds CO₂</div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/50">
              Equivalent to <strong className="text-white">{(co2Sequestered / 2204.62).toFixed(2)} metric tons</strong> locked away for 100+ years
            </div>
          </div>
        </motion.div>

        {/* Food Waste Diverted */}
        <motion.div
          key={wasteDiverted}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-neutral-900/50 border border-white/10 rounded-xl p-6 text-center"
        >
          <div className="text-sm text-white/60 uppercase tracking-wide mb-2">
            Food Waste Diverted
          </div>
          <div className="text-5xl font-bold text-white mb-2">
            {wasteDiverted.toLocaleString()}
          </div>
          <div className="text-white/70">pounds</div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="text-xs text-white/50">
              Prevented from decomposing in landfills and releasing methane emissions
            </div>
          </div>
        </motion.div>
      </div>

      {/* Formula Explanation */}
      <div className="mt-8 bg-black/30 border border-white/10 rounded-lg p-6">
        <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-3">
          How we calculate
        </h3>
        <div className="space-y-2 text-sm text-white/60">
          <p>
            <strong className="text-lime-400">CO₂ per lb concrete:</strong> {co2PerLb.toFixed(3)} lbs (based on our Charlotte pilot)
          </p>
          <p>
            <strong className="text-lime-400">Food waste per lb concrete:</strong> {wastePerLb.toFixed(3)} lbs (from pyrolysis process)
          </p>
          <p className="text-xs text-white/50 mt-3">
            These ratios are derived from our verified pilot data: 31,000 lbs concrete → 10,138 lbs CO₂ sequestered → 12,110 lbs food waste diverted
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-white/70 mb-4">
          Ready to reduce emissions in your next project?
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-colors duration-200"
        >
          Get a Pilot Quote
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}


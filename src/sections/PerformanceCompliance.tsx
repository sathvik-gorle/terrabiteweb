"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tags";

const mixOptions = [
  {
    replacement: "5%",
    targetPSI: "4,500",
    application: "Standard structural",
    status: "Available",
  },
  {
    replacement: "10%",
    targetPSI: "4,000",
    application: "General construction",
    status: "Available",
  },
  {
    replacement: "20%",
    targetPSI: "3,500",
    application: "Non-structural, thermal upgrade",
    status: "Testing",
  },
  {
    replacement: "33%",
    targetPSI: "3,000–4,000",
    application: "Pilot projects, R&D",
    status: "Testing",
  },
];

const specs = [
  {
    label: "Target Mix Class",
    value: "ASTM C94 / ACI 318",
    icon: "📋",
  },
  {
    label: "Water-to-Cement Ratio",
    value: "0.40–0.50",
    icon: "💧",
  },
  {
    label: "Air Content",
    value: "4–7% (ASTM C231)",
    icon: "🎈",
  },
  {
    label: "Slump",
    value: "3–5 inches",
    icon: "📏",
  },
];

export default function PerformanceCompliance() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Tag>Technical Specs</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-4xl mx-auto">
          Performance & <span className="text-lime-400">Compliance</span>
        </h2>

        <p className="text-center text-white/60 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
          Our biochar concrete meets industry benchmarks for structural integrity.
          Ongoing ASTM C39 testing validates strength; literature supports thermal
          and durability benefits. Full in-house data to be published as batches
          complete 28-day cures.
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-neutral-900 border border-white/10 rounded-xl p-6 text-center hover:border-lime-400/30 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">{spec.icon}</div>
              <h3 className="text-sm text-white/60 uppercase tracking-wide mb-2">
                {spec.label}
              </h3>
              <p className="text-lg font-bold text-white">{spec.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Mix Options Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Mix <span className="text-lime-400">Options</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Cement Replacement
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Target Strength
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Application
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black">
                {mixOptions.map((mix, index) => (
                  <tr
                    key={mix.replacement}
                    className={`border-t border-white/10 hover:bg-neutral-900/50 transition-colors duration-200 ${
                      index === mixOptions.length - 1 ? "" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-lime-400">
                      {mix.replacement}
                    </td>
                    <td className="px-6 py-4 text-white/90">{mix.targetPSI} psi</td>
                    <td className="px-6 py-4 text-white/70">{mix.application}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          mix.status === "Available"
                            ? "bg-lime-400/20 text-lime-400"
                            : "bg-yellow-400/20 text-yellow-400"
                        }`}
                      >
                        {mix.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-white/50 text-center mt-6 italic">
            Note: Thermal conductivity and long-term durability testing in progress.
            Expected thermal insulation improvement ~15% vs. control (literature-based).
          </p>
        </motion.div>
      </div>
    </section>
  );
}


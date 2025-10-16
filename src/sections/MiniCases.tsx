"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tags";

const cases = [
  {
    project: "Initial Pilot",
    location: "Charlotte, NC",
    volume: "31,000 lb",
    biocharPercent: "High Load",
    co2Locked: "10,138 lb CO₂",
    result:
      "Successfully demonstrated biochar concrete at scale. Sequestered 10,138 lbs CO₂ and diverted 12,110 lbs of food waste from landfills.",
    date: "2025",
  },
  {
    project: "Materials Science Research",
    location: "Triangle Area, NC",
    volume: "Multiple test batches",
    biocharPercent: "Variable",
    co2Locked: "Testing phase",
    result:
      "Exploring materials science potential through systematic testing of biochar integration, strength characteristics, and carbon sequestration efficiency.",
    date: "Ongoing",
  },
  {
    project: "Future Scaling Initiative",
    location: "Regional",
    volume: "TBD",
    biocharPercent: "Optimized mix",
    co2Locked: "Projected",
    result:
      "Planning next phase of deployment with Launch Chapel Hill accelerator support. Focus on scalable production and verified carbon reduction.",
    date: "2026 (planned)",
  },
];

export default function MiniCases() {
  return (
    <section className="py-24 bg-neutral-950 text-white" id="cases">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Tag>Case Studies</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">
          Proven in the <span className="text-lime-400">Field</span>
        </h2>

        <p className="text-center text-white/60 mt-4 text-lg max-w-2xl mx-auto">
          Real projects, real carbon reductions. Each pour demonstrates the
          viability of biochar concrete at scale.
        </p>

        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2">
            <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-lime-400 text-sm font-semibold">Supported by Launch Chapel Hill</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-lime-400/30 transition-all duration-300 group flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold group-hover:text-lime-400 transition-colors duration-300">
                  {caseStudy.project}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {caseStudy.location} • {caseStudy.date}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                    Volume
                  </p>
                  <p className="text-white font-bold">{caseStudy.volume}</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                    Biochar Load
                  </p>
                  <p className="text-lime-400 font-bold">
                    {caseStudy.biocharPercent}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">
                    Est. CO₂ Locked
                  </p>
                  <p className="text-lime-400 font-bold text-xl">
                    {caseStudy.co2Locked}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-white/70 text-sm leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm max-w-3xl mx-auto">
            All figures are based on measured biochar mass and carbon content analysis.
            Strength and durability testing ongoing per ASTM standards. Full case study
            reports available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}


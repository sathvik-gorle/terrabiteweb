"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tags";

const resources = [
  {
    title: "Numbers & Methodology",
    filename: "numbers-methodology.pdf",
    summary:
      "Complete breakdown of how we compute CO₂e sequestration, food waste diversion, and biochar carbon content. Includes boundary assumptions and measurement protocols.",
    lastModified: "Oct 15, 2025",
    category: "Technical",
  },
  {
    title: "Step 4 – Calculating the TAM",
    filename: "step-4-calculating-tam.pdf",
    summary:
      "Total addressable market analysis for biochar concrete in the Triangle region. Market sizing, competitive landscape, and growth projections.",
    lastModified: "Oct 10, 2025",
    category: "Business",
  },
  {
    title: "Terrabite Numbers Page",
    filename: "terrabite-numbers-page.pdf",
    summary:
      "Comprehensive financial assumptions, unit economics, cost structure, and pricing models. Includes sensitivity analysis for biochar production costs.",
    lastModified: "Oct 12, 2025",
    category: "Business",
  },
  {
    title: "Quantified Value Proposition",
    filename: "quantified-value-proposition.pdf",
    summary:
      "Dollar-value breakdown of carbon credit revenue, waste disposal savings, and thermal performance benefits vs. traditional concrete.",
    lastModified: "Oct 8, 2025",
    category: "Business",
  },
  {
    title: "Carbon Credits – Verification Overview",
    filename: "carbon-credits-verification.pdf",
    summary:
      "Pathways to third-party verification under Verra, Gold Standard, or equivalent registries. MRV requirements, timeline, and documentation checklist.",
    lastModified: "Oct 5, 2025",
    category: "Carbon Markets",
  },
  {
    title: "Concrete Production – Primer",
    filename: "concrete-production.pdf",
    summary:
      "Technical primer on our pyrolysis process, biochar characterization, and mix design protocols. Includes ASTM test methods and quality control procedures.",
    lastModified: "Sept 28, 2025",
    category: "Technical",
  },
  {
    title: "Expanded Pitch Deck (10 Slides)",
    filename: "expanded-pitch-deck.pdf",
    summary:
      "Executive overview of Terrabite's mission, technology, market opportunity, competitive advantages, team, and funding needs. Investor-facing.",
    lastModified: "Oct 14, 2025",
    category: "Overview",
  },
];

const categories = ["All", "Technical", "Business", "Carbon Markets", "Overview"];

export default function ResourcesLibrary() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

  return (
    <section className="py-24 bg-black text-white" id="resources">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Tag>Documentation</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">
          Resources <span className="text-lime-400">Library</span>
        </h2>

        <p className="text-center text-white/60 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
          Every claim on this site is backed by data. Download our technical
          documentation, financial models, and methodology papers to verify our
          numbers and understand our approach.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-lime-400 text-black"
                  : "bg-neutral-900 text-white/70 hover:bg-neutral-800 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredResources.map((resource, index) => (
            <motion.a
              key={resource.filename}
              href={`/resources/${resource.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-lime-400/50 transition-all duration-300 group flex flex-col"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 font-semibold">
                  {resource.category}
                </span>
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-lime-400 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                {resource.title}
              </h3>

              {/* Summary */}
              <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                {resource.summary}
              </p>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Updated: {resource.lastModified}</span>
                <span className="text-lime-400 group-hover:underline">
                  Download PDF →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            PDFs are version-controlled and date-stamped. For questions about
            methodology or to request raw data, contact{" "}
            <a
              href="mailto:info@terrabitenc.com"
              className="text-lime-400 hover:underline"
            >
              info@terrabitenc.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

// Add React import at the top
import React from "react";


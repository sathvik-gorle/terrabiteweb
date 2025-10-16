"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tags";

const steps = [
  {
    number: "01",
    title: "Divert Food Waste",
    description:
      "Organic waste from cafeterias, restaurants, and food processing facilities is collected and dried instead of going to landfills.",
    icon: "🍎",
  },
  {
    number: "02",
    title: "Pyrolyze to Biochar",
    description:
      "Dried feedstock undergoes oxygen-limited pyrolysis at 400–600°C, producing stable, carbon-rich biochar with ~75% carbon content.",
    icon: "🔥",
  },
  {
    number: "03",
    title: "Mix & Pour",
    description:
      "Biochar replaces up to 33% of cement by mass in standard concrete mixes. No workflow changes—just pour and cure as usual.",
    icon: "🏗️",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black text-white" id="approach">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Tag>Our Process</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">
          How It <span className="text-lime-400">Works</span>
        </h2>

        <p className="text-center text-white/60 mt-4 text-lg max-w-2xl mx-auto">
          From waste stream to carbon sink—simple, scalable, verifiable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-lime-400/30 transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 bg-lime-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/methodology"
            className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors duration-200 font-medium"
          >
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View full methodology
          </a>
        </div>
      </div>
    </section>
  );
}


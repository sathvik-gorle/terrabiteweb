"use client";

import { motion } from "framer-motion";
import Tag from "@/components/Tags";

const mrvSteps = [
  {
    number: 1,
    title: "MRV Plan Development",
    description:
      "Establish measurement, reporting, and verification protocols aligned with Verra, Gold Standard, or equivalent registry requirements.",
    status: "In Progress",
  },
  {
    number: 2,
    title: "Third-Party Verifier Engagement",
    description:
      "Partner with accredited verifiers to audit biochar carbon content, feedstock provenance, and sequestration permanence claims.",
    status: "Planning",
  },
  {
    number: 3,
    title: "Registry Submission",
    description:
      "Submit validated data and project documentation to carbon credit registry for formal project registration and approval.",
    status: "Pending",
  },
  {
    number: 4,
    title: "Credit Issuance & Trading",
    description:
      "Upon verification, carbon credits are issued and can be traded, retired, or held as offsets. Ongoing monitoring ensures compliance.",
    status: "Future",
  },
];

export default function CarbonCredits() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <Tag>Carbon Markets</Tag>

            <h2 className="text-4xl md:text-5xl font-medium mt-6 leading-tight">
              Verified <span className="text-lime-400">Carbon Credits</span>
            </h2>

            <p className="text-white/70 mt-6 text-lg leading-relaxed">
              Every ton of biochar-enhanced concrete sequesters measurable CO₂.
              We're pursuing third-party verification to convert these reductions
              into tradable carbon credits under established registries (Verra, Gold
              Standard, or equivalent).
            </p>

            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              This creates a dual value stream: lower-emission construction
              <span className="text-lime-400 font-semibold"> plus </span>
              potential offset revenue for project stakeholders.
            </p>

            <div className="mt-8">
              <a
                href="/methodology"
                className="inline-flex items-center gap-2 bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-colors duration-200"
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
                View our methodology
              </a>
            </div>
          </div>

          {/* Right: MRV Checklist */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Our <span className="text-lime-400">4-Step</span> MRV Process
            </h3>

            <div className="space-y-4">
              {mrvSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:border-lime-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-10 h-10 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg group-hover:text-lime-400 transition-colors duration-300">
                          {step.title}
                        </h4>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-semibold ${
                            step.status === "In Progress"
                              ? "bg-lime-400/20 text-lime-400"
                              : step.status === "Planning"
                              ? "bg-blue-400/20 text-blue-400"
                              : step.status === "Pending"
                              ? "bg-yellow-400/20 text-yellow-400"
                              : "bg-white/10 text-white/60"
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


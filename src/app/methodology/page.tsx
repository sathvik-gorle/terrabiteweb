"use client";

import { motion } from "framer-motion";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Tag from "@/components/Tags";
import CarbonCalculator from "@/components/CarbonCalculator";

export default function MethodologyPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-black text-white pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Tag>Technical Documentation</Tag>
            <h1 className="text-5xl md:text-7xl font-bold mt-6">
              Our <span className="text-lime-400">Methodology</span>
            </h1>
            <p className="text-white/60 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
              Transparent approach to carbon sequestration through biochar-enhanced concrete.
            </p>
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-lime-400 text-sm font-semibold">Backed by Launch Chapel Hill</span>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-4">
              Last updated: October 16, 2025
            </p>
          </motion.div>

          {/* Results Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-lime-400/10 to-green-500/10 border border-lime-400/30 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Launch Chapel Hill <span className="text-lime-400">Pilot Results</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Concrete Placed</p>
                <p className="text-5xl font-bold text-white">31,000</p>
                <p className="text-white/70 mt-1">pounds</p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">CO₂ Sequestered</p>
                <p className="text-5xl font-bold text-lime-400">10,138</p>
                <p className="text-white/70 mt-1">pounds CO₂</p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-sm uppercase tracking-wide mb-2">Food Waste Diverted</p>
                <p className="text-5xl font-bold text-white">12,110</p>
                <p className="text-white/70 mt-1">pounds</p>
              </div>
            </div>

            <p className="text-center text-white/70 text-sm">
              Data from our initial pilot in Charlotte, NC with Launch Chapel Hill accelerator program
            </p>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">
              How It <span className="text-lime-400">Works</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Food Waste Collection</h3>
                  <p className="text-white/70 leading-relaxed">
                    Organic waste from cafeterias, restaurants, and food processing facilities is collected and prepared for conversion. This diverts material that would otherwise decompose in landfills, releasing methane—a greenhouse gas 25x more potent than CO₂.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Pyrolysis & Biochar Production</h3>
                  <p className="text-white/70 leading-relaxed">
                    Through controlled heating (400–600°C) in low-oxygen conditions, organic matter undergoes pyrolysis. This process breaks down the waste into biochar—a stable, carbon-rich material. The carbon that was originally in the food waste is now locked in a form that won't decompose for centuries.
                  </p>
                  <div className="mt-4 bg-black/50 border border-white/10 rounded-lg p-4">
                    <p className="text-white/60 text-sm">
                      <strong className="text-lime-400">Key insight:</strong> Biochar is essentially charcoal with a highly porous structure. Its carbon content (typically 70-80%) remains stable for 100+ years when incorporated into concrete, effectively sequestering atmospheric CO₂.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Concrete Integration & Testing</h3>
                  <p className="text-white/70 leading-relaxed">
                    Biochar is integrated into concrete mixes as a partial cement replacement or additive. The material undergoes rigorous testing per ASTM standards (C39 for compressive strength, C231 for air content) to ensure it meets structural requirements. Our pilot achieved target strength of 4,000 psi—suitable for many construction applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Verification & Carbon Accounting</h3>
                  <p className="text-white/70 leading-relaxed">
                    All carbon sequestration claims are based on measured biochar carbon content and concrete volumes. We're working toward third-party verification through established carbon registries (Verra, Gold Standard) to issue tradable carbon credits.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Carbon Accounting */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">
              Carbon <span className="text-lime-400">Accounting</span>
            </h2>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Our carbon sequestration estimate is based on the following approach:
              </p>

              <div className="bg-black border border-white/20 rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">1. Biochar Carbon Content</h4>
                  <p className="text-sm">
                    Biochar produced through pyrolysis contains 70-80% elemental carbon (verified through lab analysis like ASTM D5373). This carbon is in a stable form that resists decomposition.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">2. CO₂ Equivalency</h4>
                  <p className="text-sm">
                    When carbon is locked in biochar, it prevents that carbon from entering the atmosphere as CO₂. The molecular weight of CO₂ is 44, while carbon is 12, giving a ratio of 44/12 = 3.67. This means 1 lb of sequestered carbon prevents 3.67 lbs of CO₂ emissions.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">3. Permanence</h4>
                  <p className="text-sm">
                    Once embedded in concrete, biochar is protected from oxidation and biological decomposition. Studies show biochar in construction materials remains stable for 100+ years, making it a reliable carbon sink.
                  </p>
                </div>
              </div>

              <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">Our Pilot by the Numbers</h3>
                <ul className="space-y-2 text-white/80">
                  <li>✓ <strong>31,000 lbs concrete</strong> placed with biochar integration (Charlotte, NC)</li>
                  <li>✓ <strong>10,138 lbs CO₂</strong> sequestered (based on biochar carbon content)</li>
                  <li>✓ <strong>12,110 lbs food waste</strong> diverted from landfills</li>
                  <li>✓ <strong>4,000 psi</strong> target strength (ASTM C39 testing in progress)</li>
                </ul>
                <p className="text-white/60 text-sm mt-4 italic">
                  Note: Numbers are approximate and will be refined as additional testing and verification is completed.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Interactive Calculator */}
          <CarbonCalculator />

          {/* Boundaries & Assumptions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">
              Boundaries & <span className="text-lime-400">Transparency</span>
            </h2>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What's Included</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Carbon sequestered in biochar (stable, non-labile fraction)</li>
                  <li>Food waste diverted from landfills (preventing methane emissions)</li>
                  <li>Structural performance validated through ASTM testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What's Not Yet Included</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process energy for pyrolysis (under evaluation)</li>
                  <li>Transportation emissions (collection to production)</li>
                  <li>Upstream cement production offsets (from replacement)</li>
                </ul>
                <p className="text-sm text-white/60 mt-3">
                  These factors will be incorporated into a full lifecycle analysis (LCA) as we scale and pursue carbon credit verification.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ongoing Research</h3>
                <p>
                  We're actively collaborating with materials science researchers through the Launch Chapel Hill accelerator to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Optimize mix designs for various strength requirements</li>
                  <li>Measure thermal and durability properties</li>
                  <li>Quantify full lifecycle environmental impacts</li>
                  <li>Develop scalable production methods</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-6">
              Questions About Our <span className="text-lime-400">Methodology?</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              We're committed to transparency in our carbon accounting and technical approach. 
              Reach out with questions or to discuss collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@terrabitenc.com?subject=Methodology Questions"
                className="inline-flex items-center gap-2 bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-colors duration-200"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-neutral-800 text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-neutral-700 transition-colors duration-200"
              >
                Request a Pilot Quote
              </a>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
}

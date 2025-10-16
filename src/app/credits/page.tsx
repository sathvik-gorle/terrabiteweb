"use client";

import { motion } from "framer-motion";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function CreditsPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-black text-white pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-lime-400">Credits</span>
            </h1>

            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-12 text-left">
              <h2 className="text-2xl font-bold mb-6">Website Development</h2>
              
              <div className="space-y-6 text-white/70">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Developed by
                  </h3>
                  <p className="text-base">
                    <strong className="text-lime-400">Sathvik Gorle</strong>
                    <br />
                    Founder & Developer
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Technology Stack
                  </h3>
                  <ul className="space-y-1 text-base">
                    <li>• Next.js 14 (React Framework)</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Framer Motion (Animations)</li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Special Thanks
                  </h3>
                  <p className="text-base">
                    To the advisors, partners, and researchers who contributed
                    to Terrabite's technical methodology and vision for
                    carbon-negative construction.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors duration-200"
              >
                ← Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}


"use client";

// Import actual logos
import publixLogo from "@/assets/images/public.png"; // ✓ Publix logo
import harristeeterLogo from "@/assets/images/harris-teeter.png"; // ✓ Harris Teeter logo
import divertLogo from "@/assets/images/divert.png"; // ✓ Divert logo
import foodlionLogo from "@/assets/images/fwaste.png"; // Using food waste icon for Food Lion
import ncssmLogo from "@/assets/images/ncssm.png"; // ✓ NCSSM logo
import localfarmsLogo from "@/assets/images/local-farms.webp"; // ✓ Local farms logo
import ncGreenLogo from "@/assets/images/carbon.png"; // Using carbon icon for NC Green
import restaurantsLogo from "@/assets/images/biochar.png"; // Using biochar icon for restaurants

import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

const logos = [
  { name: "Publix", image: publixLogo, caption: "Food waste supplier" },
  { name: "Harris Teeter", image: harristeeterLogo, caption: "Food waste supplier" },
  { name: "Divert Inc.", image: divertLogo, caption: "Waste collection partner" },
  { name: "Food Lion", image: foodlionLogo, caption: "Food waste supplier" },
  { name: "NCSSM", image: ncssmLogo, caption: "Educational partner" },
  { name: "Local Farms", image: localfarmsLogo, caption: "Organic waste" },
  { name: "NC Green", image: ncGreenLogo, caption: "Sustainability network" },
  { name: "Triangle Restaurants", image: restaurantsLogo, caption: "Food waste partners" },
];

export default function LogoTicker() {
  return (
    <section className="py-24 bg-black text-white overflow-x-clip" id="partners">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-6 py-2 mb-4">
            <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-lime-400 font-semibold">Backed by Launch Chapel Hill</span>
          </div>
          <h3 className="text-center text-white/50 text-xl mb-2">
            Our Supplier Network
          </h3>
          <p className="text-center text-white/40 text-sm max-w-2xl mx-auto">
            Working with leading grocery chains, restaurants, and organizations to divert food waste
          </p>
        </div>

        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {/* Duplicate the array twice for seamless marquee */}
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map(({ name, image, caption }) => (
                  <div
                    key={`${name}-${i}`}
                    className="flex flex-col items-center gap-2 min-w-[120px]"
                  >
                    <Image
                      src={image}
                      alt={name}
                      className="w-auto h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="text-xs text-white/40 text-center">
                      {caption}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

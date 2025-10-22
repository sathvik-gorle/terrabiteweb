"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import cursorYouImage from "@/assets/images/cursor-you.svg";

// Replace these with your actual Terrabite images
import terrabiteExample1Image from "@/assets/images/logo.png";
import terrabiteExample2Image from "@/assets/images/logo.png";

export default function Hero() {
  // Reference for drag constraints
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation controllers for images/pointers
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    // Animate left image from further off-screen into view
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    // Animate left pointer along with the image then freeze in place
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    // Animate right image (delayed) from further off-screen into view
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    // Animate right pointer along with the image then freeze
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: [0, -16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, [
    leftDesignAnimate,
    leftPointerAnimate,
    rightDesignAnimate,
    rightPointerAnimate,
  ]);

  return (
    <section
      className="relative py-20 bg-black text-white overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div
        ref={containerRef}
        className="container relative mx-auto px-4 md:px-6 flex flex-col items-center"
        style={{ minHeight: "50vh" }}
      >
        {/* LEFT DRAGGABLE IMAGE (only visible on lg and up) */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -300, y: 150 }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.3}
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={terrabiteExample1Image}
            alt="Terrabite Example 1"
            draggable="false"
            className="w-40 h-auto"
          />
        </motion.div>

        {/* LEFT POINTER */}
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, x: -300, y: 150 }}
          className="absolute hidden lg:block"
          style={{ top: "20%", left: "5%" }}
        >
          <Pointer name="Israel" />
        </motion.div>

        {/* RIGHT DRAGGABLE IMAGE (only visible on lg and up) */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 300, y: 150 }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.3}
          className="absolute -right-64 top-0 hidden lg:block"
        >
          <Image
            src={terrabiteExample2Image}
            alt="Terrabite Example 2"
            draggable="false"
            className="w-48 h-auto"
          />
        </motion.div>

        {/* RIGHT POINTER */}
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 300, y: 150 }}
          className="absolute hidden lg:block"
          style={{ top: "25%", right: "5%" }}
        >
          <Pointer name="Sathvik" color="red" />
        </motion.div>

        {/* Backed by Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5">
            <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-lime-400 text-sm font-semibold">Backed by Launch Chapel Hill</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-2 max-w-5xl mx-auto leading-tight"
        >
          Biochar concrete that locks CO₂{" "}
          <span className="text-lime-400">in every pour</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          We transform food waste into high-performance concrete that reduces emissions. Already sequestered 10,138 lbs CO₂ and diverted 12,110 lbs of food waste.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <a href="#contact">
            <Button
              variant="primary"
              className="whitespace-nowrap px-8 py-3 text-base"
              size="lg"
            >
              Get a pilot quote
            </Button>
          </a>
          <a href="/methodology">
            <Button
              variant="secondary"
              className="whitespace-nowrap px-8 py-3 text-base"
              size="lg"
            >
              See methodology
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

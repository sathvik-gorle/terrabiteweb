"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
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

  // Animation controllers (useAnimate) for images/pointers
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  // State for the newsletter confirmation message
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    // Animate left image
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    // Animate left pointer
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    // Animate right image
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    // Animate right pointer
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
        className="container relative mx-auto px-4 md:px-6"
        style={{ minHeight: "50vh" }}
      >
        {/* LEFT DRAGGABLE IMAGE */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -300, y: 150 }}
          // Note: remove animate={...} - we use imperative animations above
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

        {/* RIGHT DRAGGABLE IMAGE */}
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

        {/* Banner */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-black font-semibold"
          >
            🌱 Sequestering Carbon, 1 Brick @ a Time
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mt-6 max-w-4xl mx-auto leading-tight"
        >
          Building a Cleaner Future, One{" "}
          <span className="text-lime-400">Biochar Brick</span> at a Time
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center text-lg md:text-xl text-white/60 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Terrabite transforms food waste into carbon-sequestering concrete.
          Together, we can lower emissions, reduce costs, and empower greener
          construction.
        </motion.p>

        {/* Email Form */}
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            // Insert your newsletter subscription logic here
            console.log("Subscribing email:", email);
            setConfirmation("Thank you for subscribing!");
            form.reset();
            // Hide the confirmation after 3 seconds
            setTimeout(() => setConfirmation(""), 3000);
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
        >
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 py-2 outline-none text-base flex-1"
            required
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap mt-2 sm:mt-0 sm:ml-2"
            size="sm"
          >
            Get Updates
          </Button>
        </motion.form>

        {/* Confirmation Message */}
        <AnimatePresence>
          {confirmation && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-green-400 text-lg"
            >
              {confirmation}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

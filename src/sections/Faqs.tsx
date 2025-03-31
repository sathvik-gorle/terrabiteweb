"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// 1) Define any keywords you'd like to highlight.
const HIGHLIGHT_KEYWORDS = [
  "biochar",
  "cement",
  "terrabite",
  "carbon",
  "offset",
  "sustainability",
];

const faqs = [
  {
    question: "How does Terrabite’s biochar reduce carbon emissions?",
    answer:
      "Through pyrolysis, we transform organic waste into biochar. This locks in carbon that would otherwise be released. It's a key method for sustainability and can generate carbon offsets.",
  },
  {
    question: "Can Terrabite's cement match industry standards?",
    answer:
      "Yes. Our cement meets industry benchmarks for strength and durability, while lowering the overall carbon footprint for more sustainable builds.",
  },
  {
    question: "What’s the cost impact of using biochar cement?",
    answer:
      "While biochar cement can have a small premium, the potential for carbon offsets, reduced waste fees, and improved insulation leads to net cost savings.",
  },
  {
    question: "Do I earn carbon credits with Terrabite?",
    answer:
      "Absolutely. Each ton of Terrabite's biochar-infused cement sequesters carbon, verified as offsets you can trade or sell to meet sustainability goals.",
  },
  {
    question: "How can I get started?",
    answer:
      "Reach out via our contact page or email. We'll discuss how to incorporate Terrabite in your next build, reducing landfill waste and emissions.",
  },
];

/**
 * 2) This function wraps highlight keywords in an animated underline style.
 */
function highlightKeywords(text: string): JSX.Element[] {
  // We'll split text by spaces to match exact words.
  // If you need partial matches or punctuation handling, you'd do more advanced parsing.
  return text.split(" ").map((word, i) => {
    // Check if this 'word' (case-insensitive) is in our highlight list.
    const lowerWord = word.toLowerCase().replace(/[^\w]/g, ""); // remove punctuation
    const isKeyword = HIGHLIGHT_KEYWORDS.includes(lowerWord);

    if (!isKeyword) {
      // Return the plain word + space
      return (
        <span key={i}>
          {word}{" "}
        </span>
      );
    }

    // If it's a keyword, we wrap it in a special animated-underline style.
    return (
      <span key={i} className="relative group font-semibold text-lime-400">
        {word}
        <span
          className="
            absolute left-0 bottom-0 h-[2px] w-0 
            bg-lime-400 
            group-hover:w-full 
            transition-all 
            duration-300
            origin-left
          "
        />
        {" "}
      </span>
    );
  });
}

export default function AdvancedFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-lime-400">Questions</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300">
            Discover how our biochar cement saves costs, reduces emissions, 
            and offers carbon offsets for a more sustainable future.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={item.question}
                layout
                transition={{
                  layout: {
                    duration: 0.35,
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                  },
                }}
                className="rounded-lg bg-neutral-900 border border-white/10 overflow-hidden"
              >
                {/* Question row */}
                <motion.button
                  layout
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between px-5 py-4 select-none cursor-pointer"
                  // Slight background highlight on hover
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium text-left text-white flex-1 mr-4">
                    {item.question}
                  </span>
                  {/* Rotate icon from 0 -> 45 degrees if open */}
                  <motion.svg
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-lime-400 flex-shrink-0"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </motion.svg>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-5 pb-4 text-gray-300 text-sm md:text-base"
                    >
                      {/* 3) Insert the highlight logic on each answer */}
                      <p>{highlightKeywords(item.answer)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

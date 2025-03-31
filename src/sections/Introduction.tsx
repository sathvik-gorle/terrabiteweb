"use client";
import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tags";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're striving to reduce carbon emissions, yet standard construction materials hamper sustainability goals with high costs and complex supply chains.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    // Update current word as user scrolls
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40 bg-black text-white">
      <div className="container">
        {/* Sticky Container for Headline */}
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Terrabite</Tag>
          </div>
          {/* Headline */}
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 leading-tight max-w-4xl mx-auto">
            <span>Your building process deserves better.</span>{" "}
            <span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    index < currentWord && "text-white"
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>
            <span className="text-lime-400 block mt-3">
              That&apos;s why we built Terrabite.
            </span>
          </div>
        </div>

        {/* This div's height drives the scroll-based word highlighting */}
        <div ref={scrollTarget} className="h-[150vh]"></div>
      </div>
    </section>
  );
}

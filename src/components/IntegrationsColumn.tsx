"use client";
import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;

  return (
    <motion.div
      // The marquee effect
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map(({ name, icon, description }) => (
            <div
              key={name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-4 md:p-5"
            >
              <div className="flex justify-center">
                {/* 
                  Using a wrapper div with fixed width & height
                  and 'relative' + 'object-contain' to prevent stretching. 
                */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={icon}
                    alt={`${name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* 
                Smaller heading size (text-xl or text-2xl) 
                to prevent words from overflowing. 
              */}
              <h3 className="text-xl md:text-2xl text-center mt-4 font-semibold whitespace-normal break-words">
                {name}
              </h3>
              <p className="text-center text-white/50 mt-2 text-sm md:text-base whitespace-normal break-words">
                {description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}

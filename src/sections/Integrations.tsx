"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Tag from "@/components/Tags";
import IntegrationsColumn from "@/components/IntegrationsColumn";

// Replace these with actual icon imports for Terrabite's integrations
import divertIcon from "@/assets/images/divert.png";
import epaIcon from "@/assets/images/epa.png";
import localGovIcon from "@/assets/images/localgov.png";
import ccreditIcon from "@/assets/images/cc.png";
import ncssmIcon from "@/assets/images/ncssm.png";

const integrations = [
  {
    name: "Divert Inc.",
    icon: divertIcon,
    description: "Divert collects and repurposes food waste for biochar production.",
  },
  {
    name: "EPA Programs",
    icon: epaIcon,
    description: "Environmental oversight and compliance for sustainable operations.",
  },
  {
    name: "Local Gov Partners",
    icon: localGovIcon,
    description: "City and county waste management initiatives for zero landfill waste.",
  },
  {
    name: "Carbon Credit Verifiers",
    icon: ccreditIcon,
    description: "Verification and certification of carbon offsets and credits.",
  },
  {
    name: "NCSSM Colopy Entrepreneurship Program",
    icon: ncssmIcon,
    description: "In development.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  // Using framer-motion's useInView to fade in the section as it enters the viewport
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-black text-white overflow-hidden"
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* Left Column: Heading/Intro */}
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-4xl md:text-6xl font-medium mt-6 max-w-xl leading-tight">
              Integrated with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg max-w-xl">
              Terrabite partners with city waste systems, carbon credit verifiers,
              and organizations supporting our carbon-sequestering mission. Seamlessly
              work with a robust supply chain that ensures measurable offsets.
            </p>
          </div>

          {/* Right Column: Scrolling Integrations */}
          <div className="mt-8 lg:mt-0">
            <div className="grid md:grid-cols-2 gap-4 h-[400px] lg:h-[800px] overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse={true}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

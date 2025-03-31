"use client";

import choateLogo from "@/assets/images/logo.png";
import barnhillLogo from "@/assets/images/logo.png";
import divertLogo from "@/assets/images/logo.png";
import epaLogo from "@/assets/images/logo.png";
import carbonCureLogo from "@/assets/images/logo.png";
import sunrockLogo from "@/assets/images/logo.png";
import ncGreenLogo from "@/assets/images/logo.png";
import enviroBuildersLogo from "@/assets/images/logo.png";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fragment } from "react";

const logos = [
  { name: "Choate Construction", image: choateLogo },
  { name: "Barnhill", image: barnhillLogo },
  { name: "Divert Inc.", image: divertLogo },
  { name: "EPA Program", image: epaLogo },
  { name: "CarbonCure", image: carbonCureLogo },
  { name: "Sunrock", image: sunrockLogo },
  { name: "NC Green", image: ncGreenLogo },
  { name: "Enviro Builders", image: enviroBuildersLogo },
];

export default function LogoTicker() {
  return (
    <section className="py-24 bg-black text-white overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Trusted by these climate innovators
        </h3>

        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {/* Duplicate the array twice for seamless marquee */}
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map(({ name, image }) => (
                  <Image
                    key={name}
                    src={image}
                    alt={name}
                    // Adjust these sizes or styling as needed
                    className="w-auto h-10 md:h-12 object-contain"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

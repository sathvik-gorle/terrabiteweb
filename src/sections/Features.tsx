"use client";
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tags";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

// Sample avatar images or placeholders relevant to Terrabite.
// Replace these with real images from your /assets folder if desired.
import avatarBiochar from "@/assets/images/biochar.png";
import avatarCarbon from "@/assets/images/carbon.png";
import avatarWaste from "@/assets/images/fwaste.png";
import avatarConstruction from "@/assets/images/const.png";

import Image from "next/image";

const features = [
  "Lower Carbon Emissions",
  "Cost-Effective",
  "Green Partnerships",
  "Renewable Materials",
  "High Durability",
  "Global Impact",
  "Simple Integration",
];

export default function Features() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Tag */}
        <div className="flex justify-center">
          <Tag>Terrabite Benefits</Tag>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where sustainability meets{" "}
          <span className="text-lime-400">innovation</span>
        </h2>

        {/* Start 3 Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {/* Card #1: Carbon-Sequestering */}
          <FeatureCard
            title="Carbon-Sequestering Concrete"
            description="Trap CO₂ in every pour. Terrabite’s biochar blend helps lock away carbon that would otherwise be released into the atmosphere."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              {/* Avatar Stacking to Represent Collaboration/Partners */}
              <Avatar className="z-40">
                <Image
                  src={avatarBiochar}
                  alt="Biochar Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="z-30 -ml-6 border-lime-400">
                <Image
                  src={avatarCarbon}
                  alt="Carbon Capture Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="z-20 -ml-6 border-pink-400">
                <Image
                  src={avatarWaste}
                  alt="Food Waste Avatar"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition-colors duration-300">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatarConstruction}
                    alt="Construction Avatar"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition duration-500"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-flex size-1.5 rounded-full bg-white"
                    />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          {/* Card #2: Waste Reduction */}
          <FeatureCard
            title="Reduce Food Waste"
            description="Convert organic waste into valuable biochar. Reduce disposal fees and support a circular economy."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center px-2">
                We&apos;ve diverted{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>0.02</span>
                  {/* Hover-Activated Video (replace with a Terrabite-specific clip) */}
                  <video
                    src="/assets/gif-biochar.mp4"
                    autoPlay
                    loop
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  />
                </span>{" "}
                tons of waste
              </p>
            </div>
          </FeatureCard>

          {/* Card #3: Carbon Credits / Keys */}
          <FeatureCard
            title="Access Carbon Credits"
            description="Each ton of biochar-infused cement may be verified for carbon offsets, providing an extra revenue stream for businesses."
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-20 duration-500 transition-all outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1">
                CO₂
              </Key>
              <Key className="w-20 transition-all duration-500 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 delay-150">
                +$
              </Key>
              <Key className="w-20 transition-all duration-500 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 delay-300">
                Credits
              </Key>
            </div>
          </FeatureCard>
        </div>
        {/* End 3 Cards */}

        {/* Bottom Feature Badges */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-400 text-neutral-950 w-5 h-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

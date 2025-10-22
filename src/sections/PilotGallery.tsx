"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Tag from "@/components/Tags";
import Image from "next/image";

// Pilot project photos showcasing the journey
interface PilotImage {
  src: string;
  alt: string;
  caption: string;
  link?: string;
}

const pilotImages: PilotImage[] = [
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+1",
    alt: "Entrepreneurship Fair at NCSSM",
    caption: "Entrepreneurship Fair at NCSSM - Presenting Terrabite's biochar concrete concept",
    link: "https://entrepreneurship.ncssm.edu/home/e-ship-fair",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+2",
    alt: "Entrepreneurship Fair Team",
    caption: "Entrepreneurship Fair - Team showcasing biochar concrete samples",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+3",
    alt: "Charlotte Pilot - Concrete Pour",
    caption: "Charlotte Temple Pilot - Biochar concrete pour in progress",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+4",
    alt: "Charlotte Pilot - Installation",
    caption: "Charlotte Temple Pilot - 31,000 lbs biochar concrete installation",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+5",
    alt: "Charlotte Pilot - Finishing",
    caption: "Charlotte Temple Pilot - Concrete finishing and surface preparation",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+6",
    alt: "Charlotte Pilot - Completed Pour",
    caption: "Charlotte Temple Pilot - Completed biochar concrete placement",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+7",
    alt: "Launch Chapel Hill Presentation",
    caption: "Presenting at Launch Chapel Hill accelerator program",
  },
  {
    src: "https://placehold.co/1200x800/1a1a1a/lime?text=Photo+8",
    alt: "First Batch of Biochar Concrete",
    caption: "First Successful Batch - Biochar concrete mixture validation",
  },
];

export default function PilotGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-24 bg-black text-white" id="gallery">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Tag>Pilot Project Gallery</Tag>
          <h2 className="text-4xl md:text-6xl font-medium mt-6 max-w-3xl mx-auto">
            Behind the <span className="text-lime-400">Scenes</span>
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            Photos from our initial pilot in Charlotte, NC. Real biochar concrete, real carbon sequestration.
          </p>
        </div>

        {/* Main Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-white/10">
            {pilotImages[selectedImage].link ? (
              <a 
                href={pilotImages[selectedImage].link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-full h-full group"
              >
                <Image
                  src={pilotImages[selectedImage].src}
                  alt={pilotImages[selectedImage].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lime-400 text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    <span>View at NCSSM</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ) : (
              <Image
                src={pilotImages[selectedImage].src}
                alt={pilotImages[selectedImage].alt}
                fill
                className="object-cover"
                unoptimized
              />
            )}
            
            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === 0 ? pilotImages.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === pilotImages.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                {pilotImages[selectedImage].caption}
              </p>
              <p className="text-white/60 text-sm mt-1">
                Photo {selectedImage + 1} of {pilotImages.length}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pilotImages.map((image, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-lime-400 scale-105"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-lime-400/20 backdrop-blur-[1px]" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


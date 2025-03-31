"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";
import terrabiteLogo from "@/assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Approach", href: "#approach" },
  { label: "Partners", href: "#partners" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll events and update the scrolled state accordingly.
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, set scrolled to true.
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar container with a fade/slide mount animation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed w-full top-0 z-50 text-white"
      >
        {/* Adjust padding based on scroll */}
        <div className={twMerge("px-2 md:px-4", scrolled ? "py-1" : "py-3")}>
          <div className="container max-w-6xl mx-auto">
            {/* Capsule Outline */}
            <div className="rounded-full border border-white/20 p-[1px] bg-black">
              {/* Capsule Interior with dynamic padding */}
              <div
                className={twMerge(
                  "rounded-full bg-neutral-900 flex items-center justify-between",
                  scrolled
                    ? "px-3 py-2 md:px-4 md:py-2"
                    : "px-3 py-2 md:px-5 md:py-3"
                )}
              >
                {/* Left: Logo + Brand link */}
                <div className="flex items-center gap-3">
                  <Link href="#home" onClick={() => setMenuOpen(false)}>
                    <Image
                      src={terrabiteLogo}
                      alt="Terrabite Logo"
                      className={twMerge("w-auto cursor-pointer", scrolled ? "h-6" : "h-8")}
                      priority
                    />
                  </Link>
                  <Link href="#home" onClick={() => setMenuOpen(false)}>
                    <span
                      className={twMerge(
                        "hidden sm:block font-semibold text-white cursor-pointer",
                        scrolled ? "text-base" : "text-lg"
                      )}
                    >
                      Terrabite
                    </span>
                  </Link>
                </div>

                {/* Middle: Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-8">
                  {navLinks.map(({ label, href }) => (
                    <div key={label} className="relative group">
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
                      >
                        {label}
                      </Link>
                      {/* Green underline on hover */}
                      <span
                        className="
                          absolute bottom-0 left-0 
                          w-full h-[2px] bg-lime-400 
                          scale-x-0 group-hover:scale-x-100 
                          origin-left transition-transform duration-300
                        "
                      />
                    </div>
                  ))}
                </div>

                {/* Right: Mobile toggle + Desktop Buttons */}
                <div className="flex items-center gap-3">
                  <Link href="#contact" onClick={() => setMenuOpen(false)}>
                    <Button
                      variant="secondary"
                      className="hidden md:inline-flex text-sm whitespace-nowrap items-center"
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="#quote" onClick={() => setMenuOpen(false)}>
                    <Button
                      variant="primary"
                      className="hidden md:inline-flex text-sm whitespace-nowrap items-center"
                    >
                      Get a Quote
                    </Button>
                  </Link>

                  {/* Mobile Menu Icon */}
                  <div
                    className="lg:hidden cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-menu"
                    >
                      <line
                        x1="3"
                        y1="6"
                        x2="21"
                        y2="6"
                        className={twMerge(
                          "origin-left transition-transform",
                          menuOpen && "rotate-45 translate-y-[6px]"
                        )}
                      />
                      <line
                        x1="3"
                        y1="12"
                        x2="21"
                        y2="12"
                        className={twMerge(
                          "transition-opacity",
                          menuOpen && "opacity-0"
                        )}
                      />
                      <line
                        x1="3"
                        y1="18"
                        x2="21"
                        y2="18"
                        className={twMerge(
                          "origin-left transition-transform",
                          menuOpen && "-rotate-45 -translate-y-[6px]"
                        )}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden mt-2"
                >
                  <div className="bg-neutral-900 border border-white/20 rounded-xl p-4 flex flex-col gap-3">
                    {navLinks.map(({ label, href }) => (
                      <div key={label} className="relative group">
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
                        >
                          {label}
                        </Link>
                        <span
                          className="
                            absolute bottom-0 left-0 
                            w-full h-[2px] bg-lime-400
                            scale-x-0 group-hover:scale-x-100
                            origin-left transition-transform duration-300
                          "
                        />
                      </div>
                    ))}

                    <Link href="#contact" onClick={() => setMenuOpen(false)}>
                      <Button variant="secondary" className="whitespace-nowrap">
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="#quote" onClick={() => setMenuOpen(false)}>
                      <Button variant="primary" className="whitespace-nowrap">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Space to avoid content behind the navbar */}
      <div className="pb-[80px] md:pb-[100px]" />
    </>
  );
}

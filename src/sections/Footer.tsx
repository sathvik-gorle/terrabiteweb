"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import Link from "next/link";

const footerLinks = [
  { href: "#contact", label: "Contact" },
  { href: "/methodology", label: "Methodology" },
  { href: "#cases", label: "Case Studies" },
  { href: "/credits", label: "Credits" },
];

export default function Footer() {
  return (
    <footer className="px-8 py-16 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src={logoImage} alt="Terrabite Logo" width={40} height={40} />
              <span className="text-xl font-bold">Terrabite</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Biochar concrete from food waste. Locking CO₂ in every pour.
            </p>
            <p className="text-white/50 text-xs">
              Terrabite Materials, LLC
              <br />
              Triangle Area, North Carolina
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-white/50 text-xs mb-1">Email</p>
                <a
                  href="mailto:info@terrabitenc.com"
                  className="text-lime-400 hover:underline"
                >
                  info@terrabitenc.com
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-1">Quotes</p>
                <a
                  href="mailto:quotes@terrabitenc.com"
                  className="text-lime-400 hover:underline"
                >
                  quotes@terrabitenc.com
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-1">Phone</p>
                <a href="tel:+19808994291" className="text-white/70 hover:text-white">
                  (980) 899-4291
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <Link
                  href={href}
                  key={label}
                  className="text-white/70 hover:text-lime-400 transition text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>
              © {new Date().getFullYear()} Terrabite Materials, LLC. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-white/30">
            Created by Sathvik Gorle
          </div>
        </div>
      </div>
    </footer>
  );
}

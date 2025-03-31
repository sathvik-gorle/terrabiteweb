"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.png";

const footerLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image src={logoImage} alt="Knights Haven Logo" width={40} height={40} />
          <span className="text-lg font-semibold">Knights Haven</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60 hover:[&>a:hover]:text-white">
          {footerLinks.map(({ href, label }) => (
            <a href={href} key={label} className="transition">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 text-center text-xs text-white/20">
        Coded by Sathvik Gorle
      </div>
    </footer>
  );
}

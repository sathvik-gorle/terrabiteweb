"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tags";
import Button from "@/components/Button";

export default function ContactRFQ() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form submitted");
    setFormSubmitted(true);

    // Reset after showing success message
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  if (formSubmitted) {
    return (
      <section className="py-24 bg-neutral-950 text-white" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-neutral-900 border border-lime-400/50 rounded-2xl p-12"
          >
            <div className="text-6xl mb-4">✓</div>
            <h3 className="text-3xl font-bold text-lime-400 mb-4">
              Thank You!
            </h3>
            <p className="text-white/70 text-lg mb-2">
              Your quote request has been received.
            </p>
            <p className="text-white/60 text-base">
              Our team will respond within 24 hours with preliminary pricing,
              technical specifications, and next steps for your project.
            </p>
            <p className="text-white/50 text-sm mt-6">
              Need immediate assistance? Email{" "}
              <a
                href="mailto:quotes@terrabitenc.com"
                className="text-lime-400 hover:underline"
              >
                quotes@terrabitenc.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-neutral-950 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Tag>Get Started</Tag>
        </div>

        <h2 className="text-4xl md:text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">
          Request a <span className="text-lime-400">Pilot Quote</span>
        </h2>

        <p className="text-center text-white/60 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          Tell us about your project. We'll provide a customized proposal with
          pricing, technical specs, and projected carbon reductions.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto mt-12 bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="Company name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Project Address */}
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Project Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="Project location (city, state)"
              />
            </div>

            {/* Target Strength */}
            <div>
              <label
                htmlFor="strength"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Target Strength (psi) *
              </label>
              <input
                type="number"
                id="strength"
                name="strength"
                required
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="e.g., 4000"
              />
            </div>

            {/* Pour Volume */}
            <div>
              <label
                htmlFor="volume"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Pour Volume (yd³) *
              </label>
              <input
                type="number"
                id="volume"
                name="volume"
                required
                step="0.1"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="e.g., 15"
              />
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
              >
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="12-months-plus">12+ months</option>
              </select>
            </div>

            {/* Biochar Replacement Preference */}
            <div>
              <label
                htmlFor="biochar-percent"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Biochar Replacement
              </label>
              <select
                id="biochar-percent"
                name="biochar-percent"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200"
              >
                <option value="5">5% (Standard)</option>
                <option value="10">10% (General)</option>
                <option value="20">20% (Thermal upgrade)</option>
                <option value="33">33% (Maximum R&D)</option>
                <option value="custom">Let Terrabite recommend</option>
              </select>
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label
                htmlFor="notes"
                className="block text-sm font-semibold text-white/80 mb-2"
              >
                Project Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors duration-200 resize-none"
                placeholder="Tell us more about your project goals, sustainability requirements, or specific questions..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              type="submit"
              variant="primary"
              className="px-12 py-4 text-lg"
              size="lg"
            >
              Submit Quote Request
            </Button>
            <p className="text-white/50 text-sm mt-4">
              <span className="text-lime-400 font-semibold">24-hour SLA:</span>{" "}
              We respond to all quote requests within one business day.
            </p>
          </div>
        </motion.form>

        {/* Additional Contact Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white/80 font-semibold mb-2">Email</h4>
              <a
                href="mailto:quotes@terrabitenc.com"
                className="text-lime-400 hover:underline"
              >
                quotes@terrabitenc.com
              </a>
            </div>
            <div>
              <h4 className="text-white/80 font-semibold mb-2">Phone</h4>
              <a href="tel:+19808994291" className="text-lime-400 hover:underline">
                (980) 899-4291
              </a>
            </div>
            <div>
              <h4 className="text-white/80 font-semibold mb-2">Location</h4>
              <p className="text-white/60">Triangle Area, NC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


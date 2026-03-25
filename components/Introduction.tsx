"use client";

import { motion } from "framer-motion";
import { listing } from "@/config/listing";

export function Introduction() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
              The Residence
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light leading-tight text-stone-900 sm:mt-4 sm:text-4xl md:text-5xl">
              Where considered design meets effortless living
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600 sm:mt-8 sm:text-lg">
              <p>
                Positioned on a sought-after corner site in Milns Park, this
                architectural residence offers the perfect balance of refined
                aesthetics and everyday functionality.
              </p>
              <p>
                Four bedrooms, two luxurious bathrooms, and dual living spaces
                flow seamlessly to covered outdoor entertaining — designed for
                those who appreciate the art of indoor-outdoor living.
              </p>
            </div>
          </motion.div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {[
                { value: listing.stats.bedrooms, label: "Bedrooms" },
                { value: listing.stats.bathrooms, label: "Bathrooms" },
                { value: listing.stats.livingAreas, label: "Living Areas" },
                { value: listing.stats.garages, label: "Car Garage" },
                { value: `${listing.stats.floorArea}m²`, label: "Floor Area" },
                { value: `${listing.stats.landArea}m²`, label: "Land Area" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="border-l-2 border-stone-200 pl-4 sm:pl-6"
                >
                  <span className="font-[family-name:var(--font-display)] text-3xl font-light text-stone-900 sm:text-4xl">
                    {stat.value}
                  </span>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-stone-400 sm:mt-1 sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

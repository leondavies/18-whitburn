"use client";

import { motion } from "framer-motion";
import { listing } from "@/config/listing";

export function Features() {
  const leftFeatures = listing.features.slice(0, Math.ceil(listing.features.length / 2));
  const rightFeatures = listing.features.slice(Math.ceil(listing.features.length / 2));

  return (
    <section className="relative bg-stone-50 py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://res.cloudinary.com/dioazaxrs/image/upload/v1774428236/1017_ws5ptz.jpg"
              alt="Laundry"
              className="w-full"
            />
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
              The Details
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light text-stone-900 sm:mt-4 sm:text-4xl">
              Quality Throughout
            </h2>

            <div className="mt-6 grid gap-x-8 gap-y-3 sm:mt-8 sm:gap-x-12 sm:gap-y-4 md:mt-10 md:grid-cols-2">
              <ul className="space-y-3 sm:space-y-4">
                {leftFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                    className="flex items-start gap-2.5 text-sm text-stone-600 sm:gap-3 sm:text-base"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300 sm:mt-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3 sm:space-y-4">
                {rightFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (leftFeatures.length + idx) * 0.05 }}
                    className="flex items-start gap-2.5 text-sm text-stone-600 sm:gap-3 sm:text-base"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300 sm:mt-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

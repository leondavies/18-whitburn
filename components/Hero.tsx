"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { listing } from "@/config/listing";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://res.cloudinary.com/dioazaxrs/image/upload/f_auto,q_auto,w_1920/v1774437796/hero_mobile_sqlt7y.png"
          />
          <img
            src={listing.heroImage.src}
            alt={listing.heroImage.alt}
            className="h-full w-full object-cover"
          />
        </picture>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-end px-5 pb-20 sm:px-8 md:px-12 lg:px-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm sm:tracking-[0.3em]">
            For Private Sale
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-[family-name:var(--font-display)] text-4xl font-light text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {listing.address}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 text-base font-light text-white/80 sm:mt-3 sm:text-lg md:text-xl"
        >
          {listing.suburb}, {listing.city}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap items-center gap-4 text-white/90 sm:mt-8 sm:gap-6"
        >
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl font-light sm:text-2xl">{listing.stats.bedrooms}</span>
            <span className="text-xs uppercase tracking-wider text-white/60 sm:text-sm">Beds</span>
          </span>
          <span className="h-4 w-px bg-white/30" />
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl font-light sm:text-2xl">{listing.stats.bathrooms}</span>
            <span className="text-xs uppercase tracking-wider text-white/60 sm:text-sm">Baths</span>
          </span>
          <span className="h-4 w-px bg-white/30" />
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl font-light sm:text-2xl">{listing.stats.floorArea}</span>
            <span className="text-xs uppercase tracking-wider text-white/60 sm:text-sm">m²</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/50 to-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

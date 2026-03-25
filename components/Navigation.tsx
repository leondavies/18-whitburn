"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > window.innerHeight * 0.8);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/50 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
        <span className="font-[family-name:var(--font-display)] text-base text-stone-800 sm:text-lg">
          18 Whitburn Avenue
        </span>
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-stone-800 sm:px-6 sm:py-2.5 sm:text-sm"
        >
          <span className="relative z-10">Enquire</span>
        </a>
      </div>
    </motion.nav>
  );
}

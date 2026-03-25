"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row"
        >
          <p className="font-[family-name:var(--font-display)] text-base text-stone-600 sm:text-lg">
            18 Whitburn Avenue, Halswell
          </p>
          <p className="text-xs text-stone-400 sm:text-sm">
            Private Sale
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

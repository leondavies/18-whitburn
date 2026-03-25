"use client";

import { motion } from "framer-motion";
import { listing } from "@/config/listing";

export function Contact() {
  return (
    <section id="contact" className="relative bg-white py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
              Next Steps
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light text-stone-900 sm:mt-4 sm:text-4xl md:text-5xl">
              Arrange a private viewing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-500 sm:mt-6 sm:text-lg">
              Experience the quality and flow of this home in person. Contact us
              to schedule a time that suits you.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              <motion.a
                href={`tel:${listing.contact.phone.replace(/\s/g, "")}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group flex items-center gap-3 sm:gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 transition-colors group-hover:bg-stone-200 sm:h-12 sm:w-12">
                  <svg
                    className="h-5 w-5 text-stone-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs text-stone-400 sm:text-sm">Phone</span>
                  <span className="text-base text-stone-800 transition-colors group-hover:text-stone-600 sm:text-lg">
                    {listing.contact.phone}
                  </span>
                </span>
              </motion.a>

              <motion.a
                href={`mailto:${listing.contact.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group flex items-center gap-3 sm:gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 transition-colors group-hover:bg-stone-200 sm:h-12 sm:w-12">
                  <svg
                    className="h-5 w-5 text-stone-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs text-stone-400 sm:text-sm">Email</span>
                  <span className="text-base text-stone-800 transition-colors group-hover:text-stone-600 sm:text-lg">
                    {listing.contact.email}
                  </span>
                </span>
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-sm text-stone-400 sm:mt-8"
            >
              {listing.contact.name}
            </motion.p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/dioazaxrs/image/upload/v1774428236/1019_e8ycd5.jpg"
                alt="Entry to 18 Whitburn Avenue"
                className="w-full"
              />
            </div>
            <div className="mt-4 bg-stone-900 px-5 py-4 text-white sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:px-8 sm:py-6 md:-bottom-8 md:-left-8">
              <p className="font-[family-name:var(--font-display)] text-xl font-light sm:text-2xl">
                {listing.price}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

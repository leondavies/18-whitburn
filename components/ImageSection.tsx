"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageSectionProps {
  title: string;
  subtitle: string;
  description: string;
  images: { src: string; alt: string }[];
  layout?: "left" | "right" | "grid" | "full";
  index: number;
}

// Slower, gentler animations for mobile
const mobileTransition = {
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

function ImageButton({
  image,
  onClick,
  className = ""
}: {
  image: { src: string; alt: string };
  onClick: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative block cursor-pointer overflow-hidden ${className}`}
      whileHover="hover"
      initial="rest"
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full"
        variants={{
          rest: { scale: 1, filter: "brightness(1)" },
          hover: { scale: 1.03, filter: "brightness(1.05)" }
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      />
    </motion.button>
  );
}

export function ImageSection({
  title,
  subtitle,
  description,
  images,
  layout = "left",
  index,
}: ImageSectionProps) {
  const ref = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  if (layout === "full") {
    return (
      <>
        {/* Mobile layout - matches other sections */}
        <section ref={ref} className="relative bg-stone-50 py-16 sm:py-20 md:hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={mobileTransition}
              className="mb-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
                {subtitle}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light text-stone-900 sm:text-3xl">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-stone-500 sm:mt-6 sm:text-lg">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...mobileTransition, delay: 0.15 }}
            >
              <ImageButton
                image={images[0]}
                onClick={() => openLightbox(0)}
                className="w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Desktop layout - full screen hero style */}
        <section className="relative hidden h-screen w-full overflow-hidden md:block">
          <motion.button
            onClick={() => openLightbox(0)}
            className="absolute inset-0 h-full w-full cursor-pointer"
            whileHover="hover"
            initial="rest"
          >
            <motion.img
              src={images[0].src}
              alt={images[0].alt}
              className="h-full w-full object-cover"
              variants={{
                rest: { scale: 1, filter: "brightness(0.9)" },
                hover: { scale: 1.02, filter: "brightness(0.95)" }
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          </motion.button>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute inset-0 z-10 flex h-full flex-col justify-end px-12 pb-24 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                {subtitle}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-light text-white lg:text-5xl">
                {title}
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </>
    );
  }

  if (layout === "grid") {
    return (
      <section ref={ref} className="relative bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={mobileTransition}
            className="mb-8 text-center sm:mb-10 md:mb-12"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
              {subtitle}
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light text-stone-900 sm:text-4xl">
              {title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-500 sm:text-lg">
              {description}
            </p>
          </motion.div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ...mobileTransition, delay: idx * 0.15 }}
              >
                <ImageButton
                  image={image}
                  onClick={() => openLightbox(idx)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </section>
    );
  }

  const isLeft = layout === "left";

  return (
    <section
      ref={ref}
      className={`relative py-16 sm:py-20 md:py-24 ${
        index % 2 === 0 ? "bg-stone-50" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div
          className={`grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
            isLeft ? "" : "lg:grid-flow-dense"
          }`}
        >
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={mobileTransition}
            className={`relative order-2 lg:order-none ${isLeft ? "" : "lg:col-start-2"}`}
          >
            {images.length <= 2 ? (
              <div className="flex flex-col gap-3 sm:gap-4">
                {images.map((image, idx) => (
                  <ImageButton
                    key={idx}
                    image={image}
                    onClick={() => openLightbox(idx)}
                    className="w-full"
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:gap-4">
                <ImageButton
                  image={images[0]}
                  onClick={() => openLightbox(0)}
                  className="w-full"
                />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {images.slice(1).map((image, idx) => (
                    <ImageButton
                      key={idx}
                      image={image}
                      onClick={() => openLightbox(idx + 1)}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Text */}
          <div className={`order-1 h-full lg:order-none ${isLeft ? "" : "lg:col-start-1 lg:row-start-1"}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={mobileTransition}
              className="h-full"
            >
              <div className="lg:sticky lg:top-32">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400 sm:text-sm">
                  {subtitle}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light text-stone-900 sm:text-3xl md:text-4xl">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone-500 sm:mt-6 sm:text-lg">
                  {description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}

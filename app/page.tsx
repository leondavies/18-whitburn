import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Introduction } from "@/components/Introduction";
import { ImageSection } from "@/components/ImageSection";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { listing } from "@/config/listing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        {listing.sections.map((section, index) => (
          <ImageSection
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            description={section.description}
            images={section.images}
            layout={section.layout}
            index={index}
          />
        ))}
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

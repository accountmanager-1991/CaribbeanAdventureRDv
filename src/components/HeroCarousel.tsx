"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Landscape shots only — the hero is full-bleed, so portrait images
// (tour-01, tour-11) get cropped to a sliver and are left to the gallery.
const heroImages = [
  "/images/tour-28.jpg", // Puerto Plata from Mount Isabel de Torres
  "/images/tour-25.jpg", // Caribbean coastline
  "/images/tour-13.jpg", // Fort San Felipe
  "/images/tour-32.jpg", // Dominican coffee
  "/images/tour-03.jpg", // casita típica
  "/images/tour-16.jpg", // umbrella street
  "/images/tour-04.jpg",
  "/images/tour-23.jpg", // botanical garden
  "/images/tour-07.jpg",
  "/images/tour-14.jpg", // classic cars
  "/images/tour-21.jpg", // Malecón
  "/images/tour-24.jpg", // beach club
  "/images/tour-08.jpg",
  "/images/tour-15.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Puerto Plata adventure ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          // `priority` is deprecated in Next.js 16. The first slide is the LCP
          // element, so load it eagerly; the rest fade in on their own timer.
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
          sizes="100vw"
        />
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

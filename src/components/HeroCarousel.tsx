"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/images/tour-03.jpg",
  "/images/tour-04.jpg",
  "/images/tour-07.jpg",
  "/images/tour-08.jpg",
  "/images/tour-09.jpg",
  "/images/tour-11.jpg",
  "/images/tour-14.jpg",
  "/images/tour-15.jpg",
  "/images/tour-21.jpg",
  "/images/tour-23.jpg",
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
          priority={i === 0}
          sizes="100vw"
        />
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  galleryCategories,
  galleryPhotos,
  type GalleryCategory,
} from "@/data/gallery";

export default function PhotoGallery() {
  const { locale, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Restores keyboard focus to the thumbnail the lightbox was opened from.
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const photos =
    filter === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === filter);

  const open = lightboxIndex !== null;

  const close = useCallback(() => {
    setLightboxIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setLightboxIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      );
    },
    [photos.length]
  );

  // Keyboard controls and background scroll lock while the lightbox is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, step]);

  const current = lightboxIndex === null ? null : photos[lightboxIndex];

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {galleryCategories.map((cat) => {
          const count =
            cat.id === "all"
              ? galleryPhotos.length
              : galleryPhotos.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              aria-pressed={filter === cat.id}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === cat.id
                  ? "bg-ocean text-white"
                  : "bg-white text-gray-600 hover:bg-ocean-light hover:text-ocean-dark"
              }`}
            >
              {cat.label[locale]}
              <span className="ml-1.5 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid. Portrait shots span two rows so they are not cropped flat. */}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">
        {photos.map((photo, i) => (
          <li
            key={photo.src}
            className={photo.portrait ? "row-span-2" : undefined}
          >
            <button
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setLightboxIndex(i);
              }}
              className="group relative w-full h-full overflow-hidden rounded-xl bg-gray-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-sunset cursor-zoom-in"
            >
              <Image
                src={`/images/${photo.src}`}
                alt={photo.caption[locale]}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                // First row is above the fold; the rest lazy-load on scroll.
                loading={i < 4 ? "eager" : "lazy"}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-8 text-left text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                {photo.caption[locale]}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {open && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption[locale]}
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col"
          onClick={close}
        >
          <div className="flex items-center justify-between p-4 text-white shrink-0">
            <span className="text-sm tabular-nums opacity-70">
              {lightboxIndex! + 1} / {photos.length}
            </span>
            <button
              ref={closeButtonRef}
              onClick={close}
              aria-label={t("gallery.close")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-2xl leading-none focus:outline-none focus-visible:ring-4 focus-visible:ring-sunset"
            >
              &times;
            </button>
          </div>

          <div
            className="relative flex-1 min-h-0"
            // Clicks on the image itself should not dismiss the lightbox.
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${current.src}`}
              alt={current.caption[locale]}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div
            className="shrink-0 p-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-sm sm:text-base mb-4">
              {current.caption[locale]}
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => step(-1)}
                aria-label={t("gallery.previous")}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/25 text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sunset"
              >
                &larr;
              </button>
              <button
                onClick={() => step(1)}
                aria-label={t("gallery.next")}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/25 text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sunset"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

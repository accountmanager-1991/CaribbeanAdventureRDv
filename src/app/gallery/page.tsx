"use client";

import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-to-r from-ocean-dark to-ocean text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">{t("gallery.title")}</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>

      <VideoGallery />

      <section className="bg-ocean-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">{t("gallery.ctaTitle")}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t("gallery.ctaSubtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sunset hover:bg-sunset-dark px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t("nav.bookNow")}
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";
import { galleryVideos } from "@/data/gallery";

/**
 * Renders nothing until videos are added to `galleryVideos`, so the live site
 * never shows an empty "coming soon" shell. See public/videos/README.md.
 */
export default function VideoGallery() {
  const { locale, t } = useLanguage();

  if (galleryVideos.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark mb-2">
          {t("gallery.videosTitle")}
        </h2>
        <p className="text-gray-600 mb-8">{t("gallery.videosSubtitle")}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {galleryVideos.map((video) => (
            <figure key={video.src} className="rounded-xl overflow-hidden bg-gray-100">
              <video
                controls
                // Load only the poster until the visitor presses play — these
                // files are served unoptimised straight from /public.
                preload="none"
                playsInline
                poster={`/images/${video.poster}`}
                className="w-full aspect-video bg-black"
              >
                <source src={`/videos/${video.src}`} type="video/mp4" />
              </video>
              <figcaption className="p-4 text-sm font-medium text-gray-800">
                {video.title[locale]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

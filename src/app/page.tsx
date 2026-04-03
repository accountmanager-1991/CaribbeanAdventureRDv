"use client";

import Link from "next/link";
import ActivityCard from "@/components/ActivityCard";
import { activities, type ActivityCategory } from "@/data/activities";
import { useLanguage } from "@/context/LanguageContext";

const categoryIcons: Record<ActivityCategory, string> = {
  "water-sports": "🤿",
  nature: "🌿",
  cultural: "🏛️",
  food: "🍽️",
  nightlife: "🌙",
  extreme: "⚡",
};

const categoryKeys: ActivityCategory[] = [
  "water-sports",
  "nature",
  "cultural",
  "food",
  "nightlife",
  "extreme",
];

export default function Home() {
  const { t } = useLanguage();
  const featured = activities.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ocean-dark via-ocean to-palm text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-[200px] leading-none">🌴</div>
          <div className="absolute bottom-10 right-10 text-[150px] leading-none">🌊</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-ocean-light font-semibold text-sm uppercase tracking-widest mb-4">
              {t("hero.location")}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("hero.title1")}{" "}
              <span className="text-sunset">{t("hero.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/adventures"
                className="bg-sunset hover:bg-sunset-dark text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                {t("hero.cta1")}
              </Link>
              <Link
                href="#about"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                {t("hero.cta2")}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">{t("categories.title")}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t("categories.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryKeys.map((cat) => (
              <Link
                key={cat}
                href={`/adventures?category=${cat}`}
                className="bg-sky hover:bg-ocean-light/30 rounded-xl p-6 text-center transition-colors group"
              >
                <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform inline-block">
                  {categoryIcons[cat]}
                </span>
                <span className="text-sm font-semibold text-ocean-dark">{t(`cat.${cat}`)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">{t("featured.title")}</h2>
              <p className="text-gray-600">{t("featured.subtitle")}</p>
            </div>
            <Link
              href="/adventures"
              className="hidden md:inline-flex text-ocean font-semibold hover:text-ocean-dark transition-colors"
            >
              {t("featured.viewAll")} &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/adventures" className="text-ocean font-semibold hover:text-ocean-dark transition-colors">
              {t("featured.viewAll")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">{t("why.title")}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t("why.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇩🇴</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t("why.local.title")}</h3>
              <p className="text-gray-600 text-sm">{t("why.local.desc")}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sunset/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t("why.quality.title")}</h3>
              <p className="text-gray-600 text-sm">{t("why.quality.desc")}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-palm-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t("why.price.title")}</h3>
              <p className="text-gray-600 text-sm">{t("why.price.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-dark to-palm text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-white/80 text-lg mb-8">{t("cta.subtitle")}</p>
          <Link
            href="/adventures"
            className="bg-sunset hover:bg-sunset-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}

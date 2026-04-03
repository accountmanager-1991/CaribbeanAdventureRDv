"use client";

import { useState } from "react";
import ActivityCard from "@/components/ActivityCard";
import { activities, type ActivityCategory } from "@/data/activities";
import { useLanguage } from "@/context/LanguageContext";

const allCategories: ("all" | ActivityCategory)[] = [
  "all",
  "water-sports",
  "nature",
  "cultural",
  "food",
  "nightlife",
  "extreme",
];

export default function AdventuresPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | ActivityCategory>("all");

  const filtered =
    selectedCategory === "all"
      ? activities
      : activities.filter((a) => a.category === selectedCategory);

  return (
    <>
      <section className="bg-gradient-to-r from-ocean-dark to-ocean text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">{t("adventures.title")}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{t("adventures.subtitle")}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-ocean text-white"
                    : "bg-white text-gray-600 hover:bg-ocean-light/20 hover:text-ocean-dark"
                }`}
              >
                {cat === "all" ? t("adventures.all") : t(`cat.${cat}`)}
              </button>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            {t("adventures.showing")} {filtered.length}{" "}
            {filtered.length !== 1 ? t("adventures.adventures") : t("adventures.adventure")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🏝️</span>
              <h3 className="text-xl font-bold text-gray-600 mb-2">{t("adventures.noResults")}</h3>
              <p className="text-gray-400">{t("adventures.noResultsDesc")}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

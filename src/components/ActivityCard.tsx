"use client";

import { Activity } from "@/data/activities";
import { activityTranslations } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function ActivityCard({ activity }: { activity: Activity }) {
  const { locale, t } = useLanguage();
  const at = activityTranslations[locale][activity.id];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={activity.image}
          alt={at?.title || activity.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-ocean text-xs font-semibold px-2 py-1 rounded-full">
          {t(`cat.${activity.category}`)}
        </span>
        {activity.difficulty !== "Easy" && (
          <span className="absolute top-3 right-3 bg-sunset text-white text-xs font-semibold px-2 py-1 rounded-full">
            {activity.difficulty}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-dark mb-1">
          {at?.title || activity.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {at?.description || activity.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {activity.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {activity.location}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-400">{activity.duration}</span>
          <Link
            href="/contact"
            className="bg-sunset hover:bg-sunset-dark text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            {t("card.inquire")}
          </Link>
        </div>
      </div>
    </div>
  );
}

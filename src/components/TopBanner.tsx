"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TopBanner() {
  const { locale } = useLanguage();

  return (
    <div className="bg-ocean-dark text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <a href="tel:+18099743407" className="flex items-center gap-1 hover:text-ocean-light transition-colors">
          <span>📞</span>
          <span>(+1) 809-974-3407</span>
        </a>
        <a
          href="https://wa.me/18099743407"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-ocean-light transition-colors"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
        <a href="mailto:juniormarte67@gmail.com" className="flex items-center gap-1 hover:text-ocean-light transition-colors">
          <span>✉️</span>
          <span>juniormarte67@gmail.com</span>
        </a>
        <span className="hidden sm:flex items-center gap-1 text-white/70">
          <span>📍</span>
          <span>{locale === "es" ? "Puerto Plata, Rep. Dominicana" : "Puerto Plata, Dominican Republic"}</span>
        </span>
      </div>
    </div>
  );
}

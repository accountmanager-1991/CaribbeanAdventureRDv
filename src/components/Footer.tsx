"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌴</span>
              <span className="font-bold text-lg">
                Caribbean Adventure <span className="text-ocean-light">RD</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">{t("footer.desc")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/adventures" className="hover:text-white transition-colors">
                  {t("nav.adventures")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Calle Beller #18, San Felipe de Puerto Plata, RD</li>
              <li>
                <a href="tel:+18099743407" className="hover:text-white transition-colors">
                  (+1) 809-974-3407
                </a>
              </li>
              <li>
                <a href="mailto:juniormarte67@gmail.com" className="hover:text-white transition-colors">
                  juniormarte67@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18099743407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Caribbean Adventure RD. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { activities } from "@/data/activities";
import { activityTranslations } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const date = data.get("date") as string;
    const guests = data.get("guests") as string;
    const activityId = data.get("activity") as string;
    const message = data.get("message") as string;

    // Find activity label
    const activityLabel =
      activityId === "other"
        ? locale === "es" ? "Otro" : "Other"
        : activityTranslations[locale][activityId]?.title ||
          activities.find((a) => a.id === activityId)?.title ||
          activityId;

    // Send email to Junior via API
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          guests,
          activity: activityLabel,
          message,
        }),
      });
    } catch {
      // Email failed silently — form still shows success
    }

    setSending(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-ocean-dark to-ocean text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">{t("contact.title")}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-dark mb-2">{t("form.title")}</h2>
              <p className="text-gray-600 mb-6">{t("form.subtitle")}</p>

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-6xl block mb-4">✅</span>
                  <p className="text-lg font-semibold text-palm">{t("form.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      {t("form.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={t("form.namePlaceholder")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      {t("form.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      {t("form.phone")} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder={t("form.phonePlaceholder")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    />
                  </div>

                  {/* Date & Guests row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">
                        {t("form.date")} *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">
                        {t("form.guests")} *
                      </label>
                      <input
                        type="number"
                        name="guests"
                        required
                        min={1}
                        max={50}
                        defaultValue={2}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Activity select */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      {t("form.activity")} *
                    </label>
                    <select
                      name="activity"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent"
                    >
                      <option value="">{t("form.selectOne")}</option>
                      {activities.map((a) => (
                        <option key={a.id} value={a.id}>
                          {activityTranslations[locale][a.id]?.title || a.title}
                        </option>
                      ))}
                      <option value="other">
                        {locale === "es" ? "Otro" : "Other"}
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      {t("form.message")}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-dark focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Privacy & Terms checkbox */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 accent-ocean"
                    />
                    <label className="text-sm text-gray-600">
                      {t("form.privacy")}{" "}
                      <Link href="/privacy" className="text-ocean underline hover:text-ocean-dark">
                        {t("form.privacyLink")}
                      </Link>{" "}
                      {t("form.and")}{" "}
                      <Link href="/terms" className="text-ocean underline hover:text-ocean-dark">
                        {t("form.termsLink")}
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-sunset hover:bg-sunset-dark disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold text-lg transition-colors"
                  >
                    {sending
                      ? locale === "es" ? "Enviando..." : "Sending..."
                      : t("form.submit")}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-8">
              {/* Contact cards */}
              <div className="grid sm:grid-cols-1 gap-4">
                {/* Phone / WhatsApp */}
                <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-palm-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{t("contact.phone")}</h3>
                    <a href="tel:+18099743407" className="text-ocean hover:text-ocean-dark transition-colors block">
                      (+1) 809-974-3407
                    </a>
                    <a
                      href="https://wa.me/18099743407"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 bg-palm text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-palm-light transition-colors"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-light/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{t("contact.email")}</h3>
                    <a
                      href="mailto:juniormarte67@gmail.com"
                      className="text-ocean hover:text-ocean-dark transition-colors"
                    >
                      juniormarte67@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-sunset/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{t("contact.address")}</h3>
                    <p className="text-gray-600">
                      Calle Beller #18
                      <br />
                      San Felipe de Puerto Plata, RD
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <h3 className="font-bold text-dark p-6 pb-0">{t("contact.findUs")}</h3>
                <div className="p-4">
                  <iframe
                    title="Caribbean Adventure RD Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.2!2d-70.6941!3d19.7908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf8fa418b58d%3A0x5c4b0e5e2b7a2c1a!2sParque%20Central%20de%20Puerto%20Plata!5e1!3m2!1sen!2sdo!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "0.75rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

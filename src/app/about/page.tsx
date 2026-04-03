"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { locale } = useLanguage();

  const content = locale === "es" ? {
    heroTitle: "Sobre Nosotros",
    heroSubtitle: "Más de 20 años creando experiencias inolvidables en Puerto Plata",
    historyTitle: "Puerto Plata: La Joya del Atlántico",
    historyP1: "San Felipe de Puerto Plata, fundada en 1502 por Nicolás de Ovando, es una de las ciudades más antiguas del Nuevo Mundo. Su nombre, que significa \"Puerto de Plata\", fue dado por Cristóbal Colón al ver cómo las nubes plateadas coronaban la montaña Isabel de Torres.",
    historyP2: "Esta provincia norteña de la República Dominicana es famosa por sus playas doradas, su rica historia colonial y la calidez de su gente. Desde la histórica Fortaleza San Felipe — la primera fortaleza militar del Nuevo Mundo — hasta el único teleférico del Caribe que asciende al Monte Isabel de Torres, Puerto Plata ofrece una mezcla única de historia, cultura y aventura natural.",
    historyP3: "Hoy, Puerto Plata es uno de los destinos turísticos más vibrantes del Caribe, recibiendo cruceros internacionales y turistas de todo el mundo que buscan experiencias auténticas más allá del resort típico.",
    juniorTitle: "Conoce a Junior Marte",
    juniorSubtitle: "Tu Guía de Confianza en Puerto Plata",
    juniorP1: "Con más de 20 años de experiencia en la industria turística de Puerto Plata, Junior Marte ha dedicado su vida a compartir la belleza y cultura de su tierra natal con visitantes de todo el mundo.",
    juniorP2: "Lo que comenzó como una pasión por su ciudad se convirtió en una misión: ofrecer tours auténticos y personalizados que van más allá de lo típico. Junior conoce cada rincón de Puerto Plata — desde los senderos secretos de Damajagua hasta las mejores vistas del Malecón.",
    juniorP3: "Su filosofía es simple: cada visitante merece una experiencia genuina, segura y memorable. Con grupos pequeños, atención personalizada y un profundo conocimiento local, Junior y su equipo garantizan que cada aventura sea especial.",
    valuesTitle: "¿Por Qué Elegirnos?",
    value1Title: "20+ Años de Experiencia",
    value1Desc: "Dos décadas conociendo cada rincón de Puerto Plata y construyendo relaciones con los mejores proveedores locales.",
    value2Title: "Servicio al Cliente Excepcional",
    value2Desc: "Nuestra prioridad es tu satisfacción. Atención personalizada desde la reserva hasta el final de tu aventura.",
    value3Title: "Conocimiento Local Auténtico",
    value3Desc: "No somos una agencia genérica. Somos de aquí. Conocemos la historia, la cultura y los secretos de Puerto Plata.",
    value4Title: "Seguridad Garantizada",
    value4Desc: "Todos nuestros tours cumplen con estándares de seguridad. Tu bienestar es nuestra prioridad número uno.",
    ctaTitle: "¿Listo Para Explorar Puerto Plata?",
    ctaButton: "Reserva Tu Aventura",
  } : {
    heroTitle: "About Us",
    heroSubtitle: "Over 20 years creating unforgettable experiences in Puerto Plata",
    historyTitle: "Puerto Plata: The Atlantic Jewel",
    historyP1: "San Felipe de Puerto Plata, founded in 1502 by Nicolás de Ovando, is one of the oldest cities in the New World. Its name, meaning \"Silver Port,\" was given by Christopher Columbus when he saw the silver clouds crowning Mount Isabel de Torres.",
    historyP2: "This northern province of the Dominican Republic is famous for its golden beaches, rich colonial history, and the warmth of its people. From the historic Fort San Felipe — the first military fortress in the New World — to the only cable car in the Caribbean ascending Mount Isabel de Torres, Puerto Plata offers a unique blend of history, culture, and natural adventure.",
    historyP3: "Today, Puerto Plata is one of the most vibrant tourist destinations in the Caribbean, welcoming international cruise ships and travelers from around the world seeking authentic experiences beyond the typical resort.",
    juniorTitle: "Meet Junior Marte",
    juniorSubtitle: "Your Trusted Guide in Puerto Plata",
    juniorP1: "With over 20 years of experience in Puerto Plata's tourism industry, Junior Marte has dedicated his life to sharing the beauty and culture of his homeland with visitors from around the world.",
    juniorP2: "What started as a passion for his city became a mission: to offer authentic, personalized tours that go beyond the typical. Junior knows every corner of Puerto Plata — from the secret trails of Damajagua to the best views along the Malecón.",
    juniorP3: "His philosophy is simple: every visitor deserves a genuine, safe, and memorable experience. With small groups, personalized attention, and deep local knowledge, Junior and his team ensure every adventure is special.",
    valuesTitle: "Why Choose Us?",
    value1Title: "20+ Years of Experience",
    value1Desc: "Two decades of knowing every corner of Puerto Plata and building relationships with the best local providers.",
    value2Title: "Exceptional Customer Service",
    value2Desc: "Your satisfaction is our priority. Personalized attention from booking to the end of your adventure.",
    value3Title: "Authentic Local Knowledge",
    value3Desc: "We're not a generic agency. We're from here. We know the history, the culture, and the secrets of Puerto Plata.",
    value4Title: "Safety Guaranteed",
    value4Desc: "All our tours meet safety standards. Your well-being is our number one priority.",
    ctaTitle: "Ready to Explore Puerto Plata?",
    ctaButton: "Book Your Adventure",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden h-80">
        <Image
          src="/images/tour-07.jpg"
          alt="Puerto Plata"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{content.heroTitle}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{content.heroSubtitle}</p>
        </div>
      </section>

      {/* Puerto Plata History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">{content.historyTitle}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{content.historyP1}</p>
                <p>{content.historyP2}</p>
                <p>{content.historyP3}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image src="/images/tour-11.jpg" alt="Puerto Plata" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image src="/images/tour-04.jpg" alt="Puerto Plata tours" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden col-span-2">
                <Image src="/images/tour-08.jpg" alt="Puerto Plata group" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Marte */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden order-2 lg:order-1">
              <Image src="/images/tour-10.jpg" alt="Junior Marte" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-ocean font-semibold text-sm uppercase tracking-widest mb-2">{content.juniorSubtitle}</p>
              <h2 className="text-3xl font-bold text-dark mb-6">{content.juniorTitle}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{content.juniorP1}</p>
                <p>{content.juniorP2}</p>
                <p>{content.juniorP3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">{content.valuesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-sky rounded-xl">
              <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark">{content.value1Title}</h3>
              <p className="text-gray-600 text-sm">{content.value1Desc}</p>
            </div>
            <div className="text-center p-6 bg-sky rounded-xl">
              <div className="w-16 h-16 bg-sunset/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark">{content.value2Title}</h3>
              <p className="text-gray-600 text-sm">{content.value2Desc}</p>
            </div>
            <div className="text-center p-6 bg-sky rounded-xl">
              <div className="w-16 h-16 bg-palm-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇩🇴</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark">{content.value3Title}</h3>
              <p className="text-gray-600 text-sm">{content.value3Desc}</p>
            </div>
            <div className="text-center p-6 bg-sky rounded-xl">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark">{content.value4Title}</h3>
              <p className="text-gray-600 text-sm">{content.value4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-4 bg-gray-100">
        <div className="flex gap-2 overflow-hidden">
          {[1, 6, 9, 12, 15, 20, 22, 26].map((n) => (
            <div key={n} className="relative w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={`/images/tour-${String(n).padStart(2, "0")}.jpg`}
                alt={`Tour photo ${n}`}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-dark to-palm text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
          <Link
            href="/contact"
            className="bg-sunset hover:bg-sunset-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}

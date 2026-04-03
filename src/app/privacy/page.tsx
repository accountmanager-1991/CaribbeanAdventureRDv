"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  if (locale === "es") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-dark mb-2">Política de Privacidad</h1>
        <p className="text-gray-400 mb-8">Última Actualización: 3 de abril de 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <h2 className="text-xl font-bold text-dark">1. Información que Recopilamos</h2>
          <p>
            Cuando utilizas nuestro sitio web o envías un formulario de reserva, podemos recopilar la siguiente
            información personal: nombre completo, dirección de correo electrónico, número de teléfono, fechas de viaje
            preferidas, número de personas y cualquier mensaje adicional que proporciones.
          </p>

          <h2 className="text-xl font-bold text-dark">2. Cómo Usamos Tu Información</h2>
          <p>Usamos tu información personal para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Procesar y confirmar tus solicitudes de reserva</li>
            <li>Comunicarnos contigo sobre tus aventuras reservadas</li>
            <li>Responder a tus preguntas y solicitudes</li>
            <li>Mejorar nuestros servicios y experiencia del sitio web</li>
          </ul>

          <h2 className="text-xl font-bold text-dark">3. Compartir Información</h2>
          <p>
            No vendemos, comercializamos ni transferimos tu información personal a terceros. Podemos compartir tu
            información con operadores turísticos locales únicamente con el propósito de cumplir con tu reserva.
          </p>

          <h2 className="text-xl font-bold text-dark">4. Seguridad de Datos</h2>
          <p>
            Implementamos medidas de seguridad razonables para proteger tu información personal contra acceso no
            autorizado, alteración, divulgación o destrucción.
          </p>

          <h2 className="text-xl font-bold text-dark">5. Cookies</h2>
          <p>
            Nuestro sitio web puede usar cookies para mejorar tu experiencia de navegación. Puedes configurar tu
            navegador para rechazar cookies, aunque algunas funciones del sitio pueden no funcionar correctamente.
          </p>

          <h2 className="text-xl font-bold text-dark">6. Tus Derechos</h2>
          <p>
            Tienes derecho a solicitar acceso, corrección o eliminación de tu información personal. Para ejercer
            estos derechos, contáctanos en juniormarte67@gmail.com.
          </p>

          <h2 className="text-xl font-bold text-dark">7. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:
            <br />
            Email: juniormarte67@gmail.com
            <br />
            Teléfono: (+1) 809-974-3407
            <br />
            Dirección: Calle Beller #18, San Felipe de Puerto Plata, RD
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last Updated: April 3, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <h2 className="text-xl font-bold text-dark">1. Information We Collect</h2>
        <p>
          When you use our website or submit a booking form, we may collect the following personal information:
          full name, email address, phone number, preferred travel dates, number of guests, and any additional
          messages you provide.
        </p>

        <h2 className="text-xl font-bold text-dark">2. How We Use Your Information</h2>
        <p>We use your personal information to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process and confirm your booking requests</li>
          <li>Communicate with you about your booked adventures</li>
          <li>Respond to your inquiries and requests</li>
          <li>Improve our services and website experience</li>
        </ul>

        <h2 className="text-xl font-bold text-dark">3. Information Sharing</h2>
        <p>
          We do not sell, trade, or transfer your personal information to third parties. We may share your
          information with local tour operators solely for the purpose of fulfilling your booking.
        </p>

        <h2 className="text-xl font-bold text-dark">4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <h2 className="text-xl font-bold text-dark">5. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You can set your browser to refuse
          cookies, though some site features may not function properly.
        </p>

        <h2 className="text-xl font-bold text-dark">6. Your Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of your personal information. To
          exercise these rights, contact us at juniormarte67@gmail.com.
        </p>

        <h2 className="text-xl font-bold text-dark">7. Contact</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
          <br />
          Email: juniormarte67@gmail.com
          <br />
          Phone: (+1) 809-974-3407
          <br />
          Address: Calle Beller #18, San Felipe de Puerto Plata, RD
        </p>
      </div>
    </div>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { locale } = useLanguage();

  if (locale === "es") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-dark mb-2">Términos y Condiciones</h1>
        <p className="text-gray-400 mb-8">Última Actualización: 3 de abril de 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <h2 className="text-xl font-bold text-dark">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de Caribbean Adventure RD, aceptas estar sujeto a estos Términos y
            Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no utilices nuestro sitio web.
          </p>

          <h2 className="text-xl font-bold text-dark">2. Reservas y Consultas</h2>
          <p>
            Los formularios de reserva enviados a través de nuestro sitio web son solicitudes de reserva, no
            confirmaciones. Nos comunicaremos contigo para confirmar la disponibilidad, detalles y precio final
            antes de confirmar cualquier reserva.
          </p>

          <h2 className="text-xl font-bold text-dark">3. Actividades y Seguridad</h2>
          <p>
            Las actividades de aventura conllevan riesgos inherentes. Los participantes deben estar en buena
            condición física y seguir todas las instrucciones de seguridad proporcionadas por los guías. Caribbean
            Adventure RD y sus operadores asociados no se hacen responsables de lesiones resultantes del
            incumplimiento de las instrucciones de seguridad.
          </p>

          <h2 className="text-xl font-bold text-dark">4. Cancelaciones</h2>
          <p>
            Las políticas de cancelación varían según la actividad y el operador. Los detalles específicos de
            cancelación se proporcionarán durante el proceso de confirmación de la reserva.
          </p>

          <h2 className="text-xl font-bold text-dark">5. Contenido del Sitio Web</h2>
          <p>
            Nos esforzamos por mantener la información precisa y actualizada. Sin embargo, las descripciones,
            disponibilidad y detalles de las actividades pueden cambiar sin previo aviso. Las imágenes son
            representativas y pueden no reflejar las condiciones exactas.
          </p>

          <h2 className="text-xl font-bold text-dark">6. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de este sitio web, incluyendo texto, imágenes, logotipos y diseño, es propiedad de
            Caribbean Adventure RD y está protegido por las leyes de propiedad intelectual.
          </p>

          <h2 className="text-xl font-bold text-dark">7. Limitación de Responsabilidad</h2>
          <p>
            Caribbean Adventure RD actúa como intermediario entre los turistas y los operadores turísticos locales.
            No somos directamente responsables de la ejecución de las actividades, que son proporcionadas por
            operadores independientes.
          </p>

          <h2 className="text-xl font-bold text-dark">8. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República Dominicana. Cualquier disputa se resolverá en los
            tribunales competentes de Puerto Plata, República Dominicana.
          </p>

          <h2 className="text-xl font-bold text-dark">9. Contacto</h2>
          <p>
            Para preguntas sobre estos términos, contáctanos en:
            <br />
            Email: juniormarte67@gmail.com
            <br />
            Teléfono: (+1) 809-974-3407
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-2">Terms & Conditions</h1>
      <p className="text-gray-400 mb-8">Last Updated: April 3, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <h2 className="text-xl font-bold text-dark">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Caribbean Adventure RD website, you agree to be bound by these Terms and
          Conditions. If you do not agree with any part of these terms, please do not use our website.
        </p>

        <h2 className="text-xl font-bold text-dark">2. Bookings and Inquiries</h2>
        <p>
          Booking forms submitted through our website are booking requests, not confirmations. We will contact you
          to confirm availability, details, and final pricing before confirming any booking.
        </p>

        <h2 className="text-xl font-bold text-dark">3. Activities and Safety</h2>
        <p>
          Adventure activities carry inherent risks. Participants must be in reasonable physical condition and
          follow all safety instructions provided by guides. Caribbean Adventure RD and its partner operators are
          not liable for injuries resulting from failure to follow safety instructions.
        </p>

        <h2 className="text-xl font-bold text-dark">4. Cancellations</h2>
        <p>
          Cancellation policies vary by activity and operator. Specific cancellation details will be provided
          during the booking confirmation process.
        </p>

        <h2 className="text-xl font-bold text-dark">5. Website Content</h2>
        <p>
          We strive to keep information accurate and up to date. However, activity descriptions, availability, and
          details may change without notice. Images are representative and may not reflect exact conditions.
        </p>

        <h2 className="text-xl font-bold text-dark">6. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and design, is the property of Caribbean
          Adventure RD and is protected by intellectual property laws.
        </p>

        <h2 className="text-xl font-bold text-dark">7. Limitation of Liability</h2>
        <p>
          Caribbean Adventure RD acts as an intermediary between tourists and local tour operators. We are not
          directly responsible for the execution of activities, which are provided by independent operators.
        </p>

        <h2 className="text-xl font-bold text-dark">8. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Dominican Republic. Any disputes shall be resolved in the
          competent courts of Puerto Plata, Dominican Republic.
        </p>

        <h2 className="text-xl font-bold text-dark">9. Contact</h2>
        <p>
          For questions about these terms, contact us at:
          <br />
          Email: juniormarte67@gmail.com
          <br />
          Phone: (+1) 809-974-3407
        </p>
      </div>
    </div>
  );
}

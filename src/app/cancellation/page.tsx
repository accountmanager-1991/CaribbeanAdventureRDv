"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CancellationPage() {
  const { locale } = useLanguage();

  if (locale === "es") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-dark mb-2">Política de Cancelación</h1>
        <p className="text-gray-400 mb-8">Última Actualización: 3 de abril de 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <h2 className="text-xl font-bold text-dark">1. Cancelaciones por el Cliente</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Más de 48 horas antes:</strong> Cancelación gratuita. Reembolso completo.
            </li>
            <li>
              <strong>24 a 48 horas antes:</strong> Se cobra el 50% del costo de la actividad.
            </li>
            <li>
              <strong>Menos de 24 horas o no presentarse:</strong> No hay reembolso. Se cobra el 100%.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-dark">2. Cancelaciones por Clima</h2>
          <p>
            Si una actividad se cancela debido a condiciones climáticas severas o inseguras, ofreceremos
            reprogramación sin costo adicional o un reembolso completo, a elección del cliente.
          </p>

          <h2 className="text-xl font-bold text-dark">3. Cancelaciones por el Operador</h2>
          <p>
            Si Caribbean Adventure RD o el operador turístico cancela una actividad por cualquier motivo,
            el cliente recibirá un reembolso completo o la opción de reprogramar sin costo adicional.
          </p>

          <h2 className="text-xl font-bold text-dark">4. Cambios y Reprogramación</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Los cambios de fecha están sujetos a disponibilidad.</li>
            <li>Las solicitudes de cambio deben hacerse con al menos 24 horas de anticipación.</li>
            <li>Se permite un cambio de fecha sin cargo. Cambios adicionales pueden incurrir en cargos.</li>
          </ul>

          <h2 className="text-xl font-bold text-dark">5. Reembolsos</h2>
          <p>
            Los reembolsos aprobados se procesarán dentro de 5 a 10 días hábiles al método de pago original.
          </p>

          <h2 className="text-xl font-bold text-dark">6. Grupos</h2>
          <p>
            Para reservas de grupos (10 o más personas), se aplican políticas de cancelación especiales.
            Contacte con nosotros directamente para conocer los términos específicos.
          </p>

          <h2 className="text-xl font-bold text-dark">7. Contacto para Cancelaciones</h2>
          <p>
            Para cancelar o modificar una reserva, contáctenos por:
            <br />
            📞 Teléfono / WhatsApp: (+1) 809-974-3407
            <br />
            ✉️ Email: juniormarte67@gmail.com
          </p>

          <div className="bg-sunset/10 border border-sunset/30 rounded-lg p-4 mt-6">
            <p className="text-dark font-semibold">
              ⚠️ Recomendamos contratar un seguro de viaje que cubra cancelaciones de actividades.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-2">Cancellation Policy</h1>
      <p className="text-gray-400 mb-8">Last Updated: April 3, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <h2 className="text-xl font-bold text-dark">1. Customer Cancellations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>More than 48 hours before:</strong> Free cancellation. Full refund.
          </li>
          <li>
            <strong>24 to 48 hours before:</strong> 50% of the activity cost will be charged.
          </li>
          <li>
            <strong>Less than 24 hours or no-show:</strong> No refund. 100% charge applies.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-dark">2. Weather Cancellations</h2>
        <p>
          If an activity is cancelled due to severe or unsafe weather conditions, we will offer
          free rescheduling or a full refund, at the customer&apos;s choice.
        </p>

        <h2 className="text-xl font-bold text-dark">3. Operator Cancellations</h2>
        <p>
          If Caribbean Adventure RD or the tour operator cancels an activity for any reason,
          the customer will receive a full refund or the option to reschedule at no additional cost.
        </p>

        <h2 className="text-xl font-bold text-dark">4. Changes and Rescheduling</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Date changes are subject to availability.</li>
          <li>Change requests must be made at least 24 hours in advance.</li>
          <li>One date change is allowed free of charge. Additional changes may incur fees.</li>
        </ul>

        <h2 className="text-xl font-bold text-dark">5. Refunds</h2>
        <p>
          Approved refunds will be processed within 5 to 10 business days to the original payment method.
        </p>

        <h2 className="text-xl font-bold text-dark">6. Group Bookings</h2>
        <p>
          For group bookings (10 or more people), special cancellation policies apply.
          Please contact us directly for specific terms.
        </p>

        <h2 className="text-xl font-bold text-dark">7. Contact for Cancellations</h2>
        <p>
          To cancel or modify a booking, contact us via:
          <br />
          📞 Phone / WhatsApp: (+1) 809-974-3407
          <br />
          ✉️ Email: juniormarte67@gmail.com
        </p>

        <div className="bg-sunset/10 border border-sunset/30 rounded-lg p-4 mt-6">
          <p className="text-dark font-semibold">
            ⚠️ We recommend purchasing travel insurance that covers activity cancellations.
          </p>
        </div>
      </div>
    </div>
  );
}

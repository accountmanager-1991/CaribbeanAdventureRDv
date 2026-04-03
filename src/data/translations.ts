export type Locale = "en" | "es";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.adventures": "Adventures",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",

    // Hero
    "hero.location": "Puerto Plata, Dominican Republic",
    "hero.title1": "Discover the Real",
    "hero.title2": "Caribbean",
    "hero.subtitle":
      "Hand-picked adventure experiences with local guides. Snorkeling, waterfalls, cultural tours, and more — the authentic Dominican Republic awaits.",
    "hero.cta1": "Explore Adventures",
    "hero.cta2": "Learn More",

    // Categories
    "categories.title": "Choose Your Adventure",
    "categories.subtitle":
      "From crystal-clear waters to lush mountain jungles, Puerto Plata has something for every type of adventurer.",
    "cat.water-sports": "Water Sports",
    "cat.nature": "Nature & Eco",
    "cat.cultural": "Cultural Tours",
    "cat.food": "Food & Drink",
    "cat.nightlife": "Nightlife",
    "cat.extreme": "Extreme Sports",

    // Featured
    "featured.title": "Popular Adventures",
    "featured.subtitle": "Our most-loved experiences in Puerto Plata",
    "featured.viewAll": "View all",

    // Why Us
    "why.title": "Why Caribbean Adventure RD?",
    "why.subtitle":
      "We connect you with the best local operators for authentic Dominican experiences.",
    "why.local.title": "100% Local Guides",
    "why.local.desc":
      "Every experience is led by Dominican guides who know their home inside and out. No generic tours — only authentic adventures.",
    "why.quality.title": "Curated Quality",
    "why.quality.desc":
      "We personally vet every operator and experience. If it's on our platform, it's worth your time and money.",
    "why.price.title": "Fair Prices",
    "why.price.desc":
      "Book directly with local operators. No middleman markups — more money goes to the people who create your experience.",

    // CTA
    "cta.title": "Ready for Your Caribbean Adventure?",
    "cta.subtitle":
      "Browse our hand-picked experiences and book your next unforgettable adventure in Puerto Plata.",
    "cta.button": "Browse All Adventures",

    // Adventures page
    "adventures.title": "Adventures in Puerto Plata",
    "adventures.subtitle":
      "Explore our curated collection of adventures and tours. Each experience is led by local guides who know the Dominican Republic like no one else.",
    "adventures.all": "All Adventures",
    "adventures.showing": "Showing",
    "adventures.adventure": "adventure",
    "adventures.adventures": "adventures",
    "adventures.noResults": "No adventures in this category yet",
    "adventures.noResultsDesc":
      "Check back soon — we're adding new experiences all the time!",

    // Activity card
    "card.perPerson": "/ person",
    "card.viewDetails": "View Details",
    "card.reviews": "reviews",
    "card.inquire": "Inquire",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Have questions? We'd love to hear from you. Reach out and we'll get back to you soon.",
    "contact.phone": "Phone / WhatsApp",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.findUs": "Find Us",

    // Booking Form
    "form.title": "Book Your Adventure",
    "form.subtitle":
      "Fill out the form below and we'll get back to you to confirm your booking.",
    "form.name": "Full Name",
    "form.email": "Email",
    "form.phone": "Phone Number",
    "form.date": "Preferred Date",
    "form.guests": "Number of Guests",
    "form.activity": "Select Activity",
    "form.selectOne": "-- Select an activity --",
    "form.message": "Additional Message (optional)",
    "form.privacy": "I agree to the",
    "form.privacyLink": "Privacy Policy",
    "form.termsLink": "Terms & Conditions",
    "form.and": "and",
    "form.submit": "Send Booking Request",
    "form.success": "Thank you! We'll contact you shortly to confirm your booking.",
    "form.namePlaceholder": "Your full name",
    "form.emailPlaceholder": "your@email.com",
    "form.phonePlaceholder": "+1 (809) 000-0000",
    "form.messagePlaceholder": "Any special requests or questions...",

    // Footer
    "footer.desc":
      "Curated adventure experiences in Puerto Plata, Dominican Republic. Discover the real Caribbean with local guides.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",

    // Privacy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated",

    // Terms
    "terms.title": "Terms & Conditions",
    "terms.lastUpdated": "Last Updated",
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.adventures": "Aventuras",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.bookNow": "Reservar",

    // Hero
    "hero.location": "Puerto Plata, República Dominicana",
    "hero.title1": "Descubre el Verdadero",
    "hero.title2": "Caribe",
    "hero.subtitle":
      "Experiencias de aventura seleccionadas con guías locales. Snorkel, cascadas, tours culturales y más — el auténtico República Dominicana te espera.",
    "hero.cta1": "Explorar Aventuras",
    "hero.cta2": "Conocer Más",

    // Categories
    "categories.title": "Elige Tu Aventura",
    "categories.subtitle":
      "Desde aguas cristalinas hasta selvas montañosas, Puerto Plata tiene algo para cada tipo de aventurero.",
    "cat.water-sports": "Deportes Acuáticos",
    "cat.nature": "Naturaleza y Eco",
    "cat.cultural": "Tours Culturales",
    "cat.food": "Comida y Bebida",
    "cat.nightlife": "Vida Nocturna",
    "cat.extreme": "Deportes Extremos",

    // Featured
    "featured.title": "Aventuras Populares",
    "featured.subtitle":
      "Nuestras experiencias más queridas en Puerto Plata",
    "featured.viewAll": "Ver todas",

    // Why Us
    "why.title": "¿Por Qué Caribbean Adventure RD?",
    "why.subtitle":
      "Te conectamos con los mejores operadores locales para experiencias dominicanas auténticas.",
    "why.local.title": "Guías 100% Locales",
    "why.local.desc":
      "Cada experiencia es dirigida por guías dominicanos que conocen su tierra de principio a fin. Sin tours genéricos — solo aventuras auténticas.",
    "why.quality.title": "Calidad Curada",
    "why.quality.desc":
      "Verificamos personalmente cada operador y experiencia. Si está en nuestra plataforma, vale tu tiempo y dinero.",
    "why.price.title": "Precios Justos",
    "why.price.desc":
      "Reserva directamente con operadores locales. Sin sobreprecios — más dinero va a las personas que crean tu experiencia.",

    // CTA
    "cta.title": "¿Listo Para Tu Aventura Caribeña?",
    "cta.subtitle":
      "Explora nuestras experiencias seleccionadas y reserva tu próxima aventura inolvidable en Puerto Plata.",
    "cta.button": "Ver Todas las Aventuras",

    // Adventures page
    "adventures.title": "Aventuras en Puerto Plata",
    "adventures.subtitle":
      "Explora nuestra colección curada de aventuras y tours. Cada experiencia es dirigida por guías locales que conocen la República Dominicana como nadie.",
    "adventures.all": "Todas las Aventuras",
    "adventures.showing": "Mostrando",
    "adventures.adventure": "aventura",
    "adventures.adventures": "aventuras",
    "adventures.noResults": "No hay aventuras en esta categoría aún",
    "adventures.noResultsDesc":
      "¡Vuelve pronto — estamos agregando nuevas experiencias todo el tiempo!",

    // Activity card
    "card.perPerson": "/ persona",
    "card.viewDetails": "Ver Detalles",
    "card.reviews": "reseñas",
    "card.inquire": "Consultar",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle":
      "¿Tienes preguntas? Nos encantaría saber de ti. Escríbenos y te responderemos pronto.",
    "contact.phone": "Teléfono / WhatsApp",
    "contact.email": "Correo Electrónico",
    "contact.address": "Dirección",
    "contact.findUs": "Encuéntranos",

    // Booking Form
    "form.title": "Reserva Tu Aventura",
    "form.subtitle":
      "Completa el formulario y te contactaremos para confirmar tu reservación.",
    "form.name": "Nombre Completo",
    "form.email": "Correo Electrónico",
    "form.phone": "Número de Teléfono",
    "form.date": "Fecha Preferida",
    "form.guests": "Número de Personas",
    "form.activity": "Seleccionar Actividad",
    "form.selectOne": "-- Selecciona una actividad --",
    "form.message": "Mensaje Adicional (opcional)",
    "form.privacy": "Acepto la",
    "form.privacyLink": "Política de Privacidad",
    "form.termsLink": "Términos y Condiciones",
    "form.and": "y los",
    "form.submit": "Enviar Solicitud de Reserva",
    "form.success": "¡Gracias! Te contactaremos pronto para confirmar tu reservación.",
    "form.namePlaceholder": "Tu nombre completo",
    "form.emailPlaceholder": "tu@correo.com",
    "form.phonePlaceholder": "+1 (809) 000-0000",
    "form.messagePlaceholder": "Alguna solicitud especial o pregunta...",

    // Footer
    "footer.desc":
      "Experiencias de aventura curadas en Puerto Plata, República Dominicana. Descubre el verdadero Caribe con guías locales.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contáctanos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos y Condiciones",

    // Privacy
    "privacy.title": "Política de Privacidad",
    "privacy.lastUpdated": "Última Actualización",

    // Terms
    "terms.title": "Términos y Condiciones",
    "terms.lastUpdated": "Última Actualización",
  },
};

// Activity translations
export const activityTranslations: Record<
  Locale,
  Record<string, { title: string; description: string }>
> = {
  en: {
    "snorkeling-sosua": {
      title: "Snorkeling in Sosua Bay",
      description:
        "Explore the crystal-clear waters of Sosua Bay with vibrant coral reefs and tropical fish. Perfect for beginners and experienced snorkelers alike.",
    },
    "waterfall-damajagua": {
      title: "27 Waterfalls of Damajagua",
      description:
        "Hike through lush tropical jungle and slide down natural waterfall slides at the famous 27 Charcos de Damajagua.",
    },
    "cable-car-isabel": {
      title: "Puerto Plata Cable Car & Fort San Felipe",
      description:
        "Ride the only cable car in the Caribbean to the top of Mount Isabel de Torres, then explore the historic Fort San Felipe.",
    },
    "catamaran-sunset": {
      title: "Sunset Catamaran Cruise",
      description:
        "Sail along the Puerto Plata coastline on a luxury catamaran with rum cocktails, music, and a spectacular Caribbean sunset.",
    },
    "dominican-cooking": {
      title: "Dominican Cooking Class",
      description:
        "Learn to cook authentic Dominican dishes — mangu, sancocho, and tostones — with a local family in their home kitchen.",
    },
    "zip-line-canopy": {
      title: "Jungle Zip Line Canopy Tour",
      description:
        "Soar through the treetops on 12 zip lines over the lush Dominican jungle with ocean views in the distance.",
    },
  },
  es: {
    "snorkeling-sosua": {
      title: "Snorkel en Bahía de Sosúa",
      description:
        "Explora las aguas cristalinas de la Bahía de Sosúa con vibrantes arrecifes de coral y peces tropicales. Perfecto para principiantes y experimentados.",
    },
    "waterfall-damajagua": {
      title: "27 Charcos de Damajagua",
      description:
        "Camina por la selva tropical y deslízate por toboganes naturales de cascadas en los famosos 27 Charcos de Damajagua.",
    },
    "cable-car-isabel": {
      title: "Teleférico y Fortaleza San Felipe",
      description:
        "Sube en el único teleférico del Caribe hasta la cima del Monte Isabel de Torres y explora la histórica Fortaleza San Felipe.",
    },
    "catamaran-sunset": {
      title: "Crucero en Catamarán al Atardecer",
      description:
        "Navega por la costa de Puerto Plata en un lujoso catamarán con cócteles de ron, música y un espectacular atardecer caribeño.",
    },
    "dominican-cooking": {
      title: "Clase de Cocina Dominicana",
      description:
        "Aprende a cocinar platos auténticos dominicanos — mangú, sancocho y tostones — con una familia local en su cocina.",
    },
    "zip-line-canopy": {
      title: "Tour de Tirolesa en la Selva",
      description:
        "Vuela entre las copas de los árboles en 12 tirolesas sobre la selva dominicana con vistas al océano.",
    },
  },
};

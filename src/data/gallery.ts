import type { Locale } from "./translations";

export type GalleryCategory = "city" | "nature" | "beach" | "groups";

export interface GalleryPhoto {
  /** File in /public/images */
  src: string;
  /** Caption, doubles as the alt text. Keep it descriptive — it is what screen readers announce. */
  caption: Record<Locale, string>;
  category: GalleryCategory;
  /** Portrait shots are given a taller cell so they are not cropped to a letterbox. */
  portrait?: boolean;
}

export interface GalleryVideo {
  /** File in /public/videos, e.g. "catamaran.mp4" */
  src: string;
  /** Still frame in /public/images shown before playback. */
  poster: string;
  title: Record<Locale, string>;
}

export const galleryCategories: {
  id: "all" | GalleryCategory;
  label: Record<Locale, string>;
}[] = [
  { id: "all", label: { en: "All photos", es: "Todas las fotos" } },
  { id: "city", label: { en: "City & Culture", es: "Ciudad y cultura" } },
  { id: "nature", label: { en: "Nature", es: "Naturaleza" } },
  { id: "beach", label: { en: "Beach & Coast", es: "Playa y costa" } },
  { id: "groups", label: { en: "Our Guests", es: "Nuestros huéspedes" } },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "tour-13.jpg",
    caption: {
      en: "Fort San Felipe and the Dominican flag",
      es: "Fortaleza San Felipe y la bandera dominicana",
    },
    category: "city",
  },
  {
    src: "tour-16.jpg",
    caption: {
      en: "The umbrella street on Calle del Sol",
      es: "La calle de las sombrillas en la Calle del Sol",
    },
    category: "city",
  },
  {
    src: "tour-25.jpg",
    caption: {
      en: "Caribbean coastline north of Puerto Plata",
      es: "Costa caribeña al norte de Puerto Plata",
    },
    category: "beach",
  },
  {
    src: "tour-03.jpg",
    caption: {
      en: "A casita típica — a traditional Dominican country home",
      es: "Una casita típica — hogar tradicional del campo dominicano",
    },
    category: "city",
  },
  {
    src: "tour-01.jpg",
    caption: {
      en: "The heart sculpture in the botanical garden",
      es: "La escultura del corazón en el jardín botánico",
    },
    category: "nature",
    portrait: true,
  },
  {
    src: "tour-14.jpg",
    caption: {
      en: "Vintage car tour through the old town",
      es: "Recorrido en autos clásicos por la ciudad colonial",
    },
    category: "city",
  },
  {
    src: "tour-23.jpg",
    caption: {
      en: "Jungle paths through the botanical garden",
      es: "Senderos de selva en el jardín botánico",
    },
    category: "nature",
  },
  {
    src: "tour-19.jpg",
    caption: {
      en: "Ocean views from the Malecón",
      es: "Vistas al mar desde el Malecón",
    },
    category: "beach",
  },
  {
    src: "tour-10.jpg",
    caption: {
      en: "Puerto Plata's painted colonial houses",
      es: "Las casas coloniales pintadas de Puerto Plata",
    },
    category: "city",
  },
  {
    src: "tour-02.jpg",
    caption: {
      en: "A waterfall stop with your guide",
      es: "Una parada en la cascada con tu guía",
    },
    category: "nature",
  },
  {
    src: "tour-21.jpg",
    caption: {
      en: "Walking the Malecón promenade",
      es: "Caminando por el paseo del Malecón",
    },
    category: "beach",
  },
  {
    src: "tour-07.jpg",
    caption: {
      en: "At the independence monument",
      es: "En el monumento a la independencia",
    },
    category: "city",
  },
  {
    src: "tour-17.jpg",
    caption: {
      en: "Meeting local growers at the farm",
      es: "Conociendo a los productores locales en la finca",
    },
    category: "nature",
  },
  {
    src: "tour-11.jpg",
    caption: {
      en: "A classic Dominican pickup truck",
      es: "Una camioneta dominicana clásica",
    },
    category: "city",
    portrait: true,
  },
  {
    src: "tour-24.jpg",
    caption: {
      en: "Beach club shade and blue skies",
      es: "Sombra del club de playa y cielos azules",
    },
    category: "beach",
  },
  {
    src: "tour-12.jpg",
    caption: {
      en: "Victorian architecture in the historic centre",
      es: "Arquitectura victoriana en el centro histórico",
    },
    category: "city",
  },
  {
    src: "tour-18.jpg",
    caption: {
      en: "Strolling beneath the umbrellas",
      es: "Paseando bajo las sombrillas",
    },
    category: "city",
  },
  {
    src: "tour-05.jpg",
    caption: {
      en: "A tour group ready to explore",
      es: "Un grupo listo para explorar",
    },
    category: "groups",
  },
  {
    src: "tour-22.jpg",
    caption: {
      en: "Open-air trolley through Puerto Plata",
      es: "Tranvía al aire libre por Puerto Plata",
    },
    category: "city",
  },
  {
    src: "tour-04.jpg",
    caption: {
      en: "Walking the streets of Puerto Plata",
      es: "Recorriendo las calles de Puerto Plata",
    },
    category: "city",
  },
  {
    src: "tour-15.jpg",
    caption: {
      en: "Classic cars lined up for the tour",
      es: "Autos clásicos listos para el recorrido",
    },
    category: "groups",
  },
  {
    src: "tour-06.jpg",
    caption: {
      en: "Gathered along the Malecón seafront",
      es: "Reunidos en el Malecón frente al mar",
    },
    category: "beach",
  },
  {
    src: "tour-20.jpg",
    caption: {
      en: "Colourful colonial corners",
      es: "Rincones coloniales llenos de color",
    },
    category: "city",
  },
  {
    src: "tour-08.jpg",
    caption: {
      en: "Group photo at the monument",
      es: "Foto de grupo en el monumento",
    },
    category: "groups",
  },
  {
    src: "tour-09.jpg",
    caption: {
      en: "Capturing the monument",
      es: "Capturando el monumento",
    },
    category: "city",
  },
  {
    src: "tour-26.jpg",
    caption: {
      en: "Our guests in the old town",
      es: "Nuestros huéspedes en la ciudad colonial",
    },
    category: "groups",
  },
];

/**
 * Tour videos.
 *
 * To add one: drop the .mp4 into /public/videos, pick a poster frame from
 * /public/images, and add an entry here. The video section appears on the
 * gallery page automatically once this array is non-empty.
 *
 * Keep files under ~10MB each — they are served straight from /public with no
 * transcoding, so a large file is a slow page for everyone on mobile data.
 * See public/videos/README.md.
 */
export const galleryVideos: GalleryVideo[] = [];

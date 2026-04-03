export type ActivityCategory =
  | "water-sports"
  | "nature"
  | "cultural"
  | "food"
  | "nightlife"
  | "extreme";

export interface Activity {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ActivityCategory;
  price: number;
  currency: string;
  duration: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  included: string[];
  meetingPoint: string;
  maxGroupSize: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  available: boolean;
}

export const categoryLabels: Record<ActivityCategory, string> = {
  "water-sports": "Water Sports",
  nature: "Nature & Eco",
  cultural: "Cultural Tours",
  food: "Food & Drink",
  nightlife: "Nightlife",
  extreme: "Extreme Sports",
};

export const activities: Activity[] = [
  {
    id: "snorkeling-sosua",
    title: "Snorkeling in Sosua Bay",
    description:
      "Explore the crystal-clear waters of Sosua Bay with vibrant coral reefs and tropical fish. Perfect for beginners and experienced snorkelers alike.",
    longDescription:
      "Dive into the warm turquoise waters of Sosua Bay, one of the most beautiful snorkeling spots in the Dominican Republic. Our experienced local guides will take you to the best reef locations where you'll swim among colorful parrotfish, angelfish, and sea turtles. Equipment provided.",
    category: "water-sports",
    price: 45,
    currency: "USD",
    duration: "3 hours",
    location: "Sosua Bay, Puerto Plata",
    image: "/images/snorkeling-sosua.jpg",
    rating: 4.8,
    reviewCount: 124,
    highlights: [
      "Crystal-clear waters with 30ft visibility",
      "Colorful coral reef ecosystem",
      "Sea turtle sightings common",
      "Professional bilingual guide",
    ],
    included: [
      "Snorkeling equipment",
      "Life jacket",
      "Boat transport",
      "Fresh fruit & water",
    ],
    meetingPoint: "Sosua Beach entrance",
    maxGroupSize: 12,
    difficulty: "Easy",
    available: true,
  },
  {
    id: "waterfall-damajagua",
    title: "27 Waterfalls of Damajagua",
    description:
      "Hike through lush tropical jungle and slide down natural waterfall slides at the famous 27 Charcos de Damajagua.",
    longDescription:
      "Experience the thrill of the 27 Waterfalls of Damajagua, a series of cascading waterfalls hidden in the lush mountain jungle of Puerto Plata. Jump, slide, and swim through natural rock formations carved over thousands of years. An unforgettable adventure in the heart of the Dominican countryside.",
    category: "nature",
    price: 65,
    currency: "USD",
    duration: "5 hours",
    location: "Damajagua, Puerto Plata",
    image: "/images/damajagua.jpg",
    rating: 4.9,
    reviewCount: 312,
    highlights: [
      "Natural waterfall slides",
      "Jungle hiking trail",
      "Jump into crystal pools",
      "Guided by certified local guides",
    ],
    included: [
      "Helmet & life jacket",
      "Professional guide",
      "Entrance fee",
      "Lunch with local food",
    ],
    meetingPoint: "Damajagua Visitor Center",
    maxGroupSize: 15,
    difficulty: "Moderate",
    available: true,
  },
  {
    id: "cable-car-isabel",
    title: "Puerto Plata Cable Car & Fort San Felipe",
    description:
      "Ride the only cable car in the Caribbean to the top of Mount Isabel de Torres, then explore the historic Fort San Felipe.",
    longDescription:
      "Take the iconic Teleferico (cable car) to the summit of Mount Isabel de Torres at 2,565 feet, where you'll enjoy panoramic views of Puerto Plata and the Atlantic coast. Visit the botanical gardens and Christ the Redeemer statue at the top. Then descend to explore the 16th-century Fort San Felipe, the oldest colonial fort in the Americas.",
    category: "cultural",
    price: 55,
    currency: "USD",
    duration: "4 hours",
    location: "Puerto Plata City",
    image: "/images/cable-car.jpg",
    rating: 4.7,
    reviewCount: 198,
    highlights: [
      "Only cable car in the Caribbean",
      "Panoramic ocean views",
      "Botanical gardens at summit",
      "Historic 16th-century fort",
    ],
    included: [
      "Cable car ticket",
      "Fort entrance fee",
      "Bilingual guide",
      "Bottled water",
    ],
    meetingPoint: "Teleferico base station",
    maxGroupSize: 20,
    difficulty: "Easy",
    available: true,
  },
  {
    id: "catamaran-sunset",
    title: "Sunset Catamaran Cruise",
    description:
      "Sail along the Puerto Plata coastline on a luxury catamaran with rum cocktails, music, and a spectacular Caribbean sunset.",
    longDescription:
      "Set sail on a stunning sunset cruise along the north coast of the Dominican Republic. Sip Dominican rum cocktails, enjoy merengue and bachata music, and watch the sun dip below the horizon in a blaze of tropical colors. Includes snorkeling stop and open bar.",
    category: "water-sports",
    price: 85,
    currency: "USD",
    duration: "3.5 hours",
    location: "Puerto Plata Marina",
    image: "/images/catamaran.jpg",
    rating: 4.9,
    reviewCount: 267,
    highlights: [
      "Luxury catamaran experience",
      "Open bar with Dominican rum",
      "Snorkeling stop included",
      "Live music on board",
    ],
    included: [
      "Open bar",
      "Snorkeling equipment",
      "Light snacks",
      "DJ / live music",
    ],
    meetingPoint: "Ocean World Marina",
    maxGroupSize: 30,
    difficulty: "Easy",
    available: true,
  },
  {
    id: "dominican-cooking",
    title: "Dominican Cooking Class",
    description:
      "Learn to cook authentic Dominican dishes — mangu, sancocho, and tostones — with a local family in their home kitchen.",
    longDescription:
      "Step into the home of a Dominican family and learn the secrets of traditional Dominican cuisine. You'll visit the local market to pick fresh ingredients, then cook classic dishes like mangu (mashed plantains), sancocho (hearty stew), and crispy tostones. End with a feast of everything you've prepared, paired with fresh juices.",
    category: "food",
    price: 55,
    currency: "USD",
    duration: "4 hours",
    location: "Puerto Plata neighborhood",
    image: "/images/cooking.jpg",
    rating: 5.0,
    reviewCount: 89,
    highlights: [
      "Local market visit",
      "Hands-on cooking experience",
      "Traditional family recipes",
      "Eat what you cook",
    ],
    included: [
      "All ingredients",
      "Market visit",
      "Recipe booklet to take home",
      "Full meal & drinks",
    ],
    meetingPoint: "Central Park, Puerto Plata",
    maxGroupSize: 8,
    difficulty: "Easy",
    available: true,
  },
  {
    id: "zip-line-canopy",
    title: "Jungle Zip Line Canopy Tour",
    description:
      "Soar through the treetops on 12 zip lines over the lush Dominican jungle with ocean views in the distance.",
    longDescription:
      "Get your adrenaline pumping on this thrilling zip line canopy tour through the tropical jungle near Puerto Plata. Fly across 12 zip lines, some over 500 feet long, soaring above the forest canopy with views of mountains and the Caribbean Sea. Professional harness equipment and safety briefing included.",
    category: "extreme",
    price: 75,
    currency: "USD",
    duration: "3 hours",
    location: "Yasica Adventures, Puerto Plata",
    image: "/images/zipline.jpg",
    rating: 4.8,
    reviewCount: 156,
    highlights: [
      "12 zip lines through the jungle",
      "Ocean views from the canopy",
      "Professional safety equipment",
      "Adrenaline-pumping adventure",
    ],
    included: [
      "All safety equipment",
      "Professional guide",
      "Water & snacks",
      "Photos of your adventure",
    ],
    meetingPoint: "Yasica Adventures entrance",
    maxGroupSize: 10,
    difficulty: "Moderate",
    available: true,
  },
];

import Link from "next/link";
import ActivityCard from "@/components/ActivityCard";
import { activities, categoryLabels, type ActivityCategory } from "@/data/activities";

const categoryIcons: Record<ActivityCategory, string> = {
  "water-sports": "🤿",
  nature: "🌿",
  cultural: "🏛️",
  food: "🍽️",
  nightlife: "🌙",
  extreme: "⚡",
};

export default function Home() {
  const featured = activities.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ocean-dark via-ocean to-palm text-white overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-[200px] leading-none">
            🌴
          </div>
          <div className="absolute bottom-10 right-10 text-[150px] leading-none">
            🌊
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-ocean-light font-semibold text-sm uppercase tracking-widest mb-4">
              Puerto Plata, Dominican Republic
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover the Real{" "}
              <span className="text-sunset">Caribbean</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Hand-picked adventure experiences with local guides. Snorkeling,
              waterfalls, cultural tours, and more — the authentic Dominican
              Republic awaits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/adventures"
                className="bg-sunset hover:bg-sunset-dark text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                Explore Adventures
              </Link>
              <Link
                href="#about"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">
              Choose Your Adventure
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From crystal-clear waters to lush mountain jungles, Puerto Plata
              has something for every type of adventurer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(Object.keys(categoryLabels) as ActivityCategory[]).map(
              (cat) => (
                <Link
                  key={cat}
                  href={`/adventures?category=${cat}`}
                  className="bg-sky hover:bg-ocean-light/30 rounded-xl p-6 text-center transition-colors group"
                >
                  <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform inline-block">
                    {categoryIcons[cat]}
                  </span>
                  <span className="text-sm font-semibold text-ocean-dark">
                    {categoryLabels[cat]}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Adventures */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">
                Popular Adventures
              </h2>
              <p className="text-gray-600">
                Our most-loved experiences in Puerto Plata
              </p>
            </div>
            <Link
              href="/adventures"
              className="hidden md:inline-flex text-ocean font-semibold hover:text-ocean-dark transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/adventures"
              className="text-ocean font-semibold hover:text-ocean-dark transition-colors"
            >
              View all adventures &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-3">
              Why Caribbean Adventure RD?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We connect you with the best local operators for authentic
              Dominican experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ocean-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇩🇴</span>
              </div>
              <h3 className="font-bold text-lg mb-2">100% Local Guides</h3>
              <p className="text-gray-600 text-sm">
                Every experience is led by Dominican guides who know their home
                inside and out. No generic tours — only authentic adventures.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sunset/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Curated Quality</h3>
              <p className="text-gray-600 text-sm">
                We personally vet every operator and experience. If it&apos;s on our
                platform, it&apos;s worth your time and money.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-palm-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Fair Prices</h3>
              <p className="text-gray-600 text-sm">
                Book directly with local operators. No middleman markups — more
                money goes to the people who create your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-ocean-dark to-palm text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Caribbean Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Browse our hand-picked experiences and book your next unforgettable
            adventure in Puerto Plata.
          </p>
          <Link
            href="/adventures"
            className="bg-sunset hover:bg-sunset-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Browse All Adventures
          </Link>
        </div>
      </section>
    </>
  );
}

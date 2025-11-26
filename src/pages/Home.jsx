import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";
import { menuItems } from "../data/menu";

export default function Home() {
  // Ambil 3 best seller teratas
  const best = menuItems.filter((item) => item.is_best_seller).slice(0, 3);

  const categories = [
    { name: "Cake", icon: "🎂", description: "Layered creations" },
    { name: "Pastry", icon: "🥐", description: "Flaky delights" },
    { name: "Cupcakes", icon: "🧁", description: "Mini treats" },
    { name: "Tiramisu", icon: "☕", description: "Italian classic" },
  ];

  return (
    <div className="bg-white">
      {/* ====================== */}
      {/*        HERO SECTION     */}
      {/* ====================== */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 text-center bg-gradient-to-br from-white to-primary_light/10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary_dark bg-clip-text text-transparent">
              Tiny Crumbs
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-8 rounded-full"></div>

          {/* Subheading */}
          <p className="font-poppins text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Artisanal desserts crafted in small batches — cakes, pastries,
            cupcakes, and tiramisu made fresh every day with love and warmth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary_dark text-white font-poppins font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Menu
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-poppins font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              Our Story
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary_light/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      </section>

      {/* ====================== */}
      {/*  CATEGORY PREVIEW      */}
      {/* ====================== */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-6">
              Our Categories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-6 rounded-full"></div>
            <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our four warm and comforting dessert collections, each
              crafted with care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to="/menu"
                className="group bg-white border border-primary_light/30 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-playfair text-xl text-gray-800 font-semibold mb-2">
                  {category.name}
                </h3>
                <p className="font-poppins text-gray-500 text-sm">
                  {category.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary_light mx-auto rounded-full"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/*   BEST SELLER PREVIEW  */}
      {/* ====================== */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-primary_light/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary_dark rounded-2xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold">
                Best Sellers
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-6 rounded-full"></div>
            <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
              Our most-loved desserts, freshly made every day and adored by our
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {best.map((item, index) => (
              <div
                key={item.id}
                className="transform transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <MenuCard item={item} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/best-seller"
              className="group inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-poppins font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              View All Best Sellers
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/*   STORY / ABOUT PREVIEW */}
      {/* ====================== */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary_light/5 to-primary_light/10 rounded-3xl p-12 border border-primary_light/20">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-6">
              Made in Small Batches
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-8 rounded-full"></div>

            <p className="font-poppins text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Every dessert is crafted slowly and sincerely — no mass
              production, no shortcuts. Just warmth, honesty, and thoughtful
              flavors in every bite. We believe in quality over quantity, and
              love over haste.
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center text-primary_dark font-poppins font-semibold hover:text-primary transition-all duration-300 text-lg"
            >
              Learn More About Our Story
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

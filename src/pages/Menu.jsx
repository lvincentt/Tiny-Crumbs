import MenuCard from "../components/MenuCard";
import CategoryTabs from "../components/CategoryTabs";
import { menuItems } from "../data/menu";
import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState("Cake");
  const filteredItems = menuItems.filter((item) => item.category === category);

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gray-800 font-bold mb-6">
            Our Menu
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-6 rounded-full"></div>

          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our handcrafted desserts, made fresh daily with the finest
            ingredients and a whole lot of love.
          </p>
        </div>

        {/* Category Tabs */}
        <CategoryTabs selected={category} onChange={setCategory} />

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="font-poppins text-gray-500 text-sm">
            Showing{" "}
            <span className="font-semibold text-primary_dark">
              {filteredItems.length}
            </span>{" "}
            {category.toLowerCase()}
            {filteredItems.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Menu Grid */}
        <div
          className={`
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
          transition-all duration-500
          ${filteredItems.length === 0 ? "opacity-50" : "opacity-100"}
        `}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            // Empty State
            <div className="col-span-full text-center py-16">
              <div className="w-24 h-24 bg-primary_light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl text-gray-700 mb-2">
                Coming Soon
              </h3>
              <p className="font-poppins text-gray-500 max-w-md mx-auto">
                We're busy baking new {category.toLowerCase()} creations! Check
                back soon or try another category.
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-primary_light/20">
          <div className="bg-gradient-to-br from-primary_light/5 to-primary_light/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl text-gray-800 mb-3">
              Can't find what you're looking for?
            </h3>
            <p className="font-poppins text-gray-600 mb-6">
              We love creating custom orders! Contact us for special requests,
              custom cakes, or bulk orders.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary_dark transition-all duration-300 font-poppins font-semibold hover:shadow-lg hover:scale-105"
            >
              Contact Us for Custom Orders
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

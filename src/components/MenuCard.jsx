export default function MenuCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl border border-primary_light/30 p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl mb-5">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Best Seller Badge */}
        {item.is_best_seller && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-primary_dark text-white shadow-lg">
              Best Seller
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="font-playfair text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {item.name}
        </h3>

        {/* Description */}
        <p className="font-poppins text-sm text-gray-600 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="font-poppins text-lg font-semibold text-primary_dark">
            Rp {item.price.toLocaleString()}
          </span>

          {/* Order Button */}
          <button className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex items-center text-primary font-semibold text-sm hover:text-primary_dark">
            Order Now
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

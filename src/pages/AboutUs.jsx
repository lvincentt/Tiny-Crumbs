export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gray-800 font-bold mb-6">
          About Us
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-8 rounded-full"></div>

        {/* Tagline */}
        <p className="font-poppins text-gray-600 max-w-lg mx-auto text-base sm:text-lg leading-relaxed mb-12">
          A small-batch dessert studio inspired by warmth, simplicity, and
          thoughtful flavors — crafted slowly and sincerely.
        </p>

        {/* Content */}
        <div className="text-left font-poppins text-gray-600 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            <span className="font-semibold text-gray-800">Tiny Crumbs</span> is
            a small-batch dessert studio built on the belief that meaningful
            sweetness comes from care, patience, and honest ingredients. We
            craft each dessert in limited quantities to maintain quality,
            character, and warmth in every bite.
          </p>

          <p>
            Our cakes, pastries, tiramisu, and cupcakes are made fresh daily —
            never rushed, never mass-produced. Each creation is shaped by gentle
            flavors, soft textures, and a dedication to the little details that
            make dessert feel personal.
          </p>

          <p>
            Whether it's for a celebration, a gift, or a quiet moment at home,
            we hope our desserts bring a sense of comfort and sincerity. Every
            batch is handcrafted with the intention to make your day a little
            warmer and a little sweeter.
          </p>

          <p className="text-gray-700 font-medium">
            Thank you for letting us be a part of your sweetest moments.
          </p>
        </div>

        {/* Signature/Quote */}
        <div className="mt-12 pt-8 border-t border-primary_light/20">
          <p className="font-playfair text-gray-700 text-lg italic">
            "Baked with love, served with warmth"
          </p>
        </div>
      </div>
    </section>
  );
}

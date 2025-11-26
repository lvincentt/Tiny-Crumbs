export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gray-800 font-bold mb-6">
            Contact Us
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-6 rounded-full"></div>

          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We're here to help with orders, questions, and special requests.
            Let's create something sweet together.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp Card */}
          <div className="group bg-gradient-to-br from-white to-primary_light/5 border border-primary_light/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452" />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl text-gray-800">WhatsApp</h2>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Place orders or chat directly with our team for quick responses
              and personalized service.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl 
                         hover:bg-green-700 transition-all duration-300 font-poppins font-medium
                         hover:shadow-lg hover:scale-105 group/btn"
            >
              <span>Chat on WhatsApp</span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Instagram Card */}
          <div className="group bg-gradient-to-br from-white to-pink-50 border border-primary_light/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl text-gray-800">
                Instagram
              </h2>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              See menu updates, new releases, and behind-the-scenes moments from
              our kitchen.
            </p>

            <a
              href="https://instagram.com/tinycrumbs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary_dark font-semibold hover:text-primary transition-all duration-300 group/ig"
            >
              <span>@tinycrumbs</span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover/ig:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Card */}
          <div className="bg-white border border-primary_light/30 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary_light/20 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary_dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl text-gray-800">Email</h2>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              For business inquiries, collaborations, and special requests.
            </p>

            <a
              href="mailto:hello@tinycrumbs.com"
              className="inline-flex items-center text-primary_dark font-semibold hover:text-primary transition-all duration-300 group/email"
            >
              <span>hello@tinycrumbs.com</span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover/email:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Kitchen Notes */}
          <div className="bg-gradient-to-br from-primary_light/10 to-primary_light/5 border border-primary_light/30 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary_light/30 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary_dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl text-gray-800">
                Kitchen Notes
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Tiny Crumbs operates as a small-batch kitchen — no physical
              storefront. All items are made fresh by pre-order with love and
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

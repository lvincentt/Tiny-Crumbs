export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Browse Our Menu",
      description:
        "Explore our selection of cakes, pastries, cupcakes, and tiramisu through the Menu page. Each item includes details and pricing so you can choose what suits your occasion best.",
      highlight: "Menu",
    },
    {
      number: "02",
      title: "Place Your Order",
      description:
        "Orders are placed through WhatsApp. Please send us the following details:",
      list: [
        "Item name and quantity",
        "Delivery date",
        "Preferred delivery time slot",
        "Receiver's name and full address",
        "Special notes (if any)",
      ],
      note: "Our team will confirm availability and send you the total amount.",
      highlight: "WhatsApp",
    },
    {
      number: "03",
      title: "Make the Payment",
      description:
        "Your order is secured once payment is completed. Tiny Crumbs accepts bank transfer and selected e-wallets (if available). Please send us the payment confirmation so we can schedule your order.",
    },
    {
      number: "04",
      title: "Choose a Delivery Time Slot",
      description: "We deliver within the following time windows:",
      list: [
        { time: "Morning: 10:00 – 13:00", highlight: "Morning" },
        { time: "Midday: 13:00 – 16:00", highlight: "Midday" },
        { time: "Afternoon: 16:00 – 19:00", highlight: "Afternoon" },
      ],
      note: "Orders will arrive within the selected window. We are unable to guarantee an exact arrival time.",
    },
    {
      number: "05",
      title: "Delivery Process",
      description:
        "Your desserts are handled by our dedicated dessert courier to keep them safe and stable during the ride. Once delivered, we will send a photo confirmation via WhatsApp.",
      note: "For rush or instant orders, third-party couriers may be used and may not be covered by our internal delivery guarantee.",
      highlight: "photo confirmation",
    },
    {
      number: "06",
      title: "Receiving Your Order",
      description:
        "Please ensure someone is available at the delivery location. Orders handed to security, receptionist, or helpers with the recipient's approval are considered completed.",
    },
  ];

  const additionalNotes = [
    "Delivery fees depend on distance and service type.",
    "Weather and road conditions may cause delays beyond our control.",
    "Selected nearby areas may qualify for free delivery.",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gray-800 font-bold mb-6">
            How to Order
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary_light mx-auto mb-6 rounded-full"></div>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A simple guide to ordering your favorite desserts from Tiny Crumbs.
            We make the process sweet and straightforward.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="group">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary_light to-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="font-playfair text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-playfair text-2xl sm:text-3xl text-gray-800 mb-4">
                    {step.title}
                  </h2>

                  <p className="font-poppins text-gray-600 leading-relaxed mb-4">
                    {step.description
                      .split(step.highlight)
                      .map((part, i, arr) =>
                        i === arr.length - 1 ? (
                          part
                        ) : (
                          <span key={i}>
                            {part}
                            <span className="font-semibold text-primary_dark">
                              {step.highlight}
                            </span>
                          </span>
                        )
                      )}
                  </p>

                  {/* List Items */}
                  {step.list && (
                    <ul className="space-y-2 mb-4">
                      {step.list.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start font-poppins text-gray-600"
                        >
                          <div className="w-2 h-2 bg-primary_light rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            {typeof item === "object" ? (
                              <>
                                <span className="font-semibold text-primary_dark">
                                  {item.highlight}:
                                </span>{" "}
                                {item.time.replace(`${item.highlight}:`, "")}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Additional Note */}
                  {step.note && (
                    <p className="font-poppins text-gray-700 bg-primary_light/10 rounded-lg p-4 border-l-4 border-primary">
                      {step.note}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block ml-10 pl-10 border-l-2 border-primary_light/30 border-dashed h-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="mt-16 pt-12 border-t border-primary_light/30">
          <div className="bg-gradient-to-br from-primary_light/5 to-primary_light/10 rounded-2xl p-8 border border-primary_light/20">
            <div className="flex items-center mb-6">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl text-gray-800">
                Additional Notes
              </h2>
            </div>

            <ul className="space-y-3">
              {additionalNotes.map((note, index) => (
                <li
                  key={index}
                  className="flex items-start font-poppins text-gray-600"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{note}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-primary_light/20">
              <p className="font-poppins text-gray-700 text-center">
                Ready to order?{" "}
                <a
                  href="#contact"
                  className="font-semibold text-primary_dark hover:text-primary transition-colors duration-200 underline"
                >
                  Get in touch with us today!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

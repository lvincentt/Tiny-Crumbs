import MenuCard from "../components/MenuCard";
import { menuItems } from "../data/menu";

export default function BestSeller() {
  // Filter semua produk best seller
  const bestItems = menuItems.filter((item) => item.is_best_seller);

  return (
    <section className="py-28 px-6 bg-white">
      {/* Title */}
      <h1 className="font-playfair text-5xl text-black text-center font-bold mb-4">
        Best Sellers
      </h1>

      <div className="w-20 h-[2px] bg-primary mx-auto mb-8 rounded-full"></div>

      <p className="font-poppins text-neutral-600 text-center max-w-xl mx-auto mb-14 leading-relaxed">
        Our most loved desserts — chosen by our customers. Freshly made, warm,
        and always delightful.
      </p>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {bestItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

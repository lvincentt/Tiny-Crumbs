export default function CategoryTabs({ selected, onChange }) {
  const tabs = ["Cake", "Pastry", "Cupcakes", "Tiramisu"];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12 font-poppins">
      {tabs.map((tab) => {
        const active = selected === tab;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              relative px-6 py-3 rounded-full border text-sm font-medium tracking-wide 
              transition-all duration-300 transform hover:scale-105 group
              ${
                active
                  ? "bg-gradient-to-r from-primary to-primary_dark text-white border-transparent shadow-lg shadow-primary/25"
                  : "bg-white text-gray-700 border-primary_light hover:border-primary hover:text-primary_dark hover:shadow-md"
              }
            `}
          >
            {tab}

            {/* Active indicator dot */}
            {active && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
            )}

            {/* Hover effect */}
            <div
              className={`
              absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${
                active
                  ? "bg-gradient-to-r from-primary_dark to-primary"
                  : "bg-primary_light/20"
              }
            `}
            ></div>
          </button>
        );
      })}
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/menu", label: "Menu" },
    { path: "/best-seller", label: "Best Seller" },
    { path: "/how-to-order", label: "How to Order" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-primary_light/30 py-3"
            : "bg-white/90 backdrop-blur-md border-b border-primary_light/20 py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group font-playfair text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide hover:scale-105 transition-all duration-300"
        >
          <span className="text-primary">Tiny Crumbs</span>
          <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-primary_dark transition-all duration-300 group-hover:w-full mt-1" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-poppins text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 transition-all duration-300 group ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary_dark"
                }`
              }
            >
              <span className="relative z-10">{item.label}</span>

              {/* Animated underline */}
              <div
                className={`
                  absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary_light 
                  transition-all duration-300 rounded-full
                  ${
                    location.pathname === item.path
                      ? "w-full"
                      : "group-hover:w-full"
                  }
                `}
              />
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary_light/20 active:scale-95 transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`
                absolute left-0 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300
                ${open ? "top-3 rotate-45" : "top-1"}
              `}
            />
            <span
              className={`
                absolute left-0 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300
                ${open ? "opacity-0" : "top-3 opacity-100"}
              `}
            />
            <span
              className={`
                absolute left-0 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300
                ${open ? "top-3 -rotate-45" : "top-5"}
              `}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg 
          border-b border-primary_light/20 shadow-lg transition-all duration-300 ease-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 py-4 space-y-1 font-poppins">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg text-base transition-all duration-300 group ${
                  isActive
                    ? "text-primary bg-primary_light/20 font-semibold"
                    : "text-gray-700 hover:text-primary_dark hover:bg-primary_light/10"
                }`
              }
            >
              <div className="flex items-center">
                <span className="flex-1">{item.label}</span>
                <div
                  className={`
                    w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300
                    ${
                      location.pathname === item.path
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100"
                    }
                  `}
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

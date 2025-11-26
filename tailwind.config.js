export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#C89471", // warm caramel
        primary_light: "#E4C3A7", // soft caramel
        primary_dark: "#8B6244", // deep caramel
      },
    },
  },
  plugins: [],
};

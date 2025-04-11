// tailwind.config.js
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Name your custom font family (e.g., "poppins")
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.green,
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "text-green-400",
    "text-red-400",
    "text-yellow-400",
    "text-blue-400",
    "text-amber-400",
    "text-lime-400",
    // Add more dynamically generated class names as needed
  ],
};

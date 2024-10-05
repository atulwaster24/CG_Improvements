/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "5/2": "5 / 2",
        "8/4": "8 / 4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        CG_Yellow: "#FFCC00",
        CG_Blue: "#0E2570",
        CG_Orange: "#F7800A",
        CG_White: "#FFFFFF",
        CG_Green: "#05A650",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};

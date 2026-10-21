import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rr: {
          navy: "#001e62",
          navyDeep: "#001438",
          navyDark: "#060c1c",
          hover: "#0a2f8c",
          accentBlue: "#0000b8",
          stockGreen: "#15803d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["Times New Roman", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

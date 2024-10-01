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
        lightPink: "#FCDBCC",
        cherryPink: "#FFB3BE",
        lightGreen: "#9CFF79",
        lightOrage: "#FFAF8C",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ['Island Moments', 'cursive'],
      },
    },

  },
  plugins: [],
};
export default config;

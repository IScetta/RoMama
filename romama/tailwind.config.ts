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
        lightPink: "#ffc6ab",
        cherryPink: "#FFB3BE",
        lightGreen: "#9CFF79",
        lightOrage: "#ff9d73",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ['Island Moments', 'cursive'],
      },
    },

  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;

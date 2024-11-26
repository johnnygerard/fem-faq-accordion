import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-purple": "#301534",
      "light-pink": "#F8EEFF",
      "pale-purple": "#8B6990",
      pink: "#AD28EB",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-work-sans)"],
      },
      fontSize: {
        body: [
          "0.875rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        title: [
          "1rem",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],
        display: [
          "2rem",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

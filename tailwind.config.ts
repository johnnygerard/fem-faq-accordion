import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
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

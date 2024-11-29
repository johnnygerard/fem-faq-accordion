import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      slideDown: {
        from: { height: "0px" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      slideUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0px" },
      },
    },
    animation: {
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    },
    backgroundImage: {
      "mobile-pattern": "url('/images/background-pattern-mobile.svg')",
      "desktop-pattern": "url('/images/background-pattern-desktop.svg')",
    },
    colors: {
      "dark-purple": "#301534",
      "light-pink": "#F8EEFF",
      "pale-purple": "#8B6990",
      pink: "#AD28EB",
      white: "#FFFFFF",
    },
    screens: {
      dt: "48em",
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
        "body-dt": [
          "1rem",
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
        "title-dt": [
          "1.125rem",
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
        "display-dt": [
          "3.5rem",
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

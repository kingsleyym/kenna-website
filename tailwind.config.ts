import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          "50": "rgb(var(--kenna-primary-50))",
          "100": "rgb(var(--kenna-primary-100))",
          "200": "rgb(var(--kenna-primary-200))",
          "300": "rgb(var(--kenna-primary-300))",
          "400": "rgb(var(--kenna-primary-400))",
          "500": "rgb(var(--kenna-primary-500))",
        },
        accent: {
          "50": "rgb(var(--kenna-accent-50))",
          "100": "rgb(var(--kenna-accent-100))",
          "200": "rgb(var(--kenna-accent-200))",
          "300": "rgb(var(--kenna-accent-300))",
          "400": "rgb(var(--kenna-accent-400))",
          "500": "rgb(var(--kenna-accent-500))",
          "600": "rgb(var(--kenna-accent-600))",
          "700": "rgb(var(--kenna-accent-700))",
        },
        dark: {
          "50": "rgb(var(--kenna-dark-50))",
          "100": "rgb(var(--kenna-dark-100))",
          "200": "rgb(var(--kenna-dark-200))",
          "300": "rgb(var(--kenna-dark-300))",
          "400": "rgb(var(--kenna-dark-400))",
          "500": "rgb(var(--kenna-dark-500))",
          "600": "rgb(var(--kenna-dark-600))",
          "700": "rgb(var(--kenna-dark-700))",
          "800": "rgb(var(--kenna-dark-800))",
          "900": "rgb(var(--kenna-dark-900))",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 1.5s infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(2deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

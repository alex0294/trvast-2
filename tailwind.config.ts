import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: "#020617",
          800: "#020617",
          700: "#0b1220"
        },
        primary: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0ea5e9"
        },
        accent: {
          300: "#c4b5fd",
          400: "#a855f7",
          500: "#8b5cf6",
          600: "#6366f1"
        }
      },
      boxShadow: {
        "neon": "0 0 20px rgba(56, 189, 248, 0.5)"
      }
    }
  },
  plugins: []
};

export default config;

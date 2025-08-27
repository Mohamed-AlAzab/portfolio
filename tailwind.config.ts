import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          bg: "#0f172a",          // replaces gray-900
          surface: "#1e293b",     // replaces gray-800
          border: "#374151",      // replaces gray-700
          text: "#f3f4f6",        // replaces gray-100/300
          subtext: "#9ca3af",     // replaces gray-400
          accent: "#14b8a6",      // teal
          accent2: "#6366f1",     // indigo
          highlight: "#f59e0b",   // yellow
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

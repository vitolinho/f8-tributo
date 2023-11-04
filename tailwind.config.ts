import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.875rem",
      "3xl": "2.5rem",
      "4xl": "3.75rem",
      "5xl": "5rem"
    },
    container: {
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        monument: ["var(--font-monument)"]
      },
      colors:{
        "neutral-0": "#ffffff",
        "neutral-1": "#f8f8f8",
        "neutral-2": "#343434",
        "neutral-3": "#161616",
        "primary": "#da192a"
      }
    }
  },
  plugins: []
}
export default config

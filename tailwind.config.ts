import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        helvetica: ['var(--font-helvetica)'],
        monument: ['var(--font-monument)'],
      },
      colors:{
        "neutral-0": "#ffffff",
        "neutral-1": "#f8f8f8",
        "neutral-2": "#343434",
        "neutral-3": "#161616",
        "primary": "#da192a",
      }
    },
  },
  plugins: [],
}
export default config

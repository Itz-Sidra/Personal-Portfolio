/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        paper: '#F6F2EA',
        'paper-alt': '#EFE9DD',
        card: '#FFFDF9',
        ink: '#1B1912',
        'ink-soft': '#6B6357',
        line: '#E2DACB',
        forest: {
          DEFAULT: '#2F4B3C',
          soft: '#4B6F58',
        },
        rust: {
          DEFAULT: '#B85C2E',
          soft: '#D07A45',
        },
        clay: {
          DEFAULT: '#9B5A42',
          soft: '#B87A5F',
        },
        gold: {
          DEFAULT: '#A8813A',
          soft: '#C6A055',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,25,18,0.04), 0 8px 24px rgba(27,25,18,0.06)',
        lift: '0 20px 50px rgba(27,25,18,0.10)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

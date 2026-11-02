/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gyatk: {
          navy: '#003461',
          darkNavy: '#00306a',
          purple: '#96337b',
          crimson: '#cc2b5e',
          accentPink: '#cf3367',
          cyan: '#00a9ea',
          textDark: '#1e293b',
          textBody: '#334155',
          textMuted: '#64748b',
          borderLight: '#e8e7ef',
          bgLight: '#eef7ff',
          bgIce: '#e0f2fe',
        },
        rvcr: {
          lightBlue: '#00a9ea',
          mediumBlue: '#1379ff',
          darkBlue: '#003461',
          midnight: '#0b1524',
          slateDark: '#0f172a',
          navyDeep: '#001f3b',
          cyan: '#00a9ea',
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        heading: ['"IBM Plex Sans"', 'sans-serif'],
        plex: ['"IBM Plex Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

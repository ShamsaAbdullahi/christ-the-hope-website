/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cth: {
          purple: '#7B2E7F',
          'purple-deep': '#5C2060',
          'purple-tint': '#F3EAF4',
          pink: '#D12A7F',
          'pink-tint': '#FDF0F6',
          green: '#6BA832',
          blue: '#0090C8',
          orange: '#E8850A',
          cream: '#FAF8F5',
          charcoal: '#1E1A1F',
          warm: '#6B6560',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        accent: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}

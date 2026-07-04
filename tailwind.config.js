/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#1A1A1A',
        primary: '#1A5C2A',
        secondary: '#7B2D00',
        accent: '#E8920A',
        accent2: '#D4620A',
        'background-warm': '#F5D5B0',
        'background-light': '#FFF4EC',
        'africa-green': '#4CAF50',
        'text-dark': '#1A1A1A',
        'text-muted': '#4A3728',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

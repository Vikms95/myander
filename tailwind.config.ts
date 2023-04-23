/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'auth-background': "url('/auth-bg.jpg')",
      },
      colors: {
        'dark-blue': '#3C476E',
        'main-gray': '#AAAAAA',
        'shadow-gray': 'rgb(170, 170, 170)',
        'light-blue': '#6386A1',
        'main-red': '#FF0000',
      },
      screens: {
        mobile: '310px',

        tablet: '767px',

        laptop: '1024px',

        desktop: '1280px',

        'desktop-wide': '1536px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,pdf}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal Elegance (Dark Theme)
        minimalBackground: '#2E2E2E',
        minimalPrimary: '#C0C0C0',
        minimalSecondary: '#4A90E2',
        minimalText: '#D3D3D3',

        // Modern Gray and Navy
        modernBackground: '#F5F5F5',
        modernPrimary: '#2C3E50',
        modernSecondary: '#D4AF37',
        modernText: '#333333',

        // Classic Ivory and Emerald
        classicBackground: '#FAF8EF',
        classicPrimary: '#2A9D8F',
        classicSecondary: '#264653',
        classicText: '#4A4A4A',

        // Sleek Black and Gold
        sleekBackground: '#1A1A1A',
        sleekPrimary: '#FFD700',
        sleekSecondary: '#2F4F4F',
        sleekText: '#CCCCCC',

        // Subtle Gradient Blue
        gradientBlueFrom: '#1D3557',
        gradientBlueTo: '#005F6A',
        gradientBlueSecondary: '#A8DADC',
        gradientBlueAccent: '#F4A261',
        gradientBlueText: '#FFFFFF',

        // Warm Neutrals
        warmBackground: '#F5F5DC',
        warmPrimary: '#E76F51',
        warmSecondary: '#3D2C29',
        warmText: '#3A3A3A',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


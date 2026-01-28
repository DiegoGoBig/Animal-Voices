/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E40AF', // Default deep blue
          green: '#10B981', // Default emerald green
        }
      }
    },
  },
  plugins: [],
}

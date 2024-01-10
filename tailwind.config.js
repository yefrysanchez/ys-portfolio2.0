/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans" : ['Work-Sans', 'sans-serif']
      }
    },
    colors : {
      accent1 : "#9B5CFF",
      accent2 : "#5EE2FF",
      shade1 : "#0A0A0A",
      shade2 : "#121212",
      shade3 : "#3B3B3B",
      shade4 : "#f2f4f7",
      shade5 : "#FFFFFF",
      test : "#F5ee32",
    }
  },
  plugins: [],
}
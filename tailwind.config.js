/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    colors: {
      // Configure your color palette here
      'primary-color' : '#FAF9F6',
      'text-color' : '#060606',
      'link-color' : '#1c70bf',
      'but-hov-color' : '#e7e2d4',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
    }
    }
  },
  plugins: [],
}


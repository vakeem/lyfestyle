module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'heebo': ['"Heebo"'],
        },
      },
    },
    plugins: [
      require('tailwindcss-animated')
    ],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'material-icons': ['Material Icons'],
        'title':['Poppins', 'sans-serif'],
        'body':['Poppins', 'sans-serif']
      },
      colors:{
        'pri': '##F2F2F2',
        'sec': '##22789D',
        'gen': '#000000',
        'our-bg': '#FFFFFF'

      }
    },
  },
  plugins: [],
}

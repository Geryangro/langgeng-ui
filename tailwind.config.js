/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        mulish: "'Mulish', sans-serif",
      },
      colors: {
        primary: '#F2994A',
        blackprimary: '#363740',
        blacksecondary: '#3F4049',
        secondary: '#9FA2B4',
        costumewhite: '#F7F8FC',
        costumeborder: '#F0F1F7',
        costumeblack: '#4F4F4F',
        costumegrey: '#DDE2FF',
        backgroundGrey: '#E8ECFF',
        backgroundGreySecondary: '#E0E0E0',
        backgroundGreyThird: '#F3F6FF',
        buttonSecondary: '#F2F2F2',
        textButtonSecondary: '#828282',
        textSubMenu: '#9E9E9E',
      },
    },
  },
  plugins: [],
};

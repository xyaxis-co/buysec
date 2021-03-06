module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#332C54',
      primary_light: '#8D82BD',
      secondary: '#542C4C',
      secondary_light: '#D0A6C7',
      tertiary: '#4F8996',
      tertiary_light: '#BDD7DC',
      google: '#4285F4',
      github: '#333333',
      facebook: '#4267B2',
      white: '#FFFFFF',
    },
    fontFamily: {
      Livvic: ["Livvic"],
      serif: ["poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

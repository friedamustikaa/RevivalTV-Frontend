module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
      },
      fontSize: {
        'xs':'16px',
        'sm':'18px',
        'tiny':'20px',
        'base':'24px',
        'lg':'26px',
        'xl':'28px',
        '2xl':'36px',
        '3xl':'48px',
        '4xl':'64px',
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      container: {
        center: true,
      },
      backgroundImage: {
        hero: "url('/assets/Hero.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

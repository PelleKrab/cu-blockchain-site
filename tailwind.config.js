export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
      extend: {
        colors: {
          'cu-gold': '#CFB87C',
          'cu-black': '#000000',
          'cu-dark-gray': '#565A5C',
          'cu-light-gray': '#A2A4A3',
          'cu-light-black': '#101112',
        },
        fontFamily: {
          sans: ['"Space Grotesk"', 'sans-serif'],
        },
        backgroundImage: {
          'snowy-flatirons': "url('../assets/Flatirons_Winter_Sunrise_banner.jpg')",
          'campus': "url('../assets/green_campus.jpg')",
          'flatirons': "url('../assets/frosty_flatirons.jpg')",
        },
      },
    },
  plugins: [],
}


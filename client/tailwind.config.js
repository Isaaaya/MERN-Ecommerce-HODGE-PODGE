/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkMain: '#1e2242'
      },
      fontFamily: {
        headerStraight: ['Tilt Warp', 'Tilt Neon', 'sans-serif'],
        headerCurved: ['Dancing Script', 'Tilt Warp', 'Tilt Neon', 'sans-serif']
      },
      brightness: {
        55: '.55',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(120%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
    },
    plugins: [],
  }

};
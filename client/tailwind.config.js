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
      rotate: {
        '35': '35deg',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(120%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'blue': {
          '0%': {
            transform: 'translateX(210%) translateY(-20%)'
          },
          '50%': {
            transform: 'translateX(-110%) translateY(50%)'
          },
          '100%': {
            transform: 'translateX(210%) translateY(-20%)'
          }
        },
        'pink': {
          '0%': {
            transform: 'translateX(-100%) translateY(-40%)'
          },
          '50%': {
            transform: 'translateX(220%) translateY(20%)'
          },
          '100%': {
            transform: 'translateX(-100%) translateY(-40%)'
          }
        },
        'yellow': {
          '0%': {
            transform: ' translateX(-140%) translateY(0%)'
          },

          '50%': {
            transform: 'translateX(250%) translateY(-50%)'
          },
          '100%': {
            transform: 'translateX(-140%) translateY(0%)'
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
        'blue': 'blue 10s linear infinite',
        'pink': 'pink 10s linear infinite',
        'yellow': 'yellow 15s linear infinite',
      },

    },
    plugins: [],
  }

};
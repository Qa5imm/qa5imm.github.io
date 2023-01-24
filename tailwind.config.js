/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        back: 'rgb(36, 36, 36)',
        blue:'#007bff',
        bord:'rgb(55, 55, 55)',
        icons: 'rgb(155, 155, 155)',
        text: 'rgb(203, 199, 199)',
        footer_bg:'rgb(40, 40, 40)',
        resume_back:'rgb(45, 44, 44)'
    }
    },
  screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '980px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

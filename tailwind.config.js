/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'retroBlue': {
          '50': '#f0f7ff',
          '100': '#e0eefe',
          '200': '#b9defe',
          '300': '#7bc4fe',
          '400': '#36a6fa',
          '500': '#0b8bec',
          '600': '#006dc9',
          '700': '#0156a3',
          '800': '#054987',
          '900': '#0b3e6f',
          '950': '#07274a',
      },
      'rust': {
        '50': '#fff8ed',
        '100': '#ffeed4',
        '200': '#ffdaa8',
        '300': '#ffbf71',
        '400': '#ff9837',
        '500': '#fe7a11',
        '600': '#ef5d07',
        '700': '#c64508',
        '800': '#9d370f',
        '900': '#7b2e0f',
        '950': '#441506',
    },
    'goldenYellow': {
      '50': '#fffcea',
      '100': '#fff4c5',
      '200': '#ffea85',
      '300': '#ffd846',
      '400': '#ffc51b',
      '500': '#ffa200',
      '600': '#e27a00',
      '700': '#bb5302',
      '800': '#984008',
      '900': '#7c350b',
      '950': '#481a00',
  },
  
    
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         
      },
    },
  },
  plugins: [require('flowbite/plugin') ],
};

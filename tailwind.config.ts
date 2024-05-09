import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
      },
      fontFamily: {
        'single-day': ['var(--single-day-font)'],
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;

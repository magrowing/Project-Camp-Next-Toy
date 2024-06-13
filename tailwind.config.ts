import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F4F4F',
        secondary: '#35383E',
        third: '#ACACAC',
        black: '#000',
        white: '#FFF',
        opacity5: '#35383E0D',
        opacity10: '#35383E1A',
      },
      borderRadius: {
        sm: '0.4rem',
        md: '0.8rem',
      },
      fontSize: {
        md: '1.4rem',
        lg: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;

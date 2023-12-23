import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightPrimary: '#1a5df1',
      lightSecondary: '#f776ce',
      lightAccent: '#f44d6c',
      lightBg: '#f6f9fe',
      lightText: '#020a23',
      darkPrimary: '#0f53e6',
      darkSecondary: '#87085f',
      darkAccent: '#b10b2a',
      darkBg: '#010409',
      darkText: '#dde5fd',
    },
  },
  plugins: [require('preline/plugin')],
};
export default config;

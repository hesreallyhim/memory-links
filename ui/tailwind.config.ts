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
        lightBg: '#F0F4F8',
        darkBg: '#102A43',
        lightHeader: '#334E68',
        darkHeader: '#243B53',
        accent: '#3EBD93',
        lightCard: '#D9E2EC',
        darkCard: '#243B53',
        deleteBtn: '#E12D39',
        darkText: '#102A43',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;

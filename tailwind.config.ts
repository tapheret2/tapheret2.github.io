import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        neon: '#38bdf8',
        slateBlue: '#1e293b'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.25), 0 10px 30px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;

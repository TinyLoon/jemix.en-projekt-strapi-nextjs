import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',        // App-Routing & Seiten
    './components/**/*.{js,ts,jsx,tsx}', // Komponenten
    './pages/**/*.{js,ts,jsx,tsx}',      // Falls du pages/ nutzt
    './lib/**/*.{js,ts,jsx,tsx}',        // Hilfsfunktionen, z. B. fetcher etc.
  ],
  safelist: ['p-0'], // Schutz vor dynamischer Generierung
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        dark: '#000000',
        light: '#ffffff',
      },
      maxWidth: {
        screen: '100vw',
        container: '1280px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Geist-Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
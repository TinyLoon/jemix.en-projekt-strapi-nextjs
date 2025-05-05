// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Alle Dateien im app-Ordner
    './components/**/*.{js,ts,jsx,tsx}', // Alle Komponenten
    './pages/**/*.{js,ts,jsx,tsx}', // Alle Seiten, falls du welche hast
    './lib/**/*.{js,ts,jsx,tsx}',  // Falls du auch Code im lib-Ordner hast
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',  // Blau für Hauptaktionen
        dark: '#000000',     // Dunkel für den Text
        light: '#ffffff',    // Weiß als Hintergrundfarbe
      },
      maxWidth: {
        screen: '100vw',     // Volle Bildschirmbreite
        container: '1280px', // Maximale Breite des Containers
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Sans-Schriftart
        mono: ['Geist-Mono', 'monospace'], // Monospace-Schriftart
      },
    },
  },
  plugins: [],
};
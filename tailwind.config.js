// tailwind.config.js
export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warhol: {
          banana: '#FFE800',     // amarillo vibrante
          rojo: '#FF3B3F',     // rojo intenso
          cyan: '#00FFFF',   // cian eléctrico
          violeta: '#8E44AD',      // violeta saturado
          verde: 'rgba(74,248,5,0.42)',       // verde menta
          ink: '#1A1A1A',        // negro profundo
          pink: '#F020C6',  // rosa chicle
        },
         keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  animation: {
    fadeIn: 'fadeIn 1s ease-out',
    slideUp: 'slideUp 0.8s ease-out',
  },

      },
    },
  },

  plugins: [],
}

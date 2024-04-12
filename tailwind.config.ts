import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'chakra-petch': ['Chakra Petch', 'sans-serif'],
    },
    transitionDuration: {
      DEFAULT: '100ms',
      '300': '300ms', // Agregar la duración deseada
    },
    transitionTimingFunction: {
      DEFAULT: 'linear',
    },
    extend: {
      keyframes: {
        'toast-in': {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        progress: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'toast-in': 'toast-in 250ms linear',
        progress: 'progress 3s linear',
      },
      lineHeight: {
        normal: 'normal',
      },
      colors: {
        'picton-blue': {
          '50': '#f1f8fe',
          '100': '#e2effc',
          '200': '#bedef9',
          '300': '#85c3f4',
          '400': '#42a4eb', // Main
          '500': '#1d8bda',
          '600': '#0f6dba',
          '700': '#0d5697',
          '800': '#0f4a7d',
          '900': '#123e68',
          '950': '#0c2845',
        },
        'curious-blue': {
          '50': '#f2f8fd',
          '100': '#e4effa',
          '200': '#c2ddf5',
          '300': '#8dc2ec',
          '400': '#409bdd', // Secondary
          '500': '#2a89cd',
          '600': '#1b6bae',
          '700': '#17568d',
          '800': '#174975',
          '900': '#183f62',
          '950': '#102741',
      },
      
        'shark': {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#d0d0d1',
          '300': '#afb0b1',
          '400': '#86868a',
          '500': '#6b6b6f',
          '600': '#5b5b5f',
          '700': '#4e4f50',
          '800': '#444446',
          '900': '#3c3c3d',
          '950': '#222223', // Background
        },
      },
      screens: {
        'xs': '530px',
        'xl1': '1400px',
        'xl2': '1580px',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1740px',
      },
    },
  },
  plugins: [],
}
// eslint-disable-next-line import/no-default-export
export default config

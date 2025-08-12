const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.figma-dark'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svg}'],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
  ],
  theme: {
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      transparent: 'transparent',
      indicatorsHover: 'var(--indicators-hover)',
      indicatorsActive: 'var(--indicators-active)',
      'polychrom-theme-bg': 'var(--polychrom-theme-bg)',
      'polychrom-theme-bg-border': 'var(--polychrom-theme-bg-border)',
      'polychrom-theme-border-original':
        'var(--polychrom-theme-border-original)',
      'polychrom-theme-fg': 'var(--polychrom-theme-fg)',
      'polychrom-theme-fg-24': 'var(--polychrom-theme-fg-24)',
      'polychrom-theme-fg-70': 'var(--polychrom-theme-fg-70)',
      'polychrom-theme-fg-border': 'var(--polychrom-theme-fg-border)',
      'polychrom-theme-secondary': 'var(--polychrom-theme-secondary)',
      'polychrom-theme-secondary-12': 'var(--polychrom-theme-secondary-12)',
      'polychrom-theme-secondary-16': 'var(--polychrom-theme-secondary-16)',
      'polychrom-theme-secondary-24': 'var(--polychrom-theme-secondary-24)',
      elevation: {
        1: 'var(--elevation-1)',
      },
      universal: {
        25: 'var(--universal-25)',
      },
      secondary: {
        35: 'var(--secondary-35)',
        75: 'var(--secondary-75)',
      },
      focus: 'var(--figma-color-border-selected)',
    },
    extend: {
      keyframes: {
        'lurkers-blink': {
          '0%, 48%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0)',
          },
          '52%, 100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'lurkers-blink': 'lurkers-blink 8s infinite',
      },
      textShadow: {
        DEFAULT: '0px 4px 24px var(--text-shadow-color)',
      },
      fontFamily: {
        martianMono: ['Martian Mono', 'monospace'],
      },
      fontSize: {
        xxs: '0.625rem',
        xxxs: '0.46875rem',
      },
      margin: {
        13: '3.25rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      width: {
        13: '3.25rem',
      },
      height: {
        13: '3.25rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '327px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'tm': { 'max': '1020px' },  // max-width 1020px
        'tl': { 'min': '1021px' },

      },
      fontFamily: {
        HeroNewBold: ['Hero New Bold'],
        HeroNewExtraBold: ['Hero New ExtraBold'],
        HeroNewLight: ['Hero New Light'],
        HeroNewRegular: ['Hero New Regular'],
        HeroNewSemiBold: ['Hero New SemiBold'],
        HeroNewThin: ['Hero New Thin'],
        HeroNewUltraLight: ['Hero New UltraLight'],
        SwiperIconns: ['swiper-icons']
      },
      padding: {
        'appPaddingLeft': '3.5rem',
        'appPaddingRight': '3.5rem',
      },
      spacing: {
        'footerlogoWidth': 'var(--footer-brand-logo-width)',
        'footerlogoHeight': 'var(--footer-brand-logo-height)'
      },
      colors: {
        'appTheme': 'rgb(var(--primary-color))',
        'appBlackTheme': 'var(--secondary-color)',
        'appTextColor': 'var(--app-text-color)',
        'appErrorMessage': 'var(--app-errorMessage-color)',
        'formFieldBorder': 'var(--form-field-border)',
        'appTheme-opacity-10': 'rgba(var(--primary-color), 0.1)',
        'appTheme-opacity-20': 'rgba(var(--primary-color), 0.2)',
        'appTheme-opacity-30': 'rgba(var(--primary-color), 0.3)',
        'appTheme-opacity-40': 'rgba(var(--primary-color), 0.4)',
        'appTheme-opacity-50': 'rgba(var(--primary-color), 0.5)',
        'appTheme-opacity-60': 'rgba(var(--primary-color-rgb), 0.6)',
        'appTheme-opacity-70': 'rgba(var(--primary-color), 0.7)',
        'appTheme-opacity-80': 'rgba(var(--primary-color), 0.8)',
        'appTheme-opacity-90': 'rgba(var(--primary-color), 0.9)',
        'appTheme-opacity-100': 'rgba(var(--primary-colo), 1)',
        secondary: {
          '400': 'var(--text-secondary-color)'
        }
      },
      boxShadow: {
        'bottom': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
    animation: {
      slideIn: 'slideIn 0.8s forwards',
      slideOut: 'slideOut 0.8s forwards',
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideOut: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
    },
  },
  plugins: [animations],
}

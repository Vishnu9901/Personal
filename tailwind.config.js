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
        'appTheme': 'var(--primary-color)',
        'appBlackTheme': 'var(--secondary-color)',
        'appTextColor': 'var(--app-text-color)',
        'appErrorMessage': 'var(--app-errorMessage-color)',
        'formFieldBorder': 'var(--form-field-border)'
      },
      boxShadow: {
        'bottom': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      }
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

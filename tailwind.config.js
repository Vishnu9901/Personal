/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm':'327px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',

      },
      fontFamily: {
        HeroNewBold: ['Hero New Bold'],
        HeroNewExtraBold: ['Hero New ExtraBold'],
        HeroNewLight: ['Hero New Light'],
        HeroNewRegular: ['Hero New Regular'],
        HeroNewSemiBold: ['Hero New SemiBold'],
        HeroNewThin: ['Hero New Thin'],
        HeroNewUltraLight: ['Hero New UltraLight'],
        SwiperIconns:['swiper-icons']
      },
      padding: {
        'appPaddingLeft': '3.5rem',
        'appPaddingRight': '3.5rem',
      },
      spacing: {
        'footerlogoWidth': 'var(--footer-brand-logo-width)',
        'footerlogoHeight': 'var(--footer-brand-logo-height)'
      },
      colors:{
        'appTheme': 'var(--primary-color)',
        'appBlackTheme':'var(--secondary-color)',
        'appTextColor': 'var(--app-text-color)'
      },
      boxShadow: {
        'bottom': '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
      }
    },
  },
  plugins: [],
}

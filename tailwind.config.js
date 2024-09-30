/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
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
        'appPaddingLeft': '4.5rem',
        'appPaddingRight': '4.5rem',
      },
      colors:{
        'appTheme': 'var(--primary-color)',
        'appBlackTheme':'var(--secondary-color)',
        'appTextColor': 'var(--app-text-color)'
      }
    },
  },
  plugins: [],
}

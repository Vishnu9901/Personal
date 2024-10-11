import OrderManagementtIcon from '../ui/assets/OrderManagementtIcon.svg';
import AcademyIcon from '../ui/assets/AcademyIcon.svg';
import LoyaltyIcon from '../ui/assets/LoyaltyIcon.svg';
import SubscribeIcon from '../ui/assets/SubscribeIcon.svg';

const url = import.meta.env.VITE_PCA_VTEXASSETS;

export const marketingBanner3Data = {
  imgSrc: 'https://www.pcaskinpro.com/cms/assets/5239f229-b873-4bd1-b36c-3b92745ebf8a.jpg?key=pca-en-us-default',
  title: 'PCA SKIN Professional Peel Certification',
  subTitle: 'Complete this course as a certified PCA SKIN Professional, ready to promptly apply new protocols, optimal techniques, and treatment strategies. Gain entry to PCA SKIN\'s extensive selection of professional treatment products, encompassing top-of-the-line professional peels, therapeutic treatment masks, and alternative treatments.'
}

export const IndividualBenefits = [
  {
    imageSrc: OrderManagementtIcon,
    title: 'Order Management',
    description: 'Effortlessly handle orders and invoices in your account and stay up-to-date on any and all business affairs.',
    imageAlt: 'Order Management'
  },
  {
    imageSrc:AcademyIcon,
    title: 'Academy ',
    description: 'Get access to the entire education library via the our new single sign-on. All the product knowledge is at your fingertips.',
    imageAlt: 'Academy'
  },
  {
    imageSrc: LoyaltyIcon,
    title: 'Loyalty ',
    description: 'Sign up to access exclusive perks, rewards, and special offers through our loyalty program. Your success is our success.',
    imageAlt: 'Loyalty'
  },
  {
    imageSrc: SubscribeIcon,
    title: 'Subscriptions',
    description: 'Keep your shelves stocked by auto-ordering all of your favorite products — just set it and forget it.',
    imageAlt: 'Subscriptions'
  }
]

export const marketingBannersData = [
  {
    title: 'Register for Treatment Tuesday',
    subtext: 'Join us live to engage, learn, and shop with access to exclusive promotions.',
    buttonText: 'Learn More',
    imageUrl: 'https://www.pcaskinpro.com/cms/assets/32708211-0079-4636-9899-33a276cbd9bc.jpg?key:pca-en-us-marketing-banner-large',
    bgColor: 'bg-black text-white',
  },
  {
    title: 'Did you hear?',
    subtext: 'PCA SKIN was voted the #1 professional skincare brand by recommended by estheticians',
    buttonText: 'Learn More',
    imageUrl: 'https://www.pcaskinpro.com/cms/assets/b1cdc34e-7cdf-4302-bf2c-a4d9d36b25d1.jpg?key:pca-en-us-marketing-banner-large',
    bgColor: 'bg-[#D6D6D6] text-[#333333]',

  },
]

export const carouselData = [
  {
    imgSrc: 'https://www.pcaskinpro.com/cms/assets/b3ba90eb-9481-45fe-8587-ceff7344e45a.jpg?key=pca-en-us-hero-large',
    imgAlt: 'Banner Image 1',
    heading: 'Break the cycle of breakouts',
    subheading: 'Provide powerful at-home recommendations with PCA SKIN advanced corrective products to dramatically improve skin health.',
    buttonText: 'Shop Now',
    bgColor: 'bg-gray-100'
  },
  {
    imgSrc: 'https://www.pcaskinpro.com/cms/assets/01200ff0-3aa4-488a-867f-e3747abf19b3.jpg?key=pca-en-us-hero-large',
    imgAlt: 'Banner Image 2',
    heading: 'Our NEW Hyaluronic Acid Microneedle Eye Patches ',
    subheading: 'Your overnight refresh for under eyes with 22% reduction in wrinkles in just one treatment ',
    buttonText: 'Shop Now',
    bgColor: 'bg-black text-white'
  },
  {
    imgSrc: 'https://www.pcaskinpro.com/cms/assets/201d2cde-cfcb-419b-a2e6-32407713196b.jpg?key=pca-en-us-hero-large',
    imgAlt: 'Banner Image 3',
    heading: 'Tailor your patients’ regimens ',
    subheading: 'Provide powerful at-home recommendations with PCA SKIN advanced corrective products to dramatically improve skin health.',
    buttonText: 'Shop Now',
    bgColor: 'bg-gray-100'
  },
];

export const products = [
  {
    id: 1,
    name: 'Sensi Peel®',
    image:
            `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Collagen Hydrator',
    image:
            `${url}/ids/156792-608-auto/collagen-hydrator.jpg?v=638578871156130000&width=608&height=auto&aspect=true`,
    rating: 4.8,
    isBestSeller: false,
  },
  {
    id: 3,
    name: 'ExLinea® Pro Peptide Serum',
    image:
            `${url}/ids/156810-608-auto/exlinea-pro.jpg?v=638578896004000000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: false,
  },
  {
    id: 4,
    name: 'Hyaluronic Acid Boosting Serum',
    image: `${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
  },
  {
    id: 5,
    name: 'Brighten: Therapeutic Blackberry Mask',
    image:
            `${url}/ids/156918-608-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=608&height=auto&aspect=true`,
    rating: 2.8,
    isBestSeller: false,
  },

  {
    id: 6,
    name: 'ExLinea® Peptide Smoothing Serum',
    image:
            `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
  },
  {
    id: 7,
    name: 'Nutrient Toner',
    image:
            `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
    rating: 4.5,
    isBestSeller: true,
  },
  {
    id: 8,
    name: 'Advanced Treatment Booster',
    image:
            `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
  },
];
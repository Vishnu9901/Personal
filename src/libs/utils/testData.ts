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
    title: 'Academy',
    description: 'Get access to the entire education library via the our new single sign-on. All the product knowledge is at your fingertips.',
    imageAlt: 'Academy'
  },
  {
    imageSrc: LoyaltyIcon,
    title: 'Loyalty',
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
    bgColor: '!bg-black text-white'
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

export const viewAllProducts = [
  {
    id: 101,
    name: 'C&E Strength Max',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156785-1296-auto/CE-max.jpg?v=638578860503430000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Antioxidents', // Add category here
    price: 5000.00
  },
 
  {
    id: 102,
    name: 'Daily Defense Broad Spectrum SPF 50+',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156798-1296-auto/daily-defense-spf.jpg?v=638578876745900000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Broad+Spectrum', // Add category here
    price: 2000.00
  },
  {
    id: 103,
    name: 'Hydrator Plus Broad Spectrum SPF 30',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156825-1296-auto/hydrator-plus-SPF.jpg?v=638578916468130000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Broad spectrum SPF', // Add category here
    price: 2550.00

  },
  {
    id: 104,
    name: 'BPO 5% Cleanser',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156991-1296-auto/bpo-cleanser-NL.jpg?v=638610751805730000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Cleansers-toners', // Add category here
    price: 1000.00

  },
  {
    id: 105,
    name: 'Hyaluronic Acid Lip Booster',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156740-1296-auto/HyaluronicAcidLipBooster-21191-NL-thumbnail-pro.jpg?v=638578737564870000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Eye, neck, lip', // Add category here
    price: 2000.00

  },
  {
    id: 106,
    name: 'Detoxifying Mask',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156803-1296-auto/detoxifying-mask.jpg?v=638578882428530000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Masks', // Add category here
    price: 2500.00

  },
  {
    id: 107,
    name: 'Après Peel® Hydrating Balm',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156783-1296-auto/apres-peel-hydrating-balm.jpg?v=638578852838430000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Moisturizers', // Add category here
    price: 8400.00

  },
  {
    id: 108,
    name: 'Acne Cream',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156778-1296-auto/AcneCream_21174_white-background.jpg?v=638578845812000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: true,
    category: 'Acne Treatment', // Add category here
    price: 8000.00

  },
  {
    id: 109,
    name: 'Acne Gel with OmniSome',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156989-1296-auto/AcneGel_23375_1oz_award.jpg?v=638610566864500000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Acne Treatment', // Add category here
    price: 8000.00

  },
  {
    id: 110,
    name: 'Active Broad Spectrum SPF 45',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156780-1296-auto/Active-broad-spectrum-spf.jpg?v=638578847631000000&width=1296&height=auto&aspect=true',
    rating: 4.4,
    isBestSeller: false,
    category: 'Sunscreen', // Add category here
    price: 8530.00

  },
  {
    id: 111,
    name: 'Anti-Redness Serum',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156781-1296-auto/anti-redness-serum.jpg?v=638578850098070000&width=1296&height=auto&aspect=true',
    rating: 3.3,
    isBestSeller: false,
    category: 'Serums', // Add category here
    price: 8130.00
  },
  {
    id: 112,
    name: 'Après Peel Hydrating Balm',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156783-1296-auto/apres-peel-hydrating-balm.jpg?v=638578852838430000&width=1296&height=auto&aspect=true',
    rating: 3.3,
    isBestSeller: false,
    category: 'Balms', // Add category here
    price: 8520.00
  },
  {
    id: 113,
    name: 'BPO 5% Cleanser',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156991-1296-auto/bpo-cleanser-NL.jpg?v=638610751805730000&width=1296&height=auto&aspect=true',
    rating: 3.3,
    isBestSeller: false,
    category: 'Cleansers & toners', // Add category here
    price: 9530.00
  },
  {
    id: 114,
    name: 'C&E Advanced',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156717-1296-auto/CE-advanced-sliver-21188-pro.jpg?v=638578724413970000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Antioxidants', // Add category here
    price: 4050.00
  },
  {
    id: 115,
    name: 'Active Broad Spectrum SPF 45',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156780-1296-auto/Active-broad-spectrum-spf.jpg?v=638578847631000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Broad-spectrum-SPF', // Add category here
    price: 3050.00
  },
  
];

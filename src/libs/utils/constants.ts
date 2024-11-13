import { AccordionType } from "./enums";

export const APPOWNER = '© 2023 CP Skin Health Group. All Rights Reserved'
export const PRODUCTS_PER_PAGE = 4;
export const WELCOMEMSG = 'Welcome to the PCA SKIN Professional Site'
export const WELCOMEGREETPARA = 'If you have a professional account, please login. If you would like to establish a professional account please click Create Account.'
export const WELCOMEFORMMSG = 'Already registered?'
export const SHOP_D = 'Shop'
export const LEARN = 'Learn'
export const ABOUT = 'About'
export const CUSTOMER_SERVICE = 'Customer Service'
export const OTHERLINKS = 'OtherLinks'
export const CREATEACCOUNT = 'Create Account'
export const LOGIN = 'Login'
export const FORGOTPASSWORD = 'Forgot your password?'

export const shop = [
  { url: '/home', label: 'All Products' },
  { url: '/about', label: 'Daily Care' },
  { url: '/services', label: 'By Treatment' },
  { url: '/contact', label: 'By Skin Type' },
  { url: '/contact', label: 'By Skin Concern' },
];

export const Learn = [
  { url: '/home', label: 'Courses' },
  { url: '/about', label: 'Professional Peels' },
  { url: '/services', label: 'Skin Concerns' },
  { url: '/contact', label: 'Skin Types' },
  { url: '/contact', label: 'Skin Intelligence' },
];

export const About = [
  { url: '/home', label: 'Our Story' },
  { url: '/about', label: 'Our Peel Legacy' },
  { url: '/services', label: 'Careers' },
];

export const CustomerService = [
  { url: '/about', label: 'Contact Us' },
  { url: '/services', label: 'FAQ' },
  { url: '/contact', label: 'Shipping' },
  { url: '/services', label: 'Returns' },
];

export const OtherLinks = [
  { url: '/home', label: 'PCA SKIN International' },
  { url: '/about', label: 'Privacy Policy' },
  { url: '/services', label: 'Terms & Conditions' },
  { url: '/contact', label: 'Do Not Sell My Personal Information' },
  { url: '/services', label: 'Product excellence' },
];


export const links = [
  {
    title: 'Shop',
    submenu: [
      { title: 'Daily care', category: 'catagory', items: ['Best Seller', 'Antioxidants', 'Body treatments', 'Broad spectrum SPF', 'Cleansers & toners', 'Eye, neck, lip', 'Masks', 'Moisturizers', 'Retinols', 'Serums', 'Solution sets'], hasMore: true },
      { title: 'Professional treatments', category: 'catagory', items: ['Best Seller', 'Peels', 'Peel alternative', 'Retinoid treatments', 'Therapeutic masks', 'Treatment enhancements', 'Backbar tools', 'By skin type'], hasMore: true },
      { title: 'By skin type', category: 'skin-type', items: ['Combination', 'Dry', 'Normal', 'Oily', 'Sensitive'], hasMore: true },
      { title: 'By skin concern', category: 'skin-concern', items: ['Brightening', 'Acne', 'Aging', 'Discoloration', 'Preventative', 'Sensitive Skin'], hasMore: true },
    ],
  },
  {
    title: 'Academy',
    submenu: [
      { title: 'Courses', category: '', items: ['Fundamental courses', 'Certification courses', 'Acne', 'Aging', 'Hyperpigmentation', 'Sensitive skin', 'Business building', 'Peel application videos', 'Multicultural skin'], hasMore: true },
      { title: 'Learn', category: '', items: ['Skin concerns', 'Skin types', 'Professional peels', 'Professional peels'] },
      { title: 'Education memberships', category: '', items: ['All-Access membership', 'Acne membership', 'Aging membership', 'Hyperpigmentation membership', 'Sensitive skin membership', 'Enhancing your services', 'Multicultural skin membership'], hasMore: true }

    ],
  },
  {
    title: 'Events',
    submenu: [
      { title: 'Calendar', category: '', items: ['Treatment Tuesdays', 'National Seminars'] },

    ],
  },
  {
    title: 'About',
    submenu: [
      { title: 'About', category: '', items: ['Our story', 'Culture', 'Our peel legacy'] },
      { title: 'Customer service', category: '', items: ['FAQs', 'Returns & exchanges', 'Shipping terms', 'Contact us', 'Subscriptions'] }

    ],
  },
  {
    title: 'Business tools',
    submenu: [{ title: 'Marketing materials', category: '', items: ['Content Hub'] }],
  },
  {
    title: 'Student',
    submenu: [{ title: 'Student Products', category: '', items: [], hasMore: true },
    { title: 'Student courses', category: '', items: ['Enhancing Student Curriculum', 'Peel Certification for Students'] },
    { title: 'Student Store', category: '', items: ['FAQ'] }
    ],
  },
];

export const plpFilters = [
  {
    title: 'Sort By',
    AccordionType: AccordionType.Radio,
    options: [{ title: 'Alphabetical A - Z' }, { title: 'Alphabetical Z - A' }, { title: 'Price Low to High' }, { title: 'Price High to Low' }]
  },
  {
    title: 'Product Category',
    AccordionType: AccordionType.Label,
    options: [
      { title: 'All Products', count: 1 },
      { title: 'Antioxidants', count: 2 },
      { title: 'Broad Spectrum SPF', count: 3 },
      { title: 'Cleansers & Toners', count: 4 },
      { title: 'Eye, neck, lip', count: 5 },
      { title: 'Masks', count: 6 },
      { title: 'Moisturizers', count: 7 },
      { title: 'Retinols', count: 8 },
      { title: 'Serums', count: 9 },
      { title: 'Peels', count: 10 },
      { title: 'Peel Alternative', count: 11 },
      { title: 'Retinoid Treatments', count: 12 },
      { title: 'Therapeutic Masks', count: 13 },
      { title: 'Treatment Enhancements', count: 14 },
      { title: 'Backbar Sizes', count: 15 },
      { title: 'Backbar Tools', count: 16 },
      { title: 'Body Treatments', count: 17 },
      { title: 'Exfoliants', count: 18 },
    ]
  },


  {
    title: 'Product Types',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Backbar', count: 1 }, { title: 'Retail', count: 2 }, { title: 'Sample', count: 3 }]
  },
  {
    title: 'Best Seller',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Best Seller', count: 1 }]
  },
  {
    title: 'Skin Concer',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Acne', count: 1 }, { title: 'Discolorations', count: 2 }, { title: 'Sensitive Skin', count: 3 }]
  },

  {
    title: 'Skin Type',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Coombination', count: 1 }, { title: 'Dry', count: 2 }, { title: 'Normal', count: 3 }, { title: 'Oily', count: 4 }, { title: 'Sensitive', count: 5 }]
  },

  

]

export const SortOptions = {
  ALPHABETICAL_AZ: 'Alphabetical A - Z',
  ALPHABETICAL_ZA: 'Alphabetical Z - A',
  PRICE_LOW_HIGH: 'Price Low to High',
  PRICE_HIGH_LOW: 'Price High to Low',
  "Alphabetical A - Z": "asc",
  "Alphabetical Z - A": "dsc",
  "Price Low to High": "asc",
  "Price High to Low": "dsc"
};
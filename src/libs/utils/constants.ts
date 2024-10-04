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
            { title: 'Daily care', items: ['Best Seller', 'Antioxidants', 'Body treatments', 'Broad spectrum SPF', 'Cleansers & toners', 'Eye, neck, lip', 'Masks', 'Moisturizers', 'Retinols', 'Serums', 'Solution sets'], hasMore: true },
            { title: 'Professional treatments', items: ['Best Seller', 'Peels', 'Peel alternative', 'Retinoid treatments', 'Therapeutic masks', 'Treatment enhancements', 'Backbar tools', 'By skin type'], hasMore: true },
            { title: 'By skin type', items: ['Combination', 'Dry', 'Normal', 'Oily', 'Sensitive'], hasMore: true },
            { title: 'By skin concern', items: ['Brightening', 'Acne', 'Aging', 'Discoloration', 'Preventative', 'Sensitive Skin'], hasMore: true },
        ],
    },
    {
        title: 'Academy',
        submenu: [
            { title: 'Courses', items: ['Fundamental courses', 'Certification courses', 'Acne', 'Aging', 'Hyperpigmentation', 'Sensitive skin', 'Business building', 'Peel application videos', 'Multicultural skin'], hasMore: true },
            { title: 'Learn', items: ['Skin concerns', 'Skin types', 'Professional peels', 'Professional peels'] },
            { title: 'Education memberships', items: ['All-Access membership', 'Acne membership', 'Aging membership', 'Hyperpigmentation membership', 'Sensitive skin membership', 'Enhancing your services', 'Multicultural skin membership'], hasMore: true }

        ],
    },
    {
        title: 'Events',
        submenu: [
            { title: 'Calendar', items: ['Treatment Tuesdays', 'National Seminars'] },

        ],
    },
    {
        title: 'About',
        submenu: [
            { title: 'About', items: ['Our story', 'Culture', 'Our peel legacy'] },
            { title: 'Customer service', items: ['FAQs', 'Returns & exchanges', 'Shipping terms', 'Contact us', 'Subscriptions'] }

        ],
    },
    {
        title: 'Business tools',
        submenu: [{ title: 'Marketing materials', items: ['Content Hub'] }],
    },
    {
        title: 'Student',
        submenu: [{ title: 'Student Products', items: [], hasMore: true },
        { title: 'Student courses', items: ['Enhancing Student Curriculum', 'Peel Certification for Students'] },
        { title: 'Student Store', items: ['FAQ'] }
        ],
    },
];
export interface SubProduct {
    label: string;
    href: string;
}

export interface ProductItem {
    label: string;
    href: string;
    subItems?: SubProduct[];
}

export interface NavLink {
    label: string;
    href: string;
}

export const navLinks: NavLink[] = [
    {
        label: 'Logistics & Quality',
        href: '/logistics-and-quality',
    },
    {
        label: 'Policy',
        href: '/policy',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export const aboutItems: SubProduct[] = [
    {
        label: 'Company Profile',
        href: '/about-us/company-profile',
    },
    {
        label: 'Our Team',
        href: '/about-us/our-team',
    },
    {
        label: 'Certificates',
        href: '/about-us/certificates',
    },
];

export const productCategories: ProductItem[] = [
    {
        label: 'Food Products',
        href: '/products/food-products',
        subItems: [
            {
                label: 'Spices',
                href: '/products/food-products/spices',
            },
            {
                label: 'Cereals, Pulses & Flours',
                href: '/products/food-products/grains',
            },
            {
                label: 'Fruits & Vegetables',
                href: '/products/food-products/fruits-and-vegetables',
            },
            {
                label: 'Frozen Foods & Vegetables',
                href: '/products/food-products/frozen-foods',
            },
            {
                label: 'FMCG',
                href: '/products/food-products/fmcg',
            },
            {
                label: 'Tea & Coffee',
                href: '/products/food-products/tea-and-coffee',
            },
        ],
    },
    {
        label: 'Imitation Jewellery',
        href: '/products/imitation-jewellery',
    },
    {
        label: 'Engineering Goods',
        href: '/products/engineering-goods',
    },
    {
        label: 'Automotive Components',
        href: '/products/automotive-components',
    },
    {
        label: 'Pharmaceuticals & Biologicals',
        href: '/products/pharmaceuticals-biologicals',
    },
    {
        label: 'Textiles & Apparels',
        href: '/products/textiles-and-apparels',
    },
    {
        label: 'General Merchandise',
        href: '/products/general-merchandise',
    },
];

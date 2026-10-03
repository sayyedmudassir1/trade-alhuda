export interface ProductScreenshot {
    src: string;
    alt: string;
    title: string;
    description: string;
    feature?: string;
    label: string;
}

export const screenshots: ProductScreenshot[] = [
    {
        src: "/images/products/food-products.webp",
        alt: "Food products sourced from India",
        title: "Food Products",
        description:
            "Explore food products across spices, grains, fruits and vegetables, frozen foods, beverages and other sourcing categories.",
        feature: "Food sourcing",
        label: "Food",
    },
    {
        src: "/images/products/apparels.webp",
        alt: "Apparel products and garments",
        title: "Apparels",
        description:
            "Explore apparel and garment categories for buyers seeking commercially suitable products and sourcing options.",
        feature: "Apparel sourcing",
        label: "Apparel",
    },
    {
        src: "/images/products/textiles.webp",
        alt: "Indian textile products",
        title: "Textiles",
        description:
            "Explore textile products and material categories for international buyers, distributors and commercial requirements.",
        feature: "Textile sourcing",
        label: "Textiles",
    },
    {
        src: "/images/products/automotive-components.webp",
        alt: "Automotive components and parts",
        title: "Automotive Components",
        description:
            "Explore automotive components and related product categories for commercial sourcing and international trade.",
        feature: "Automotive sourcing",
        label: "Automotive",
    },
    {
        src: "/images/products/engineering-goods.webp",
        alt: "Engineering goods and industrial products",
        title: "Engineering Goods",
        description:
            "Explore engineering goods and industrial product categories for businesses with specific sourcing requirements.",
        feature: "Engineering sourcing",
        label: "Engineering",
    },
    {
        src: "/images/products/general-merchandise.webp",
        alt: "General merchandise products",
        title: "General Merchandise",
        description:
            "Explore a broad range of general merchandise categories suited to distributors, importers and commercial buyers.",
        feature: "General sourcing",
        label: "General",
    },
    {
        src: "/images/products/imitation-jewellery.webp",
        alt: "Imitation jewellery products",
        title: "Imitation Jewellery",
        description:
            "Explore imitation jewellery and fashion accessory categories for wholesale, distribution and international sourcing.",
        feature: "Jewellery sourcing",
        label: "Jewellery",
    },
    {
        src: "/images/products/pharma.webp",
        alt: "Pharmaceutical products",
        title: "Pharma Products",
        description:
            "Explore pharmaceutical and healthcare-related product categories for eligible international sourcing requirements.",
        feature: "Pharma sourcing",
        label: "Pharma",
    },
];

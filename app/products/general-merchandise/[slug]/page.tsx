import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Category = {
    slug: string;
    number: string;
    name: string;
    shortName: string;
    description: string;
    image: string;
    tags: string[];
    intro: string;
    details: string;
    applications: string[];
    requirements: string[];
};

const categories: Category[] = [
    {
        slug: "household-products",
        number: "01",
        name: "Household Products",
        shortName: "Household Products",
        description:
            "Household product categories for importers, distributors, retailers and commercial sourcing requirements.",
        image:
            "/images/products/general-merchandise/household-products.webp",
        tags: ["Household", "Consumer"],
        intro:
            "Household products for international buyers looking to source everyday consumer goods for retail, wholesale, distribution and commercial requirements.",
        details:
            "Requirements can be discussed according to product type, material, dimensions, colours, packaging, quantities, destination market and other buyer-specific specifications.",
        applications: [
            "Retail and wholesale distribution",
            "Household and everyday consumer use",
            "Commercial and institutional requirements",
            "Private-label and buyer-specific sourcing",
        ],
        requirements: [
            "Product type and specifications",
            "Material and dimensions",
            "Colour, finish and design",
            "Packaging and labelling",
            "Required quantity",
            "Destination market",
        ],
    },
    {
        slug: "kitchenware",
        number: "02",
        name: "Kitchenware",
        shortName: "Kitchenware",
        description:
            "Kitchenware and everyday kitchen product categories for retail, wholesale and commercial requirements.",
        image:
            "/images/products/general-merchandise/kitchenware.webp",
        tags: ["Kitchen", "Household"],
        intro:
            "Kitchenware categories for importers, wholesalers, retailers and distributors sourcing everyday kitchen products for international markets.",
        details:
            "Kitchenware enquiries can be reviewed around product type, material, dimensions, finish, colours, packaging, quantities and intended market.",
        applications: [
            "Kitchen and household retail",
            "Wholesale and distribution",
            "Hospitality and commercial use",
            "Buyer-specific product sourcing",
        ],
        requirements: [
            "Kitchenware product type",
            "Material and construction",
            "Dimensions and capacity",
            "Finish and colour",
            "Packaging requirements",
            "Quantity and destination",
        ],
    },
    {
        slug: "home-accessories",
        number: "03",
        name: "Home Accessories",
        shortName: "Home Accessories",
        description:
            "Home accessory categories for retailers, distributors, wholesalers and commercial sourcing requirements.",
        image:
            "/images/products/general-merchandise/home-accessories.webp",
        tags: ["Home", "Accessories"],
        intro:
            "Home accessory products for retail, wholesale, distribution and commercial sourcing requirements across international markets.",
        details:
            "Product enquiries can be discussed according to the intended use, material, dimensions, design, colours, finishes, packaging and commercial quantity.",
        applications: [
            "Home and lifestyle retail",
            "Wholesale distribution",
            "Hospitality and commercial interiors",
            "Consumer goods sourcing",
        ],
        requirements: [
            "Product category and intended use",
            "Material and construction",
            "Dimensions and design",
            "Colour and finish",
            "Packaging and presentation",
            "Quantity and destination",
        ],
    },
    {
        slug: "personal-care-products",
        number: "04",
        name: "Personal Care Products",
        shortName: "Personal Care",
        description:
            "Personal care product categories for distributors, retailers and international consumer-goods sourcing.",
        image:
            "/images/products/general-merchandise/personal-care-products.webp",
        tags: ["Personal Care", "Consumer"],
        intro:
            "Personal care product categories for international buyers, distributors, retailers and consumer-goods sourcing requirements.",
        details:
            "Product requirements can be reviewed according to product type, specifications, packaging, quantities, market requirements and applicable documentation.",
        applications: [
            "Consumer retail",
            "Wholesale and distribution",
            "Commercial and institutional sourcing",
            "Buyer-specific product requirements",
        ],
        requirements: [
            "Product type and specification",
            "Material or formulation details where applicable",
            "Packaging and labelling",
            "Quantity requirements",
            "Market and destination",
            "Applicable compliance requirements",
        ],
    },
    {
        slug: "cleaning-products",
        number: "05",
        name: "Cleaning Products",
        shortName: "Cleaning Products",
        description:
            "Cleaning and household-care product categories for commercial, retail and distribution requirements.",
        image:
            "/images/products/general-merchandise/cleaning-products.webp",
        tags: ["Cleaning", "Household"],
        intro:
            "Cleaning product categories for household, commercial, retail, wholesale and institutional sourcing requirements.",
        details:
            "Enquiries can be discussed according to product type, intended application, packaging, quantities, destination market and relevant buyer specifications.",
        applications: [
            "Household retail",
            "Commercial and institutional use",
            "Wholesale distribution",
            "Hospitality and facility requirements",
        ],
        requirements: [
            "Cleaning product type",
            "Intended application",
            "Pack size and packaging",
            "Product specifications",
            "Quantity requirements",
            "Destination and market requirements",
        ],
    },
    {
        slug: "stationery",
        number: "06",
        name: "Stationery",
        shortName: "Stationery",
        description:
            "Stationery and everyday office product categories for wholesalers, retailers, institutions and commercial buyers.",
        image:
            "/images/products/general-merchandise/stationery.webp",
        tags: ["Stationery", "Office"],
        intro:
            "Stationery categories for retailers, wholesalers, distributors, offices, institutions and commercial buyers.",
        details:
            "Stationery sourcing requirements can be discussed according to product type, dimensions, materials, colours, packaging, quantities and intended market.",
        applications: [
            "Retail and wholesale",
            "Office and workplace supplies",
            "Educational and institutional requirements",
            "Corporate and commercial sourcing",
        ],
        requirements: [
            "Stationery product type",
            "Material and dimensions",
            "Colour and design",
            "Packaging and presentation",
            "Quantity requirements",
            "Destination market",
        ],
    },
    {
        slug: "office-products",
        number: "07",
        name: "Office Products",
        shortName: "Office Products",
        description:
            "Office and workplace product categories for businesses, distributors, retailers and institutional requirements.",
        image:
            "/images/products/general-merchandise/office-products.webp",
        tags: ["Office", "Business"],
        intro:
            "Office product categories for businesses, retailers, distributors, wholesalers and institutional sourcing requirements.",
        details:
            "Requirements can be reviewed according to product function, specifications, materials, dimensions, packaging, quantities and destination market.",
        applications: [
            "Corporate and workplace use",
            "Retail and wholesale distribution",
            "Institutional procurement",
            "Commercial office requirements",
        ],
        requirements: [
            "Office product type",
            "Material and dimensions",
            "Functional specifications",
            "Packaging requirements",
            "Quantity",
            "Destination market",
        ],
    },
    {
        slug: "promotional-products",
        number: "08",
        name: "Promotional Products",
        shortName: "Promotional Products",
        description:
            "Promotional and corporate merchandise categories for businesses, organisations and commercial campaigns.",
        image:
            "/images/products/general-merchandise/promotional-products.webp",
        tags: ["Promotional", "Corporate"],
        intro:
            "Promotional merchandise categories for businesses, organisations, retailers and corporate sourcing requirements.",
        details:
            "Buyer-specific promotional requirements can be discussed around product selection, branding, colours, quantities, packaging and delivery requirements.",
        applications: [
            "Corporate promotions",
            "Events and campaigns",
            "Marketing and promotional programmes",
            "Organisation and institutional requirements",
        ],
        requirements: [
            "Promotional product type",
            "Branding and artwork",
            "Colours and materials",
            "Quantity and packaging",
            "Required delivery schedule",
            "Destination market",
        ],
    },
    {
        slug: "toys-and-games",
        number: "09",
        name: "Toys & Games",
        shortName: "Toys & Games",
        description:
            "Toy and game product categories for retailers, wholesalers, distributors and consumer-goods sourcing.",
        image:
            "/images/products/general-merchandise/toys-and-games.webp",
        tags: ["Toys", "Games"],
        intro:
            "Toys and games categories for retailers, distributors, wholesalers and consumer-goods buyers sourcing for international markets.",
        details:
            "Requirements can be discussed according to product type, age suitability, materials, dimensions, packaging, quantities and destination market requirements.",
        applications: [
            "Toy and game retail",
            "Wholesale distribution",
            "Consumer-goods sourcing",
            "Commercial and promotional requirements",
        ],
        requirements: [
            "Toy or game category",
            "Materials and dimensions",
            "Age suitability",
            "Packaging and labelling",
            "Quantity requirements",
            "Destination and applicable market requirements",
        ],
    },
    {
        slug: "sports-and-leisure",
        number: "10",
        name: "Sports & Leisure",
        shortName: "Sports & Leisure",
        description:
            "Sports, recreation and leisure product categories for retail, wholesale and commercial sourcing requirements.",
        image:
            "/images/products/general-merchandise/sports-and-leisure.webp",
        tags: ["Sports", "Leisure"],
        intro:
            "Sports, recreation and leisure products for retailers, distributors, wholesalers and commercial buyers.",
        details:
            "Sourcing requirements can be discussed according to product type, intended application, materials, dimensions, colours, packaging and quantities.",
        applications: [
            "Sports and recreation retail",
            "Wholesale and distribution",
            "Leisure and lifestyle businesses",
            "Institutional and commercial requirements",
        ],
        requirements: [
            "Product type and application",
            "Material and construction",
            "Dimensions and specifications",
            "Colours and finish",
            "Packaging and quantity",
            "Destination market",
        ],
    },
    {
        slug: "travel-accessories",
        number: "11",
        name: "Travel Accessories",
        shortName: "Travel Accessories",
        description:
            "Travel accessory categories for retailers, distributors, wholesalers and international consumer-goods sourcing.",
        image:
            "/images/products/general-merchandise/travel-accessories.webp",
        tags: ["Travel", "Accessories"],
        intro:
            "Travel accessory categories for retailers, wholesalers, distributors and international consumer-goods sourcing requirements.",
        details:
            "Requirements can be discussed according to product type, materials, dimensions, colours, features, packaging and commercial quantities.",
        applications: [
            "Travel and lifestyle retail",
            "Wholesale distribution",
            "Consumer-goods sourcing",
            "Commercial and promotional use",
        ],
        requirements: [
            "Travel accessory type",
            "Materials and dimensions",
            "Functional requirements",
            "Colour and finish",
            "Packaging and quantity",
            "Destination market",
        ],
    },
    {
        slug: "custom-merchandise-requirements",
        number: "12",
        name: "Custom Merchandise Requirements",
        shortName: "Custom Requirements",
        description:
            "Buyer-specific general merchandise requirements can be discussed according to product, specifications, quantities and destination market.",
        image:
            "/images/products/general-merchandise/custom-merchandise-requirements.webp",
        tags: ["Custom", "Buyer-Specific"],
        intro:
            "Have a merchandise requirement that does not fit neatly into one of the listed categories? Share the product details and we can discuss the sourcing requirement.",
        details:
            "Buyer-specific requirements can be reviewed according to product specifications, materials, dimensions, colours, packaging, labelling, quantities, destination market and other commercial considerations.",
        applications: [
            "Buyer-specific product sourcing",
            "Private-label requirements",
            "Custom commercial requirements",
            "Specialised retail and distribution needs",
        ],
        requirements: [
            "Product description or reference",
            "Technical or product specifications",
            "Material, size or dimensions",
            "Packaging and labelling",
            "Required quantity",
            "Destination market",
        ],
    },
];

export function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((item) => item.slug === slug);

    if (!category) {
        return {};
    }

    return {
        title: `${category.name} | General Merchandise Sourcing | Al Huda`,
        description: `${category.description} Explore sourcing options from India for international buyers, importers, distributors, wholesalers and retailers.`,
        keywords: [
            `${category.name.toLowerCase()} supplier India`,
            `${category.name.toLowerCase()} exporter India`,
            `${category.name.toLowerCase()} sourcing India`,
            `${category.name.toLowerCase()} wholesale India`,
            "general merchandise exporter India",
            "general merchandise supplier India",
            "general merchandise sourcing India",
            "Indian consumer goods supplier",
        ],
        alternates: {
            canonical: `/products/general-merchandise/${category.slug}`,
        },
        openGraph: {
            title: `${category.name} | Al Huda`,
            description: category.description,
            type: "website",
            images: [
                {
                    url: category.image,
                    alt: category.name,
                },
            ],
        },
    };
}

export default async function GeneralMerchandiseCategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const categoryIndex = categories.findIndex(
        (category) => category.slug === slug
    );

    if (categoryIndex === -1) {
        notFound();
    }

    const category = categories[categoryIndex];

    const previousCategory =
        categories[
        (categoryIndex - 1 + categories.length) % categories.length
        ];

    const nextCategory =
        categories[(categoryIndex + 1) % categories.length];

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#6f8881]"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-[#087d68]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <Link
                            href="/our-products"
                            className="transition hover:text-[#087d68]"
                        >
                            Our Products
                        </Link>

                        <span>/</span>

                        <Link
                            href="/products/general-merchandise"
                            className="transition hover:text-[#087d68]"
                        >
                            General Merchandise
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {category.name}
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    General Merchandise / {category.number}
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                {category.name}
                                <span className="block text-[#07846d]">
                                    for global sourcing.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {category.description}
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(category.name)}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#category-details"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Category
                                </a>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={category.image}
                                    alt={`${category.name} general merchandise products`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Merchandise Category
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {category.name} for international buyers and commercial sourcing.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    {category.number}
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Category
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                QUICK NAVIGATION
            ========================================================= */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#category-details"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Overview
                        </a>

                        <a
                            href="#applications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Applications
                        </a>

                        <a
                            href="#requirements"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Requirements
                        </a>

                        <a
                            href="#sourcing"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Sourcing
                        </a>

                        <a
                            href="#enquiry"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Enquiry
                        </a>

                    </nav>

                </div>

            </section>


            {/* =========================================================
                OVERVIEW
            ========================================================= */}

            <section
                id="category-details"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Category overview
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Source {category.shortName.toLowerCase()} around your commercial requirement.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {category.intro}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                {category.details}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">

                                {category.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-[#edf7f3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#438275]"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                APPLICATIONS
            ========================================================= */}

            <section
                id="applications"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Applications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Built around different commercial requirements.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                This category can support different sourcing and distribution
                                requirements depending on the buyer, product specification,
                                quantity and destination market.
                            </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {category.applications.map((application, index) => (
                                <div
                                    key={application}
                                    className="rounded-2xl border border-[#dfeae5] bg-white p-7"
                                >

                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                        {application}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                        Requirements can be discussed according to the
                                        intended application, market and commercial
                                        specifications.
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                REQUIREMENTS
            ========================================================= */}

            <section
                id="requirements"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src={category.image}
                                alt={`${category.name} sourcing`}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/60 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Specification-led sourcing
                                </span>

                            </div>

                        </div>

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Buyer requirements
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Start with the product details that matter.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Clear product and specification information helps establish
                                the right starting point for a sourcing enquiry.
                            </p>

                            <div className="mt-8 space-y-3">

                                {category.requirements.map((requirement) => (
                                    <RequirementItem
                                        key={requirement}
                                        text={requirement}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                SOURCING PROCESS
            ========================================================= */}

            <section
                id="sourcing"
                className="scroll-mt-20 bg-[#123b34] text-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    How it works
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                From {category.shortName.toLowerCase()} requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear product, specification and destination requirement
                                gives our team a better starting point for exploring
                                suitable sourcing and trade options.
                            </p>

                        </div>

                        <div className="space-y-3">

                            {[
                                {
                                    number: "01",
                                    title: "Tell us what you need",
                                    text: `Share the ${category.shortName.toLowerCase()} product, specifications, quantity, destination and any available product information.`,
                                },
                                {
                                    number: "02",
                                    title: "Review sourcing options",
                                    text: "We explore suitable sourcing possibilities based on the product category, buyer requirement and intended market.",
                                },
                                {
                                    number: "03",
                                    title: "Confirm specifications",
                                    text: "Product details, materials, sizes, colours, packaging, quantities and other requirements are reviewed before proceeding.",
                                },
                                {
                                    number: "04",
                                    title: "Coordinate the trade",
                                    text: "Once commercial terms are agreed, relevant documentation, packaging and shipment requirements can be coordinated.",
                                },
                            ].map((step) => (
                                <div
                                    key={step.number}
                                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.075]"
                                >

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4fae98]/40 text-xs font-semibold text-[#73d1b8]">
                                        {step.number}
                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-white">
                                            {step.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-[#aacbc3]">
                                            {step.text}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CATEGORY NAVIGATION
            ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

                    <div className="mb-8">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Browse categories
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                            Continue exploring general merchandise.
                        </h2>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">

                        <CategoryNavigationCard
                            href={`/products/general-merchandise/${previousCategory.slug}`}
                            label="Previous category"
                            title={previousCategory.name}
                            direction="←"
                        />

                        <Link
                            href="/products/general-merchandise"
                            className="group flex min-h-[110px] items-center justify-between rounded-2xl border border-[#b8d9cf] bg-[#edf7f3] p-5 transition hover:bg-[#e4f3ed]"
                        >

                            <div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                                    All categories
                                </span>

                                <span className="mt-2 block text-sm font-semibold text-[#345850]">
                                    General Merchandise
                                </span>
                            </div>

                            <span className="text-[#087d68]">
                                ↗
                            </span>

                        </Link>

                        <CategoryNavigationCard
                            href={`/products/general-merchandise/${nextCategory.slug}`}
                            label="Next category"
                            title={nextCategory.name}
                            direction="→"
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
                RELATED PRODUCTS
            ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

                    <div className="mb-8">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Other product categories
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                            Explore other sourcing categories.
                        </h2>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        <RelatedCategory
                            href="/products/food-products"
                            title="Food Products"
                        />

                        <RelatedCategory
                            href="/products/textiles-and-apparels"
                            title="Textiles & Apparels"
                        />

                        <RelatedCategory
                            href="/products/engineering-goods"
                            title="Engineering Goods"
                        />

                        <RelatedCategory
                            href="/products/automotive-components"
                            title="Automotive Components"
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section
                id="enquiry"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#07846d] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">

                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                            <span className="text-lg">
                                ↗
                            </span>
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                            {category.name} sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {category.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, specifications, quantity, destination
                            market and any packaging or product information you have.
                            We&apos;ll use your requirement as the starting point for the
                            conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(category.name)}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/products/general-merchandise"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to General Merchandise
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   REQUIREMENT ITEM
   =============================================================== */

function RequirementItem({
    text,
}: {
    text: string;
}) {
    return (
        <div className="flex gap-4 rounded-xl border border-[#dce9e4] bg-white p-4">

            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

            <p className="text-sm leading-6 text-[#718680]">
                {text}
            </p>

        </div>
    );
}


/* ===============================================================
   CATEGORY NAVIGATION
   =============================================================== */

function CategoryNavigationCard({
    href,
    label,
    title,
    direction,
}: {
    href: string;
    label: string;
    title: string;
    direction: string;
}) {
    return (
        <Link
            href={href}
            className="group flex min-h-[110px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-white p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                    {label}
                </span>

                <span className="mt-2 block text-sm font-semibold text-[#345850]">
                    {title}
                </span>

            </div>

            <span className="text-lg text-[#087d68] transition-transform group-hover:translate-x-1">
                {direction}
            </span>

        </Link>
    );
}


/* ===============================================================
   RELATED CATEGORY
   =============================================================== */

function RelatedCategory({
    href,
    title,
}: {
    href: string;
    title: string;
}) {
    return (
        <Link
            href={href}
            className="group flex min-h-[100px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-white p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <span className="max-w-[180px] text-sm font-semibold leading-5 text-[#345850]">
                {title}
            </span>

            <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                →
            </span>

        </Link>
    );
}

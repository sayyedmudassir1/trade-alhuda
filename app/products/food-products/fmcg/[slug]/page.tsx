import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type FMCGProduct = {
    slug: string;
    number: string;
    name: string;
    shortName: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    category: string;
    applications: string[];
    specifications: string[];
    packaging: string[];
    buyerTypes: string[];
};

const fmcgProducts: FMCGProduct[] = [
    {
        slug: "biscuits-cookies",
        number: "01",
        name: "Biscuits & Cookies",
        shortName: "Biscuits & Cookies",
        description:
            "Packaged biscuits and cookies for international distributors, retailers, supermarkets and food businesses.",
        longDescription:
            "Source biscuits and cookies for retail distribution, grocery networks, supermarkets, ethnic food stores and commercial food businesses. Product formats, flavours, pack sizes, packaging and destination-market requirements can be discussed according to the enquiry.",
        image:
            "/images/products/food-products/fmcg/biscuits-cookies.webp",
        tags: ["Packaged", "Retail", "Bakery"],
        category: "FMCG",
        applications: [
            "Retail grocery",
            "Supermarkets",
            "Ethnic food stores",
            "Wholesale distribution",
            "Foodservice",
        ],
        specifications: [
            "Product type and variety",
            "Flavour and formulation",
            "Retail pack size",
            "Case configuration",
            "Shelf-life requirement",
            "Destination-market requirements",
        ],
        packaging: [
            "Retail-ready packs",
            "Multi-pack formats",
            "Master cartons",
            "Buyer-specific labelling",
        ],
        buyerTypes: [
            "FMCG distributors",
            "Importers",
            "Supermarket groups",
            "Wholesale buyers",
            "Retail businesses",
        ],
    },

    {
        slug: "namkeen-snacks",
        number: "02",
        name: "Namkeen & Snacks",
        shortName: "Namkeen & Snacks",
        description:
            "Indian savoury snacks and packaged namkeen for retailers, distributors, wholesalers and international grocery markets.",
        longDescription:
            "Explore packaged Indian namkeen and savoury snack categories for international grocery distribution. Different snack varieties, flavours, pack formats, quantities and market-specific requirements can be discussed as part of the sourcing process.",
        image:
            "/images/products/food-products/fmcg/namkeen-snacks.webp",
        tags: ["Snacks", "Indian", "Retail"],
        category: "FMCG",
        applications: [
            "Ethnic grocery",
            "Retail stores",
            "Supermarkets",
            "Wholesale",
            "Convenience retail",
        ],
        specifications: [
            "Snack variety",
            "Flavour profile",
            "Pack size",
            "Packaging format",
            "Shelf life",
            "Market requirements",
        ],
        packaging: [
            "Retail pouches",
            "Multi-packs",
            "Master cartons",
            "Private-label packaging where applicable",
        ],
        buyerTypes: [
            "Ethnic food importers",
            "FMCG distributors",
            "Retailers",
            "Wholesalers",
            "Supermarkets",
        ],
    },

    {
        slug: "instant-foods",
        number: "03",
        name: "Instant Foods",
        shortName: "Instant Foods",
        description:
            "Instant mixes, quick-cooking products and convenient packaged foods for international retail and distribution.",
        longDescription:
            "Instant food products offer convenient preparation formats for retail and grocery markets. Product type, preparation format, pack size, packaging, shelf-life and destination-market specifications can be discussed according to buyer requirements.",
        image:
            "/images/products/food-products/fmcg/instant-foods.webp",
        tags: ["Convenience", "Packaged", "Retail"],
        category: "FMCG",
        applications: [
            "Retail grocery",
            "Convenience stores",
            "Supermarkets",
            "Ethnic food distribution",
            "Foodservice",
        ],
        specifications: [
            "Product category",
            "Preparation method",
            "Ingredients and formulation",
            "Pack size",
            "Shelf life",
            "Destination requirements",
        ],
        packaging: [
            "Retail pouches",
            "Boxes",
            "Multi-unit cartons",
            "Master cartons",
        ],
        buyerTypes: [
            "Food importers",
            "Retail distributors",
            "Supermarkets",
            "Grocery wholesalers",
            "Food businesses",
        ],
    },

    {
        slug: "ready-to-eat-foods",
        number: "04",
        name: "Ready-to-Eat Foods",
        shortName: "Ready-to-Eat Foods",
        description:
            "Convenient packaged ready-to-eat food products for retail, foodservice, distributors and international markets.",
        longDescription:
            "Ready-to-eat food products can provide convenient meal solutions for international retail and foodservice markets. Product varieties, pack formats, quantities, shelf-life requirements and destination-market specifications can be reviewed during enquiry.",
        image:
            "/images/products/food-products/fmcg/ready-to-eat-foods.webp",
        tags: ["Ready-to-Eat", "Convenience", "Packaged"],
        category: "FMCG",
        applications: [
            "Retail",
            "Convenience food",
            "Foodservice",
            "Ethnic grocery",
            "International distribution",
        ],
        specifications: [
            "Meal/product type",
            "Serving format",
            "Ingredients",
            "Pack size",
            "Shelf life",
            "Storage requirements",
        ],
        packaging: [
            "Retail packs",
            "Single-serving formats",
            "Multi-packs",
            "Master cartons",
        ],
        buyerTypes: [
            "Food importers",
            "FMCG distributors",
            "Retailers",
            "Foodservice businesses",
            "Wholesalers",
        ],
    },

    {
        slug: "pickles",
        number: "05",
        name: "Pickles",
        shortName: "Pickles",
        description:
            "Indian pickles and preserved food products for ethnic grocery, retail, wholesale and international distribution.",
        longDescription:
            "Indian pickles are widely used as accompaniments and flavour products across South Asian food markets. Product variety, flavour, pack size, packaging, shelf life and destination requirements can be discussed for commercial sourcing.",
        image:
            "/images/products/food-products/fmcg/pickles.webp",
        tags: ["Preserved", "Indian", "Retail"],
        category: "FMCG",
        applications: [
            "Ethnic grocery",
            "Retail",
            "Restaurants",
            "Foodservice",
            "Wholesale",
        ],
        specifications: [
            "Pickle variety",
            "Flavour profile",
            "Pack size",
            "Packaging",
            "Shelf life",
            "Storage requirements",
        ],
        packaging: [
            "Jars",
            "Retail containers",
            "Multi-packs",
            "Master cartons",
        ],
        buyerTypes: [
            "Ethnic food importers",
            "Distributors",
            "Retailers",
            "Wholesalers",
            "Restaurants",
        ],
    },

    {
        slug: "sauces-ketchup",
        number: "06",
        name: "Sauces & Ketchup",
        shortName: "Sauces & Ketchup",
        description:
            "Packaged sauces, ketchup and condiments for retailers, foodservice businesses and commercial distributors.",
        longDescription:
            "Source packaged sauces, ketchup and related condiments for retail and foodservice applications. Product formulation, flavour, packaging, pack size, quantity and destination-market requirements can be discussed during the enquiry.",
        image:
            "/images/products/food-products/fmcg/sauces-ketchup.webp",
        tags: ["Condiments", "Retail", "Packaged"],
        category: "FMCG",
        applications: [
            "Retail grocery",
            "Restaurants",
            "Foodservice",
            "Fast-food businesses",
            "Wholesale distribution",
        ],
        specifications: [
            "Sauce type",
            "Flavour",
            "Formulation",
            "Pack size",
            "Shelf life",
            "Storage requirements",
        ],
        packaging: [
            "Bottles",
            "Retail containers",
            "Foodservice packs",
            "Master cartons",
        ],
        buyerTypes: [
            "Food distributors",
            "Restaurants",
            "Retailers",
            "Foodservice buyers",
            "Wholesalers",
        ],
    },

    {
        slug: "papad",
        number: "07",
        name: "Papad",
        shortName: "Papad",
        description:
            "Traditional Indian papad products for ethnic food retailers, distributors, wholesalers and international grocery markets.",
        longDescription:
            "Papad is a traditional Indian food accompaniment available in different varieties and preparation formats. Product type, ingredients, size, packaging and commercial quantities can be discussed according to buyer and destination-market requirements.",
        image:
            "/images/products/food-products/fmcg/papad.webp",
        tags: ["Traditional", "Indian", "Packaged"],
        category: "FMCG",
        applications: [
            "Ethnic grocery",
            "Restaurants",
            "Retail",
            "Foodservice",
            "Wholesale",
        ],
        specifications: [
            "Papad variety",
            "Ingredients",
            "Size",
            "Pack size",
            "Shelf life",
            "Packaging requirements",
        ],
        packaging: [
            "Retail packs",
            "Pouches",
            "Multi-packs",
            "Master cartons",
        ],
        buyerTypes: [
            "Indian food importers",
            "Ethnic retailers",
            "Distributors",
            "Restaurants",
            "Wholesalers",
        ],
    },

    {
        slug: "vermicelli-noodles",
        number: "08",
        name: "Vermicelli & Noodles",
        shortName: "Vermicelli & Noodles",
        description:
            "Packaged vermicelli, noodles and convenient staple products for retail and international grocery distribution.",
        longDescription:
            "Vermicelli and noodles are versatile packaged food staples used across household, restaurant and foodservice applications. Different product types, pack sizes, packaging formats and commercial quantities can be discussed.",
        image:
            "/images/products/food-products/fmcg/vermicelli-noodles.webp",
        tags: ["Staples", "Packaged", "Convenience"],
        category: "FMCG",
        applications: [
            "Retail grocery",
            "Restaurants",
            "Foodservice",
            "Ethnic grocery",
            "Wholesale",
        ],
        specifications: [
            "Product type",
            "Ingredient composition",
            "Thickness or format",
            "Pack size",
            "Shelf life",
            "Storage requirements",
        ],
        packaging: [
            "Retail packs",
            "Pouches",
            "Boxes",
            "Master cartons",
        ],
        buyerTypes: [
            "Food importers",
            "Grocery distributors",
            "Retailers",
            "Wholesalers",
            "Foodservice businesses",
        ],
    },

    {
        slug: "breakfast-cereals",
        number: "09",
        name: "Breakfast Cereals",
        shortName: "Breakfast Cereals",
        description:
            "Packaged breakfast cereals and grain-based convenience products for supermarkets, retailers and distributors.",
        longDescription:
            "Breakfast cereal products can be sourced for retail and grocery markets, including supermarkets and convenience channels. Product type, formulation, pack size, packaging and destination-market requirements can be reviewed during enquiry.",
        image:
            "/images/products/food-products/fmcg/breakfast-cereals.webp",
        tags: ["Breakfast", "Retail", "Packaged"],
        category: "FMCG",
        applications: [
            "Supermarkets",
            "Retail grocery",
            "Convenience stores",
            "Wholesale",
            "Foodservice",
        ],
        specifications: [
            "Cereal type",
            "Ingredient profile",
            "Flavour",
            "Pack size",
            "Shelf life",
            "Market requirements",
        ],
        packaging: [
            "Boxes",
            "Pouches",
            "Multi-packs",
            "Master cartons",
        ],
        buyerTypes: [
            "FMCG importers",
            "Supermarkets",
            "Retail distributors",
            "Wholesalers",
            "Grocery retailers",
        ],
    },

    {
        slug: "health-drinks-beverages",
        number: "10",
        name: "Health Drinks & Beverages",
        shortName: "Health Drinks & Beverages",
        description:
            "Packaged beverage and drink-mix categories for distributors, retailers and international consumer markets.",
        longDescription:
            "Explore packaged beverage and drink-mix categories for international retail and distribution. Product formulation, format, pack size, packaging, shelf life and market-specific requirements can be discussed based on the enquiry.",
        image:
            "/images/products/food-products/fmcg/health-drinks-beverages.webp",
        tags: ["Beverages", "Packaged", "Retail"],
        category: "FMCG",
        applications: [
            "Retail",
            "Supermarkets",
            "Convenience stores",
            "Foodservice",
            "Wholesale",
        ],
        specifications: [
            "Beverage type",
            "Flavour",
            "Formulation",
            "Pack size",
            "Shelf life",
            "Storage requirements",
        ],
        packaging: [
            "Bottles",
            "Sachets",
            "Boxes",
            "Multi-packs",
        ],
        buyerTypes: [
            "Beverage importers",
            "FMCG distributors",
            "Retailers",
            "Supermarkets",
            "Wholesalers",
        ],
    },

    {
        slug: "cooking-oils",
        number: "11",
        name: "Cooking Oils",
        shortName: "Cooking Oils",
        description:
            "Edible cooking oils and packaged oil products for grocery distributors, wholesalers, retailers and food businesses.",
        longDescription:
            "Cooking oils are everyday food staples used by households, restaurants and food businesses. Product type, oil variety, pack size, packaging, quantity and destination-market requirements can be discussed for commercial sourcing.",
        image:
            "/images/products/food-products/fmcg/cooking-oils.webp",
        tags: ["Staples", "Retail", "Bulk"],
        category: "FMCG",
        applications: [
            "Household retail",
            "Restaurants",
            "Foodservice",
            "Wholesale",
            "Food manufacturing",
        ],
        specifications: [
            "Oil type",
            "Grade",
            "Pack size",
            "Packaging format",
            "Quantity",
            "Destination requirements",
        ],
        packaging: [
            "Retail bottles",
            "Containers",
            "Bulk formats",
            "Master cartons",
        ],
        buyerTypes: [
            "Food importers",
            "Distributors",
            "Retailers",
            "Restaurants",
            "Wholesalers",
        ],
    },

    {
        slug: "sugar-salt",
        number: "12",
        name: "Sugar & Salt",
        shortName: "Sugar & Salt",
        description:
            "Packaged household and foodservice staples including sugar, salt and related everyday grocery products.",
        longDescription:
            "Sugar and salt are essential grocery staples used across households, restaurants, foodservice and food manufacturing. Product grade, pack size, packaging and commercial quantity can be discussed according to the intended market.",
        image:
            "/images/products/food-products/fmcg/sugar-salt.webp",
        tags: ["Staples", "Retail", "Bulk"],
        category: "FMCG",
        applications: [
            "Retail grocery",
            "Foodservice",
            "Restaurants",
            "Food manufacturing",
            "Wholesale",
        ],
        specifications: [
            "Product type",
            "Grade",
            "Granulation where applicable",
            "Pack size",
            "Quantity",
            "Destination market",
        ],
        packaging: [
            "Retail packs",
            "Foodservice packs",
            "Multi-packs",
            "Bulk formats",
        ],
        buyerTypes: [
            "Food importers",
            "Grocery distributors",
            "Retailers",
            "Food manufacturers",
            "Wholesalers",
        ],
    },
];

export async function generateStaticParams() {
    return fmcgProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = fmcgProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
            title: "FMCG Product | Al Huda",
            description:
                "Explore FMCG products sourced from India by Al Huda.",
        };
    }

    return {
        title: `${product.name} | Indian FMCG Sourcing & Export | Al Huda`,
        description: `${product.description} Explore sourcing, packaging and commercial requirements with Al Huda.`,
        keywords: [
            `${product.name} exporter India`,
            `${product.name} supplier India`,
            `${product.name} wholesale India`,
            `Indian ${product.name} exporter`,
            "Indian FMCG exporter",
            "FMCG supplier India",
            "FMCG sourcing India",
            "packaged food exporter India",
        ],
        alternates: {
            canonical: `/products/food-products/fmcg/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.description,
            type: "website",
        },
    };
}

export default async function FMCGProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = fmcgProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const relatedProducts = fmcgProducts
        .filter((item) => item.slug !== product.slug)
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#6f8881]"
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
                            href="/products/food-products"
                            className="transition hover:text-[#087d68]"
                        >
                            Food Products
                        </Link>

                        <span>/</span>

                        <Link
                            href="/products/food-products/fmcg"
                            className="transition hover:text-[#087d68]"
                        >
                            FMCG
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>
                    </nav>

                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    FMCG / {product.name}
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                {product.name}
                                <span className="block text-[#07846d]">
                                    for global markets.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-[#bdd7ce] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#438275]"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(
                                        product.name
                                    )}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#specifications"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    View Specifications
                                </a>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} sourced from India`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Product Category
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Indian FMCG sourcing
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    {product.number}
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    FMCG category
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
                            href="#overview"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Overview
                        </a>

                        <a
                            href="#specifications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Specifications
                        </a>

                        <a
                            href="#packaging"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Packaging
                        </a>

                        <a
                            href="#buyers"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Buyers
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
                id="overview"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product overview
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                {product.name} sourcing for international buyers.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.longDescription}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product availability, specifications, commercial
                                quantities, packaging and destination-market
                                requirements can be discussed as part of the
                                sourcing enquiry.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                APPLICATIONS
            ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Applications
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Suitable for a range of commercial channels.
                        </h2>

                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                        {product.applications.map((application, index) => (
                            <div
                                key={application}
                                className="rounded-2xl border border-[#dfeae5] bg-white p-6"
                            >

                                <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-6 text-sm font-semibold leading-6 text-[#23463f]">
                                    {application}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                SPECIFICATIONS
            ========================================================= */}

            <section
                id="specifications"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-2">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product specifications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Specifications can be aligned to your requirement.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-[#657d77]">
                                Share the specifications that matter for your
                                market and purchasing requirement. The final
                                product details can be reviewed during the
                                sourcing process.
                            </p>

                        </div>

                        <div className="space-y-3">

                            {product.specifications.map((specification) => (
                                <div
                                    key={specification}
                                    className="flex gap-4 rounded-xl border border-[#dce9e4] bg-[#f8fbf9] p-4"
                                >

                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

                                    <span className="text-sm leading-6 text-[#516d66]">
                                        {specification}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                PACKAGING
            ========================================================= */}

            <section
                id="packaging"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Packaging
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Packaging and presentation for your market.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-[#637a74]">
                                Packaging requirements can vary according to
                                product type, destination market, retail
                                channel and buyer requirements.
                            </p>

                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.packaging.map((item, index) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[#d7e6e0] bg-white p-6"
                                >

                                    <span className="text-xs font-semibold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-5 text-sm font-semibold text-[#23463f]">
                                        {item}
                                    </h3>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BUYER TYPES
            ========================================================= */}

            <section
                id="buyers"
                className="scroll-mt-20 bg-[#123b34] text-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    Commercial buyers
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                Built around commercial sourcing requirements.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                This product category can be relevant to different
                                types of international buyers and distribution
                                businesses.
                            </p>

                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.buyerTypes.map((buyer, index) => (
                                <div
                                    key={buyer}
                                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-6"
                                >

                                    <span className="text-xs font-semibold text-[#73d1b8]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-5 text-sm font-semibold text-white">
                                        {buyer}
                                    </h3>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RELATED PRODUCTS
            ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                More FMCG
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Explore related FMCG products.
                        </h2>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.slug}
                                href={`/products/food-products/fmcg/${relatedProduct.slug}`}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-[#f8fbf9] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,70,60,0.08)]"
                            >

                                <div className="relative aspect-[1.15] overflow-hidden">

                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/65 via-transparent to-transparent" />

                                    <div className="absolute bottom-4 left-4 right-4">

                                        <h3 className="text-xl font-semibold text-white">
                                            {relatedProduct.name}
                                        </h3>

                                    </div>

                                </div>

                                <div className="flex items-center justify-between p-5">

                                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#087d68]">
                                        Explore
                                    </span>

                                    <span className="text-lg text-[#087d68] transition-transform group-hover:translate-x-1">
                                        →
                                    </span>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                RELATED FOOD CATEGORIES
            ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Continue exploring
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                            Other food categories.
                        </h2>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                        <RelatedCategory
                            href="/products/food-products/grains"
                            title="Cereals, Pulses & Flours"
                        />

                        <RelatedCategory
                            href="/products/food-products/spices"
                            title="Spices"
                        />

                        <RelatedCategory
                            href="/products/food-products/fruits-and-vegetables"
                            title="Fruits & Vegetables"
                        />

                        <RelatedCategory
                            href="/products/food-products/frozen-foods"
                            title="Frozen Foods"
                        />

                        <RelatedCategory
                            href="/products/food-products/tea-and-coffee"
                            title="Tea & Coffee"
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section
                id="enquiry"
                className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#07846d] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">

                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                            <span className="text-lg">
                                ↗
                            </span>
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                            {product.name} sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking to source {product.name}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your required quantity, specifications,
                            packaging requirements and destination market.
                            We&apos;ll use your requirement as the starting point
                            for the sourcing conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(
                                    product.name
                                )}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/products/food-products/fmcg"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to FMCG
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
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

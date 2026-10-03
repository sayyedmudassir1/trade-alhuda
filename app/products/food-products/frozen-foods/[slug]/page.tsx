import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type FrozenProduct = {
    slug: string;
    number: string;
    name: string;
    shortName: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    applications: string[];
    formats: string[];
    specifications: string[];
    buyerTypes: string[];
    relatedSlugs: string[];
};

const frozenProducts: FrozenProduct[] = [
    {
        slug: "frozen-vegetables",
        number: "01",
        name: "Frozen Vegetables",
        shortName: "Frozen Vegetables",
        description:
            "Frozen vegetables sourced for retail, foodservice, distribution, processing and commercial food requirements.",
        longDescription:
            "Explore frozen vegetable sourcing options for international buyers, distributors, retailers, restaurants, foodservice businesses and food manufacturers. Product selection, cut, grade, pack size, quantity and destination requirements can be discussed as part of the enquiry.",
        image: "/images/products/food-products/frozen-vegetables.webp",
        tags: ["Frozen", "Vegetables", "Bulk"],
        applications: [
            "Retail and supermarkets",
            "Restaurants and foodservice",
            "Food manufacturing",
            "Wholesale distribution",
            "Institutional kitchens",
            "Commercial food preparation",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Buyer-specific packaging",
        ],
        specifications: [
            "Vegetable type",
            "Cut and preparation",
            "Grade and size",
            "Pack size",
            "Quantity",
            "Destination market",
        ],
        buyerTypes: [
            "Importers",
            "Food distributors",
            "Retailers",
            "Restaurants",
            "Food manufacturers",
            "Foodservice companies",
        ],
        relatedSlugs: [
            "frozen-green-peas",
            "frozen-corn",
            "frozen-mixed-vegetables",
        ],
    },

    {
        slug: "frozen-fruits",
        number: "02",
        name: "Frozen Fruits",
        shortName: "Frozen Fruits",
        description:
            "Frozen fruits for food manufacturers, beverage businesses, distributors, retailers and commercial applications.",
        longDescription:
            "Frozen fruit sourcing for international food businesses requiring convenient fruit ingredients for retail, beverages, desserts, food manufacturing and foodservice applications. Product form, pack size, quantity and destination requirements can be discussed.",
        image: "/images/products/food-products/frozen-fruits.webp",
        tags: ["Frozen", "Fruit", "Seasonal"],
        applications: [
            "Smoothies and beverages",
            "Desserts",
            "Food manufacturing",
            "Retail",
            "Foodservice",
            "Fruit distribution",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial ingredient formats",
        ],
        specifications: [
            "Fruit variety",
            "Whole or cut format",
            "Grade",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Fruit importers",
            "Distributors",
            "Retailers",
            "Beverage businesses",
            "Food manufacturers",
            "Foodservice buyers",
        ],
        relatedSlugs: [
            "frozen-vegetables",
            "frozen-green-peas",
            "frozen-ready-to-cook",
        ],
    },

    {
        slug: "frozen-green-peas",
        number: "03",
        name: "Frozen Green Peas",
        shortName: "Frozen Green Peas",
        description:
            "Frozen green peas for retail, foodservice, restaurants, food manufacturers and wholesale distribution.",
        longDescription:
            "Frozen green peas sourced for commercial food applications including retail, restaurants, foodservice, catering, food manufacturing and wholesale distribution. Quantity, packaging and destination requirements can be discussed according to the buyer's needs.",
        image: "/images/products/food-products/frozen-green-peas.webp",
        tags: ["Frozen", "Vegetable", "Bulk"],
        applications: [
            "Retail",
            "Restaurants",
            "Foodservice",
            "Prepared foods",
            "Food manufacturing",
            "Wholesale distribution",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial formats",
        ],
        specifications: [
            "Pea grade",
            "Size",
            "Pack size",
            "Quantity",
            "Packaging",
            "Destination market",
        ],
        buyerTypes: [
            "Importers",
            "Wholesalers",
            "Retailers",
            "Restaurants",
            "Food manufacturers",
            "Distributors",
        ],
        relatedSlugs: [
            "frozen-mixed-vegetables",
            "frozen-corn",
            "frozen-spinach",
        ],
    },

    {
        slug: "frozen-corn",
        number: "04",
        name: "Frozen Sweet Corn",
        shortName: "Frozen Sweet Corn",
        description:
            "Frozen sweet corn for foodservice, retail, processing, prepared foods and commercial food requirements.",
        longDescription:
            "Frozen sweet corn for international buyers seeking convenient frozen vegetable supply for retail, foodservice, restaurants, food manufacturers and prepared-food applications.",
        image: "/images/products/food-products/frozen-corn.webp",
        tags: ["Frozen", "Sweet Corn", "Bulk"],
        applications: [
            "Retail",
            "Restaurants",
            "Pizza and prepared foods",
            "Food manufacturing",
            "Foodservice",
            "Wholesale distribution",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial ingredient formats",
        ],
        specifications: [
            "Corn type",
            "Kernel specification",
            "Grade",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Importers",
            "Retailers",
            "Foodservice distributors",
            "Restaurants",
            "Food manufacturers",
            "Wholesalers",
        ],
        relatedSlugs: [
            "frozen-green-peas",
            "frozen-mixed-vegetables",
            "frozen-vegetables",
        ],
    },

    {
        slug: "frozen-mixed-vegetables",
        number: "05",
        name: "Frozen Mixed Vegetables",
        shortName: "Frozen Mixed Vegetables",
        description:
            "Frozen mixed vegetable selections for restaurants, foodservice, retailers, distributors and food manufacturers.",
        longDescription:
            "Frozen mixed vegetables for commercial kitchens, foodservice businesses, retailers, distributors and food manufacturers. Composition, cut, pack size, quantity and other product requirements can be discussed during sourcing.",
        image: "/images/products/food-products/frozen-mixed-vegetables.webp",
        tags: ["Frozen", "Mixed Vegetables", "Foodservice"],
        applications: [
            "Restaurants",
            "Hotels",
            "Foodservice",
            "Retail",
            "Prepared foods",
            "Food manufacturing",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial packs",
        ],
        specifications: [
            "Vegetable composition",
            "Cut",
            "Grade",
            "Pack size",
            "Quantity",
            "Packaging",
        ],
        buyerTypes: [
            "Foodservice distributors",
            "Importers",
            "Retailers",
            "Hotels",
            "Restaurants",
            "Food manufacturers",
        ],
        relatedSlugs: [
            "frozen-green-peas",
            "frozen-corn",
            "frozen-spinach",
        ],
    },

    {
        slug: "frozen-spinach",
        number: "06",
        name: "Frozen Spinach",
        shortName: "Frozen Spinach",
        description:
            "Frozen spinach for food preparation, foodservice, retail, processing and commercial ingredient requirements.",
        longDescription:
            "Frozen spinach sourced for commercial food applications including foodservice, restaurants, prepared foods, retail and food manufacturing. Product preparation, pack size, quantity and destination can be discussed.",
        image: "/images/products/food-products/frozen-spinach.webp",
        tags: ["Frozen", "Spinach", "Bulk"],
        applications: [
            "Restaurants",
            "Foodservice",
            "Prepared foods",
            "Retail",
            "Food manufacturing",
            "Commercial kitchens",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Ingredient formats",
        ],
        specifications: [
            "Spinach preparation",
            "Cut format",
            "Grade",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Importers",
            "Restaurants",
            "Food manufacturers",
            "Retailers",
            "Foodservice businesses",
            "Distributors",
        ],
        relatedSlugs: [
            "frozen-vegetables",
            "frozen-okras",
            "frozen-mixed-vegetables",
        ],
    },

    {
        slug: "frozen-okras",
        number: "07",
        name: "Frozen Okra",
        shortName: "Frozen Okra",
        description:
            "Frozen okra for international food businesses, distributors, retailers, restaurants and commercial buyers.",
        longDescription:
            "Frozen okra for international buyers looking for convenient supply for retail, restaurants, foodservice, prepared foods and commercial food applications.",
        image: "/images/products/food-products/frozen-okra.webp",
        tags: ["Frozen", "Okra", "Bulk"],
        applications: [
            "Restaurants",
            "Retail",
            "Foodservice",
            "Prepared foods",
            "Wholesale distribution",
            "Food manufacturing",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial packs",
        ],
        specifications: [
            "Okra size",
            "Cut format",
            "Grade",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Importers",
            "Ethnic food distributors",
            "Retailers",
            "Restaurants",
            "Wholesalers",
            "Foodservice businesses",
        ],
        relatedSlugs: [
            "frozen-spinach",
            "frozen-vegetables",
            "frozen-ready-to-cook",
        ],
    },

    {
        slug: "frozen-fries",
        number: "08",
        name: "Frozen French Fries",
        shortName: "Frozen French Fries",
        description:
            "Frozen potato fries for restaurants, QSRs, foodservice distributors, retailers and commercial food businesses.",
        longDescription:
            "Frozen French fries for restaurants, quick-service restaurants, hotels, catering businesses, foodservice distributors and retail channels. Cut, pack size, quantity and commercial requirements can be discussed.",
        image: "/images/products/food-products/frozen-fries.webp",
        tags: ["Frozen", "Potato", "Foodservice"],
        applications: [
            "Quick-service restaurants",
            "Restaurants",
            "Hotels",
            "Catering",
            "Foodservice",
            "Retail",
        ],
        formats: [
            "Foodservice packs",
            "Retail packs",
            "Bulk cartons",
            "Commercial packs",
        ],
        specifications: [
            "Cut size",
            "Potato specification",
            "Pack size",
            "Quantity",
            "Packaging",
            "Destination",
        ],
        buyerTypes: [
            "QSRs",
            "Restaurants",
            "Foodservice distributors",
            "Importers",
            "Hotels",
            "Retailers",
        ],
        relatedSlugs: [
            "frozen-ready-to-cook",
            "frozen-snacks",
            "frozen-parathas",
        ],
    },

    {
        slug: "frozen-parathas",
        number: "09",
        name: "Frozen Parathas",
        shortName: "Frozen Parathas",
        description:
            "Frozen Indian flatbreads and parathas for retail, foodservice, restaurants, distributors and food businesses.",
        longDescription:
            "Frozen parathas and Indian flatbreads for international retail, foodservice, restaurants, catering businesses and distributors. Product type, pack format, quantity and destination requirements can be discussed.",
        image: "/images/products/food-products/frozen-parathas.webp",
        tags: ["Frozen", "Indian Food", "Ready-to-Cook"],
        applications: [
            "Retail",
            "Restaurants",
            "Hotels",
            "Catering",
            "Foodservice",
            "Indian food distribution",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial packs",
        ],
        specifications: [
            "Paratha type",
            "Size",
            "Pack size",
            "Quantity",
            "Packaging",
            "Destination",
        ],
        buyerTypes: [
            "Indian food importers",
            "Retailers",
            "Restaurants",
            "Hotels",
            "Foodservice distributors",
            "Wholesalers",
        ],
        relatedSlugs: [
            "frozen-samosas",
            "frozen-snacks",
            "frozen-ready-to-cook",
        ],
    },

    {
        slug: "frozen-samosas",
        number: "10",
        name: "Frozen Samosas",
        shortName: "Frozen Samosas",
        description:
            "Frozen samosas for restaurants, catering, foodservice, retail and international Indian-food distribution.",
        longDescription:
            "Frozen samosas for international restaurants, Indian food distributors, retailers, catering businesses, hotels and foodservice operators. Filling, size, pack format, quantity and destination requirements can be discussed.",
        image: "/images/products/food-products/frozen-samosas.webp",
        tags: ["Frozen", "Indian Food", "Ready-to-Cook"],
        applications: [
            "Restaurants",
            "Catering",
            "Retail",
            "Hotels",
            "Foodservice",
            "Indian food distribution",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial packs",
        ],
        specifications: [
            "Samosa type",
            "Filling",
            "Size",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Restaurants",
            "Indian food importers",
            "Retailers",
            "Caterers",
            "Foodservice distributors",
            "Wholesalers",
        ],
        relatedSlugs: [
            "frozen-parathas",
            "frozen-snacks",
            "frozen-ready-to-cook",
        ],
    },

    {
        slug: "frozen-snacks",
        number: "11",
        name: "Frozen Snacks",
        shortName: "Frozen Snacks",
        description:
            "Frozen Indian and international snack products for foodservice, retail, distributors and commercial buyers.",
        longDescription:
            "Explore frozen snack sourcing options for retailers, restaurants, caterers, foodservice distributors and international food businesses. Product type, preparation, pack size, quantity and destination market can be discussed.",
        image: "/images/products/food-products/frozen-snacks.webp",
        tags: ["Frozen", "Snacks", "Ready-to-Cook"],
        applications: [
            "Retail",
            "Restaurants",
            "Catering",
            "Foodservice",
            "Hotels",
            "Wholesale distribution",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial formats",
        ],
        specifications: [
            "Snack type",
            "Preparation",
            "Size",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Importers",
            "Retailers",
            "Restaurants",
            "Caterers",
            "Foodservice distributors",
            "Wholesalers",
        ],
        relatedSlugs: [
            "frozen-samosas",
            "frozen-parathas",
            "frozen-ready-to-cook",
        ],
    },

    {
        slug: "frozen-ready-to-cook",
        number: "12",
        name: "Ready-to-Cook Foods",
        shortName: "Frozen Ready-to-Cook Foods",
        description:
            "Frozen ready-to-cook products for restaurants, foodservice businesses, retailers and commercial food operations.",
        longDescription:
            "Frozen ready-to-cook products for international buyers seeking convenient food solutions for retail, foodservice, restaurants, catering and commercial kitchens. Product specifications, preparation, packaging, quantity and destination can be discussed.",
        image: "/images/products/food-products/frozen-ready-to-cook.webp",
        tags: ["Frozen", "Ready-to-Cook", "Foodservice"],
        applications: [
            "Retail",
            "Restaurants",
            "Foodservice",
            "Hotels",
            "Catering",
            "Commercial kitchens",
        ],
        formats: [
            "Retail packs",
            "Foodservice packs",
            "Bulk packs",
            "Commercial packs",
        ],
        specifications: [
            "Product type",
            "Preparation method",
            "Size",
            "Pack size",
            "Quantity",
            "Destination",
        ],
        buyerTypes: [
            "Importers",
            "Retailers",
            "Restaurants",
            "Hotels",
            "Caterers",
            "Foodservice distributors",
        ],
        relatedSlugs: [
            "frozen-snacks",
            "frozen-samosas",
            "frozen-parathas",
        ],
    },
];

function getProduct(slug: string) {
    return frozenProducts.find((product) => product.slug === slug);
}

export async function generateStaticParams() {
    return frozenProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return {
            title: "Frozen Food | Al Huda",
        };
    }

    return {
        title: `${product.name} | Indian Frozen Food Sourcing & Export | Al Huda`,
        description: `${product.description} Explore sourcing, packaging and commercial requirements for international buyers.`,
        keywords: [
            `${product.name} exporter India`,
            `${product.name} supplier India`,
            `Indian ${product.name} exporter`,
            `${product.name} wholesale supplier`,
            `${product.name} importer`,
            `frozen food exporter India`,
            "Indian frozen food supplier",
        ],
        alternates: {
            canonical: `/products/food-products/frozen-foods/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.description,
            type: "website",
            images: [
                {
                    url: product.image,
                    alt: product.name,
                },
            ],
        },
    };
}

export default async function FrozenFoodProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = product.relatedSlugs
        .map((relatedSlug) => getProduct(relatedSlug))
        .filter(Boolean) as FrozenProduct[];

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">
            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">
                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
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
                            href="/products/food-products/frozen-foods"
                            className="transition hover:text-[#087d68]"
                        >
                            Frozen Foods
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
                        {/* Copy */}

                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087d68] text-[10px] font-bold text-white">
                                    {product.number}
                                </span>

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Frozen Foods
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                {product.name}
                                <span className="block text-[#07846d]">
                                    for global buyers.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.longDescription}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-[#bcdad1] bg-white/70 px-4 py-2 text-xs font-semibold text-[#3f7167]"
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

                        {/* Image */}

                        <div className="relative">
                            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Frozen Food Sourcing
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {product.name} for international
                                            sourcing requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="bg-white">
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
                                Sourcing {product.name.toLowerCase()} around your market requirement.
                            </h2>
                        </div>

                        <div className="max-w-2xl">
                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.description}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Requirements can vary by destination, buyer type,
                                pack format, order volume and intended application.
                                These details can be reviewed as part of the
                                sourcing enquiry.
                            </p>
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
                            href="#applications"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Applications
                        </a>

                        <a
                            href="#formats"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Formats
                        </a>

                        <a
                            href="#specifications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Specifications
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
                APPLICATIONS
            ========================================================= */}

            <section
                id="applications"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Applications
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Where {product.shortName.toLowerCase()} can fit.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Product applications depend on the buyer, market and
                            intended use. Common commercial applications include:
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {product.applications.map((application, index) => (
                            <div
                                key={application}
                                className="rounded-2xl border border-[#dfeae5] bg-white p-7"
                            >
                                <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-6 text-lg font-semibold text-[#1a3e37]">
                                    {application}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                FORMATS
            ========================================================= */}

            <section
                id="formats"
                className="scroll-mt-20 bg-white"
            >
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Available formats
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Discuss the format around your business.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Packaging and quantities can differ depending on
                                whether the product is intended for retail,
                                foodservice, distribution or commercial use.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {product.formats.map((format, index) => (
                                <div
                                    key={format}
                                    className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-7"
                                >
                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                        {format}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                        Commercial pack and quantity requirements
                                        can be discussed according to the buyer's
                                        market and application.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SPECIFICATIONS
            ========================================================= */}

            <section
                id="specifications"
                className="scroll-mt-20 bg-[#edf7f3]"
            >
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="relative overflow-hidden rounded-[1.75rem]">
                            <img
                                src={product.image}
                                alt={`${product.name} product`}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/55 to-transparent" />

                            <div className="absolute bottom-5 left-5">
                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Buyer specifications
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product requirements
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Tell us the specifications that matter.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                A clear product requirement helps establish the
                                appropriate sourcing and commercial discussion.
                            </p>

                            <div className="mt-8 space-y-3">
                                {product.specifications.map((specification) => (
                                    <div
                                        key={specification}
                                        className="flex items-center gap-4 rounded-xl border border-[#dce9e4] bg-white p-4"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6f4ef] text-[#087d68]">
                                            ✓
                                        </span>

                                        <span className="text-sm font-medium text-[#345850]">
                                            {specification}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                BUYER TYPES
            ========================================================= */}

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="mb-10 max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Commercial buyers
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Sourcing for different types of buyers.
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {product.buyerTypes.map((buyer) => (
                            <span
                                key={buyer}
                                className="rounded-full border border-[#d5e5df] bg-[#f8fbf9] px-5 py-3 text-sm font-medium text-[#456960]"
                            >
                                {buyer}
                            </span>
                        ))}
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
                                From product requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Share the details of your requirement and we can
                                use them as the starting point for the sourcing
                                discussion.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <ProcessStep
                                number="01"
                                title="Tell us what you need"
                                text={`Share the ${product.name.toLowerCase()}, quantity, preferred format, destination and any specifications you already have.`}
                            />

                            <ProcessStep
                                number="02"
                                title="Review sourcing options"
                                text="We explore suitable sourcing possibilities based on the product, market and information provided."
                            />

                            <ProcessStep
                                number="03"
                                title="Confirm specifications"
                                text="Product, packaging, quantity, commercial and documentation requirements are reviewed before proceeding."
                            />

                            <ProcessStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once commercial terms are agreed, relevant documentation and shipment requirements can be coordinated."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                RELATED PRODUCTS
            ========================================================= */}

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Related frozen foods
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Continue exploring.
                            </h2>
                        </div>

                        <Link
                            href="/products/food-products/frozen-foods"
                            className="text-sm font-semibold text-[#087d68]"
                        >
                            View all frozen foods →
                        </Link>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.slug}
                                href={`/products/food-products/frozen-foods/${relatedProduct.slug}`}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-[#f8fbf9] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.08)]"
                            >
                                <div className="relative aspect-[1.2] overflow-hidden">
                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-semibold text-white">
                                            {relatedProduct.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <p className="text-sm leading-6 text-[#667e78]">
                                        {relatedProduct.description}
                                    </p>

                                    <div className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#087d68]">
                                        Explore →
                                    </div>
                                </div>
                            </Link>
                        ))}
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
                            Frozen food sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your quantity, preferred format, destination
                            market and product specifications. We&apos;ll use your
                            requirement as the starting point for the conversation.
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
                                href="/products/food-products/frozen-foods"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Frozen Foods
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


/* ===============================================================
   PROCESS STEP
   =============================================================== */

function ProcessStep({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.075]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4fae98]/40 text-xs font-semibold text-[#73d1b8]">
                {number}
            </div>

            <div>
                <h3 className="font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#aacbc3]">
                    {text}
                </p>
            </div>
        </div>
    );
}

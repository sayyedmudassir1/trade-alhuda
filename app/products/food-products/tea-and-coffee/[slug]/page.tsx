import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
    slug: string;
    number: string;
    name: string;
    category: "Tea" | "Coffee";
    shortDescription: string;
    description: string;
    image: string;
    tags: string[];
    origin: string;
    formats: string[];
    applications: string[];
    specifications: string[];
};

const products: Product[] = [
    {
        slug: "black-tea",
        number: "01",
        name: "Black Tea",
        category: "Tea",
        shortDescription:
            "Black tea sourced for distributors, wholesalers, retailers, food businesses and commercial beverage requirements.",
        description:
            "Black tea is one of the most widely traded tea categories and can be sourced for retail, foodservice, hospitality, blending and commercial beverage applications. Product characteristics, origin, grade, leaf style, packaging and quantity can be discussed according to the buyer's requirement.",
        image: "/images/products/food-products/black-tea.webp",
        tags: ["Tea", "Bulk", "Commercial"],
        origin: "India",
        formats: [
            "Loose leaf",
            "Tea bags",
            "Bulk packs",
            "Retail-ready formats",
        ],
        applications: [
            "Retail tea",
            "Foodservice",
            "Hotels & hospitality",
            "Tea blending",
            "Commercial beverage preparation",
        ],
        specifications: [
            "Tea grade",
            "Leaf size",
            "Origin",
            "Blend requirements",
            "Packaging",
            "Quantity",
        ],
    },
    {
        slug: "green-tea",
        number: "02",
        name: "Green Tea",
        category: "Tea",
        shortDescription:
            "Green tea for retail, foodservice, beverage businesses, distributors and international tea sourcing requirements.",
        description:
            "Green tea is available for buyers looking for tea products for retail, foodservice, hospitality, beverage businesses and commercial distribution. Origin, grade, leaf style, packaging and other product requirements can be discussed during the sourcing process.",
        image: "/images/products/food-products/green-tea.webp",
        tags: ["Tea", "Green Tea", "Bulk"],
        origin: "India",
        formats: [
            "Loose leaf",
            "Tea bags",
            "Bulk packs",
            "Retail packs",
        ],
        applications: [
            "Retail",
            "Foodservice",
            "Hospitality",
            "Tea blends",
            "Beverage businesses",
        ],
        specifications: [
            "Leaf style",
            "Grade",
            "Origin",
            "Packaging",
            "Quantity",
            "Private-label requirements",
        ],
    },
    {
        slug: "assam-tea",
        number: "03",
        name: "Assam Tea",
        category: "Tea",
        shortDescription:
            "Assam tea sourced for buyers seeking Indian-origin tea for blending, retail, foodservice and commercial distribution.",
        description:
            "Assam tea is an Indian-origin tea category known for its strong and full-bodied character. It can be sourced for tea blenders, retailers, distributors, foodservice operators and commercial beverage businesses according to specified requirements.",
        image: "/images/products/food-products/assam-tea.webp",
        tags: ["Tea", "Indian Origin", "Bulk"],
        origin: "Assam, India",
        formats: [
            "Loose leaf",
            "CTC tea",
            "Tea bags",
            "Bulk commercial packs",
        ],
        applications: [
            "Tea blending",
            "Retail",
            "Foodservice",
            "Hospitality",
            "Commercial beverage production",
        ],
        specifications: [
            "CTC or orthodox",
            "Grade",
            "Leaf size",
            "Origin",
            "Blend requirements",
            "Packaging",
        ],
    },
    {
        slug: "darjeeling-tea",
        number: "04",
        name: "Darjeeling Tea",
        category: "Tea",
        shortDescription:
            "Darjeeling tea for specialty tea buyers, distributors, retailers and premium beverage sourcing requirements.",
        description:
            "Darjeeling tea is sourced for buyers looking for Indian-origin specialty tea for retail, hospitality, specialty beverage businesses and premium tea distribution. Specific origin, grade, flush, packaging and quantity requirements can be discussed.",
        image: "/images/products/food-products/darjeeling-tea.webp",
        tags: ["Tea", "Specialty", "Indian Origin"],
        origin: "Darjeeling, India",
        formats: [
            "Loose leaf",
            "Specialty packs",
            "Tea bags",
            "Bulk packs",
        ],
        applications: [
            "Specialty retail",
            "Premium hospitality",
            "Tea shops",
            "Foodservice",
            "Specialty beverage businesses",
        ],
        specifications: [
            "Flush",
            "Grade",
            "Leaf style",
            "Origin",
            "Packaging",
            "Quantity",
        ],
    },
    {
        slug: "masala-tea",
        number: "05",
        name: "Masala Tea",
        category: "Tea",
        shortDescription:
            "Indian-style masala tea products for beverage businesses, retailers, foodservice and international markets.",
        description:
            "Masala tea combines tea with aromatic spices and is suitable for retail, foodservice, hospitality and beverage businesses looking for an Indian-style tea offering. Blend composition, spice profile, tea base, packaging and quantity can be discussed according to the requirement.",
        image: "/images/products/food-products/masala-tea.webp",
        tags: ["Tea", "Blended", "Spiced"],
        origin: "India",
        formats: [
            "Loose blend",
            "Tea bags",
            "Premix formats",
            "Retail packs",
        ],
        applications: [
            "Retail",
            "Cafés",
            "Restaurants",
            "Hospitality",
            "Beverage businesses",
        ],
        specifications: [
            "Tea base",
            "Spice blend",
            "Flavour profile",
            "Packaging",
            "Quantity",
            "Custom blend requirements",
        ],
    },
    {
        slug: "tea-dust",
        number: "06",
        name: "Tea Dust",
        category: "Tea",
        shortDescription:
            "Tea dust for commercial tea preparation, foodservice, blending and bulk beverage requirements.",
        description:
            "Tea dust is commonly used where strong extraction and convenient commercial preparation are required. It can be sourced for foodservice, hospitality, tea blending, institutional and bulk beverage applications.",
        image: "/images/products/food-products/tea-dust.webp",
        tags: ["Tea", "Bulk", "Commercial"],
        origin: "India",
        formats: [
            "Bulk tea dust",
            "Commercial packs",
            "Foodservice packs",
            "Custom packaging",
        ],
        applications: [
            "Hotels",
            "Restaurants",
            "Cafés",
            "Institutional foodservice",
            "Tea blending",
        ],
        specifications: [
            "Grade",
            "Particle size",
            "Origin",
            "Blend",
            "Packaging",
            "Quantity",
        ],
    },
    {
        slug: "arabica-coffee",
        number: "07",
        name: "Arabica Coffee",
        category: "Coffee",
        shortDescription:
            "Arabica coffee sourced for roasters, distributors, beverage businesses and commercial coffee requirements.",
        description:
            "Arabica coffee is suitable for roasters, specialty coffee businesses, distributors, retailers and commercial beverage applications. Origin, bean grade, processing method, roast profile and packaging requirements can be discussed.",
        image: "/images/products/food-products/arabica-coffee.webp",
        tags: ["Coffee", "Arabica", "Specialty"],
        origin: "India",
        formats: [
            "Green beans",
            "Roasted beans",
            "Ground coffee",
            "Bulk packs",
        ],
        applications: [
            "Coffee roasting",
            "Specialty coffee",
            "Retail",
            "Cafés",
            "Hospitality",
        ],
        specifications: [
            "Bean grade",
            "Origin",
            "Processing",
            "Roast profile",
            "Packaging",
            "Quantity",
        ],
    },
    {
        slug: "robusta-coffee",
        number: "08",
        name: "Robusta Coffee",
        category: "Coffee",
        shortDescription:
            "Robusta coffee for commercial roasting, blending, beverage production and international coffee sourcing.",
        description:
            "Robusta coffee can be sourced for commercial roasting, coffee blending, instant coffee applications and beverage businesses. Buyers can discuss bean grade, origin, processing, packaging and quantity requirements.",
        image: "/images/products/food-products/robusta-coffee.webp",
        tags: ["Coffee", "Robusta", "Bulk"],
        origin: "India",
        formats: [
            "Green beans",
            "Roasted beans",
            "Bulk commercial packs",
            "Processing supply",
        ],
        applications: [
            "Commercial roasting",
            "Coffee blends",
            "Instant coffee",
            "Foodservice",
            "Beverage manufacturing",
        ],
        specifications: [
            "Bean grade",
            "Origin",
            "Processing method",
            "Screen size",
            "Packaging",
            "Quantity",
        ],
    },
    {
        slug: "green-coffee-beans",
        number: "09",
        name: "Green Coffee Beans",
        category: "Coffee",
        shortDescription:
            "Green coffee beans for roasters, importers, distributors and commercial coffee processing requirements.",
        description:
            "Green coffee beans are supplied for buyers who roast, blend or further process coffee. Requirements can be discussed around origin, bean type, grade, screen size, processing method, moisture and commercial quantity.",
        image: "/images/products/food-products/green-coffee-beans.webp",
        tags: ["Coffee", "Green Beans", "Bulk"],
        origin: "India",
        formats: [
            "Arabica green beans",
            "Robusta green beans",
            "Bulk sacks",
            "Commercial packs",
        ],
        applications: [
            "Coffee roasting",
            "Coffee blending",
            "Coffee processing",
            "Import distribution",
            "Beverage manufacturing",
        ],
        specifications: [
            "Bean type",
            "Screen size",
            "Grade",
            "Processing",
            "Moisture requirements",
            "Packaging",
        ],
    },
    {
        slug: "roasted-coffee",
        number: "10",
        name: "Roasted Coffee",
        category: "Coffee",
        shortDescription:
            "Roasted coffee for retailers, food businesses, distributors and commercial beverage applications.",
        description:
            "Roasted coffee can be sourced in formats suited to retail, foodservice, cafés, hospitality and commercial beverage businesses. Roast profile, grind, blend, packaging and quantity can be discussed according to the buyer's requirement.",
        image: "/images/products/food-products/roasted-coffee.webp",
        tags: ["Coffee", "Roasted", "Retail"],
        origin: "India",
        formats: [
            "Whole beans",
            "Ground coffee",
            "Retail packs",
            "Bulk packs",
        ],
        applications: [
            "Cafés",
            "Retail",
            "Hotels",
            "Restaurants",
            "Foodservice",
        ],
        specifications: [
            "Roast level",
            "Bean origin",
            "Blend",
            "Grind size",
            "Packaging",
            "Quantity",
        ],
    },
    {
        slug: "instant-coffee",
        number: "11",
        name: "Instant Coffee",
        category: "Coffee",
        shortDescription:
            "Instant coffee for retail, foodservice, hospitality, beverage businesses and commercial distribution requirements.",
        description:
            "Instant coffee provides a convenient format for retail, hospitality, foodservice and beverage businesses. Product type, formulation, packaging, serving format and commercial quantity can be discussed during the sourcing process.",
        image: "/images/products/food-products/instant-coffee.webp",
        tags: ["Coffee", "Instant", "Convenience"],
        origin: "India",
        formats: [
            "Instant coffee powder",
            "Sachets",
            "Retail jars",
            "Bulk packs",
        ],
        applications: [
            "Retail",
            "Hotels",
            "Restaurants",
            "Office beverage supply",
            "Food manufacturing",
        ],
        specifications: [
            "Coffee type",
            "Solubility",
            "Blend",
            "Packaging",
            "Serving format",
            "Quantity",
        ],
    },
    {
        slug: "coffee-powder",
        number: "12",
        name: "Coffee Powder",
        category: "Coffee",
        shortDescription:
            "Ground coffee powder for foodservice, retail, hospitality, beverage businesses and commercial requirements.",
        description:
            "Coffee powder is suitable for retail, foodservice, hospitality, cafés and commercial beverage preparation. Buyers can discuss coffee blend, roast level, grind size, packaging and quantity according to their requirements.",
        image: "/images/products/food-products/coffee-powder.webp",
        tags: ["Coffee", "Ground", "Retail"],
        origin: "India",
        formats: [
            "Fine ground",
            "Medium ground",
            "Coarse ground",
            "Retail packs",
            "Bulk packs",
        ],
        applications: [
            "Cafés",
            "Restaurants",
            "Hotels",
            "Retail",
            "Foodservice",
        ],
        specifications: [
            "Roast level",
            "Grind size",
            "Blend",
            "Origin",
            "Packaging",
            "Quantity",
        ],
    },
];

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
            title: "Tea & Coffee | Al Huda",
        };
    }

    return {
        title: `${product.name} | Indian ${product.category} Sourcing & Export | Al Huda`,
        description: `${product.shortDescription} Explore sourcing, specifications, formats and commercial requirements with Al Huda.`,
        keywords: [
            `${product.name} exporter India`,
            `${product.name} supplier India`,
            `${product.name} wholesale`,
            `${product.name} bulk supplier`,
            `${product.name} export India`,
            "Indian tea exporter",
            "Indian coffee exporter",
            "tea and coffee supplier India",
            "food products exporter India",
        ],
        alternates: {
            canonical: `/products/food-products/tea-and-coffee/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.shortDescription,
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

export default async function TeaAndCoffeeProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const isTea = product.category === "Tea";

    const relatedProducts = products
        .filter(
            (item) =>
                item.category === product.category &&
                item.slug !== product.slug
        )
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[15%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

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
                            href="/products/food-products/tea-and-coffee"
                            className="transition hover:text-[#087d68]"
                        >
                            Tea &amp; Coffee
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>
                    </nav>


                    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1fr]">

                        {/* Product image */}

                        <div className="relative order-2 lg:order-1">

                            <div className="relative aspect-[1.05] overflow-hidden rounded-[2rem] bg-[#dceee8] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} - Indian ${product.category.toLowerCase()} product`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/65 via-transparent to-transparent" />

                                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#087d68] backdrop-blur">
                                    {product.number}
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            {product.category} Product
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Indian-origin sourcing for international buyers.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Product copy */}

                        <div className="order-1 lg:order-2">

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    {product.category} / {product.name}
                                </span>

                            </div>


                            <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-6xl">
                                {product.name}
                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.shortDescription}
                            </p>


                            <div className="mt-6 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-[#dff1eb] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#087d68]"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(product.name)}`}
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


                            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">

                                <QuickFact
                                    label="Category"
                                    value={product.category}
                                />

                                <QuickFact
                                    label="Origin"
                                    value={product.origin}
                                />

                                <QuickFact
                                    label="Sourcing"
                                    value="Bulk & Commercial"
                                />

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
                            href="#applications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Applications
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
                                {product.name} for international sourcing.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.description}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Buyers can discuss product specifications, commercial
                                quantities, packaging, destination markets and other
                                requirements as part of the sourcing enquiry.
                            </p>

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

                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product specifications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Discuss the specifications that matter to your business.
                            </h2>

                            <p className="mt-5 max-w-2xl leading-7 text-[#637a74]">
                                Product requirements can vary by market, application,
                                buyer and destination. These are some of the key areas
                                that can be discussed during sourcing.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">

                                {product.specifications.map((specification) => (
                                    <div
                                        key={specification}
                                        className="flex items-center gap-3 rounded-xl border border-[#d5e5df] bg-white p-4"
                                    >

                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7f4ef] text-[#087d68]">
                                            ✓
                                        </span>

                                        <span className="text-sm font-medium text-[#345850]">
                                            {specification}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>


                        <div className="rounded-[1.75rem] border border-[#d5e5df] bg-white p-7 shadow-[0_15px_45px_rgba(20,70,60,0.05)]">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Available formats
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#153b35]">
                                Product formats
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                Format and packaging can be discussed according to the
                                intended application and commercial requirement.
                            </p>

                            <div className="mt-7 space-y-2">

                                {product.formats.map((format) => (
                                    <div
                                        key={format}
                                        className="flex items-center gap-3 border-b border-[#edf2f0] py-3 last:border-0"
                                    >

                                        <span className="h-1.5 w-1.5 rounded-full bg-[#087d68]" />

                                        <span className="text-sm text-[#526d67]">
                                            {format}
                                        </span>

                                    </div>
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
                className="scroll-mt-20 bg-white"
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

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Suitable for different commercial requirements.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Depending on the product and specification, {product.name.toLowerCase()}{" "}
                                can be considered for a range of commercial beverage,
                                foodservice and distribution applications.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.applications.map((application, index) => (
                                <div
                                    key={application}
                                    className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-6"
                                >

                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-6 text-lg font-semibold text-[#1a3e37]">
                                        {application}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#718680]">
                                        Commercial sourcing requirements can be discussed
                                        according to the intended application.
                                    </p>

                                </div>
                            ))}

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
                                From product requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Share the details you already know and the sourcing
                                conversation can start around your specific requirement.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <SourcingStep
                                number="01"
                                title="Tell us what you need"
                                text={`Share the ${product.name.toLowerCase()}, quantity, preferred specifications, packaging and destination market.`}
                            />

                            <SourcingStep
                                number="02"
                                title="Review sourcing options"
                                text="We explore suitable sourcing possibilities based on the product, market and information provided."
                            />

                            <SourcingStep
                                number="03"
                                title="Confirm specifications"
                                text="Product specifications, quantity, packaging and commercial requirements are reviewed before proceeding."
                            />

                            <SourcingStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated."
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

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Related products
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Explore more {isTea ? "tea" : "coffee"} products.
                        </h2>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.slug}
                                href={`/products/food-products/tea-and-coffee/${relatedProduct.slug}`}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-[#f8fbf9] transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.08)]"
                            >

                                <div className="relative aspect-[1.15] overflow-hidden">

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


                    <div className="mt-8">

                        <Link
                            href="/products/food-products/tea-and-coffee"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#087d68] transition hover:text-[#056b59]"
                        >
                            View all Tea &amp; Coffee products
                            <span>→</span>
                        </Link>

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
                            {product.name} sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your required quantity, specifications, packaging,
                            destination market and any other commercial requirements.
                            We&apos;ll use your requirement as the starting point for
                            the sourcing conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(product.name)}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/products/food-products/tea-and-coffee"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Tea &amp; Coffee
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   QUICK FACT
   =============================================================== */

function QuickFact({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-[#dce9e4] bg-white/70 p-4">

            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#718680]">
                {label}
            </p>

            <p className="mt-2 text-sm font-semibold text-[#23463f]">
                {value}
            </p>

        </div>
    );
}


/* ===============================================================
   SOURCING STEP
   =============================================================== */

function SourcingStep({
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

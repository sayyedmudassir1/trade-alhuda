import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Products | Global Export & Sourcing Portfolio | Al Huda",
    description:
        "Explore Al Huda's global export portfolio across food products, imitation jewellery, engineering goods, automotive components, pharmaceuticals, textiles, apparel and general merchandise.",
    keywords: [
        "Al Huda products",
        "Indian export products",
        "global sourcing",
        "food products exporter India",
        "engineering goods exporter",
        "automotive components exporter",
        "textile exporter India",
        "pharmaceutical exporter India",
        "general merchandise exporter",
    ],
    alternates: {
        canonical: "/our-products",
    },
    openGraph: {
        title: "Our Products | Al Huda",
        description:
            "Explore Al Huda's product portfolio for international buyers, distributors and sourcing partners.",
        type: "website",
    },
};

const categories = [
    {
        id: "food-products",
        number: "01",
        title: "Food Products",
        shortTitle: "Food",
        description:
            "A broad range of food products sourced from established producers and suppliers for international markets.",
        image: "/images/products/food-products1.webp",
        accent: "green",
        products: [
            "Spices",
            "Cereals, Pulses & Flours",
            "Fruits & Vegetables",
            "Frozen Foods & Vegetables",
            "FMCG",
            "Tea & Coffee",
        ],
    },
    {
        id: "imitation-jewellery",
        number: "02",
        title: "Imitation Jewellery",
        shortTitle: "Jewellery",
        description:
            "Fashion-focused imitation jewellery sourced for wholesalers, retailers and international distribution.",
        image: "/images/products/imitation-jewellery1.webp",
        accent: "gold",
        products: [
            "Fashion Jewellery",
            "Necklaces & Sets",
            "Earrings",
            "Bangles & Bracelets",
            "Rings",
            "Accessories",
        ],
    },
    {
        id: "engineering-goods",
        number: "03",
        title: "Engineering Goods",
        shortTitle: "Engineering",
        description:
            "Industrial and engineering products supporting sourcing requirements across multiple international markets.",
        image: "/images/products/engineering-goods1.webp",
        accent: "blue",
        products: [
            "Industrial Components",
            "Machined Components",
            "Metal Products",
            "Fabricated Products",
            "Hardware",
            "Industrial Supplies",
        ],
    },
    {
        id: "automotive-components",
        number: "04",
        title: "Automotive Components",
        shortTitle: "Automotive",
        description:
            "Automotive components sourced according to buyer specifications, application requirements and commercial needs.",
        image: "/images/products/automotive-components1.webp",
        accent: "orange",
        products: [
            "Automotive Parts",
            "Replacement Components",
            "Metal Components",
            "Machined Parts",
            "Accessories",
            "Custom Requirements",
        ],
    },
    {
        id: "pharmaceuticals-biologicals",
        number: "05",
        title: "Pharmaceuticals & Biologicals",
        shortTitle: "Pharma",
        description:
            "Pharmaceutical and biological product sourcing with an emphasis on documentation, specifications and applicable requirements.",
        image: "/images/products/pharma1.webp",
        accent: "purple",
        products: [
            "Pharmaceutical Products",
            "Healthcare Products",
            "Biological Products",
            "Formulations",
            "Healthcare Supplies",
            "Buyer-Specific Requirements",
        ],
    },
    {
        id: "textiles-and-apparels",
        number: "06",
        title: "Textiles & Apparel",
        shortTitle: "Textiles",
        description:
            "Textile and apparel sourcing for businesses seeking dependable products, manufacturers and international supply options.",
        image: "/images/products/apparels1.webp",
        accent: "rose",
        products: [
            "Apparel",
            "Fabrics",
            "Home Textiles",
            "Fashion Products",
            "Textile Materials",
            "Custom Sourcing",
        ],
    },
    {
        id: "general-merchandise",
        number: "07",
        title: "General Merchandise",
        shortTitle: "General",
        description:
            "A flexible sourcing category covering everyday products and buyer-specific merchandise requirements.",
        image: "/images/products/general-merchandise1.webp",
        accent: "teal",
        products: [
            "Consumer Products",
            "Household Products",
            "Lifestyle Products",
            "Utility Products",
            "Retail Merchandise",
            "Custom Sourcing",
        ],
    },
];

const stats = [
    {
        value: "Global",
        label: "Sourcing reach",
    },
    {
        value: "40+",
        label: "Product segments",
    },
    {
        value: "Custom",
        label: "Market orientation",
    },
    {
        value: "B2B",
        label: "Trade focused",
    },
];

export default function OurProductsPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#102c28]">

            {/* =========================================================
         HERO
     ========================================================= */}
            <section className="relative overflow-hidden border-b border-[#dfeae5] bg-[#e8f4ef]">
                {/* Decorative shapes */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b9ded2]/50 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div className="max-w-4xl">

                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#087d68]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                Our Product Portfolio
                            </span>
                        </div>

                        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#12342f] sm:text-5xl lg:text-7xl">
                            Products sourced for
                            <span className="block text-[#07846d]">
                                global markets.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-[#54706a] sm:text-lg">
                            Explore Al Huda&apos;s growing portfolio across food,
                            industrial, automotive, pharmaceutical, textile and
                            consumer product categories — built around the requirements
                            of international buyers.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                            >
                                Discuss a Requirement
                                <span className="ml-2">→</span>
                            </Link>

                            <a
                                href="#portfolio"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-[#b9d5cc] bg-white/70 px-7 text-sm font-semibold text-[#173b35] transition hover:bg-white"
                            >
                                Explore Products
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 border-t border-[#c9dfd7] pt-8 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="border-[#c9dfd7] py-3 first:pl-0 sm:border-l sm:pl-7"
                            >
                                <div className="text-2xl font-semibold tracking-tight text-[#12342f]">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[#6a8580]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
         INTRO
     ========================================================= */}
            <section className="bg-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-12 lg:py-28">

                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#087d68]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Built around your requirement
                            </span>
                        </div>

                        <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#153b35] sm:text-4xl">
                            One portfolio.
                            <br />
                            Multiple sourcing possibilities.
                        </h2>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-lg leading-8 text-[#526d67]">
                            International buyers rarely need just one product. They need
                            dependable sourcing, clear specifications, documentation,
                            communication and coordinated logistics.
                        </p>

                        <p className="mt-5 text-base leading-7 text-[#718681]">
                            Our portfolio brings together multiple product categories so
                            businesses can explore suitable suppliers and sourcing
                            opportunities through one international trade partner.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
         CATEGORY NAV
     ========================================================= */}
            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">
                    <nav className="flex min-w-max items-center gap-1 py-3">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={`#${category.id}`}
                                className="rounded-full px-4 py-2 text-xs font-medium text-[#607872] transition hover:bg-[#e9f5f0] hover:text-[#087d68]"
                            >
                                {category.shortTitle}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            {/* =========================================================
         PRODUCT PORTFOLIO
     ========================================================= */}
            <section
                id="portfolio"
                className="bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >
                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#087d68]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Explore our categories
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#153b35] sm:text-4xl">
                            A diversified product portfolio for international trade.
                        </h2>

                        <p className="mt-5 leading-7 text-[#617a74]">
                            Select a category to explore its product segments and
                            discover where your sourcing requirement may fit.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {categories.map((category, index) => (
                            <ProductCategory
                                key={category.id}
                                category={category}
                                reverse={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
         SOURCING PROCESS
     ========================================================= */}
            <section className="bg-[#123b34] text-white">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#73d1b8]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    More than a catalogue
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                                Your requirement comes first.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b7d1c9]">
                                Product sourcing is not only about finding an item. It is
                                about finding the right supply option for your market,
                                specifications, commercial requirements and delivery needs.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <ProcessCard
                                number="01"
                                title="Share your requirement"
                                text="Tell us what you need, including product specifications, quantity, target market or other commercial requirements."
                            />

                            <ProcessCard
                                number="02"
                                title="Sourcing & evaluation"
                                text="We explore suitable sourcing options and coordinate relevant product and supplier information."
                            />

                            <ProcessCard
                                number="03"
                                title="Documentation & coordination"
                                text="Product specifications, commercial information and trade documentation are coordinated as required."
                            />

                            <ProcessCard
                                number="04"
                                title="Shipment planning"
                                text="Once commercial terms are agreed, the shipment and logistics requirements can be coordinated."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
         CTA
     ========================================================= */}
            <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#07846d] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">
                        <div className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                            <span className="text-lg">↗</span>
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                            Start a conversation
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                            Looking for a specific product?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Share your product requirement with our team. We can help
                            you explore suitable sourcing and international trade options.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                        >
                            Send Your Requirement
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

/* ===============================================================
   PRODUCT CATEGORY COMPONENT
   =============================================================== */

function ProductCategory({
    category,
    reverse = false,
}: {
    category: (typeof categories)[number];
    reverse?: boolean;
}) {
    return (
        <article
            id={category.id}
            className="scroll-mt-24 overflow-hidden rounded-[1.75rem] border border-[#dfeae5] bg-white shadow-[0_10px_40px_rgba(20,70,60,0.045)]"
        >
            <div
                className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
            >

                {/* Image */}
                <Link href={`/products/${category.id}`} className="relative block min-h-82.5 overflow-hidden lg:min-h-120">
                    <img
                        src={category.image}
                        alt={`${category.title} sourced by Al Huda`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#087d68] backdrop-blur-sm">
                        {category.number}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                            Product Category
                        </span>
                    </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                            {category.number}
                        </span>
                        <span className="h-px w-8 bg-[#b8d9d0]" />
                        <span className="text-xs uppercase tracking-[0.15em] text-[#7a918b]">
                            {category.shortTitle}
                        </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#153b35] sm:text-4xl">
                        {category.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#657d77]">
                        {category.description}
                    </p>

                    <div className="mt-8">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#355a53]">
                            Product segments
                        </p>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                            {category.products.map((product) => (
                                <div
                                    key={product}
                                    className="flex items-center gap-2 border-b border-[#edf2f0] py-2.5 text-sm text-[#4e6862]"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#4fae98]" />
                                    {product}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-9">
                        <Link
                            href={`/products/${category.id}`}
                            className="group inline-flex items-center text-sm font-semibold text-[#087d68]"
                        >
                            Explore this category
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </article >
    );
}

/* ===============================================================
   PROCESS CARD
   =============================================================== */

function ProcessCard({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 transition hover:bg-white/[0.09]">
            <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#73d1b8]">
                    {number}
                </span>

                <span className="text-white/20">↗</span>
            </div>

            <h3 className="mt-8 text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#aacbc3]">
                {text}
            </p>
        </div>
    );
}
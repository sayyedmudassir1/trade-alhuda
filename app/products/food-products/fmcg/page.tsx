import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "FMCG Products | Indian FMCG Sourcing & Export | Al Huda",
    description:
        "Explore FMCG products sourced from India for international buyers, distributors, wholesalers, retailers, supermarkets, food businesses and importers.",
    keywords: [
        "Indian FMCG exporter",
        "FMCG exporter India",
        "FMCG products India",
        "Indian FMCG supplier",
        "FMCG sourcing India",
        "Indian packaged food exporter",
        "Indian grocery exporter",
        "Indian consumer goods exporter",
        "biscuits exporter India",
        "snacks exporter India",
        "instant food exporter India",
        "packaged food supplier India",
        "private label FMCG India",
    ],
    alternates: {
        canonical: "/products/food-products/fmcg",
    },
    openGraph: {
        title: "FMCG Products | Al Huda",
        description:
            "Explore Al Huda's FMCG sourcing portfolio for international buyers, distributors, wholesalers and retail businesses.",
        type: "website",
    },
};

const fmcgProducts = [
    {
        slug: "biscuits-cookies",
        number: "01",
        name: "Biscuits & Cookies",
        description:
            "Packaged biscuits, cookies and related bakery snacks for distributors, retailers, supermarkets and international food businesses.",
        image:
            "/images/products/food-products/fmcg/biscuits-cookies.webp",
        tags: ["Packaged", "Retail"],
    },
    {
        slug: "namkeen-snacks",
        number: "02",
        name: "Namkeen & Snacks",
        description:
            "Indian savoury snacks and packaged namkeen products for retail distribution, supermarkets, wholesalers and food businesses.",
        image:
            "/images/products/food-products/fmcg/namkeen-snacks.webp",
        tags: ["Snacks", "Retail"],
    },
    {
        slug: "instant-foods",
        number: "03",
        name: "Instant Foods",
        description:
            "Convenient packaged food products including instant mixes, ready-to-cook products and quick meal solutions.",
        image:
            "/images/products/food-products/fmcg/instant-foods.webp",
        tags: ["Convenience", "Packaged"],
    },
    {
        slug: "ready-to-eat-foods",
        number: "04",
        name: "Ready-to-Eat Foods",
        description:
            "Packaged ready-to-eat Indian food products suitable for retail, foodservice, distributors and international markets.",
        image:
            "/images/products/food-products/fmcg/ready-to-eat-foods.webp",
        tags: ["Ready-to-Eat", "Packaged"],
    },
    {
        slug: "pickles",
        number: "05",
        name: "Pickles",
        description:
            "Indian pickles and preserved food products for ethnic grocery, retail, wholesale and international distribution.",
        image:
            "/images/products/food-products/fmcg/pickles.webp",
        tags: ["Preserved", "Retail"],
    },
    {
        slug: "sauces-ketchup",
        number: "06",
        name: "Sauces & Ketchup",
        description:
            "Packaged sauces, ketchup and condiments for retail shelves, foodservice businesses and commercial distributors.",
        image:
            "/images/products/food-products/fmcg/sauces-ketchup.webp",
        tags: ["Condiments", "Retail"],
    },
    {
        slug: "papad",
        number: "07",
        name: "Papad",
        description:
            "Indian papad and traditional accompaniments for ethnic food retailers, distributors, wholesalers and food businesses.",
        image:
            "/images/products/food-products/fmcg/papad.webp",
        tags: ["Traditional", "Packaged"],
    },
    {
        slug: "vermicelli-noodles",
        number: "08",
        name: "Vermicelli & Noodles",
        description:
            "Packaged vermicelli, noodles and convenient staple products for retail and international grocery distribution.",
        image:
            "/images/products/food-products/fmcg/vermicelli-noodles.webp",
        tags: ["Staples", "Packaged"],
    },
    {
        slug: "breakfast-cereals",
        number: "09",
        name: "Breakfast Cereals",
        description:
            "Packaged breakfast cereals and convenient grain-based products for supermarkets, retailers and food distributors.",
        image:
            "/images/products/food-products/fmcg/breakfast-cereals.webp",
        tags: ["Breakfast", "Retail"],
    },
    {
        slug: "health-drinks-beverages",
        number: "10",
        name: "Health Drinks & Beverages",
        description:
            "Packaged beverage and drink-mix categories for distributors, retailers and international consumer markets.",
        image:
            "/images/products/food-products/fmcg/health-drinks-beverages.webp",
        tags: ["Beverages", "Packaged"],
    },
    {
        slug: "cooking-oils",
        number: "11",
        name: "Cooking Oils",
        description:
            "Edible cooking oils and packaged oil products for grocery distributors, wholesalers, retailers and food businesses.",
        image:
            "/images/products/food-products/fmcg/cooking-oils.webp",
        tags: ["Staples", "Bulk"],
    },
    {
        slug: "sugar-salt",
        number: "12",
        name: "Sugar & Salt",
        description:
            "Packaged household and food-service staples including sugar, salt and related everyday grocery products.",
        image:
            "/images/products/food-products/fmcg/sugar-salt.webp",
        tags: ["Staples", "Retail"],
    },
];

const formats = [
    {
        number: "01",
        title: "Retail-ready products",
        text: "Packaged FMCG products suitable for supermarkets, grocery stores, convenience retailers and ethnic food outlets.",
    },
    {
        number: "02",
        title: "Wholesale quantities",
        text: "Commercial quantities can be discussed according to product category, destination market, packaging and buyer requirements.",
    },
    {
        number: "03",
        title: "Private label enquiries",
        text: "Private-label and buyer-specific requirements can be discussed where suitable for the selected product category and market.",
    },
    {
        number: "04",
        title: "Custom specifications",
        text: "Packaging, labelling, pack size, product specifications and other commercial requirements can be discussed during the enquiry.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the FMCG category, product, preferred brand or specification, quantity and destination market.",
    },
    {
        number: "02",
        title: "Review suitable options",
        text: "We explore suitable sourcing possibilities based on the category, product requirements and information provided.",
    },
    {
        number: "03",
        title: "Confirm specifications",
        text: "Product, packaging, labelling, quantity, commercial and documentation requirements are reviewed before proceeding.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated.",
    },
];

export default function FMCGPage() {
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
                            href="/products/food-products"
                            className="transition hover:text-[#087d68]"
                        >
                            Food Products
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            FMCG
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products / FMCG
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Indian FMCG products for
                                <span className="block text-[#07846d]">
                                    global markets.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore packaged foods, snacks, grocery staples,
                                beverages and everyday consumer products sourced
                                for international buyers, distributors, wholesalers
                                and retail businesses.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=FMCG"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request an FMCG Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#fmcg-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore FMCG
                                </a>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1400&q=85"
                                    alt="Packaged FMCG products in a retail store"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            FMCG Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Packaged foods, grocery staples and consumer products.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    12+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    FMCG categories
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
                                    FMCG sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Everyday consumer products for commercial markets.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our FMCG portfolio covers packaged food and everyday
                                grocery categories that can serve distributors,
                                wholesalers, retailers, supermarkets and food businesses.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product selection, brand requirements, pack sizes,
                                packaging, labelling, quantity, destination market and
                                other commercial specifications can be discussed as
                                part of the sourcing enquiry.
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
                            href="#fmcg-catalogue"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            FMCG Catalogue
                        </a>

                        <a
                            href="#formats"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Formats
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
                FMCG CATALOGUE
            ========================================================= */}

            <section
                id="fmcg-catalogue"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Explore the range
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                FMCG product categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore packaged food, grocery and consumer-product
                                categories available for sourcing enquiries.
                            </p>

                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {fmcgProducts.length} categories
                        </div>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {fmcgProducts.map((product) => (
                            <FMCGCard
                                key={product.slug}
                                product={product}
                            />
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
                                    Commercial formats
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Sourcing formats built around your market.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                FMCG requirements can differ significantly between
                                retailers, distributors, wholesalers and importers.
                                Commercial details can be discussed according to
                                the selected product.
                            </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {formats.map((format) => (
                                <div
                                    key={format.number}
                                    className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-7"
                                >

                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {format.number}
                                    </span>

                                    <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                        {format.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                        {format.text}
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
                                src="/images/products/food-products/fmcg.webp"
                                alt="Packaged FMCG products"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/50 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Buyer-specific specifications
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
                                Tell us what your market needs.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Clear product and commercial specifications help create
                                a more focused sourcing enquiry.
                            </p>

                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the FMCG product or category you are looking to source."
                                />

                                <RequirementItem
                                    title="Brand"
                                    text="Mention a preferred brand, manufacturer or whether you are open to alternative sourcing options."
                                />

                                <RequirementItem
                                    title="Pack size"
                                    text="Share your preferred retail pack size, case configuration or commercial packaging requirement."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Tell us your expected order quantity, shipment quantity or recurring requirement."
                                />

                                <RequirementItem
                                    title="Destination"
                                    text="Share the destination country or market so the enquiry can be evaluated accordingly."
                                />

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
                                From FMCG requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Share your product and market requirements and use
                                the enquiry process as the starting point for
                                discussing suitable sourcing options.
                            </p>

                        </div>

                        <div className="space-y-3">

                            {sourcingSteps.map((step) => (
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
                RELATED FOOD CATEGORIES
            ========================================================= */}

            <section className="bg-white">

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
                            FMCG sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific FMCG product?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, brand or specification, quantity,
                            packaging requirements and destination market. We&apos;ll
                            use your requirement as the starting point for the
                            conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=FMCG"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request an FMCG Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/products/food-products"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Food Products
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   FMCG CARD
   =============================================================== */

function FMCGCard({
    product,
}: {
    product: (typeof fmcgProducts)[number];
}) {
    return (
        <Link
            href={`/products/food-products/fmcg/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} FMCG products`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-[#087d68] backdrop-blur">
                    {product.number}
                </div>

                <div className="absolute bottom-4 left-4 right-4">

                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {product.name}
                    </h3>

                </div>

            </div>

            <div className="p-5">

                <p className="text-sm leading-6 text-[#667e78]">
                    {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                    {product.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#edf7f3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#438275]"
                        >
                            {tag}
                        </span>
                    ))}

                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#edf2f0] pt-4">

                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#087d68]">
                        Explore
                    </span>

                    <span className="text-lg text-[#087d68] transition-transform group-hover:translate-x-1">
                        →
                    </span>

                </div>

            </div>

        </Link>
    );
}


/* ===============================================================
   REQUIREMENT ITEM
   =============================================================== */

function RequirementItem({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-4 rounded-xl border border-[#dce9e4] bg-white p-4">

            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

            <div>

                <h3 className="text-sm font-semibold text-[#23463f]">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#718680]">
                    {text}
                </p>

            </div>

        </div>
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
            className="group flex min-h-[100px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
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

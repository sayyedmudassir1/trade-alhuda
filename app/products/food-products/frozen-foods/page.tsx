import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Frozen Foods | Indian Frozen Food Sourcing & Export | Al Huda",
    description:
        "Explore frozen foods sourced from India for international buyers, distributors, wholesalers, foodservice businesses, retailers and importers. Explore frozen vegetables, fruits, snacks, ready-to-cook products and other frozen food categories.",
    keywords: [
        "Indian frozen food exporter",
        "frozen food exporter India",
        "frozen food supplier India",
        "Indian frozen vegetables exporter",
        "Indian frozen fruits exporter",
        "frozen snacks exporter India",
        "ready to cook food exporter India",
        "frozen food supplier",
        "frozen vegetables supplier India",
        "frozen fruits supplier India",
        "frozen snacks supplier India",
        "frozen paratha exporter India",
        "frozen samosa exporter India",
        "frozen peas exporter India",
        "frozen corn exporter India",
        "Indian frozen food supplier",
    ],
    alternates: {
        canonical: "/products/food-products/frozen-foods",
    },
    openGraph: {
        title: "Frozen Foods | Al Huda",
        description:
            "Explore Al Huda's frozen food sourcing portfolio for international buyers, distributors, wholesalers, foodservice businesses and retailers.",
        type: "website",
    },
};

const frozenCategories = [
    {
        slug: "frozen-vegetables",
        number: "01",
        name: "Frozen Vegetables",
        description:
            "Frozen vegetables sourced for foodservice, retail, distribution, processing and commercial food requirements.",
        image: "/images/products/food-products/frozen-vegetables.webp",
        tags: ["Frozen", "Bulk"],
    },
    {
        slug: "frozen-fruits",
        number: "02",
        name: "Frozen Fruits",
        description:
            "Frozen fruits for food manufacturers, beverage businesses, distributors, retailers and commercial applications.",
        image: "/images/products/food-products/frozen-fruits.webp",
        tags: ["Frozen", "Seasonal"],
    },
    {
        slug: "frozen-green-peas",
        number: "03",
        name: "Frozen Green Peas",
        description:
            "Frozen green peas for retail, foodservice, restaurants, food manufacturers and wholesale distribution.",
        image: "/images/products/food-products/frozen-green-peas.webp",
        tags: ["Frozen", "Bulk"],
    },
    {
        slug: "frozen-corn",
        number: "04",
        name: "Frozen Sweet Corn",
        description:
            "Frozen sweet corn for foodservice, retail, processing, prepared foods and commercial food requirements.",
        image: "/images/products/food-products/frozen-corn.webp",
        tags: ["Frozen", "Bulk"],
    },
    {
        slug: "frozen-mixed-vegetables",
        number: "05",
        name: "Frozen Mixed Vegetables",
        description:
            "Frozen mixed vegetable selections for restaurants, foodservice, retailers, distributors and food manufacturers.",
        image: "/images/products/food-products/frozen-mixed-vegetables.webp",
        tags: ["Frozen", "Foodservice"],
    },
    {
        slug: "frozen-spinach",
        number: "06",
        name: "Frozen Spinach",
        description:
            "Frozen spinach for food preparation, foodservice, retail, processing and commercial ingredient requirements.",
        image: "/images/products/food-products/frozen-spinach.webp",
        tags: ["Frozen", "Bulk"],
    },
    {
        slug: "frozen-okras",
        number: "07",
        name: "Frozen Okra",
        description:
            "Frozen okra for international food businesses, distributors, retailers, restaurants and commercial buyers.",
        image: "/images/products/food-products/frozen-okra.webp",
        tags: ["Frozen", "Bulk"],
    },
    {
        slug: "frozen-fries",
        number: "08",
        name: "Frozen French Fries",
        description:
            "Frozen potato fries for restaurants, QSRs, foodservice distributors, retailers and commercial food businesses.",
        image: "/images/products/food-products/frozen-fries.webp",
        tags: ["Frozen", "Foodservice"],
    },
    {
        slug: "frozen-parathas",
        number: "09",
        name: "Frozen Parathas",
        description:
            "Frozen Indian flatbreads and parathas for retail, foodservice, restaurants, distributors and food businesses.",
        image: "/images/products/food-products/frozen-parathas.webp",
        tags: ["Frozen", "Ready-to-Cook"],
    },
    {
        slug: "frozen-samosas",
        number: "10",
        name: "Frozen Samosas",
        description:
            "Frozen samosas for restaurants, catering, foodservice, retail and international Indian-food distribution.",
        image: "/images/products/food-products/frozen-samosas.webp",
        tags: ["Frozen", "Ready-to-Cook"],
    },
    {
        slug: "frozen-snacks",
        number: "11",
        name: "Frozen Snacks",
        description:
            "Frozen Indian and international snack products for foodservice, retail, distributors and commercial buyers.",
        image: "/images/products/food-products/frozen-snacks.webp",
        tags: ["Frozen", "Ready-to-Cook"],
    },
    {
        slug: "frozen-ready-to-cook",
        number: "12",
        name: "Ready-to-Cook Foods",
        description:
            "Frozen ready-to-cook products for restaurants, foodservice businesses, retailers and commercial food operations.",
        image: "/images/products/food-products/frozen-ready-to-cook.webp",
        tags: ["Frozen", "Ready-to-Cook"],
    },
];

const formats = [
    {
        number: "01",
        title: "Retail packs",
        text: "Frozen products can be sourced in consumer-oriented pack formats for supermarkets, grocery retailers and distribution channels.",
    },
    {
        number: "02",
        title: "Foodservice packs",
        text: "Commercial pack sizes can be discussed for restaurants, hotels, catering businesses, QSRs and institutional foodservice.",
    },
    {
        number: "03",
        title: "Bulk quantities",
        text: "Bulk frozen-food requirements can be discussed according to product, destination market, season and buyer specifications.",
    },
    {
        number: "04",
        title: "Private-label requirements",
        text: "Where applicable, packaging, labelling and other buyer-specific commercial requirements can be discussed during the enquiry.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the frozen product, preferred pack size, quantity, destination and any product specifications you already have.",
    },
    {
        number: "02",
        title: "Review sourcing options",
        text: "We explore suitable sourcing possibilities based on the product, market, required format and information provided.",
    },
    {
        number: "03",
        title: "Confirm specifications",
        text: "Product specifications, packaging, labelling, quantity, commercial terms and documentation requirements are reviewed.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms are agreed, the relevant documentation, cold-chain and shipment requirements can be coordinated.",
    },
];

const buyerRequirements = [
    {
        title: "Product",
        text: "Specify the frozen food, product type, variety or preparation you are looking for.",
    },
    {
        title: "Pack size",
        text: "Mention your preferred consumer, foodservice or bulk packaging format.",
    },
    {
        title: "Quantity",
        text: "Share your expected order quantity, shipment volume or recurring purchasing requirement.",
    },
    {
        title: "Temperature",
        text: "Mention the required frozen storage or transportation conditions where applicable.",
    },
    {
        title: "Destination",
        text: "Tell us the destination country, port or market for the sourcing enquiry.",
    },
];

export default function FrozenFoodsPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">
            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">
                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                    {/* Breadcrumb */}

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
                            Frozen Foods
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
                        {/* Copy */}

                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products / Frozen Foods
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Frozen foods for
                                <span className="block text-[#07846d]">
                                    global food businesses.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore frozen vegetables, fruits, snacks,
                                ready-to-cook foods and other frozen products
                                sourced for international buyers, distributors,
                                retailers and foodservice businesses.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/contact?product=Frozen%20Foods"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Frozen Food Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#frozen-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Frozen Foods
                                </a>
                            </div>
                        </div>

                        {/* Hero image */}

                        <div className="relative">
                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">
                                <img
                                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=85"
                                    alt="Frozen food products"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Frozen Food Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Frozen vegetables, snacks,
                                            fruits and ready-to-cook foods.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">
                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    12+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Frozen categories
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
                                    Frozen food sourcing
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Frozen products for retail, foodservice and commercial sourcing.
                            </h2>
                        </div>

                        <div className="max-w-2xl">
                            <p className="text-lg leading-8 text-[#526d67]">
                                Our frozen foods portfolio covers a range of
                                commercially traded frozen products, from
                                vegetables and fruits to snacks and ready-to-cook
                                foods.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product specifications, preparation, pack size,
                                quantity, packaging, destination market, storage
                                conditions and other commercial requirements can
                                be discussed as part of the sourcing enquiry.
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
                            href="#frozen-catalogue"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Frozen Catalogue
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
                FROZEN CATALOGUE
            ========================================================= */}

            <section
                id="frozen-catalogue"
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
                                Frozen food categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore frozen product categories and the sourcing
                                requirements that can be discussed for each product.
                            </p>
                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {frozenCategories.length} categories
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {frozenCategories.map((product) => (
                            <FrozenFoodCard
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
                                    Product formats
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Frozen foods can be sourced around your commercial format.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Packaging and commercial requirements can vary
                                depending on whether the product is intended for
                                retail, foodservice, distribution or further
                                processing.
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
                                src="/images/products/food-products/frozen-foods.avif"
                                alt="Frozen food products"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/50 to-transparent" />

                            <div className="absolute bottom-5 left-5">
                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Frozen food specifications
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
                                Start with the specifications that matter to you.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Frozen food sourcing can involve specific product,
                                packaging, storage and shipment requirements.
                                Providing clear information gives the enquiry a
                                stronger starting point.
                            </p>

                            <div className="mt-8 space-y-3">
                                {buyerRequirements.map((requirement) => (
                                    <RequirementItem
                                        key={requirement.title}
                                        title={requirement.title}
                                        text={requirement.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                COLD CHAIN
            ========================================================= */}

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="rounded-[2rem] border border-[#dce9e4] bg-[#f8fbf9] p-8 sm:p-10 lg:p-14">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#087d68]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                        Frozen supply considerations
                                    </span>
                                </div>

                                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                    Product requirements can extend beyond the product itself.
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <InfoCard
                                    title="Storage"
                                    text="Frozen products may require appropriate temperature-controlled storage throughout the supply chain."
                                />

                                <InfoCard
                                    title="Cold chain"
                                    text="Shipment planning can take account of the applicable cold-chain requirements for the product and destination."
                                />

                                <InfoCard
                                    title="Packaging"
                                    text="Pack configuration, labelling and handling requirements can be discussed according to the buyer's needs."
                                />

                                <InfoCard
                                    title="Documentation"
                                    text="Applicable commercial and shipment documentation can be reviewed as part of the trade process."
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
                                From frozen-food requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear product requirement gives our team a better
                                starting point for exploring suitable sourcing and
                                trade options.
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
                            href="/products/food-products/fruits-and-vegetables"
                            title="Fruits & Vegetables"
                        />

                        <RelatedCategory
                            href="/products/food-products/grains"
                            title="Cereals, Pulses & Flours"
                        />

                        <RelatedCategory
                            href="/products/food-products/spices"
                            title="Spices"
                        />

                        <RelatedCategory
                            href="/products/food-products/fmcg"
                            title="FMCG"
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
                            Frozen food sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific frozen food?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, quantity, pack size, destination
                            market and any specifications you have. We&apos;ll use
                            your requirement as the starting point for the
                            conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href="/contact?product=Frozen%20Foods"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Frozen Food Quote
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
   FROZEN FOOD CARD
   =============================================================== */

function FrozenFoodCard({
    product,
}: {
    product: (typeof frozenCategories)[number];
}) {
    return (
        <Link
            href={`/products/food-products/frozen-foods/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >
            <div className="relative aspect-[1.15] overflow-hidden">
                <img
                    src={product.image}
                    alt={`${product.name} frozen food`}
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
   INFO CARD
   =============================================================== */

function InfoCard({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-[#dce9e4] bg-white p-6">
            <h3 className="text-base font-semibold text-[#23463f]">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#718680]">
                {text}
            </p>
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

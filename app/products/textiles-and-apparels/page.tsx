import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Textiles & Apparels | Textile Sourcing & Export | Al Huda",
    description:
        "Explore textiles and apparel categories sourced from India for international buyers, importers, distributors, wholesalers, retailers and commercial requirements.",
    keywords: [
        "textile exporter India",
        "apparel exporter India",
        "textile products supplier India",
        "textile sourcing India",
        "Indian textiles exporter",
        "garment exporter India",
        "apparel sourcing India",
        "clothing manufacturer India",
        "fabric supplier India",
        "textile sourcing company India",
        "readymade garments exporter India",
        "Indian clothing supplier",
    ],
    alternates: {
        canonical: "/products/textiles-and-apparels",
    },
    openGraph: {
        title: "Textiles & Apparels | Al Huda",
        description:
            "Explore Al Huda's textile and apparel sourcing portfolio for international buyers, importers, distributors, wholesalers and commercial businesses.",
        type: "website",
    },
};

const textileCategories = [
    {
        slug: "cotton-textiles",
        number: "01",
        name: "Cotton Textiles",
        description:
            "Cotton textile products for international buyers, distributors, retailers and commercial sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/cotton-textiles.webp",
        tags: ["Cotton", "Textiles"],
    },
    {
        slug: "fabrics",
        number: "02",
        name: "Fabrics",
        description:
            "Fabric categories for apparel production, home textiles, commercial applications and buyer-specific sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/fabrics.webp",
        tags: ["Fabrics", "Materials"],
    },
    {
        slug: "readymade-garments",
        number: "03",
        name: "Readymade Garments",
        description:
            "Ready-to-wear garment categories for importers, wholesalers, retailers and apparel distribution requirements.",
        image:
            "/images/products/textiles-and-apparels/readymade-garments.webp",
        tags: ["Garments", "Apparel"],
    },
    {
        slug: "mens-apparel",
        number: "04",
        name: "Men's Apparel",
        description:
            "Men's apparel categories for commercial sourcing, retail distribution and international clothing requirements.",
        image:
            "/images/products/textiles-and-apparels/mens-apparel.webp",
        tags: ["Menswear", "Apparel"],
    },
    {
        slug: "womens-apparel",
        number: "05",
        name: "Women's Apparel",
        description:
            "Women's apparel categories for retailers, distributors, importers and commercial fashion sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/womens-apparel.webp",
        tags: ["Womenswear", "Apparel"],
    },
    {
        slug: "kids-apparel",
        number: "06",
        name: "Kids' Apparel",
        description:
            "Children's clothing categories for wholesalers, retailers, distributors and international apparel sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/kids-apparel.webp",
        tags: ["Kids", "Apparel"],
    },
    {
        slug: "home-textiles",
        number: "07",
        name: "Home Textiles",
        description:
            "Home textile categories including textile products for household, hospitality and commercial requirements.",
        image:
            "/images/products/textiles-and-apparels/home-textiles.webp",
        tags: ["Home", "Textiles"],
    },
    {
        slug: "bed-linen",
        number: "08",
        name: "Bed Linen",
        description:
            "Bed linen and related textile categories for hospitality, retail, distribution and commercial sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/bed-linen.webp",
        tags: ["Bed Linen", "Home"],
    },
    {
        slug: "towels",
        number: "09",
        name: "Towels",
        description:
            "Towel and terry textile categories for retail, hospitality, institutional and commercial sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/towels.webp",
        tags: ["Towels", "Terry"],
    },
    {
        slug: "workwear",
        number: "10",
        name: "Workwear",
        description:
            "Workwear and occupational clothing categories for industrial, institutional and commercial requirements.",
        image:
            "/images/products/textiles-and-apparels/workwear.webp",
        tags: ["Workwear", "Industrial"],
    },
    {
        slug: "uniforms",
        number: "11",
        name: "Uniforms",
        description:
            "Uniform categories for corporate, institutional, hospitality, educational and other organisational requirements.",
        image:
            "/images/products/textiles-and-apparels/uniforms.webp",
        tags: ["Uniforms", "Custom"],
    },
    {
        slug: "custom-textile-requirements",
        number: "12",
        name: "Custom Textile Requirements",
        description:
            "Buyer-specific textile and apparel requirements can be discussed according to product, specifications, quantities and destination market.",
        image:
            "/images/products/textiles-and-apparels/custom-textile-requirements.webp",
        tags: ["Custom", "Buyer-Specific"],
    },
];

const sourcingFormats = [
    {
        number: "01",
        title: "Finished apparel",
        text: "Ready-to-wear apparel categories can be discussed according to garment type, specifications, quantities and destination market.",
    },
    {
        number: "02",
        title: "Fabric sourcing",
        text: "Fabric and textile sourcing requirements can be reviewed according to material, construction, finish, colour and intended application.",
    },
    {
        number: "03",
        title: "Bulk sourcing",
        text: "Commercial quantities can be discussed for importers, distributors, wholesalers, retailers and institutional buyers.",
    },
    {
        number: "04",
        title: "Buyer-specific requirements",
        text: "Product specifications, sizes, colours, packaging, labelling, quantities and other commercial requirements can be discussed during enquiry.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the textile or apparel product, material, specifications, quantity, destination and any available product details.",
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
];

export default function TextilesAndApparelsPage() {
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

                        <span className="font-medium text-[#345850]">
                            Textiles & Apparels
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Textiles & Apparels
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Textiles and apparel for
                                <span className="block text-[#07846d]">
                                    global sourcing.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore textile and apparel categories sourced for
                                international buyers, importers, distributors, wholesalers,
                                retailers and commercial businesses.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Textiles%20%26%20Apparels"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Textile Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#textile-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Products
                                </a>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=85"
                                    alt="Textiles and apparel products"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Textile Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Fabrics, garments and textile categories for international sourcing.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    12+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Product categories
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
                                    Textile sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From fabrics and garments to buyer-specific textile requirements.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our textiles and apparel portfolio covers a range of
                                categories for international buyers, importers,
                                distributors, wholesalers, retailers and institutional
                                customers.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product specifications, material, sizes, colours, quantities,
                                packaging, destination market, labelling and other commercial
                                requirements can be discussed as part of the sourcing enquiry.
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
                            href="#textile-catalogue"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Product Catalogue
                        </a>

                        <a
                            href="#formats"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Sourcing Formats
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
                CATALOGUE
            ========================================================= */}

            <section
                id="textile-catalogue"
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
                                Textile and apparel categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore individual textile and apparel categories and the
                                types of sourcing requirements they can support.
                            </p>

                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {textileCategories.length} categories
                        </div>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {textileCategories.map((product) => (
                            <TextileCard
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
                                    Sourcing formats
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Source around your textile requirement.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Textile and apparel requirements can vary by material,
                                garment type, specifications, quantities, market and
                                commercial application. These details can be discussed
                                during the enquiry process.
                            </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {sourcingFormats.map((format) => (
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
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=85"
                                alt="Textile fabrics and apparel products"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/55 to-transparent" />

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
                                Start with the textile details that matter.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Clear product and specification information helps establish
                                the right starting point for textile and apparel sourcing
                                enquiries.
                            </p>

                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the textile, fabric, garment or apparel product you are looking for."
                                />

                                <RequirementItem
                                    title="Material"
                                    text="Mention the required fibre, fabric composition, construction or material where applicable."
                                />

                                <RequirementItem
                                    title="Specifications"
                                    text="Share sizes, GSM, dimensions, colours, patterns, finishes or other available product details."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Share your expected purchasing, production or shipment quantity."
                                />

                                <RequirementItem
                                    title="Packaging"
                                    text="Mention preferred packaging, labelling, folding, presentation or packing requirements where applicable."
                                />

                                <RequirementItem
                                    title="Destination"
                                    text="Tell us the destination country or market and any relevant market-specific requirements."
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
                                From textile requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear product, specification and destination requirement
                                gives our team a better starting point for exploring
                                suitable sourcing and trade options.
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
                RELATED CATEGORIES
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
                            Explore other product categories.
                        </h2>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        <RelatedCategory
                            href="/products/food-products"
                            title="Food Products"
                        />

                        <RelatedCategory
                            href="/products/engineering-goods"
                            title="Engineering Goods"
                        />

                        <RelatedCategory
                            href="/products/automotive-components"
                            title="Automotive Components"
                        />

                        <RelatedCategory
                            href="/our-products"
                            title="All Products"
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
                            Textile sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific textile or apparel product?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, material, specifications, quantity,
                            destination market and any packaging or product information
                            you have. We&apos;ll use your requirement as the starting point
                            for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Textiles%20%26%20Apparels"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Textile Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/our-products"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Products
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   TEXTILE CARD
   =============================================================== */

function TextileCard({
    product,
}: {
    product: (typeof textileCategories)[number];
}) {
    return (
        <Link
            href={`/products/textiles-and-apparels/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} textile and apparel products`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

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

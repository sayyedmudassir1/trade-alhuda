import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tea & Coffee | Indian Tea & Coffee Sourcing & Export | Al Huda",
    description:
        "Explore tea and coffee sourced from India for international buyers, distributors, wholesalers, food businesses, retailers and commercial beverage requirements.",
    keywords: [
        "Indian tea exporter",
        "Indian coffee exporter",
        "tea exporter India",
        "coffee exporter India",
        "Indian tea supplier",
        "Indian coffee supplier",
        "bulk tea supplier India",
        "bulk coffee supplier India",
        "black tea exporter India",
        "green tea exporter India",
        "Assam tea exporter",
        "Darjeeling tea exporter",
        "Arabica coffee exporter India",
        "Robusta coffee exporter India",
        "instant coffee supplier India",
    ],
    alternates: {
        canonical: "/products/food-products/tea-and-coffee",
    },
    openGraph: {
        title: "Tea & Coffee | Al Huda",
        description:
            "Explore Al Huda's tea and coffee sourcing portfolio for international buyers, distributors, wholesalers and food businesses.",
        type: "website",
    },
};

const beverageProducts = [
    {
        slug: "black-tea",
        number: "01",
        name: "Black Tea",
        description:
            "Black tea sourced for distributors, wholesalers, retailers, food businesses and commercial beverage requirements.",
        image: "/images/products/food-products/black-tea.webp",
        tags: ["Tea", "Bulk"],
    },
    {
        slug: "green-tea",
        number: "02",
        name: "Green Tea",
        description:
            "Green tea for retail, foodservice, beverage businesses, distributors and international tea sourcing requirements.",
        image: "/images/products/food-products/green-tea.webp",
        tags: ["Tea", "Fresh"],
    },
    {
        slug: "assam-tea",
        number: "03",
        name: "Assam Tea",
        description:
            "Assam tea sourced for buyers seeking Indian-origin tea for blending, retail, foodservice and commercial distribution.",
        image: "/images/products/food-products/assam-tea.webp",
        tags: ["Tea", "Indian Origin"],
    },
    {
        slug: "darjeeling-tea",
        number: "04",
        name: "Darjeeling Tea",
        description:
            "Darjeeling tea for specialty tea buyers, distributors, retailers and premium beverage sourcing requirements.",
        image: "/images/products/food-products/darjeeling-tea.webp",
        tags: ["Tea", "Specialty"],
    },
    {
        slug: "masala-tea",
        number: "05",
        name: "Masala Tea",
        description:
            "Indian-style masala tea products for beverage businesses, retailers, foodservice and international markets.",
        image: "/images/products/food-products/masala-tea.webp",
        tags: ["Tea", "Blended"],
    },
    {
        slug: "tea-dust",
        number: "06",
        name: "Tea Dust",
        description:
            "Tea dust for commercial tea preparation, foodservice, blending and bulk beverage requirements.",
        image: "/images/products/food-products/tea-dust.webp",
        tags: ["Tea", "Bulk"],
    },
    {
        slug: "arabica-coffee",
        number: "07",
        name: "Arabica Coffee",
        description:
            "Arabica coffee sourced for roasters, distributors, beverage businesses and commercial coffee requirements.",
        image: "/images/products/food-products/arabica-coffee.webp",
        tags: ["Coffee", "Specialty"],
    },
    {
        slug: "robusta-coffee",
        number: "08",
        name: "Robusta Coffee",
        description:
            "Robusta coffee for commercial roasting, blending, beverage production and international coffee sourcing.",
        image: "/images/products/food-products/robusta-coffee.webp",
        tags: ["Coffee", "Bulk"],
    },
    {
        slug: "green-coffee-beans",
        number: "09",
        name: "Green Coffee Beans",
        description:
            "Green coffee beans for roasters, importers, distributors and commercial coffee processing requirements.",
        image: "/images/products/food-products/green-coffee-beans.webp",
        tags: ["Coffee", "Bulk"],
    },
    {
        slug: "roasted-coffee",
        number: "10",
        name: "Roasted Coffee",
        description:
            "Roasted coffee for retailers, food businesses, distributors and commercial beverage applications.",
        image: "/images/products/food-products/roasted-coffee.webp",
        tags: ["Coffee", "Roasted"],
    },
    {
        slug: "instant-coffee",
        number: "11",
        name: "Instant Coffee",
        description:
            "Instant coffee for retail, foodservice, hospitality, beverage businesses and commercial distribution requirements.",
        image: "/images/products/food-products/instant-coffee.webp",
        tags: ["Coffee", "Convenience"],
    },
    {
        slug: "coffee-powder",
        number: "12",
        name: "Coffee Powder",
        description:
            "Ground coffee powder for foodservice, retail, hospitality, beverage businesses and commercial requirements.",
        image: "/images/products/food-products/coffee-powder.webp",
        tags: ["Coffee", "Ground"],
    },
];

const formats = [
    {
        number: "01",
        title: "Bulk tea",
        text: "Tea products for wholesalers, distributors, retailers, foodservice and commercial beverage businesses.",
    },
    {
        number: "02",
        title: "Bulk coffee",
        text: "Coffee products for importers, roasters, distributors, retailers and commercial beverage requirements.",
    },
    {
        number: "03",
        title: "Tea & coffee varieties",
        text: "Product type, origin, grade, blend and other specifications can be discussed according to buyer requirements.",
    },
    {
        number: "04",
        title: "Buyer-specific requirements",
        text: "Packaging, labelling, quantity, destination market and other commercial specifications can be discussed during enquiry.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the tea or coffee type, quantity, preferred origin, grade, packaging and destination market.",
    },
    {
        number: "02",
        title: "Review sourcing options",
        text: "We explore suitable sourcing possibilities based on the product, market and information provided in your enquiry.",
    },
    {
        number: "03",
        title: "Confirm specifications",
        text: "Product type, grade, origin, packaging, quantity, commercial and documentation requirements are reviewed before proceeding.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated.",
    },
];

const relatedCategories = [
    {
        href: "/products/food-products/fruits-and-vegetables",
        title: "Fruits & Vegetables",
    },
    {
        href: "/products/food-products/grains",
        title: "Cereals, Pulses & Flours",
    },
    {
        href: "/products/food-products/spices",
        title: "Spices",
    },
    {
        href: "/products/food-products/frozen-foods",
        title: "Frozen Foods",
    },
    {
        href: "/products/food-products/fmcg",
        title: "FMCG",
    },
];

export default function TeaAndCoffeePage() {
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
                            Tea &amp; Coffee
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products / Tea &amp; Coffee
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Indian tea &amp; coffee for
                                <span className="block text-[#07846d]">
                                    global buyers.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore tea and coffee sourced for international
                                buyers, distributors, wholesalers, retailers,
                                roasters, food businesses and commercial beverage
                                requirements.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Tea%20%26%20Coffee"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Tea &amp; Coffee Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#beverage-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Products
                                </a>

                            </div>

                        </div>


                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1400&q=85"
                                    alt="Tea and coffee products"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Beverage Sourcing Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Tea, coffee and buyer-specific beverage requirements.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    12+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Tea &amp; coffee categories
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
                                    Tea &amp; coffee sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From everyday beverage products to specialty sourcing requirements.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our tea and coffee portfolio covers widely traded
                                beverage categories, giving international buyers a
                                starting point for exploring suitable sourcing options.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product type, origin, grade, blend, roast, quantity,
                                packaging, destination market and other commercial
                                requirements can be discussed as part of the sourcing
                                enquiry.
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
                            href="#beverage-catalogue"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Catalogue
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
                CATALOGUE
            ========================================================= */}

            <section
                id="beverage-catalogue"
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
                                Tea &amp; coffee categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore individual beverage categories and the sourcing
                                requirements that can be discussed for each product.
                            </p>

                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {beverageProducts.length} categories
                        </div>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {beverageProducts.map((product) => (
                            <BeverageCard
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
                                Build the sourcing format around your beverage requirement.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Tea and coffee requirements can vary by product, origin,
                                grade, blend, roast, packaging and commercial quantity.
                                These details can be discussed during the enquiry
                                process.
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
                                src="/images/products/food-products/tea-and-coffee.avif"
                                alt="Tea and coffee sourcing"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/45 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Beverage specifications matter
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
                                Every tea and coffee sourcing requirement can be
                                different. Providing clear information helps the
                                sourcing process start with a better understanding of
                                what you need.
                            </p>


                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the tea or coffee product, variety, type or preparation you are looking for."
                                />

                                <RequirementItem
                                    title="Origin"
                                    text="Mention preferred origin, region or country where applicable."
                                />

                                <RequirementItem
                                    title="Grade & profile"
                                    text="Share preferred grade, blend, roast level, leaf style, bean type or other product requirements."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Share your expected order, shipment or recurring purchasing quantity."
                                />

                                <RequirementItem
                                    title="Packaging"
                                    text="Mention preferred packaging, labelling or handling requirements where applicable."
                                />

                                <RequirementItem
                                    title="Destination"
                                    text="Tell us the destination country or market for the enquiry."
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
                                From beverage requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear requirement gives our team a better starting
                                point for exploring suitable sourcing and trade options.
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
                            Other food categories.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                        {relatedCategories.map((category) => (
                            <RelatedCategory
                                key={category.href}
                                href={category.href}
                                title={category.title}
                            />
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
                            Tea &amp; coffee sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific tea or coffee?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, origin, quantity, preferred grade,
                            roast or blend, destination market and any specifications
                            you have. We&apos;ll use your requirement as the starting
                            point for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Tea%20%26%20Coffee"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Tea &amp; Coffee Quote
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
   BEVERAGE CARD
   =============================================================== */

function BeverageCard({
    product,
}: {
    product: (typeof beverageProducts)[number];
}) {
    return (
        <Link
            href={`/products/food-products/tea-and-coffee/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} tea and coffee product`}
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

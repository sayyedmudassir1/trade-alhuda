import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Company Profile | Al Huda Global Trade & Logistics",
    description:
        "Learn about Al Huda, an India-based international trade company connecting businesses with sourcing, import-export, logistics and global trade solutions.",
    keywords: [
        "Al Huda company profile",
        "Al Huda international trade",
        "India export company",
        "import export company India",
        "global sourcing India",
        "international trade company Mumbai",
        "export sourcing India",
        "global trade logistics",
    ],
    alternates: {
        canonical: "/about-us/company-profile",
    },
    openGraph: {
        title: "Company Profile | Al Huda",
        description:
            "Discover Al Huda's approach to sourcing, international trade, logistics and long-term business partnerships.",
        type: "website",
    },
};

const capabilities = [
    {
        number: "01",
        title: "Global Sourcing",
        description:
            "Connecting buyers with suitable manufacturers, producers and suppliers based on product requirements.",
    },
    {
        number: "02",
        title: "Import & Export",
        description:
            "Supporting international trade requirements across products, markets and commercial relationships.",
    },
    {
        number: "03",
        title: "Trade Coordination",
        description:
            "Bringing sourcing, specifications, documentation and logistics requirements together.",
    },
    {
        number: "04",
        title: "International Partnerships",
        description:
            "Building business relationships designed around clear communication and long-term trade opportunities.",
    },
];

const principles = [
    {
        number: "01",
        title: "Clarity",
        description:
            "We believe international business works better when product requirements, specifications, commercial expectations and responsibilities are clearly understood.",
    },
    {
        number: "02",
        title: "Reliability",
        description:
            "Consistent communication and responsible coordination are central to building confidence between businesses across borders.",
    },
    {
        number: "03",
        title: "Quality Focus",
        description:
            "Product requirements and agreed quality parameters should remain visible throughout the sourcing and trade process.",
    },
    {
        number: "04",
        title: "Long-Term Thinking",
        description:
            "We focus on developing relationships and trade corridors that can support repeat business rather than isolated transactions.",
    },
];

const productCategories = [
    {
        title: "Food Products",
        description:
            "Spices, grains, pulses, flours, fruits and vegetables, frozen foods, FMCG, tea and coffee.",
        href: "/products/food-products",
    },
    {
        title: "Imitation Jewellery",
        description:
            "Fashion and decorative jewellery products for international buyers and distributors.",
        href: "/products/imitation-jewellery",
    },
    {
        title: "Engineering Goods",
        description:
            "Industrial and engineering products sourced according to buyer requirements.",
        href: "/products/engineering-goods",
    },
    {
        title: "Automotive Components",
        description:
            "Components and related products for automotive and industrial applications.",
        href: "/products/automotive-components",
    },
    {
        title: "Pharmaceuticals & Biologicals",
        description:
            "Pharmaceutical and biological product categories subject to applicable requirements.",
        href: "/products/pharmaceuticals-biologicals",
    },
    {
        title: "Textiles & Apparel",
        description:
            "Textile materials, garments and apparel categories for international trade.",
        href: "/products/textiles-and-apparel",
    },
    {
        title: "General Merchandise",
        description:
            "A broader range of consumer and commercial products based on sourcing requirements.",
        href: "/products/general-merchandise",
    },
];

const markets = [
    "India",
    "United Kingdom",
    "United States",
    "Canada",
    "European Union",
    "Germany",
    "United Arab Emirates",
    "Middle East",
    "Singapore",
    "Asia Pacific",
    "Australia",
];

export default function CompanyProfilePage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full bg-[#b8ddd2]/45 blur-3xl" />

                <div className="absolute bottom-[-250px] left-[10%] h-[500px] w-[500px] rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#718881]"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-[#087d68]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <Link
                            href="/about-us"
                            className="transition hover:text-[#087d68]"
                        >
                            About Us
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#3d5a53]">
                            Company Profile
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">

                        {/* Hero copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Company Profile
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">
                                Connecting
                                <span className="block text-[#087d68]">
                                    businesses across borders.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Al Huda works at the intersection of sourcing,
                                international trade and logistics, helping businesses
                                explore reliable product and supply opportunities across
                                global markets.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?subject=Business%20Enquiry"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Start a Conversation
                                    <span className="ml-2">→</span>
                                </Link>

                                <Link
                                    href="/our-products"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd8d0] bg-white/70 px-7 text-sm font-semibold text-[#23463f] transition hover:bg-white"
                                >
                                    Explore Products
                                </Link>

                            </div>

                        </div>


                        {/* Hero visual */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=90"
                                    alt="Modern international business office"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#123b34]/75 via-[#123b34]/10 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aee2d3]">
                                            Al Huda
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Global Trade & Logistics
                                        </p>

                                        <p className="mt-2 text-sm leading-5 text-[#d5e9e4]">
                                            India-based. Internationally focused.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Floating location card */}

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e6e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a8f89]">
                                    Headquarters
                                </div>

                                <div className="mt-1 text-sm font-semibold text-[#23463f]">
                                    Mumbai, India
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          SUB NAV
      ========================================================= */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#company"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Company
                        </a>

                        <a
                            href="#what-we-do"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            What We Do
                        </a>

                        <a
                            href="#capabilities"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Capabilities
                        </a>

                        <a
                            href="#principles"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Our Approach
                        </a>

                        <a
                            href="#products"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Product Categories
                        </a>

                        <a
                            href="#markets"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Markets
                        </a>

                    </nav>

                </div>

            </section>


            {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================= */}

            <section
                id="company"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Who we are
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                A bridge between products, businesses and markets.
                            </h2>

                        </div>


                        <div className="max-w-3xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Al Huda is an India-based international trade business
                                focused on connecting buyers, suppliers and commercial
                                opportunities across borders.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Our work spans product sourcing, supplier coordination,
                                trade documentation, logistics and international business
                                development. Depending on the requirement, we work with
                                businesses looking to source products from India, develop
                                supply relationships or explore opportunities in
                                international markets.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                We approach every requirement as a trade relationship
                                rather than simply a product enquiry. That means
                                understanding the specification, identifying suitable
                                options and coordinating the practical requirements that
                                help move an international transaction forward.
                            </p>


                            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                <ProfileStat
                                    value="01"
                                    label="Sourcing"
                                />

                                <ProfileStat
                                    value="02"
                                    label="Trade"
                                />

                                <ProfileStat
                                    value="03"
                                    label="Logistics"
                                />

                                <ProfileStat
                                    value="04"
                                    label="Partnerships"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          WHAT WE DO
      ========================================================= */}

            <section
                id="what-we-do"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                What we do
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Bringing the key parts of international trade together.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            International trade can involve multiple parties,
                            requirements and moving parts. Our role is to help connect
                            those pieces around the needs of the transaction.
                        </p>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {capabilities.map((item) => (
                            <div
                                key={item.number}
                                className="group rounded-[1.5rem] border border-[#dfe9e4] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:shadow-[0_18px_45px_rgba(20,70,60,0.07)]"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                        {item.number}
                                    </span>

                                    <span className="text-[#b0c9c1] transition group-hover:text-[#087d68]">
                                        ↗
                                    </span>

                                </div>

                                <h3 className="mt-7 text-lg font-semibold text-[#29483f]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                    {item.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          CAPABILITIES FEATURE
      ========================================================= */}

            <section
                id="capabilities"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* Image */}

                        <div className="relative overflow-hidden rounded-[2rem]">

                            <img
                                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=90"
                                alt="Business partnership and international trade discussion"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#123b34]/65 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">

                                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aee2d3]">
                                        Our role
                                    </p>

                                    <p className="mt-2 text-lg font-semibold text-white">
                                        Connecting requirements with opportunities.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Content */}

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Trade capability
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From a product requirement to a trade relationship.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                A buyer may begin with a simple requirement: a product,
                                a quantity, a specification or a destination market.
                                Turning that enquiry into an international transaction
                                can require considerably more coordination.
                            </p>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Al Huda brings sourcing, supplier communication,
                                product requirements, documentation and logistics into
                                one coordinated trade conversation.
                            </p>


                            <div className="mt-8 space-y-3">

                                <CapabilityRow
                                    title="Understand the requirement"
                                    description="Product, quantity, specifications, destination and commercial expectations."
                                />

                                <CapabilityRow
                                    title="Explore suitable supply"
                                    description="Identify manufacturers, producers or suppliers relevant to the requirement."
                                />

                                <CapabilityRow
                                    title="Coordinate the transaction"
                                    description="Bring together product, documentation, logistics and agreed trade requirements."
                                />

                                <CapabilityRow
                                    title="Build the relationship"
                                    description="Create a foundation for repeat business and longer-term international cooperation."
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          OUR APPROACH
      ========================================================= */}

            <section
                id="principles"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Our approach
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                The way we think about international business.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                Strong trade relationships are built through clear
                                expectations, consistent communication and attention to
                                the details that matter.
                            </p>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2">

                            {principles.map((item) => (
                                <div
                                    key={item.number}
                                    className="rounded-[1.5rem] border border-[#d6e7df] bg-white p-7"
                                >

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-6 text-lg font-semibold text-[#29483f]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                        {item.description}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          PRODUCT CATEGORIES
      ========================================================= */}

            <section
                id="products"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Our portfolio
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Product categories for global markets.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Our portfolio spans multiple product categories, with
                                sourcing and trade requirements assessed according to
                                each enquiry.
                            </p>

                        </div>


                        <Link
                            href="/our-products"
                            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-[#c8ddd6] px-5 text-sm font-semibold text-[#31564d] transition hover:border-[#087d68] hover:text-[#087d68]"
                        >
                            View All Products
                            <span className="ml-2">→</span>
                        </Link>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        {productCategories.map((item, index) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="group rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-[10px] font-bold tracking-[0.12em] text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-[#a6beb7] transition group-hover:text-[#087d68]">
                                        ↗
                                    </span>

                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-[#29483f]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                    {item.description}
                                </p>

                                <div className="mt-5 text-xs font-semibold text-[#087d68]">
                                    Explore category →
                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          INDIA / GLOBAL POSITION
      ========================================================= */}

            <section className="bg-[#123b34]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    India → Global
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                                An India-based business with an international outlook.
                            </h2>

                            <p className="mt-6 max-w-xl leading-7 text-[#b5d1ca]">
                                India offers a broad manufacturing, agricultural,
                                pharmaceutical, textile and engineering ecosystem. We
                                work to connect relevant opportunities from this market
                                with businesses looking to develop international supply
                                relationships.
                            </p>

                            <p className="mt-5 max-w-xl leading-7 text-[#b5d1ca]">
                                Our Mumbai base provides the foundation for our
                                international trade operations and business
                                communication.
                            </p>

                        </div>


                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                            <DarkStat
                                value="IN"
                                label="India"
                            />

                            <DarkStat
                                value="01"
                                label="Trade Base"
                            />

                            <DarkStat
                                value="11+"
                                label="Markets"
                            />

                            <DarkStat
                                value="07"
                                label="Categories"
                            />

                            <DarkStat
                                value="01"
                                label="Global Outlook"
                            />

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                <div className="text-2xl font-semibold text-[#8cdbc7]">
                                    ↗
                                </div>

                                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9abbb3]">
                                    Global partnerships
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          MARKETS
      ========================================================= */}

            <section
                id="markets"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                International reach
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Connecting with businesses across markets.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Our international focus includes buyers, distributors,
                            businesses and trade relationships across a range of
                            markets.
                        </p>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {markets.map((market, index) => (
                            <div
                                key={market}
                                className="group rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-sm font-semibold text-[#345850]">
                                        {market}
                                    </span>

                                    <span className="text-xs text-[#9bb6ae] transition group-hover:text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          COMPANY DETAILS
      ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-6 lg:grid-cols-3">

                        <div className="rounded-[1.5rem] border border-[#dfe9e4] bg-white p-7 lg:col-span-2">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Company information
                                </span>

                            </div>

                            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#153b35]">
                                Al Huda
                            </h2>

                            <p className="mt-2 text-sm font-medium text-[#087d68]">
                                Global Trade & Logistics
                            </p>


                            <div className="mt-7 grid gap-6 sm:grid-cols-2">

                                <CompanyDetail
                                    label="Headquarters"
                                    value="S. No. 92, Crawford Market, Office No. 102, Ground Floor, Dadabhai Building, C.T. Division, Mandvi, Mumbai, Maharashtra 400003"
                                />

                                <CompanyDetail
                                    label="Global Desk"
                                    value="alhudaworldtravels@gmail.com"
                                    href="mailto:alhudaworldtravels@gmail.com"
                                />

                                <CompanyDetail
                                    label="WhatsApp"
                                    value="+91 98332 06053"
                                    href="https://wa.me/919833206053"
                                />

                                <CompanyDetail
                                    label="Business Focus"
                                    value="International sourcing, import-export and trade coordination"
                                />

                            </div>

                        </div>


                        <div className="rounded-[1.5rem] bg-[#087d68] p-7 text-white">

                            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9e9dc]">
                                Work with us
                            </div>

                            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                                Looking for a sourcing or trade partner?
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-[#d0f0e8]">
                                Share your product, quantity, specification and
                                destination requirements with our team.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Contact Al Huda
                                <span className="ml-2">→</span>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          CTA
      ========================================================= */}

            <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#e8f3ef] px-7 py-14 text-center sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#087d68] text-white">
                        ↗
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                        Let's work together
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-5xl">
                        Let&apos;s build the next trade connection.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-[#637a74]">
                        Whether you are looking to source products, develop a supply
                        relationship or explore an international trade opportunity,
                        start by telling us what you need.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                        >
                            Start a Conversation
                            <span className="ml-2">→</span>
                        </Link>

                        <Link
                            href="/logistics-and-quality"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd8d0] bg-white px-7 text-sm font-semibold text-[#31564d] transition hover:border-[#087d68] hover:text-[#087d68]"
                        >
                            Logistics & Quality
                        </Link>

                    </div>

                </div>

            </section>


            {/* =========================================================
          FOOTNOTE
      ========================================================= */}

            <section className="border-t border-[#dfe9e4] bg-white">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

                    <p className="text-center text-xs leading-5 text-[#82928d]">
                        Product availability, specifications, supplier capacity,
                        certifications, trade terms and other commercial parameters
                        are subject to the specific enquiry and formal contractual
                        agreement.
                    </p>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   PROFILE STAT
   =============================================================== */

function ProfileStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] p-4">

            <div className="text-sm font-semibold text-[#087d68]">
                {value}
            </div>

            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7b918b]">
                {label}
            </div>

        </div>
    );
}


/* ===============================================================
   CAPABILITY ROW
   =============================================================== */

function CapabilityRow({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-5">

            <div className="flex gap-4">

                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

                <div>

                    <h3 className="text-sm font-semibold text-[#29483f]">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#71827d]">
                        {description}
                    </p>

                </div>

            </div>

        </div>
    );
}


/* ===============================================================
   DARK STAT
   =============================================================== */

function DarkStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="text-2xl font-semibold text-[#8cdbc7]">
                {value}
            </div>

            <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9abbb3]">
                {label}
            </div>

        </div>
    );
}


/* ===============================================================
   COMPANY DETAIL
   =============================================================== */

function CompanyDetail({
    label,
    value,
    href,
}: {
    label: string;
    value: string;
    href?: string;
}) {
    return (
        <div>

            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#81938d]">
                {label}
            </div>

            {href ? (
                <a
                    href={href}
                    className="mt-2 block text-sm leading-6 text-[#31564d] transition hover:text-[#087d68]"
                >
                    {value}
                </a>
            ) : (
                <p className="mt-2 text-sm leading-6 text-[#526d67]">
                    {value}
                </p>
            )}

        </div>
    );
}

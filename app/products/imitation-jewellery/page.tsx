import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Imitation Jewellery | Fashion Jewellery Sourcing | Al Huda",
    description:
        "Explore imitation and fashion jewellery sourcing options from India for international buyers, distributors, retailers and jewellery businesses.",
    keywords: [
        "imitation jewellery exporter India",
        "fashion jewellery supplier India",
        "artificial jewellery wholesale India",
        "imitation jewellery sourcing",
        "Indian fashion jewellery exporter",
        "costume jewellery supplier",
        "bulk imitation jewellery India",
    ],
    alternates: {
        canonical: "/products/imitation-jewellery",
    },
    openGraph: {
        title: "Imitation Jewellery | Al Huda",
        description:
            "Explore imitation and fashion jewellery sourcing options for international markets.",
        type: "website",
    },
};

const categories = [
    {
        number: "01",
        title: "Fashion Jewellery",
        description:
            "Contemporary jewellery styles designed for everyday fashion, retail collections and changing market trends.",
        href: "/products/imitation-jewellery/fashion-jewellery",
        image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "02",
        title: "Necklaces",
        description:
            "Necklace styles ranging from lightweight fashion pieces to statement designs and coordinated collections.",
        href: "/products/imitation-jewellery/necklaces",
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "03",
        title: "Earrings",
        description:
            "Commercial earring styles across different silhouettes, finishes and fashion-led designs.",
        href: "/products/imitation-jewellery/earrings",
        image:
            "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "04",
        title: "Bangles",
        description:
            "Fashion and traditional-inspired bangle styles suitable for retail and collection-based sourcing.",
        href: "/products/imitation-jewellery/bangles",
        image:
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "05",
        title: "Bracelets",
        description:
            "Bracelet designs across everyday, fashion and statement jewellery categories.",
        href: "/products/imitation-jewellery/bracelets",
        image:
            "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "06",
        title: "Rings",
        description:
            "Fashion ring styles for different customer segments, collections and retail requirements.",
        href: "/products/imitation-jewellery/rings",
        image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "07",
        title: "Pendants",
        description:
            "Standalone pendant designs and complementary jewellery pieces for commercial collections.",
        href: "/products/imitation-jewellery/pendants",
        image:
            "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "08",
        title: "Jewellery Sets",
        description:
            "Coordinated jewellery sets for retailers, distributors, festive collections and occasion-led ranges.",
        href: "/products/imitation-jewellery/jewellery-sets",
        image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    },
];

const buyerTypes = [
    "Jewellery retailers",
    "Fashion retailers",
    "Importers & distributors",
    "Department stores",
    "E-commerce businesses",
    "Boutique & lifestyle brands",
];

const sourcingFactors = [
    {
        number: "01",
        title: "Design & collection",
        text:
            "Share the styles, collections, occasions or customer segments you are looking to source for.",
    },
    {
        number: "02",
        title: "Materials & finishes",
        text:
            "Product discussions can include the required materials, finishes, colours, stones and other specifications.",
    },
    {
        number: "03",
        title: "Quantity & packaging",
        text:
            "Provide expected quantities, packaging preferences and any retail or labelling requirements.",
    },
    {
        number: "04",
        title: "Destination market",
        text:
            "Tell us where the products will be supplied so the sourcing discussion can reflect your market requirements.",
    },
];

export default function ImitationJewelleryPage() {
    return (
        <main className="min-h-screen bg-[#fbfaf8] text-[#29251f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#f1eee8]">

                {/* Decorative background */}

                <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#d8c7a6]/25 blur-3xl" />

                <div className="absolute -right-32 -top-20 h-[500px] w-[500px] rounded-full bg-[#eadfc9]/50 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#817a6f]"
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

                        <span className="font-medium text-[#514b42]">
                            Imitation Jewellery
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">

                        {/* Hero content */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Global Trade / Imitation Jewellery
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#29251f] sm:text-6xl lg:text-7xl">
                                Jewellery made
                                <span className="block text-[#087d68]">
                                    for changing markets.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-7 text-[#6e685e] sm:text-lg sm:leading-8">
                                Explore imitation and fashion jewellery sourcing options
                                for retailers, distributors, importers and international
                                businesses looking to develop commercial jewellery
                                collections.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Imitation%20Jewellery"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Jewellery Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#collections"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#d3cfc5] bg-white/70 px-7 text-sm font-semibold text-[#39352f] transition hover:bg-white"
                                >
                                    Explore Categories
                                </a>

                            </div>

                        </div>


                        {/* Hero visual */}

                        <div className="relative">

                            <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(55,45,30,0.14)]">

                                <img
                                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1500&q=90"
                                    alt="Imitation and fashion jewellery collection"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#251f18]/70 via-transparent to-[#251f18]/5" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <div className="flex items-end justify-between gap-4">

                                            <div>

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e6d2a5]">
                                                    Product portfolio
                                                </p>

                                                <p className="mt-2 text-xl font-semibold text-white">
                                                    Imitation Jewellery
                                                </p>

                                            </div>

                                            <span className="text-3xl text-[#e6d2a5]">
                                                ◇
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Floating card */}

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#ded8cc] bg-white p-4 shadow-[0_15px_40px_rgba(50,40,25,0.09)] sm:-left-8">

                                <div className="text-xl font-semibold tracking-tight text-[#a37b30]">
                                    08
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7b766e]">
                                    Product categories
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          STICKY NAV
      ========================================================= */}

            <section className="sticky top-0 z-30 border-y border-[#e4e0d8] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#overview"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Overview
                        </a>

                        <a
                            href="#collections"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#706b62] hover:bg-[#f1f7f4] hover:text-[#087d68]"
                        >
                            Collections
                        </a>

                        <a
                            href="#buyers"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#706b62] hover:bg-[#f1f7f4] hover:text-[#087d68]"
                        >
                            Buyers
                        </a>

                        <a
                            href="#sourcing"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#706b62] hover:bg-[#f1f7f4] hover:text-[#087d68]"
                        >
                            Sourcing
                        </a>

                        <a
                            href="#enquiry"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#706b62] hover:bg-[#f1f7f4] hover:text-[#087d68]"
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

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Jewellery sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2c2822] sm:text-4xl">
                                A flexible portfolio for fashion-led jewellery businesses.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#5f5a51]">
                                Imitation jewellery covers a broad range of products,
                                from everyday fashion pieces to coordinated collections
                                designed around particular occasions, trends or customer
                                segments.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#817b71]">
                                Al Huda supports international sourcing conversations
                                around product categories, design direction, quantity,
                                packaging, destination market and other buyer
                                requirements.
                            </p>


                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                <MiniStat value="08" label="Categories" />

                                <MiniStat value="B2B" label="Sourcing" />

                                <MiniStat value="Global" label="Markets" />

                                <MiniStat value="Custom" label="Requirements" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          COLLECTIONS
      ========================================================= */}

            <section
                id="collections"
                className="scroll-mt-20 bg-[#f8f6f1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Explore the portfolio
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#2c2822] sm:text-4xl">
                                Jewellery categories for different collections.
                            </h2>

                            <p className="mt-5 leading-7 text-[#746e65]">
                                Explore individual categories and develop your sourcing
                                requirement around the products most relevant to your
                                market.
                            </p>

                        </div>

                        <Link
                            href="/contact?product=Imitation%20Jewellery"
                            className="inline-flex shrink-0 items-center text-sm font-semibold text-[#087d68]"
                        >
                            Discuss your requirement
                            <span className="ml-2">→</span>
                        </Link>

                    </div>


                    {/* Category grid */}

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {categories.map((category) => (
                            <Link
                                key={category.number}
                                href={category.href}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#e3dfd6] bg-white shadow-[0_8px_30px_rgba(60,50,35,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(60,50,35,0.09)]"
                            >

                                <div className="relative aspect-[1/1.05] overflow-hidden">

                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#201b15]/70 via-transparent to-transparent" />

                                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[9px] font-bold text-[#9a742e]">
                                        {category.number}
                                    </span>

                                    <div className="absolute bottom-4 left-4 right-4">

                                        <h3 className="text-xl font-semibold text-white">
                                            {category.title}
                                        </h3>

                                    </div>

                                </div>


                                <div className="p-5">

                                    <p className="text-sm leading-6 text-[#756f66]">
                                        {category.description}
                                    </p>

                                    <div className="mt-5 flex items-center text-xs font-semibold text-[#087d68]">

                                        Explore category

                                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                                            →
                                        </span>

                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          VISUAL BREAK / COLLECTION STATEMENT
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid overflow-hidden rounded-[2rem] bg-[#ede8dd] lg:grid-cols-2">

                        <div className="relative min-h-[420px]">

                            <img
                                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=90"
                                alt="Fashion jewellery collection"
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-[#211b13]/35 to-transparent" />

                        </div>


                        <div className="flex items-center p-8 sm:p-12 lg:p-16">

                            <div className="max-w-lg">

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#087d68]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                        Market-led collections
                                    </span>

                                </div>

                                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#302b24] sm:text-4xl">
                                    From individual pieces to complete collections.
                                </h2>

                                <p className="mt-5 leading-7 text-[#70695f]">
                                    Jewellery sourcing can be approached around a specific
                                    product, a broader collection or a particular retail
                                    market. Share your direction and requirements so the
                                    conversation can begin with the right context.
                                </p>

                                <Link
                                    href="/contact?product=Imitation%20Jewellery"
                                    className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#087d68] px-6 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Start a sourcing conversation
                                    <span className="ml-2">→</span>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          BUYERS
      ========================================================= */}

            <section
                id="buyers"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Who we work with
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#243e38] sm:text-4xl">
                                Built around commercial buyers.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#6b817b]">
                                Different jewellery businesses may have different
                                requirements around style, quantity, packaging and
                                market positioning.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {buyerTypes.map((buyer, index) => (
                                <div
                                    key={buyer}
                                    className="flex items-center gap-4 rounded-2xl border border-[#dfe9e4] bg-white p-5"
                                >

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-medium text-[#38564f]">
                                        {buyer}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          SOURCING REQUIREMENTS
      ========================================================= */}

            <section
                id="sourcing"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Sourcing requirements
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#2c2822] sm:text-4xl">
                            The clearer the requirement, the better the sourcing conversation.
                        </h2>

                        <p className="mt-5 leading-7 text-[#756f66]">
                            When you contact Al Huda, these details can help establish
                            the right starting point for your requirement.
                        </p>

                    </div>


                    <div className="grid gap-4 md:grid-cols-2">

                        {sourcingFactors.map((factor) => (
                            <div
                                key={factor.number}
                                className="rounded-[1.5rem] border border-[#e2e7e4] bg-[#f8fbf9] p-7"
                            >

                                <div className="flex items-start gap-5">

                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2f3ee] text-[10px] font-bold text-[#087d68]">
                                        {factor.number}
                                    </span>

                                    <div>

                                        <h3 className="text-lg font-semibold text-[#29483f]">
                                            {factor.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#71827d]">
                                            {factor.text}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          PROCESS
      ========================================================= */}

            <section className="bg-[#153b34] text-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#72d0b6]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#72d0b6]">
                                    Trade process
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                From jewellery requirement to trade discussion.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A straightforward process focused on understanding the
                                buyer&apos;s requirement before moving into commercial
                                and logistics discussions.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <ProcessStep
                                number="01"
                                title="Share your requirement"
                                text="Tell us the categories, styles, quantity, destination and other relevant requirements."
                            />

                            <ProcessStep
                                number="02"
                                title="Review sourcing options"
                                text="Suitable product and sourcing possibilities can be explored against the requirement."
                            />

                            <ProcessStep
                                number="03"
                                title="Discuss commercial details"
                                text="Product specifications, quantities, packaging and commercial terms can be discussed."
                            />

                            <ProcessStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once requirements and terms are agreed, documentation and shipment requirements can be coordinated."
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
                                Explore more
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#2c2822]">
                            Explore Al Huda&apos;s wider product portfolio.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        <RelatedProduct
                            href="/products/food-products"
                            title="Food Products"
                            description="Spices, grains, fruits, FMCG and more."
                        />

                        <RelatedProduct
                            href="/products/engineering-goods"
                            title="Engineering Goods"
                            description="Industrial and engineering product categories."
                        />

                        <RelatedProduct
                            href="/products/automotive-components"
                            title="Automotive Components"
                            description="Components and related automotive products."
                        />

                        <RelatedProduct
                            href="/products/textiles-apparel"
                            title="Textiles & Apparel"
                            description="Textile and apparel sourcing categories."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
          CTA
      ========================================================= */}

            <section
                id="enquiry"
                className="scroll-mt-20 bg-[#f8f6f1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#087d68] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">

                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                            <span className="text-lg">
                                ◇
                            </span>
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8eadc]">
                            Jewellery sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for imitation jewellery?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d1f1e9]">
                            Tell us what you are looking for, where you need it
                            delivered and the type of collection or product you want
                            to source.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Imitation%20Jewellery"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Jewellery Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/our-products"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                View All Products
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   MINI STAT
   =============================================================== */

function MiniStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border border-[#e2e7e3] bg-[#f8fbf9] p-4">

            <div className="text-sm font-semibold text-[#087d68]">
                {value}
            </div>

            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7c8e88]">
                {label}
            </div>

        </div>
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

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4fae98]/40 text-xs font-semibold text-[#72d0b6]">
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


/* ===============================================================
   RELATED PRODUCT
   =============================================================== */

function RelatedProduct({
    href,
    title,
    description,
}: {
    href: string;
    title: string;
    description: string;
}) {
    return (
        <Link
            href={href}
            className="group min-h-[125px] rounded-2xl border border-[#e1e7e3] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <div className="flex items-start justify-between gap-3">

                <h3 className="text-sm font-semibold text-[#345850]">
                    {title}
                </h3>

                <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                    →
                </span>

            </div>

            <p className="mt-3 text-xs leading-5 text-[#7b8b86]">
                {description}
            </p>

        </Link>
    );
}

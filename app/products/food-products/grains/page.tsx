import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Grains, Pulses & Flours | Indian Food Sourcing & Export | Al Huda",
    description:
        "Explore grains, cereals, pulses and flour products sourced from India for international buyers, distributors, food businesses and importers. Explore rice, wheat, maize, millets, chickpeas, lentils, kidney beans and more.",
    keywords: [
        "Indian grains exporter",
        "grains exporter India",
        "Indian rice supplier",
        "rice exporter India",
        "Indian pulses exporter",
        "pulses supplier India",
        "wheat exporter India",
        "maize exporter India",
        "chickpeas exporter India",
        "lentils exporter India",
        "kidney beans exporter India",
        "millet exporter India",
        "Indian flour supplier",
        "bulk grains India",
    ],
    alternates: {
        canonical: "/products/food-products/grains",
    },
    openGraph: {
        title: "Grains, Pulses & Flours | Al Huda",
        description:
            "Explore Al Huda's grains, cereals, pulses and flour sourcing portfolio for international buyers and food businesses.",
        type: "website",
    },
};

const grainProducts = [
    {
        slug: "basmati-rice",
        number: "01",
        name: "Basmati Rice",
        description:
            "Basmati rice products for international food businesses, distributors, retailers and commercial sourcing requirements.",
        image:
            "/images/products/food-products/grains/basmati-rice.webp",
        tags: ["Rice", "Long Grain"],
    },
    {
        slug: "non-basmati-rice",
        number: "02",
        name: "Non-Basmati Rice",
        description:
            "Non-basmati rice varieties for food service, distribution, retail and commercial food sourcing requirements.",
        image:
            "/images/products/food-products/grains/non-basmati-rice.webp",
        tags: ["Rice", "Grains"],
    },
    {
        slug: "wheat",
        number: "03",
        name: "Wheat",
        description:
            "Wheat products for food processing, milling, commercial distribution and other bulk sourcing requirements.",
        image:
            "/images/products/food-products/grains/wheat.webp",
        tags: ["Whole Grain", "Bulk"],
    },
    {
        slug: "maize",
        number: "04",
        name: "Maize",
        description:
            "Maize and corn products for food processing, ingredient applications and commercial sourcing requirements.",
        image:
            "/images/products/food-products/grains/maize.webp",
        tags: ["Grain", "Corn"],
    },
    {
        slug: "millets",
        number: "05",
        name: "Millets",
        description:
            "Millet varieties for food, ingredient, health-oriented and commercial grain sourcing applications.",
        image:
            "/images/products/food-products/grains/millets.webp",
        tags: ["Whole Grain", "Cereals"],
    },
    {
        slug: "chickpeas",
        number: "06",
        name: "Chickpeas",
        description:
            "Chickpeas and gram products for food preparation, processing, distribution and commercial requirements.",
        image:
            "/images/products/food-products/grains/chickpeas.webp",
        tags: ["Pulses", "Whole"],
    },
    {
        slug: "lentils",
        number: "07",
        name: "Lentils",
        description:
            "Lentil products for food businesses, distributors and buyers sourcing pulses for commercial applications.",
        image:
            "/images/products/food-products/grains/lentils.webp",
        tags: ["Pulses", "Whole"],
    },
    {
        slug: "kidney-beans",
        number: "08",
        name: "Kidney Beans",
        description:
            "Kidney beans for food preparation, retail, food service and commercial pulse sourcing requirements.",
        image:
            "/images/products/food-products/grains/kidney-beans.webp",
        tags: ["Pulses", "Beans"],
    },
    {
        slug: "green-gram",
        number: "09",
        name: "Green Gram",
        description:
            "Green gram and moong products for food preparation, processing and commercial pulse requirements.",
        image:
            "/images/products/food-products/grains/green-gram.webp",
        tags: ["Moong", "Pulses"],
    },
    {
        slug: "black-gram",
        number: "10",
        name: "Black Gram",
        description:
            "Black gram and urad products for food preparation, processing and commercial sourcing requirements.",
        image:
            "/images/products/food-products/grains/black-gram.webp",
        tags: ["Urad", "Pulses"],
    },
    {
        slug: "gram-flour",
        number: "11",
        name: "Gram Flour",
        description:
            "Gram flour for food preparation, bakery, snack, batter and ingredient-oriented commercial applications.",
        image:
            "/images/products/food-products/grains/gram-flour.webp",
        tags: ["Flour", "Besan"],
    },
    {
        slug: "wheat-flour",
        number: "12",
        name: "Wheat Flour",
        description:
            "Wheat flour products for bakery, food processing, food service and commercial ingredient requirements.",
        image:
            "/images/products/food-products/grains/wheat-flour.webp",
        tags: ["Flour", "Milled"],
    },
];

const formats = [
    {
        number: "01",
        title: "Whole grains",
        text: "Whole grain products for food preparation, processing, distribution, retail and commercial sourcing requirements.",
    },
    {
        number: "02",
        title: "Pulses & legumes",
        text: "Commonly traded pulses and legumes for food businesses, distributors, retailers and commercial buyers.",
    },
    {
        number: "03",
        title: "Milled & flours",
        text: "Processed grain and pulse formats for buyers requiring flour or other ready-to-use ingredient forms.",
    },
    {
        number: "04",
        title: "Buyer-specific formats",
        text: "Packaging, quantity, labelling and other commercial requirements can be discussed as part of the enquiry.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the grain, pulse or flour, preferred form, quantity, destination and any specifications you already have.",
    },
    {
        number: "02",
        title: "Review sourcing options",
        text: "We explore suitable sourcing possibilities based on the product, application and information provided in your enquiry.",
    },
    {
        number: "03",
        title: "Confirm specifications",
        text: "Product, grade, packaging, commercial and documentation requirements are reviewed before proceeding.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated.",
    },
];

export default function GrainsPage() {
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
                            Grains
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products / Grains
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Indian grains for
                                <span className="block text-[#07846d]">
                                    global buyers.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore grains, cereals, pulses and flour products
                                sourced for international buyers, food businesses,
                                distributors and commercial food requirements.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Grains"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Grain Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#grain-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Grains
                                </a>

                            </div>

                        </div>

                        {/* Hero image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="/images/products/food-products/grains/hero.webp"
                                    alt="Grains and cereals"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Grain Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Cereals, pulses, grains and flour formats.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    12+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Grain categories
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          INTRO / BUYER MESSAGE
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Grain sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From everyday grains to commercial pulse and flour requirements.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our grain portfolio covers commonly traded cereals,
                                rice, pulses, legumes and flour products, giving
                                international buyers a starting point for exploring
                                suitable sourcing options.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product variety, specifications, quantity, packaging,
                                destination market and other commercial requirements
                                can be discussed as part of the sourcing enquiry.
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
                            href="#grain-catalogue"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Grain Catalogue
                        </a>

                        <a
                            href="#formats"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Formats
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
          GRAIN CATALOGUE
      ========================================================= */}

            <section
                id="grain-catalogue"
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
                                Grain & pulse categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore individual grain, cereal, pulse and flour
                                categories and the forms in which they may be sourced.
                            </p>

                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {grainProducts.length} categories
                        </div>

                    </div>


                    {/* Product grid */}

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {grainProducts.map((product) => (
                            <GrainCard
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
                                Choose the format around your requirement.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Different buyers require different grain varieties,
                                processing formats, packaging and commercial
                                specifications. These can be discussed during the
                                enquiry process.
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
          QUALITY / SPECIFICATIONS
      ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src="/images/products/food-products/grains/hero.webp"
                                alt="Grains, pulses and food ingredients"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/45 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Product specifications matter
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
                                Every grain and pulse sourcing requirement can be
                                different. Providing clear information helps the
                                sourcing process start with a better understanding
                                of what you need.
                            </p>


                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the grain, rice, pulse, legume or flour you are looking for."
                                />

                                <RequirementItem
                                    title="Variety / Form"
                                    text="Mention the preferred variety, grain type, processing level or flour format."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Share your expected order or purchasing quantity."
                                />

                                <RequirementItem
                                    title="Packaging"
                                    text="Mention preferred packaging, bag size or labelling requirements where applicable."
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
                                From grain requirement to trade enquiry.
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
                            Grain sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific grain?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, quantity, preferred format,
                            destination market and any specifications you have.
                            We&apos;ll use your requirement as the starting point
                            for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Grains"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Grain Quote
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
   GRAIN CARD
   =============================================================== */

function GrainCard({
    product,
}: {
    product: (typeof grainProducts)[number];
}) {
    return (
        <Link
            href={`/products/food-products/grains/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} grain products`}
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

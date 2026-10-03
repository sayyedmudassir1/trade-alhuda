import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Spices | Indian Spice Sourcing & Export | Al Huda",
    description:
        "Explore spices sourced from India for international buyers, distributors, food businesses and importers. Explore turmeric, chilli, cumin, coriander, black pepper, cardamom and other spice categories.",
    keywords: [
        "Indian spices exporter",
        "spices exporter India",
        "Indian spice supplier",
        "bulk spices India",
        "turmeric exporter India",
        "red chilli exporter India",
        "cumin exporter India",
        "coriander exporter India",
        "black pepper exporter India",
        "cardamom exporter India",
    ],
    alternates: {
        canonical: "/products/food-products/spices",
    },
    openGraph: {
        title: "Spices | Al Huda",
        description:
            "Explore Al Huda's spice sourcing portfolio for international buyers and food businesses.",
        type: "website",
    },
};

const spiceProducts = [
    {
        slug: "turmeric",
        number: "01",
        name: "Turmeric",
        description:
            "Whole turmeric and turmeric powder for food, spice, ingredient and commercial sourcing requirements.",
        image:
            "/images/products/food-products/spices/turmeric.webp",
        tags: ["Whole", "Powder"],
    },
    {
        slug: "red-chilli",
        number: "02",
        name: "Red Chilli",
        description:
            "Red chilli products in forms suitable for food preparation, spice processing and commercial requirements.",
        image:
            "/images/products/food-products/spices/red-chilli.webp",
        tags: ["Whole", "Powder", "Dried"],
    },
    {
        slug: "cumin",
        number: "03",
        name: "Cumin",
        description:
            "Cumin sourced in whole and processed forms for food manufacturers, distributors and other buyers.",
        image:
            "/images/products/food-products/spices/cumin.webp",
        tags: ["Whole", "Powder"],
    },
    {
        slug: "coriander",
        number: "04",
        name: "Coriander",
        description:
            "Coriander seeds and coriander powder for food, seasoning and ingredient applications.",
        image:
            "/images/products/food-products/spices/coriander.webp",
        tags: ["Seeds", "Powder"],
    },
    {
        slug: "black-pepper",
        number: "05",
        name: "Black Pepper",
        description:
            "Black pepper products sourced for food, seasoning, processing and commercial distribution requirements.",
        image:
            "/images/products/food-products/spices/black-pepper.webp",
        tags: ["Whole", "Ground"],
    },
    {
        slug: "cardamom",
        number: "06",
        name: "Cardamom",
        description:
            "Cardamom for food, beverage, confectionery and spice-related sourcing requirements.",
        image:
            "/images/products/food-products/spices/cardamom.webp",
        tags: ["Whole", "Pods"],
    },
    {
        slug: "ginger",
        number: "07",
        name: "Ginger",
        description:
            "Ginger products for food preparation, spice blends, processing and ingredient applications.",
        image:
            "/images/products/food-products/spices/ginger.webp",
        tags: ["Whole", "Dried", "Powder"],
    },
    {
        slug: "cinnamon",
        number: "08",
        name: "Cinnamon",
        description:
            "Cinnamon products for food, beverage, bakery, confectionery and seasoning applications.",
        image:
            "/images/products/food-products/spices/cinnamon.webp",
        tags: ["Whole", "Powder"],
    },
    {
        slug: "cloves",
        number: "09",
        name: "Cloves",
        description:
            "Whole cloves and processed forms for culinary, seasoning and food-industry requirements.",
        image:
            "/images/products/food-products/spices/cloves.webp",
        tags: ["Whole", "Ground"],
    },
    {
        slug: "fennel",
        number: "10",
        name: "Fennel (Sauf)",
        description:
            "Fennel seeds and related spice products for food, seasoning and ingredient requirements.",
        image:
            "/images/products/food-products/spices/fennel.webp",
        tags: ["Seeds"],
    },
    {
        slug: "fenugreek",
        number: "11",
        name: "Fenugreek (Methi)",
        description:
            "Fenugreek products for spice blends, food preparation and ingredient sourcing.",
        image:
            "/images/products/food-products/spices/fenugreek.webp",
        tags: ["Seeds", "Powder"],
    },
    {
        slug: "mustard-seeds",
        number: "12",
        name: "Mustard Seeds",
        description:
            "Mustard seed products for culinary, seasoning, processing and food-industry requirements.",
        image:
            "/images/products/food-products/spices/mustard.webp",
        tags: ["Seeds"],
    },
];

const formats = [
    {
        number: "01",
        title: "Whole spices",
        text: "Whole and dried spice products for commercial food preparation, processing, distribution and retail requirements.",
    },
    {
        number: "02",
        title: "Ground & powdered",
        text: "Processed spice formats for buyers requiring ready-to-use or ingredient-oriented products.",
    },
    {
        number: "03",
        title: "Spice blends",
        text: "Blended spice requirements can be discussed according to product, application and buyer specifications.",
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
        text: "Share the spice, preferred form, quantity, destination and any specifications you already have.",
    },
    {
        number: "02",
        title: "Review sourcing options",
        text: "We explore suitable sourcing possibilities based on the information provided in your enquiry.",
    },
    {
        number: "03",
        title: "Confirm specifications",
        text: "Product, packaging, commercial and documentation requirements are reviewed before proceeding.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated.",
    },
];

export default function SpicesPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-130 w-130 rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-125 w-125 rounded-full bg-white/60 blur-3xl" />

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
                            Spices
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products / Spices
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Indian spices for
                                <span className="block text-[#07846d]">
                                    global buyers.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore a broad range of whole, dried, ground and
                                spice-product categories sourced for international
                                buyers, food businesses, distributors and commercial
                                requirements.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Spices"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Spice Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#spice-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Spices
                                </a>

                            </div>

                        </div>

                        {/* Hero image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="/images/products/food-products/spices/hero.webp"
                                    alt="Assorted Indian spices"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Spice Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Whole, dried, ground and buyer-specific formats.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    12+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Spice categories
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
                                    Spice sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From individual spices to commercial sourcing requirements.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our spice portfolio covers commonly traded whole and
                                processed spices, giving international buyers a starting
                                point for exploring suitable sourcing options.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product form, specifications, quantity, packaging,
                                destination market and other requirements can be discussed
                                as part of the sourcing enquiry.
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
                            href="#spice-catalogue"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Spice Catalogue
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
          SPICE CATALOGUE
      ========================================================= */}

            <section
                id="spice-catalogue"
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
                                Spice categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore individual spice categories and the forms in
                                which they may be sourced.
                            </p>

                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {spiceProducts.length} categories
                        </div>

                    </div>


                    {/* Product grid */}

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {spiceProducts.map((product) => (
                            <SpiceCard
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
                                Different buyers require different product forms,
                                packaging and commercial specifications. These can be
                                discussed during the enquiry process.
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
                                src="/images/products/food-products/spices/hero.webp"
                                alt="Spices and food ingredients"
                                loading="lazy"
                                decoding="async"
                                className="aspect-4/3 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-[#102f2a]/45 to-transparent" />

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
                                Every food sourcing requirement can be different.
                                Providing clear information helps the sourcing process
                                start with a better understanding of what you need.
                            </p>


                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the spice or group of spices you are looking for."
                                />

                                <RequirementItem
                                    title="Form"
                                    text="Whole, dried, crushed, ground, powdered or another required form."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Share your expected order or purchasing quantity."
                                />

                                <RequirementItem
                                    title="Packaging"
                                    text="Mention preferred packaging or labelling requirements where applicable."
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
                                From spice requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear requirement gives our team a better starting point
                                for exploring suitable sourcing and trade options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            {sourcingSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/4.5 p-5 transition hover:bg-white/7.5"
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
                            Spice sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific spice?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, quantity, preferred format, destination
                            market and any specifications you have. We&apos;ll use your
                            requirement as the starting point for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Spices"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Spice Quote
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
   SPICE CARD
   =============================================================== */

function SpiceCard({
    product,
}: {
    product: (typeof spiceProducts)[number];
}) {
    return (
        <Link
            href={`/products/food-products/spices/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} spice products`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#102f2a]/70 via-transparent to-transparent" />

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

                    <span className="text-xs font-semibold uppercase tracking-widest text-[#087d68]">
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
            className="group flex min-h-25 items-center justify-between rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <span className="max-w-45 text-sm font-semibold leading-5 text-[#345850]">
                {title}
            </span>

            <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                →
            </span>

        </Link>
    );
}

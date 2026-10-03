import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pharmaceuticals & Biologicals | Sourcing & Export | Al Huda",
    description:
        "Explore pharmaceutical and biological product categories sourced from India for international buyers, distributors, importers, healthcare businesses and commercial requirements.",
    keywords: [
        "pharmaceutical exporter India",
        "pharmaceutical products supplier India",
        "pharmaceutical sourcing India",
        "Indian pharmaceutical products",
        "pharmaceutical exporter",
        "biological products India",
        "pharmaceutical distribution India",
        "medicine supplier India",
        "healthcare products exporter India",
        "pharmaceutical sourcing company India",
    ],
    alternates: {
        canonical: "/products/pharmaceuticals-biologicals",
    },
    openGraph: {
        title: "Pharmaceuticals & Biologicals | Al Huda",
        description:
            "Explore Al Huda's pharmaceutical and biological product sourcing portfolio for international buyers, distributors and healthcare businesses.",
        type: "website",
    },
};

const pharmaceuticalCategories = [
    {
        slug: "generic-medicines",
        number: "01",
        name: "Generic Medicines",
        description:
            "Generic pharmaceutical products for international distributors, importers, healthcare businesses and commercial sourcing requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/generic-medicines.webp",
        tags: ["Generics", "Medicines"],
    },
    {
        slug: "branded-medicines",
        number: "02",
        name: "Branded Medicines",
        description:
            "Branded pharmaceutical product categories for authorised commercial sourcing and healthcare distribution requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/branded-medicines.webp",
        tags: ["Branded", "Pharma"],
    },
    {
        slug: "pharmaceutical-formulations",
        number: "03",
        name: "Pharmaceutical Formulations",
        description:
            "Finished pharmaceutical formulations across dosage forms and therapeutic categories according to buyer requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/pharmaceutical-formulations.webp",
        tags: ["Formulations", "Pharma"],
    },
    {
        slug: "tablets-and-capsules",
        number: "04",
        name: "Tablets & Capsules",
        description:
            "Tablet and capsule pharmaceutical categories for distributors, importers and healthcare-related sourcing requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/tablets-and-capsules.webp",
        tags: ["Tablets", "Capsules"],
    },
    {
        slug: "syrups-and-liquids",
        number: "05",
        name: "Syrups & Liquids",
        description:
            "Liquid and syrup-based pharmaceutical product categories for healthcare distribution and commercial requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/syrups-and-liquids.webp",
        tags: ["Syrups", "Liquids"],
    },
    {
        slug: "injectables",
        number: "06",
        name: "Injectables",
        description:
            "Injectable pharmaceutical categories for regulated healthcare sourcing requirements and institutional buyers.",
        image:
            "/images/products/pharmaceuticals-biologicals/injectables.webp",
        tags: ["Injectables", "Healthcare"],
    },
    {
        slug: "topical-products",
        number: "07",
        name: "Topical Products",
        description:
            "Creams, ointments, gels and other topical pharmaceutical product categories for healthcare sourcing requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/topical-products.webp",
        tags: ["Topical", "Healthcare"],
    },
    {
        slug: "ophthalmic-products",
        number: "08",
        name: "Ophthalmic Products",
        description:
            "Ophthalmic pharmaceutical product categories for eye-care related distribution and healthcare requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/ophthalmic-products.webp",
        tags: ["Ophthalmic", "Eye Care"],
    },
    {
        slug: "veterinary-pharmaceuticals",
        number: "09",
        name: "Veterinary Pharmaceuticals",
        description:
            "Veterinary pharmaceutical product categories for animal-health distributors and commercial sourcing requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/veterinary-pharmaceuticals.webp",
        tags: ["Veterinary", "Animal Health"],
    },
    {
        slug: "biological-products",
        number: "10",
        name: "Biological Products",
        description:
            "Biological product categories for regulated healthcare, institutional and specialised sourcing requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/biological-products.webp",
        tags: ["Biologicals", "Healthcare"],
    },
    {
        slug: "nutraceuticals",
        number: "11",
        name: "Nutraceuticals",
        description:
            "Nutraceutical and health-support product categories for distributors and commercial healthcare requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/nutraceuticals.webp",
        tags: ["Nutraceuticals", "Wellness"],
    },
    {
        slug: "custom-pharmaceutical-requirements",
        number: "12",
        name: "Custom Pharmaceutical Requirements",
        description:
            "Buyer-specific pharmaceutical and healthcare product requirements can be discussed according to product, market and regulatory needs.",
        image:
            "/images/products/pharmaceuticals-biologicals/custom-pharmaceutical-requirements.webp",
        tags: ["Custom", "Buyer-Specific"],
    },
];

const sourcingFormats = [
    {
        number: "01",
        title: "Finished pharmaceutical products",
        text: "Finished pharmaceutical products can be discussed according to product category, dosage form, market and buyer requirements.",
    },
    {
        number: "02",
        title: "Distributor requirements",
        text: "Sourcing requirements for importers, distributors, wholesalers and healthcare businesses can be reviewed according to the intended market.",
    },
    {
        number: "03",
        title: "Institutional requirements",
        text: "Larger healthcare and institutional requirements can be discussed around product specifications, quantities and destination-market requirements.",
    },
    {
        number: "04",
        title: "Buyer-specific requirements",
        text: "Product details, packaging, documentation, specifications and applicable market requirements can be discussed during enquiry.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the pharmaceutical or biological product, dosage form, quantity, destination market and available product information.",
    },
    {
        number: "02",
        title: "Review sourcing options",
        text: "We explore suitable sourcing possibilities based on the product category, buyer requirement and intended market.",
    },
    {
        number: "03",
        title: "Confirm requirements",
        text: "Product specifications, packaging, documentation, quantities and other relevant commercial requirements are reviewed before proceeding.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms and applicable requirements are agreed, relevant documentation and shipment coordination can be discussed.",
    },
];

export default function PharmaceuticalsBiologicalsPage() {
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
                            Pharmaceuticals & Biologicals
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Pharmaceuticals & Biologicals
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Pharmaceutical products for
                                <span className="block text-[#07846d]">
                                    global sourcing.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore pharmaceutical and biological product categories
                                sourced for international buyers, importers, distributors,
                                healthcare businesses and commercial requirements.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Pharmaceuticals%20%26%20Biologicals"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Pharmaceutical Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#pharmaceutical-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Products
                                </a>

                            </div>

                        </div>


                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=85"
                                    alt="Pharmaceutical products and healthcare supplies"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Healthcare Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Pharmaceutical and biological product categories for international sourcing.
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
                                    Pharmaceutical sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From finished pharmaceutical products to buyer-specific requirements.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our pharmaceutical and biological portfolio covers a range
                                of product categories for international buyers, importers,
                                distributors and healthcare-related businesses.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product specifications, dosage form, quantities, packaging,
                                destination market, documentation and applicable regulatory
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
                            href="#pharmaceutical-catalogue"
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
                id="pharmaceutical-catalogue"
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
                                Pharmaceutical product categories.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore individual pharmaceutical and biological categories
                                and the types of sourcing requirements they can support.
                            </p>

                        </div>

                        <div className="text-sm text-[#718681]">
                            Showing {pharmaceuticalCategories.length} categories
                        </div>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {pharmaceuticalCategories.map((product) => (
                            <PharmaceuticalCard
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
                                Source around your pharmaceutical requirement.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Pharmaceutical sourcing requirements can vary by product,
                                market, dosage form, quantity and applicable documentation.
                                These details can be discussed during the enquiry process.
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
                                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=85"
                                alt="Pharmaceutical products and healthcare supplies"
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
                                Start with the pharmaceutical details that matter.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Clear product and market information helps establish the
                                right starting point for pharmaceutical and biological
                                sourcing enquiries.
                            </p>


                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the pharmaceutical, biological or healthcare product you are looking for."
                                />

                                <RequirementItem
                                    title="Dosage form"
                                    text="Mention the required form such as tablets, capsules, liquids, topical products or other applicable formats."
                                />

                                <RequirementItem
                                    title="Specifications"
                                    text="Share strength, composition, pack size, product reference or other available specifications."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Share your expected purchasing, distribution or shipment quantity."
                                />

                                <RequirementItem
                                    title="Packaging"
                                    text="Mention preferred packaging, labelling or presentation requirements where applicable."
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
                                From pharmaceutical requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear product, quantity and destination requirement gives
                                our team a better starting point for exploring suitable
                                sourcing and trade options.
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
                            Pharmaceutical sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific pharmaceutical product?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, dosage form, specifications, quantity,
                            destination market and any documentation or product information
                            you have. We&apos;ll use your requirement as the starting point
                            for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Pharmaceuticals%20%26%20Biologicals"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Pharmaceutical Quote
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
   PHARMACEUTICAL CARD
   =============================================================== */

function PharmaceuticalCard({
    product,
}: {
    product: (typeof pharmaceuticalCategories)[number];
}) {
    return (
        <Link
            href={`/products/pharmaceuticals-biologicals/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} pharmaceutical products`}
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

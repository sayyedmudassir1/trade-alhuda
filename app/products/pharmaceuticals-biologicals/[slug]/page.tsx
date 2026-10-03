import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PharmaceuticalCategory = {
    slug: string;
    number: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
    overview: string;
    applications: string[];
    requirements: string[];
};

const pharmaceuticalCategories: PharmaceuticalCategory[] = [
    {
        slug: "generic-medicines",
        number: "01",
        name: "Generic Medicines",
        description:
            "Generic pharmaceutical products for international distributors, importers, healthcare businesses and commercial sourcing requirements.",
        image:
            "/images/products/pharmaceuticals-biologicals/generic-medicines.webp",
        tags: ["Generics", "Medicines"],
        overview:
            "Generic medicines are pharmaceutical products marketed by their established active ingredients and commonly sourced by distributors, importers, healthcare businesses and commercial buyers. Requirements can vary by dosage form, strength, pack size, destination market and applicable regulatory requirements.",
        applications: [
            "Healthcare distribution",
            "Pharmaceutical import",
            "Wholesale requirements",
            "Institutional sourcing",
        ],
        requirements: [
            "Product name and active ingredient",
            "Strength and dosage form",
            "Pack size and quantity",
            "Destination country or market",
            "Available product specifications",
        ],
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
        overview:
            "Branded medicines can be sourced according to the requirements of importers, distributors, healthcare businesses and other authorised commercial buyers. Product availability, market requirements, documentation and applicable commercial conditions can be reviewed during enquiry.",
        applications: [
            "Healthcare distribution",
            "Importer requirements",
            "Pharmaceutical trade",
            "Commercial sourcing",
        ],
        requirements: [
            "Brand and product name",
            "Dosage form and strength",
            "Required quantity",
            "Destination market",
            "Product and documentation requirements",
        ],
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
        overview:
            "Pharmaceutical formulations cover finished products prepared in specific dosage forms and strengths for healthcare and commercial requirements. Buyers can share the required formulation, composition, dosage form, quantity and destination market for sourcing discussions.",
        applications: [
            "Finished pharmaceutical sourcing",
            "Healthcare distribution",
            "Importer requirements",
            "Commercial pharmaceutical supply",
        ],
        requirements: [
            "Product or formulation name",
            "Composition and strength",
            "Dosage form",
            "Quantity and packaging",
            "Destination market",
        ],
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
        overview:
            "Tablet and capsule products represent common pharmaceutical dosage-form requirements for distributors, importers and healthcare businesses. Specific product, strength, pack size, quantity and market requirements can be reviewed as part of an enquiry.",
        applications: [
            "Pharmaceutical distribution",
            "Healthcare import",
            "Wholesale sourcing",
            "Commercial supply",
        ],
        requirements: [
            "Product name",
            "Active ingredient and strength",
            "Tablet or capsule specification",
            "Pack size and quantity",
            "Destination country",
        ],
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
        overview:
            "Syrups and liquid pharmaceutical products can be sourced according to product specifications, formulation requirements, pack sizes and destination-market considerations. Buyers can provide available product information for further discussion.",
        applications: [
            "Healthcare distribution",
            "Pharmaceutical import",
            "Wholesale requirements",
            "Commercial sourcing",
        ],
        requirements: [
            "Product or formulation",
            "Strength and composition",
            "Bottle or pack size",
            "Required quantity",
            "Destination market",
        ],
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
        overview:
            "Injectable pharmaceutical products involve specific product, packaging, documentation and destination-market considerations. Enquiries can be discussed around the required product, strength, presentation, quantity and applicable market requirements.",
        applications: [
            "Institutional healthcare",
            "Pharmaceutical distribution",
            "Healthcare import",
            "Commercial sourcing",
        ],
        requirements: [
            "Product and active ingredient",
            "Strength and presentation",
            "Pack configuration",
            "Required quantity",
            "Destination and market requirements",
        ],
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
        overview:
            "Topical pharmaceutical products include categories such as creams, ointments and gels. Buyers can provide the required product, composition, strength, packaging, quantity and intended market for sourcing discussions.",
        applications: [
            "Healthcare distribution",
            "Pharmaceutical import",
            "Aftermarket healthcare supply",
            "Commercial sourcing",
        ],
        requirements: [
            "Product name",
            "Composition and strength",
            "Dosage or topical form",
            "Pack size and quantity",
            "Destination market",
        ],
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
        overview:
            "Ophthalmic products are sourced for eye-care related pharmaceutical and healthcare requirements. Product type, formulation, strength, presentation, quantity and destination-market considerations can be discussed during enquiry.",
        applications: [
            "Eye-care distribution",
            "Healthcare import",
            "Pharmaceutical sourcing",
            "Institutional requirements",
        ],
        requirements: [
            "Product name",
            "Active ingredient and strength",
            "Ophthalmic dosage form",
            "Pack configuration",
            "Destination market",
        ],
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
        overview:
            "Veterinary pharmaceutical products support animal-health related sourcing requirements for distributors, importers and commercial buyers. Product specifications, animal application, dosage form, quantity and destination market can be discussed.",
        applications: [
            "Animal-health distribution",
            "Veterinary import",
            "Commercial sourcing",
            "Wholesale requirements",
        ],
        requirements: [
            "Product and active ingredient",
            "Animal application",
            "Strength and dosage form",
            "Quantity and packaging",
            "Destination market",
        ],
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
        overview:
            "Biological products involve specialised healthcare sourcing requirements and may be subject to product-specific storage, handling, documentation and regulatory considerations. Buyers can share their requirements for review.",
        applications: [
            "Specialised healthcare sourcing",
            "Institutional requirements",
            "Healthcare distribution",
            "Commercial import",
        ],
        requirements: [
            "Product name and type",
            "Specification and presentation",
            "Storage or handling information",
            "Quantity requirement",
            "Destination-market requirements",
        ],
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
        overview:
            "Nutraceutical products can be sourced for distributors, importers, wellness businesses and healthcare-related commercial requirements. Product composition, format, packaging, quantity and destination market can be discussed.",
        applications: [
            "Nutraceutical distribution",
            "Healthcare retail",
            "Wellness businesses",
            "Commercial sourcing",
        ],
        requirements: [
            "Product and composition",
            "Dosage or product format",
            "Pack size",
            "Required quantity",
            "Destination market",
        ],
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
        overview:
            "Some pharmaceutical sourcing requirements do not fit neatly into a standard product category. Buyer-specific requirements can be discussed around the requested product, specifications, quantity, packaging, documentation and destination-market considerations.",
        applications: [
            "Buyer-specific sourcing",
            "Specialised product requirements",
            "Distributor enquiries",
            "International pharmaceutical trade",
        ],
        requirements: [
            "Requested product",
            "Technical specifications",
            "Quantity requirement",
            "Packaging and documentation",
            "Destination market",
        ],
    },
];

export function generateStaticParams() {
    return pharmaceuticalCategories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = pharmaceuticalCategories.find(
        (category) => category.slug === slug
    );

    if (!product) {
        return {};
    }

    return {
        title: `${product.name} | Pharmaceutical Sourcing & Export | Al Huda`,
        description: `${product.description} Explore sourcing options for ${product.name.toLowerCase()} from India for international buyers, distributors and healthcare businesses.`,
        keywords: [
            `${product.name.toLowerCase()} India`,
            `${product.name.toLowerCase()} exporter India`,
            `${product.name.toLowerCase()} supplier India`,
            `${product.name.toLowerCase()} sourcing India`,
            "pharmaceutical exporter India",
            "pharmaceutical supplier India",
            "pharmaceutical sourcing India",
        ],
        alternates: {
            canonical: `/products/pharmaceuticals-biologicals/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.description,
            type: "website",
            images: [
                {
                    url: product.image,
                    alt: `${product.name} - Al Huda`,
                },
            ],
        },
    };
}

export default async function PharmaceuticalSlugPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = pharmaceuticalCategories.find(
        (category) => category.slug === slug
    );

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* HERO */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#6f8881]"
                    >
                        <Link href="/" className="transition hover:text-[#087d68]">
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
                            href="/products/pharmaceuticals-biologicals"
                            className="transition hover:text-[#087d68]"
                        >
                            Pharmaceuticals & Biologicals
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087d68] text-[10px] font-bold text-white">
                                    {product.number}
                                </span>

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Pharmaceutical Category
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                {product.name}
                                <span className="block text-[#07846d]">
                                    for global sourcing.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-[#bcd9d0] bg-white/70 px-4 py-2 text-xs font-semibold text-[#438275]"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(
                                        product.name
                                    )}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#product-details"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Details
                                </a>

                            </div>

                        </div>


                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} pharmaceutical products`}
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
                                            {product.name} sourcing for international buyers.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* QUICK NAV */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#product-details"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Product Details
                        </a>

                        <a
                            href="#applications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Applications
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


            {/* PRODUCT DETAILS */}

            <section
                id="product-details"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product overview
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                {product.name} for international sourcing.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.overview}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product availability, specifications, quantities,
                                packaging, documentation and destination-market
                                requirements can be discussed as part of the enquiry.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* APPLICATIONS */}

            <section
                id="applications"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Commercial applications
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Sourcing requirements this category can support.
                        </h2>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {product.applications.map((application, index) => (
                            <div
                                key={application}
                                className="rounded-2xl border border-[#dfeae5] bg-white p-7"
                            >

                                <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                    {application}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* REQUIREMENTS */}

            <section
                id="requirements"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src={product.image}
                                alt={`${product.name} sourcing`}
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
                                Start with the product details that matter.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Providing clear product and market information helps
                                establish the right starting point for a sourcing enquiry.
                            </p>

                            <div className="mt-8 space-y-3">

                                {product.requirements.map((requirement) => (
                                    <RequirementItem
                                        key={requirement}
                                        text={requirement}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SOURCING */}

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
                                From product requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Share the product information you have and we can use the
                                requirement as a starting point for discussing suitable
                                sourcing and trade options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            {[
                                {
                                    number: "01",
                                    title: "Tell us what you need",
                                    text: `Share the ${product.name.toLowerCase()}, specifications, quantity and destination market.`,
                                },
                                {
                                    number: "02",
                                    title: "Review sourcing options",
                                    text: "We explore suitable sourcing possibilities based on the product and commercial information provided.",
                                },
                                {
                                    number: "03",
                                    title: "Confirm requirements",
                                    text: "Product details, packaging, documentation, quantities and other relevant requirements are reviewed before proceeding.",
                                },
                                {
                                    number: "04",
                                    title: "Coordinate the trade",
                                    text: "Once commercial terms and applicable requirements are agreed, documentation and shipment coordination can be discussed.",
                                },
                            ].map((step) => (
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


            {/* RELATED */}

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
                            Other pharmaceutical categories.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        {pharmaceuticalCategories
                            .filter((category) => category.slug !== product.slug)
                            .slice(0, 4)
                            .map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/products/pharmaceuticals-biologicals/${category.slug}`}
                                    className="group flex min-h-[100px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                                >
                                    <span className="max-w-[180px] text-sm font-semibold leading-5 text-[#345850]">
                                        {category.name}
                                    </span>

                                    <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            ))}

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section
                id="enquiry"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#07846d] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">

                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                            <span className="text-lg">↗</span>
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                            Pharmaceutical sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product specifications, quantity, destination
                            market and any documentation or product information you have.
                            We&apos;ll use your requirement as the starting point for the
                            conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(
                                    product.name
                                )}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/products/pharmaceuticals-biologicals"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Pharmaceuticals
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

function RequirementItem({
    text,
}: {
    text: string;
}) {
    return (
        <div className="flex gap-4 rounded-xl border border-[#dce9e4] bg-white p-4">

            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

            <p className="text-sm leading-6 text-[#718680]">
                {text}
            </p>

        </div>
    );
}

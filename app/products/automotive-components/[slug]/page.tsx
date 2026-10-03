import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const automotiveProducts = [
    {
        slug: "engine-components",
        number: "01",
        name: "Engine Components",
        shortName: "Engine Components",
        description:
            "Engine-related components and replacement parts for automotive sourcing, distribution and commercial requirements.",
        image:
            "/images/products/automotive-components/engine-components.webp",
        tags: ["Engine", "Components"],
        intro:
            "Explore engine component sourcing options for importers, distributors, wholesalers, automotive businesses and aftermarket requirements.",
        products: [
            "Engine replacement components",
            "Engine mechanical parts",
            "Engine service components",
            "Automotive engine parts",
            "Replacement engine components",
            "Commercial vehicle engine components",
        ],
        requirements: [
            {
                title: "Vehicle application",
                text: "Share the vehicle type, make, model, engine application or other relevant vehicle information.",
            },
            {
                title: "Part details",
                text: "Provide the part name, part number, dimensions, reference number or other available identification details.",
            },
            {
                title: "Quantity",
                text: "Mention the expected order quantity or recurring purchasing requirement.",
            },
            {
                title: "Specifications",
                text: "Share material, technical specifications, drawings or other product information where available.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country, port or market for the sourcing requirement.",
            },
        ],
    },

    {
        slug: "braking-components",
        number: "02",
        name: "Braking Components",
        shortName: "Braking Components",
        description:
            "Braking-related components for automotive aftermarket, replacement and commercial sourcing requirements.",
        image:
            "/images/products/automotive-components/braking-components.webp",
        tags: ["Braking", "Replacement"],
        intro:
            "Source braking components for automotive distributors, aftermarket businesses, workshops and commercial buyers.",
        products: [
            "Brake components",
            "Brake replacement parts",
            "Brake system components",
            "Automotive braking parts",
            "Commercial vehicle brake components",
            "Aftermarket braking products",
        ],
        requirements: [
            {
                title: "Vehicle application",
                text: "Provide the vehicle type, model, application or other relevant vehicle information.",
            },
            {
                title: "Component",
                text: "Specify the braking component or product category required.",
            },
            {
                title: "Part number",
                text: "Share an OEM, reference or aftermarket part number where available.",
            },
            {
                title: "Quantity",
                text: "Mention the required purchasing or shipment quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market or country for the enquiry.",
            },
        ],
    },

    {
        slug: "suspension-components",
        number: "03",
        name: "Suspension Components",
        shortName: "Suspension Components",
        description:
            "Suspension and related components for passenger vehicles, commercial vehicles and automotive aftermarket requirements.",
        image:
            "/images/products/automotive-components/suspension-components.webp",
        tags: ["Suspension", "Parts"],
        intro:
            "Explore suspension component sourcing for distributors, aftermarket businesses, vehicle parts importers and commercial buyers.",
        products: [
            "Suspension components",
            "Replacement suspension parts",
            "Vehicle suspension parts",
            "Commercial vehicle suspension components",
            "Automotive chassis components",
            "Aftermarket suspension products",
        ],
        requirements: [
            {
                title: "Vehicle details",
                text: "Share the vehicle make, model, year, application or other available details.",
            },
            {
                title: "Component details",
                text: "Specify the suspension component or replacement part required.",
            },
            {
                title: "Reference information",
                text: "Provide part numbers, dimensions, catalog references or other identification details.",
            },
            {
                title: "Quantity",
                text: "Mention your expected order or shipment quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    {
        slug: "steering-components",
        number: "04",
        name: "Steering Components",
        shortName: "Steering Components",
        description:
            "Steering-related automotive components for replacement, distribution and commercial sourcing applications.",
        image:
            "/images/products/automotive-components/steering-components.webp",
        tags: ["Steering", "Components"],
        intro:
            "Source steering-related automotive components for distributors, importers, workshops and aftermarket businesses.",
        products: [
            "Steering components",
            "Steering replacement parts",
            "Automotive steering parts",
            "Steering system components",
            "Commercial vehicle steering components",
            "Aftermarket steering products",
        ],
        requirements: [
            {
                title: "Vehicle application",
                text: "Provide vehicle make, model, application or other relevant vehicle information.",
            },
            {
                title: "Part identification",
                text: "Share the part name, part number, reference number or other identification details.",
            },
            {
                title: "Specifications",
                text: "Provide dimensions, materials or technical specifications where available.",
            },
            {
                title: "Quantity",
                text: "Mention the required purchasing quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    {
        slug: "electrical-components",
        number: "05",
        name: "Electrical Components",
        shortName: "Electrical Components",
        description:
            "Automotive electrical components for vehicle systems, replacement requirements and commercial distribution.",
        image:
            "/images/products/automotive-components/electrical-components.webp",
        tags: ["Electrical", "Automotive"],
        intro:
            "Explore automotive electrical component sourcing for vehicle parts distributors, importers and aftermarket businesses.",
        products: [
            "Automotive electrical components",
            "Vehicle electrical parts",
            "Electrical replacement components",
            "Automotive wiring components",
            "Vehicle electrical accessories",
            "Commercial vehicle electrical parts",
        ],
        requirements: [
            {
                title: "Component",
                text: "Specify the automotive electrical component or system required.",
            },
            {
                title: "Vehicle application",
                text: "Share the vehicle make, model and application where relevant.",
            },
            {
                title: "Part details",
                text: "Provide part numbers, specifications, voltage, dimensions or reference information where applicable.",
            },
            {
                title: "Quantity",
                text: "Mention the expected order quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market for the enquiry.",
            },
        ],
    },

    {
        slug: "transmission-components",
        number: "06",
        name: "Transmission Components",
        shortName: "Transmission Components",
        description:
            "Transmission-related components for automotive replacement, repair and commercial sourcing requirements.",
        image:
            "/images/products/automotive-components/transmission-components.webp",
        tags: ["Transmission", "Parts"],
        intro:
            "Source transmission components for automotive distributors, repair businesses, workshops and aftermarket requirements.",
        products: [
            "Transmission components",
            "Gearbox components",
            "Transmission replacement parts",
            "Automotive transmission parts",
            "Commercial vehicle transmission components",
            "Aftermarket transmission products",
        ],
        requirements: [
            {
                title: "Vehicle application",
                text: "Share vehicle make, model, transmission type and other relevant application details.",
            },
            {
                title: "Component",
                text: "Specify the transmission component or part required.",
            },
            {
                title: "Part number",
                text: "Provide OEM, aftermarket or reference part numbers where available.",
            },
            {
                title: "Quantity",
                text: "Mention the required order quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    {
        slug: "filters",
        number: "07",
        name: "Automotive Filters",
        shortName: "Automotive Filters",
        description:
            "Automotive filtration products for maintenance, replacement, distribution and aftermarket requirements.",
        image:
            "/images/products/automotive-components/filters.webp",
        tags: ["Filters", "Maintenance"],
        intro:
            "Explore automotive filter sourcing for importers, distributors, workshops, fleet businesses and aftermarket buyers.",
        products: [
            "Oil filters",
            "Air filters",
            "Fuel filters",
            "Cabin filters",
            "Automotive filtration products",
            "Commercial vehicle filters",
        ],
        requirements: [
            {
                title: "Filter type",
                text: "Specify the required filter category such as oil, air, fuel or cabin filtration.",
            },
            {
                title: "Vehicle application",
                text: "Share vehicle make, model, engine or application details where available.",
            },
            {
                title: "Reference number",
                text: "Provide OEM, cross-reference or aftermarket part numbers where available.",
            },
            {
                title: "Quantity",
                text: "Mention your required order quantity.",
            },
            {
                title: "Packaging",
                text: "Share any preferred packaging, labelling or private-label requirements.",
            },
        ],
    },

    {
        slug: "belts-and-hoses",
        number: "08",
        name: "Belts & Hoses",
        shortName: "Belts & Hoses",
        description:
            "Automotive belts, hoses and related components for vehicle maintenance and replacement requirements.",
        image:
            "/images/products/automotive-components/belts-and-hoses.webp",
        tags: ["Belts", "Hoses"],
        intro:
            "Source automotive belts, hoses and related products for distributors, importers, workshops and aftermarket businesses.",
        products: [
            "Automotive belts",
            "Drive belts",
            "Timing belts",
            "Automotive hoses",
            "Cooling system hoses",
            "Replacement belts and hoses",
        ],
        requirements: [
            {
                title: "Product type",
                text: "Specify the belt, hose or related automotive component required.",
            },
            {
                title: "Vehicle application",
                text: "Provide vehicle make, model, engine or application details.",
            },
            {
                title: "Dimensions",
                text: "Share dimensions, length, profile or other relevant specifications where available.",
            },
            {
                title: "Quantity",
                text: "Mention the required purchasing quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    {
        slug: "bearings",
        number: "09",
        name: "Automotive Bearings",
        shortName: "Automotive Bearings",
        description:
            "Bearings and related components for automotive applications, replacement requirements and industrial distribution.",
        image:
            "/images/products/automotive-components/bearings.webp",
        tags: ["Bearings", "Components"],
        intro:
            "Explore automotive bearing sourcing for distributors, importers, workshops and replacement-parts businesses.",
        products: [
            "Automotive bearings",
            "Wheel bearings",
            "Engine bearings",
            "Transmission bearings",
            "Bearing replacement parts",
            "Automotive bearing components",
        ],
        requirements: [
            {
                title: "Bearing type",
                text: "Specify the bearing type or automotive application required.",
            },
            {
                title: "Reference",
                text: "Share bearing number, OEM reference or other identification details.",
            },
            {
                title: "Dimensions",
                text: "Provide inner diameter, outer diameter, width or other relevant dimensions where available.",
            },
            {
                title: "Quantity",
                text: "Mention the expected order quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market.",
            },
        ],
    },

    {
        slug: "clutch-components",
        number: "10",
        name: "Clutch Components",
        shortName: "Clutch Components",
        description:
            "Clutch-related components for automotive repair, replacement, aftermarket and commercial sourcing requirements.",
        image:
            "/images/products/automotive-components/clutch-components.webp",
        tags: ["Clutch", "Replacement"],
        intro:
            "Source clutch components for automotive distributors, workshops, importers and aftermarket businesses.",
        products: [
            "Clutch components",
            "Clutch replacement parts",
            "Automotive clutch parts",
            "Clutch system components",
            "Commercial vehicle clutch components",
            "Aftermarket clutch products",
        ],
        requirements: [
            {
                title: "Vehicle application",
                text: "Share vehicle make, model, engine and transmission information where available.",
            },
            {
                title: "Component",
                text: "Specify the clutch component or part required.",
            },
            {
                title: "Part reference",
                text: "Provide OEM, aftermarket or cross-reference part numbers where available.",
            },
            {
                title: "Quantity",
                text: "Mention your expected purchasing quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    {
        slug: "lighting-components",
        number: "11",
        name: "Lighting Components",
        shortName: "Lighting Components",
        description:
            "Automotive lighting-related components for replacement, aftermarket and vehicle-related sourcing requirements.",
        image:
            "/images/products/automotive-components/lighting-components.webp",
        tags: ["Lighting", "Electrical"],
        intro:
            "Explore automotive lighting component sourcing for importers, distributors and vehicle aftermarket businesses.",
        products: [
            "Automotive lighting components",
            "Vehicle lighting parts",
            "Headlamp components",
            "Signal lighting components",
            "Rear lighting components",
            "Replacement lighting products",
        ],
        requirements: [
            {
                title: "Lighting product",
                text: "Specify the lighting component or product category required.",
            },
            {
                title: "Vehicle application",
                text: "Provide vehicle make, model, application or other available details.",
            },
            {
                title: "Technical details",
                text: "Share voltage, bulb type, dimensions, specifications or reference numbers where applicable.",
            },
            {
                title: "Quantity",
                text: "Mention the required order quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market.",
            },
        ],
    },

    {
        slug: "body-components",
        number: "12",
        name: "Body Components",
        shortName: "Body Components",
        description:
            "Selected automotive body-related components for replacement, repair and commercial distribution requirements.",
        image:
            "/images/products/automotive-components/body-components.webp",
        tags: ["Body", "Parts"],
        intro:
            "Explore selected automotive body component sourcing options for distributors, repair businesses, importers and aftermarket buyers.",
        products: [
            "Automotive body components",
            "Body replacement parts",
            "Vehicle exterior components",
            "Vehicle interior components",
            "Automotive repair components",
            "Aftermarket body parts",
        ],
        requirements: [
            {
                title: "Body component",
                text: "Specify the body-related component or replacement part required.",
            },
            {
                title: "Vehicle application",
                text: "Share vehicle make, model, year and application details where available.",
            },
            {
                title: "Reference details",
                text: "Provide part numbers, dimensions, photographs or other identification details.",
            },
            {
                title: "Quantity",
                text: "Mention the required order quantity.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },
] as const;

export function generateStaticParams() {
    return automotiveProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = automotiveProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
            title: "Automotive Component | Al Huda",
        };
    }

    return {
        title: `${product.name} | Automotive Components Sourcing & Export | Al Huda`,
        description: `${product.description} Explore ${product.name.toLowerCase()} sourcing options for international buyers, importers, distributors and automotive businesses.`,
        keywords: [
            `${product.name.toLowerCase()} exporter India`,
            `${product.name.toLowerCase()} supplier India`,
            `${product.name.toLowerCase()} sourcing India`,
            `automotive ${product.name.toLowerCase()} India`,
            "automotive components exporter India",
            "automotive parts exporter India",
            "auto components supplier India",
        ],
        alternates: {
            canonical: `/products/automotive-components/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.description,
            type: "website",
            images: [
                {
                    url: product.image,
                    alt: product.name,
                },
            ],
        },
    };
}

export default async function AutomotiveComponentPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = automotiveProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const currentIndex = automotiveProducts.findIndex(
        (item) => item.slug === product.slug
    );

    const previousProduct =
        automotiveProducts[
        (currentIndex - 1 + automotiveProducts.length) %
        automotiveProducts.length
        ];

    const nextProduct =
        automotiveProducts[
        (currentIndex + 1) % automotiveProducts.length
        ];

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
                            href="/products/automotive-components"
                            className="transition hover:text-[#087d68]"
                        >
                            Automotive Components
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087d68] text-[10px] font-bold text-white">
                                    {product.number}
                                </span>

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Automotive Component
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
                                        className="rounded-full border border-[#bcdcd2] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#438275]"
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


                        {/* Image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} automotive components`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/80 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Automotive Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {product.name} for automotive sourcing requirements.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    {product.number}
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Product category
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
                                    {product.shortName} sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Source {product.name.toLowerCase()} around your business requirement.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.intro}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product specifications, vehicle application, part
                                references, quantities, packaging, destination market
                                and other commercial requirements can be discussed
                                during the enquiry process.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                QUICK NAV
            ========================================================= */}

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


            {/* =========================================================
                PRODUCT DETAILS
            ========================================================= */}

            <section
                id="product-details"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product range
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Products within this category.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                The exact products available can depend on the buyer&apos;s
                                application, specifications, vehicle requirements and
                                destination market.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.products.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 rounded-2xl border border-[#dfeae5] bg-white p-5"
                                >

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf7f3] text-[10px] font-bold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div>

                                        <h3 className="text-sm font-semibold leading-5 text-[#23463f]">
                                            {item}
                                        </h3>

                                        <p className="mt-1 text-xs leading-5 text-[#718680]">
                                            Available subject to specification and sourcing requirement.
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                APPLICATIONS
            ========================================================= */}

            <section
                id="applications"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src={product.image}
                                alt={`${product.name} automotive application`}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/65 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Automotive sourcing
                                </span>

                            </div>

                        </div>


                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Applications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Suitable for different automotive sourcing requirements.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                {product.name} can be discussed for a range of
                                automotive sourcing requirements depending on the
                                application and specifications involved.
                            </p>


                            <div className="mt-8 space-y-3">

                                <ApplicationItem
                                    title="Automotive aftermarket"
                                    text="For businesses sourcing replacement components for aftermarket distribution and sales."
                                />

                                <ApplicationItem
                                    title="Importers & distributors"
                                    text="For commercial buyers looking to source automotive components in required quantities."
                                />

                                <ApplicationItem
                                    title="Workshops & repair businesses"
                                    text="For replacement and maintenance-related component requirements."
                                />

                                <ApplicationItem
                                    title="Commercial vehicle requirements"
                                    text="Where applicable, requirements for commercial and fleet vehicle applications can be discussed."
                                />

                            </div>

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

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Buyer requirements
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Start with the details that matter.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                Providing clear product information gives the sourcing
                                process a better starting point.
                            </p>

                        </div>


                        <div className="space-y-3">

                            {product.requirements.map((requirement) => (
                                <RequirementItem
                                    key={requirement.title}
                                    title={requirement.title}
                                    text={requirement.text}
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                SOURCING
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
                                From component requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear product requirement gives our team a better
                                starting point for exploring suitable sourcing and
                                commercial options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <SourcingStep
                                number="01"
                                title="Tell us what you need"
                                text={`Share the ${product.name.toLowerCase()}, vehicle application, quantity, destination and any available specifications.`}
                            />

                            <SourcingStep
                                number="02"
                                title="Review sourcing options"
                                text="We explore suitable sourcing possibilities based on the product and commercial information provided."
                            />

                            <SourcingStep
                                number="03"
                                title="Confirm specifications"
                                text="Product details, applications, quantities, packaging and other requirements are reviewed before proceeding."
                            />

                            <SourcingStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once commercial terms are agreed, relevant documentation and shipment requirements can be coordinated."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                OTHER AUTOMOTIVE COMPONENTS
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

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Other automotive components.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        <RelatedProduct
                            product={previousProduct}
                        />

                        <RelatedProduct
                            product={nextProduct}
                        />

                        <RelatedProduct
                            product={
                                automotiveProducts[
                                (currentIndex + 3) %
                                automotiveProducts.length
                                ]
                            }
                        />

                        <Link
                            href="/products/automotive-components"
                            className="group flex min-h-[120px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                        >

                            <span className="max-w-[180px] text-sm font-semibold leading-5 text-[#345850]">
                                View all automotive components
                            </span>

                            <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                                →
                            </span>

                        </Link>

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
                            Automotive sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product details, vehicle application, quantity,
                            destination market and any specifications you have. We&apos;ll
                            use your requirement as the starting point for the conversation.
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
                                href="/products/automotive-components"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Automotive Components
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
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
   APPLICATION ITEM
   =============================================================== */

function ApplicationItem({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-xl border border-[#dce9e4] bg-[#f8fbf9] p-5">

            <div className="flex items-start gap-4">

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

        </div>
    );
}


/* ===============================================================
   SOURCING STEP
   =============================================================== */

function SourcingStep({
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

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4fae98]/40 text-xs font-semibold text-[#73d1b8]">
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
    product,
}: {
    product: (typeof automotiveProducts)[number];
}) {
    return (
        <Link
            href={`/products/automotive-components/${product.slug}`}
            className="group overflow-hidden rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] transition hover:-translate-y-1 hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <div className="relative h-32 overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} automotive components`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4">

                    <h3 className="text-sm font-semibold text-white">
                        {product.name}
                    </h3>

                </div>

            </div>


            <div className="flex items-center justify-between p-4">

                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#087d68]">
                    Explore
                </span>

                <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                    →
                </span>

            </div>

        </Link>
    );
}

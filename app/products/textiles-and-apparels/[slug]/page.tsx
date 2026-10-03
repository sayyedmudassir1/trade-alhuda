import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type TextileProduct = {
    slug: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
    intro: string;
    applications: string[];
    requirements: {
        title: string;
        text: string;
    }[];
};

const textileProducts: TextileProduct[] = [
    {
        slug: "cotton-textiles",
        name: "Cotton Textiles",
        description:
            "Cotton textile products for international buyers, distributors, retailers and commercial sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/cotton-textiles.webp",
        tags: ["Cotton", "Textiles"],
        intro:
            "Explore cotton textile products sourced for international buyers, distributors, retailers, wholesalers and commercial textile businesses.",
        applications: [
            "Apparel manufacturing",
            "Retail textile sourcing",
            "Home textile applications",
            "Wholesale distribution",
        ],
        requirements: [
            {
                title: "Material",
                text: "Specify cotton type, fibre composition, blend or other material requirements where applicable.",
            },
            {
                title: "Fabric specifications",
                text: "Share GSM, width, weave, knit, finish, construction or other available fabric details.",
            },
            {
                title: "Quantity",
                text: "Mention the required purchasing, production or shipment quantity.",
            },
            {
                title: "Colour & finish",
                text: "Share preferred colours, prints, dyes, finishes or other appearance requirements.",
            },
        ],
    },
    {
        slug: "fabrics",
        name: "Fabrics",
        description:
            "Fabric categories for apparel production, home textiles, commercial applications and buyer-specific sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/fabrics.webp",
        tags: ["Fabrics", "Materials"],
        intro:
            "Source fabric categories according to material, construction, finish, colour, application and destination-market requirements.",
        applications: [
            "Apparel production",
            "Home textiles",
            "Hospitality textiles",
            "Commercial textile applications",
        ],
        requirements: [
            {
                title: "Fabric type",
                text: "Specify the fabric category, construction or intended application.",
            },
            {
                title: "Composition",
                text: "Share fibre composition, blend ratio or material requirements where applicable.",
            },
            {
                title: "Specifications",
                text: "Mention GSM, width, weave, knit, finish, colour and other available specifications.",
            },
            {
                title: "Quantity",
                text: "Share the required quantity or expected purchasing volume.",
            },
        ],
    },
    {
        slug: "readymade-garments",
        name: "Readymade Garments",
        description:
            "Ready-to-wear garment categories for importers, wholesalers, retailers and apparel distribution requirements.",
        image:
            "/images/products/textiles-and-apparels/readymade-garments.webp",
        tags: ["Garments", "Apparel"],
        intro:
            "Explore ready-to-wear garment categories for international apparel buyers, importers, wholesalers, retailers and distributors.",
        applications: [
            "Retail distribution",
            "Wholesale apparel",
            "Import sourcing",
            "Private and commercial requirements",
        ],
        requirements: [
            {
                title: "Garment type",
                text: "Specify the garment category, style or intended customer segment.",
            },
            {
                title: "Material",
                text: "Mention the required fabric, fibre composition or material preference.",
            },
            {
                title: "Sizes",
                text: "Share required size ranges, size ratios or measurement specifications.",
            },
            {
                title: "Quantity",
                text: "Provide expected order quantity, size breakdown or shipment requirements.",
            },
        ],
    },
    {
        slug: "mens-apparel",
        name: "Men's Apparel",
        description:
            "Men's apparel categories for commercial sourcing, retail distribution and international clothing requirements.",
        image:
            "/images/products/textiles-and-apparels/mens-apparel.webp",
        tags: ["Menswear", "Apparel"],
        intro:
            "Source men's apparel categories for importers, distributors, wholesalers, retailers and international clothing businesses.",
        applications: [
            "Retail apparel",
            "Wholesale clothing",
            "Distribution",
            "Commercial sourcing",
        ],
        requirements: [
            {
                title: "Apparel category",
                text: "Specify the men's apparel type, garment style or intended application.",
            },
            {
                title: "Fabric",
                text: "Mention the preferred fibre, fabric composition, weight or construction.",
            },
            {
                title: "Size range",
                text: "Share required sizes, measurement charts or size ratios where available.",
            },
            {
                title: "Design details",
                text: "Mention colours, patterns, trims, finishes or other product specifications.",
            },
        ],
    },
    {
        slug: "womens-apparel",
        name: "Women's Apparel",
        description:
            "Women's apparel categories for retailers, distributors, importers and commercial fashion sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/womens-apparel.webp",
        tags: ["Womenswear", "Apparel"],
        intro:
            "Explore women's apparel categories for retailers, distributors, importers, wholesalers and commercial fashion sourcing requirements.",
        applications: [
            "Fashion retail",
            "Wholesale apparel",
            "Import distribution",
            "Commercial clothing sourcing",
        ],
        requirements: [
            {
                title: "Garment type",
                text: "Specify the women's apparel category, style or intended market.",
            },
            {
                title: "Material",
                text: "Share fabric composition, fibre, construction or material preference.",
            },
            {
                title: "Sizes",
                text: "Mention the required size range, measurement chart or size ratio.",
            },
            {
                title: "Design",
                text: "Share colours, patterns, embellishments, finishes or other design requirements.",
            },
        ],
    },
    {
        slug: "kids-apparel",
        name: "Kids' Apparel",
        description:
            "Children's clothing categories for wholesalers, retailers, distributors and international apparel sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/kids-apparel.webp",
        tags: ["Kids", "Apparel"],
        intro:
            "Source children's apparel categories for retailers, wholesalers, importers and distributors serving international markets.",
        applications: [
            "Children's retail",
            "Wholesale clothing",
            "Apparel distribution",
            "Commercial sourcing",
        ],
        requirements: [
            {
                title: "Age group",
                text: "Specify the intended age group or children's apparel segment.",
            },
            {
                title: "Garment type",
                text: "Mention the required clothing category, style or product type.",
            },
            {
                title: "Material",
                text: "Share fibre composition, fabric type and other material requirements.",
            },
            {
                title: "Sizes",
                text: "Provide required sizes, age ranges or measurement specifications.",
            },
        ],
    },
    {
        slug: "home-textiles",
        name: "Home Textiles",
        description:
            "Home textile categories including textile products for household, hospitality and commercial requirements.",
        image:
            "/images/products/textiles-and-apparels/home-textiles.webp",
        tags: ["Home", "Textiles"],
        intro:
            "Explore home textile categories for household, hospitality, retail, institutional and commercial sourcing requirements.",
        applications: [
            "Household textiles",
            "Hospitality",
            "Retail distribution",
            "Institutional requirements",
        ],
        requirements: [
            {
                title: "Product type",
                text: "Specify the home textile product and intended application.",
            },
            {
                title: "Material",
                text: "Mention fibre composition, fabric type or material preference.",
            },
            {
                title: "Dimensions",
                text: "Share required dimensions, sizes or other physical specifications.",
            },
            {
                title: "Quantity",
                text: "Provide expected order quantity or shipment volume.",
            },
        ],
    },
    {
        slug: "bed-linen",
        name: "Bed Linen",
        description:
            "Bed linen and related textile categories for hospitality, retail, distribution and commercial sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/bed-linen.webp",
        tags: ["Bed Linen", "Home"],
        intro:
            "Source bed linen and related textile products for hospitality, retail, distribution and commercial requirements.",
        applications: [
            "Hotels and hospitality",
            "Retail",
            "Household use",
            "Institutional sourcing",
        ],
        requirements: [
            {
                title: "Product",
                text: "Specify sheets, pillowcases, duvet covers or other required bed linen products.",
            },
            {
                title: "Material",
                text: "Mention cotton, blended or other material preferences.",
            },
            {
                title: "Dimensions",
                text: "Share bed sizes, dimensions and applicable measurement requirements.",
            },
            {
                title: "Finish",
                text: "Mention colour, thread count, weave, finish or other product details.",
            },
        ],
    },
    {
        slug: "towels",
        name: "Towels",
        description:
            "Towel and terry textile categories for retail, hospitality, institutional and commercial sourcing requirements.",
        image:
            "/images/products/textiles-and-apparels/towels.webp",
        tags: ["Towels", "Terry"],
        intro:
            "Explore towel and terry textile categories for hospitality, retail, institutional and commercial sourcing requirements.",
        applications: [
            "Hospitality",
            "Retail",
            "Institutional supply",
            "Household textiles",
        ],
        requirements: [
            {
                title: "Towel type",
                text: "Specify bath towels, hand towels, face towels or other required formats.",
            },
            {
                title: "Material",
                text: "Mention cotton, blended or other preferred textile composition.",
            },
            {
                title: "Size",
                text: "Share required towel dimensions and size specifications.",
            },
            {
                title: "Weight & finish",
                text: "Mention GSM, absorbency, colour, border, embroidery or other requirements.",
            },
        ],
    },
    {
        slug: "workwear",
        name: "Workwear",
        description:
            "Workwear and occupational clothing categories for industrial, institutional and commercial requirements.",
        image:
            "/images/products/textiles-and-apparels/workwear.webp",
        tags: ["Workwear", "Industrial"],
        intro:
            "Source workwear and occupational clothing categories for industrial, institutional and commercial requirements.",
        applications: [
            "Industrial workplaces",
            "Corporate requirements",
            "Institutional supply",
            "Occupational clothing",
        ],
        requirements: [
            {
                title: "Garment type",
                text: "Specify the required workwear garment or occupational clothing category.",
            },
            {
                title: "Material",
                text: "Share fabric composition, weight, durability or other material requirements.",
            },
            {
                title: "Sizing",
                text: "Provide size ranges, measurement charts or employee size requirements.",
            },
            {
                title: "Branding",
                text: "Mention embroidery, printing, labelling or other branding requirements where applicable.",
            },
        ],
    },
    {
        slug: "uniforms",
        name: "Uniforms",
        description:
            "Uniform categories for corporate, institutional, hospitality, educational and other organisational requirements.",
        image:
            "/images/products/textiles-and-apparels/uniforms.webp",
        tags: ["Uniforms", "Custom"],
        intro:
            "Explore uniform sourcing options for corporate, educational, hospitality, institutional and organisational requirements.",
        applications: [
            "Corporate uniforms",
            "School uniforms",
            "Hospitality uniforms",
            "Institutional clothing",
        ],
        requirements: [
            {
                title: "Uniform type",
                text: "Specify the organisation, sector and required uniform garments.",
            },
            {
                title: "Fabric",
                text: "Mention material composition, fabric weight, construction and performance requirements.",
            },
            {
                title: "Sizes",
                text: "Provide size ranges, measurement charts or quantity by size.",
            },
            {
                title: "Branding",
                text: "Share logo placement, embroidery, printing, labels and other branding details.",
            },
        ],
    },
    {
        slug: "custom-textile-requirements",
        name: "Custom Textile Requirements",
        description:
            "Buyer-specific textile and apparel requirements can be discussed according to product, specifications, quantities and destination market.",
        image:
            "/images/products/textiles-and-apparels/custom-textile-requirements.webp",
        tags: ["Custom", "Buyer-Specific"],
        intro:
            "Have a textile or apparel requirement that does not fit a standard category? Share the product specifications and intended market so the requirement can be reviewed.",
        applications: [
            "Custom apparel",
            "Private requirements",
            "Institutional sourcing",
            "Specialised textile sourcing",
        ],
        requirements: [
            {
                title: "Product requirement",
                text: "Describe the textile, apparel or custom product you are looking to source.",
            },
            {
                title: "Specifications",
                text: "Share material, dimensions, construction, design or other available specifications.",
            },
            {
                title: "Quantity",
                text: "Provide expected order quantity, production quantity or shipment volume.",
            },
            {
                title: "Destination",
                text: "Mention the destination country or market and any applicable requirements.",
            },
        ],
    },
];

export async function generateStaticParams() {
    return textileProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = textileProducts.find((item) => item.slug === slug);

    if (!product) {
        return {
            title: "Textile Product | Al Huda",
        };
    }

    return {
        title: `${product.name} | Textile Sourcing & Export | Al Huda`,
        description: `${product.description} Explore ${product.name.toLowerCase()} sourcing options from India for international buyers and commercial requirements.`,
        keywords: [
            `${product.name.toLowerCase()} exporter India`,
            `${product.name.toLowerCase()} supplier India`,
            `${product.name.toLowerCase()} sourcing India`,
            `${product.name.toLowerCase()} India`,
            "textile exporter India",
            "apparel exporter India",
            "textile sourcing India",
            "Indian textile supplier",
        ],
        alternates: {
            canonical: `/products/textiles-and-apparels/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.description,
            type: "website",
        },
    };
}

export default async function TextileProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = textileProducts.find((item) => item.slug === slug);

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
                            href="/products/textiles-and-apparels"
                            className="transition hover:text-[#087d68]"
                        >
                            Textiles & Apparels
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
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
                                {product.name}
                                <span className="block text-[#07846d]">
                                    for global sourcing.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.intro}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#438275]"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(
                                        `Textiles & Apparels - ${product.name}`
                                    )}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Textile Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#requirements"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    View Requirements
                                </a>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} textile products`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Textile Sourcing
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {product.name} for international buyers.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* INTRO */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                {product.name} sourcing for international markets.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.description}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product specifications, material requirements, quantities,
                                packaging, destination market, labelling and other
                                commercial requirements can be discussed as part of the
                                sourcing enquiry.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* QUICK NAV */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#applications"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
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
                            href="#related"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Related
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


            {/* APPLICATIONS */}

            <section
                id="applications"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Applications
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Where this product category can fit.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Depending on the exact product and specifications, {product.name.toLowerCase()} can support different commercial and sourcing requirements.
                        </p>

                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {product.applications.map((application, index) => (
                            <div
                                key={application}
                                className="rounded-2xl border border-[#dfeae5] bg-white p-6"
                            >

                                <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-8 text-lg font-semibold text-[#1a3e37]">
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
                                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=85"
                                alt={`${product.name} textile sourcing`}
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
                                Clear product and specification information gives the
                                sourcing enquiry a useful starting point.
                            </p>

                            <div className="mt-8 space-y-3">

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

                </div>

            </section>


            {/* SOURCING PROCESS */}

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
                                A clear product, specification, quantity and destination
                                requirement gives our team a better starting point for
                                exploring suitable sourcing and trade options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            {[
                                {
                                    number: "01",
                                    title: "Tell us what you need",
                                    text: `Share the ${product.name.toLowerCase()} requirement, specifications, quantity, destination and available product details.`,
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

            <section
                id="related"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Continue exploring
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                            Other textile categories.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        {textileProducts
                            .filter((item) => item.slug !== product.slug)
                            .slice(0, 4)
                            .map((item) => (
                                <RelatedProduct
                                    key={item.slug}
                                    href={`/products/textiles-and-apparels/${item.slug}`}
                                    title={item.name}
                                />
                            ))}

                    </div>

                    <div className="mt-5">

                        <Link
                            href="/products/textiles-and-apparels"
                            className="group flex min-h-[72px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] px-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                        >

                            <span className="text-sm font-semibold text-[#345850]">
                                View all textile & apparel categories
                            </span>

                            <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                                →
                            </span>

                        </Link>

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
                            <span className="text-lg">
                                ↗
                            </span>
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                            Textile sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your specifications, quantity, destination market and
                            any product information you have. We&apos;ll use your requirement
                            as the starting point for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(
                                    `Textiles & Apparels - ${product.name}`
                                )}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Textile Quote
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/products/textiles-and-apparels"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Textiles
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
   RELATED PRODUCT
   =============================================================== */

function RelatedProduct({
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

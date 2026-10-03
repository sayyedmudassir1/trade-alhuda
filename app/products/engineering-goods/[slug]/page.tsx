import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type EngineeringProduct = {
    slug: string;
    number: string;
    name: string;
    shortDescription: string;
    description: string;
    image: string;
    tags: string[];
    applications: string[];
    products: string[];
    buyerTypes: string[];
    specifications: string[];
    formats: string[];
};

const engineeringProducts: EngineeringProduct[] = [
    {
        slug: "fasteners",
        number: "01",
        name: "Fasteners",
        shortDescription:
            "Industrial fasteners sourced from India for construction, fabrication, machinery, infrastructure and commercial requirements.",
        description:
            "Explore fasteners sourced from India for international buyers, distributors, contractors, manufacturers and industrial procurement requirements. The category can include commonly traded fastening products used across construction, fabrication, machinery, maintenance and general engineering applications.",
        image: "/images/products/engineering-goods/fasteners.webp",
        tags: ["Bolts", "Nuts", "Screws", "Washers"],
        applications: [
            "Construction",
            "Industrial fabrication",
            "Machinery assembly",
            "Infrastructure",
            "Maintenance",
            "General engineering",
        ],
        products: [
            "Hex bolts",
            "Nuts",
            "Washers",
            "Machine screws",
            "Self-tapping screws",
            "Threaded rods",
            "Studs",
            "Industrial fasteners",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Construction companies",
            "Hardware wholesalers",
            "Industrial buyers",
            "Manufacturers",
        ],
        specifications: [
            "Product type",
            "Material",
            "Grade",
            "Dimensions",
            "Thread specification",
            "Finish or coating",
            "Quantity",
            "Packaging",
        ],
        formats: [
            "Standard fasteners",
            "Bulk quantities",
            "Industrial procurement",
            "Buyer-specific specifications",
        ],
    },

    {
        slug: "pipes-and-fittings",
        number: "02",
        name: "Pipes & Fittings",
        shortDescription:
            "Pipes, fittings and related products for industrial, construction, infrastructure, plumbing and commercial applications.",
        description:
            "Explore pipes and fittings sourced from India for international industrial, infrastructure, construction, plumbing and commercial requirements. Product selection can be discussed according to material, dimensions, application, standards and quantity.",
        image: "/images/products/engineering-goods/pipes-and-fittings.webp",
        tags: ["Pipes", "Fittings", "Industrial", "Infrastructure"],
        applications: [
            "Industrial piping",
            "Construction",
            "Infrastructure",
            "Plumbing",
            "Water systems",
            "Process applications",
        ],
        products: [
            "Pipes",
            "Elbows",
            "Tees",
            "Reducers",
            "Couplings",
            "Flanges",
            "Pipe nipples",
            "Pipe fittings",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Contractors",
            "Infrastructure companies",
            "Plumbing suppliers",
            "Industrial buyers",
        ],
        specifications: [
            "Material",
            "Pipe size",
            "Wall thickness",
            "Pressure rating",
            "Connection type",
            "Length",
            "Standard",
            "Quantity",
        ],
        formats: [
            "Standard pipe products",
            "Fittings",
            "Project quantities",
            "Buyer-specific requirements",
        ],
    },

    {
        slug: "valves",
        number: "03",
        name: "Valves",
        shortDescription:
            "Valve products for industrial, plumbing, infrastructure, water, process and commercial sourcing requirements.",
        description:
            "Explore valve products sourced from India for industrial, infrastructure, plumbing, water and process applications. Requirements can be discussed around valve type, material, pressure rating, connection and intended application.",
        image: "/images/products/engineering-goods/valves.webp",
        tags: ["Industrial", "Process", "Plumbing", "Infrastructure"],
        applications: [
            "Industrial systems",
            "Water treatment",
            "Plumbing",
            "Process systems",
            "Infrastructure",
            "Pipelines",
        ],
        products: [
            "Ball valves",
            "Gate valves",
            "Globe valves",
            "Check valves",
            "Butterfly valves",
            "Control valves",
            "Industrial valves",
            "Valve components",
        ],
        buyerTypes: [
            "Industrial distributors",
            "Importers",
            "Contractors",
            "Infrastructure companies",
            "Process industries",
            "Engineering procurement companies",
        ],
        specifications: [
            "Valve type",
            "Body material",
            "Size",
            "Pressure rating",
            "Connection",
            "Temperature range",
            "Application",
            "Quantity",
        ],
        formats: [
            "Standard valves",
            "Industrial valves",
            "Project requirements",
            "Application-specific sourcing",
        ],
    },

    {
        slug: "industrial-tools",
        number: "04",
        name: "Industrial Tools",
        shortDescription:
            "Hand tools, workshop tools and industrial equipment categories for maintenance, construction, fabrication and engineering requirements.",
        description:
            "Explore industrial tools sourced from India for workshops, maintenance teams, construction companies, fabrication businesses and industrial buyers. Product requirements can be discussed according to tool type, application, material and quantity.",
        image: "/images/products/engineering-goods/industrial-tools.webp",
        tags: ["Hand Tools", "Workshop", "Maintenance", "Industrial"],
        applications: [
            "Workshops",
            "Maintenance",
            "Construction",
            "Fabrication",
            "Automotive service",
            "Industrial operations",
        ],
        products: [
            "Wrenches",
            "Spanners",
            "Pliers",
            "Screwdrivers",
            "Sockets",
            "Hammers",
            "Cutting tools",
            "Workshop tools",
        ],
        buyerTypes: [
            "Tool distributors",
            "Hardware wholesalers",
            "Industrial buyers",
            "Construction companies",
            "Workshops",
            "Importers",
        ],
        specifications: [
            "Tool type",
            "Material",
            "Size",
            "Application",
            "Finish",
            "Set configuration",
            "Quantity",
            "Packaging",
        ],
        formats: [
            "Individual tools",
            "Tool sets",
            "Workshop requirements",
            "Bulk procurement",
        ],
    },

    {
        slug: "metal-products",
        number: "05",
        name: "Metal Products",
        shortDescription:
            "Metal products and components for fabrication, construction, machinery, industrial and commercial sourcing requirements.",
        description:
            "Explore metal products and components sourced from India for fabrication, construction, machinery, infrastructure and general industrial applications. Requirements can be discussed around material, dimensions, grade, finish and quantity.",
        image: "/images/products/engineering-goods/metal-products.webp",
        tags: ["Metal", "Components", "Fabrication", "Industrial"],
        applications: [
            "Fabrication",
            "Construction",
            "Machinery",
            "Infrastructure",
            "Industrial manufacturing",
            "General engineering",
        ],
        products: [
            "Metal sections",
            "Metal plates",
            "Metal sheets",
            "Bars",
            "Rods",
            "Metal components",
            "Fabricated parts",
            "Industrial metal products",
        ],
        buyerTypes: [
            "Fabricators",
            "Manufacturers",
            "Importers",
            "Distributors",
            "Construction companies",
            "Industrial buyers",
        ],
        specifications: [
            "Metal type",
            "Grade",
            "Dimensions",
            "Thickness",
            "Surface finish",
            "Tolerance",
            "Quantity",
            "Packaging",
        ],
        formats: [
            "Standard metal products",
            "Cut-to-size requirements",
            "Industrial quantities",
            "Fabricated components",
        ],
    },

    {
        slug: "castings-and-forgings",
        number: "06",
        name: "Castings & Forgings",
        shortDescription:
            "Cast and forged engineering products for machinery, automotive, industrial, infrastructure and component requirements.",
        description:
            "Explore castings and forgings sourced from India for machinery manufacturers, industrial buyers, automotive applications, infrastructure projects and engineering procurement requirements. Buyer-specific drawings and technical specifications can be discussed.",
        image: "/images/products/engineering-goods/castings-and-forgings.webp",
        tags: ["Castings", "Forgings", "Components", "Industrial"],
        applications: [
            "Machinery",
            "Automotive",
            "Industrial equipment",
            "Infrastructure",
            "Pumps and equipment",
            "Heavy engineering",
        ],
        products: [
            "Steel castings",
            "Iron castings",
            "Aluminium castings",
            "Forged components",
            "Machined castings",
            "Industrial housings",
            "Flanges",
            "Custom components",
        ],
        buyerTypes: [
            "OEMs",
            "Machinery manufacturers",
            "Industrial distributors",
            "Engineering companies",
            "Automotive businesses",
            "Importers",
        ],
        specifications: [
            "Material",
            "Drawing",
            "Dimensions",
            "Weight",
            "Machining requirements",
            "Tolerance",
            "Surface finish",
            "Quantity",
        ],
        formats: [
            "Standard components",
            "Cast components",
            "Forged components",
            "Drawing-based requirements",
        ],
    },

    {
        slug: "electrical-components",
        number: "07",
        name: "Electrical Components",
        shortDescription:
            "Electrical and related component categories for industrial, commercial, infrastructure and project-based requirements.",
        description:
            "Explore electrical component categories sourced from India for industrial, commercial, infrastructure and project procurement requirements. Product specifications can be discussed according to application, electrical characteristics, dimensions and quantity.",
        image: "/images/products/engineering-goods/electrical-components.webp",
        tags: ["Components", "Electrical", "Industrial", "Projects"],
        applications: [
            "Industrial electrical systems",
            "Infrastructure",
            "Construction",
            "Control systems",
            "Electrical installations",
            "Commercial projects",
        ],
        products: [
            "Electrical connectors",
            "Terminals",
            "Switchgear components",
            "Cable accessories",
            "Electrical fittings",
            "Control components",
            "Industrial electrical parts",
            "Electrical hardware",
        ],
        buyerTypes: [
            "Electrical distributors",
            "Contractors",
            "Industrial buyers",
            "Project procurement teams",
            "Importers",
            "Electrical wholesalers",
        ],
        specifications: [
            "Component type",
            "Material",
            "Electrical rating",
            "Dimensions",
            "Application",
            "Standard",
            "Quantity",
            "Packaging",
        ],
        formats: [
            "Standard components",
            "Electrical hardware",
            "Project quantities",
            "Buyer-specific requirements",
        ],
    },

    {
        slug: "automotive-components",
        number: "08",
        name: "Automotive Components",
        shortDescription:
            "Automotive component categories for distributors, aftermarket businesses, workshops and commercial sourcing requirements.",
        description:
            "Explore automotive components sourced from India for distributors, aftermarket businesses, workshops and commercial buyers. Requirements can be discussed according to vehicle application, component specification, model compatibility and quantity.",
        image: "/images/products/engineering-goods/automotive-components.webp",
        tags: ["Automotive", "Components", "Aftermarket", "Parts"],
        applications: [
            "Automotive aftermarket",
            "Vehicle maintenance",
            "Workshops",
            "Commercial vehicles",
            "Passenger vehicles",
            "Automotive distribution",
        ],
        products: [
            "Automotive hardware",
            "Engine components",
            "Suspension components",
            "Brake components",
            "Steering components",
            "Electrical components",
            "Replacement parts",
            "Automotive accessories",
        ],
        buyerTypes: [
            "Automotive distributors",
            "Aftermarket businesses",
            "Importers",
            "Workshops",
            "Parts wholesalers",
            "Automotive retailers",
        ],
        specifications: [
            "Vehicle make",
            "Vehicle model",
            "Part number",
            "Component type",
            "Material",
            "Dimensions",
            "Compatibility",
            "Quantity",
        ],
        formats: [
            "Replacement parts",
            "Aftermarket components",
            "Bulk quantities",
            "Buyer-specific parts",
        ],
    },

    {
        slug: "construction-hardware",
        number: "09",
        name: "Construction Hardware",
        shortDescription:
            "Construction hardware and building-related products for contractors, distributors, infrastructure and commercial projects.",
        description:
            "Explore construction hardware sourced from India for contractors, distributors, builders, infrastructure companies and commercial construction requirements. Product categories can include hardware used for structural, installation, fastening and general building applications.",
        image: "/images/products/engineering-goods/construction-hardware.webp",
        tags: ["Hardware", "Construction", "Building", "Infrastructure"],
        applications: [
            "Construction",
            "Infrastructure",
            "Building projects",
            "Installation",
            "Fabrication",
            "Commercial projects",
        ],
        products: [
            "Construction fasteners",
            "Anchors",
            "Brackets",
            "Clamps",
            "Hardware fittings",
            "Building hardware",
            "Metal hardware",
            "Installation hardware",
        ],
        buyerTypes: [
            "Construction companies",
            "Contractors",
            "Hardware distributors",
            "Builders",
            "Importers",
            "Infrastructure companies",
        ],
        specifications: [
            "Product type",
            "Material",
            "Dimensions",
            "Load requirement",
            "Finish",
            "Application",
            "Quantity",
            "Packaging",
        ],
        formats: [
            "Standard hardware",
            "Project quantities",
            "Bulk procurement",
            "Application-specific products",
        ],
    },

    {
        slug: "machinery-components",
        number: "10",
        name: "Machinery Components",
        shortDescription:
            "Machinery-related components for equipment manufacturers, maintenance teams, industrial buyers and engineering applications.",
        description:
            "Explore machinery components sourced from India for equipment manufacturers, maintenance teams, industrial buyers and engineering businesses. Product requirements can be discussed according to machinery type, dimensions, material, drawing and application.",
        image: "/images/products/engineering-goods/machinery-components.webp",
        tags: ["Machinery", "Components", "Industrial", "Engineering"],
        applications: [
            "Industrial machinery",
            "Equipment manufacturing",
            "Machine maintenance",
            "Production systems",
            "Material handling",
            "Engineering projects",
        ],
        products: [
            "Machine components",
            "Shafts",
            "Bushes",
            "Gears",
            "Pulleys",
            "Couplings",
            "Machine brackets",
            "Machined components",
        ],
        buyerTypes: [
            "OEMs",
            "Machinery manufacturers",
            "Maintenance companies",
            "Industrial distributors",
            "Engineering companies",
            "Importers",
        ],
        specifications: [
            "Component type",
            "Drawing",
            "Material",
            "Dimensions",
            "Tolerance",
            "Surface finish",
            "Machine application",
            "Quantity",
        ],
        formats: [
            "Standard components",
            "Machined components",
            "Replacement components",
            "Drawing-based requirements",
        ],
    },

    {
        slug: "industrial-fabrication",
        number: "11",
        name: "Industrial Fabrication",
        shortDescription:
            "Fabricated engineering products and metalwork for industrial, infrastructure, construction and project-specific requirements.",
        description:
            "Explore industrial fabrication and fabricated metalwork sourced from India for infrastructure, construction, industrial projects and engineering procurement. Buyer drawings, dimensions, materials, quantities and fabrication requirements can be discussed.",
        image: "/images/products/engineering-goods/industrial-fabrication.webp",
        tags: ["Fabrication", "Metalwork", "Projects", "Industrial"],
        applications: [
            "Industrial projects",
            "Infrastructure",
            "Construction",
            "Plant equipment",
            "Structural fabrication",
            "Engineering projects",
        ],
        products: [
            "Fabricated structures",
            "Metal frames",
            "Industrial platforms",
            "Brackets",
            "Machine frames",
            "Fabricated assemblies",
            "Metal enclosures",
            "Project-specific fabrication",
        ],
        buyerTypes: [
            "Engineering companies",
            "EPC contractors",
            "Construction companies",
            "Industrial buyers",
            "Infrastructure companies",
            "Project procurement teams",
        ],
        specifications: [
            "Drawing",
            "Material",
            "Dimensions",
            "Welding requirements",
            "Surface treatment",
            "Tolerance",
            "Quantity",
            "Packaging",
        ],
        formats: [
            "Fabricated components",
            "Fabricated assemblies",
            "Project fabrication",
            "Drawing-based production",
        ],
    },

    {
        slug: "custom-engineering-products",
        number: "12",
        name: "Custom Engineering Products",
        shortDescription:
            "Buyer-specific engineering products and components based on drawings, dimensions, materials and technical specifications.",
        description:
            "For requirements that do not fit a standard catalogue category, custom engineering products can be discussed around buyer-provided drawings, dimensions, materials, technical specifications and commercial requirements.",
        image:
            "/images/products/engineering-goods/custom-engineering-products.webp",
        tags: ["Custom", "Buyer-Specific", "Drawings", "Engineering"],
        applications: [
            "Custom machinery",
            "Industrial equipment",
            "Engineering projects",
            "OEM requirements",
            "Replacement components",
            "Infrastructure projects",
        ],
        products: [
            "Custom components",
            "Machined parts",
            "Fabricated parts",
            "Custom castings",
            "Custom forgings",
            "Special fasteners",
            "Engineering assemblies",
            "Drawing-based products",
        ],
        buyerTypes: [
            "OEMs",
            "Engineering companies",
            "Industrial buyers",
            "Project procurement teams",
            "Manufacturers",
            "Importers",
        ],
        specifications: [
            "Engineering drawing",
            "Material",
            "Dimensions",
            "Tolerance",
            "Surface finish",
            "Application",
            "Quantity",
            "Inspection requirements",
        ],
        formats: [
            "Drawing-based products",
            "Custom components",
            "Prototype requirements",
            "Production quantities",
        ],
    },
];

export function generateStaticParams() {
    return engineeringProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = engineeringProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
            title: "Engineering Product | Al Huda",
        };
    }

    return {
        title: `${product.name} | Indian ${product.name} Supplier & Export | Al Huda`,
        description:
            product.shortDescription +
            " Explore sourcing options, applications, specifications and commercial requirements with Al Huda.",
        keywords: [
            `${product.name} India`,
            `${product.name} supplier India`,
            `${product.name} exporter India`,
            `${product.name} manufacturer India`,
            `Indian ${product.name}`,
            `${product.name} sourcing India`,
            `${product.name} wholesale India`,
            `${product.name} export India`,
        ],
        alternates: {
            canonical: `/products/engineering-goods/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.shortDescription,
            type: "website",
            images: [
                {
                    url: product.image,
                    alt: `${product.name} engineering products`,
                },
            ],
        },
    };
}

export default async function EngineeringProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = engineeringProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const currentIndex = engineeringProducts.findIndex(
        (item) => item.slug === product.slug
    );

    const previousProduct =
        currentIndex > 0
            ? engineeringProducts[currentIndex - 1]
            : engineeringProducts[engineeringProducts.length - 1];

    const nextProduct =
        currentIndex < engineeringProducts.length - 1
            ? engineeringProducts[currentIndex + 1]
            : engineeringProducts[0];

    const relatedProducts = engineeringProducts
        .filter((item) => item.slug !== product.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#6f8881]"
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
                            href="/products/engineering-goods"
                            className="transition hover:text-[#087d68]"
                        >
                            Engineering Goods
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>

                    </nav>


                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Engineering Goods / {product.name}
                                </span>

                            </div>


                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-6xl">
                                {product.name}
                                <span className="block text-[#07846d]">
                                    for global buyers.
                                </span>
                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.shortDescription}
                            </p>


                            <div className="mt-8 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-[#bdd7ce] bg-white/70 px-4 py-2 text-xs font-semibold text-[#39776b]"
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
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>

                                <a
                                    href="#specifications"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    View Specifications
                                </a>

                            </div>

                        </div>


                        {/* Image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} sourced from India`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Product Category {product.number}
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {product.name} sourcing from India.
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
                QUICK NAVIGATION
            ========================================================= */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#overview"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Overview
                        </a>

                        <a
                            href="#products"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Products
                        </a>

                        <a
                            href="#applications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Applications
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
                OVERVIEW
            ========================================================= */}

            <section
                id="overview"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product overview
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                {product.name} sourcing for commercial requirements.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.description}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Requirements can vary by application, market,
                                specification, quantity and commercial terms. Sharing
                                these details at the enquiry stage helps establish a
                                clearer sourcing requirement.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                PRODUCT RANGE
            ========================================================= */}

            <section
                id="products"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product range
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Products within {product.name}.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                The exact product range can vary according to the
                                sourcing requirement, application, specification and
                                destination market.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.products.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-2xl border border-[#dfeae5] bg-white p-5"
                                >

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f5f0] text-[10px] font-bold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-semibold text-[#345850]">
                                        {item}
                                    </span>

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

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Applications
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Where {product.name.toLowerCase()} can be used.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Product suitability depends on the technical
                            specification and intended application. Common sourcing
                            areas include the following.
                        </p>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {product.applications.map((application, index) => (
                            <div
                                key={application}
                                className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-7"
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
                                src="/images/products/engineering-goods/engineering-components.webp"
                                alt={`${product.name} engineering components`}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/55 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Buyer specifications
                                </span>

                            </div>

                        </div>


                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Specifications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Tell us the specifications that matter.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                The more precise the technical requirement, the easier
                                it is to understand the product being requested.
                                Depending on the product, useful information can
                                include the following.
                            </p>


                            <div className="mt-8 space-y-3">

                                {product.specifications.map((specification) => (
                                    <div
                                        key={specification}
                                        className="flex gap-4 rounded-xl border border-[#dce9e4] bg-white p-4"
                                    >

                                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

                                        <span className="text-sm font-semibold text-[#345850]">
                                            {specification}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BUYER FORMATS
            ========================================================= */}

            <section className="bg-white">

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
                                Source {product.name.toLowerCase()} around your requirement.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Requirements can range from standard catalogue products
                                to larger project quantities and buyer-specific
                                specifications.
                            </p>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2">

                            {product.formats.map((format, index) => (
                                <div
                                    key={format}
                                    className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-7"
                                >

                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                        {format}
                                    </h3>

                                </div>
                            ))}

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
                                From product requirement to trade enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A clear requirement gives our team a better starting
                                point for exploring suitable sourcing and commercial
                                options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <SourcingStep
                                number="01"
                                title="Tell us what you need"
                                text={`Share the ${product.name.toLowerCase()}, specification, quantity, destination and any documentation available.`}
                            />

                            <SourcingStep
                                number="02"
                                title="Review sourcing options"
                                text="We explore suitable sourcing possibilities based on the product category and information provided."
                            />

                            <SourcingStep
                                number="03"
                                title="Confirm specifications"
                                text="Product specifications, materials, dimensions, packaging and commercial requirements are reviewed before proceeding."
                            />

                            <SourcingStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once commercial terms are agreed, relevant documentation, logistics and shipment requirements can be coordinated."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BUYER TYPES
            ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Suitable buyers
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Who can enquire about {product.name.toLowerCase()}?
                        </h2>

                    </div>


                    <div className="flex flex-wrap gap-3">

                        {product.buyerTypes.map((buyer) => (
                            <span
                                key={buyer}
                                className="rounded-full border border-[#cfe1da] bg-white px-5 py-3 text-sm font-medium text-[#456961]"
                            >
                                {buyer}
                            </span>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                RELATED PRODUCTS
            ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Continue exploring
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                                Related engineering categories.
                            </h2>

                        </div>

                        <Link
                            href="/products/engineering-goods"
                            className="text-sm font-semibold text-[#087d68] hover:text-[#056b59]"
                        >
                            View all engineering goods →
                        </Link>

                    </div>


                    <div className="grid gap-5 md:grid-cols-3">

                        {relatedProducts.map((related) => (
                            <Link
                                key={related.slug}
                                href={`/products/engineering-goods/${related.slug}`}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
                            >

                                <div className="relative aspect-[1.25] overflow-hidden">

                                    <img
                                        src={related.image}
                                        alt={`${related.name} engineering products`}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />

                                    <div className="absolute bottom-4 left-4 right-4">

                                        <h3 className="text-xl font-semibold text-white">
                                            {related.name}
                                        </h3>

                                    </div>

                                </div>


                                <div className="flex items-center justify-between p-5">

                                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#087d68]">
                                        Explore
                                    </span>

                                    <span className="text-lg text-[#087d68] transition-transform group-hover:translate-x-1">
                                        →
                                    </span>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                PREVIOUS / NEXT
            ========================================================= */}

            <section className="border-t border-[#dfeae5] bg-[#f8fbf9]">

                <div className="mx-auto grid max-w-7xl md:grid-cols-2">

                    <Link
                        href={`/products/engineering-goods/${previousProduct.slug}`}
                        className="group border-b border-[#dfeae5] p-7 transition hover:bg-[#edf7f3] md:border-b-0 md:border-r sm:p-10 lg:p-14"
                    >

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#758b85]">
                            Previous category
                        </span>

                        <div className="mt-4 flex items-center justify-between gap-5">

                            <h3 className="text-xl font-semibold text-[#23463f] sm:text-2xl">
                                {previousProduct.name}
                            </h3>

                            <span className="text-xl text-[#087d68] transition-transform group-hover:-translate-x-1">
                                ←
                            </span>

                        </div>

                    </Link>


                    <Link
                        href={`/products/engineering-goods/${nextProduct.slug}`}
                        className="group p-7 transition hover:bg-[#edf7f3] sm:p-10 lg:p-14"
                    >

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#758b85]">
                            Next category
                        </span>

                        <div className="mt-4 flex items-center justify-between gap-5">

                            <h3 className="text-xl font-semibold text-[#23463f] sm:text-2xl">
                                {nextProduct.name}
                            </h3>

                            <span className="text-xl text-[#087d68] transition-transform group-hover:translate-x-1">
                                →
                            </span>

                        </div>

                    </Link>

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
                            Engineering sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your product requirement, specifications,
                            quantity, destination market and any drawings or
                            technical information you have.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(
                                    product.name
                                )}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Quote
                                <span className="ml-2">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/products/engineering-goods"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Engineering Goods
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
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

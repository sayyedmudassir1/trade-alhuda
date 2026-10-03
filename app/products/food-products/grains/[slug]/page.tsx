import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ===============================================================
   PRODUCT DATA
   =============================================================== */

const grainProducts = {
    "basmati-rice": {
        number: "01",
        name: "Basmati Rice",
        category: "Rice",
        eyebrow: "Food Products / Grains / Rice",
        shortDescription:
            "Basmati rice products for international buyers, distributors, food businesses and commercial sourcing requirements.",
        description:
            "Explore Basmati rice products sourced for international food businesses, distributors, retailers and commercial buyers. Product variety, grain specifications, packaging, quantity and destination requirements can be discussed as part of the sourcing enquiry.",
        image: "/images/products/food-products/basmati-rice.webp",
        tags: ["Rice", "Long Grain"],
        forms: [
            "Whole grain",
            "Milled rice",
            "Commercial bulk formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food service",
            "Restaurants and catering",
            "Food distribution",
            "Commercial food preparation",
        ],
        specifications: [
            {
                title: "Rice variety",
                text: "Specify the preferred Basmati variety or product requirement.",
            },
            {
                title: "Grain specifications",
                text: "Share any preferred grain characteristics or product specifications.",
            },
            {
                title: "Quantity",
                text: "Mention your expected order or purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred bag size, packaging or labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market for the enquiry.",
            },
        ],
    },

    "non-basmati-rice": {
        number: "02",
        name: "Non-Basmati Rice",
        category: "Rice",
        eyebrow: "Food Products / Grains / Rice",
        shortDescription:
            "Non-basmati rice varieties for food service, distribution, retail and commercial food sourcing requirements.",
        description:
            "Non-basmati rice products can be sourced for international distributors, food businesses, retailers and commercial buyers. Requirements around variety, grain specifications, quantity, packaging and destination can be discussed during the enquiry process.",
        image: "/images/products/food-products/non-basmati-rice.webp",
        tags: ["Rice", "Grains"],
        forms: [
            "Whole grain",
            "Milled rice",
            "Commercial bulk formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food service",
            "Restaurants and catering",
            "Food distribution",
            "Commercial food preparation",
        ],
        specifications: [
            {
                title: "Rice variety",
                text: "Specify the preferred non-basmati variety or product requirement.",
            },
            {
                title: "Grain specifications",
                text: "Share any preferred grain characteristics or specifications.",
            },
            {
                title: "Quantity",
                text: "Mention your expected order or purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging, bag size or labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market for the enquiry.",
            },
        ],
    },

    wheat: {
        number: "03",
        name: "Wheat",
        category: "Cereals",
        eyebrow: "Food Products / Grains / Cereals",
        shortDescription:
            "Wheat products for food processing, milling, commercial distribution and bulk sourcing requirements.",
        description:
            "Wheat products can be sourced for food processors, millers, distributors and commercial buyers. Product requirements, quantity, packaging, destination and other purchasing specifications can be discussed as part of the enquiry.",
        image: "/images/products/food-products/wheat.webp",
        tags: ["Whole Grain", "Bulk"],
        forms: [
            "Whole wheat grain",
            "Milling wheat",
            "Bulk formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Milling",
            "Bakery",
            "Food processing",
            "Food distribution",
            "Commercial food production",
        ],
        specifications: [
            {
                title: "Wheat type",
                text: "Specify the preferred wheat type or intended application.",
            },
            {
                title: "Product requirements",
                text: "Share any grain or processing specifications required for your market.",
            },
            {
                title: "Quantity",
                text: "Mention your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    maize: {
        number: "04",
        name: "Maize",
        category: "Cereals",
        eyebrow: "Food Products / Grains / Cereals",
        shortDescription:
            "Maize and corn products for food processing, ingredient applications and commercial sourcing requirements.",
        description:
            "Maize products can be considered for food processing, ingredient applications, distribution and other commercial requirements. Product form, quantity, packaging and destination specifications can be discussed during the sourcing process.",
        image: "/images/products/food-products/maize.webp",
        tags: ["Grain", "Corn"],
        forms: [
            "Whole maize",
            "Processed formats",
            "Bulk grain",
            "Buyer-specific packaging",
        ],
        applications: [
            "Food processing",
            "Ingredient applications",
            "Food distribution",
            "Commercial food production",
            "Food service",
        ],
        specifications: [
            {
                title: "Maize type",
                text: "Specify the preferred maize type and intended application.",
            },
            {
                title: "Product form",
                text: "Mention whether you require whole grain or another processed format.",
            },
            {
                title: "Quantity",
                text: "Share your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Mention preferred packaging, bag size or labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    millets: {
        number: "05",
        name: "Millets",
        category: "Cereals",
        eyebrow: "Food Products / Grains / Cereals",
        shortDescription:
            "Millet varieties for food, ingredient, health-oriented and commercial grain sourcing applications.",
        description:
            "Millet products can be sourced for food businesses, distributors, retailers and ingredient applications. Buyers can discuss preferred varieties, processing requirements, quantity, packaging and destination markets.",
        image: "/images/products/food-products/millets.webp",
        tags: ["Whole Grain", "Cereals"],
        forms: [
            "Whole millet",
            "Processed millet",
            "Milled formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Health-oriented foods",
            "Food processing",
            "Ingredient applications",
            "Food service",
        ],
        specifications: [
            {
                title: "Millet variety",
                text: "Specify the millet variety or type required.",
            },
            {
                title: "Processing",
                text: "Mention any preferred processing or product format.",
            },
            {
                title: "Quantity",
                text: "Share your expected order or purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market for the enquiry.",
            },
        ],
    },

    chickpeas: {
        number: "06",
        name: "Chickpeas",
        category: "Pulses",
        eyebrow: "Food Products / Grains / Pulses",
        shortDescription:
            "Chickpeas and gram products for food preparation, processing, distribution and commercial requirements.",
        description:
            "Chickpeas can be sourced for food businesses, distributors, retailers and commercial pulse requirements. Buyers can discuss preferred product form, specifications, quantity, packaging and destination markets.",
        image: "/images/products/food-products/chickpeas.webp",
        tags: ["Pulses", "Whole"],
        forms: [
            "Whole chickpeas",
            "Processed chickpeas",
            "Commercial bulk formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food service",
            "Food processing",
            "Restaurants and catering",
            "Pulse distribution",
        ],
        specifications: [
            {
                title: "Chickpea type",
                text: "Specify the preferred chickpea variety or product type.",
            },
            {
                title: "Product form",
                text: "Mention whole, processed or another required form.",
            },
            {
                title: "Quantity",
                text: "Share your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    lentils: {
        number: "07",
        name: "Lentils",
        category: "Pulses",
        eyebrow: "Food Products / Grains / Pulses",
        shortDescription:
            "Lentil products for food businesses, distributors and buyers sourcing pulses for commercial applications.",
        description:
            "Lentil products can be sourced for food preparation, retail, food service and commercial pulse requirements. Product variety, processing, quantity, packaging and destination specifications can be discussed during the enquiry.",
        image: "/images/products/food-products/lentils.webp",
        tags: ["Pulses", "Whole"],
        forms: [
            "Whole lentils",
            "Processed lentils",
            "Bulk pulse formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food service",
            "Food processing",
            "Restaurants and catering",
            "Pulse distribution",
        ],
        specifications: [
            {
                title: "Lentil variety",
                text: "Specify the preferred lentil variety or type.",
            },
            {
                title: "Processing",
                text: "Mention the preferred product form or processing requirement.",
            },
            {
                title: "Quantity",
                text: "Share your expected order or purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging or labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market for the enquiry.",
            },
        ],
    },

    "kidney-beans": {
        number: "08",
        name: "Kidney Beans",
        category: "Pulses",
        eyebrow: "Food Products / Grains / Pulses",
        shortDescription:
            "Kidney beans for food preparation, retail, food service and commercial pulse sourcing requirements.",
        description:
            "Kidney beans can be sourced for food businesses, distributors, retailers and food service applications. Product requirements, quantity, packaging, destination and other commercial specifications can be discussed.",
        image: "/images/products/food-products/kidney-beans.webp",
        tags: ["Pulses", "Beans"],
        forms: [
            "Whole beans",
            "Commercial bulk formats",
            "Processed formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food service",
            "Restaurants and catering",
            "Food processing",
            "Pulse distribution",
        ],
        specifications: [
            {
                title: "Bean type",
                text: "Specify the preferred kidney bean type or product requirement.",
            },
            {
                title: "Product specifications",
                text: "Share any preferred size, appearance or other commercial specifications.",
            },
            {
                title: "Quantity",
                text: "Mention your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    "green-gram": {
        number: "09",
        name: "Green Gram",
        category: "Pulses",
        eyebrow: "Food Products / Grains / Pulses",
        shortDescription:
            "Green gram and moong products for food preparation, processing and commercial pulse requirements.",
        description:
            "Green gram products can be sourced for food businesses, distributors and commercial buyers. Requirements around product type, processing, quantity, packaging and destination can be discussed as part of the sourcing enquiry.",
        image: "/images/products/food-products/green-gram.webp",
        tags: ["Moong", "Pulses"],
        forms: [
            "Whole green gram",
            "Processed formats",
            "Bulk pulses",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food processing",
            "Food service",
            "Restaurants and catering",
            "Pulse distribution",
        ],
        specifications: [
            {
                title: "Green gram type",
                text: "Specify the preferred green gram or moong product.",
            },
            {
                title: "Processing",
                text: "Mention the required processing or product form.",
            },
            {
                title: "Quantity",
                text: "Share your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination market for the enquiry.",
            },
        ],
    },

    "black-gram": {
        number: "10",
        name: "Black Gram",
        category: "Pulses",
        eyebrow: "Food Products / Grains / Pulses",
        shortDescription:
            "Black gram and urad products for food preparation, processing and commercial sourcing requirements.",
        description:
            "Black gram products can be sourced for food businesses, distributors, food service and commercial pulse requirements. Product form, specifications, quantity, packaging and destination can be discussed during the enquiry process.",
        image: "/images/products/food-products/black-gram.webp",
        tags: ["Urad", "Pulses"],
        forms: [
            "Whole black gram",
            "Processed formats",
            "Bulk pulses",
            "Buyer-specific packaging",
        ],
        applications: [
            "Retail and grocery",
            "Food preparation",
            "Food processing",
            "Food service",
            "Pulse distribution",
        ],
        specifications: [
            {
                title: "Black gram type",
                text: "Specify the preferred black gram or urad product.",
            },
            {
                title: "Processing",
                text: "Mention any preferred processing or product format.",
            },
            {
                title: "Quantity",
                text: "Share your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging or labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    "gram-flour": {
        number: "11",
        name: "Gram Flour",
        category: "Flours",
        eyebrow: "Food Products / Grains / Flours",
        shortDescription:
            "Gram flour for food preparation, bakery, snack, batter and ingredient-oriented commercial applications.",
        description:
            "Gram flour, commonly known as besan, can be sourced for food businesses, manufacturers, distributors and commercial ingredient applications. Buyers can discuss specifications, packaging, quantity and destination requirements.",
        image: "/images/products/food-products/gram-flour.webp",
        tags: ["Flour", "Besan"],
        forms: [
            "Gram flour",
            "Milled format",
            "Bulk ingredient formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Snack production",
            "Food processing",
            "Batter and coating",
            "Retail and grocery",
            "Ingredient supply",
        ],
        specifications: [
            {
                title: "Flour specification",
                text: "Specify the preferred gram flour product and intended application.",
            },
            {
                title: "Milling requirements",
                text: "Share any preferred processing or flour characteristics.",
            },
            {
                title: "Quantity",
                text: "Mention your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },

    "wheat-flour": {
        number: "12",
        name: "Wheat Flour",
        category: "Flours",
        eyebrow: "Food Products / Grains / Flours",
        shortDescription:
            "Wheat flour products for bakery, food processing, food service and commercial ingredient requirements.",
        description:
            "Wheat flour can be sourced for bakeries, food manufacturers, distributors, food service businesses and commercial buyers. Flour specifications, quantity, packaging, destination and intended application can be discussed during the enquiry.",
        image: "/images/products/food-products/wheat-flour.webp",
        tags: ["Flour", "Milled"],
        forms: [
            "Wheat flour",
            "Milled formats",
            "Bulk ingredient formats",
            "Buyer-specific packaging",
        ],
        applications: [
            "Bakery",
            "Food processing",
            "Food service",
            "Retail and grocery",
            "Ingredient supply",
        ],
        specifications: [
            {
                title: "Flour type",
                text: "Specify the preferred wheat flour type or intended application.",
            },
            {
                title: "Milling requirements",
                text: "Share any preferred flour characteristics or processing specifications.",
            },
            {
                title: "Quantity",
                text: "Mention your expected purchasing quantity.",
            },
            {
                title: "Packaging",
                text: "Specify preferred packaging and labelling requirements.",
            },
            {
                title: "Destination",
                text: "Tell us the destination country or market.",
            },
        ],
    },
} as const;


/* ===============================================================
   TYPES
   =============================================================== */

type GrainProduct = (typeof grainProducts)[keyof typeof grainProducts];

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};


/* ===============================================================
   STATIC PARAMS
   =============================================================== */

export function generateStaticParams() {
    return Object.keys(grainProducts).map((slug) => ({
        slug,
    }));
}


/* ===============================================================
   DYNAMIC SEO
   =============================================================== */

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const product = grainProducts[slug as keyof typeof grainProducts];

    if (!product) {
        return {
            title: "Grain Product | Al Huda",
        };
    }

    return {
        title: `${product.name} | Indian ${product.category} Sourcing & Export | Al Huda`,
        description: `${product.shortDescription} Explore ${product.name} sourcing options with Al Huda for international buyers and commercial food requirements.`,
        keywords: [
            `${product.name} exporter India`,
            `${product.name} supplier India`,
            `Indian ${product.name} exporter`,
            `bulk ${product.name} India`,
            `${product.name} wholesale India`,
            `${product.name} import export`,
        ],
        alternates: {
            canonical: `/products/food-products/grains/${slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.shortDescription,
            type: "website",
            images: [
                {
                    url: product.image,
                    alt: `${product.name} products`,
                },
            ],
        },
    };
}


/* ===============================================================
   PAGE
   =============================================================== */

export default async function GrainProductPage({
    params,
}: PageProps) {
    const { slug } = await params;

    const product = grainProducts[slug as keyof typeof grainProducts];

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
              HERO
          ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[20%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

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

                        <Link
                            href="/products/food-products/grains"
                            className="transition hover:text-[#087d68]"
                        >
                            Grains
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>

                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    {product.eyebrow}
                                </span>

                            </div>


                            <div className="mb-5 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#438275]"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>


                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                {product.name}
                                <span className="block text-[#07846d]">
                                    for global buyers.
                                </span>
                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.shortDescription}
                            </p>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(
                                        product.name
                                    )}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a {product.name} Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#product-details"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Product Details
                                </a>

                            </div>

                        </div>


                        {/* Product Image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} products`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />


                                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#087d68] backdrop-blur">
                                    {product.number}
                                </div>


                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            {product.category}
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Sourcing options for international buyers.
                                        </p>

                                    </div>

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
                            href="#product-details"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Product Details
                        </a>

                        <a
                            href="#formats"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Formats
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
                                {product.name} for commercial sourcing.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.description}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Share your product specifications, required quantity,
                                packaging preferences and destination market so the
                                sourcing discussion can start around your actual
                                requirement.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
              FORMATS
          ========================================================= */}

            <section
                id="formats"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Available formats
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Product formats can be discussed around your requirement.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            The suitable product form can depend on the intended
                            application, destination market, packaging requirements
                            and commercial specifications.
                        </p>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {product.forms.map((format, index) => (
                            <div
                                key={format}
                                className="rounded-2xl border border-[#dfeae5] bg-white p-7"
                            >

                                <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                    {format}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                    Discuss the exact product form and commercial
                                    requirements with our sourcing team.
                                </p>

                            </div>
                        ))}

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

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Applications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Suitable for a range of food requirements.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Buyers can discuss their intended application with
                                the sourcing team so product specifications can be
                                considered accordingly.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.applications.map((application, index) => (
                                <div
                                    key={application}
                                    className="flex items-center gap-4 rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5"
                                >

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f5f0] text-xs font-semibold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <span className="text-sm font-semibold text-[#345850]">
                                        {application}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
              BUYER REQUIREMENTS
          ========================================================= */}

            <section
                id="requirements"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src="/images/products/food-products/grains.avif"
                                alt={`${product.name} sourcing and food products`}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/50 to-transparent" />

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
                                    Sourcing requirements
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Start with the specifications that matter to you.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Clear product information gives the sourcing process
                                a better starting point and helps align the enquiry
                                with your commercial requirements.
                            </p>


                            <div className="mt-8 space-y-3">

                                {product.specifications.map((specification) => (
                                    <div
                                        key={specification.title}
                                        className="flex gap-4 rounded-xl border border-[#dce9e4] bg-white p-4"
                                    >

                                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

                                        <div>

                                            <h3 className="text-sm font-semibold text-[#23463f]">
                                                {specification.title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-[#718680]">
                                                {specification.text}
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
              SOURCING PROCESS
          ========================================================= */}

            <section className="bg-[#123b34] text-white">

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
                                point for exploring suitable sourcing and trade options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <ProcessStep
                                number="01"
                                title="Tell us what you need"
                                text={`Share the ${product.name.toLowerCase()}, preferred form, quantity, destination and any specifications you already have.`}
                            />

                            <ProcessStep
                                number="02"
                                title="Review sourcing options"
                                text="We explore suitable sourcing possibilities based on the information provided in your enquiry."
                            />

                            <ProcessStep
                                number="03"
                                title="Confirm specifications"
                                text="Product, packaging, commercial and documentation requirements are reviewed before proceeding."
                            />

                            <ProcessStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated."
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
                                Continue exploring
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                            Other grain products.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        {getRelatedProducts(slug).map((related) => (
                            <RelatedProduct
                                key={related.slug}
                                href={`/products/food-products/grains/${related.slug}`}
                                title={related.name}
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
                            {product.name} sourcing enquiry
                        </p>


                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name}?
                        </h2>


                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, quantity, preferred format,
                            destination market and any specifications you have.
                            We&apos;ll use your requirement as the starting point
                            for the conversation.
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
                                href="/products/food-products/grains"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Grains
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
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
   RELATED PRODUCTS
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


/* ===============================================================
   RELATED PRODUCTS HELPER
   =============================================================== */

function getRelatedProducts(currentSlug: string) {
    return Object.entries(grainProducts)
        .filter(([slug]) => slug !== currentSlug)
        .slice(0, 4)
        .map(([slug, product]) => ({
            slug,
            name: product.name,
        }));
}

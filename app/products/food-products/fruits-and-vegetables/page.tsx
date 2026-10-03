import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Fruits & Vegetables | Indian Fresh Produce Sourcing & Export | Al Huda",
    description:
        "Explore Indian fruits and vegetables sourced for international buyers, distributors, wholesalers, food businesses and importers. Explore mangoes, pomegranates, grapes, bananas, onions, potatoes, tomatoes, garlic, okra, green chillies and other globally traded fresh produce.",
    keywords: [
        "Indian fruits exporter",
        "Indian vegetables exporter",
        "fresh produce exporter India",
        "fruits and vegetables exporter India",
        "fresh fruits supplier India",
        "fresh vegetables supplier India",
        "Indian fresh produce supplier",
        "mango exporter India",
        "pomegranate exporter India",
        "grapes exporter India",
        "banana exporter India",
        "onion exporter India",
        "potato exporter India",
        "tomato exporter India",
        "garlic exporter India",
        "okra exporter India",
        "green chilli exporter India",
        "avocado supplier India",
        "blueberry supplier India",
        "sweet potato exporter India",
        "fresh produce sourcing India",
    ],
    alternates: {
        canonical: "/products/food-products/fruits-and-vegetables",
    },
    openGraph: {
        title: "Fruits & Vegetables | Al Huda",
        description:
            "Explore Al Huda's Indian fruits and vegetables sourcing portfolio for international buyers, distributors, wholesalers and food businesses.",
        type: "website",
    },
};

type ProduceProduct = {
    slug: string;
    number: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
    featured?: boolean;
};

const fruits: ProduceProduct[] = [
    {
        slug: "mangoes",
        number: "01",
        name: "Mangoes",
        description:
            "Indian mangoes for fresh fruit distribution, retail, food businesses and international produce sourcing requirements.",
        image: "/images/products/food-products/mangoes.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        featured: true,
    },
    {
        slug: "pomegranates",
        number: "02",
        name: "Pomegranates",
        description:
            "Fresh pomegranates for fruit importers, distributors, retailers and commercial food-industry sourcing.",
        image: "/images/products/food-products/pomegranates.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        featured: true,
    },
    {
        slug: "grapes",
        number: "03",
        name: "Grapes",
        description:
            "Fresh table grapes for international fruit distribution, retail, foodservice and commercial buyers.",
        image: "/images/products/food-products/grapes.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        featured: true,
    },
    {
        slug: "bananas",
        number: "04",
        name: "Bananas",
        description:
            "Bananas sourced for fruit distributors, wholesalers, retailers, food businesses and commercial requirements.",
        image: "/images/products/food-products/bananas.webp",
        tags: ["Fresh", "Bulk", "Export"],
        featured: true,
    },
    {
        slug: "oranges",
        number: "05",
        name: "Oranges",
        description:
            "Fresh oranges for distributors, wholesalers, retailers and commercial fruit sourcing requirements.",
        image: "/images/products/food-products/oranges.webp",
        tags: ["Fresh", "Seasonal"],
    },
    {
        slug: "lemons",
        number: "06",
        name: "Lemons",
        description:
            "Fresh lemons for foodservice, retail, beverage, processing and commercial produce requirements.",
        image: "/images/products/food-products/lemons.webp",
        tags: ["Fresh", "Bulk"],
    },
    {
        slug: "apples",
        number: "07",
        name: "Apples",
        description:
            "Apples for fruit distributors, retailers, wholesalers, foodservice and commercial fresh-fruit requirements.",
        image: "/images/products/food-products/apples.webp",
        tags: ["Fresh", "Global Trade"],
    },
    {
        slug: "watermelon",
        number: "08",
        name: "Watermelon",
        description:
            "Fresh watermelon for wholesalers, distributors, retailers, foodservice and seasonal produce programmes.",
        image: "/images/products/food-products/watermelon.webp",
        tags: ["Fresh", "Seasonal"],
    },
    {
        slug: "papaya",
        number: "09",
        name: "Papaya",
        description:
            "Fresh papaya for fruit importers, distributors, retailers and commercial tropical-fruit requirements.",
        image: "/images/products/food-products/papaya.webp",
        tags: ["Fresh", "Tropical"],
    },
    {
        slug: "pineapple",
        number: "10",
        name: "Pineapple",
        description:
            "Fresh pineapple for fruit distributors, retailers, foodservice and international tropical-fruit sourcing.",
        image: "/images/products/food-products/pineapple.webp",
        tags: ["Fresh", "Tropical", "Global Trade"],
    },
    {
        slug: "avocado",
        number: "11",
        name: "Avocado",
        description:
            "Avocados for retailers, foodservice operators, distributors and buyers seeking internationally traded fresh fruit.",
        image: "/images/products/food-products/avocado.webp",
        tags: ["Fresh", "High Demand", "Global Trade"],
        featured: true,
    },
    {
        slug: "kiwifruit",
        number: "12",
        name: "Kiwifruit",
        description:
            "Fresh kiwifruit for retailers, wholesalers, distributors and commercial fruit sourcing requirements.",
        image: "/images/products/food-products/kiwifruit.webp",
        tags: ["Fresh", "Global Trade"],
    },
    {
        slug: "blueberries",
        number: "13",
        name: "Blueberries",
        description:
            "Fresh blueberries for premium fruit distribution, retail, foodservice and commercial sourcing requirements.",
        image: "/images/products/food-products/blueberries.webp",
        tags: ["Fresh", "High Demand", "Premium"],
        featured: true,
    },
    {
        slug: "strawberries",
        number: "14",
        name: "Strawberries",
        description:
            "Fresh strawberries for retail, foodservice, fruit distributors and premium fresh-produce requirements.",
        image: "/images/products/food-products/strawberries.webp",
        tags: ["Fresh", "Premium", "Seasonal"],
    },
    {
        slug: "dates",
        number: "15",
        name: "Dates",
        description:
            "Dates for retail, foodservice, ingredient use, wholesalers and international fruit distribution requirements.",
        image: "/images/products/food-products/dates.webp",
        tags: ["Fresh", "Dried", "Global Trade"],
    },
];

const vegetables: ProduceProduct[] = [
    {
        slug: "onions",
        number: "01",
        name: "Onions",
        description:
            "Fresh onions sourced for food businesses, distributors, wholesalers, processing and commercial produce requirements.",
        image: "/images/products/food-products/onions.webp",
        tags: ["Fresh", "Bulk", "Export"],
        featured: true,
    },
    {
        slug: "potatoes",
        number: "02",
        name: "Potatoes",
        description:
            "Potatoes for foodservice, retail, distribution, processing and commercial fresh-produce requirements.",
        image: "/images/products/food-products/potatoes.webp",
        tags: ["Fresh", "Bulk", "Export"],
        featured: true,
    },
    {
        slug: "tomatoes",
        number: "03",
        name: "Tomatoes",
        description:
            "Fresh tomatoes for food preparation, foodservice, distribution, processing and commercial buyers.",
        image: "/images/products/food-products/tomatoes.webp",
        tags: ["Fresh", "Bulk", "Export"],
        featured: true,
    },
    {
        slug: "garlic",
        number: "04",
        name: "Garlic",
        description:
            "Fresh garlic for foodservice, retail, ingredient supply, processing, distributors and commercial buyers.",
        image: "/images/products/food-products/garlic.webp",
        tags: ["Fresh", "Bulk", "High Demand"],
        featured: true,
    },
    {
        slug: "green-chillies",
        number: "05",
        name: "Green Chillies",
        description:
            "Fresh green chillies for food preparation, restaurants, distributors, retailers and commercial buyers.",
        image: "/images/products/food-products/green-chillies.webp",
        tags: ["Fresh", "Bulk", "Export"],
    },
    {
        slug: "okra",
        number: "06",
        name: "Okra",
        description:
            "Fresh okra for food businesses, wholesalers, retailers and international fresh-produce requirements.",
        image: "/images/products/food-products/okra.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        featured: true,
    },
    {
        slug: "fresh-ginger",
        number: "07",
        name: "Fresh Ginger",
        description:
            "Fresh ginger for food preparation, processing, distribution and ingredient-oriented sourcing requirements.",
        image: "/images/products/food-products/fresh-ginger.webp",
        tags: ["Fresh", "Bulk", "Export"],
    },
    {
        slug: "sweet-potatoes",
        number: "08",
        name: "Sweet Potatoes",
        description:
            "Sweet potatoes for retail, foodservice, wholesalers, distributors and commercial fresh-produce programmes.",
        image: "/images/products/food-products/sweet-potatoes.webp",
        tags: ["Fresh", "High Demand", "Global Trade"],
        featured: true,
    },
    {
        slug: "bell-peppers",
        number: "09",
        name: "Bell Peppers",
        description:
            "Fresh bell peppers for retail, foodservice, distributors, restaurants and commercial vegetable sourcing.",
        image: "/images/products/food-products/bell-peppers.webp",
        tags: ["Fresh", "Premium", "Global Trade"],
        featured: true,
    },
    {
        slug: "green-beans",
        number: "10",
        name: "Green Beans",
        description:
            "Fresh green beans for retailers, foodservice, wholesalers and international vegetable sourcing requirements.",
        image: "/images/products/food-products/green-beans.webp",
        tags: ["Fresh", "Seasonal", "Global Trade"],
    },
    {
        slug: "broccoli",
        number: "11",
        name: "Broccoli",
        description:
            "Fresh broccoli for retail, foodservice, distributors and commercial fresh-vegetable requirements.",
        image: "/images/products/food-products/broccoli.webp",
        tags: ["Fresh", "High Demand", "Global Trade"],
        featured: true,
    },
    {
        slug: "cauliflower",
        number: "12",
        name: "Cauliflower",
        description:
            "Fresh cauliflower for retailers, wholesalers, foodservice and commercial vegetable sourcing.",
        image: "/images/products/food-products/cauliflower.webp",
        tags: ["Fresh", "Seasonal"],
    },
    {
        slug: "peas",
        number: "13",
        name: "Green Peas",
        description:
            "Green peas for foodservice, retail, wholesalers, distributors and commercial produce requirements.",
        image: "/images/products/food-products/green-peas.webp",
        tags: ["Fresh", "Seasonal"],
    },
    {
        slug: "spinach",
        number: "14",
        name: "Spinach",
        description:
            "Fresh spinach for foodservice, retail, restaurants, distributors and commercial vegetable sourcing.",
        image: "/images/products/food-products/spinach.webp",
        tags: ["Fresh", "Leafy Greens"],
    },
    {
        slug: "asparagus",
        number: "15",
        name: "Asparagus",
        description:
            "Fresh asparagus for premium retail, foodservice, hospitality and specialised fresh-produce sourcing.",
        image: "/images/products/food-products/asparagus.webp",
        tags: ["Fresh", "Premium", "Global Trade"],
    },
];

const formats = [
    {
        number: "01",
        title: "Fresh produce",
        text: "Fresh fruits and vegetables for wholesale, distribution, retail, foodservice and commercial food requirements.",
    },
    {
        number: "02",
        title: "Bulk quantities",
        text: "Commercial quantities can be discussed according to product, destination market, season and buyer requirements.",
    },
    {
        number: "03",
        title: "Grading & selection",
        text: "Product size, grade, quality parameters and other selection requirements can be discussed as part of the enquiry.",
    },
    {
        number: "04",
        title: "Buyer-specific requirements",
        text: "Packaging, labelling, shipment, quantity and other commercial specifications can be discussed according to the requirement.",
    },
];

const sourcingSteps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Share the fruit or vegetable, preferred grade, quantity, destination and any specifications you already have.",
    },
    {
        number: "02",
        title: "Review sourcing options",
        text: "We explore suitable sourcing possibilities based on the product, market and information provided in your enquiry.",
    },
    {
        number: "03",
        title: "Confirm specifications",
        text: "Product, grading, packaging, quantity, commercial and documentation requirements are reviewed before proceeding.",
    },
    {
        number: "04",
        title: "Coordinate the trade",
        text: "Once commercial terms are agreed, the relevant documentation and shipment requirements can be coordinated.",
    },
];

export default function FruitsAndVegetablesPage() {
    const totalProducts = fruits.length + vegetables.length;

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
                            Fruits &amp; Vegetables
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        {/* Hero copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products / Fresh Produce
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Indian fruits &amp; vegetables for
                                <span className="block text-[#07846d]">
                                    global buyers.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore Indian fresh fruits and vegetables sourced
                                for international buyers, distributors, wholesalers,
                                food businesses and commercial produce requirements.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Fruits%20%26%20Vegetables"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Produce Quote
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#produce-catalogue"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Produce
                                </a>

                            </div>

                        </div>


                        {/* Hero image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=85"
                                    alt="Fresh fruits and vegetables"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Fresh Produce Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Fruits, vegetables and buyer-specific sourcing.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    {totalProducts}+
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Produce categories
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
                                    Fresh produce sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Indian fresh produce for local and international markets.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Our fresh-produce portfolio is divided into dedicated
                                fruit and vegetable categories, covering established
                                Indian produce alongside products traded across
                                international fresh-produce markets.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Product, grade, size, quantity, packaging, destination
                                market, seasonality and other commercial requirements
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
                            href="#fruits"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Fruits
                        </a>

                        <a
                            href="#vegetables"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Vegetables
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
                FRUITS
            ========================================================= */}

            <section
                id="fruits"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    01 / Fruits
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Fresh fruits for global markets.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Explore Indian fruits alongside internationally traded
                                fresh-fruit categories for distributors, retailers,
                                wholesalers, foodservice and commercial buyers.
                            </p>

                        </div>


                        <div className="text-sm text-[#718681]">
                            {fruits.length} fruit categories
                        </div>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {fruits.map((product) => (
                            <ProduceCard
                                key={product.slug}
                                product={product}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                VEGETABLES
            ========================================================= */}

            <section
                id="vegetables"
                className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    02 / Vegetables
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Fresh vegetables for commercial sourcing.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                From staple Indian vegetables to globally traded
                                categories, explore fresh produce suitable for
                                wholesale, retail, foodservice and distribution.
                            </p>

                        </div>


                        <div className="text-sm text-[#718681]">
                            {vegetables.length} vegetable categories
                        </div>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {vegetables.map((product) => (
                            <ProduceCard
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
                className="scroll-mt-20 bg-[#f8fbf9]"
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
                                Sourcing formats around your requirement.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Fresh-produce requirements can vary by product, market,
                                grade, packaging and commercial quantity. These details
                                can be discussed during the enquiry process.
                            </p>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2">

                            {formats.map((format) => (
                                <div
                                    key={format.number}
                                    className="rounded-2xl border border-[#dfeae5] bg-white p-7"
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
                BUYER REQUIREMENTS
            ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src="/images/products/food-products/fruits-and-vegetables.avif"
                                alt="Fresh fruits and vegetables"
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
                                Every fresh-produce sourcing requirement can be
                                different. Providing clear information helps the
                                sourcing process start with a better understanding
                                of what you need.
                            </p>


                            <div className="mt-8 space-y-3">

                                <RequirementItem
                                    title="Product"
                                    text="Specify the fruit, vegetable or group of produce you are looking for."
                                />

                                <RequirementItem
                                    title="Grade & size"
                                    text="Mention preferred grade, size, variety or other product-selection requirements where applicable."
                                />

                                <RequirementItem
                                    title="Quantity"
                                    text="Share your expected order, shipment or recurring purchasing quantity."
                                />

                                <RequirementItem
                                    title="Packaging"
                                    text="Mention preferred packaging, labelling or handling requirements where applicable."
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
                                From produce requirement to trade enquiry.
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
                            href="/products/food-products/grains"
                            title="Cereals, Pulses & Flours"
                        />

                        <RelatedCategory
                            href="/products/food-products/spices"
                            title="Spices"
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
                            Fresh produce sourcing enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for a specific fruit or vegetable?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us the product, quantity, preferred grade or size,
                            destination market and any specifications you have.
                            We&apos;ll use your requirement as the starting point
                            for the conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?product=Fruits%20%26%20Vegetables"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Produce Quote
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
   PRODUCE CARD
   =============================================================== */

function ProduceCard({
    product,
}: {
    product: ProduceProduct;
}) {
    return (
        <Link
            href={`/products/food-products/fruits-and-vegetables/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} fresh produce`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-transparent" />


                {/* Product number */}

                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-[#087d68] backdrop-blur">
                    {product.number}
                </div>


                {/* Featured badge */}

                {product.featured && (
                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#087d68]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                        High Demand
                    </div>
                )}


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
                            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${tag === "High Demand"
                                    ? "bg-[#d9f2e9] text-[#087d68]"
                                    : "bg-[#edf7f3] text-[#438275]"
                                }`}
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Food Products | Indian Food Export & Sourcing | Al Huda",
    description:
        "Explore Al Huda's food product portfolio including spices, grains, cereals, pulses, flours, fruits and vegetables, frozen foods, FMCG, tea and coffee for international buyers.",
    keywords: [
        "food products exporter India",
        "Indian food exporter",
        "Indian food products",
        "spices exporter India",
        "grains exporter India",
        "pulses exporter India",
        "fruits vegetables exporter India",
        "frozen food exporter India",
        "FMCG exporter India",
        "tea coffee exporter India",
    ],
    alternates: {
        canonical: "/products/food-products",
    },
    openGraph: {
        title: "Food Products | Al Huda",
        description:
            "Explore Al Huda's food sourcing and export portfolio for international buyers.",
        type: "website",
    },
};

const foodCategories = [
    {
        number: "01",
        slug: "spices",
        title: "Spices",
        eyebrow: "Whole, Ground & Blended",
        description:
            "Explore Indian spices and spice products sourced for international food, retail, hospitality and distribution requirements.",
        products: [
            "Turmeric",
            "Red Chilli",
            "Cumin",
            "Coriander",
            "Black Pepper",
            "Cardamom",
            "Ginger",
            "Custom Spice Blends",
        ],
        image:
            "/images/products/food-products/spices/hero.webp",
        color: "green",
    },

    {
        number: "02",
        slug: "grains",
        title: "Cereals, Pulses & Flours",
        eyebrow: "Staples & Grain Products",
        description:
            "A broad range of cereals, grains, pulses and flours for food businesses, distributors, retailers and commercial buyers.",
        products: [
            "Rice & Rice Products",
            "Wheat",
            "Maize",
            "Millets",
            "Chickpeas",
            "Lentils",
            "Pulses",
            "Flours",
        ],
        image:
            "/images/products/food-products/grains/hero.webp",
        color: "gold",
    },

    {
        number: "03",
        slug: "fruits-and-vegetables",
        title: "Fruits & Vegetables",
        eyebrow: "Fresh Produce",
        description:
            "Fresh fruits and vegetables sourced according to seasonal availability, buyer requirements and destination-market needs.",
        products: [
            "Fresh Fruits",
            "Fresh Vegetables",
            "Seasonal Produce",
            "Tropical Fruits",
            "Root Vegetables",
            "Leafy Vegetables",
            "Bulk Produce",
            "Buyer-Specific Sourcing",
        ],
        image:
            "/images/products/food-products/fruits/hero.webp",
        color: "lime",
    },

    {
        number: "04",
        slug: "frozen-foods",
        title: "Frozen Foods & Vegetables",
        eyebrow: "Frozen & Processed",
        description:
            "Frozen food and vegetable sourcing for distributors, food-service businesses, retailers and international buyers.",
        products: [
            "Frozen Vegetables",
            "Frozen Fruits",
            "Frozen Snacks",
            "Frozen Ready Foods",
            "IQF Products",
            "Processed Foods",
            "Food-Service Products",
            "Buyer-Specific Requirements",
        ],
        image:
            "/images/products/food-products/frozen/hero.webp",
        color: "blue",
    },

    {
        number: "05",
        slug: "fmcg",
        title: "FMCG",
        eyebrow: "Fast-Moving Consumer Goods",
        description:
            "Everyday consumer food and grocery products sourced for international retailers, distributors, wholesalers and other B2B channels.",
        products: [
            "Packaged Foods",
            "Snacks",
            "Ready-to-Eat Foods",
            "Ready-to-Cook Foods",
            "Biscuits & Confectionery",
            "Pickles & Condiments",
            "Grocery Products",
            "Beverages",
        ],
        image:
            "/images/products/food-products/fmcg/hero.webp",
        color: "orange",
    },

    {
        number: "06",
        slug: "tea-and-coffee",
        title: "Tea & Coffee",
        eyebrow: "Beverages",
        description:
            "Tea and coffee sourcing for importers, distributors, hospitality businesses, retailers and food-service channels.",
        products: [
            "Black Tea",
            "Green Tea",
            "Specialty Tea",
            "Tea Blends",
            "Coffee Beans",
            "Ground Coffee",
            "Instant Coffee",
            "Custom / Private Label",
        ],
        image:
            "/images/products/food-products/tea-and-coffee/hero.webp",
        color: "brown",
    },
];

const highlights = [
    {
        number: "01",
        title: "Multiple food categories",
        text: "Explore a broader food portfolio through one international sourcing partner.",
    },
    {
        number: "02",
        title: "Buyer-led sourcing",
        text: "Product selection can be discussed around specifications, quantity, market and commercial requirements.",
    },
    {
        number: "03",
        title: "Trade coordination",
        text: "Sourcing, product information, documentation and shipment requirements can be coordinated through the trade process.",
    },
];

export default function FoodProductsPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#e7f3ee]">
                <div className="absolute -right-40 -top-40 h-130 w-130 rounded-full bg-[#b9ddd3]/50 blur-3xl" />
                <div className="absolute -bottom-40 left-[30%] h-100 w-100 rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr]">

                        {/* Hero copy */}
                        <div>

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Food Products
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Food products for
                                <span className="block text-[#07846d]">
                                    global markets.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Explore a diversified food portfolio spanning spices,
                                grains, pulses, flours, fresh produce, frozen foods,
                                FMCG, tea and coffee for international sourcing and
                                trade requirements.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?product=Food%20Products"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Discuss a Food Requirement
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#food-categories"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Categories
                                </a>

                            </div>

                        </div>

                        {/* Hero image */}
                        <div className="relative">

                            <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(20,70,60,0.12)]">

                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85"
                                    alt="Fresh food products and produce"
                                    className="h-full w-full object-cover"
                                    fetchPriority="high"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#12342f]/65 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Food Portfolio
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            From everyday staples to international food supply.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Floating category count */}
                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">
                                <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                    06
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    Food categories
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================
          BREADCRUMB
      ========================================================= */}
            <div className="border-b border-[#e1ebe7] bg-white">
                <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">

                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 text-xs text-[#7a908a]"
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
                            Food Products
                        </span>
                    </nav>

                </div>
            </div>

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
                                    Explore the portfolio
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                A food portfolio built around different buyer needs.
                            </h2>
                        </div>

                        <div className="max-w-2xl">
                            <p className="text-lg leading-8 text-[#526d67]">
                                From agricultural commodities and fresh produce to
                                packaged food and beverages, our food portfolio brings
                                multiple sourcing categories together in one place.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Select a category below to explore its product range.
                                Specific products, grades, specifications, packaging,
                                quantities and destination requirements can be discussed
                                with our team based on your enquiry.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* =========================================================
          QUICK CATEGORY NAVIGATION
      ========================================================= */}
            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        {foodCategories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/products/food-products/${category.slug}`}
                                className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e9f5f0] hover:text-[#087d68]"
                            >
                                {category.title}
                            </Link>
                        ))}

                    </nav>

                </div>

            </section>

            {/* =========================================================
          CATEGORY GRID
      ========================================================= */}
            <section
                id="food-categories"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Food categories
                            </span>
                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Explore our food product range.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Choose a category to see its product segments and continue
                            to the relevant sourcing page.
                        </p>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        {foodCategories.map((category) => (
                            <FoodCategoryCard
                                key={category.slug}
                                category={category}
                            />
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
          WHY FOOD SOURCING
      ========================================================= */}
            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    The Al Huda approach
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                More than finding a food product.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                International food trade requires attention to product
                                requirements, sourcing, communication, documentation and
                                logistics.
                            </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">

                            {highlights.map((item) => (
                                <div
                                    key={item.number}
                                    className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-6"
                                >

                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-7 text-base font-semibold text-[#1a3e37]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
          SOURCING PROCESS
      ========================================================= */}
            <section className="bg-[#123b34] text-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    From requirement to shipment
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                A straightforward way to start.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Tell us what you are looking for and provide as much
                                information as possible about your market, quantity,
                                product and packaging requirements.
                            </p>

                        </div>

                        <div className="space-y-3">

                            <ProcessStep
                                number="01"
                                title="Share your requirement"
                                text="Product, quantity, destination market, packaging or other requirements."
                            />

                            <ProcessStep
                                number="02"
                                title="Explore sourcing options"
                                text="Suitable product and sourcing possibilities can then be discussed."
                            />

                            <ProcessStep
                                number="03"
                                title="Confirm specifications"
                                text="Commercial and product details are reviewed before proceeding."
                            />

                            <ProcessStep
                                number="04"
                                title="Coordinate the trade"
                                text="Documentation, shipment planning and logistics requirements are coordinated as applicable."
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
          CTA
      ========================================================= */}
            <section className="bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#07846d] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                        Food sourcing enquiry
                    </p>

                    <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        Looking for a specific food product?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                        Send us your product requirement, quantity and destination
                        market. Our team can help you explore suitable sourcing and
                        trade options.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            href="/contact?product=Food%20Products"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                        >
                            Send a Food Enquiry
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

            </section>

        </main>
    );
}


/* ===============================================================
   FOOD CATEGORY CARD
   =============================================================== */

function FoodCategoryCard({
    category,
}: {
    category: (typeof foodCategories)[number];
}) {
    return (
        <Link
            href={`/products/food-products/${category.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white shadow-[0_10px_40px_rgba(20,70,60,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">

                <img
                    src={category.image}
                    alt={`${category.title} food products`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-[#102f2a]/5 to-transparent" />

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[11px] font-bold text-[#087d68] backdrop-blur">
                    {category.number}
                </div>

                <div className="absolute bottom-5 left-5 right-5">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                        {category.eyebrow}
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        {category.title}
                    </h3>

                </div>

            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">

                <p className="text-sm leading-6 text-[#657d77]">
                    {category.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2">

                    {category.products.slice(0, 6).map((product) => (
                        <div
                            key={product}
                            className="flex items-center gap-2 text-xs text-[#526b65]"
                        >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4eaf99]" />
                            <span>{product}</span>
                        </div>
                    ))}

                </div>

                <div className="mt-7 flex items-center justify-between border-t border-[#edf2f0] pt-5">

                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#087d68]">
                        Explore category
                    </span>

                    <span className="text-lg text-[#087d68] transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>

                </div>

            </div>

        </Link>
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
        <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/4.5 p-5 transition hover:bg-white/7.5">

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

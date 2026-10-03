import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProductPortfolioItem {
    href: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    label: string;
    eyebrow?: string;
}

export const productPortfolio: ProductPortfolioItem[] = [
    {
        href: "/products/food-products",
        src: "/images/products/food-products.webp",
        alt: "Food products sourced from India",
        title: "Food Products",
        description:
            "Food product categories for importers, distributors, wholesalers and international buyers.",
        label: "Food",
        eyebrow: "01",
    },
    {
        href: "/products/textiles-and-apparels",
        src: "/images/products/textiles.webp",
        alt: "Textiles and apparel products",
        title: "Textiles & Apparel",
        description:
            "Textile and apparel categories for retailers, wholesalers, distributors and commercial sourcing requirements.",
        label: "Textiles & Apparel",
        eyebrow: "02",
    },
    {
        href: "/products/automotive-components",
        src: "/images/products/automotive-components.webp",
        alt: "Automotive components",
        title: "Automotive Components",
        description:
            "Automotive component categories for distributors, aftermarket businesses and commercial buyers.",
        label: "Automotive",
        eyebrow: "03",
    },
    {
        href: "/products/engineering-goods",
        src: "/images/products/engineering-goods.webp",
        alt: "Engineering goods",
        title: "Engineering Goods",
        description:
            "Engineering and industrial product categories for international sourcing and commercial requirements.",
        label: "Engineering",
        eyebrow: "04",
    },
    {
        href: "/products/general-merchandise",
        src: "/images/products/general-merchandise.webp",
        alt: "General merchandise products",
        title: "General Merchandise",
        description:
            "Household, consumer, office, leisure and commercial merchandise categories for global buyers.",
        label: "General Merchandise",
        eyebrow: "05",
    },
    {
        href: "/products/imitation-jewellery",
        src: "/images/products/imitation-jewellery.webp",
        alt: "Imitation jewellery",
        title: "Imitation Jewellery",
        description:
            "Fashion jewellery and accessory categories for retailers, wholesalers and international buyers.",
        label: "Jewellery",
        eyebrow: "06",
    },
    {
        href: "/products/pharmaceuticals-and-biologicals",
        src: "/images/products/pharma.webp",
        alt: "Pharmaceutical and biological products",
        title: "Pharmaceuticals & Biologicals",
        description:
            "Pharmaceutical and biological product categories for eligible international sourcing requirements.",
        label: "Pharma",
        eyebrow: "07",
    },
];

export default function ProductPortfolio() {
    return (
        <section
            aria-labelledby="product-portfolio-title"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
            {/* =========================================================
                BACKGROUND DETAIL
            ========================================================= */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#e8f5f0] blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-[#f3f8f6] blur-3xl"
            />


            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <header className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">

                    <div>

                        <div className="flex items-center gap-3">

                            <span
                                aria-hidden="true"
                                className="h-px w-9 bg-[#087d68]"
                            />

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087d68]">
                                Our Product Portfolio
                            </p>

                        </div>


                        <h2
                            id="product-portfolio-title"
                            className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#153b35] sm:text-4xl lg:text-5xl"
                        >
                            Products sourced for
                            <span className="text-[#087d68]">
                                {" "}
                                global markets.
                            </span>
                        </h2>

                    </div>


                    <div className="lg:pb-1">

                        <p className="max-w-xl text-sm leading-7 text-[#657b75] sm:text-base">
                            Explore our principal product categories for importers,
                            distributors, wholesalers, retailers and commercial buyers
                            looking to source from India.
                        </p>

                    </div>

                </header>


                {/* =====================================================
                    PORTFOLIO GRID
                ===================================================== */}

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {productPortfolio.map((product) => (
                        <li
                            key={product.href}
                            className="h-full"
                        >

                            <Link
                                href={product.href}
                                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#dfe9e4] bg-white shadow-[0_8px_30px_rgba(20,70,60,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:shadow-[0_20px_55px_rgba(20,70,60,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087d68] focus-visible:ring-offset-4"
                            >

                                {/* IMAGE */}

                                <div className="relative aspect-[1.08] overflow-hidden bg-[#edf7f3]">

                                    <Image
                                        src={product.src}
                                        alt={product.alt}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition duration-700 ease-out group-hover:scale-105"
                                    />


                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-[#102f2a]/5 to-transparent"
                                    />


                                    {/* Number */}

                                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[10px] font-bold text-white backdrop-blur-md">
                                        {product.eyebrow}
                                    </div>


                                    {/* Category label */}

                                    <div className="absolute right-4 top-4">

                                        <span className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                                            {product.label}
                                        </span>

                                    </div>


                                    {/* Image title */}

                                    <div className="absolute bottom-4 left-4 right-4">

                                        <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-white">
                                            {product.title}
                                        </h3>

                                    </div>

                                </div>


                                {/* CONTENT */}

                                <div className="flex flex-1 flex-col p-5">

                                    <p className="text-sm leading-6 text-[#667e78]">
                                        {product.description}
                                    </p>


                                    <div className="mt-5 flex items-center justify-between border-t border-[#edf2f0] pt-4">

                                        <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#087d68]">
                                            Explore category
                                        </span>


                                        <span
                                            aria-hidden="true"
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5f0] text-[#087d68] transition-all duration-300 group-hover:bg-[#087d68] group-hover:text-white"
                                        >
                                            <ArrowRight
                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                                strokeWidth={2}
                                            />
                                        </span>

                                    </div>

                                </div>

                            </Link>

                        </li>
                    ))}

                </ul>


                {/* =====================================================
                    BOTTOM CTA
                ===================================================== */}

                <div className="mt-10 flex flex-col gap-5 rounded-[1.5rem] border border-[#dce8e3] bg-[#f8fbf9] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">

                    <div>

                        <p className="text-sm font-semibold text-[#29483f]">
                            Looking for a product not listed here?
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#71827d]">
                            Tell us your product, specifications, quantity and destination
                            market. We can discuss buyer-specific sourcing requirements.
                        </p>

                    </div>


                    <Link
                        href="/contact?subject=Product%20Sourcing%20Enquiry"
                        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#087d68] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#056b59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087d68] focus-visible:ring-offset-2"
                    >
                        Discuss a Requirement

                        <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        />

                    </Link>

                </div>


                {/* =====================================================
                    VIEW ALL
                ===================================================== */}

                <div className="mt-9 text-center">

                    <Link
                        href="/our-products"
                        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#087d68] transition-colors hover:text-[#056b59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087d68] focus-visible:ring-offset-4"
                    >
                        View Complete Product Portfolio

                        <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        />

                    </Link>

                </div>

            </div>

        </section>
    );
}

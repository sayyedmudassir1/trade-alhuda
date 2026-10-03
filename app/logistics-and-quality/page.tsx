import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Logistics & Quality | International Trade Support | Al Huda",
    description:
        "Learn how Al Huda supports international sourcing, quality coordination, trade documentation, shipment planning and logistics for global buyers.",
    keywords: [
        "international trade logistics India",
        "export logistics India",
        "import export logistics",
        "quality assurance export",
        "international sourcing India",
        "export documentation India",
        "global trade logistics",
        "Al Huda logistics",
    ],
    alternates: {
        canonical: "/logistics-and-quality",
    },
    openGraph: {
        title: "Logistics & Quality | Al Huda",
        description:
            "Sourcing, quality coordination, documentation and logistics support for international trade.",
        type: "website",
    },
};

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We begin by understanding the product requirement, specifications, quantity, destination and commercial expectations.",
    },
    {
        number: "02",
        title: "Source",
        description:
            "Suitable manufacturers, producers or suppliers can be explored according to the requirement and product category.",
    },
    {
        number: "03",
        title: "Verify",
        description:
            "Product specifications, documentation, packaging requirements and other agreed quality parameters are reviewed.",
    },
    {
        number: "04",
        title: "Coordinate",
        description:
            "Shipment planning, freight coordination and export documentation are organised around the agreed trade requirements.",
    },
    {
        number: "05",
        title: "Deliver",
        description:
            "The shipment progresses through the agreed logistics process toward the destination market.",
    },
];

const logisticsServices = [
    {
        number: "01",
        title: "Shipment Planning",
        description:
            "Planning around product readiness, quantities, packaging, destination and agreed shipment requirements.",
    },
    {
        number: "02",
        title: "Freight Coordination",
        description:
            "Coordination with relevant logistics and freight partners for international movement of goods.",
    },
    {
        number: "03",
        title: "Export Documentation",
        description:
            "Support with the documentation required for the agreed international trade transaction.",
    },
    {
        number: "04",
        title: "Packaging & Handling",
        description:
            "Product-specific packaging and handling requirements can be incorporated into the sourcing and shipment discussion.",
    },
];

const qualityServices = [
    {
        title: "Supplier Evaluation",
        description:
            "Sourcing conversations can include assessment of suitable manufacturers, producers and suppliers against the buyer's requirements.",
    },
    {
        title: "Product Specifications",
        description:
            "Specifications, grades, dimensions, materials, formats and other agreed product parameters can be documented before execution.",
    },
    {
        title: "Pre-Shipment Checks",
        description:
            "Where required and agreed, inspection or testing arrangements can be coordinated before shipment.",
    },
    {
        title: "Laboratory Testing",
        description:
            "Where a product or destination requires testing, relevant laboratory or certification requirements can be incorporated into the trade process.",
    },
];

const documents = [
    "Commercial Invoice",
    "Packing List",
    "Shipping Documentation",
    "Product Documentation",
    "Certificates where applicable",
    "Inspection / Testing Documentation where applicable",
];

const markets = [
    "India",
    "United Kingdom",
    "United States",
    "Canada",
    "European Union",
    "Germany",
    "United Arab Emirates",
    "Middle East",
    "Singapore",
    "Asia Pacific",
    "Australia",
];

export default function LogisticsAndQualityPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#b8ddd2]/45 blur-3xl" />

                <div className="absolute -bottom-48 left-[15%] h-[450px] w-[450px] rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#718881]"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-[#087d68]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#3d5a53]">
                            Logistics & Quality
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Logistics & Quality
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">
                                Trade coordination
                                <span className="block text-[#087d68]">
                                    beyond the product.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                International trade requires more than finding a
                                supplier. Al Huda supports the process across sourcing,
                                quality coordination, documentation, shipment planning
                                and logistics.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?subject=Logistics%20and%20Quality"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Discuss Your Requirement
                                    <span className="ml-2">→</span>
                                </Link>

                                <a
                                    href="#process"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd8d0] bg-white/70 px-7 text-sm font-semibold text-[#23463f] transition hover:bg-white"
                                >
                                    Explore Our Process
                                </a>

                            </div>

                        </div>


                        {/* Hero visual */}

                        <div className="relative">

                            <div className="relative aspect-[1.05] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=90"
                                    alt="International logistics and cargo operations"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#143b34]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <div className="flex items-end justify-between gap-5">

                                            <div>

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aee2d3]">
                                                    International trade
                                                </p>

                                                <p className="mt-2 text-xl font-semibold text-white">
                                                    Sourcing → Quality → Logistics
                                                </p>

                                            </div>

                                            <span className="text-3xl text-[#9bdac9]">
                                                ↗
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Floating card */}

                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e6e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-xl font-semibold tracking-tight text-[#087d68]">
                                    360°
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#718781]">
                                    Trade coordination
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          STICKY NAV
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
                            href="#process"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Process
                        </a>

                        <a
                            href="#logistics"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Logistics
                        </a>

                        <a
                            href="#quality"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Quality
                        </a>

                        <a
                            href="#documentation"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Documentation
                        </a>

                        <a
                            href="#markets"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Markets
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

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Beyond sourcing
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                A trade partner should help connect the moving parts.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                An international order involves several connected
                                stages. Product selection, supplier coordination,
                                specifications, documentation and logistics all need to
                                work together.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Our role is to coordinate these requirements around the
                                agreed transaction and help keep communication clear
                                between the relevant parties.
                            </p>


                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                <MiniStat value="01" label="Sourcing" />

                                <MiniStat value="02" label="Quality" />

                                <MiniStat value="03" label="Documents" />

                                <MiniStat value="04" label="Logistics" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          PROCESS
      ========================================================= */}

            <section
                id="process"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                How it works
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            A connected approach to international trade.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Every transaction can have different requirements, but
                            the underlying process follows a clear sequence.
                        </p>

                    </div>


                    <div className="grid gap-3 lg:grid-cols-5">

                        {process.map((item) => (
                            <div
                                key={item.number}
                                className="relative rounded-[1.5rem] border border-[#dfeae5] bg-white p-6"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f3ee] text-xs font-bold text-[#087d68]">
                                        {item.number}
                                    </span>

                                    {item.number !== "05" && (
                                        <span className="hidden text-[#b4d1c8] lg:block">
                                            →
                                        </span>
                                    )}

                                </div>

                                <h3 className="mt-7 text-lg font-semibold text-[#29483f]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                    {item.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          LOGISTICS
      ========================================================= */}

            <section
                id="logistics"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        <div className="relative overflow-hidden rounded-[2rem]">

                            <img
                                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=90"
                                alt="Cargo containers and international freight logistics"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#143b34]/55 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    International shipment coordination
                                </span>

                            </div>

                        </div>


                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Global logistics
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Coordinating the journey from origin to destination.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Logistics requirements vary by product, destination,
                                shipment size and agreed trade terms. We coordinate the
                                relevant requirements as part of the transaction.
                            </p>


                            <div className="mt-8 space-y-3">

                                {logisticsServices.map((item) => (
                                    <ServiceRow
                                        key={item.number}
                                        number={item.number}
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          QUALITY
      ========================================================= */}

            <section
                id="quality"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Quality focus
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Quality starts with clearly defined requirements.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                Quality is not a single checkpoint. It begins with
                                understanding what the buyer actually requires and
                                carrying those requirements through the sourcing and
                                trade process.
                            </p>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2">

                            {qualityServices.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="rounded-[1.5rem] border border-[#d7e7e0] bg-white p-6"
                                >

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-6 text-lg font-semibold text-[#29483f]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                        {item.description}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          QUALITY PRINCIPLE / FEATURE
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="overflow-hidden rounded-[2rem] bg-[#123b34]">

                        <div className="grid lg:grid-cols-2">

                            <div className="p-8 sm:p-12 lg:p-16">

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#73d1b8]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                        Quality principle
                                    </span>

                                </div>

                                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                                    Define it.
                                    <br />
                                    Verify it.
                                    <br />
                                    Document it.
                                </h2>

                                <p className="mt-6 max-w-md leading-7 text-[#b5d1ca]">
                                    Product requirements should be clear before commercial
                                    execution. Where inspection, testing or specific
                                    documentation is required, those requirements can be
                                    incorporated into the transaction.
                                </p>

                                <Link
                                    href="/contact?subject=Quality%20Requirements"
                                    className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#087d68] transition hover:bg-[#edf8f4]"
                                >
                                    Discuss Quality Requirements
                                    <span className="ml-2">→</span>
                                </Link>

                            </div>


                            <div className="relative min-h-[380px] lg:min-h-full">

                                <img
                                    src="https://images.unsplash.com/photo-1581093458791-9d42e3c7f0b3?auto=format&fit=crop&w=1400&q=90"
                                    alt="Quality inspection and industrial product checking"
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#123b34] via-[#123b34]/20 to-transparent" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          DOCUMENTATION
      ========================================================= */}

            <section
                id="documentation"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Trade documentation
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Documentation that supports the transaction.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                International shipments involve documentation across
                                product, commercial, customs and logistics requirements.
                                The exact documents depend on the product and destination.
                            </p>

                        </div>


                        <div>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {documents.map((document, index) => (
                                    <div
                                        key={document}
                                        className="flex items-center gap-4 rounded-2xl border border-[#dfe9e4] bg-white p-5"
                                    >

                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm font-medium text-[#38564f]">
                                            {document}
                                        </span>

                                    </div>
                                ))}

                            </div>

                            <p className="mt-5 text-xs leading-5 text-[#7b8c86]">
                                Documentation is subject to the product, destination,
                                applicable regulations and agreed contractual
                                requirements.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          MARKETS
      ========================================================= */}

            <section
                id="markets"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Global markets
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Supporting trade across international markets.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Our trade conversations can cover requirements across
                            established and emerging international markets.
                        </p>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {markets.map((market, index) => (
                            <div
                                key={market}
                                className="group rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-sm font-semibold text-[#345850]">
                                        {market}
                                    </span>

                                    <span className="text-xs text-[#9bb6ae] transition group-hover:text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                            </div>
                        ))}

                        <div className="rounded-2xl border border-dashed border-[#b9d5cc] bg-[#edf7f3] p-5">

                            <div className="text-sm font-semibold text-[#087d68]">
                                Other markets
                            </div>

                            <p className="mt-1 text-xs leading-5 text-[#6f8981]">
                                Tell us about your destination requirement.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          CTA
      ========================================================= */}

            <section
                id="contact"
                className="bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#087d68] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">

                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                            <span className="text-lg">
                                ↗
                            </span>
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8eadc]">
                            Logistics & quality enquiry
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Have a trade requirement?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d1f1e9]">
                            Tell us what you need to source, where it needs to go and
                            any quality, documentation or logistics requirements that
                            need to be considered.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact?subject=Logistics%20and%20Quality"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Start a Conversation
                                <span className="ml-2">→</span>
                            </Link>

                            <Link
                                href="/our-products"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Explore Products
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          COMPLIANCE NOTE
      ========================================================= */}

            <section className="border-t border-[#dfe9e4] bg-white">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

                    <p className="text-center text-xs leading-5 text-[#82928d]">
                        Logistics, documentation, inspection, testing, certifications,
                        product specifications and applicable trade requirements are
                        subject to the product, destination market and formal
                        contractual agreement.
                    </p>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   MINI STAT
   =============================================================== */

function MiniStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] p-4">

            <div className="text-sm font-semibold text-[#087d68]">
                {value}
            </div>

            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7b918b]">
                {label}
            </div>

        </div>
    );
}


/* ===============================================================
   SERVICE ROW
   =============================================================== */

function ServiceRow({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-5">

            <div className="flex gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                    {number}
                </span>

                <div>

                    <h3 className="text-sm font-semibold text-[#29483f]">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#71827d]">
                        {description}
                    </p>

                </div>

            </div>

        </div>
    );
}

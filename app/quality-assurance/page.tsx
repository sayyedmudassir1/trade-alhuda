import Link from "next/link";

export const metadata = {
    title: "Quality Assurance | Al Huda Global Trade",
    description:
        "Explore Al Huda's quality assurance approach for international sourcing, supplier evaluation, product specifications, documentation, inspection coordination and shipment readiness.",
};

const qualityStages = [
    {
        number: "01",
        title: "Requirement Review",
        text: "We begin by understanding the product specification, intended market, quantity, packaging requirements and other commercial requirements.",
    },
    {
        number: "02",
        title: "Supplier Evaluation",
        text: "Potential suppliers and manufacturers can be reviewed against relevant product, commercial and documentation requirements.",
    },
    {
        number: "03",
        title: "Product Specifications",
        text: "Key specifications, grades, dimensions, packaging and other applicable product parameters are clarified before proceeding.",
    },
    {
        number: "04",
        title: "Quality Coordination",
        text: "Where applicable, inspection, testing or third-party verification requirements can be coordinated according to the agreed scope.",
    },
    {
        number: "05",
        title: "Documentation Review",
        text: "Relevant product, compliance, commercial and shipment documentation is reviewed as part of the trade process.",
    },
    {
        number: "06",
        title: "Shipment Readiness",
        text: "The final stage focuses on aligning the agreed product requirements with packaging, documentation and shipment arrangements.",
    },
];

const focusAreas = [
    {
        title: "Supplier Evaluation",
        text: "Assessment and coordination around supplier capability, product requirements and documentation.",
    },
    {
        title: "Product Specifications",
        text: "Clear understanding of grades, specifications, quantities, packaging and applicable requirements.",
    },
    {
        title: "Inspection & Testing",
        text: "Inspection or laboratory testing can be incorporated when required and agreed as part of the transaction.",
    },
    {
        title: "Documentation",
        text: "Attention to the documents required for the relevant product, destination market and shipment.",
    },
    {
        title: "Packaging",
        text: "Packaging requirements can be discussed according to product characteristics, buyer requirements and destination.",
    },
    {
        title: "Shipment Coordination",
        text: "Quality-related requirements are considered alongside logistics and shipment planning.",
    },
];

const productCategories = [
    {
        title: "Food Products",
        href: "/products/food-products",
        description:
            "Spices, grains, fruits & vegetables, frozen foods, FMCG, tea & coffee.",
    },
    {
        title: "Imitation Jewellery",
        href: "/products/imitation-jewellery",
        description:
            "Product specifications, finishes, packaging and commercial requirements.",
    },
    {
        title: "Engineering Goods",
        href: "/products/engineering-goods",
        description:
            "Industrial products where specifications and technical requirements are important.",
    },
    {
        title: "Automotive Components",
        href: "/products/automotive-components",
        description:
            "Components requiring clear technical and commercial specifications.",
    },
    {
        title: "Pharmaceuticals & Biologicals",
        href: "/products/pharmaceuticals-biologicals",
        description:
            "Products subject to applicable product, regulatory and documentation requirements.",
    },
    {
        title: "Textiles & Apparel",
        href: "/products/textiles-and-apparel",
        description:
            "Materials, specifications, quantities, packaging and buyer requirements.",
    },
];

export default function QualityAssurancePage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-48 -top-64 h-[760px] w-[760px] rounded-full bg-[#b7ddd1]/50 blur-3xl" />

                <div className="absolute -bottom-72 left-[-10%] h-[650px] w-[650px] rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-14 flex items-center gap-2 text-xs text-[#718881]"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-[#087d68]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#3d5a53]">
                            Quality Assurance
                        </span>
                    </nav>


                    <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

                        {/* Hero copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Quality Assurance
                                </span>

                            </div>


                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">

                                Quality built into
                                <span className="block text-[#087d68]">
                                    the trade process.
                                </span>

                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">

                                International sourcing depends on more than finding the
                                right supplier. Al Huda approaches quality through
                                requirement clarity, supplier evaluation, product
                                specifications, documentation and coordinated
                                inspection where applicable.

                            </p>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?service=quality"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Discuss Quality Requirements
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href="/about-us/certificates"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bcd9d0] bg-white/60 px-7 text-sm font-semibold text-[#46645c] transition hover:bg-white"
                                >
                                    Certifications & Documents
                                </Link>

                            </div>

                        </div>


                        {/* Quality visual */}

                        <div className="relative">

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_30px_90px_rgba(20,70,60,0.12)] sm:p-8">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                            Quality framework
                                        </p>

                                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#29483f]">
                                            From specification
                                            <br />
                                            to shipment.
                                        </h2>

                                    </div>


                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f4ef] text-xl text-[#087d68]">
                                        ✓
                                    </div>

                                </div>


                                <div className="mt-8 space-y-2">

                                    {[
                                        "Requirement",
                                        "Supplier",
                                        "Specification",
                                        "Inspection",
                                        "Documentation",
                                        "Shipment",
                                    ].map((item, index) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-4 rounded-xl border border-[#edf1ef] bg-[#f9fbfa] px-4 py-3"
                                        >

                                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e5f3ee] text-[9px] font-bold text-[#087d68]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="text-sm font-medium text-[#526d67]">
                                                {item}
                                            </span>

                                            {index < 5 && (
                                                <span className="ml-auto text-[#b3c5bf]">
                                                    →
                                                </span>
                                            )}

                                        </div>

                                    ))}

                                </div>


                                <div className="mt-6 rounded-xl bg-[#edf7f3] px-4 py-3">

                                    <p className="text-xs leading-5 text-[#527068]">
                                        Quality controls, inspections and testing are
                                        applied according to product requirements, buyer
                                        specifications and agreed contractual scope.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          INTRODUCTION
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Our approach
                                </span>

                            </div>

                        </div>


                        <div>

                            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#153b35] sm:text-4xl lg:text-5xl">

                                Clear requirements create
                                <span className="text-[#087d68]">
                                    {" "}
                                    clearer trade processes.
                                </span>

                            </h2>


                            <div className="mt-7 grid gap-6 md:grid-cols-2">

                                <p className="text-sm leading-7 text-[#687d77] sm:text-base">
                                    Product quality starts before a shipment leaves its
                                    origin. Specifications, supplier capability,
                                    packaging, documentation and destination-market
                                    requirements all need to be understood in context.
                                </p>

                                <p className="text-sm leading-7 text-[#687d77] sm:text-base">
                                    Our role is to coordinate these considerations within
                                    the sourcing and export process, while working with
                                    suppliers, buyers, inspectors and other relevant
                                    parties according to the agreed transaction.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          QUALITY PROCESS
      ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Quality process
                            </span>

                        </div>


                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            A structured approach to quality.
                        </h2>


                        <p className="mt-5 text-sm leading-7 text-[#71827d] sm:text-base">
                            The exact quality workflow depends on the product,
                            destination, buyer requirements and contractual scope.
                            Our framework provides a clear structure for managing
                            those requirements.
                        </p>

                    </div>


                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {qualityStages.map((stage) => (

                            <article
                                key={stage.number}
                                className="group rounded-[1.5rem] border border-[#dfe9e4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b9d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.07)] sm:p-7"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-[10px] font-bold tracking-[0.14em] text-[#087d68]">
                                        {stage.number}
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf7f3] text-sm text-[#087d68] transition group-hover:bg-[#087d68] group-hover:text-white">
                                        →
                                    </span>

                                </div>


                                <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[#29483f]">
                                    {stage.title}
                                </h3>


                                <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                    {stage.text}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          FOCUS AREAS
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Areas of focus
                                </span>

                            </div>


                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">

                                Quality is
                                <span className="block text-[#087d68]">
                                    connected to every stage.
                                </span>

                            </h2>


                            <p className="mt-5 max-w-md text-sm leading-7 text-[#71827d]">
                                Depending on the transaction, different quality-related
                                controls and documents may be relevant.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {focusAreas.map((area, index) => (

                                <div
                                    key={area.title}
                                    className="rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-6"
                                >

                                    <div className="flex items-center gap-3">

                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6f4ef] text-[9px] font-bold text-[#087d68]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="text-sm font-semibold text-[#355950]">
                                            {area.title}
                                        </h3>

                                    </div>


                                    <p className="mt-4 text-xs leading-6 text-[#7b8c87]">
                                        {area.text}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          PRODUCT CATEGORIES
      ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Product categories
                                </span>

                            </div>


                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Quality considerations across our portfolio.
                            </h2>

                        </div>


                        <Link
                            href="/products"
                            className="text-xs font-semibold text-[#087d68] hover:underline"
                        >
                            Explore all products →
                        </Link>

                    </div>


                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                        {productCategories.map((product) => (

                            <Link
                                key={product.href}
                                href={product.href}
                                className="group rounded-[1.5rem] border border-[#d7e8e1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#acd3c6] hover:shadow-[0_20px_50px_rgba(20,70,60,0.06)]"
                            >

                                <div className="flex items-center justify-between">

                                    <h3 className="text-base font-semibold text-[#355950]">
                                        {product.title}
                                    </h3>

                                    <span className="text-[#a2b9b2] transition group-hover:translate-x-1 group-hover:text-[#087d68]">
                                        →
                                    </span>

                                </div>


                                <p className="mt-3 text-xs leading-6 text-[#7b8d87]">
                                    {product.description}
                                </p>


                                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#087d68]">
                                    View category
                                </p>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          DOCUMENTATION / CERTIFICATIONS
      ========================================================= */}

            <section className="bg-[#123b34]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#72d0b7]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#72d0b7]">
                                    Documentation & compliance
                                </span>

                            </div>


                            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">

                                Quality is supported
                                <span className="block text-[#72d0b7]">
                                    by documentation.
                                </span>

                            </h2>


                            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b6d1c9] sm:text-base">

                                Depending on the product and destination market,
                                relevant certificates, test reports, specifications,
                                declarations and other trade documents may form part
                                of the transaction.

                            </p>


                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/about-us/certificates"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                                >
                                    View Certificates
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href="/policy"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#467268] px-7 text-sm font-semibold text-white transition hover:bg-white/5"
                                >
                                    Policies & Documents
                                </Link>

                            </div>

                        </div>


                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 sm:p-8">

                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#72d0b7]">
                                Important
                            </p>


                            <h3 className="mt-4 text-xl font-semibold text-white">
                                Requirements vary by product and market.
                            </h3>


                            <p className="mt-4 text-sm leading-7 text-[#abc9c0]">
                                Certifications, testing, inspection, labeling,
                                packaging and other compliance requirements depend on
                                the specific product, buyer specification, country of
                                destination and applicable regulations.
                            </p>


                            <div className="mt-6 border-t border-white/10 pt-6">

                                <p className="text-xs leading-6 text-[#8fb4a9]">
                                    Final requirements should be confirmed as part of the
                                    relevant commercial and contractual documentation.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          QUALITY + LOGISTICS
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* Logistics */}

                        <Link
                            href="/logistics-and-quality"
                            className="group relative overflow-hidden rounded-[2rem] bg-[#e8f3ef] p-8 sm:p-10"
                        >

                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/60 blur-2xl" />

                            <div className="relative">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Logistics & Quality
                                </span>


                                <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.03em] text-[#29483f] sm:text-3xl">
                                    Quality does not stop at the product.
                                </h2>


                                <p className="mt-4 max-w-lg text-sm leading-7 text-[#637a74]">
                                    Explore how quality considerations connect with
                                    logistics, shipment coordination and international
                                    delivery requirements.
                                </p>


                                <div className="mt-7 text-xs font-semibold text-[#087d68]">
                                    Explore logistics & quality
                                    <span className="ml-2 transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>

                            </div>

                        </Link>


                        {/* Contact */}

                        <Link
                            href="/contact?service=quality"
                            className="group rounded-[2rem] bg-[#123b34] p-8 sm:p-10"
                        >

                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#72d0b7]">
                                Have a requirement?
                            </span>


                            <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                                Discuss your quality requirements with us.
                            </h2>


                            <p className="mt-4 max-w-lg text-sm leading-7 text-[#b4d0c8]">
                                Tell us about your product, destination market and
                                applicable specifications so we can understand the
                                requirement.
                            </p>


                            <div className="mt-7 text-xs font-semibold text-[#72d0b7]">
                                Start a quality enquiry
                                <span className="ml-2 transition group-hover:translate-x-1">
                                    →
                                </span>
                            </div>

                        </Link>

                    </div>

                </div>

            </section>


            {/* =========================================================
          FINAL CTA
      ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">

                    <div className="rounded-[2rem] border border-[#dce8e3] bg-white px-6 py-14 text-center shadow-[0_20px_60px_rgba(20,70,60,0.05)] sm:px-10">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                            Al Huda Global Trade
                        </p>


                        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Have specific product or quality requirements?
                        </h2>


                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#71827d]">
                            Share your requirements with our team and let us
                            understand the specifications, market and documentation
                            relevant to your trade enquiry.
                        </p>


                        <Link
                            href="/contact?service=quality"
                            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                        >
                            Discuss Your Requirement
                            <span className="ml-2">
                                →
                            </span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

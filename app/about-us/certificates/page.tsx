import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Certificates & Compliance | Al Huda Global Trade & Logistics",
    description:
        "Explore Al Huda's certificates, registrations, standards and compliance documentation supporting international trade and global business relationships.",
    keywords: [
        "Al Huda certificates",
        "Al Huda certifications",
        "Al Huda compliance",
        "export certificates India",
        "import export compliance",
        "international trade certifications",
        "ISO certification exporter",
    ],
    alternates: {
        canonical: "/about-us/certificates",
    },
    openGraph: {
        title: "Certificates & Compliance | Al Huda",
        description:
            "Certificates, registrations and compliance information supporting Al Huda's international trade operations.",
        type: "website",
    },
};


/* ===============================================================
   TYPES
   =============================================================== */

type Certificate = {
    id: string;
    category: string;
    title: string;
    issuer: string;
    description: string;
    status: "Verified" | "Available on request" | "To be updated";
    certificateNumber?: string;
    validity?: string;
    href?: string;
};


/* ===============================================================
   CERTIFICATE DATA
   IMPORTANT:
   Replace these entries with information from the actual documents.
   Do not publish a certificate as "Verified" until the document
   and validity have been checked.
   =============================================================== */

const certificates: Certificate[] = [
    {
        id: "01",
        category: "Management Systems",
        title: "ISO 9001:2015",
        issuer: "Certification Body",
        description:
            "Quality management certification supporting a structured approach to processes, consistency and customer-focused operations.",
        status: "To be updated",
        certificateNumber: "Certificate No. —",
        validity: "Validity —",
    },
    {
        id: "02",
        category: "Export & Trade",
        title: "APEDA Registration",
        issuer: "Agricultural and Processed Food Products Export Development Authority",
        description:
            "Relevant to eligible agricultural and processed food product export activities.",
        status: "To be updated",
        certificateNumber: "Registration No. —",
        validity: "Validity —",
    },
    {
        id: "03",
        category: "Food Safety",
        title: "FSSAI",
        issuer: "Food Safety and Standards Authority of India",
        description:
            "Food safety registration or licensing applicable to relevant food business activities.",
        status: "To be updated",
        certificateNumber: "License No. —",
        validity: "Validity —",
    },
    {
        id: "04",
        category: "Product Compliance",
        title: "CE Conformity",
        issuer: "Applicable conformity assessment / manufacturer documentation",
        description:
            "Product-specific conformity documentation may apply to eligible products and destination markets.",
        status: "To be updated",
        certificateNumber: "Reference —",
        validity: "Product specific",
    },
    {
        id: "05",
        category: "Product Compliance",
        title: "RoHS Compliance",
        issuer: "Applicable product / conformity documentation",
        description:
            "Relevant product compliance information concerning restriction of certain hazardous substances where applicable.",
        status: "To be updated",
        certificateNumber: "Reference —",
        validity: "Product specific",
    },
    {
        id: "06",
        category: "Quality & Manufacturing",
        title: "Good Manufacturing Practice",
        issuer: "Applicable regulatory / certification body",
        description:
            "Manufacturing and quality-system documentation applicable to relevant pharmaceutical, food or other regulated products.",
        status: "To be updated",
        certificateNumber: "Reference —",
        validity: "Product / facility specific",
    },
    {
        id: "07",
        category: "Product Standards",
        title: "Halal Certification",
        issuer: "Applicable Halal certification body",
        description:
            "Halal certification may apply to specific products, suppliers or manufacturing facilities.",
        status: "To be updated",
        certificateNumber: "Certificate No. —",
        validity: "Product / supplier specific",
    },
    {
        id: "08",
        category: "Business Registration",
        title: "MSME Registration",
        issuer: "Ministry of Micro, Small & Medium Enterprises",
        description:
            "Business registration documentation supporting the company's MSME status, where applicable.",
        status: "To be updated",
        certificateNumber: "Udyam No. —",
        validity: "As applicable",
    },
];


/* ===============================================================
   PAGE
   =============================================================== */

export default function CertificatesPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-40 -top-56 h-[680px] w-[680px] rounded-full bg-[#b8ddd2]/50 blur-3xl" />

                <div className="absolute -bottom-64 left-[5%] h-[560px] w-[560px] rounded-full bg-white/70 blur-3xl" />

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

                        <Link
                            href="/about-us"
                            className="transition hover:text-[#087d68]"
                        >
                            About Us
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#3d5a53]">
                            Certificates
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Certificates & Compliance
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">
                                Standards that
                                <span className="block text-[#087d68]">
                                    support trust.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                International trade often requires more than a product
                                and a buyer. Depending on the product and destination,
                                registrations, certifications, conformity documents and
                                regulatory requirements can all form part of the
                                transaction.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <a
                                    href="#certificates"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    View Certificates
                                    <span className="ml-2">↓</span>
                                </a>

                                <Link
                                    href="/contact"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd8d0] bg-white/70 px-7 text-sm font-semibold text-[#23463f] transition hover:bg-white"
                                >
                                    Request Documentation
                                </Link>

                            </div>

                        </div>


                        {/* Visual */}

                        <div className="relative">

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_30px_90px_rgba(20,70,60,0.12)] sm:p-8">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                            Compliance
                                        </p>

                                        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23463f]">
                                            Documentation matters.
                                        </h2>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5f3ee] text-xl text-[#087d68]">
                                        ✓
                                    </div>

                                </div>


                                <div className="mt-8 space-y-3">

                                    <ComplianceRow
                                        number="01"
                                        title="Certification"
                                        text="Applicable standards and certificates"
                                    />

                                    <ComplianceRow
                                        number="02"
                                        title="Registration"
                                        text="Business and regulatory registrations"
                                    />

                                    <ComplianceRow
                                        number="03"
                                        title="Product Compliance"
                                        text="Market and product-specific requirements"
                                    />

                                    <ComplianceRow
                                        number="04"
                                        title="Documentation"
                                        text="Supporting records and trade documents"
                                    />

                                </div>


                                <div className="mt-7 rounded-2xl bg-[#edf7f3] p-4">

                                    <p className="text-xs leading-5 text-[#55726a]">
                                        Certification requirements vary by product,
                                        supplier, manufacturing facility and destination
                                        market. Documentation should always be verified
                                        against the specific transaction.
                                    </p>

                                </div>

                            </div>


                            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#d7e6e1] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-right-7">

                                <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a8f89]">
                                    Documentation
                                </div>

                                <div className="mt-1 text-sm font-semibold text-[#23463f]">
                                    Product-specific
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          NAVIGATION
      ========================================================= */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#certificates"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Certificates
                        </a>

                        <a
                            href="#categories"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Compliance Areas
                        </a>

                        <a
                            href="#verification"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Verification
                        </a>

                        <a
                            href="#request"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Request Documents
                        </a>

                    </nav>

                </div>

            </section>


            {/* =========================================================
          INTRO
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Our documentation
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Compliance is part of the
                                <span className="block text-[#087d68]">
                                    trade conversation.
                                </span>
                            </h2>

                        </div>


                        <div className="max-w-3xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Depending on the product category and destination,
                                international buyers may require evidence of
                                registration, quality systems, product conformity,
                                manufacturing standards or other regulatory
                                documentation.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                This page provides an overview of the types of
                                documentation relevant to Al Huda's trade activities.
                                Individual requirements are confirmed for each product,
                                supplier, market and transaction.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          CERTIFICATE GRID
      ========================================================= */}

            <section
                id="certificates"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Certificates & registrations
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Documentation supporting our trade activities.
                            </h2>

                        </div>

                        <div className="rounded-full border border-[#d5e5df] bg-white px-4 py-2 text-xs font-medium text-[#71827d]">
                            {certificates.length} documentation areas
                        </div>

                    </div>


                    <div className="grid gap-4 md:grid-cols-2">

                        {certificates.map((certificate) => (
                            <CertificateCard
                                key={certificate.id}
                                certificate={certificate}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          COMPLIANCE AREAS
      ========================================================= */}

            <section
                id="categories"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Compliance areas
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Different products require different documentation.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            A certificate is not automatically applicable to every
                            product or shipment. Requirements are determined by the
                            product, supplier, manufacturing facility, destination
                            country and applicable regulations.
                        </p>

                    </div>


                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                        <ComplianceCard
                            number="01"
                            title="Food Products"
                            description="Food safety, product registration, labelling and destination-market requirements."
                        />

                        <ComplianceCard
                            number="02"
                            title="Pharmaceuticals"
                            description="Product, manufacturing, quality and regulatory documentation as applicable."
                        />

                        <ComplianceCard
                            number="03"
                            title="Engineering & Automotive"
                            description="Technical specifications, conformity and product-specific standards where required."
                        />

                        <ComplianceCard
                            number="04"
                            title="Textiles & Merchandise"
                            description="Product specifications, quality documentation and market-specific requirements."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
          VERIFICATION
      ========================================================= */}

            <section
                id="verification"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Verification
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Clear documentation.
                                <span className="block text-[#087d68]">
                                    No assumptions.
                                </span>
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Certification information should always be checked
                                against the underlying document and the specific
                                transaction.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            <VerificationCard
                                number="01"
                                title="Certificate identity"
                                text="Certificate or registration number, issuing organisation and scope."
                            />

                            <VerificationCard
                                number="02"
                                title="Validity"
                                text="Issue date, expiry date or applicable validity period where relevant."
                            />

                            <VerificationCard
                                number="03"
                                title="Scope"
                                text="The products, facilities, activities or markets covered by the documentation."
                            />

                            <VerificationCard
                                number="04"
                                title="Transaction fit"
                                text="Confirmation that the document is applicable to the specific product and destination."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          IMPORTANT NOTICE
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

                    <div className="rounded-[1.75rem] border border-[#dce8e3] bg-[#f8fbf9] p-7 sm:p-9">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[#087d68]">
                                i
                            </div>

                            <div>

                                <h2 className="text-lg font-semibold text-[#29483f]">
                                    Certification and compliance information is
                                    product-specific.
                                </h2>

                                <p className="mt-3 max-w-4xl text-sm leading-6 text-[#71827d]">
                                    The presence of a certification, registration or
                                    compliance standard on this page should not be
                                    interpreted as meaning that every product supplied by
                                    Al Huda carries that certification. Product,
                                    supplier, manufacturing facility and destination
                                    requirements vary. Supporting documentation should be
                                    reviewed for the relevant transaction.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          DOCUMENT REQUEST CTA
      ========================================================= */}

            <section
                id="request"
                className="scroll-mt-20 bg-[#123b34]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    Document request
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                                Need documentation for a
                                <span className="block text-[#73d1b8]">
                                    specific product?
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl leading-7 text-[#b5d1ca]">
                                Tell us the product, quantity, destination market and
                                relevant specification. Our team can identify the
                                documentation required for the enquiry and share
                                applicable records where available.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                                >
                                    Request Documents
                                    <span className="ml-2">→</span>
                                </Link>

                                <Link
                                    href="/our-products"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Browse Products
                                </Link>

                            </div>

                        </div>


                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">

                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                Include in your enquiry
                            </p>

                            <div className="mt-6 space-y-3">

                                <DarkChecklist text="Product name / category" />

                                <DarkChecklist text="Destination country" />

                                <DarkChecklist text="Required quantity" />

                                <DarkChecklist text="Applicable specification or standard" />

                                <DarkChecklist text="Required certificate or document" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          RELATED PAGES
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Explore Al Huda
                            </span>

                        </div>

                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#153b35] sm:text-3xl">
                            Continue exploring.
                        </h2>

                    </div>


                    <div className="grid gap-4 md:grid-cols-3">

                        <RelatedCard
                            href="/about-us/company-profile"
                            number="01"
                            title="Company Profile"
                            description="Learn about Al Huda, our business and our international trade approach."
                        />

                        <RelatedCard
                            href="/about-us/our-team"
                            number="02"
                            title="Our Team"
                            description="Meet the people coordinating sourcing, trade and logistics activities."
                        />

                        <RelatedCard
                            href="/logistics-and-quality"
                            number="03"
                            title="Logistics & Quality"
                            description="Explore our approach to quality, documentation and international logistics."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
          FOOTER NOTE
      ========================================================= */}

            <section className="border-t border-[#dfe9e4] bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

                    <p className="text-center text-xs leading-5 text-[#82928d]">
                        Certification names, registration numbers, issuing bodies,
                        validity dates and scopes should be verified against the
                        current original documents before publication.
                    </p>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   CERTIFICATE CARD
   =============================================================== */

function CertificateCard({
    certificate,
}: {
    certificate: Certificate;
}) {
    const statusStyles = {
        Verified: "bg-[#e6f5ef] text-[#087d68]",
        "Available on request": "bg-[#eef3f1] text-[#56736a]",
        "To be updated": "bg-[#fff5df] text-[#9a6a12]",
    };

    return (
        <article className="group rounded-[1.5rem] border border-[#dfe9e4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.07)] sm:p-7">

            <div className="flex items-start justify-between gap-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f5f0] text-sm font-bold text-[#087d68]">
                    {certificate.id}
                </div>

                <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${statusStyles[certificate.status]}`}
                >
                    {certificate.status}
                </span>

            </div>


            <div className="mt-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                    {certificate.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#29483f]">
                    {certificate.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#71827d]">
                    Issued / maintained by
                </p>

                <p className="mt-1 text-sm font-semibold text-[#526d67]">
                    {certificate.issuer}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#71827d]">
                    {certificate.description}
                </p>

            </div>


            <div className="mt-6 grid gap-2 border-t border-[#edf1ef] pt-5 sm:grid-cols-2">

                <InfoField
                    label="Reference"
                    value={certificate.certificateNumber ?? "—"}
                />

                <InfoField
                    label="Validity"
                    value={certificate.validity ?? "—"}
                />

            </div>


            {certificate.href ? (
                <a
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex text-xs font-semibold text-[#087d68] transition hover:text-[#056b59]"
                >
                    View document
                    <span className="ml-2">↗</span>
                </a>
            ) : (
                <p className="mt-6 text-[11px] leading-5 text-[#91a09b]">
                    Supporting document available according to applicable
                    disclosure and transaction requirements.
                </p>
            )}

        </article>
    );
}


/* ===============================================================
   COMPLIANCE ROW
   =============================================================== */

function ComplianceRow({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-[#dce9e4] bg-[#f8fbf9] p-4">

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                {number}
            </span>

            <div>

                <p className="text-sm font-semibold text-[#29483f]">
                    {title}
                </p>

                <p className="mt-0.5 text-xs text-[#71827d]">
                    {text}
                </p>

            </div>

        </div>
    );
}


/* ===============================================================
   COMPLIANCE CARD
   =============================================================== */

function ComplianceCard({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 transition duration-300 hover:border-[#b8d9cf] hover:bg-[#edf7f3]">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                {number}
            </span>

            <h3 className="mt-6 text-lg font-semibold text-[#29483f]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#71827d]">
                {description}
            </p>

        </div>
    );
}


/* ===============================================================
   VERIFICATION CARD
   =============================================================== */

function VerificationCard({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-[1.5rem] border border-[#d6e7df] bg-white p-6">

            <div className="flex items-center justify-between">

                <span className="text-[10px] font-bold tracking-[0.12em] text-[#087d68]">
                    {number}
                </span>

                <span className="text-[#a8beb8]">
                    ✓
                </span>

            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#29483f]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#71827d]">
                {text}
            </p>

        </div>
    );
}


/* ===============================================================
   INFO FIELD
   =============================================================== */

function InfoField({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-xl bg-[#f8fbf9] px-3 py-2.5">

            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8a9a95]">
                {label}
            </p>

            <p className="mt-1 truncate text-[11px] font-medium text-[#526d67]">
                {value}
            </p>

        </div>
    );
}


/* ===============================================================
   DARK CHECKLIST
   =============================================================== */

function DarkChecklist({
    text,
}: {
    text: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087d68] text-xs text-white">
                ✓
            </span>

            <span className="text-sm text-[#d1e4df]">
                {text}
            </span>

        </div>
    );
}


/* ===============================================================
   RELATED CARD
   =============================================================== */

function RelatedCard({
    href,
    number,
    title,
    description,
}: {
    href: string;
    number: string;
    title: string;
    description: string;
}) {
    return (
        <Link
            href={href}
            className="group rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <div className="flex items-center justify-between">

                <span className="text-[10px] font-bold tracking-[0.12em] text-[#087d68]">
                    {number}
                </span>

                <span className="text-[#a6beb7] transition group-hover:text-[#087d68]">
                    ↗
                </span>

            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#29483f]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#71827d]">
                {description}
            </p>

            <div className="mt-5 text-xs font-semibold text-[#087d68]">
                Explore page →
            </div>

        </Link>
    );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Policies & Documents | Al Huda Global Trade & Logistics",
    description:
        "Access Al Huda's policies, trade documents, compliance information, quality documentation, terms, privacy policies and other corporate documents.",
    keywords: [
        "Al Huda policies",
        "Al Huda documents",
        "Al Huda compliance documents",
        "export company policies India",
        "international trade policies",
        "supplier policy",
        "quality policy",
        "privacy policy",
        "terms of service",
    ],
    alternates: {
        canonical: "/policy",
    },
    openGraph: {
        title: "Policies & Documents | Al Huda",
        description:
            "Explore Al Huda's corporate policies, compliance documentation and trade-related documents.",
        type: "website",
    },
};


/* ===============================================================
   DOCUMENT TYPES
   =============================================================== */

type PolicyDocument = {
    id: string;
    title: string;
    category: string;
    description: string;
    version: string;
    updated: string;
    format: "PDF" | "DOCX" | "XLSX";
    size?: string;
    status: "Current" | "Archived" | "Under Review";
    href: string;
    featured?: boolean;
};


/* ===============================================================
   DOCUMENT DATA
   ===============================================================

   IMPORTANT:
   Replace the href values with your actual uploaded files.

   Example:
   href: "/documents/policies/quality-policy.pdf"

   Recommended folder structure:

   /public
     /documents
       /policies
       /compliance
       /trade
       /quality
       /corporate
       /supplier
       /privacy
       /legal

   =============================================================== */

const documents: PolicyDocument[] = [

    {
        id: "POL-001",
        title: "Quality Policy",
        category: "Quality & Operations",
        description:
            "Our commitment to consistent quality, customer requirements, supplier coordination and continuous improvement.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/quality-policy.pdf",
        featured: true,
    },

    {
        id: "POL-002",
        title: "Supplier & Sourcing Policy",
        category: "Trade & Sourcing",
        description:
            "Principles governing supplier evaluation, sourcing requirements, product specifications and responsible business coordination.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/supplier-sourcing-policy.pdf",
    },

    {
        id: "POL-003",
        title: "Privacy Policy",
        category: "Legal & Privacy",
        description:
            "Information about how personal information is collected, used, protected and handled through our website and business interactions.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/privacy-policy.pdf",
    },

    {
        id: "POL-004",
        title: "Terms of Service",
        category: "Legal & Privacy",
        description:
            "Terms governing the use of the Al Huda website and related digital services.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/terms-of-service.pdf",
    },

    {
        id: "POL-005",
        title: "Trade Documentation Policy",
        category: "Trade & Compliance",
        description:
            "Guidelines concerning documentation, information accuracy and coordination during international trade transactions.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/trade-documentation-policy.pdf",
    },

    {
        id: "POL-006",
        title: "Logistics & Shipment Policy",
        category: "Logistics",
        description:
            "General principles covering shipment planning, logistics coordination and delivery-related communication.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/logistics-shipment-policy.pdf",
    },

    {
        id: "POL-007",
        title: "Responsible Business Policy",
        category: "Corporate",
        description:
            "Our general principles for responsible business relationships, professional conduct and transparent communication.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/responsible-business-policy.pdf",
    },

    {
        id: "POL-008",
        title: "Information Security Policy",
        category: "Security",
        description:
            "General principles for protecting business information, communications and digital systems.",
        version: "v1.0",
        updated: "2026",
        format: "PDF",
        size: "—",
        status: "Current",
        href: "/documents/policies/information-security-policy.pdf",
    },

];


/* ===============================================================
   CATEGORY DATA
   =============================================================== */

const categories = [
    {
        name: "All Documents",
        description: "Browse the complete document library.",
        icon: "▦",
    },
    {
        name: "Quality & Operations",
        description: "Quality systems and operational policies.",
        icon: "✓",
    },
    {
        name: "Trade & Compliance",
        description: "Trade, documentation and compliance.",
        icon: "↗",
    },
    {
        name: "Trade & Sourcing",
        description: "Sourcing and supplier-related documents.",
        icon: "◎",
    },
    {
        name: "Logistics",
        description: "Shipment and logistics documentation.",
        icon: "□",
    },
    {
        name: "Legal & Privacy",
        description: "Legal terms and privacy documents.",
        icon: "§",
    },
    {
        name: "Corporate",
        description: "Corporate and business policies.",
        icon: "◇",
    },
    {
        name: "Security",
        description: "Information and digital security.",
        icon: "⌁",
    },
];


/* ===============================================================
   PAGE
   =============================================================== */

export default function PolicyPage() {

    const currentDocuments = documents.filter(
        (document) => document.status === "Current"
    );

    const featuredDocuments = documents.filter(
        (document) => document.featured
    );

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-44 -top-56 h-[700px] w-[700px] rounded-full bg-[#b8ddd2]/50 blur-3xl" />

                <div className="absolute -bottom-64 left-[5%] h-[580px] w-[580px] rounded-full bg-white/70 blur-3xl" />

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
                            Policies & Documents
                        </span>

                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        {/* Hero copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Policy & Document Centre
                                </span>

                            </div>


                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">

                                Policies,
                                <span className="block text-[#087d68]">
                                    clearly documented.
                                </span>

                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">

                                Access Al Huda's policies, operating principles,
                                compliance documents and supporting business
                                documentation in one organised place.

                            </p>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <a
                                    href="#documents"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Browse Documents
                                    <span className="ml-2">↓</span>
                                </a>

                                <Link
                                    href="/contact"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd8d0] bg-white/70 px-7 text-sm font-semibold text-[#23463f] transition hover:bg-white"
                                >
                                    Request a Document
                                </Link>

                            </div>

                        </div>


                        {/* Hero document visual */}

                        <div className="relative">

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_30px_90px_rgba(20,70,60,0.12)] sm:p-8">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                            Document Centre
                                        </p>

                                        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23463f]">
                                            One place for important documents.
                                        </h2>

                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5f3ee] text-xl text-[#087d68]">
                                        ▤
                                    </div>

                                </div>


                                <div className="mt-8 space-y-3">

                                    <DocumentPreview
                                        number="01"
                                        title="Quality Policy"
                                        meta="PDF · Current"
                                    />

                                    <DocumentPreview
                                        number="02"
                                        title="Supplier & Sourcing"
                                        meta="PDF · Current"
                                    />

                                    <DocumentPreview
                                        number="03"
                                        title="Privacy Policy"
                                        meta="PDF · Current"
                                    />

                                    <DocumentPreview
                                        number="04"
                                        title="Trade Documentation"
                                        meta="PDF · Current"
                                    />

                                </div>


                                <div className="mt-7 flex items-center justify-between rounded-2xl bg-[#edf7f3] px-4 py-4">

                                    <div>

                                        <p className="text-xs font-semibold text-[#345850]">
                                            Document library
                                        </p>

                                        <p className="mt-1 text-[11px] text-[#71827d]">
                                            Policies, standards & supporting documents
                                        </p>

                                    </div>

                                    <span className="text-[#087d68]">
                                        →
                                    </span>

                                </div>

                            </div>


                            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#d7e6e1] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-right-7">

                                <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a8f89]">
                                    Current documents
                                </div>

                                <div className="mt-1 text-sm font-semibold text-[#23463f]">
                                    {currentDocuments.length} available
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
                            href="#documents"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Documents
                        </a>

                        <a
                            href="#categories"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Categories
                        </a>

                        <a
                            href="#document-process"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Document Process
                        </a>

                        <a
                            href="#request"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Request
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
                                    Document transparency
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">

                                Important information,
                                <span className="block text-[#087d68]">
                                    properly organised.
                                </span>

                            </h2>

                        </div>


                        <div className="max-w-3xl">

                            <p className="text-lg leading-8 text-[#526d67]">

                                International business generates a large amount of
                                documentation. Keeping policies and supporting records
                                organised makes it easier for customers, suppliers and
                                business partners to find relevant information.

                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">

                                The document centre is designed to accommodate policies,
                                procedures, compliance documents, declarations,
                                certifications, terms, notices and other documents that
                                may be published by Al Huda.

                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          FEATURED DOCUMENTS
      ========================================================= */}

            {featuredDocuments.length > 0 && (

                <section className="bg-[#edf7f3]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

                        <div className="mb-10">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Featured documents
                                </span>

                            </div>

                            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#153b35] sm:text-3xl">
                                Frequently referenced documents.
                            </h2>

                        </div>


                        <div className="grid gap-4 md:grid-cols-2">

                            {featuredDocuments.map((document) => (
                                <FeaturedDocument
                                    key={document.id}
                                    document={document}
                                />
                            ))}

                        </div>

                    </div>

                </section>

            )}


            {/* =========================================================
          DOCUMENT LIBRARY
      ========================================================= */}

            <section
                id="documents"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Document library
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Policies & business documents.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Browse current documents by subject and open the
                                relevant file for detailed information.
                            </p>

                        </div>


                        <div className="flex flex-wrap gap-2">

                            <span className="rounded-full border border-[#d5e5df] bg-white px-4 py-2 text-xs font-medium text-[#607872]">
                                {documents.length} Documents
                            </span>

                            <span className="rounded-full border border-[#d5e5df] bg-white px-4 py-2 text-xs font-medium text-[#607872]">
                                {currentDocuments.length} Current
                            </span>

                        </div>

                    </div>


                    {/* Search / Filter UI */}

                    <div className="mb-8 rounded-[1.5rem] border border-[#dfe9e4] bg-white p-4 sm:p-5">

                        <div className="flex flex-col gap-4 lg:flex-row">

                            <div className="relative flex-1">

                                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#91a09b]">
                                    ⌕
                                </span>

                                <input
                                    type="search"
                                    placeholder="Search documents..."
                                    aria-label="Search documents"
                                    className="h-12 w-full rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] pl-11 pr-4 text-sm text-[#29483f] outline-none transition placeholder:text-[#9aa9a4] focus:border-[#087d68] focus:bg-white"
                                />

                            </div>


                            <select
                                aria-label="Filter by category"
                                className="h-12 rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 text-sm text-[#526d67] outline-none transition focus:border-[#087d68] lg:w-64"
                            >

                                <option>All categories</option>

                                {categories
                                    .filter((category) => category.name !== "All Documents")
                                    .map((category) => (
                                        <option
                                            key={category.name}
                                            value={category.name}
                                        >
                                            {category.name}
                                        </option>
                                    ))}

                            </select>

                        </div>

                    </div>


                    {/* Documents */}

                    <div className="space-y-3">

                        {documents.map((document) => (
                            <DocumentRow
                                key={document.id}
                                document={document}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          CATEGORIES
      ========================================================= */}

            <section
                id="categories"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Browse by category
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Find the information you need.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            As the document library grows, categories keep the
                            information structured and easy to navigate.
                        </p>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {categories
                            .filter((category) => category.name !== "All Documents")
                            .map((category, index) => (
                                <CategoryCard
                                    key={category.name}
                                    category={category}
                                    index={index}
                                />
                            ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          DOCUMENT PROCESS
      ========================================================= */}

            <section
                id="document-process"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Document control
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">

                                Documents should be
                                <span className="block text-[#087d68]">
                                    easy to identify.
                                </span>

                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                As your document library grows, consistent document
                                control helps visitors understand what they are viewing
                                and whether it is current.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            <ProcessCard
                                number="01"
                                title="Document ID"
                                text="Each document can have a unique internal reference."
                            />

                            <ProcessCard
                                number="02"
                                title="Version"
                                text="Version information helps distinguish updated documents."
                            />

                            <ProcessCard
                                number="03"
                                title="Review date"
                                text="Record when the document was last reviewed or updated."
                            />

                            <ProcessCard
                                number="04"
                                title="Status"
                                text="Current, archived or under-review status can be displayed."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          SECURITY / DOCUMENT NOTICE
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

                    <div className="rounded-[1.75rem] border border-[#dce8e3] bg-[#f8fbf9] p-7 sm:p-9">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[#087d68]">
                                ✓
                            </div>

                            <div>

                                <h2 className="text-lg font-semibold text-[#29483f]">
                                    Public documents should contain only information
                                    intended for publication.
                                </h2>

                                <p className="mt-3 max-w-4xl text-sm leading-6 text-[#71827d]">
                                    Before uploading a document, review it for personal
                                    information, confidential commercial information,
                                    internal credentials, financial information,
                                    signatures and other material that should not be
                                    publicly accessible.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          REQUEST DOCUMENT
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
                                    Need something specific?
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">

                                Can't find the
                                <span className="block text-[#73d1b8]">
                                    document you need?
                                </span>

                            </h2>

                            <p className="mt-6 max-w-xl leading-7 text-[#b5d1ca]">

                                Tell us what document, certificate, policy or supporting
                                information you require and include the relevant product
                                or business context.

                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Contact Our Team
                                <span className="ml-2">→</span>
                            </Link>

                        </div>


                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">

                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                Include in your request
                            </p>

                            <div className="mt-6 space-y-3">

                                <DarkItem text="Document name or type" />

                                <DarkItem text="Product / business requirement" />

                                <DarkItem text="Destination market, if relevant" />

                                <DarkItem text="Required date or timeline" />

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
                            Related information.
                        </h2>

                    </div>


                    <div className="grid gap-4 md:grid-cols-3">

                        <RelatedCard
                            href="/about-us/certificates"
                            number="01"
                            title="Certificates"
                            description="Explore certificates, registrations and product compliance information."
                        />

                        <RelatedCard
                            href="/about-us/company-profile"
                            number="02"
                            title="Company Profile"
                            description="Learn more about Al Huda, our business and international trade activities."
                        />

                        <RelatedCard
                            href="/logistics-and-quality"
                            number="03"
                            title="Logistics & Quality"
                            description="Understand our approach to quality, documentation and logistics coordination."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
          FOOTNOTE
      ========================================================= */}

            <section className="border-t border-[#dfe9e4] bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

                    <p className="text-center text-xs leading-5 text-[#82928d]">
                        Documents published on this website are provided for
                        information according to their stated scope, version and
                        status. Always refer to the applicable current document.
                    </p>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   DOCUMENT PREVIEW
   =============================================================== */

function DocumentPreview({
    number,
    title,
    meta,
}: {
    number: string;
    title: string;
    meta: string;
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-[#dce9e4] bg-[#f8fbf9] p-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                {number}
            </div>

            <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-semibold text-[#29483f]">
                    {title}
                </p>

                <p className="mt-1 text-[10px] text-[#82928d]">
                    {meta}
                </p>

            </div>

            <span className="text-[#a4b9b2]">
                ↗
            </span>

        </div>
    );
}


/* ===============================================================
   FEATURED DOCUMENT
   =============================================================== */

function FeaturedDocument({
    document,
}: {
    document: PolicyDocument;
}) {
    return (
        <a
            href={document.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-[1.5rem] border border-[#d6e7df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a9d2c5] hover:shadow-[0_20px_50px_rgba(20,70,60,0.07)] sm:p-7"
        >

            <div>

                <div className="flex items-center justify-between">

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f3ee] text-xs font-bold text-[#087d68]">
                        PDF
                    </span>

                    <span className="rounded-full bg-[#e6f5ef] px-3 py-1.5 text-[10px] font-semibold text-[#087d68]">
                        Current
                    </span>

                </div>

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                    {document.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#29483f]">
                    {document.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#71827d]">
                    {document.description}
                </p>

            </div>


            <div className="mt-7 flex items-center justify-between border-t border-[#edf1ef] pt-5">

                <span className="text-xs text-[#82928d]">
                    {document.version} · {document.updated}
                </span>

                <span className="text-xs font-semibold text-[#087d68] transition group-hover:translate-x-1">
                    Open document →
                </span>

            </div>

        </a>
    );
}


/* ===============================================================
   DOCUMENT ROW
   =============================================================== */

function DocumentRow({
    document,
}: {
    document: PolicyDocument;
}) {

    const statusStyles = {
        Current: "bg-[#e6f5ef] text-[#087d68]",
        Archived: "bg-[#eef1f0] text-[#687d76]",
        "Under Review": "bg-[#fff5df] text-[#9a6a12]",
    };

    return (
        <div className="group rounded-[1.35rem] border border-[#dfe9e4] bg-white p-5 transition duration-300 hover:border-[#b8d9cf] hover:shadow-[0_15px_40px_rgba(20,70,60,0.05)] sm:p-6">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                {/* Document icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f5f0] text-[10px] font-bold text-[#087d68]">
                    {document.format}
                </div>


                {/* Main */}

                <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#087d68]">
                            {document.id}
                        </p>

                        <span className="text-[#bdcbc6]">
                            ·
                        </span>

                        <p className="text-[10px] font-medium text-[#82928d]">
                            {document.category}
                        </p>

                    </div>

                    <h3 className="mt-1 text-base font-semibold text-[#29483f] sm:text-lg">
                        {document.title}
                    </h3>

                    <p className="mt-1 max-w-3xl text-sm leading-6 text-[#71827d]">
                        {document.description}
                    </p>

                </div>


                {/* Meta */}

                <div className="grid grid-cols-2 gap-4 border-t border-[#edf1ef] pt-4 sm:flex sm:border-t-0 sm:pt-0 lg:min-w-[250px]">

                    <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9aa8a3]">
                            Version
                        </p>

                        <p className="mt-1 text-xs font-medium text-[#526d67]">
                            {document.version}
                        </p>

                    </div>


                    <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9aa8a3]">
                            Updated
                        </p>

                        <p className="mt-1 text-xs font-medium text-[#526d67]">
                            {document.updated}
                        </p>

                    </div>


                    <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9aa8a3]">
                            Status
                        </p>

                        <span
                            className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[9px] font-semibold ${statusStyles[document.status]}`}
                        >
                            {document.status}
                        </span>

                    </div>

                </div>


                {/* Action */}

                <a
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${document.title}`}
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#087d68] px-5 text-xs font-semibold text-white transition hover:bg-[#056b59]"
                >
                    Open
                    <span className="ml-2">↗</span>
                </a>

            </div>

        </div>
    );
}


/* ===============================================================
   CATEGORY CARD
   =============================================================== */

function CategoryCard({
    category,
    index,
}: {
    category: {
        name: string;
        description: string;
        icon: string;
    };
    index: number;
}) {
    return (
        <a
            href="#documents"
            className="group rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <div className="flex items-center justify-between">

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f3ee] text-sm font-semibold text-[#087d68]">
                    {category.icon}
                </span>

                <span className="text-[10px] font-bold tracking-[0.12em] text-[#a2b6b0]">
                    {String(index + 1).padStart(2, "0")}
                </span>

            </div>

            <h3 className="mt-7 text-base font-semibold text-[#29483f]">
                {category.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#71827d]">
                {category.description}
            </p>

            <div className="mt-5 text-xs font-semibold text-[#087d68]">
                Browse category →
            </div>

        </a>
    );
}


/* ===============================================================
   PROCESS CARD
   =============================================================== */

function ProcessCard({
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
   DARK ITEM
   =============================================================== */

function DarkItem({
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

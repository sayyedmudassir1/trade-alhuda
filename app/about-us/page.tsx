import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Al Huda | Global Sourcing & Export",
    description:
        "Learn about Al Huda, our company, team, certifications and approach to international sourcing, export and trade from India.",
    keywords: [
        "Al Huda",
        "Al Huda India",
        "export company India",
        "sourcing company India",
        "Indian export company",
        "international sourcing India",
        "global trading company India",
        "India export supplier",
        "about Al Huda",
        "Al Huda company profile",
    ],
    alternates: {
        canonical: "/about-us",
    },
    openGraph: {
        title: "About Us | Al Huda",
        description:
            "Learn about Al Huda, our company, team, certifications and approach to international sourcing and export.",
        type: "website",
    },
};

const aboutSections = [
    {
        number: "01",
        title: "Company Profile",
        description:
            "Discover Al Huda's business, sourcing capabilities, export approach and role in connecting international buyers with products from India.",
        href: "/about-us/company-profile",
        label: "Explore company",
    },
    {
        number: "02",
        title: "Our Team",
        description:
            "Meet the people behind Al Huda and learn about the experience, coordination and commercial approach supporting our international trade activities.",
        href: "/about-us/our-team",
        label: "Meet our team",
    },
    {
        number: "03",
        title: "Certificates",
        description:
            "Explore our available certifications, registrations and business credentials supporting our international sourcing and export activities.",
        href: "/about-us/certificates",
        label: "View certificates",
    },
];

const strengths = [
    {
        number: "01",
        title: "India-based sourcing",
        text: "We work with sourcing opportunities across Indian product categories for international buyers and commercial requirements.",
    },
    {
        number: "02",
        title: "Buyer-focused approach",
        text: "Product specifications, quantities, destination markets and commercial requirements form the starting point for each sourcing enquiry.",
    },
    {
        number: "03",
        title: "Cross-category capability",
        text: "Our product portfolio spans multiple categories, allowing buyers to explore different sourcing requirements through one business relationship.",
    },
    {
        number: "04",
        title: "Trade coordination",
        text: "From product discussions and specifications to documentation and shipment coordination, requirements can be reviewed throughout the trade process.",
    },
];

const process = [
    {
        number: "01",
        title: "Understand",
        text: "We begin by understanding the buyer's product requirement, specifications, quantities and destination.",
    },
    {
        number: "02",
        title: "Source",
        text: "Suitable sourcing possibilities are explored according to the requirement and intended market.",
    },
    {
        number: "03",
        title: "Coordinate",
        text: "Product details, commercial requirements and relevant trade arrangements are discussed and coordinated.",
    },
    {
        number: "04",
        title: "Deliver",
        text: "Once the commercial arrangement is confirmed, relevant documentation, packaging and shipment requirements can be coordinated.",
    },
];

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-52 left-[18%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

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

                        <span className="font-medium text-[#345850]">
                            About Us
                        </span>
                    </nav>

                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    About Al Huda
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Connecting
                                <span className="block text-[#07846d]">
                                    India with global markets.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                Learn about Al Huda, our people, our credentials and
                                our approach to sourcing and coordinating products
                                for international buyers.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/about-us/company-profile"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Company Profile
                                    <span className="ml-2">→</span>
                                </Link>

                                <Link
                                    href="/contact-us"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Contact Us
                                </Link>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                                    alt="Al Huda team and international business"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/80 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Al Huda
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            Sourcing, export and trade coordination from India.
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
                            href="#overview"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Overview
                        </a>

                        <a
                            href="#explore"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            About Al Huda
                        </a>

                        <a
                            href="#approach"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Our Approach
                        </a>

                        <a
                            href="#process"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            How We Work
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Contact
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
                                    Who we are
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                A sourcing and export partner built around international trade.
                            </h2>

                        </div>

                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Al Huda works with international buyers looking to source
                                products from India across a range of categories and
                                commercial requirements.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Our role can involve understanding product requirements,
                                exploring sourcing possibilities, reviewing specifications,
                                coordinating commercial details and supporting the
                                documentation and shipment process where applicable.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Explore the sections below to learn more about the company,
                                the team behind the business and the credentials that
                                support our work.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                ABOUT SECTIONS
            ========================================================= */}

            <section
                id="explore"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Explore Al Huda
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Learn more about the business.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Explore our company profile, team and available business
                            credentials through the dedicated sections below.
                        </p>

                    </div>

                    <div className="grid gap-5 lg:grid-cols-3">

                        {aboutSections.map((section) => (
                            <AboutCard
                                key={section.number}
                                section={section}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                APPROACH
            ========================================================= */}

            <section
                id="approach"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Our approach
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Built around clear requirements and practical trade coordination.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                International sourcing often starts with a specific product
                                requirement. We use the buyer&apos;s information as the
                                starting point for understanding what needs to be sourced
                                and coordinated.
                            </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {strengths.map((strength) => (
                                <div
                                    key={strength.number}
                                    className="rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-7"
                                >

                                    <span className="text-xs font-semibold tracking-[0.15em] text-[#087d68]">
                                        {strength.number}
                                    </span>

                                    <h3 className="mt-7 text-lg font-semibold text-[#1a3e37]">
                                        {strength.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6a817b]">
                                        {strength.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                IMAGE / BUSINESS SECTION
            ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                                alt="International business meeting"
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/60 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    International trade
                                </span>

                            </div>

                        </div>

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    From India to the world
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                One business relationship for a range of sourcing requirements.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Our product portfolio covers multiple categories, giving
                                international buyers the opportunity to discuss different
                                sourcing requirements through a single commercial
                                relationship.
                            </p>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                Whether the requirement involves food products, textiles,
                                engineering goods, automotive components, general
                                merchandise or another product category, the conversation
                                can begin with the buyer&apos;s specific requirement.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/our-products"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Explore Products
                                    <span className="ml-2">→</span>
                                </Link>

                                <Link
                                    href="/about-us/company-profile"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white px-7 text-sm font-semibold text-[#183d36] transition hover:bg-[#f5fbf8]"
                                >
                                    Company Profile
                                </Link>

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
                className="scroll-mt-20 bg-[#123b34] text-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    How we work
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                From buyer requirement to international trade.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Clear communication and product information provide the
                                foundation for exploring suitable sourcing and trade
                                arrangements.
                            </p>

                        </div>

                        <div className="space-y-3">

                            {process.map((step) => (
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
                RELATED ABOUT LINKS
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
                            Get to know Al Huda.
                        </h2>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">

                        <RelatedLink
                            href="/about-us/company-profile"
                            title="Company Profile"
                        />

                        <RelatedLink
                            href="/about-us/our-team"
                            title="Our Team"
                        />

                        <RelatedLink
                            href="/about-us/certificates"
                            title="Certificates"
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section
                id="contact"
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
                            Work with Al Huda
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Have a sourcing requirement from India?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us what you are looking for, where it needs to go and
                            any product or commercial details you already have. We can
                            use your requirement as the starting point for a sourcing
                            conversation.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact-us"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Contact Us
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

        </main>
    );
}


/* ===============================================================
   ABOUT CARD
   =============================================================== */

function AboutCard({
    section,
}: {
    section: (typeof aboutSections)[number];
}) {
    return (
        <Link
            href={section.href}
            className="group flex min-h-[330px] flex-col rounded-[1.5rem] border border-[#dfeae5] bg-white p-7 shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="flex items-start justify-between">

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#edf7f3] text-[10px] font-bold text-[#087d68]">
                    {section.number}
                </span>

                <span className="text-xl text-[#087d68] transition-transform group-hover:translate-x-1">
                    →
                </span>

            </div>

            <div className="mt-auto">

                <h3 className="text-2xl font-semibold tracking-tight text-[#173d36]">
                    {section.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#687f79]">
                    {section.description}
                </p>

                <div className="mt-6 border-t border-[#edf2f0] pt-4">

                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#087d68]">
                        {section.label}
                    </span>

                </div>

            </div>

        </Link>
    );
}


/* ===============================================================
   RELATED LINK
   =============================================================== */

function RelatedLink({
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

            <span className="text-sm font-semibold text-[#345850]">
                {title}
            </span>

            <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                →
            </span>

        </Link>
    );
}

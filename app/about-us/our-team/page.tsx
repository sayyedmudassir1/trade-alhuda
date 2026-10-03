import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Team | Al Huda Global Trade & Logistics",
    description:
        "Meet the team behind Al Huda's international sourcing, trade coordination, logistics and global business relationships.",
    keywords: [
        "Al Huda team",
        "Al Huda company team",
        "Al Huda Mumbai",
        "international trade team India",
        "export company team India",
        "import export company Mumbai",
    ],
    alternates: {
        canonical: "/about-us/our-team",
    },
    openGraph: {
        title: "Our Team | Al Huda",
        description:
            "Meet the people working behind Al Huda's international trade and sourcing operations.",
        type: "website",
    },
};

const team = [
    {
        name: "Your Name",
        role: "Founder & Director",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
        description:
            "Leads the company's overall direction, business relationships and international trade development.",
    },
    {
        name: "Team Member",
        role: "International Trade",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
        description:
            "Coordinates buyer requirements, supplier communication and international business enquiries.",
    },
    {
        name: "Team Member",
        role: "Sourcing & Procurement",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
        description:
            "Works with sourcing requirements, product specifications and suitable supplier opportunities.",
    },
    {
        name: "Team Member",
        role: "Logistics & Documentation",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
        description:
            "Supports shipment coordination, documentation and the operational side of international trade.",
    },
];

const functions = [
    {
        number: "01",
        title: "Business Development",
        description:
            "Understanding international opportunities, developing relationships and connecting the right business requirements.",
    },
    {
        number: "02",
        title: "Sourcing",
        description:
            "Exploring suitable suppliers, manufacturers and product options according to buyer requirements.",
    },
    {
        number: "03",
        title: "Trade Coordination",
        description:
            "Keeping product, commercial, documentation and communication requirements aligned throughout the process.",
    },
    {
        number: "04",
        title: "Logistics",
        description:
            "Supporting shipment planning, freight coordination and international delivery requirements.",
    },
];

const workingStyle = [
    "Clear communication",
    "Requirement-led sourcing",
    "Attention to product details",
    "Responsible coordination",
    "Long-term business relationships",
    "International perspective",
];

export default function OurTeamPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-40 -top-52 h-[650px] w-[650px] rounded-full bg-[#b8ddd2]/45 blur-3xl" />

                <div className="absolute bottom-[-300px] left-[8%] h-[550px] w-[550px] rounded-full bg-white/70 blur-3xl" />

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
                            Our Team
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">

                        {/* Hero Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Our Team
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">
                                The people
                                <span className="block text-[#087d68]">
                                    behind the trade.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                International trade is built on relationships. Our team
                                brings together business development, sourcing,
                                coordination and logistics to help turn product
                                requirements into practical trade opportunities.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact?subject=Business%20Enquiry"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Talk to Our Team
                                    <span className="ml-2">→</span>
                                </Link>

                                <Link
                                    href="/about-us/company-profile"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd8d0] bg-white/70 px-7 text-sm font-semibold text-[#23463f] transition hover:bg-white"
                                >
                                    Company Profile
                                </Link>

                            </div>

                        </div>


                        {/* Hero Image */}

                        <div className="relative">

                            <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=90"
                                    alt="Business team collaborating around a table"
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#123b34]/75 via-[#123b34]/10 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aee2d3]">
                                            One team
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            One connected trade process.
                                        </p>

                                        <p className="mt-2 text-sm leading-5 text-[#d5e9e4]">
                                            From sourcing and communication to coordination
                                            and delivery.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e6e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a8f89]">
                                    Based in
                                </div>

                                <div className="mt-1 text-sm font-semibold text-[#23463f]">
                                    Mumbai, India
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          SUB NAV
      ========================================================= */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#team"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Our Team
                        </a>

                        <a
                            href="#roles"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            What We Do
                        </a>

                        <a
                            href="#approach"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Our Approach
                        </a>

                        <a
                            href="#together"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Working Together
                        </a>

                    </nav>

                </div>

            </section>


            {/* =========================================================
          INTRO
      ========================================================= */}

            <section
                id="team"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    People behind Al Huda
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Trade is personal.
                                <span className="block text-[#087d68]">
                                    Relationships matter.
                                </span>
                            </h2>

                        </div>


                        <div className="max-w-3xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                Every international enquiry involves people on both
                                sides of the transaction. Buyers, suppliers,
                                manufacturers, logistics partners and business
                                representatives all need to communicate clearly.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Our team works across these conversations to keep
                                requirements understood, information moving and the
                                practical details of a trade opportunity coordinated.
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Rather than presenting ourselves as a large corporate
                                organisation, we focus on being accessible,
                                responsive and commercially clear with the businesses
                                we work with.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          TEAM GRID
      ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Meet the team
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            People responsible for moving conversations forward.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Replace the profile information below with your actual
                            team members, photographs and verified responsibilities.
                        </p>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {team.map((member) => (
                            <article
                                key={`${member.name}-${member.role}`}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#dfe9e4] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.08)]"
                            >

                                {/* Photo */}

                                <div className="relative aspect-[0.92] overflow-hidden bg-[#e7f1ed]">

                                    <img
                                        src={member.image}
                                        alt={`${member.name} — ${member.role}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#123b34]/50 via-transparent to-transparent opacity-70" />

                                </div>


                                {/* Information */}

                                <div className="p-6">

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                                        {member.role}
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#29483f]">
                                        {member.name}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                        {member.description}
                                    </p>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          TEAM FUNCTIONS
      ========================================================= */}

            <section
                id="roles"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Team functions
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Different responsibilities.
                                <span className="block text-[#087d68]">
                                    One trade objective.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                International trade involves multiple stages. Our
                                responsibilities are structured around the practical
                                requirements of each stage.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {functions.map((item) => (
                                <div
                                    key={item.number}
                                    className="group rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-7 transition duration-300 hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                            {item.number}
                                        </span>

                                        <span className="text-[#a8beb8] transition group-hover:text-[#087d68]">
                                            ↗
                                        </span>

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

                </div>

            </section>


            {/* =========================================================
          APPROACH
      ========================================================= */}

            <section
                id="approach"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                How we work
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            A practical approach to international business.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Good international trade depends on more than finding a
                            product. It requires people who understand what needs to
                            happen next.
                        </p>

                    </div>


                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {workingStyle.map((item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-4 rounded-2xl border border-[#d6e7df] bg-white p-5"
                            >

                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="text-sm font-semibold text-[#345850]">
                                    {item}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          WORKING TOGETHER
      ========================================================= */}

            <section
                id="together"
                className="scroll-mt-20 bg-[#123b34]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    Working together
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                                Tell us what you are looking for.
                            </h2>

                            <p className="mt-6 max-w-xl leading-7 text-[#b5d1ca]">
                                Whether you are a buyer looking for a particular
                                product, a supplier exploring international markets or
                                a business interested in developing a trade
                                relationship, our team can start with the requirement.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/contact"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                                >
                                    Contact Our Team
                                    <span className="ml-2">→</span>
                                </Link>

                                <Link
                                    href="/our-products"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Explore Products
                                </Link>

                            </div>

                        </div>


                        {/* Contact Card */}

                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">

                            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                Start with the basics
                            </div>

                            <h3 className="mt-5 text-2xl font-semibold text-white">
                                A useful enquiry includes:
                            </h3>

                            <div className="mt-6 space-y-3">

                                <EnquiryItem text="Product or product category" />

                                <EnquiryItem text="Required quantity or estimated volume" />

                                <EnquiryItem text="Product specifications or standards" />

                                <EnquiryItem text="Destination market" />

                                <EnquiryItem text="Expected timeline" />

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
                            Learn more about the company.
                        </h2>

                    </div>


                    <div className="grid gap-4 md:grid-cols-3">

                        <RelatedCard
                            href="/about-us/company-profile"
                            number="01"
                            title="Company Profile"
                            description="Understand who we are, what we do and how we approach international trade."
                        />

                        <RelatedCard
                            href="/logistics-and-quality"
                            number="02"
                            title="Logistics & Quality"
                            description="Explore our approach to coordination, documentation, logistics and quality."
                        />

                        <RelatedCard
                            href="/our-products"
                            number="03"
                            title="Our Products"
                            description="Explore the product categories available through our international trade portfolio."
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
          FINAL CTA
      ========================================================= */}

            <section className="bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#e8f3ef] px-7 py-14 text-center sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#087d68] text-white">
                        ↗
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                        Let's connect
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-5xl">
                        Have a product requirement?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-7 text-[#637a74]">
                        Tell our team what you are looking for and we can explore
                        the next steps together.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-8 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                    >
                        Start a Conversation
                        <span className="ml-2">→</span>
                    </Link>

                </div>

            </section>


            {/* =========================================================
          FOOTNOTE
      ========================================================= */}

            <section className="border-t border-[#dfe9e4] bg-white">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">

                    <p className="text-center text-xs leading-5 text-[#82928d]">
                        Team roles, responsibilities and contact channels should be
                        updated to reflect the current Al Huda organisation before
                        publication.
                    </p>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   ENQUIRY ITEM
   =============================================================== */

function EnquiryItem({
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

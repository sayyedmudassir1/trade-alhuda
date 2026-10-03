import Link from "next/link";

export const metadata = {
    title: "Terms of Service | Al Huda Global Trade",
    description:
        "Read the Terms of Service governing access to and use of the Al Huda Global Trade website and its information, enquiries and digital services.",
    robots: {
        index: true,
        follow: true,
    },
};

const sections = [
    {
        id: "acceptance",
        number: "01",
        title: "Acceptance of Terms",
    },
    {
        id: "website-use",
        number: "02",
        title: "Use of the Website",
    },
    {
        id: "business-enquiries",
        number: "03",
        title: "Business Enquiries",
    },
    {
        id: "products",
        number: "04",
        title: "Products & Information",
    },
    {
        id: "quotes",
        number: "05",
        title: "Quotations & Commercial Terms",
    },
    {
        id: "orders",
        number: "06",
        title: "Orders & Contracts",
    },
    {
        id: "quality",
        number: "07",
        title: "Quality & Compliance",
    },
    {
        id: "logistics",
        number: "08",
        title: "Logistics & Delivery",
    },
    {
        id: "intellectual-property",
        number: "09",
        title: "Intellectual Property",
    },
    {
        id: "third-party",
        number: "10",
        title: "Third-Party Services",
    },
    {
        id: "liability",
        number: "11",
        title: "Limitation of Liability",
    },
    {
        id: "indemnification",
        number: "12",
        title: "Indemnification",
    },
    {
        id: "termination",
        number: "13",
        title: "Suspension & Termination",
    },
    {
        id: "privacy",
        number: "14",
        title: "Privacy",
    },
    {
        id: "changes",
        number: "15",
        title: "Changes to These Terms",
    },
    {
        id: "governing-law",
        number: "16",
        title: "Governing Law",
    },
    {
        id: "contact",
        number: "17",
        title: "Contact",
    },
];

function SectionHeading({
    number,
    title,
}: {
    number: string;
    title: string;
}) {
    return (
        <div className="mb-5 flex items-start gap-4">
            <span className="mt-1 flex h-8 min-w-8 items-center justify-center rounded-lg bg-[#e6f4ef] px-2 text-[9px] font-bold tracking-[0.08em] text-[#087d68]">
                {number}
            </span>

            <h2 className="text-xl font-semibold tracking-[-0.025em] text-[#173c35] sm:text-2xl">
                {title}
            </h2>
        </div>
    );
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm leading-7 text-[#687d77] sm:text-[15px]">
            {children}
        </p>
    );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="mt-5 space-y-3">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="flex gap-3 text-sm leading-7 text-[#687d77] sm:text-[15px]"
                >
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#087d68]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#173c35]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-48 -top-64 h-[700px] w-[700px] rounded-full bg-[#b7ddd1]/50 blur-3xl" />

                <div className="absolute -bottom-72 left-[-12%] h-[600px] w-[600px] rounded-full bg-white/70 blur-3xl" />

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
                            Terms of Service
                        </span>
                    </nav>


                    <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Legal
                                </span>

                            </div>


                            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">
                                Terms of
                                <span className="block text-[#087d68]">
                                    Service.
                                </span>
                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                These terms explain the general conditions governing
                                your access to and use of the Al Huda Global Trade
                                website and the information, enquiries and digital
                                services made available through it.
                            </p>

                        </div>


                        {/* Document card */}

                        <div className="rounded-[1.75rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_70px_rgba(20,70,60,0.08)] backdrop-blur-sm">

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f3ee] text-lg text-[#087d68]">
                                    §
                                </div>

                                <div>

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#087d68]">
                                        Legal document
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#355950]">
                                        Terms of Service
                                    </p>

                                </div>

                            </div>


                            <div className="mt-6 border-t border-[#dce9e4] pt-5">

                                <div className="flex justify-between gap-4 text-xs">

                                    <span className="text-[#7a8d87]">
                                        Effective date
                                    </span>

                                    <span className="font-medium text-[#48655d]">
                                        September 30, 2026
                                    </span>

                                </div>


                                <div className="mt-3 flex justify-between gap-4 text-xs">

                                    <span className="text-[#7a8d87]">
                                        Jurisdiction
                                    </span>

                                    <span className="font-medium text-[#48655d]">
                                        India
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          NOTICE
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">

                    <div className="rounded-2xl border border-[#cfe4dc] bg-[#f1f8f5] px-5 py-5 sm:px-7">

                        <div className="flex gap-4">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dcefe8] text-sm font-semibold text-[#087d68]">
                                i
                            </div>

                            <div>

                                <p className="text-sm font-semibold text-[#355950]">
                                    Important distinction
                                </p>

                                <p className="mt-1 text-xs leading-6 text-[#687d77] sm:text-sm">
                                    These website terms govern use of this website. They
                                    do not replace or override the specific commercial
                                    terms contained in quotations, purchase orders,
                                    invoices, sales contracts, supply agreements,
                                    shipping documents or other written agreements
                                    applicable to a particular transaction.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          DOCUMENT CONTENT
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

                    <div className="grid gap-12 lg:grid-cols-[250px_1fr]">

                        {/* =====================================================
                DESKTOP SIDEBAR
            ===================================================== */}

                        <aside className="hidden lg:block">

                            <div className="sticky top-8 rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-5">

                                <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    On this page
                                </p>


                                <nav className="mt-4 space-y-1">

                                    {sections.map((section) => (

                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-[#687d77] transition hover:bg-white hover:text-[#087d68]"
                                        >

                                            <span className="w-5 text-[9px] font-bold text-[#a0b5ae]">
                                                {section.number}
                                            </span>

                                            <span>
                                                {section.title}
                                            </span>

                                        </a>

                                    ))}

                                </nav>


                                <div className="mt-5 border-t border-[#dfe9e4] pt-5">

                                    <Link
                                        href="/policy"
                                        className="flex items-center justify-between rounded-xl bg-white px-3 py-3 text-xs font-semibold text-[#355950] transition hover:text-[#087d68]"
                                    >
                                        Privacy Policy
                                        <span>→</span>
                                    </Link>

                                </div>

                            </div>

                        </aside>


                        {/* =====================================================
                CONTENT
            ===================================================== */}

                        <article className="min-w-0 max-w-4xl">

                            {/* 01 */}

                            <section
                                id="acceptance"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10 first:pt-0"
                            >

                                <SectionHeading
                                    number="01"
                                    title="Acceptance of Terms"
                                />

                                <Paragraph>
                                    By accessing or using the Al Huda Global Trade
                                    website, you acknowledge that you have read,
                                    understood and agree to be bound by these Terms of
                                    Service and any applicable laws and regulations.
                                </Paragraph>

                                <Paragraph>
                                    If you do not agree with these terms, please do not
                                    use the website or submit information through it.
                                </Paragraph>

                            </section>


                            {/* 02 */}

                            <section
                                id="website-use"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="02"
                                    title="Use of the Website"
                                />

                                <Paragraph>
                                    The website is provided primarily to present
                                    information about Al Huda Global Trade, its product
                                    categories, trade capabilities, services and
                                    international business activities, and to facilitate
                                    business enquiries.
                                </Paragraph>


                                <BulletList
                                    items={[
                                        "You agree to use the website only for lawful purposes.",
                                        "You must not knowingly use the website to submit false, misleading or fraudulent information.",
                                        "You must not attempt to interfere with the operation, security or availability of the website.",
                                        "You must not introduce malicious code, harmful files or other material intended to disrupt the website or its users.",
                                        "You must not use automated means to access or collect website information in a manner that places unreasonable load on the website.",
                                    ]}
                                />

                            </section>


                            {/* 03 */}

                            <section
                                id="business-enquiries"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="03"
                                    title="Business Enquiries"
                                />

                                <Paragraph>
                                    The website may allow you to submit product
                                    requirements, sourcing requests, quotation requests,
                                    service enquiries or other business information.
                                </Paragraph>


                                <Paragraph>
                                    When submitting an enquiry, you are responsible for
                                    providing information that is reasonably accurate and
                                    complete for the purpose of responding to your
                                    request.
                                </Paragraph>


                                <Paragraph>
                                    Submission of an enquiry does not by itself create a
                                    purchase order, supply agreement, agency relationship,
                                    partnership or other binding commercial contract.
                                </Paragraph>

                            </section>


                            {/* 04 */}

                            <section
                                id="products"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="04"
                                    title="Products & Information"
                                />

                                <Paragraph>
                                    Product categories and descriptions published on the
                                    website are provided for general business and
                                    informational purposes. Availability, specifications,
                                    grades, quantities, packaging, origin, certifications
                                    and other product characteristics may vary according
                                    to the specific supplier, product and transaction.
                                </Paragraph>


                                <Paragraph>
                                    Product information displayed on the website should
                                    not be treated as a standing offer to sell or a
                                    guarantee that a particular product is currently
                                    available.
                                </Paragraph>


                                <div className="mt-6 rounded-2xl border border-[#e1ebe7] bg-[#f8fbf9] p-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#087d68]">
                                        Product information
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#71827d]">
                                        Specific product requirements should be confirmed
                                        with our team before any commercial commitment is
                                        made.
                                    </p>

                                </div>

                            </section>


                            {/* 05 */}

                            <section
                                id="quotes"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="05"
                                    title="Quotations & Commercial Terms"
                                />

                                <Paragraph>
                                    Any pricing, availability, minimum order quantity,
                                    lead time, packaging, payment terms, Incoterms,
                                    freight arrangements or other commercial information
                                    provided through an enquiry is subject to
                                    confirmation.
                                </Paragraph>


                                <Paragraph>
                                    A quotation may be subject to validity periods,
                                    supplier confirmation, market conditions, freight
                                    costs, currency movements, regulatory requirements and
                                    other conditions stated in the relevant quotation.
                                </Paragraph>


                                <Paragraph>
                                    The commercial terms applicable to a transaction are
                                    those expressly agreed in the relevant written
                                    quotation, purchase order, contract or other
                                    applicable commercial documentation.
                                </Paragraph>

                            </section>


                            {/* 06 */}

                            <section
                                id="orders"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="06"
                                    title="Orders & Contracts"
                                />

                                <Paragraph>
                                    An order or business transaction becomes subject to
                                    the specific terms agreed between the relevant
                                    parties. Such terms may include product
                                    specifications, quantities, price, payment,
                                    inspection, packaging, delivery, Incoterms,
                                    documentation, claims procedures and other
                                    contractual conditions.
                                </Paragraph>


                                <Paragraph>
                                    In the event of a conflict between these website
                                    terms and the express terms of a signed or otherwise
                                    validly accepted commercial agreement, the specific
                                    commercial agreement will govern the relevant
                                    transaction to the extent permitted by applicable
                                    law.
                                </Paragraph>

                            </section>


                            {/* 07 */}

                            <section
                                id="quality"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="07"
                                    title="Quality & Compliance"
                                />

                                <Paragraph>
                                    Quality requirements differ according to the product,
                                    destination market, buyer specifications, supplier
                                    capabilities and applicable regulations.
                                </Paragraph>


                                <BulletList
                                    items={[
                                        "Specifications should be confirmed before commercial commitment.",
                                        "Inspection or testing may be arranged where required and agreed as part of the transaction.",
                                        "Certificates and supporting documents may vary by product and destination.",
                                        "Applicable regulatory, labeling, packaging and import requirements should be confirmed for the relevant market.",
                                        "Where third-party inspection or laboratory services are used, their respective terms and findings may apply.",
                                    ]}
                                />


                                <Paragraph>
                                    Further information about our quality approach is
                                    available on our{" "}
                                    <Link
                                        href="/quality-assurance"
                                        className="font-semibold text-[#087d68] hover:underline"
                                    >
                                        Quality Assurance
                                    </Link>{" "}
                                    page.
                                </Paragraph>

                            </section>


                            {/* 08 */}

                            <section
                                id="logistics"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="08"
                                    title="Logistics & Delivery"
                                />

                                <Paragraph>
                                    International shipments may involve carriers,
                                    freight forwarders, customs authorities, ports,
                                    inspection agencies, insurers, government authorities
                                    and other third parties.
                                </Paragraph>


                                <Paragraph>
                                    Transit times, freight availability, customs
                                    clearance and delivery schedules may be affected by
                                    circumstances outside the direct control of the
                                    parties, including carrier schedules, port conditions,
                                    regulatory requirements, customs procedures, weather
                                    events and other operational circumstances.
                                </Paragraph>


                                <Paragraph>
                                    Applicable shipping responsibilities and risk
                                    allocation will depend on the agreed Incoterm and the
                                    specific commercial documentation for the transaction.
                                </Paragraph>

                            </section>


                            {/* 09 */}

                            <section
                                id="intellectual-property"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="09"
                                    title="Intellectual Property"
                                />

                                <Paragraph>
                                    Unless otherwise stated, the website and its
                                    contents, including text, graphics, photographs,
                                    branding, logos, layout, visual elements and other
                                    materials, are owned by or used by Al Huda Global
                                    Trade under applicable rights.
                                </Paragraph>


                                <Paragraph>
                                    You may view and use the website for legitimate
                                    personal or business information purposes. You may
                                    not reproduce, modify, distribute, republish or
                                    commercially exploit website content without
                                    appropriate authorization, except where permitted by
                                    applicable law.
                                </Paragraph>

                            </section>


                            {/* 10 */}

                            <section
                                id="third-party"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="10"
                                    title="Third-Party Services"
                                />

                                <Paragraph>
                                    The website may reference or connect to third-party
                                    services, websites, payment providers, logistics
                                    providers, communication platforms or other external
                                    resources.
                                </Paragraph>


                                <Paragraph>
                                    Third-party services are subject to their own terms,
                                    policies and practices. Unless expressly stated
                                    otherwise, Al Huda Global Trade does not control the
                                    operation of third-party websites or services.
                                </Paragraph>

                            </section>


                            {/* 11 */}

                            <section
                                id="liability"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="11"
                                    title="Limitation of Liability"
                                />

                                <Paragraph>
                                    To the extent permitted by applicable law, the
                                    website and its general information are provided
                                    without representations that the website will always
                                    be uninterrupted, error-free or available.
                                </Paragraph>


                                <Paragraph>
                                    Al Huda Global Trade will not be responsible for
                                    losses arising solely from reliance on general website
                                    information where the relevant information has not
                                    been incorporated into an applicable commercial
                                    agreement.
                                </Paragraph>


                                <Paragraph>
                                    Nothing in these terms is intended to exclude or limit
                                    liability that cannot lawfully be excluded or limited
                                    under applicable law.
                                </Paragraph>

                            </section>


                            {/* 12 */}

                            <section
                                id="indemnification"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="12"
                                    title="Indemnification"
                                />

                                <Paragraph>
                                    To the extent permitted by applicable law, you agree
                                    to be responsible for losses, claims, liabilities,
                                    damages and reasonable expenses arising from your
                                    unlawful use of the website, violation of these terms,
                                    or submission of information that knowingly infringes
                                    the rights of another party.
                                </Paragraph>

                            </section>


                            {/* 13 */}

                            <section
                                id="termination"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="13"
                                    title="Suspension & Termination"
                                />

                                <Paragraph>
                                    We may restrict or suspend access to the website
                                    where reasonably necessary for security,
                                    maintenance, legal compliance, prevention of misuse
                                    or other legitimate operational reasons.
                                </Paragraph>


                                <Paragraph>
                                    Any rights and obligations arising under a separate
                                    commercial agreement remain governed by that
                                    agreement and applicable law.
                                </Paragraph>

                            </section>


                            {/* 14 */}

                            <section
                                id="privacy"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="14"
                                    title="Privacy"
                                />

                                <Paragraph>
                                    Information submitted through this website may be
                                    handled in accordance with our Privacy Policy.
                                </Paragraph>


                                <div className="mt-6">

                                    <Link
                                        href="/policy"
                                        className="inline-flex items-center gap-2 rounded-full border border-[#cfe0da] bg-[#f8fbf9] px-5 py-3 text-xs font-semibold text-[#087d68] transition hover:bg-[#edf7f3]"
                                    >
                                        Read Privacy Policy
                                        <span>→</span>
                                    </Link>

                                </div>

                            </section>


                            {/* 15 */}

                            <section
                                id="changes"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="15"
                                    title="Changes to These Terms"
                                />

                                <Paragraph>
                                    We may update these Terms of Service from time to
                                    time to reflect changes to the website, our services,
                                    legal requirements or operational practices.
                                </Paragraph>


                                <Paragraph>
                                    When updated, the revised version will be published
                                    on this page together with an updated effective date.
                                    Your continued use of the website after an update
                                    constitutes use subject to the revised terms, to the
                                    extent permitted by applicable law.
                                </Paragraph>

                            </section>


                            {/* 16 */}

                            <section
                                id="governing-law"
                                className="scroll-mt-8 border-b border-[#e4ebe8] py-10"
                            >

                                <SectionHeading
                                    number="16"
                                    title="Governing Law"
                                />

                                <Paragraph>
                                    These website terms are intended to be governed by
                                    the laws applicable in India, subject to applicable
                                    legal requirements.
                                </Paragraph>


                                <Paragraph>
                                    Any dispute relating specifically to use of this
                                    website will be subject to the jurisdiction and
                                    dispute-resolution provisions applicable under
                                    relevant Indian law.
                                </Paragraph>


                                <div className="mt-6 rounded-2xl border border-[#f0ddd0] bg-[#fff9f5] p-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6846]">
                                        Legal review
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#7b7069]">
                                        These website terms are general information and
                                        should be reviewed and adapted by qualified legal
                                        counsel before being treated as the company's
                                        final legal terms.
                                    </p>

                                </div>

                            </section>


                            {/* 17 */}

                            <section
                                id="contact"
                                className="scroll-mt-8 py-10"
                            >

                                <SectionHeading
                                    number="17"
                                    title="Contact"
                                />

                                <Paragraph>
                                    Questions regarding these Terms of Service can be
                                    directed to Al Huda Global Trade using the contact
                                    details below.
                                </Paragraph>


                                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                    <div className="rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-5">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                                            Headquarters
                                        </p>

                                        <p className="mt-3 text-sm leading-6 text-[#526d67]">
                                            S. No. 92, Crawford Market,
                                            <br />
                                            Office No. 102, Ground Floor,
                                            <br />
                                            Dadabhai Building, C.T. Division,
                                            <br />
                                            Mandvi, Mumbai,
                                            <br />
                                            Maharashtra 400003, India
                                        </p>

                                    </div>


                                    <div className="rounded-2xl border border-[#dfe9e4] bg-[#f8fbf9] p-5">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                                            Global Desk
                                        </p>

                                        <a
                                            href="mailto:alhudaworldtravels@gmail.com"
                                            className="mt-3 block text-sm font-medium text-[#526d67] transition hover:text-[#087d68]"
                                        >
                                            alhudaworldtravels@gmail.com
                                        </a>


                                        <a
                                            href="https://wa.me/919833206053"
                                            className="mt-2 block text-sm font-medium text-[#526d67] transition hover:text-[#087d68]"
                                        >
                                            WhatsApp: +91 98332 06053
                                        </a>

                                    </div>

                                </div>


                                <div className="mt-7">

                                    <Link
                                        href="/contact"
                                        className="inline-flex h-11 items-center justify-center rounded-full bg-[#087d68] px-6 text-xs font-semibold text-white transition hover:bg-[#056b59]"
                                    >
                                        Contact Al Huda
                                        <span className="ml-2">
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </section>

                        </article>

                    </div>

                </div>

            </section>


            {/* =========================================================
          FOOTER CTA
      ========================================================= */}

            <section className="bg-[#123b34]">

                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">

                    <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">

                        <div>

                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#72d0b7]">
                                Al Huda Global Trade
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                                Looking to start a trade enquiry?
                            </h2>

                        </div>


                        <div className="flex flex-col gap-3 sm:flex-row">

                            <Link
                                href="/contact"
                                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Contact Us
                            </Link>

                            <Link
                                href="/our-products"
                                className="inline-flex h-11 items-center justify-center rounded-full border border-[#4b756b] px-6 text-xs font-semibold text-white transition hover:bg-white/5"
                            >
                                Explore Products
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          MOBILE SECTION INDEX
      ========================================================= */}

            <div className="border-t border-[#dfe9e4] bg-[#f8fbf9] lg:hidden">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                        Quick navigation
                    </p>


                    <div className="mt-4 flex flex-wrap gap-2">

                        {sections.map((section) => (

                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="rounded-full border border-[#d7e4df] bg-white px-3 py-2 text-[10px] font-medium text-[#60766f]"
                            >
                                {section.number}. {section.title}
                            </a>

                        ))}

                    </div>

                </div>

            </div>

        </main>
    );
}

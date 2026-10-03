import Link from "next/link";

export const metadata = {
    title: "Security | Al Huda Global Trade",
    description:
        "Learn how Al Huda Global Trade approaches website, information and business enquiry security, and how to report a potential security issue.",
    robots: {
        index: true,
        follow: true,
    },
};

const securityAreas = [
    {
        number: "01",
        title: "Website Security",
        text: "We take reasonable measures to help protect the website against unauthorized access, misuse, disruption and other security risks.",
    },
    {
        number: "02",
        title: "Information Protection",
        text: "Information submitted through our website is handled for legitimate business and operational purposes and should be shared with appropriate care.",
    },
    {
        number: "03",
        title: "Access Controls",
        text: "Access to business information and systems should be limited according to operational requirements and authorized responsibilities.",
    },
    {
        number: "04",
        title: "Secure Communication",
        text: "Business enquiries may involve email, telephone, messaging and other communication channels. Sensitive information should be shared only where appropriate.",
    },
    {
        number: "05",
        title: "Third-Party Services",
        text: "External services used for communications, hosting, analytics or other functions may have their own security practices and terms.",
    },
    {
        number: "06",
        title: "Incident Response",
        text: "Potential security concerns can be reported to us so that the relevant issue can be reviewed and appropriate action considered.",
    },
];

const informationTypes = [
    {
        title: "Business Enquiries",
        text: "Product requirements, sourcing requests, quotation requests and related business communications.",
    },
    {
        title: "Contact Information",
        text: "Information such as name, company, email address, telephone number and other details voluntarily provided through contact channels.",
    },
    {
        title: "Commercial Information",
        text: "Where voluntarily provided, information relating to products, quantities, markets, specifications or trade requirements.",
    },
    {
        title: "Website Information",
        text: "Technical or usage information that may be collected through normal website operation or configured analytics services.",
    },
];

const goodPractices = [
    "Use the official Al Huda contact channels when submitting business enquiries.",
    "Check the recipient address before sending commercially sensitive documents.",
    "Do not submit passwords, payment-card numbers, authentication codes or other highly sensitive credentials through general enquiry forms.",
    "Verify payment instructions or changes to bank details through an established business communication channel before making a transfer.",
    "Keep your own devices, email accounts and business systems protected with appropriate security controls.",
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#173c35]">

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-48 -top-64 h-[720px] w-[720px] rounded-full bg-[#b7ddd1]/50 blur-3xl" />

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
                            Security
                        </span>
                    </nav>


                    <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-center">

                        {/* Hero copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Security
                                </span>

                            </div>


                            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">

                                Protecting the
                                <span className="block text-[#087d68]">
                                    way we connect.
                                </span>

                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                We take the security of our website, business
                                communications and information seriously. Our approach
                                focuses on reasonable safeguards, responsible access
                                and careful handling of information.
                            </p>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="#security-approach"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Our Security Approach
                                    <span className="ml-2">
                                        ↓
                                    </span>
                                </Link>

                                <Link
                                    href="#report"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bcd9d0] bg-white/60 px-7 text-sm font-semibold text-[#46645c] transition hover:bg-white"
                                >
                                    Report a Security Issue
                                </Link>

                            </div>

                        </div>


                        {/* Security visual */}

                        <div className="relative">

                            <div className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_30px_90px_rgba(20,70,60,0.12)] sm:p-8">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                            Security framework
                                        </p>

                                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#29483f]">
                                            Security is
                                            <br />
                                            part of the process.
                                        </h2>

                                    </div>


                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f4ef] text-lg text-[#087d68]">
                                        ✓
                                    </div>

                                </div>


                                <div className="mt-8 grid grid-cols-2 gap-3">

                                    {[
                                        ["01", "Protect"],
                                        ["02", "Control"],
                                        ["03", "Monitor"],
                                        ["04", "Respond"],
                                    ].map(([number, label]) => (

                                        <div
                                            key={number}
                                            className="rounded-2xl border border-[#e5ece9] bg-[#f9fbfa] p-4"
                                        >

                                            <span className="text-[9px] font-bold tracking-[0.1em] text-[#087d68]">
                                                {number}
                                            </span>

                                            <p className="mt-5 text-sm font-semibold text-[#49665e]">
                                                {label}
                                            </p>

                                        </div>

                                    ))}

                                </div>


                                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#edf7f3] px-4 py-3">

                                    <span className="h-2 w-2 rounded-full bg-[#087d68]" />

                                    <p className="text-xs leading-5 text-[#5d756e]">
                                        Responsible information handling
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          IMPORTANT NOTICE
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
                                    Security is a shared responsibility
                                </p>

                                <p className="mt-1 text-xs leading-6 text-[#687d77] sm:text-sm">
                                    We work to maintain appropriate safeguards, but no
                                    website, communication channel or internet
                                    transmission can be guaranteed to be completely
                                    secure. Users should also take reasonable steps to
                                    protect their own accounts, devices and information.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          SECURITY APPROACH
      ========================================================= */}

            <section
                id="security-approach"
                className="scroll-mt-8 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Our approach
                            </span>

                        </div>


                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Practical safeguards for a connected business.
                        </h2>


                        <p className="mt-5 text-sm leading-7 text-[#71827d] sm:text-base">
                            International trade involves information moving between
                            businesses, suppliers, logistics partners and other
                            parties. Security therefore needs to be considered
                            throughout the communication and information lifecycle.
                        </p>

                    </div>


                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {securityAreas.map((area) => (

                            <article
                                key={area.number}
                                className="group rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b9d9cf] hover:bg-white hover:shadow-[0_20px_50px_rgba(20,70,60,0.07)] sm:p-7"
                            >

                                <div className="flex items-center justify-between">

                                    <span className="text-[10px] font-bold tracking-[0.14em] text-[#087d68]">
                                        {area.number}
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e5f3ee] text-sm text-[#087d68] transition group-hover:bg-[#087d68] group-hover:text-white">
                                        →
                                    </span>

                                </div>


                                <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[#29483f]">
                                    {area.title}
                                </h3>


                                <p className="mt-3 text-sm leading-6 text-[#71827d]">
                                    {area.text}
                                </p>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
          INFORMATION HANDLING
      ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Information
                                </span>

                            </div>


                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">

                                What kind of information
                                <span className="block text-[#087d68]">
                                    may be involved?
                                </span>

                            </h2>


                            <p className="mt-5 max-w-md text-sm leading-7 text-[#71827d]">
                                The information we handle depends on how you interact
                                with Al Huda and the purpose of your communication.
                            </p>


                            <Link
                                href="/policy"
                                className="mt-7 inline-flex items-center text-xs font-semibold text-[#087d68] hover:underline"
                            >
                                Read our Privacy Policy
                                <span className="ml-2">
                                    →
                                </span>
                            </Link>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {informationTypes.map((item, index) => (

                                <div
                                    key={item.title}
                                    className="rounded-[1.5rem] border border-[#dfe9e4] bg-white p-6"
                                >

                                    <div className="flex items-center gap-3">

                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6f4ef] text-[9px] font-bold text-[#087d68]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="text-sm font-semibold text-[#355950]">
                                            {item.title}
                                        </h3>

                                    </div>


                                    <p className="mt-4 text-xs leading-6 text-[#7b8d87]">
                                        {item.text}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          USER SECURITY
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    For customers & visitors
                                </span>

                            </div>


                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                A few simple ways to stay secure.
                            </h2>


                            <p className="mt-5 max-w-md text-sm leading-7 text-[#71827d]">
                                Security also depends on how information is shared and
                                how communication requests are verified.
                            </p>

                        </div>


                        <div className="rounded-[2rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 sm:p-8">

                            <ul className="space-y-5">

                                {goodPractices.map((practice, index) => (

                                    <li
                                        key={index}
                                        className="flex gap-4"
                                    >

                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#e5f3ee] text-[9px] font-bold text-[#087d68]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <p className="pt-1 text-sm leading-6 text-[#617771]">
                                            {practice}
                                        </p>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          PAYMENT FRAUD / VERIFICATION
      ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Commercial security
                                </span>

                            </div>


                            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Verify important payment or account changes.
                            </h2>


                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#687d77] sm:text-base">
                                International business communications can involve
                                sensitive payment and banking information. If you
                                receive a request to change payment instructions, bank
                                details or other important commercial information,
                                independently verify the request through an established
                                Al Huda communication channel before taking action.
                            </p>

                        </div>


                        <div className="rounded-[1.75rem] border border-[#d3e5de] bg-white p-6 shadow-[0_20px_60px_rgba(20,70,60,0.06)]">

                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff1e8] text-[#a96942]">
                                    !
                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-[#49655d]">
                                        Do not rely on an unexpected change alone.
                                    </p>

                                    <p className="mt-2 text-xs leading-6 text-[#788b85]">
                                        Verify important commercial instructions using a
                                        previously established contact method.
                                    </p>

                                </div>

                            </div>


                            <Link
                                href="/contact"
                                className="mt-6 inline-flex text-xs font-semibold text-[#087d68] hover:underline"
                            >
                                Contact Al Huda securely
                                <span className="ml-2">
                                    →
                                </span>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          WEBSITE / COMMERCIAL DISTINCTION
      ========================================================= */}

            <section className="bg-[#123b34]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#72d0b7]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#72d0b7]">
                                    Scope
                                </span>

                            </div>


                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                                Website security and shipment security are different.
                            </h2>


                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#b6d1c9]">
                                Website security concerns the protection and operation
                                of our digital presence and information channels.
                                Security requirements for an individual international
                                shipment are governed by the relevant product,
                                logistics arrangements, contractual terms and
                                applicable regulations.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#72d0b7]">
                                    Website
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[#b7d0c8]">
                                    Website access, enquiry forms, communications and
                                    information handling.
                                </p>

                            </div>


                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#72d0b7]">
                                    Trade
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[#b7d0c8]">
                                    Product, shipment, customs, documentation and
                                    transaction-specific requirements.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          REPORT ISSUE
      ========================================================= */}

            <section
                id="report"
                className="scroll-mt-8 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#dce8e3] bg-[#f8fbf9] p-7 sm:p-10 lg:p-12">

                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#087d68]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                        Security reporting
                                    </span>

                                </div>


                                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                    Found something that looks wrong?
                                </h2>


                                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#71827d] sm:text-base">
                                    If you believe you have identified a security
                                    vulnerability, suspicious activity or an issue
                                    affecting the security of this website, please
                                    contact us with enough information for our team to
                                    understand and investigate the issue.
                                </p>


                                <p className="mt-4 max-w-2xl text-xs leading-6 text-[#82928d]">
                                    Please do not include passwords, payment credentials,
                                    authentication codes or other unnecessary sensitive
                                    information in a security report.
                                </p>

                            </div>


                            <a
                                href="mailto:alhudaworldtravels@gmail.com?subject=Security%20Issue%20Report"
                                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                            >
                                Report an Issue
                                <span className="ml-2">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          RELATED PAGES
      ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">

                    <div className="mb-8">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                            Related information
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#153b35]">
                            More from Al Huda
                        </h2>

                    </div>


                    <div className="grid gap-3 md:grid-cols-3">

                        <Link
                            href="/policy"
                            className="group rounded-[1.5rem] border border-[#dfe9e4] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b9d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.06)]"
                        >

                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#087d68]">
                                Privacy
                            </p>

                            <h3 className="mt-4 text-base font-semibold text-[#355950]">
                                Privacy Policy
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-[#7b8d87]">
                                Learn how information submitted through our website is
                                handled.
                            </p>

                            <span className="mt-5 block text-xs font-semibold text-[#087d68]">
                                Read policy →
                            </span>

                        </Link>


                        <Link
                            href="/terms"
                            className="group rounded-[1.5rem] border border-[#dfe9e4] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b9d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.06)]"
                        >

                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#087d68]">
                                Legal
                            </p>

                            <h3 className="mt-4 text-base font-semibold text-[#355950]">
                                Terms of Service
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-[#7b8d87]">
                                Review the terms governing use of the Al Huda website.
                            </p>

                            <span className="mt-5 block text-xs font-semibold text-[#087d68]">
                                Read terms →
                            </span>

                        </Link>


                        <Link
                            href="/contact"
                            className="group rounded-[1.5rem] border border-[#dfe9e4] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b9d9cf] hover:shadow-[0_20px_50px_rgba(20,70,60,0.06)]"
                        >

                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#087d68]">
                                Support
                            </p>

                            <h3 className="mt-4 text-base font-semibold text-[#355950]">
                                Contact Al Huda
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-[#7b8d87]">
                                Get in touch regarding a product, service or business
                                enquiry.
                            </p>

                            <span className="mt-5 block text-xs font-semibold text-[#087d68]">
                                Contact us →
                            </span>

                        </Link>

                    </div>

                </div>

            </section>


            {/* =========================================================
          FINAL CTA
      ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">

                    <div className="rounded-[2rem] bg-[#e8f3ef] px-6 py-14 text-center sm:px-10">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                            Al Huda Global Trade
                        </p>


                        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Questions about security or information handling?
                        </h2>


                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#71827d]">
                            Contact our team if you have a security concern or need
                            clarification about the appropriate channel for a
                            business communication.
                        </p>


                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                            >
                                Contact Us
                                <span className="ml-2">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/policy"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-[#bfd9d0] bg-white px-7 text-sm font-semibold text-[#46645c] transition hover:bg-[#f8fbf9]"
                            >
                                Privacy Policy
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

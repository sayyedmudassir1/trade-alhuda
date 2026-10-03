import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    Check,
    ChevronRight,
    Clock3,
    Globe,
    Lock,
    FileText,
    ShieldCheck,
    Sparkles,
    Ship,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Global Trade & Logistics Platform | Key Features",
    description:
        "Streamline your import & export operations with automated customs clearance, real-time container tracking, and end-to-end supply chain visibility.",
    alternates: {
        canonical: "/features",
    },
    openGraph: {
        title: "Global Trade & Logistics Platform | Key Features",
        description:
            "Streamline your import & export operations with automated customs clearance, real-time container tracking, and end-to-end supply chain visibility.",
        type: "website",
        images: [
            {
                url: "/images/trade/features-og.webp",
                width: 1200,
                height: 630,
                alt: "Global Import & Export Platform key features",
            },
        ],
    },
};

const primaryFeatures = [
    {
        id: "global-freight",
        icon: Ship,
        eyebrow: "01",
        title: "End-to-End Freight & Logistics Management",
        description:
            "Coordinate ocean, air, rail, and road freight from a single dashboard. Book shipments, compare carrier rates, and manage documentation effortlessly across international borders.",
        benefits: [
            "Real-time multi-modal carrier rate comparison",
            "Automated Bill of Lading (BoL) and commercial invoice handling",
            "Centralized carrier communication and booking history",
        ],
        image: "/images/trade/features/freight-management.webp",
        imageAlt:
            "Global Trade platform showing active ocean freight shipments, routes, and carrier status",
        theme: "from-blue-500/10 via-primary/5 to-transparent",
    },
    {
        id: "customs-compliance",
        icon: FileText,
        eyebrow: "02",
        title: "Automated Customs Clearance & Compliance",
        description:
            "Eliminate border delays and costly fines. Our system validates documentation against international trade regulations, tariff codes (HS Codes), and regional import-export laws.",
        benefits: [
            "Automated HS code classification and duty calculation",
            "Digital customs document filing and regulatory checks",
            "Instant alerts on policy changes and tariff updates",
        ],
        image: "/images/trade/features/customs-compliance.webp",
        imageAlt:
            "Automated customs clearance dashboard highlighting tariff codes and compliance checks",
        theme: "from-violet-500/10 via-primary/5 to-transparent",
    },
    {
        id: "real-time-tracking",
        icon: Globe,
        eyebrow: "03",
        title: "Live GPS Container & Cargo Tracking",
        description:
            "Gain complete visibility over your supply chain. Track vessel locations, port congestion delays, and estimated times of arrival (ETAs) with precision telemetry data.",
        benefits: [
            "Satellite and IoT sensor container tracking",
            "Predictive ETA alerts for proactive risk mitigation",
            "Port congestion and weather routing analytics",
        ],
        image: "/images/trade/features/cargo-tracking.webp",
        imageAlt:
            "Live global map interface displaying active container shipping lanes and port weather statuses",
        theme: "from-emerald-500/10 via-primary/5 to-transparent",
    },
    {
        id: "trade-analytics",
        icon: BarChart3,
        eyebrow: "04",
        title: "Financial Analytics & Cost Optimization",
        description:
            "Analyze freight spend, duty expenses, and supplier performance. Turn complex shipping data into actionable insights to negotiate better rates and improve margins.",
        benefits: [
            "Comprehensive freight spend and duty audit reports",
            "Supplier reliability and delivery performance scoring",
            "Multi-currency financial reconciliation and invoicing",
        ],
        image: "/images/trade/features/trade-analytics.webp",
        imageAlt:
            "Trade analytics dashboard displaying shipping cost breakdowns, supplier scorecards, and trends",
        theme: "from-orange-500/10 via-primary/5 to-transparent",
    },
];

const supportingFeatures = [
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description:
            "Protect sensitive trade secrets, bills of lading, and financial data with bank-grade encryption and secure cloud architecture.",
    },
    {
        icon: Lock,
        title: "Trade Privacy",
        description:
            "Maintain absolute control over vendor agreements, proprietary supply chains, and confidential commercial pricing.",
    },
    {
        icon: Clock3,
        title: "Accelerated Turnaround",
        description:
            "Reduce port dwell times and document processing delays from days to minutes with automated workflows.",
    },
    {
        icon: Sparkles,
        title: "Scalable Global Network",
        description:
            "A resilient platform built to scale seamlessly whether you operate regionally or manage multi-continental import/export hubs.",
    },
];

const workflowSteps = [
    {
        number: "01",
        title: "Connect Your Supply Chain",
        description:
            "Integrate your ERP, warehouses, freight forwarders, and customs brokers into one unified workspace.",
    },
    {
        number: "02",
        title: "Book & File Documentation",
        description:
            "Generate compliant shipping paperwork, commercial invoices, and customs declarations automatically.",
    },
    {
        number: "03",
        title: "Track in Real-Time",
        description:
            "Monitor your cargo across oceans, borders, and final-mile delivery hubs with live tracking updates.",
    },
    {
        number: "04",
        title: "Optimize & Scale",
        description:
            "Review trade analytics, reduce demurrage fees, and continuously improve delivery performance.",
    },
];

export default function FeaturesPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-background text-foreground">
            {/* =========================================================
                HERO SECTION
            ========================================================== */}
            <section
                aria-labelledby="features-page-title"
                className="relative isolate"
            >
                {/* Background decoration */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden"
                >
                    <div className="absolute left-1/2 top-[-250px] h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            Global Trade Intelligence. Simplified Execution.
                        </div>

                        <h1
                            id="features-page-title"
                            className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-7xl"
                        >
                            Everything you need to master{" "}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                global import & export.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            Automate customs compliance, track container shipments in real-time,
                            and optimize your international supply chain from origin to final destination.
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/signup"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Get started free
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/demo"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-6 text-sm font-semibold transition hover:bg-muted"
                            >
                                Request a live demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FEATURE OVERVIEW GRID
            ========================================================== */}
            <section
                aria-labelledby="feature-overview-title"
                className="border-y border-border/60 bg-muted/20"
            >
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {primaryFeatures.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <a
                                    key={feature.id}
                                    href={`#${feature.id}`}
                                    className="group rounded-2xl border border-border/60 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                    </div>

                                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                        {feature.eyebrow}
                                    </p>

                                    <h2 className="mt-2 text-lg font-semibold tracking-tight">
                                        {feature.title}
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                FEATURE DEEP DIVES
            ========================================================== */}
            <section
                aria-labelledby="feature-deep-dives-title"
                className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
            >
                <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-24">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Platform Capabilities
                    </p>

                    <h2
                        id="feature-deep-dives-title"
                        className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                    >
                        Engineered for modern trade and logistics
                    </h2>

                    <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                        Remove compliance bottlenecks, eliminate manual paperwork, and gain absolute
                        transparency across your global import and export pipelines.
                    </p>
                </div>

                <div className="space-y-24 lg:space-y-36">
                    {primaryFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        const reversed = index % 2 === 1;

                        return (
                            <article
                                id={feature.id}
                                key={feature.id}
                                className="scroll-mt-24"
                            >
                                <div
                                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed
                                            ? "lg:[&>*:first-child]:order-2"
                                            : ""
                                        }`}
                                >
                                    {/* Product image */}
                                    <div
                                        className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br ${feature.theme} p-2 shadow-2xl shadow-black/5`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/0 to-background/20" />

                                        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background">
                                            <Image
                                                src={feature.image}
                                                alt={feature.imageAlt}
                                                width={1600}
                                                height={1000}
                                                className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                            {feature.eyebrow}
                                        </p>

                                        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                                            {feature.description}
                                        </p>

                                        <ul className="mt-7 space-y-3">
                                            {feature.benefits.map((benefit) => (
                                                <li
                                                    key={benefit}
                                                    className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                                                >
                                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                        <Check className="h-3 w-3" />
                                                    </span>

                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================
                HOW IT WORKS / WORKFLOW
            ========================================================== */}
            <section
                aria-labelledby="workflow-title"
                className="border-y border-border/60 bg-muted/20"
            >
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Seamless Operation
                        </p>

                        <h2
                            id="workflow-title"
                            className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            From port of origin to final delivery.
                        </h2>

                        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                            Manage your complete shipping lifecycle through four intuitive,
                            automated steps designed for global enterprises.
                        </p>
                    </div>

                    <div className="relative mx-auto mt-16 max-w-5xl">
                        {/* Desktop connector */}
                        <div
                            aria-hidden="true"
                            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-border lg:block"
                        />

                        <div className="grid gap-10 lg:grid-cols-4">
                            {workflowSteps.map((step) => (
                                <div
                                    key={step.number}
                                    className="relative text-center"
                                >
                                    <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-bold shadow-sm">
                                        {step.number}
                                    </div>

                                    <h3 className="mt-6 font-semibold tracking-tight">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SUPPORTING FEATURES
            ========================================================== */}
            <section
                aria-labelledby="supporting-features-title"
                className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
            >
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Built-in reliability
                    </p>

                    <h2
                        id="supporting-features-title"
                        className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Designed for high-stakes international trade
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        Your global business demands security, privacy, and continuous uptime.
                        We protect every shipment and transaction.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {supportingFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-border/60 bg-card p-6 transition hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-5 font-semibold tracking-tight">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================== */}
            <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 sm:py-20 lg:px-16">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_30%)]"
                    />

                    <div className="relative mx-auto max-w-3xl text-center">
                        <p className="text-sm font-medium text-primary-foreground/70">
                            Ready to scale your shipments?
                        </p>

                        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Transform your import & export workflow today.
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-primary-foreground/75 sm:text-lg">
                            Join leading global traders who trust our platform for seamless
                            customs clearance, tracking, and freight coordination.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link
                                href="/signup"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-background px-6 text-sm font-semibold text-foreground transition hover:bg-background/90"
                            >
                                Get started free
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex h-11 items-center justify-center rounded-xl border border-primary-foreground/25 px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                            >
                                Talk to our trade experts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
    Boxes,
    Globe2,
    FileCheck2,
} from "lucide-react";

const capabilities = [
    {
        number: "01",
        icon: Globe2,
        title: "Global Sourcing",
        description:
            "We help connect international buyers with suitable producers, manufacturers and suppliers across India.",
    },
    {
        number: "02",
        icon: BadgeCheck,
        title: "Quality & Specifications",
        description:
            "Product requirements, specifications and supplier information are reviewed carefully to support informed sourcing.",
    },
    {
        number: "03",
        icon: Boxes,
        title: "Export Coordination",
        description:
            "From commercial requirements to shipment planning, we help coordinate the moving parts of an international trade enquiry.",
    },
    {
        number: "04",
        icon: FileCheck2,
        title: "Documentation Support",
        description:
            "Clear communication and appropriate trade documentation help keep the process organised from enquiry through shipment.",
    },
];

export default function WhyAlHuda() {
    return (
        <section className="relative overflow-hidden bg-[#f8fbf9] py-20 sm:py-24 lg:py-28">
            {/* Decorative background */}

            <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#dcefe8]/60 blur-3xl" />

            <div className="absolute -bottom-48 left-0 h-[400px] w-[400px] rounded-full bg-white blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

                    {/* =====================================================
                    LEFT — INTRO
                ===================================================== */}

                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-9 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                Why Al Huda
                            </span>
                        </div>

                        <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#12342f] sm:text-4xl lg:text-5xl">
                            Built around the way
                            <span className="block text-[#07846d]">
                                international trade works.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-7 text-[#607872] sm:text-lg sm:leading-8">
                            International sourcing is rarely just about finding
                            a product. It is about bringing together the right
                            supplier, specifications, communication,
                            documentation and logistics.
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-[#7a8e89]">
                            Al Huda brings these requirements together to give
                            buyers a clearer starting point for sourcing from
                            India.
                        </p>

                        <Link
                            href="/about-us"
                            className="group mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(8,125,104,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#056b59] hover:shadow-[0_14px_35px_rgba(8,125,104,0.22)]"
                        >
                            Discover Al Huda

                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>


                    {/* =====================================================
                    RIGHT — CAPABILITIES
                ===================================================== */}

                    <div className="grid gap-4 sm:grid-cols-2">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.number}
                                    className="group rounded-[1.5rem] border border-[#dfeae5] bg-white p-6 shadow-[0_10px_35px_rgba(20,70,60,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#c6ddd5] hover:shadow-[0_20px_50px_rgba(20,70,60,0.08)] sm:p-7"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5f0] text-[#087d68] transition-colors duration-300 group-hover:bg-[#087d68] group-hover:text-white">
                                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                                        </div>

                                        <span className="text-[10px] font-bold tracking-[0.16em] text-[#9ab4ad]">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[#193e37]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6b817b]">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 h-px w-8 bg-[#b9d9d0] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087d68]" />
                                </div>
                            );
                        })}
                    </div>

                </div>


                {/* =====================================================
                BOTTOM TRUST STRIP
            ===================================================== */}

                <div className="mt-14 border-t border-[#dce8e3] pt-8 sm:mt-16 sm:pt-10">
                    <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-[#dce8e3]">

                        <div className="sm:px-8 sm:first:pl-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087d68]">
                                India
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[#6c817b]">
                                Sourcing across a diverse Indian supplier base.
                            </p>
                        </div>

                        <div className="sm:px-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087d68]">
                                International
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[#6c817b]">
                                Requirements built around international buyers.
                            </p>
                        </div>

                        <div className="sm:px-8 sm:last:pr-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#087d68]">
                                End-to-end
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[#6c817b]">
                                Sourcing, coordination and documentation support.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );


}
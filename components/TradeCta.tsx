import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function TradeCta() {
    return (
        <section
            aria-labelledby="trade-cta-title"
            className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28"
        >
            <div className="mx-auto max-w-7xl">

                <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#123b34] shadow-[0_30px_90px_rgba(18,59,52,0.16)]">

                    {/* =====================================================
                        BACKGROUND
                    ===================================================== */}

                    <div
                        aria-hidden="true"
                        className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#087d68]/45 blur-3xl"
                    />

                    <div
                        aria-hidden="true"
                        className="absolute -bottom-48 left-[35%] h-[24rem] w-[24rem] rounded-full bg-[#4fc2a7]/10 blur-3xl"
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(115,209,184,0.16),transparent_30%),linear-gradient(120deg,transparent_45%,rgba(255,255,255,0.025))]"
                    />

                    {/* Subtle grid texture */}

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                            backgroundSize: "42px 42px",
                        }}
                    />


                    {/* =====================================================
                        CONTENT
                    ===================================================== */}

                    <div className="relative z-10 grid gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-16 lg:py-14">

                        {/* =================================================
                            COPY
                        ================================================= */}

                        <div className="max-w-2xl">

                            <div className="flex items-center gap-3">

                                <span
                                    aria-hidden="true"
                                    className="h-px w-8 bg-[#73d1b8]"
                                />

                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#73d1b8]"
                                >
                                    Global sourcing & trade
                                </p>

                            </div>


                            <h2
                                id="trade-cta-title"
                                className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]"
                            >
                                Have a product requirement?
                                <span className="block text-[#8be0ca]">
                                    Let&apos;s discuss it.
                                </span>
                            </h2>


                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#b9d2cc] sm:text-base"
                            >
                                Tell us what you are looking for, where you need it
                                delivered and any product specifications you already
                                have. We can start the conversation around suitable
                                sourcing and trade options.
                            </p>


                            {/* Trust / context points */}

                            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

                                <TrustPoint text="Product sourcing" />

                                <TrustPoint text="International buyers" />

                                <TrustPoint text="Commercial requirements" />

                            </div>

                        </div>


                        {/* =================================================
                            ACTIONS
                        ================================================= */}

                        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">

                            <Link
                                href="/contact?subject=Product%20Sourcing%20Enquiry"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#effaf6] hover:shadow-[0_14px_35px_rgba(0,0,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#123b34]"
                            >
                                <span>
                                    Start an Enquiry
                                </span>

                                <ArrowRight
                                    aria-hidden="true"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                />

                            </Link>


                            <a
                                href="https://wa.me/919833206053"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#123b34]"
                            >
                                <MessageCircle
                                    aria-hidden="true"
                                    className="h-4 w-4 text-[#8be0ca]"
                                />

                                <span>
                                    WhatsApp Us
                                </span>

                            </a>

                        </div>

                    </div>


                    {/* =====================================================
                        BOTTOM MICRO COPY
                    ===================================================== */}

                    <div className="relative z-10 border-t border-white/10 px-7 py-4 sm:px-10 lg:px-16">

                        <p className="text-[10px] leading-5 text-[#8eaea6]">
                            Share your product, specifications, quantity, destination
                            market and preferred timeline where available.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}


/* ===============================================================
   TRUST POINT
   =============================================================== */

function TrustPoint({
    text,
}: {
    text: string;
}) {
    return (
        <span className="inline-flex items-center gap-2 text-xs font-medium text-[#b9d2cc]">

            <span
                aria-hidden="true"
                className="flex h-4 w-4 items-center justify-center rounded-full bg-[#087d68]/60 text-[9px] text-[#9ce4d1]"
            >
                ✓
            </span>

            {text}

        </span>
    );
}

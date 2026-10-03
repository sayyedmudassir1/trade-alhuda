import {
    ArrowUpRight,
    Globe2,
    MapPin,
    MoveUpRight,
} from "lucide-react";

const destinations = [
    {
        name: "India",
        type: "Home Market",
    },
    {
        name: "United Arab Emirates",
        type: "Middle East",
    },
    {
        name: "United Kingdom",
        type: "Europe",
    },
    {
        name: "United States",
        type: "North America",
    },
    {
        name: "Canada",
        type: "North America",
    },
    {
        name: "Germany",
        type: "Europe",
    },
    {
        name: "European Union",
        type: "Europe",
    },
    {
        name: "Singapore",
        type: "Asia Pacific",
    },
    {
        name: "Australia",
        type: "Asia Pacific",
    },
    {
        name: "Middle East",
        type: "Regional Focus",
    },
    {
        name: "Asia Pacific",
        type: "Regional Focus",
    },
    {
        name: "Global Markets",
        type: "International",
    },
];

export default function ConnectingMarkets() {
    return (
        <section aria-labelledby="connecting-markets-title" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28" >
            {/* =========================================================
BACKGROUND
========================================================= */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#e7f3ee] blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#edf7f3] blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

                <div className="relative overflow-hidden rounded-[2rem] border border-[#dce9e4] bg-[#f8fbf9] shadow-[0_20px_70px_rgba(20,70,60,0.055)]">

                    {/* Subtle grid */}

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#087d68 1px, transparent 1px), linear-gradient(90deg, #087d68 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />

                    {/* Top accent */}

                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#087d68]/50 to-transparent"
                    />

                    <div className="relative grid gap-14 p-7 sm:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:p-14 xl:p-16">

                        {/* =================================================
                        LEFT — STORY
                    ================================================= */}

                        <div className="flex flex-col justify-center">

                            {/* Eyebrow */}

                            <div className="flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-px w-9 bg-[#087d68]"
                                />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Global Reach
                                </span>
                            </div>

                            {/* Globe */}

                            <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dce9e4] bg-white text-[#087d68] shadow-[0_10px_30px_rgba(20,70,60,0.06)]">
                                <Globe2
                                    className="h-7 w-7"
                                    strokeWidth={1.6}
                                />
                            </div>

                            {/* Heading */}

                            <h2
                                id="connecting-markets-title"
                                className="mt-7 max-w-xl text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#12342f] sm:text-4xl lg:text-5xl"
                            >
                                Connecting India with
                                <span className="block text-[#07846d]">
                                    international markets.
                                </span>
                            </h2>

                            {/* Description */}

                            <p className="mt-6 max-w-xl text-base leading-7 text-[#607872] sm:text-lg sm:leading-8">
                                From our base in India, we support sourcing and
                                trade requirements for businesses looking to
                                work across international markets.
                            </p>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-[#7a8e89]">
                                Every market has its own product preferences,
                                commercial expectations and documentation
                                requirements. Our approach starts by
                                understanding the requirement and coordinating
                                the right sourcing path.
                            </p>

                            {/* Stats */}

                            <div className="mt-9 grid max-w-md grid-cols-2 gap-3">

                                <div className="rounded-2xl border border-[#dce9e4] bg-white p-5">
                                    <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                        12+
                                    </div>

                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7b918b]">
                                        Market areas
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#dce9e4] bg-white p-5">
                                    <div className="text-2xl font-semibold tracking-tight text-[#087d68]">
                                        01
                                    </div>

                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7b918b]">
                                        Sourcing base
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* =================================================
                        RIGHT — MARKETS
                    ================================================= */}

                        <div>

                            {/* Header */}

                            <div className="mb-6 flex items-end justify-between gap-5">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                        Markets of focus
                                    </p>

                                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#173b35]">
                                        A growing international network.
                                    </h3>
                                </div>

                                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dce9e4] bg-white text-[#087d68] sm:flex">
                                    <ArrowUpRight
                                        className="h-4 w-4"
                                        strokeWidth={1.8}
                                    />
                                </div>

                            </div>


                            {/* Market cards */}

                            <ul
                                aria-label="International markets and regions"
                                className="grid gap-3 sm:grid-cols-2"
                            >
                                {destinations.map((destination, index) => (
                                    <li key={destination.name}>
                                        <div className="group relative flex min-h-[76px] items-center gap-3 overflow-hidden rounded-2xl border border-[#dfeae5] bg-white p-3.5 shadow-[0_6px_25px_rgba(20,70,60,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b9d9cf] hover:shadow-[0_14px_35px_rgba(20,70,60,0.07)]">

                                            {/* Number */}

                                            <span className="absolute right-3 top-2 text-[9px] font-bold tracking-[0.12em] text-[#c3d5d0]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            {/* Location icon */}

                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e8f5f0] text-[#087d68] transition duration-300 group-hover:bg-[#087d68] group-hover:text-white">
                                                <MapPin
                                                    className="h-4 w-4"
                                                    strokeWidth={1.7}
                                                />
                                            </span>

                                            {/* Content */}

                                            <span className="min-w-0 flex-1 pr-4">
                                                <span className="block truncate text-sm font-semibold text-[#294b44]">
                                                    {destination.name}
                                                </span>

                                                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-[#8a9d98]">
                                                    {destination.type}
                                                </span>
                                            </span>

                                            {/* Arrow */}

                                            <MoveUpRight
                                                aria-hidden="true"
                                                className="h-4 w-4 shrink-0 text-[#c3d2ce] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087d68]"
                                                strokeWidth={1.7}
                                            />

                                            {/* Hover line */}

                                            <span
                                                aria-hidden="true"
                                                className="absolute bottom-0 left-0 top-0 w-0.5 origin-bottom scale-y-0 bg-[#087d68] transition-transform duration-300 group-hover:scale-y-100"
                                            />

                                        </div>
                                    </li>
                                ))}
                            </ul>


                            {/* Bottom message */}

                            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#dce9e4] bg-[#edf7f3] p-4">

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087d68] text-white">
                                    <Globe2
                                        className="h-4 w-4"
                                        strokeWidth={1.7}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#294b44]">
                                        One sourcing relationship, many
                                        possibilities.
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-[#718680]">
                                        Tell us where you are buying from and
                                        what you need. We can discuss the
                                        sourcing and trade requirements around
                                        your market.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );


}
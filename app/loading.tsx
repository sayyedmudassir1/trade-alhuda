import { cn } from "@/lib/utils";

function Skeleton({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "animate-pulse rounded-lg bg-[#e8f1ee]",
                className
            )}
        />
    );
}

export default function Loading() {
    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#f8fbf9]
            "
            aria-label="Loading"
        >
            {/* Ambient glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[520px]
                    w-[520px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#dff1ea]/60
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-80
                    w-80
                    rounded-full
                    bg-[#e8f5f0]/70
                    blur-3xl
                "
            />

            {/* Content */}

            <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8">
                {/* Header skeleton */}

                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-9 w-9 rounded-xl" />
                        <Skeleton className="h-3 w-24 rounded-full" />
                    </div>

                    <div className="hidden items-center gap-3 sm:flex">
                        <Skeleton className="h-8 w-16 rounded-full" />
                        <Skeleton className="h-8 w-16 rounded-full" />
                        <Skeleton className="h-8 w-16 rounded-full" />
                    </div>
                </header>

                {/* Main loading area */}

                <div className="flex flex-1 items-center justify-center py-16">
                    <div className="w-full max-w-3xl">
                        {/* Loading indicator */}

                        <div className="flex justify-center">
                            <div
                                className="
                                    relative
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[#cfe2db]
                                    bg-white/80
                                    shadow-[0_15px_40px_rgba(20,70,60,0.08)]
                                    backdrop-blur-md
                                "
                            >
                                <span
                                    className="
                                        h-5
                                        w-5
                                        animate-spin
                                        rounded-full
                                        border-2
                                        border-[#d5e5df]
                                        border-t-[#087d68]
                                    "
                                />

                                <span
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        inset-0
                                        rounded-2xl
                                        bg-[#dff1ea]/20
                                        blur-xl
                                    "
                                />
                            </div>
                        </div>

                        {/* Loading message */}

                        <div className="mt-7 text-center">
                            <div
                                className="
                                    mx-auto
                                    h-3
                                    w-32
                                    animate-pulse
                                    rounded-full
                                    bg-[#d5e5df]
                                "
                            />

                            <div
                                className="
                                    mx-auto
                                    mt-3
                                    h-2
                                    w-52
                                    animate-pulse
                                    rounded-full
                                    bg-[#e1ece8]
                                "
                            />
                        </div>

                        {/* Content skeleton */}

                        <div
                            className="
                                mt-12
                                overflow-hidden
                                rounded-[1.5rem]
                                border
                                border-[#dce9e4]
                                bg-white/70
                                p-4
                                shadow-[0_20px_60px_rgba(20,70,60,0.06)]
                                backdrop-blur-md
                                sm:p-6
                            "
                        >
                            {/* Large visual */}

                            <Skeleton
                                className="
                                    h-[220px]
                                    w-full
                                    rounded-2xl
                                    sm:h-[300px]
                                    lg:h-[360px]
                                "
                            />

                            {/* Text */}

                            <div className="mt-6 space-y-3">
                                <Skeleton className="h-4 w-2/5" />
                                <Skeleton className="h-3 w-4/5" />
                                <Skeleton className="h-3 w-3/5" />
                            </div>

                            {/* Bottom controls */}

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-7 w-7 rounded-full" />
                                    <Skeleton className="h-2 w-16 rounded-full" />
                                </div>

                                <div className="flex gap-2">
                                    <Skeleton className="h-7 w-7 rounded-full" />
                                    <Skeleton className="h-7 w-7 rounded-full" />
                                    <Skeleton className="h-7 w-7 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Progress accent */}

                        <div className="mx-auto mt-8 h-1 w-32 overflow-hidden rounded-full bg-[#dce9e4]">
                            <div
                                className="
                                    h-full
                                    w-1/2
                                    animate-[loading_1.4s_ease-in-out_infinite]
                                    rounded-full
                                    bg-[#087d68]
                                "
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}

                <div
                    aria-hidden="true"
                    className="
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-[#087d68]/15
                        to-transparent
                    "
                />
            </div>

            <style>{`
                @keyframes loading {
                    0% {
                        transform: translateX(-120%);
                    }

                    50% {
                        transform: translateX(120%);
                    }

                    100% {
                        transform: translateX(260%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-spin,
                    .animate-pulse,
                    .animate-\\[loading_1\\.4s_ease-in-out_infinite\\] {
                        animation: none !important;
                    }
                }
            `}</style>
        </main>
    );
}

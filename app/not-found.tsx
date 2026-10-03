"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f8fbf9] text-[#345850]">
            {/* Ambient background */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-150
                    w-150
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#dff1ea]/70
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
                    bg-[#e8f5f0]
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-32
                    h-96
                    w-96
                    rounded-full
                    bg-[#dff1ea]/50
                    blur-3xl
                "
            />

            {/* Content */}

            <div className="relative flex min-h-screen items-center justify-center px-6 py-16 sm:px-8">
                <div className="mx-auto w-full max-w-3xl text-center">
                    {/* Small badge */}

                    <div
                        className="
                            mx-auto
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#cfe2db]
                            bg-white/80
                            px-3
                            py-1.5
                            shadow-[0_10px_30px_rgba(20,70,60,0.06)]
                            backdrop-blur-md
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#73d1b8]
                            "
                        />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-[#6f9389]
                            "
                        >
                            Page not found
                        </span>
                    </div>

                    {/* 404 */}

                    <div
                        aria-hidden="true"
                        className="
                            mt-8
                            select-none
                            text-[clamp(7rem,24vw,15rem)]
                            font-semibold
                            leading-[0.8]
                            tracking-[-0.09em]
                            text-[#dceee8]
                            sm:mt-10
                        "
                    >
                        404
                    </div>

                    {/* Message */}

                    <div className="relative z-10 -mt-4 sm:-mt-8">
                        <h1
                            className="
                                text-3xl
                                font-semibold
                                tracking-[-0.04em]
                                text-[#102f2a]
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Looks like you took a wrong turn.
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-sm
                                leading-6
                                text-[#6f8580]
                                sm:text-base
                                sm:leading-7
                            "
                        >
                            The page you&apos;re looking for doesn&apos;t
                            exist, may have moved, or is no longer available.
                        </p>

                        {/* Actions */}

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/"
                                className="
                                    inline-flex
                                    h-11
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    bg-[#087d68]
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-[0_12px_30px_rgba(8,125,104,0.20)]
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:bg-[#076f5d]
                                    hover:shadow-[0_16px_35px_rgba(8,125,104,0.25)]
                                    active:translate-y-0
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-[#087d68]
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-[#f8fbf9]
                                "
                            >
                                <Home
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />

                                Back to home
                            </Link>

                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="
                                    inline-flex
                                    h-11
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-[#d5e5df]
                                    bg-white/90
                                    px-6
                                    text-sm
                                    font-semibold
                                    text-[#345850]
                                    shadow-[0_10px_30px_rgba(20,70,60,0.07)]
                                    backdrop-blur-md
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#b9d6cd]
                                    hover:bg-white
                                    active:translate-y-0
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-[#087d68]
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-[#f8fbf9]
                                "
                            >
                                <ArrowLeft
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />

                                Go back
                            </button>
                        </div>
                    </div>

                    {/* Decorative card */}

                    <div
                        className="
                            mx-auto
                            mt-12
                            flex
                            max-w-md
                            items-center
                            gap-4
                            rounded-2xl
                            border
                            border-[#dce9e4]
                            bg-white/70
                            p-4
                            text-left
                            shadow-[0_20px_60px_rgba(20,70,60,0.07)]
                            backdrop-blur-md
                            sm:mt-16
                        "
                    >
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#e8f5f0]
                                text-[#087d68]
                            "
                        >
                            <Search
                                className="h-4 w-4"
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#345850]">
                                Looking for something?
                            </p>

                            <p className="mt-0.5 text-xs leading-5 text-[#8a9b96]">
                                Try returning to the main page and finding your
                                way from there.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom accent */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-[#087d68]/20
                    to-transparent
                "
            />
        </main>
    );
}

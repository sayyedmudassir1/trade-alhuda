"use client";

import { AlertCircle, ArrowLeft, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
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
                    h-[600px]
                    w-[600px]
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
                    {/* Status badge */}

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
                            Internal server error
                        </span>
                    </div>

                    {/* 500 */}

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
                        500
                    </div>

                    {/* Message */}

                    <div className="relative z-10 -mt-4 sm:-mt-8">
                        <div
                            className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-[#cfe2db]
                                bg-white/90
                                text-[#087d68]
                                shadow-[0_12px_35px_rgba(20,70,60,0.08)]
                                backdrop-blur-md
                            "
                        >
                            <AlertCircle
                                className="h-5 w-5"
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </div>

                        <h1
                            className="
                                mt-5
                                text-3xl
                                font-semibold
                                tracking-[-0.04em]
                                text-[#102f2a]
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Something went wrong.
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
                            Something went wrong while processing your
                            request. You can try again, or return to the home
                            page.
                        </p>

                        {/* Actions */}

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={reset}
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
                                <RefreshCw
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />

                                Try again
                            </button>

                            <Link
                                href="/"
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
                                    border-transparent
                                    px-5
                                    text-sm
                                    font-semibold
                                    text-[#6f8580]
                                    transition-colors
                                    hover:text-[#087d68]
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

                    {/* Error information */}

                    <div
                        className="
                            mx-auto
                            mt-12
                            max-w-md
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
                        <div className="flex items-start gap-3">
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#e8f5f0]
                                    text-[#087d68]
                                "
                            >
                                <AlertCircle
                                    className="h-4 w-4"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#345850]">
                                    No action is required from you
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[#8a9b96]">
                                    This error may be temporary. Try the page
                                    again, and if the problem continues,
                                    please try again later.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Avoid exposing server error details to users */}
                    {process.env.NODE_ENV === "development" && error?.digest && (
                        <p className="mt-4 text-[10px] text-[#a1b1ad]">
                            Error reference: {error.digest}
                        </p>
                    )}
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

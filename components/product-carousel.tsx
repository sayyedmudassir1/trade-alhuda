"use client";

import {
    ChevronLeft,
    ChevronRight,
    Maximize2,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductScreenshot } from "./product-data";

interface ProductCarouselProps {
    screenshots: ProductScreenshot[];
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
    onImageClick: (src: string) => void;
}

export function ProductCarousel({
    screenshots,
    activeIndex,
    onPrev,
    onNext,
    onSelect,
    onImageClick,
}: ProductCarouselProps) {
    const totalSlides = screenshots.length;

    if (totalSlides === 0) {
        return null;
    }

    const safeActiveIndex =
        activeIndex >= 0 && activeIndex < totalSlides ? activeIndex : 0;

    return (
        <section
            aria-label="Product screenshots"
            className="relative w-full overflow-hidden bg-[#f8fbf9]"
        >
            {/* =========================================================
            MAIN CAROUSEL
        ========================================================== */}
            <div className="relative mx-auto w-full max-w-7xl">
                <div
                    className={cn(
                        "relative mx-auto w-full",
                        "min-h-65 aspect-16/10",
                        "sm:min-h-90 sm:aspect-video",
                        "lg:min-h-110 lg:max-h-170"
                    )}
                >
                    {/* Ambient background glow */}
                    <div
                        aria-hidden="true"
                        className={cn(
                            "pointer-events-none absolute left-1/2 top-1/2",
                            "h-[68%] w-[72%]",
                            "-translate-x-1/2 -translate-y-1/2",
                            "rounded-full bg-[#dff1ea]/60 blur-3xl"
                        )}
                    />

                    {/* =================================================
                    SLIDES
                ================================================== */}
                    <div
                        className="absolute inset-0"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {screenshots.map((screenshot, index) => {
                            const rawOffset =
                                (index - safeActiveIndex + totalSlides) %
                                totalSlides;

                            const normalizedOffset =
                                rawOffset > totalSlides / 2
                                    ? rawOffset - totalSlides
                                    : rawOffset;

                            const distance = Math.abs(normalizedOffset);
                            const isActive = normalizedOffset === 0;
                            const isAdjacent = distance === 1;
                            const isVisible = distance <= 1;

                            /*
                             * Only the active slide and its immediate
                             * neighbors participate visually.
                             *
                             * This keeps the DOM simple while avoiding
                             * unnecessary visual work for larger galleries.
                             */
                            if (!isVisible) {
                                return (
                                    <div
                                        key={screenshot.label}
                                        aria-hidden="true"
                                        className="invisible absolute inset-0 opacity-0"
                                    />
                                );
                            }

                            return (
                                <article
                                    key={screenshot.label}
                                    aria-label={`${index + 1} of ${totalSlides}: ${screenshot.title}`}
                                    aria-hidden={!isActive}
                                    onClick={() => {
                                        if (isActive) {
                                            onImageClick(screenshot.src);
                                        } else {
                                            onSelect(index);
                                        }
                                    }}
                                    className={cn(
                                        "absolute left-1/2 top-1/2",
                                        "w-[88%] sm:w-[82%]",
                                        "aspect-16/10 sm:aspect-video",
                                        "-translate-x-1/2 -translate-y-1/2",
                                        "overflow-hidden rounded-2xl",
                                        "border transition-all duration-700",
                                        "ease-[cubic-bezier(0.22,1,0.36,1)]",
                                        "motion-reduce:transition-none",
                                        isActive
                                            ? [
                                                "z-20 cursor-zoom-in",
                                                "border-[#cfe2db]",
                                                "bg-white",
                                                "shadow-[0_30px_80px_rgba(20,70,60,0.16)]",
                                            ]
                                            : [
                                                "z-10 cursor-pointer",
                                                "border-[#dce9e4]",
                                                "bg-white",
                                                "opacity-40",
                                                "scale-[0.95]",
                                                "shadow-[0_18px_45px_rgba(20,70,60,0.08)]",
                                                "hover:opacity-75",
                                                "hover:scale-[0.965]",
                                            ],
                                        !isActive &&
                                        !isAdjacent &&
                                        "pointer-events-none"
                                    )}
                                >
                                    {/* =================================================
                                    IMAGE
                                ================================================== */}
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={screenshot.src.trim()}
                                            alt={screenshot.alt}
                                            fill
                                            loading="lazy"
                                            sizes="
                                            (max-width: 640px) 88vw,
                                            (max-width: 1024px) 82vw,
                                            1100px
                                        "
                                            className={cn(
                                                "object-cover object-center",
                                                "transition-transform duration-700",
                                                "motion-reduce:transition-none",
                                                isActive &&
                                                "hover:scale-[1.015]"
                                            )}
                                        />

                                        {/* =================================================
                                        IMAGE SCRIM
                                    ================================================== */}
                                        {isActive && (
                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"
                                            />
                                        )}

                                        {/* =================================================
                                        ACTIVE SLIDE CONTENT
                                    ================================================== */}
                                        {isActive && (
                                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                                                <div className="flex items-end justify-between gap-4">
                                                    <div className="min-w-0 max-w-3xl">
                                                        {/* Category / Label */}
                                                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 backdrop-blur-md sm:mb-3 sm:px-3 sm:py-1.5">
                                                            <span
                                                                aria-hidden="true"
                                                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#73d1b8]"
                                                            />

                                                            <span className="truncate text-[8px] font-semibold uppercase tracking-[0.16em] text-[#d5f3eb] sm:text-[9px]">
                                                                {screenshot.label}
                                                            </span>
                                                        </div>

                                                        {/* Slide heading */}
                                                        <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                                                            {screenshot.title}
                                                        </h3>

                                                        {/* Supporting description */}
                                                        <p className="mt-1.5 max-w-2xl text-[11px] leading-4 text-white/75 sm:mt-2 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                                                            {
                                                                screenshot.description
                                                            }
                                                        </p>
                                                    </div>

                                                    {/* Desktop image expansion */}
                                                    <button
                                                        type="button"
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            onImageClick(
                                                                screenshot.src
                                                            );
                                                        }}
                                                        aria-label={`View ${screenshot.title} in full size`}
                                                        className={cn(
                                                            "hidden shrink-0 items-center justify-center",
                                                            "rounded-full border border-white/20",
                                                            "bg-white/10 text-white backdrop-blur-md",
                                                            "transition-colors duration-200",
                                                            "hover:bg-white/20",
                                                            "focus-visible:outline-none",
                                                            "focus-visible:ring-2",
                                                            "focus-visible:ring-white/80",
                                                            "focus-visible:ring-offset-2",
                                                            "focus-visible:ring-offset-transparent",
                                                            "sm:flex sm:h-10 sm:w-10",
                                                            "lg:h-11 lg:w-11"
                                                        )}
                                                    >
                                                        <Maximize2
                                                            className="h-4 w-4"
                                                            strokeWidth={1.8}
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* =================================================
                    PREVIOUS BUTTON
                ================================================== */}
                    <button
                        type="button"
                        onClick={onPrev}
                        aria-label="Previous screenshot"
                        className={cn(
                            "group absolute left-2 top-1/2 z-40",
                            "flex h-10 w-10 -translate-y-1/2",
                            "items-center justify-center",
                            "rounded-full border border-[#d5e5df]",
                            "bg-white/95 text-[#345850]",
                            "shadow-[0_10px_30px_rgba(20,70,60,0.12)]",
                            "backdrop-blur-md",
                            "transition-all duration-200",
                            "hover:bg-[#087d68] hover:text-white",
                            "active:scale-95",
                            "focus-visible:outline-none",
                            "focus-visible:ring-2",
                            "focus-visible:ring-[#087d68]",
                            "focus-visible:ring-offset-2",
                            "sm:left-4 sm:h-11 sm:w-11",
                            "lg:left-6"
                        )}
                    >
                        <ChevronLeft
                            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 sm:h-5 sm:w-5"
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />
                    </button>

                    {/* =================================================
                    NEXT BUTTON
                ================================================== */}
                    <button
                        type="button"
                        onClick={onNext}
                        aria-label="Next screenshot"
                        className={cn(
                            "group absolute right-2 top-1/2 z-40",
                            "flex h-10 w-10 -translate-y-1/2",
                            "items-center justify-center",
                            "rounded-full border border-[#d5e5df]",
                            "bg-white/95 text-[#345850]",
                            "shadow-[0_10px_30px_rgba(20,70,60,0.12)]",
                            "backdrop-blur-md",
                            "transition-all duration-200",
                            "hover:bg-[#087d68] hover:text-white",
                            "active:scale-95",
                            "focus-visible:outline-none",
                            "focus-visible:ring-2",
                            "focus-visible:ring-[#087d68]",
                            "focus-visible:ring-offset-2",
                            "sm:right-4 sm:h-11 sm:w-11",
                            "lg:right-6"
                        )}
                    >
                        <ChevronRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:h-5 sm:w-5"
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>

            {/* =========================================================
            PAGINATION / GALLERY NAVIGATION
        ========================================================== */}
            <nav
                aria-label="Screenshot navigation"
                className="border-t border-[#e1ece8] bg-white px-4 py-3 sm:px-8 sm:py-5"
            >
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
                    {/* Pagination */}
                    <div
                        role="tablist"
                        aria-label="Select product screenshot"
                        className="flex min-w-0 flex-1 items-center justify-center gap-1 sm:gap-2"
                    >
                        {screenshots.map((screenshot, index) => {
                            const isActive = index === safeActiveIndex;

                            return (
                                <button
                                    key={screenshot.label}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-label={`View screenshot ${index + 1}: ${screenshot.title}`}
                                    tabIndex={isActive ? 0 : -1}
                                    onClick={() => onSelect(index)}
                                    className={cn(
                                        "group flex h-8 items-center justify-center rounded-full",
                                        "transition-all duration-300",
                                        "focus-visible:outline-none",
                                        "focus-visible:ring-2",
                                        "focus-visible:ring-[#087d68]",
                                        "focus-visible:ring-offset-2",
                                        "motion-reduce:transition-none",
                                        isActive
                                            ? "bg-[#e8f5f0] px-2.5"
                                            : "w-8 hover:bg-[#f0f7f4]"
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={cn(
                                            "block rounded-full transition-all duration-300",
                                            "motion-reduce:transition-none",
                                            isActive
                                                ? "h-1.5 w-6 bg-[#087d68]"
                                                : "h-1.5 w-1.5 bg-[#b7c9c3] group-hover:bg-[#6f9389]"
                                        )}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Slide counter */}
                    <div
                        className="hidden shrink-0 items-center gap-2 sm:flex"
                        aria-label={`Screenshot ${safeActiveIndex + 1} of ${totalSlides}`}
                    >
                        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8a9b96]">
                            {String(safeActiveIndex + 1).padStart(2, "0")}
                        </span>

                        <span
                            aria-hidden="true"
                            className="text-[#c4d2ce]"
                        >
                            /
                        </span>

                        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8a9b96]">
                            {String(totalSlides).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </nav>

            {/* Brand accent */}
            <div
                aria-hidden="true"
                className="h-px bg-linear-to-r from-transparent via-[#087d68]/15 to-transparent"
            />
        </section>
    );

}
"use client";

import {
    useCallback,
    useEffect,
    useState,
} from "react";

import { screenshots } from "./product-data";
import { ProductCarousel } from "./product-carousel";
import { ImageLightbox } from "./image-lightbox";

export default function ProductCarouselSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxImage, setLightboxImage] =
        useState<string | null>(null);

    const totalSlides = screenshots.length;

    /* ===============================================================
       SLIDE NAVIGATION
    =============================================================== */

    const goToSlide = useCallback(
        (index: number) => {
            if (totalSlides === 0) {
                return;
            }

            const nextIndex =
                ((index % totalSlides) + totalSlides) %
                totalSlides;

            setActiveIndex(nextIndex);
        },
        [totalSlides]
    );

    const goToPrev = useCallback(() => {
        goToSlide(activeIndex - 1);
    }, [activeIndex, goToSlide]);

    const goToNext = useCallback(() => {
        goToSlide(activeIndex + 1);
    }, [activeIndex, goToSlide]);

    /* ===============================================================
       LIGHTBOX
    =============================================================== */

    const openLightbox = useCallback((image: string) => {
        setLightboxImage(image);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxImage(null);
    }, []);

    useEffect(() => {
        if (!lightboxImage) {
            return;
        }

        const originalOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                originalOverflow;
        };
    }, [lightboxImage]);

    /* ===============================================================
       KEYBOARD NAVIGATION
    =============================================================== */

    useEffect(() => {
        const handleKeyDown = (
            event: KeyboardEvent
        ) => {
            if (event.key === "Escape") {
                if (lightboxImage) {
                    event.preventDefault();
                    closeLightbox();
                }

                return;
            }

            if (lightboxImage) {
                return;
            }

            switch (event.key) {
                case "ArrowLeft":
                    event.preventDefault();
                    goToPrev();
                    break;

                case "ArrowRight":
                    event.preventDefault();
                    goToNext();
                    break;

                default:
                    break;
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        closeLightbox,
        goToNext,
        goToPrev,
        lightboxImage,
    ]);

    /* ===============================================================
       HANDLERS
    =============================================================== */

    const handleSelect = useCallback(
        (index: number) => {
            goToSlide(index);
        },
        [goToSlide]
    );

    if (totalSlides === 0) {
        return null;
    }

    const activeProduct =
        screenshots[activeIndex];

    return (
        <section
            aria-labelledby="product-showcase-heading"
            className="
                relative
                overflow-hidden
                bg-[#f8fbf9]
                py-16
                sm:py-20
                lg:py-28
            "
        >
            {/* =========================================================
                BACKGROUND DECORATION
            ========================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    top-20
                    h-115
                    w-115
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
                    -right-48
                    bottom-0
                    h-125
                    w-125
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
                    left-1/2
                    top-0
                    h-px
                    w-2/3
                    -translate-x-1/2
                    bg-linear-to-r
                    from-transparent
                    via-[#087d68]/20
                    to-transparent
                "
            />

            {/* =========================================================
                CONTENT
            ========================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    sm:px-8
                    lg:px-12
                "
            >
                {/* =====================================================
                    HEADER
                ===================================================== */}

                <header
                    className="
                        mx-auto
                        max-w-3xl
                        text-center
                    "
                >
                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            justify-center
                            gap-3
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="
                                h-px
                                w-8
                                bg-[#087d68]
                            "
                        />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[#087d68]
                                sm:text-xs
                            "
                        >
                            Product Showcase
                        </span>

                        <span
                            aria-hidden="true"
                            className="
                                h-px
                                w-8
                                bg-[#087d68]
                            "
                        />
                    </div>

                    <h2
                        id="product-showcase-heading"
                        className="
                            text-balance
                            text-3xl
                            font-semibold
                            leading-[1.08]
                            tracking-[-0.045em]
                            text-[#12342f]
                            sm:text-4xl
                            lg:text-5xl
                            xl:text-6xl
                        "
                    >
                        Explore our{" "}
                        <span className="text-[#087d68]">
                            product portfolio.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-7
                            text-[#667e78]
                            sm:text-base
                            sm:leading-8
                        "
                    >
                        Discover the product categories
                        we source and coordinate for
                        international buyers,
                        distributors, importers and
                        commercial partners.
                    </p>
                </header>

                {/* =====================================================
                    PRODUCT SHOWCASE
                ===================================================== */}

                <div
                    className="
                        mt-8
                        sm:mt-10
                        lg:mt-14
                    "
                >
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[1.5rem]
                            border
                            border-[#dce9e4]
                            bg-white
                            shadow-[0_25px_80px_rgba(20,70,60,0.08)]
                            sm:rounded-[2rem]
                        "
                    >
                        {/* Top accent */}

                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                left-0
                                right-0
                                top-0
                                z-20
                                h-px
                                bg-linear-to-r
                                from-transparent
                                via-[#087d68]/40
                                to-transparent
                            "
                        />

                        <ProductCarousel
                            screenshots={screenshots}
                            activeIndex={activeIndex}
                            onPrev={goToPrev}
                            onNext={goToNext}
                            onSelect={handleSelect}
                            onImageClick={openLightbox}
                        />
                    </div>
                </div>

                {/* =====================================================
                    ACTIVE PRODUCT INFORMATION
                ===================================================== */}

                <div
                    className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-center
                        sm:mt-7
                    "
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-3
                        "
                    >
                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#087d68]
                            "
                        />

                        <span
                            className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-[#087d68]
                            "
                        >
                            {activeProduct.label}
                        </span>
                    </div>

                    <h3
                        className="
                            mt-2
                            text-lg
                            font-semibold
                            tracking-[-0.02em]
                            text-[#183d36]
                            sm:text-xl
                        "
                    >
                        {activeProduct.title}
                    </h3>

                    <p
                        className="
                            mx-auto
                            mt-2
                            max-w-xl
                            text-sm
                            leading-6
                            text-[#718680]
                        "
                    >
                        {activeProduct.description}
                    </p>

                    <p
                        className="
                            mt-4
                            text-[11px]
                            font-medium
                            text-[#91a19d]
                        "
                    >
                        Product view{" "}
                        <span
                            className="
                                font-semibold
                                text-[#345850]
                            "
                        >
                            {String(
                                activeIndex + 1
                            ).padStart(2, "0")}
                        </span>

                        <span
                            className="
                                mx-1.5
                                text-[#c0cec9]
                            "
                        >
                            /
                        </span>

                        {String(totalSlides).padStart(
                            2,
                            "0"
                        )}
                    </p>
                </div>

                {/* =====================================================
                    KEYBOARD NAVIGATION
                ===================================================== */}

                <div
                    className="
                        mt-5
                        hidden
                        items-center
                        justify-center
                        gap-2
                        text-[11px]
                        text-[#8a9b96]
                        lg:flex
                    "
                >
                    <span>Use</span>

                    <kbd
                        className="
                            inline-flex
                            h-6
                            min-w-6
                            items-center
                            justify-center
                            rounded-md
                            border
                            border-[#dce7e3]
                            bg-white
                            px-1.5
                            font-mono
                            text-[10px]
                            font-medium
                            text-[#607872]
                            shadow-sm
                        "
                    >
                        ←
                    </kbd>

                    <kbd
                        className="
                            inline-flex
                            h-6
                            min-w-6
                            items-center
                            justify-center
                            rounded-md
                            border
                            border-[#dce7e3]
                            bg-white
                            px-1.5
                            font-mono
                            text-[10px]
                            font-medium
                            text-[#607872]
                            shadow-sm
                        "
                    >
                        →
                    </kbd>

                    <span>to browse</span>

                    <span
                        className="
                            mx-1
                            text-[#c8d3d0]
                        "
                    >
                        ·
                    </span>

                    <span>
                        Click an image to enlarge
                    </span>
                </div>

                {/* =====================================================
                    BOTTOM BRAND STATEMENT
                ===================================================== */}

                <div
                    className="
                        mx-auto
                        mt-8
                        flex
                        max-w-3xl
                        items-center
                        justify-center
                        gap-4
                        sm:mt-12
                    "
                >
                    <span
                        aria-hidden="true"
                        className="
                            hidden
                            h-px
                            flex-1
                            bg-linear-to-r
                            from-transparent
                            to-[#d7e7e1]
                            sm:block
                        "
                    />

                    <p
                        className="
                            text-center
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#8a9b96]
                        "
                    >
                        Sourced for international trade
                    </p>

                    <span
                        aria-hidden="true"
                        className="
                            hidden
                            h-px
                            flex-1
                            bg-linear-to-l
                            from-transparent
                            to-[#d7e7e1]
                            sm:block
                        "
                    />
                </div>
            </div>

            {/* =========================================================
                LIGHTBOX
            ========================================================= */}

            <ImageLightbox
                src={lightboxImage}
                onClose={closeLightbox}
            />
        </section>
    );
}

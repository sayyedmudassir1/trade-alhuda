"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageLightboxProps {
    src: string | null;
    onClose: () => void;
}

export function ImageLightbox({
    src,
    onClose,
}: ImageLightboxProps) {
    useEffect(() => {
        if (!src) {
            return;
        }

        const handleKeyDown = (
            event: KeyboardEvent
        ) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [src, onClose]);

    if (!src) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Product image preview"
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-[#071a16]/95
                p-3
                backdrop-blur-md
                sm:p-6
                lg:p-10
            "
            onClick={onClose}
        >
            {/* Background glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[70vh]
                    w-[70vw]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#087d68]/10
                    blur-[100px]
                "
            />

            {/* Close button */}

            <button
                type="button"
                onClick={onClose}
                aria-label="Close image preview"
                className="
                    absolute
                    right-3
                    top-3
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    text-white
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:bg-white/20
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#73d1b8]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#071a16]
                    sm:right-6
                    sm:top-6
                    sm:h-11
                    sm:w-11
                "
            >
                <X
                    className="h-5 w-5"
                    strokeWidth={1.8}
                />
            </button>

            {/* Image */}

            <div
                className="
                    relative
                    z-10
                    h-[calc(100vh-5rem)]
                    w-[calc(100vw-1.5rem)]
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    shadow-[0_30px_100px_rgba(0,0,0,0.45)]

                    sm:h-[calc(100vh-6rem)]
                    sm:w-[calc(100vw-3rem)]
                    sm:rounded-2xl

                    lg:h-[calc(100vh-5rem)]
                    lg:w-[calc(100vw-5rem)]
                "
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <Image
                    src={src}
                    alt="Product showcase preview"
                    fill
                    priority
                    sizes="100vw"
                    className="
                        object-contain
                        object-center
                        p-2
                        sm:p-4
                        lg:p-6
                    "
                />
            </div>

            {/* Bottom hint */}

            <div
                className="
                    absolute
                    bottom-4
                    left-1/2
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white/60
                    backdrop-blur-md
                    sm:bottom-5
                    sm:px-4
                    sm:py-2
                    sm:text-[10px]
                "
            >
                Click outside or press Esc to close
            </div>
        </div>
    );
}

"use client";

import { ArrowRight, Phone } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

interface HeaderActionsProps {
    mobile?: boolean;
}

export default function HeaderActions({
    mobile = false,
}: HeaderActionsProps) {
    return (
        <div
            className={
                mobile
                    ? "flex flex-col gap-3"
                    : "hidden items-center gap-4 lg:flex"
            }
        >
            {/* Call */}
            <Link
                href="tel:9833206053"
                className="
                    inline-flex items-center gap-2
                    rounded-lg px-4 py-2
                    text-sm font-medium
                    text-foreground/80
                    transition-colors
                    hover:text-foreground
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                "
            >
                <Phone className="h-4 w-4" />
                Call us
            </Link>

            {/* Brochure */}
            <Link
                href="/brochure.pdf"
                download
                className="
                    inline-flex items-center gap-2
                    rounded-lg
                    border border-border
                    px-4 py-1.5
                    text-xs font-medium
                    text-foreground/80
                    transition-colors
                    hover:bg-accent
                    hover:text-foreground
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                "
            >
                <FaDownload className="h-4 w-4" />

                <span className="flex flex-col text-left leading-tight">
                    <span>Download</span>
                    <span className="font-semibold text-foreground">
                        Brochure
                    </span>
                </span>
            </Link>

            {/* Quote */}
            <Link
                href="/contact"
                className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-primary
                    px-4 py-2
                    text-sm
                    font-medium
                    text-primary-foreground
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-primary/90
                    hover:shadow-md
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    active:scale-95
                "
            >
                <span>Get A Quote</span>

                <ArrowRight
                    className="
                        h-4 w-4
                        transition-transform
                        duration-200
                        group-hover:translate-x-0.5
                    "
                />
            </Link>
        </div>
    );
}

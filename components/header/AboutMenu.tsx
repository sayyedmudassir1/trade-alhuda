"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { aboutItems } from "./header-data";

interface AboutMenuProps {
    mobile?: boolean;
    onNavigate?: () => void;
}

export default function AboutMenu({
    mobile = false,
    onNavigate,
}: AboutMenuProps) {
    const [open, setOpen] = useState(false);

    if (mobile) {
        return (
            <div className="border-b border-border/40">
                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    className="
                        flex h-[62px]
                        w-full
                        items-center
                        justify-between
                        text-[15px]
                        font-medium
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                    "
                    aria-expanded={open}
                >
                    <span>About us</span>

                    <ChevronDown
                        className={`
                            h-4 w-4
                            transition-transform
                            duration-300
                            ${open ? "rotate-180 text-primary" : ""}
                        `}
                    />
                </button>

                {open && (
                    <div className="flex flex-col gap-1 pb-3 pl-2">
                        {aboutItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={onNavigate}
                                className="
                                    py-2
                                    text-sm
                                    text-foreground
                                    transition-colors
                                    hover:text-primary
                                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className="relative py-1"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                className="
                    flex items-center gap-2
                    rounded-lg
                    px-3.5 py-2
                    text-sm font-medium
                    text-muted-foreground
                    transition-colors
                    hover:bg-accent/50
                    hover:text-foreground
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                "
                aria-expanded={open}
            >
                <Link href="/about-us">About us</Link>

                <ChevronDown
                    className={`
                        h-4 w-4
                        transition-transform
                        duration-200
                        ${open ? "rotate-180" : ""}
                    `}
                />
            </button>

            {open && (
                <div
                    className="
                        absolute left-0 top-full
                        z-50
                        w-52
                        rounded-lg
                        border border-border/40
                        bg-background
                        py-2
                        text-foreground
                        shadow-lg
                        animate-in
                        fade-in-50
                        zoom-in-95
                    "
                >
                    {aboutItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="
                                block
                                px-4 py-2
                                text-sm
                                transition-colors
                                hover:bg-accent/50
                            "
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { productCategories } from "./header-data";

interface ProductsMenuProps {
    mobile?: boolean;
    onNavigate?: () => void;
}

export default function ProductsMenu({
    mobile = false,
    onNavigate,
}: ProductsMenuProps) {
    const [open, setOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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
                    <span>Products</span>

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
                        {productCategories.map((category) => (
                            <MobileProductItem
                                key={category.label}
                                category={category}
                                onNavigate={onNavigate}
                            />
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
            onMouseLeave={() => {
                setOpen(false);
                setActiveSubMenu(null);
            }}
        >
            {/* Fixed: Replaced invalid <button> wrapping a <Link> with a styled flex container */}
            <div className="flex items-center">
                <Link
                    href="/our-products"
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
                >
                    Products
                </Link>
                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    className="p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none"
                    aria-expanded={open}
                    aria-label="Toggle products menu"
                >
                    <ChevronDown
                        className={`
                            h-4 w-4
                            transition-transform
                            duration-200
                            ${open ? "rotate-180" : ""}
                        `}
                    />
                </button>
            </div>

            {open && (
                <div
                    className="
                        absolute left-0 top-full
                        z-50
                        w-60
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
                    {productCategories.map((category) => (
                        <div
                            key={category.label}
                            className="relative"
                            onMouseEnter={() =>
                                setActiveSubMenu(category.label)
                            }
                        >
                            <div
                                className="
                                    flex items-center
                                    justify-between
                                    px-4 py-2
                                    text-sm
                                    transition-colors
                                    hover:bg-accent/50
                                "
                            >
                                <Link
                                    href={category.href}
                                    className="flex-1 truncate"
                                    onClick={() => {
                                        setOpen(false);
                                        setActiveSubMenu(null);
                                    }}
                                >
                                    {category.label}
                                </Link>

                                {category.subItems && (
                                    <ChevronRight
                                        className="
                                            ml-1
                                            h-3.5 w-3.5
                                            text-muted-foreground
                                        "
                                    />
                                )}
                            </div>

                            {category.subItems &&
                                activeSubMenu === category.label && (
                                    <div
                                        className="
                                            absolute
                                            left-full
                                            top-0
                                            z-50
                                            ml-1
                                            w-56
                                            rounded-lg
                                            border
                                            border-border/40
                                            bg-background
                                            py-2
                                            text-foreground
                                            shadow-lg
                                            animate-in
                                            fade-in-50
                                            zoom-in-95
                                        "
                                    >
                                        {category.subItems.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                className="
                                                    block
                                                    px-4 py-2
                                                    text-sm
                                                    transition-colors
                                                    hover:bg-accent/50
                                                "
                                                onClick={() => {
                                                    setOpen(false);
                                                    setActiveSubMenu(null);
                                                }}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function MobileProductItem({
    category,
    onNavigate,
}: {
    category: (typeof productCategories)[number];
    onNavigate?: () => void;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="
                flex
                items-center
                justify-between
                py-2
                pr-2
                text-sm
                font-medium
                text-foreground
            ">
                <Link
                    href={category.href}
                    onClick={onNavigate}
                    className="
                        flex-1
                        transition-colors
                        hover:text-primary
                    "
                >
                    {category.label}
                </Link>

                {category.subItems && (
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="
                            rounded
                            p-1
                            transition-colors
                            hover:bg-accent
                        "
                        aria-label={`Toggle ${category.label} sub-items`}
                    >
                        <ChevronDown
                            className={`
                                h-3.5 w-3.5
                                transition-transform
                                duration-300
                                ${open ? "rotate-180" : ""}
                            `}
                        />
                    </button>
                )}
            </div>

            {category.subItems && open && (
                <div className="
                    mb-1
                    flex
                    flex-col
                    gap-1.5
                    border-l
                    border-border/40
                    py-1
                    pl-4
                ">
                    {category.subItems.map((sub) => (
                        <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={onNavigate}
                            className="
                                py-1.5
                                text-xs
                                text-muted-foreground
                                transition-colors
                                hover:text-foreground
                            "
                        >
                            {sub.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
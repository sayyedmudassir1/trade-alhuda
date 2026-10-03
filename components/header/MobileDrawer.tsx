"use client";

import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

import { LogoImage } from "@/assets/images";

import ProductsMenu from "./ProductsMenu";
import AboutMenu from "./AboutMenu";
import HeaderActions from "./HeaderActions";

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function MobileDrawer({
    open,
    onClose,
}: MobileDrawerProps) {
    return (
        <div
            id="mobile-navigation-drawer"
            aria-hidden={!open}
            className={`
                fixed
                inset-0
                z-[10000]
                lg:hidden
                transition-visibility
                duration-300
                ${open
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }
            `}
        >
            {/* Backdrop */}
            <div
                className={`
                    absolute
                    inset-0
                    bg-black/60
                    backdrop-blur-sm
                    transition-opacity
                    duration-300
                    ease-out
                    ${open ? "opacity-100" : "opacity-0"}
                `}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`
                    absolute
                    right-0
                    top-0
                    flex
                    h-[100dvh]
                    w-[85vw]
                    max-w-[360px]
                    transform
                    flex-col
                    border-l
                    border-border/40
                    bg-background
                    text-foreground
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-out
                    ${open
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >
                {/* Header */}
                <div
                    className="
                        flex
                        h-[76px]
                        shrink-0
                        items-center
                        justify-between
                        border-b
                        border-border/40
                        px-6
                    "
                >
                    <Link
                        href="/"
                        onClick={onClose}
                        aria-label="Home"
                    >
                        <LogoImage className="h-9 w-auto" />
                    </Link>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-9 w-9
                            items-center
                            justify-center
                            rounded-lg
                            bg-accent/50
                            text-muted-foreground
                            transition-colors
                            hover:bg-accent
                            hover:text-foreground
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary
                        "
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav
                    className="
                        flex-1
                        overflow-y-auto
                        px-6
                        py-4
                    "
                    aria-label="Mobile Navigation"
                >
                    <ProductsMenu
                        mobile
                        onNavigate={onClose}
                    />

                    <MobileNavItem
                        href="/logistics-and-quality"
                        label="Logistics & Quality"
                        onClick={onClose}
                    />

                    <AboutMenu
                        mobile
                        onNavigate={onClose}
                    />

                    <MobileNavItem
                        href="/policy"
                        label="Policy"
                        onClick={onClose}
                    />

                    <MobileNavItem
                        href="/contact"
                        label="Contact"
                        onClick={onClose}
                    />
                </nav>

                {/* Actions */}
                <div
                    className="
                        shrink-0
                        border-t
                        border-border/40
                        bg-background
                        p-6
                    "
                >
                    <HeaderActions mobile />
                </div>
            </div>
        </div>
    );
}

function MobileNavItem({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="
                flex
                h-[62px]
                items-center
                justify-between
                border-b
                border-border/40
                text-[15px]
                font-medium
                text-muted-foreground
                transition-colors
                hover:text-foreground
            "
        >
            <span>{label}</span>

            <ArrowRight
                className="
                    h-4 w-4
                    text-muted-foreground/50
                "
            />
        </Link>
    );
}

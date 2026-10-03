"use client";

import Link from "next/link";

import ProductsMenu from "./ProductsMenu";
import AboutMenu from "./AboutMenu";

export default function DesktopNav() {
    return (
        <nav
            className="
                hidden
                items-center
                gap-1.5
                lg:flex
            "
            aria-label="Main Navigation"
        >
            <ProductsMenu />

            <NavItem
                href="/logistics-and-quality"
                label="Logistics & Quality"
            />

            <AboutMenu />

            <NavItem
                href="/policy"
                label="Policy"
            />

            <NavItem
                href="/contact"
                label="Contact"
            />
        </nav>
    );
}

function NavItem({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="
                relative
                rounded-lg
                px-3.5 py-2
                text-sm
                font-medium
                text-muted-foreground
                transition-colors
                duration-200
                hover:bg-accent/50
                hover:text-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
            "
        >
            {label}
        </Link>
    );
}

"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

import { LogoImage } from "@/assets/images";

import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileMenuOpen(false);
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
    }, []);

    return (
        <>
            <header
                className={`
                    sticky
                    top-0
                    z-50
                    w-full
                    border-b
                    border-border/40
                    bg-background/80
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ease-out
                    ${scrolled
                        ? "bg-background/90 py-2.5 shadow-sm"
                        : "py-4"
                    }
                `}
                role="banner"
            >
                <div
                    className="
                        container
                        mx-auto
                        flex
                        max-w-7xl
                        items-center
                        justify-between
                        px-4
                        sm:px-6
                    "
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="
                            group
                            flex
                            items-center
                            rounded-lg
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary
                            focus-visible:ring-offset-2
                        "
                        aria-label="Home"
                    >
                        <LogoImage
                            className="
                                h-10
                                w-auto
                                transition-transform
                                duration-200
                                group-hover:scale-[1.02]
                            "
                        />
                    </Link>

                    {/* Desktop */}
                    <DesktopNav />

                    <HeaderActions />

                    {/* Mobile trigger */}
                    <button
                        type="button"
                        onClick={() =>
                            setMobileMenuOpen(true)
                        }
                        className="
                            relative
                            z-10001
                            flex
                            h-10 w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-border/60
                            bg-background/50
                            text-foreground
                            transition-colors
                            hover:bg-accent
                            hover:text-accent-foreground
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary
                            lg:hidden
                        "
                        aria-label="Open main menu"
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation-drawer"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </header>

            <MobileDrawer
                open={mobileMenuOpen}
                onClose={() =>
                    setMobileMenuOpen(false)
                }
            />
        </>
    );
}

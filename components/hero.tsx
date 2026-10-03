"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Added slightly more vertical padding on mobile (py-14 instead of py-12) */}
            <div className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
                {/* Background Layer - constrained strictly to this top container */}
                <div
                    className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-35"
                    style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
                >
                    {/* Responsive Glow Effects - scaled down on mobile to prevent overflow */}
                    <div className="pointer-events-none absolute -left-20 -top-20 sm:-left-40 sm:-top-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-cyan-500/15 blur-[90px] sm:blur-[120px]" />
                    <div className="pointer-events-none absolute -right-20 top-10 sm:-right-40 sm:top-20 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-emerald-500/12 blur-[80px] sm:blur-[100px]" />
                </div>

                {/* Text Content */}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Status Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs sm:text-sm shadow-sm">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-cyan-500" />
                            </span>
                            <span className="font-medium text-cyan-800">
                                Global Trade • Trusted Partnerships
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.15]">
                            Bridging Businesses{' '}
                            <span className="bg-gradient-to-r from-cyan-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                                Across the World
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                            Al Huda connects businesses across borders through reliable import and export solutions, trusted sourcing, and long-term international partnerships.
                        </p>

                        {/* Call to Action Buttons - Increased mobile gap from 3 to 3.5 */}
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 h-12 px-6 text-base font-medium shadow-md transition-all active:scale-[0.98]"
                            >
                                <a href="/our-products" className="inline-flex items-center justify-center">
                                    Explore Products <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto h-12 px-6 text-base font-medium border-border/80 hover:bg-accent/50 transition-all active:scale-[0.98]"
                            >
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
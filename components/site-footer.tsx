import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoImage } from "./icons/logo-image";

type FooterLink = {
    label: string;
    href: string;
};

type FooterColumn = {
    title: string;
    links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
    {
        title: "Export Portfolio",
        links: [
            { label: "Food Products & Commodities", href: "/products/food-products" },
            { label: "Handcrafted Imitation Jewellery", href: "/products/imitation-jewellery" },
            { label: "Heavy Engineering Goods", href: "/products/engineering-goods" },
            { label: "Automotive Components", href: "/products/automotive-components" },
            { label: "Pharmaceuticals & Biologicals", href: "/products/pharmaceuticals-biologicals" },
            { label: "Textiles & Apparels", href: "/products/textiles-and-apparels" },
            { label: "General Merchandise", href: "/products/general-merchandise" },
        ],
    },
    {
        title: "Corporate & Compliance",
        links: [
            { label: "Logistics & Supply Chain", href: "/logistics-and-quality" },
            { label: "Quality Assurance & Lab Testing", href: "/quality-assurance" },
            { label: "About Us & Global Certifications", href: "/about-us/certificates" },
            { label: "Request a Bulk Quote / RFP", href: "/contact" },
            { label: "Global Inquiry & Support Desk", href: "/contact" },
        ],
    },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/al-huda-world-tour-travels",
        icon: <FaLinkedin className="h-4 w-4" />,
    },
    {
        label: "Twitter",
        href: "https://x.com/alhudaworldtour",
        icon: <FaTwitter className="h-4 w-4" />,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61595187021507",
        icon: <FaFacebook className="h-4 w-4" />,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/alhudaworldtravels/",
        icon: <FaInstagram className="h-4 w-4" />,
    },
];

// Trust badges with .webp image filenames corresponding to public/images/logos/
const trustBadges = [
    { name: "APEDA Export Development Authority", code: "APEDA", image: "/images/logos/apeda.webp" },
    { name: "CE Conformity Mark", code: "CE", image: "/images/logos/ce.webp" },
    { name: "Federation of Indian Export Organisations", code: "FIEO", image: "/images/logos/fieo.webp" },
    { name: "Food Safety and Standards Authority of India", code: "FSSAI", image: "/images/logos/fssai.webp" },
    { name: "Good Manufacturing Practice", code: "GMP", image: "/images/logos/gmp.webp" },
    { name: "Halal Certified", code: "HALAL", image: "/images/logos/halal.webp" },
    { name: "ISO Certified 9001:2015", code: "ISO", image: "/images/logos/iso.webp" },
    { name: "Ministry of MSME", code: "MSME", image: "/images/logos/msme.webp" },
    { name: "Restriction of Hazardous Substances", code: "RoHS", image: "/images/logos/rohs.webp" },
    { name: "100% Verified Global Exporter", code: "VERIFIED", image: "/images/logos/verified.webp" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="border-t border-slate-200 bg-slate-50 text-slate-600 antialiased transition-colors duration-200"
            role="contentinfo"
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-5 lg:gap-10">

                    {/* Brand Identity & Contact Column */}
                    <div className="lg:col-span-2 flex flex-col items-start space-y-6">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3.5 text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-md"
                            aria-label="Al Huda Global Trade - Home"
                        >
                            <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                <LogoImage />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-slate-900">
                                    Al Huda<span className="text-blue-600">.</span>
                                </span>
                                <span className="text-[11px] font-medium tracking-widest uppercase text-slate-500">
                                    Global Trade & Logistics
                                </span>
                            </div>
                        </Link>

                        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                            Empowering international trade corridors with streamlined import-export logistics, real-time supply chain tracking, and uncompromising quality assurance.
                        </p>

                        {/* Structured Contact Elements */}
                        <div className="space-y-3.5 text-sm text-slate-700 pt-2">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 shrink-0 mt-1" />
                                <span><strong className="text-slate-900 font-medium">Headquarters:</strong> <Link href="https://maps.app.goo.gl/bZs96hweBwCR4VkG7">S. No. 92, Crawford Market, Office No. 102, Ground Floor, Dadabhai Building, C.T, Division, Mandvi, Mumbai, Maharashtra 400003</Link></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span><strong className="text-slate-900 font-medium">Global Desk:</strong> <Link href="mailto:alhudaworldtravels@gmail.com">alhudaworldtravels@gmail.com</Link></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0" />
                                <span><strong className="text-slate-900 font-medium">WhatsApp:</strong> <Link href="https://wa.me/919833206053?text=Hello%2C+I+want+to+inquire+about+importing/exporting+from+your+company.+Please+connect+with+me.">+91 98332 06053</Link></span>
                            </div>
                        </div>

                        {/* Social Channels */}
                        <nav aria-label="Social media channels" className="pt-2">
                            <ul className="flex items-center space-x-3">
                                {socialLinks.map((social) => (
                                    <li key={social.label}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Connect with us on ${social.label}`}
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 shadow-sm transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                                        >
                                            {social.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* SEO Navigation Link Clusters */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-8">
                        {footerColumns.map((column) => (
                            <nav
                                key={column.title}
                                aria-labelledby={`footer-heading-${column.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                                <h3
                                    id={`footer-heading-${column.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-xs font-semibold uppercase tracking-wider text-slate-900"
                                >
                                    {column.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-sm inline-block py-0.5"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>

                {/* Trust Badges & Compliance Bar */}
                <div className="py-6 border-t border-slate-200">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                            Accreditations & Compliance:
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-2.5">
                            {trustBadges.map((badge, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex h-10 w-10 items-center justify-center p-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:border-slate-300 transition-colors cursor-default overflow-hidden"
                                    title={badge.name}
                                >
                                    <div className="relative h-7 w-7">
                                        <Image
                                            src={badge.image}
                                            alt={badge.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright, Legal & Disclaimers */}
                <div className="flex flex-col lg:flex-row items-center justify-between border-t border-slate-200 py-8 text-xs text-slate-500 gap-6">
                    <p className="text-center lg:text-left">
                        © {currentYear} Al Huda. All rights reserved.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 text-center lg:text-right">
                        <p className="text-slate-500 max-w-sm text-[11px] leading-relaxed">
                            Verified global trade exporter. Product standards, capacity parameters, and Incoterms subject to formal contractual agreements.
                        </p>
                        <div className="flex items-center space-x-6 shrink-0">
                            <Link
                                href="/policy"
                                className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-sm"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/security"
                                className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-sm"
                            >
                                Security
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
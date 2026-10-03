"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";


/* ===============================================================
   PRODUCT OPTIONS
   =============================================================== */

const products = [
    {
        value: "spices",
        label: "Spices",
        category: "Food Products",
    },
    {
        value: "grains",
        label: "Cereals, Pulses & Flours",
        category: "Food Products",
    },
    {
        value: "fruits-and-vegetables",
        label: "Fruits & Vegetables",
        category: "Food Products",
    },
    {
        value: "frozen-foods",
        label: "Frozen Foods & Vegetables",
        category: "Food Products",
    },
    {
        value: "fmcg",
        label: "FMCG",
        category: "Food Products",
    },
    {
        value: "tea-and-coffee",
        label: "Tea & Coffee",
        category: "Food Products",
    },
    {
        value: "imitation-jewellery",
        label: "Imitation Jewellery",
        category: "Products",
    },
    {
        value: "engineering-goods",
        label: "Engineering Goods",
        category: "Products",
    },
    {
        value: "automotive-components",
        label: "Automotive Components",
        category: "Products",
    },
    {
        value: "pharmaceuticals-and-biologicals",
        label: "Pharmaceuticals & Biologicals",
        category: "Products",
    },
    {
        value: "textiles-and-apparel",
        label: "Textiles & Apparel",
        category: "Products",
    },
    {
        value: "general-merchandise",
        label: "General Merchandise",
        category: "Products",
    },
];


/* ===============================================================
   SERVICE OPTIONS
   =============================================================== */

const services = [
    {
        value: "sourcing",
        label: "Global Sourcing",
    },
    {
        value: "logistics",
        label: "Logistics & Shipment Coordination",
    },
    {
        value: "quality",
        label: "Quality & Inspection",
    },
    {
        value: "trade-documentation",
        label: "Trade Documentation",
    },
    {
        value: "supplier-evaluation",
        label: "Supplier Evaluation",
    },
    {
        value: "export-import",
        label: "Import & Export Solutions",
    },
    {
        value: "general-inquiry",
        label: "General Business Inquiry",
    },
];


/* ===============================================================
   INQUIRY TYPES
   =============================================================== */

const inquiryTypes = [
    {
        value: "product",
        label: "Product Requirement",
    },
    {
        value: "service",
        label: "Service Inquiry",
    },
    {
        value: "bulk-order",
        label: "Bulk / Commercial Inquiry",
    },
    {
        value: "supplier",
        label: "Supplier / Partnership",
    },
    {
        value: "general",
        label: "General Inquiry",
    },
];


/* ===============================================================
   COUNTRY OPTIONS
   =============================================================== */

const countries = [
    "India",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Canada",
    "Germany",
    "France",
    "Netherlands",
    "Singapore",
    "Australia",
    "Saudi Arabia",
    "Other",
];


/* ===============================================================
   HELPERS
   =============================================================== */

/**
 * Normalises URL values so both of these work:
 *
 * ?product=textiles-and-apparel
 * ?product=Textiles%20%26%20Apparels
 *
 * It also handles small differences such as:
 *
 * Textiles & Apparel
 * Textiles & Apparels
 * textiles-and-apparel
 * textiles-and-apparels
 */
function normalizeParam(value: string | null) {
    if (!value) return "";

    return decodeURIComponent(value)
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}


/**
 * Find a product from either its slug/value or display label.
 */
function findProduct(value: string | null) {
    const normalized = normalizeParam(value);

    if (!normalized) return undefined;

    return products.find((product) => {
        const productValue = normalizeParam(product.value);
        const productLabel = normalizeParam(product.label);

        return (
            productValue === normalized ||
            productLabel === normalized
        );
    });
}


/**
 * Find a service from either its slug/value or display label.
 */
function findService(value: string | null) {
    const normalized = normalizeParam(value);

    if (!normalized) return undefined;

    return services.find((service) => {
        const serviceValue = normalizeParam(service.value);
        const serviceLabel = normalizeParam(service.label);

        return (
            serviceValue === normalized ||
            serviceLabel === normalized
        );
    });
}


/* ===============================================================
   CONTACT PAGE
   =============================================================== */

export default function ContactPage() {
    const searchParams = useSearchParams();

    const productParam = searchParams.get("product");
    const serviceParam = searchParams.get("service");
    const typeParam = searchParams.get("type");
    const subjectParam = searchParams.get("subject");


    /* -------------------------------------------------------------
       Resolve incoming URL parameters
       ------------------------------------------------------------- */

    const matchedProduct = useMemo(
        () => findProduct(productParam),
        [productParam]
    );

    const matchedService = useMemo(
        () => findService(serviceParam),
        [serviceParam]
    );


    const initialInquiryType =
        typeParam &&
            inquiryTypes.some(
                (item) =>
                    item.value.toLowerCase() ===
                    typeParam.toLowerCase()
            )
            ? typeParam
            : matchedProduct
                ? "product"
                : matchedService
                    ? "service"
                    : "general";


    /* -------------------------------------------------------------
       Form state
       ------------------------------------------------------------- */

    const [inquiryType, setInquiryType] =
        useState(initialInquiryType);

    const [selectedProduct, setSelectedProduct] =
        useState(matchedProduct?.value || "");

    const [selectedService, setSelectedService] =
        useState(matchedService?.value || "");

    const [subject, setSubject] =
        useState(subjectParam || "");

    const [submitted, setSubmitted] =
        useState(false);


    /* -------------------------------------------------------------
       Dynamic URL context
       ------------------------------------------------------------- */

    const inquiryContext = matchedProduct
        ? `Product enquiry: ${matchedProduct.label}`
        : matchedService
            ? `Service enquiry: ${matchedService.label}`
            : subjectParam
                ? `Subject: ${subjectParam}`
                : null;


    /* -------------------------------------------------------------
       Submit → WhatsApp
       ------------------------------------------------------------- */

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name =
            String(formData.get("name") || "").trim();

        const company =
            String(formData.get("company") || "").trim();

        const email =
            String(formData.get("email") || "").trim();

        const phone =
            String(formData.get("phone") || "").trim();

        const country =
            String(formData.get("country") || "").trim();

        const message =
            String(formData.get("message") || "").trim();

        const inquiryTypeValue =
            String(formData.get("inquiryType") || "").trim();

        const productValue =
            String(formData.get("product") || "").trim();

        const serviceValue =
            String(formData.get("service") || "").trim();

        const subjectValue =
            String(formData.get("subject") || "").trim();


        const inquiryTypeLabel =
            inquiryTypes.find(
                (item) => item.value === inquiryTypeValue
            )?.label || inquiryTypeValue;


        const productLabel =
            products.find(
                (product) => product.value === productValue
            )?.label || productValue;


        const serviceLabel =
            services.find(
                (service) => service.value === serviceValue
            )?.label || serviceValue;


        /*
         * Build a clean WhatsApp enquiry.
         *
         * encodeURIComponent() is important because the enquiry
         * contains spaces, &, +, line breaks, etc.
         */

        const whatsappMessage = [
            "Hello Al Huda,",
            "",
            "I would like to make an enquiry.",
            "",
            "━━━━━━━━━━━━━━━━━━━━",
            "ENQUIRY DETAILS",
            "━━━━━━━━━━━━━━━━━━━━",
            "",
            `Inquiry Type: ${inquiryTypeLabel}`,
            subjectValue
                ? `Subject: ${subjectValue}`
                : "",
            productLabel
                ? `Product / Category: ${productLabel}`
                : "",
            serviceLabel
                ? `Service: ${serviceLabel}`
                : "",
            "",
            "━━━━━━━━━━━━━━━━━━━━",
            "CONTACT DETAILS",
            "━━━━━━━━━━━━━━━━━━━━",
            "",
            `Name: ${name}`,
            `Company: ${company}`,
            `Email: ${email}`,
            phone
                ? `Phone / WhatsApp: ${phone}`
                : "",
            country
                ? `Country / Market: ${country}`
                : "",
            "",
            "━━━━━━━━━━━━━━━━━━━━",
            "REQUIREMENT",
            "━━━━━━━━━━━━━━━━━━━━",
            "",
            message,
            "",
            "Thank you.",
        ]
            .filter(Boolean)
            .join("\n");


        const whatsappUrl =
            `https://wa.me/919833206053?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        /*
         * Open WhatsApp in a new tab.
         *
         * Because this runs directly from the user's submit click,
         * browsers generally allow the new tab/window.
         */

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );


        setSubmitted(true);
    }


    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e8f3ef]">

                <div className="absolute -right-48 -top-56 h-[720px] w-[720px] rounded-full bg-[#b8ddd2]/50 blur-3xl" />

                <div className="absolute -bottom-64 left-[5%] h-[600px] w-[600px] rounded-full bg-white/70 blur-3xl" />


                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex items-center gap-2 text-xs text-[#718881]"
                    >

                        <Link
                            href="/"
                            className="transition hover:text-[#087d68]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#3d5a53]">
                            Contact
                        </span>

                    </nav>


                    <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-center">

                        {/* Hero copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    Global Inquiry Desk
                                </span>

                            </div>


                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#12342f] sm:text-6xl lg:text-7xl">

                                Let's start a
                                <span className="block text-[#087d68]">
                                    trade conversation.
                                </span>

                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">

                                Tell us what you are looking for. Whether you need a
                                product, sourcing support, logistics coordination or
                                another international trade service, our team can
                                understand your requirement and take it forward.

                            </p>


                            {/* Dynamic URL context */}

                            {inquiryContext && (

                                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#b9dcd1] bg-white/75 px-4 py-2.5">

                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#087d68] text-xs text-white">
                                        ✓
                                    </span>

                                    <span className="text-xs font-semibold text-[#31564d]">
                                        {inquiryContext}
                                    </span>

                                </div>

                            )}

                        </div>


                        {/* Hero contact card */}

                        <div className="relative">

                            <div className="rounded-[2rem] border border-white/80 bg-white p-7 shadow-[0_30px_90px_rgba(20,70,60,0.12)] sm:p-8">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Direct contact
                                </p>


                                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#29483f]">
                                    Al Huda Global Trade
                                </h2>


                                <div className="mt-8 space-y-5">

                                    <ContactDetail
                                        icon="⌂"
                                        label="Headquarters"
                                        value="Mumbai, Maharashtra, India"
                                    />

                                    <ContactDetail
                                        icon="✉"
                                        label="Email"
                                        value="alhudaworldtravels@gmail.com"
                                        href="mailto:alhudaworldtravels@gmail.com"
                                    />

                                    <ContactDetail
                                        icon="◉"
                                        label="WhatsApp"
                                        value="+91 98332 06053"
                                        href="https://wa.me/919833206053"
                                        external
                                    />

                                </div>


                                <div className="mt-8 border-t border-[#edf1ef] pt-6">

                                    <p className="text-xs leading-5 text-[#82928d]">
                                        For product enquiries, include your required
                                        specifications, quantity, destination market and
                                        preferred timeline where available.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                MAIN INQUIRY AREA
            ========================================================= */}

            <section
                id="inquiry"
                className="scroll-mt-20 bg-[#f8fbf9]"
            >

                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">


                        {/* ===================================================
                            LEFT INFORMATION
                        =================================================== */}

                        <aside>

                            <div className="lg:sticky lg:top-28">

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#087d68]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                        Your requirement
                                    </span>

                                </div>


                                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">

                                    Give us enough
                                    <span className="block text-[#087d68]">
                                        context to help.
                                    </span>

                                </h2>


                                <p className="mt-5 leading-7 text-[#637a74]">

                                    The more specific your enquiry, the easier it is for
                                    our team to understand the requirement and identify
                                    appropriate sourcing or trade options.

                                </p>


                                {/* What to include */}

                                <div className="mt-9 space-y-3">

                                    <RequirementItem
                                        number="01"
                                        title="Product"
                                        text="What product or category are you interested in?"
                                    />

                                    <RequirementItem
                                        number="02"
                                        title="Quantity"
                                        text="Estimated order or annual requirement."
                                    />

                                    <RequirementItem
                                        number="03"
                                        title="Destination"
                                        text="Country or market where the goods will be delivered."
                                    />

                                    <RequirementItem
                                        number="04"
                                        title="Timeline"
                                        text="When you expect to source or ship."
                                    />

                                </div>


                                <div className="mt-8 rounded-2xl border border-[#d8e7e2] bg-white p-5">

                                    <p className="text-xs font-semibold text-[#355950]">
                                        Prefer a direct conversation?
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#7a8c87]">
                                        You can contact our team directly through email or
                                        WhatsApp as well.
                                    </p>

                                    <a
                                        href="https://wa.me/919833206053"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex text-xs font-semibold text-[#087d68] hover:underline"
                                    >
                                        Message on WhatsApp →
                                    </a>

                                </div>

                            </div>

                        </aside>


                        {/* ===================================================
                            FORM
                        =================================================== */}

                        <div
                            id="enquiry-form"
                            className="scroll-mt-28 rounded-[2rem] border border-[#dce8e3] bg-white p-6 shadow-[0_20px_60px_rgba(20,70,60,0.05)] sm:p-8 lg:p-10"
                        >

                            {submitted ? (

                                <SuccessState />

                            ) : (

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >

                                    {/* Form header */}

                                    <div>

                                        <div className="flex items-center justify-between gap-4">

                                            <div>

                                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                                    Inquiry form
                                                </p>

                                                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#29483f] sm:text-3xl">
                                                    Tell us about your requirement.
                                                </h2>

                                            </div>


                                            <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5f0] text-sm text-[#087d68] sm:flex">
                                                ↗
                                            </span>

                                        </div>


                                        <p className="mt-4 text-sm leading-6 text-[#71827d]">
                                            Fields marked with{" "}
                                            <span className="text-[#087d68]">
                                                *
                                            </span>{" "}
                                            are required.
                                        </p>

                                    </div>


                                    {/* =================================================
                                        SUBJECT
                                    ================================================= */}

                                    <div>

                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-xs font-semibold text-[#46645c]"
                                        >
                                            Subject
                                            <span className="ml-1 text-[#087d68]">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={subject}
                                            onChange={(event) =>
                                                setSubject(event.target.value)
                                            }
                                            placeholder="What is your enquiry about?"
                                            className="h-12 w-full rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 text-sm text-[#526d67] outline-none transition placeholder:text-[#9aa9a4] focus:border-[#087d68] focus:bg-white"
                                        />

                                    </div>


                                    {/* =================================================
                                        INQUIRY TYPE
                                    ================================================= */}

                                    <div>

                                        <label className="mb-3 block text-xs font-semibold text-[#46645c]">
                                            What can we help you with?
                                            <span className="ml-1 text-[#087d68]">
                                                *
                                            </span>
                                        </label>


                                        <div className="grid gap-2 sm:grid-cols-2">

                                            {inquiryTypes.map((type) => (

                                                <label
                                                    key={type.value}
                                                    className={`
                                                        cursor-pointer rounded-xl border px-4 py-3.5 transition
                                                        ${inquiryType === type.value
                                                            ? "border-[#087d68] bg-[#edf7f3]"
                                                            : "border-[#dfe9e4] bg-white hover:border-[#b8d9cf]"
                                                        }
                                                    `}
                                                >

                                                    <input
                                                        type="radio"
                                                        name="inquiryType"
                                                        value={type.value}
                                                        checked={
                                                            inquiryType ===
                                                            type.value
                                                        }
                                                        onChange={() =>
                                                            setInquiryType(
                                                                type.value
                                                            )
                                                        }
                                                        className="sr-only"
                                                    />

                                                    <span className="flex items-center gap-3">

                                                        <span
                                                            className={`
                                                                flex h-5 w-5 items-center justify-center rounded-full border
                                                                ${inquiryType === type.value
                                                                    ? "border-[#087d68] bg-[#087d68]"
                                                                    : "border-[#c8d8d3]"
                                                                }
                                                            `}
                                                        >

                                                            {inquiryType ===
                                                                type.value && (
                                                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                                                )}

                                                        </span>

                                                        <span className="text-sm font-medium text-[#46645c]">
                                                            {type.label}
                                                        </span>

                                                    </span>

                                                </label>

                                            ))}

                                        </div>

                                    </div>


                                    {/* =================================================
                                        PERSONAL / COMPANY INFORMATION
                                    ================================================= */}

                                    <div className="grid gap-5 sm:grid-cols-2">

                                        <Field
                                            label="Full name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                        />

                                        <Field
                                            label="Company"
                                            name="company"
                                            placeholder="Company name"
                                            required
                                        />

                                        <Field
                                            label="Business email"
                                            name="email"
                                            type="email"
                                            placeholder="name@company.com"
                                            required
                                        />

                                        <Field
                                            label="Phone / WhatsApp"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 9876 53210"
                                        />

                                    </div>


                                    {/* =================================================
                                        COUNTRY
                                    ================================================= */}

                                    <div>

                                        <label
                                            htmlFor="country"
                                            className="mb-2 block text-xs font-semibold text-[#46645c]"
                                        >
                                            Country / Market
                                        </label>

                                        <select
                                            id="country"
                                            name="country"
                                            className="h-12 w-full rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 text-sm text-[#526d67] outline-none transition focus:border-[#087d68] focus:bg-white"
                                        >

                                            <option value="">
                                                Select country
                                            </option>

                                            {countries.map((country) => (
                                                <option
                                                    key={country}
                                                    value={country}
                                                >
                                                    {country}
                                                </option>
                                            ))}

                                        </select>

                                    </div>


                                    {/* =================================================
                                        PRODUCT
                                    ================================================= */}

                                    {inquiryType === "product" ||
                                        inquiryType === "bulk-order" ? (

                                        <div>

                                            <label
                                                htmlFor="product"
                                                className="mb-2 block text-xs font-semibold text-[#46645c]"
                                            >
                                                Product / Category
                                                <span className="ml-1 text-[#087d68]">
                                                    *
                                                </span>
                                            </label>

                                            <select
                                                id="product"
                                                name="product"
                                                required
                                                value={selectedProduct}
                                                onChange={(event) =>
                                                    setSelectedProduct(
                                                        event.target.value
                                                    )
                                                }
                                                className="h-12 w-full rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 text-sm text-[#526d67] outline-none transition focus:border-[#087d68] focus:bg-white"
                                            >

                                                <option value="">
                                                    Select a product or category
                                                </option>

                                                <optgroup label="Food Products">

                                                    {products
                                                        .filter(
                                                            (product) =>
                                                                product.category ===
                                                                "Food Products"
                                                        )
                                                        .map((product) => (

                                                            <option
                                                                key={product.value}
                                                                value={product.value}
                                                            >
                                                                {product.label}
                                                            </option>

                                                        ))}

                                                </optgroup>


                                                <optgroup label="Other Products">

                                                    {products
                                                        .filter(
                                                            (product) =>
                                                                product.category !==
                                                                "Food Products"
                                                        )
                                                        .map((product) => (

                                                            <option
                                                                key={product.value}
                                                                value={product.value}
                                                            >
                                                                {product.label}
                                                            </option>

                                                        ))}

                                                </optgroup>

                                            </select>

                                        </div>

                                    ) : null}


                                    {/* =================================================
                                        SERVICE
                                    ================================================= */}

                                    {inquiryType === "service" ? (

                                        <div>

                                            <label
                                                htmlFor="service"
                                                className="mb-2 block text-xs font-semibold text-[#46645c]"
                                            >
                                                Service
                                                <span className="ml-1 text-[#087d68]">
                                                    *
                                                </span>
                                            </label>

                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={selectedService}
                                                onChange={(event) =>
                                                    setSelectedService(
                                                        event.target.value
                                                    )
                                                }
                                                className="h-12 w-full rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 text-sm text-[#526d67] outline-none transition focus:border-[#087d68] focus:bg-white"
                                            >

                                                <option value="">
                                                    Select a service
                                                </option>

                                                {services.map((service) => (

                                                    <option
                                                        key={service.value}
                                                        value={service.value}
                                                    >
                                                        {service.label}
                                                    </option>

                                                ))}

                                            </select>

                                        </div>

                                    ) : null}


                                    {/* =================================================
                                        REQUIREMENT DETAILS
                                    ================================================= */}

                                    <div>

                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-xs font-semibold text-[#46645c]"
                                        >
                                            Tell us about your requirement
                                            <span className="ml-1 text-[#087d68]">
                                                *
                                            </span>
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={7}
                                            placeholder={
                                                inquiryType === "product" ||
                                                    inquiryType === "bulk-order"
                                                    ? "Please mention product specifications, quantity, packaging requirements, destination market, target timeline and any other relevant details."
                                                    : "Please describe your requirement, objectives, timeline and any relevant details."
                                            }
                                            className="w-full resize-y rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 py-4 text-sm leading-6 text-[#526d67] outline-none transition placeholder:text-[#9aa9a4] focus:border-[#087d68] focus:bg-white"
                                        />

                                    </div>


                                    {/* =================================================
                                        CONSENT
                                    ================================================= */}

                                    <label className="flex cursor-pointer gap-3">

                                        <input
                                            type="checkbox"
                                            name="consent"
                                            required
                                            className="mt-0.5 h-4 w-4 rounded border-[#c8d8d3] accent-[#087d68]"
                                        />

                                        <span className="text-xs leading-5 text-[#71827d]">

                                            I agree that Al Huda may use the information
                                            provided to respond to my enquiry and communicate
                                            with me regarding the request.

                                        </span>

                                    </label>


                                    {/* =================================================
                                        SUBMIT
                                    ================================================= */}

                                    <div className="border-t border-[#edf1ef] pt-6">

                                        <button
                                            type="submit"
                                            className="inline-flex h-13 w-full items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59] focus:outline-none focus:ring-4 focus:ring-[#087d68]/15 sm:w-auto"
                                        >
                                            Send Enquiry
                                            <span className="ml-2">
                                                →
                                            </span>
                                        </button>


                                        <p className="mt-4 text-[11px] leading-5 text-[#94a39e]">
                                            Your enquiry will open in WhatsApp,
                                            addressed to Al Huda&apos;s business number.
                                            Please do not include passwords, payment card
                                            information or other sensitive credentials.
                                        </p>

                                    </div>

                                </form>

                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CONTACT CHANNELS
            ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Contact channels
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Choose how you&apos;d like to connect.
                        </h2>

                    </div>


                    <div className="grid gap-4 md:grid-cols-3">

                        <ContactChannel
                            icon="✉"
                            eyebrow="Email"
                            title="Send an email"
                            text="For detailed product requirements, documents and business enquiries."
                            action="alhudaworldtravels@gmail.com"
                            href="mailto:alhudaworldtravels@gmail.com"
                        />

                        <ContactChannel
                            icon="◉"
                            eyebrow="WhatsApp"
                            title="Message our team"
                            text="Useful for quick questions and initial conversations."
                            action="Start WhatsApp conversation"
                            href="https://wa.me/919833206053"
                            external
                        />

                        <ContactChannel
                            icon="⌂"
                            eyebrow="Office"
                            title="Mumbai, India"
                            text="Our headquarters and primary business location."
                            action="View location"
                            href="https://maps.app.goo.gl/bZs96hweBwCR4VkG7"
                            external
                        />

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHAT HAPPENS NEXT
            ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    What happens next
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                From inquiry to conversation.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#637a74]">
                                A clear requirement gives our team a better starting
                                point for understanding your sourcing or trade needs.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-3">

                            <NextStep
                                number="01"
                                title="Requirement"
                                text="You share your product, service or business requirement."
                            />

                            <NextStep
                                number="02"
                                title="Review"
                                text="Our team reviews the information and relevant details."
                            />

                            <NextStep
                                number="03"
                                title="Discussion"
                                text="We continue the conversation around suitable options."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="bg-[#123b34]">

                <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#73d1b8]">
                        Al Huda
                    </p>

                    <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                        Building international trade relationships,
                        one conversation at a time.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#b5d1ca]">
                        Product sourcing, logistics, quality or a broader trade
                        requirement — start by telling us what you need.
                    </p>

                    <a
                        href="#inquiry"
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                    >
                        Start an Inquiry
                        <span className="ml-2">
                            ↑
                        </span>
                    </a>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   FIELD
   =============================================================== */

function Field({
    label,
    name,
    placeholder,
    type = "text",
    required = false,
}: {
    label: string;
    name: string;
    placeholder: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>

            <label
                htmlFor={name}
                className="mb-2 block text-xs font-semibold text-[#46645c]"
            >

                {label}

                {required && (
                    <span className="ml-1 text-[#087d68]">
                        *
                    </span>
                )}

            </label>


            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                autoComplete={
                    name === "email"
                        ? "email"
                        : name === "name"
                            ? "name"
                            : name === "company"
                                ? "organization"
                                : name === "phone"
                                    ? "tel"
                                    : undefined
                }
                className="h-12 w-full rounded-xl border border-[#dfe9e4] bg-[#f8fbf9] px-4 text-sm text-[#526d67] outline-none transition placeholder:text-[#9aa9a4] focus:border-[#087d68] focus:bg-white"
            />

        </div>
    );
}


/* ===============================================================
   CONTACT DETAIL
   =============================================================== */

function ContactDetail({
    icon,
    label,
    value,
    href,
    external = false,
}: {
    icon: string;
    label: string;
    value: string;
    href?: string;
    external?: boolean;
}) {

    const content = (
        <div className="flex gap-4">

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f5f0] text-sm text-[#087d68]">
                {icon}
            </span>

            <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9aa9a4]">
                    {label}
                </p>

                <p className="mt-1 text-sm font-medium leading-5 text-[#46645c]">
                    {value}
                </p>

            </div>

        </div>
    );


    if (!href) {
        return content;
    }


    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="block rounded-xl transition hover:bg-[#f8fbf9]"
        >
            {content}
        </a>
    );
}


/* ===============================================================
   REQUIREMENT ITEM
   =============================================================== */

function RequirementItem({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-4 rounded-2xl border border-[#dfe9e4] bg-white p-4">

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f5f0] text-[10px] font-bold text-[#087d68]">
                {number}
            </span>

            <div>

                <h3 className="text-sm font-semibold text-[#355950]">
                    {title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#82928d]">
                    {text}
                </p>

            </div>

        </div>
    );
}


/* ===============================================================
   CONTACT CHANNEL
   =============================================================== */

function ContactChannel({
    icon,
    eyebrow,
    title,
    text,
    action,
    href,
    external = false,
}: {
    icon: string;
    eyebrow: string;
    title: string;
    text: string;
    action: string;
    href: string;
    external?: boolean;
}) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group rounded-[1.5rem] border border-[#dfe9e4] bg-[#f8fbf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <div className="flex items-center justify-between">

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f3ee] text-sm text-[#087d68]">
                    {icon}
                </span>

                <span className="text-[#a5bbb5] transition group-hover:translate-x-1 group-hover:text-[#087d68]">
                    →
                </span>

            </div>


            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#087d68]">
                {eyebrow}
            </p>


            <h3 className="mt-2 text-lg font-semibold text-[#29483f]">
                {title}
            </h3>


            <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#71827d]">
                {text}
            </p>


            <p className="mt-5 text-xs font-semibold text-[#087d68]">
                {action}
            </p>

        </a>
    );
}


/* ===============================================================
   NEXT STEP
   =============================================================== */

function NextStep({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-[1.5rem] border border-[#d6e7df] bg-white p-6">

            <span className="text-[10px] font-bold tracking-[0.12em] text-[#087d68]">
                {number}
            </span>

            <h3 className="mt-6 text-base font-semibold text-[#29483f]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#71827d]">
                {text}
            </p>

        </div>
    );
}


/* ===============================================================
   SUCCESS STATE
   =============================================================== */

function SuccessState() {
    return (
        <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e5f3ee] text-xl text-[#087d68]">
                ✓
            </div>


            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                WhatsApp enquiry prepared
            </p>


            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#29483f]">
                Thank you for contacting Al Huda.
            </h2>


            <p className="mt-5 max-w-md text-sm leading-7 text-[#71827d]">
                Your enquiry has been prepared and WhatsApp should have opened
                with the complete enquiry message ready to send.
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                    href="https://wa.me/919833206053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[#087d68] px-6 text-xs font-semibold text-white hover:bg-[#056b59]"
                >
                    Open WhatsApp
                    <span className="ml-2">
                        →
                    </span>
                </a>

                <Link
                    href="/"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[#d5e5df] bg-white px-6 text-xs font-semibold text-[#526d67] hover:bg-[#f8fbf9]"
                >
                    Back to Home
                </Link>

            </div>

        </div>
    );
}

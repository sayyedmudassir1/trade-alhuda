import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ===============================================================
   SPICE DATA
   =============================================================== */

const spiceProducts = {
    turmeric: {
        slug: "turmeric",
        number: "01",
        name: "Turmeric",
        eyebrow: "Indian Spices / Turmeric",
        shortDescription:
            "Explore whole turmeric and turmeric powder sourcing options for international food businesses, importers, distributors and commercial buyers.",
        metaTitle: "Turmeric | Indian Turmeric Sourcing & Export | Al Huda",
        metaDescription:
            "Explore turmeric sourcing options from India, including whole turmeric and turmeric powder for international buyers, food businesses, distributors and importers.",
        keywords: [
            "turmeric exporter India",
            "Indian turmeric supplier",
            "turmeric sourcing India",
            "bulk turmeric India",
            "turmeric powder exporter",
            "whole turmeric exporter",
            "Indian turmeric",
        ],
        image:
            "/images/products/food-products/spices/turmeric.webp",
        imageAlt: "Turmeric spice",
        imageTone: "from-[#392914]/65",
        accent: "#b48421",
        heroLabel: "Product",
        heroTitle: "Turmeric",
        heroSubtext: "Whole & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Turmeric sourcing",
        overviewTitle:
            "A versatile spice for food and ingredient requirements.",
        overviewText:
            "Turmeric is available in different commercial forms, allowing buyers to specify the format that best fits their intended application.",
        overviewText2:
            "Al Huda can discuss sourcing requirements around product form, quantity, packaging, destination market and other buyer specifications.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Powder" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Turmeric",
                description:
                    "Whole dried turmeric suitable for buyers seeking an unground spice format for processing, food preparation or further commercial use.",
                image:
                    "/images/products/food-products/spices/whole-turmeric.webp",
            },
            {
                number: "02",
                title: "Turmeric Powder",
                description:
                    "Ground turmeric for food preparation, seasoning, ingredient applications and commercial food requirements.",
                image:
                    "/images/products/food-products/spices/turmeric.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Food-service businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/turmeric.webp",
        requirementImageAlt: "Turmeric and assorted spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole turmeric, powder or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/red-chilli",
                title: "Red Chilli",
            },
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
            {
                href: "/products/food-products/spices/black-pepper",
                title: "Black Pepper",
            },
        ],
    },

    "red-chilli": {
        slug: "red-chilli",
        number: "02",
        name: "Red Chilli",
        eyebrow: "Indian Spices / Red Chilli",
        shortDescription:
            "Explore dried, whole and processed red chilli sourcing options for international food businesses, spice processors, importers and distributors.",
        metaTitle: "Red Chilli | Indian Red Chilli Sourcing & Export | Al Huda",
        metaDescription:
            "Explore red chilli sourcing options from India, including whole, dried and powdered formats for international buyers, food businesses and importers.",
        keywords: [
            "red chilli exporter India",
            "Indian red chilli supplier",
            "red chilli sourcing India",
            "bulk red chilli India",
            "dried chilli exporter",
            "red chilli powder exporter",
            "Indian chilli",
        ],
        image:
            "/images/products/food-products/spices/whole-red-chilli.webp",
        imageAlt: "Dried red chillies",
        imageTone: "from-[#321411]/65",
        accent: "#a83b2f",
        heroLabel: "Product",
        heroTitle: "Red Chilli",
        heroSubtext: "Whole, dried & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Red chilli sourcing",
        overviewTitle:
            "A widely traded spice for food, seasoning and processing requirements.",
        overviewText:
            "Red chilli can be sourced in different commercial forms depending on the intended food, seasoning or processing application.",
        overviewText2:
            "Al Huda can discuss product form, quantity, packaging, destination market and other buyer specifications as part of the sourcing enquiry.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Dried" },
            { value: "03", label: "Powder" },
            { value: "B2B", label: "Trade" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Red Chilli",
                description:
                    "Whole red chilli suitable for food preparation, spice processing, commercial kitchens and further processing requirements.",
                image:
                    "/images/products/food-products/spices/whole-red-chilli.webp",
            },
            {
                number: "02",
                title: "Dried Red Chilli",
                description:
                    "Dried chilli formats for spice processors, food manufacturers and commercial buyers requiring dried whole chilli.",
                image:
                    "/images/products/food-products/spices/dried-red-chilli.webp",
            },
            {
                number: "03",
                title: "Red Chilli Powder",
                description:
                    "Ground red chilli for seasoning, food preparation, spice blends and ingredient applications.",
                image:
                    "/images/products/food-products/spices/red-chilli.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Importers & distributors",
            "Restaurants & food service",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/whole-red-chilli.webp",
        requirementImageAlt: "Red chilli and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole, dried, crushed, powdered or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Specifications",
                text: "Any product, grade, packing or other specifications you require.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
            {
                href: "/products/food-products/spices/black-pepper",
                title: "Black Pepper",
            },
        ],
    },

    cumin: {
        slug: "cumin",
        number: "03",
        name: "Cumin",
        eyebrow: "Indian Spices / Cumin",
        shortDescription:
            "Explore whole cumin and cumin powder sourcing options for food manufacturers, distributors, importers and commercial buyers.",
        metaTitle: "Cumin | Indian Cumin Sourcing & Export | Al Huda",
        metaDescription:
            "Explore cumin sourcing options from India, including whole cumin and cumin powder for international food businesses, distributors and importers.",
        keywords: [
            "cumin exporter India",
            "Indian cumin supplier",
            "cumin sourcing India",
            "bulk cumin India",
            "cumin powder exporter",
            "whole cumin exporter",
            "Indian cumin",
        ],
        image:
            "/images/products/food-products/spices/cumin.webp",
        imageAlt: "Cumin and Indian spices",
        imageTone: "from-[#342817]/65",
        accent: "#967329",
        heroLabel: "Product",
        heroTitle: "Cumin",
        heroSubtext: "Whole & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Cumin sourcing",
        overviewTitle:
            "A familiar spice for seasoning, food preparation and ingredient applications.",
        overviewText:
            "Cumin can be sourced in whole and processed forms depending on the requirements of food manufacturers, processors and commercial buyers.",
        overviewText2:
            "Product form, quantity, packaging, destination market and other requirements can be discussed as part of the sourcing enquiry.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Powder" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Cumin",
                description:
                    "Whole cumin seeds for food preparation, seasoning, spice processing and commercial requirements.",
                image:
                    "/images/products/food-products/spices/whole-cumin.webp",
            },
            {
                number: "02",
                title: "Cumin Powder",
                description:
                    "Ground cumin for seasoning, spice blends, food preparation and ingredient applications.",
                image:
                    "/images/products/food-products/spices/cumin.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Restaurants & food service",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/cumin.webp",
        requirementImageAlt: "Cumin and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole cumin, powder or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
            {
                href: "/products/food-products/spices/red-chilli",
                title: "Red Chilli",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
            {
                href: "/products/food-products/spices/black-pepper",
                title: "Black Pepper",
            },
        ],
    },

    coriander: {
        slug: "coriander",
        number: "04",
        name: "Coriander",
        eyebrow: "Indian Spices / Coriander",
        shortDescription:
            "Explore coriander seeds and coriander powder sourcing options for food, seasoning and ingredient requirements.",
        metaTitle: "Coriander | Indian Coriander Sourcing & Export | Al Huda",
        metaDescription:
            "Explore coriander sourcing options from India, including coriander seeds and powder for international buyers, food businesses and importers.",
        keywords: [
            "coriander exporter India",
            "Indian coriander supplier",
            "coriander sourcing India",
            "bulk coriander India",
            "coriander powder exporter",
            "coriander seeds exporter",
        ],
        image:
            "/images/products/food-products/spices/coriander.webp",
        imageAlt: "Coriander seeds and spices",
        imageTone: "from-[#2d281b]/65",
        accent: "#75804a",
        heroLabel: "Product",
        heroTitle: "Coriander",
        heroSubtext: "Seeds & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Coriander sourcing",
        overviewTitle:
            "A versatile spice for seasoning, food preparation and ingredient use.",
        overviewText:
            "Coriander is available in seed and processed forms for food manufacturers, spice processors, distributors and other commercial buyers.",
        overviewText2:
            "Sourcing requirements can be discussed around product form, quantity, packaging, destination and other specifications.",
        stats: [
            { value: "01", label: "Seeds" },
            { value: "02", label: "Powder" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Coriander Seeds",
                description:
                    "Whole coriander seeds for food preparation, seasoning, spice processing and commercial requirements.",
                image:
                    "/images/products/food-products/spices/coriander.webp",
            },
            {
                number: "02",
                title: "Coriander Powder",
                description:
                    "Ground coriander for seasoning, spice blends, food preparation and ingredient applications.",
                image:
                    "/images/products/food-products/spices/coriander.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Food-service businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/coriander.webp",
        requirementImageAlt: "Coriander and Indian spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Coriander seeds, powder or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/red-chilli",
                title: "Red Chilli",
            },
            {
                href: "/products/food-products/spices/black-pepper",
                title: "Black Pepper",
            },
        ],
    },

    "black-pepper": {
        slug: "black-pepper",
        number: "05",
        name: "Black Pepper",
        eyebrow: "Indian Spices / Black Pepper",
        shortDescription:
            "Explore black pepper sourcing options in whole and ground formats for food, seasoning, processing and commercial distribution.",
        metaTitle: "Black Pepper | Indian Black Pepper Sourcing & Export | Al Huda",
        metaDescription:
            "Explore black pepper sourcing options from India, including whole and ground black pepper for international buyers, food businesses and importers.",
        keywords: [
            "black pepper exporter India",
            "Indian black pepper supplier",
            "black pepper sourcing India",
            "bulk black pepper India",
            "ground black pepper exporter",
            "whole black pepper exporter",
        ],
        image:
            "/images/products/food-products/spices/whole-black-pepper.webp",
        imageAlt: "Black pepper",
        imageTone: "from-[#151515]/70",
        accent: "#56605b",
        heroLabel: "Product",
        heroTitle: "Black Pepper",
        heroSubtext: "Whole & ground formats",
        productCountLabel: "Spice product",
        overviewLabel: "Black pepper sourcing",
        overviewTitle:
            "A classic spice for seasoning, food preparation and processing.",
        overviewText:
            "Black pepper can be sourced in whole and ground forms for food manufacturers, spice processors, distributors and commercial buyers.",
        overviewText2:
            "Product specifications, quantity, packaging, destination market and other requirements can be discussed during the sourcing process.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Ground" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Black Pepper",
                description:
                    "Whole black pepper suitable for seasoning, grinding, food preparation and commercial processing requirements.",
                image:
                    "/images/products/food-products/spices/whole-black-pepper.webp",
            },
            {
                number: "02",
                title: "Ground Black Pepper",
                description:
                    "Ground black pepper for seasoning, food preparation, ingredient applications and commercial use.",
                image:
                    "/images/products/food-products/spices/black-pepper.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Restaurants & food service",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/whole-black-pepper.webp",
        requirementImageAlt: "Black pepper and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole black pepper, ground or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
            {
                href: "/products/food-products/spices/red-chilli",
                title: "Red Chilli",
            },
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
        ],
    },

    cardamom: {
        slug: "cardamom",
        number: "06",
        name: "Cardamom",
        eyebrow: "Indian Spices / Cardamom",
        shortDescription:
            "Explore cardamom sourcing options for food, beverage, confectionery and spice-related commercial requirements.",
        metaTitle: "Cardamom | Indian Cardamom Sourcing & Export | Al Huda",
        metaDescription:
            "Explore cardamom sourcing options from India for international food, beverage, confectionery and spice buyers.",
        keywords: [
            "cardamom exporter India",
            "Indian cardamom supplier",
            "cardamom sourcing India",
            "bulk cardamom India",
            "green cardamom exporter",
            "cardamom pods exporter",
        ],
        image:
            "/images/products/food-products/spices/cardamom.webp",
        imageAlt: "Cardamom pods",
        imageTone: "from-[#25351f]/65",
        accent: "#66804d",
        heroLabel: "Product",
        heroTitle: "Cardamom",
        heroSubtext: "Whole pods & spice formats",
        productCountLabel: "Spice product",
        overviewLabel: "Cardamom sourcing",
        overviewTitle:
            "A valued spice for food, beverage and confectionery applications.",
        overviewText:
            "Cardamom can form part of sourcing requirements across food, beverage, confectionery and spice-related commercial applications.",
        overviewText2:
            "Product form, quantity, packaging, destination market and buyer specifications can be discussed as part of the sourcing enquiry.",
        stats: [
            { value: "01", label: "Pods" },
            { value: "02", label: "Whole" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Cardamom",
                description:
                    "Whole cardamom pods for food, beverage, confectionery, spice and commercial applications.",
                image:
                    "/images/products/food-products/spices/cardamom.webp",
            },
            {
                number: "02",
                title: "Processed Cardamom",
                description:
                    "Processed cardamom formats for ingredient, food preparation and commercial requirements.",
                image:
                    "/images/products/food-products/spices/cardamom.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Beverage businesses",
            "Confectionery manufacturers",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/cardamom.webp",
        requirementImageAlt: "Cardamom and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole pods, processed or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
            {
                href: "/products/food-products/spices/cinnamon",
                title: "Cinnamon",
            },
            {
                href: "/products/food-products/spices/cloves",
                title: "Cloves",
            },
            {
                href: "/products/food-products/spices/ginger",
                title: "Ginger",
            },
        ],
    },

    ginger: {
        slug: "ginger",
        number: "07",
        name: "Ginger",
        eyebrow: "Indian Spices / Ginger",
        shortDescription:
            "Explore ginger sourcing options in whole, dried and powdered forms for food preparation, spice blends, processing and ingredient applications.",
        metaTitle: "Ginger | Indian Ginger Sourcing & Export | Al Huda",
        metaDescription:
            "Explore ginger sourcing options from India, including whole, dried and powdered formats for international food businesses and buyers.",
        keywords: [
            "ginger exporter India",
            "Indian ginger supplier",
            "ginger sourcing India",
            "bulk ginger India",
            "dried ginger exporter",
            "ginger powder exporter",
        ],
        image:
            "/images/products/food-products/spices/ginger.webp",
        imageAlt: "Fresh ginger",
        imageTone: "from-[#392718]/65",
        accent: "#9d6b2c",
        heroLabel: "Product",
        heroTitle: "Ginger",
        heroSubtext: "Whole, dried & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Ginger sourcing",
        overviewTitle:
            "A versatile ingredient for food, beverage and spice applications.",
        overviewText:
            "Ginger is available in different forms for food preparation, spice blends, processing and ingredient requirements.",
        overviewText2:
            "Sourcing discussions can cover form, quantity, packaging, destination market and other buyer specifications.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Dried" },
            { value: "03", label: "Powder" },
            { value: "B2B", label: "Trade" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Ginger",
                description:
                    "Whole ginger suitable for food preparation and commercial ingredient requirements.",
                image:
                    "/images/products/food-products/spices/whole-ginger.webp",
            },
            {
                number: "02",
                title: "Dried Ginger",
                description:
                    "Dried ginger for spice processing, food preparation and commercial ingredient use.",
                image:
                    "/images/products/food-products/spices/dried-ginger.webp",
            },
            {
                number: "03",
                title: "Ginger Powder",
                description:
                    "Ground ginger for food, beverage, spice blends and ingredient applications.",
                image:
                    "/images/products/food-products/spices/ginger.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Beverage businesses",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/whole-ginger.webp",
        requirementImageAlt: "Ginger and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole, dried, powdered or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
            {
                href: "/products/food-products/spices/cardamom",
                title: "Cardamom",
            },
            {
                href: "/products/food-products/spices/cinnamon",
                title: "Cinnamon",
            },
            {
                href: "/products/food-products/spices/cloves",
                title: "Cloves",
            },
        ],
    },

    cinnamon: {
        slug: "cinnamon",
        number: "08",
        name: "Cinnamon",
        eyebrow: "Indian Spices / Cinnamon",
        shortDescription:
            "Explore cinnamon sourcing options for food, beverage, bakery, confectionery and seasoning applications.",
        metaTitle: "Cinnamon | Indian Cinnamon Sourcing & Export | Al Huda",
        metaDescription:
            "Explore cinnamon sourcing options from India for food, beverage, bakery, confectionery and seasoning requirements.",
        keywords: [
            "cinnamon exporter India",
            "Indian cinnamon supplier",
            "cinnamon sourcing India",
            "bulk cinnamon India",
            "cinnamon powder exporter",
            "whole cinnamon exporter",
        ],
        image:
            "/images/products/food-products/spices/cinnamon.webp",
        imageAlt: "Cinnamon sticks",
        imageTone: "from-[#382318]/65",
        accent: "#a75e35",
        heroLabel: "Product",
        heroTitle: "Cinnamon",
        heroSubtext: "Whole & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Cinnamon sourcing",
        overviewTitle:
            "A familiar spice for food, beverage and bakery requirements.",
        overviewText:
            "Cinnamon is available in whole and processed formats for food, beverage, bakery, confectionery and seasoning applications.",
        overviewText2:
            "Buyers can discuss product form, quantity, packaging, destination market and other commercial requirements.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Powder" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Cinnamon",
                description:
                    "Whole cinnamon sticks or similar whole formats for food, beverage, bakery and commercial applications.",
                image:
                    "/images/products/food-products/spices/whole-cinnamon.webp",
            },
            {
                number: "02",
                title: "Cinnamon Powder",
                description:
                    "Ground cinnamon for bakery, confectionery, beverage, seasoning and ingredient applications.",
                image:
                    "/images/products/food-products/spices/cinnamon.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Bakery businesses",
            "Confectionery manufacturers",
            "Beverage businesses",
            "Importers & distributors",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/whole-cinnamon.webp",
        requirementImageAlt: "Cinnamon and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole cinnamon, powder or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/cardamom",
                title: "Cardamom",
            },
            {
                href: "/products/food-products/spices/ginger",
                title: "Ginger",
            },
            {
                href: "/products/food-products/spices/cloves",
                title: "Cloves",
            },
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
        ],
    },

    cloves: {
        slug: "cloves",
        number: "09",
        name: "Cloves",
        eyebrow: "Indian Spices / Cloves",
        shortDescription:
            "Explore whole cloves and processed formats for culinary, seasoning, food and commercial requirements.",
        metaTitle: "Cloves | Indian Cloves Sourcing & Export | Al Huda",
        metaDescription:
            "Explore cloves sourcing options from India for culinary, seasoning, food processing and commercial requirements.",
        keywords: [
            "cloves exporter India",
            "Indian cloves supplier",
            "cloves sourcing India",
            "bulk cloves India",
            "whole cloves exporter",
            "ground cloves exporter",
        ],
        image:
            "/images/products/food-products/spices/cloves.webp",
        imageAlt: "Whole cloves",
        imageTone: "from-[#251b17]/70",
        accent: "#704e3d",
        heroLabel: "Product",
        heroTitle: "Cloves",
        heroSubtext: "Whole & ground formats",
        productCountLabel: "Spice product",
        overviewLabel: "Cloves sourcing",
        overviewTitle:
            "An aromatic spice for culinary and food-industry applications.",
        overviewText:
            "Cloves can be sourced in whole and processed forms for culinary, seasoning, food processing and ingredient requirements.",
        overviewText2:
            "Commercial requirements around product form, quantity, packaging and destination can be discussed during the enquiry.",
        stats: [
            { value: "01", label: "Whole" },
            { value: "02", label: "Ground" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Cloves",
                description:
                    "Whole cloves for culinary use, spice processing, food preparation and commercial requirements.",
                image:
                    "/images/products/food-products/spices/cloves.webp",
            },
            {
                number: "02",
                title: "Ground Cloves",
                description:
                    "Ground cloves for seasoning, bakery, food preparation and ingredient applications.",
                image:
                    "/images/products/food-products/spices/cloves.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Bakery businesses",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/cloves.webp",
        requirementImageAlt: "Cloves and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole cloves, ground or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/cinnamon",
                title: "Cinnamon",
            },
            {
                href: "/products/food-products/spices/cardamom",
                title: "Cardamom",
            },
            {
                href: "/products/food-products/spices/ginger",
                title: "Ginger",
            },
            {
                href: "/products/food-products/spices/turmeric",
                title: "Turmeric",
            },
        ],
    },

    fennel: {
        slug: "fennel",
        number: "10",
        name: "Fennel (Sauf)",
        eyebrow: "Indian Spices / Fennel",
        shortDescription:
            "Explore fennel seeds and related spice products for food, seasoning and ingredient sourcing requirements.",
        metaTitle: "Fennel Seeds | Indian Fennel Sourcing & Export | Al Huda",
        metaDescription:
            "Explore fennel seed sourcing options from India for international food businesses, distributors, importers and ingredient buyers.",
        keywords: [
            "fennel seeds exporter India",
            "Indian fennel supplier",
            "fennel sourcing India",
            "bulk fennel seeds India",
            "saunf exporter India",
            "fennel seeds supplier",
        ],
        image:
            "/images/products/food-products/spices/fennel.webp",
        imageAlt: "Fennel seeds",
        imageTone: "from-[#29301c]/65",
        accent: "#82934a",
        heroLabel: "Product",
        heroTitle: "Fennel (Sauf)",
        heroSubtext: "Whole fennel seeds",
        productCountLabel: "Spice product",
        overviewLabel: "Fennel sourcing",
        overviewTitle:
            "A widely used seed spice for food and seasoning applications.",
        overviewText:
            "Fennel seeds can form part of sourcing requirements for food preparation, seasoning, spice processing and ingredient use.",
        overviewText2:
            "Buyers can discuss quantity, packaging, destination market and any other commercial specifications.",
        stats: [
            { value: "01", label: "Seeds" },
            { value: "B2B", label: "Trade" },
            { value: "Bulk", label: "Supply" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Fennel Seeds",
                description:
                    "Whole fennel seeds for food preparation, seasoning, spice processing and commercial requirements.",
                image:
                    "/images/products/food-products/spices/fennel.webp",
            },
            {
                number: "02",
                title: "Processed Fennel",
                description:
                    "Processed fennel formats can be discussed for specific food, seasoning and ingredient applications.",
                image:
                    "/images/products/food-products/spices/fennel.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Seasoning businesses",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/fennel.webp",
        requirementImageAlt: "Fennel and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Fennel seeds or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
            {
                href: "/products/food-products/spices/fenugreek",
                title: "Fenugreek",
            },
            {
                href: "/products/food-products/spices/mustard-seeds",
                title: "Mustard Seeds",
            },
        ],
    },

    fenugreek: {
        slug: "fenugreek",
        number: "11",
        name: "Fenugreek (Methi)",
        eyebrow: "Indian Spices / Fenugreek",
        shortDescription:
            "Explore fenugreek products for spice blends, food preparation, seasoning and ingredient sourcing requirements.",
        metaTitle: "Fenugreek | Indian Fenugreek Sourcing & Export | Al Huda",
        metaDescription:
            "Explore fenugreek sourcing options from India, including fenugreek seeds and powder for international food businesses and buyers.",
        keywords: [
            "fenugreek exporter India",
            "Indian fenugreek supplier",
            "fenugreek sourcing India",
            "bulk fenugreek India",
            "methi seeds exporter",
            "fenugreek powder exporter",
        ],
        image:
            "/images/products/food-products/spices/fenugreek.webp",
        imageAlt: "Fenugreek and spices",
        imageTone: "from-[#332c18]/65",
        accent: "#9a8738",
        heroLabel: "Product",
        heroTitle: "Fenugreek (Methi)",
        heroSubtext: "Seeds & powdered formats",
        productCountLabel: "Spice product",
        overviewLabel: "Fenugreek sourcing",
        overviewTitle:
            "A seed spice used across food, seasoning and ingredient applications.",
        overviewText:
            "Fenugreek can be sourced in seed and processed forms for spice blends, food preparation and commercial ingredient requirements.",
        overviewText2:
            "Quantity, packaging, destination market and other buyer specifications can be discussed during the sourcing process.",
        stats: [
            { value: "01", label: "Seeds" },
            { value: "02", label: "Powder" },
            { value: "B2B", label: "Trade" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Fenugreek Seeds",
                description:
                    "Whole fenugreek seeds for food preparation, spice blends, seasoning and processing requirements.",
                image:
                    "/images/products/food-products/spices/fenugreek.webp",
            },
            {
                number: "02",
                title: "Fenugreek Powder",
                description:
                    "Ground fenugreek for seasoning, spice blends, food preparation and ingredient applications.",
                image:
                    "/images/products/food-products/spices/fenugreek.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Seasoning businesses",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/fenugreek.webp",
        requirementImageAlt: "Fenugreek and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Fenugreek seeds, powder or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/fennel",
                title: "Fennel",
            },
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
            {
                href: "/products/food-products/spices/mustard-seeds",
                title: "Mustard Seeds",
            },
        ],
    },

    "mustard-seeds": {
        slug: "mustard-seeds",
        number: "12",
        name: "Mustard Seeds (Rai)",
        eyebrow: "Indian Spices / Mustard Seeds",
        shortDescription:
            "Explore mustard seed sourcing options for culinary, seasoning, processing and food-industry requirements.",
        metaTitle: "Mustard Seeds | Indian Mustard Seed Sourcing & Export | Al Huda",
        metaDescription:
            "Explore mustard seed sourcing options from India for culinary, seasoning, food processing and commercial requirements.",
        keywords: [
            "mustard seeds exporter India",
            "Indian mustard seed supplier",
            "mustard seeds sourcing India",
            "bulk mustard seeds India",
            "mustard exporter India",
            "mustard seed supplier",
        ],
        image:
            "/images/products/food-products/spices/mustard.webp",
        imageAlt: "Mustard seeds and spices",
        imageTone: "from-[#2d2918]/65",
        accent: "#9c8430",
        heroLabel: "Product",
        heroTitle: "Mustard Seeds",
        heroSubtext: "Whole seed format",
        productCountLabel: "Spice product",
        overviewLabel: "Mustard seed sourcing",
        overviewTitle:
            "A commonly used seed spice for culinary and food-industry requirements.",
        overviewText:
            "Mustard seeds can form part of sourcing requirements for seasoning, food preparation, spice processing and commercial food applications.",
        overviewText2:
            "Buyers can discuss quantity, packaging, destination market and other product or commercial specifications.",
        stats: [
            { value: "01", label: "Seeds" },
            { value: "B2B", label: "Trade" },
            { value: "Bulk", label: "Supply" },
            { value: "Global", label: "Markets" },
        ],
        forms: [
            {
                number: "01",
                title: "Whole Mustard Seeds",
                description:
                    "Whole mustard seeds for culinary, seasoning, food processing and commercial requirements.",
                image:
                    "/images/products/food-products/spices/mustard.webp",
            },
            {
                number: "02",
                title: "Processed Mustard",
                description:
                    "Processed mustard formats can be discussed for specific food, seasoning and ingredient requirements.",
                image:
                    "/images/products/food-products/spices/mustard.webp",
            },
        ],
        applications: [
            "Food manufacturers",
            "Spice processors",
            "Seasoning businesses",
            "Importers & distributors",
            "Retail & grocery businesses",
            "Ingredient buyers",
        ],
        requirementsImage:
            "/images/products/food-products/spices/mustard.webp",
        requirementImageAlt: "Mustard seeds and spices",
        enquiryDetails: [
            {
                title: "Product form",
                text: "Whole mustard seeds or another required format.",
            },
            {
                title: "Quantity",
                text: "Your expected purchasing or shipment quantity.",
            },
            {
                title: "Packaging",
                text: "Preferred packaging, labelling or packing requirements.",
            },
            {
                title: "Destination",
                text: "Country or market where the product will be supplied.",
            },
        ],
        related: [
            {
                href: "/products/food-products/spices/fennel",
                title: "Fennel",
            },
            {
                href: "/products/food-products/spices/fenugreek",
                title: "Fenugreek",
            },
            {
                href: "/products/food-products/spices/cumin",
                title: "Cumin",
            },
            {
                href: "/products/food-products/spices/coriander",
                title: "Coriander",
            },
        ],
    },
} as const;


/* ===============================================================
   TYPES
   =============================================================== */

type Spice = (typeof spiceProducts)[keyof typeof spiceProducts];


/* ===============================================================
   STATIC PARAMS
   =============================================================== */

export function generateStaticParams() {
    return Object.keys(spiceProducts).map((slug) => ({
        slug,
    }));
}


/* ===============================================================
   METADATA
   =============================================================== */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const product = spiceProducts[slug as keyof typeof spiceProducts];

    if (!product) {
        return {
            title: "Spice Product | Al Huda",
        };
    }

    return {
        title: product.metaTitle,
        description: product.metaDescription,
        keywords: [...product.keywords],
        alternates: {
            canonical: `/products/food-products/spices/${product.slug}`,
        },
        openGraph: {
            title: `${product.name} | Al Huda`,
            description: product.metaDescription,
            type: "website",
        },
    };
}


/* ===============================================================
   PAGE
   =============================================================== */

export default async function SpiceProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const product = spiceProducts[slug as keyof typeof spiceProducts];

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-48 left-[25%] h-[450px] w-[450px] rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#708881]"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-[#087d68]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <Link
                            href="/our-products"
                            className="transition hover:text-[#087d68]"
                        >
                            Our Products
                        </Link>

                        <span>/</span>

                        <Link
                            href="/products/food-products"
                            className="transition hover:text-[#087d68]"
                        >
                            Food Products
                        </Link>

                        <span>/</span>

                        <Link
                            href="/products/food-products/spices"
                            className="transition hover:text-[#087d68]"
                        >
                            Spices
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>
                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_0.85fr]">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    {product.eyebrow}
                                </span>

                            </div>


                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#12342f] sm:text-6xl lg:text-7xl">
                                {product.name} for
                                <span className="block text-[#07846d]">
                                    global sourcing.
                                </span>
                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.shortDescription}
                            </p>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a {product.name} Quote
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>

                                <a
                                    href="#product-forms"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    Explore Product
                                </a>

                            </div>

                        </div>


                        <div className="relative">

                            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={product.imageAlt}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${product.imageTone} via-transparent to-transparent`}
                                />

                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p
                                            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                                            style={{ color: product.accent }}
                                        >
                                            {product.heroLabel}
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {product.heroTitle}
                                        </p>

                                        <p className="mt-1 text-sm text-white/75">
                                            {product.heroSubtext}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#d7e7e1] bg-white p-4 shadow-[0_15px_40px_rgba(20,70,60,0.08)] sm:-left-8">

                                <div
                                    className="text-xl font-semibold tracking-tight"
                                    style={{ color: product.accent }}
                                >
                                    {product.number}
                                </div>

                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#728983]">
                                    {product.productCountLabel}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUICK PRODUCT NAV
            ===================================================== */}

            <section className="sticky top-0 z-30 border-y border-[#dce8e3] bg-white/90 backdrop-blur-xl">

                <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-12">

                    <nav className="flex min-w-max items-center gap-1 py-3">

                        <a
                            href="#overview"
                            className="rounded-full bg-[#e8f5f0] px-4 py-2.5 text-xs font-semibold text-[#087d68]"
                        >
                            Overview
                        </a>

                        <a
                            href="#product-forms"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Product Forms
                        </a>

                        <a
                            href="#applications"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Applications
                        </a>

                        <a
                            href="#requirements"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Requirements
                        </a>

                        <a
                            href="#enquiry"
                            className="rounded-full px-4 py-2.5 text-xs font-medium text-[#607872] transition hover:bg-[#e8f5f0] hover:text-[#087d68]"
                        >
                            Enquiry
                        </a>

                    </nav>

                </div>

            </section>


            {/* =====================================================
                OVERVIEW
            ===================================================== */}

            <section
                id="overview"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    {product.overviewLabel}
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                {product.overviewTitle}
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.overviewText}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                {product.overviewText2}
                            </p>


                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                {product.stats.map((stat) => (
                                    <MiniStat
                                        key={stat.label}
                                        value={stat.value}
                                        label={stat.label}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRODUCT FORMS
            ===================================================== */}

            <section
                id="product-forms"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mb-14 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Product forms
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Choose the {product.name.toLowerCase()} format for your requirement.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            Product availability, specifications and commercial terms
                            should be confirmed against the individual sourcing
                            requirement.
                        </p>

                    </div>


                    <div
                        className={`grid gap-6 ${product.forms.length === 2
                            ? "md:grid-cols-2"
                            : "md:grid-cols-2 lg:grid-cols-3"
                            }`}
                    >

                        {product.forms.map((form) => (
                            <div
                                key={form.number}
                                className="group overflow-hidden rounded-[1.75rem] border border-[#dfeae5] bg-white shadow-[0_10px_40px_rgba(20,70,60,0.04)]"
                            >

                                <div className="relative aspect-[16/8] overflow-hidden">

                                    <img
                                        src={form.image}
                                        alt={form.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2e2515]/70 to-transparent" />

                                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-[#087d68]">
                                        {form.number}
                                    </div>

                                </div>


                                <div className="p-7">

                                    <h3 className="text-2xl font-semibold tracking-tight text-[#193d36]">
                                        {form.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-[#667e78]">
                                        {form.description}
                                    </p>

                                    <Link
                                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                                        className="group/link mt-7 inline-flex items-center text-sm font-semibold text-[#087d68]"
                                    >
                                        Discuss this format

                                        <span className="ml-2 transition-transform group-hover/link:translate-x-1">
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                BUYER APPLICATIONS
            ===================================================== */}

            <section
                id="applications"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Buyer applications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Sourced for different food businesses.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                {product.name} can form part of sourcing requirements
                                across food manufacturing, distribution, retail and
                                other commercial food channels.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.applications.map((application, index) => (
                                <div
                                    key={application}
                                    className="flex items-center gap-4 rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5"
                                >

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5f3ee] text-[10px] font-bold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-medium text-[#345850]">
                                        {application}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                REQUIREMENTS
            ===================================================== */}

            <section
                id="requirements"
                className="scroll-mt-20 bg-[#edf7f3]"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        <div className="relative overflow-hidden rounded-[1.75rem]">

                            <img
                                src={product.requirementsImage}
                                alt={product.requirementImageAlt}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#302515]/50 to-transparent" />

                            <div className="absolute bottom-5 left-5">

                                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                                    Buyer-led sourcing
                                </span>

                            </div>

                        </div>


                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Tell us what you need
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                A clear requirement helps us start in the right place.
                            </h2>

                            <p className="mt-5 leading-7 text-[#637a74]">
                                When contacting us, include as much of the following
                                information as possible.
                            </p>


                            <div className="mt-8 space-y-3">

                                {product.enquiryDetails.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-xl border border-[#d6e6e0] bg-white p-4"
                                    >

                                        <div className="flex gap-4">

                                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#087d68]" />

                                            <div>

                                                <h3 className="text-sm font-semibold text-[#23463f]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-[#718680]">
                                                    {item.text}
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SOURCING PROCESS
            ===================================================== */}

            <section className="bg-[#123b34] text-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    Sourcing process
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                From requirement to quotation.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                A simple process designed around understanding the
                                buyer&apos;s requirement before discussing sourcing and
                                trade options.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <ProcessStep
                                number="01"
                                title="Share your requirement"
                                text={`Tell us the ${product.name.toLowerCase()} form, quantity, destination and any product or packaging specifications.`}
                            />

                            <ProcessStep
                                number="02"
                                title="Sourcing review"
                                text="Suitable sourcing possibilities can be explored against the information provided."
                            />

                            <ProcessStep
                                number="03"
                                title="Commercial discussion"
                                text="Product, quantity, packaging and other commercial details can then be discussed."
                            />

                            <ProcessStep
                                number="04"
                                title="Trade coordination"
                                text="Once agreed, relevant documentation and shipment requirements can be coordinated."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                RELATED SPICES
            ===================================================== */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                More spices
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                            Continue exploring the spice portfolio.
                        </h2>

                    </div>


                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                        {product.related.map((related) => (
                            <RelatedProduct
                                key={related.href}
                                href={related.href}
                                title={related.title}
                            />
                        ))}

                    </div>


                    <div className="mt-4">

                        <Link
                            href="/products/food-products/spices"
                            className="inline-flex items-center text-sm font-semibold text-[#087d68]"
                        >
                            View all spices

                            <span className="ml-2">
                                →
                            </span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}

            <section
                id="enquiry"
                className="scroll-mt-20 bg-[#f8fbf9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#07846d] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20">

                    <div className="mx-auto max-w-2xl">

                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/15">

                            <span className="text-lg">
                                ↗
                            </span>

                        </div>


                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9eee1]">
                            {product.name} sourcing enquiry
                        </p>


                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Looking for {product.name.toLowerCase()}?
                        </h2>


                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your preferred form, quantity, destination market
                            and any specifications you require.
                        </p>


                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(product.name)}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a {product.name} Quote

                                <span className="ml-2">
                                    →
                                </span>
                            </Link>


                            <Link
                                href="/products/food-products/spices"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                View All Spices
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   MINI STAT
   =============================================================== */

function MiniStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border border-[#dfeae5] bg-[#f8fbf9] p-4">

            <div className="text-sm font-semibold text-[#087d68]">
                {value}
            </div>

            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#7b918b]">
                {label}
            </div>

        </div>
    );
}


/* ===============================================================
   PROCESS STEP
   =============================================================== */

function ProcessStep({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:bg-white/[0.075]">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4fae98]/40 text-xs font-semibold text-[#73d1b8]">
                {number}
            </div>

            <div>

                <h3 className="font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#aacbc3]">
                    {text}
                </p>

            </div>

        </div>
    );
}


/* ===============================================================
   RELATED PRODUCT
   =============================================================== */

function RelatedProduct({
    href,
    title,
}: {
    href: string;
    title: string;
}) {
    return (
        <Link
            href={href}
            className="group flex min-h-[90px] items-center justify-between rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5 transition hover:border-[#b8d9cf] hover:bg-[#edf7f3]"
        >

            <span className="text-sm font-semibold text-[#345850]">
                {title}
            </span>

            <span className="text-[#087d68] transition-transform group-hover:translate-x-1">
                →
            </span>

        </Link>
    );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProduceProduct = {
    slug: string;
    name: string;
    category: "Fruits" | "Vegetables";
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    season?: string;
    uses: string[];
    buyerTypes: string[];
    specifications: string[];
    featured?: boolean;
};

const products: ProduceProduct[] = [
    /* =========================================================
       FRUITS
    ========================================================= */

    {
        slug: "mangoes",
        name: "Mangoes",
        category: "Fruits",
        description:
            "Indian mangoes for fresh fruit distribution, retail, food businesses and international produce sourcing.",
        longDescription:
            "Indian mangoes are widely used across fresh-fruit markets, retail, foodservice and food businesses. Al Huda can discuss sourcing requirements based on variety, grade, size, quantity, destination market and season.",
        image: "/images/products/food-products/mangoes.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        season: "Seasonal availability",
        uses: [
            "Fresh fruit distribution",
            "Retail",
            "Foodservice",
            "Fruit wholesalers",
            "Food businesses",
        ],
        buyerTypes: [
            "Fruit importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food businesses",
        ],
        specifications: [
            "Mango variety",
            "Fruit size",
            "Grade",
            "Ripeness requirements",
            "Quantity",
            "Packaging",
            "Destination market",
        ],
        featured: true,
    },

    {
        slug: "pomegranates",
        name: "Pomegranates",
        category: "Fruits",
        description:
            "Fresh Indian pomegranates for importers, distributors, retailers and commercial fruit sourcing.",
        longDescription:
            "Indian pomegranates are suitable for fresh-fruit distribution, retail and commercial food applications. Requirements can be discussed around fruit size, grade, appearance, packaging, quantity and destination.",
        image: "/images/products/food-products/pomegranates.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        season: "Seasonal availability",
        uses: [
            "Fresh fruit distribution",
            "Retail",
            "Foodservice",
            "Fruit wholesalers",
            "Commercial food use",
        ],
        buyerTypes: [
            "Fruit importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food businesses",
        ],
        specifications: [
            "Fruit size",
            "Grade",
            "Colour",
            "Quality parameters",
            "Quantity",
            "Packaging",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "grapes",
        name: "Grapes",
        category: "Fruits",
        description:
            "Fresh Indian table grapes for international fruit distribution, retail, foodservice and commercial buyers.",
        longDescription:
            "Indian table grapes can be sourced for distributors, wholesalers, retailers and commercial fresh-fruit programmes. Product requirements can be discussed according to variety, grade, size, packaging, quantity and destination.",
        image: "/images/products/food-products/grapes.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        season: "Seasonal availability",
        uses: [
            "Fresh fruit distribution",
            "Retail",
            "Foodservice",
            "Wholesaling",
            "Commercial produce",
        ],
        buyerTypes: [
            "Importers",
            "Fruit distributors",
            "Wholesalers",
            "Retailers",
            "Foodservice businesses",
        ],
        specifications: [
            "Grape variety",
            "Berry size",
            "Grade",
            "Colour",
            "Packaging",
            "Quantity",
            "Destination market",
        ],
        featured: true,
    },

    {
        slug: "bananas",
        name: "Bananas",
        category: "Fruits",
        description:
            "Bananas sourced for fruit distributors, wholesalers, retailers, food businesses and commercial requirements.",
        longDescription:
            "Bananas are a widely traded fresh-fruit category used across retail, wholesale, foodservice and food businesses. Sourcing requirements can be discussed according to product specifications, quantity and destination.",
        image: "/images/products/food-products/bananas.webp",
        tags: ["Fresh", "Bulk", "Export"],
        season: "Year-round sourcing subject to availability",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Fresh fruit distribution",
            "Food businesses",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food businesses",
        ],
        specifications: [
            "Variety",
            "Fruit size",
            "Ripeness",
            "Grade",
            "Quantity",
            "Packaging",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "oranges",
        name: "Oranges",
        category: "Fruits",
        description:
            "Fresh oranges for distributors, wholesalers, retailers and commercial fruit sourcing requirements.",
        longDescription:
            "Fresh oranges can be sourced for retail, wholesale, foodservice and commercial fruit distribution. Requirements can be discussed around size, grade, variety, quantity, packaging and destination.",
        image: "/images/products/food-products/oranges.webp",
        tags: ["Fresh", "Seasonal"],
        season: "Seasonal availability",
        uses: [
            "Fresh fruit retail",
            "Wholesale",
            "Foodservice",
            "Distribution",
            "Commercial food use",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Variety",
            "Fruit size",
            "Grade",
            "Appearance",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "lemons",
        name: "Lemons",
        category: "Fruits",
        description:
            "Fresh lemons for foodservice, retail, beverage, processing and commercial produce requirements.",
        longDescription:
            "Fresh lemons are suitable for retail, foodservice, beverage applications and commercial food businesses. Product specifications can be discussed according to the buyer's market and intended use.",
        image: "/images/products/food-products/lemons.webp",
        tags: ["Fresh", "Bulk"],
        season: "Availability varies by variety and season",
        uses: [
            "Foodservice",
            "Retail",
            "Beverage applications",
            "Food preparation",
            "Processing",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Restaurants",
            "Foodservice businesses",
            "Wholesalers",
        ],
        specifications: [
            "Fruit size",
            "Grade",
            "Variety",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "apples",
        name: "Apples",
        category: "Fruits",
        description:
            "Apples for fruit distributors, retailers, wholesalers, foodservice and commercial fresh-fruit requirements.",
        longDescription:
            "Apples are a major fresh-fruit category for retail and wholesale markets. Sourcing discussions can cover variety, fruit size, grade, packaging, quantity and destination-market requirements.",
        image: "/images/products/food-products/apples.webp",
        tags: ["Fresh", "Global Trade"],
        season: "Variety and origin dependent",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Fresh fruit distribution",
            "Commercial food use",
        ],
        buyerTypes: [
            "Fruit importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Apple variety",
            "Fruit size",
            "Grade",
            "Colour",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },

    {
        slug: "watermelon",
        name: "Watermelon",
        category: "Fruits",
        description:
            "Fresh watermelon for wholesalers, distributors, retailers, foodservice and seasonal produce programmes.",
        longDescription:
            "Fresh watermelon can be sourced for wholesale, retail, foodservice and seasonal produce requirements. Commercial specifications can be discussed according to market and buyer needs.",
        image: "/images/products/food-products/watermelon.webp",
        tags: ["Fresh", "Seasonal"],
        season: "Seasonal availability",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Fruit distribution",
            "Seasonal programmes",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Fruit size",
            "Grade",
            "Weight range",
            "Appearance",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "papaya",
        name: "Papaya",
        category: "Fruits",
        description:
            "Fresh papaya for fruit importers, distributors, retailers and commercial tropical-fruit requirements.",
        longDescription:
            "Fresh papaya is suitable for tropical-fruit distribution, retail, foodservice and commercial food businesses. Requirements can be discussed according to maturity, size, grade and destination.",
        image: "/images/products/food-products/papaya.webp",
        tags: ["Fresh", "Tropical"],
        season: "Availability varies by origin and season",
        uses: [
            "Fresh fruit retail",
            "Wholesale",
            "Foodservice",
            "Tropical fruit distribution",
        ],
        buyerTypes: [
            "Fruit importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Fruit size",
            "Maturity",
            "Grade",
            "Variety",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "pineapple",
        name: "Pineapple",
        category: "Fruits",
        description:
            "Fresh pineapple for fruit distributors, retailers, foodservice and international tropical-fruit sourcing.",
        longDescription:
            "Fresh pineapple is suitable for tropical-fruit distribution, retail and foodservice applications. Buyer requirements can be discussed around fruit size, maturity, grade, quantity and packaging.",
        image: "/images/products/food-products/pineapple.webp",
        tags: ["Fresh", "Tropical", "Global Trade"],
        season: "Availability varies by origin",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Tropical fruit distribution",
            "Food businesses",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Fruit size",
            "Maturity",
            "Grade",
            "Weight",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "avocado",
        name: "Avocado",
        category: "Fruits",
        description:
            "Avocados for retailers, foodservice operators, distributors and buyers seeking internationally traded fresh fruit.",
        longDescription:
            "Avocado is an internationally traded fresh-fruit category used extensively across retail, foodservice and food businesses. Sourcing discussions can cover variety, maturity, size, grade, quantity and destination.",
        image: "/images/products/food-products/avocado.webp",
        tags: ["Fresh", "High Demand", "Global Trade"],
        season: "Origin and variety dependent",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Fresh fruit distribution",
            "Food businesses",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Retailers",
            "Foodservice businesses",
            "Wholesalers",
        ],
        specifications: [
            "Variety",
            "Fruit size",
            "Maturity",
            "Grade",
            "Quantity",
            "Packaging",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "kiwifruit",
        name: "Kiwifruit",
        category: "Fruits",
        description:
            "Fresh kiwifruit for retailers, wholesalers, distributors and commercial fruit sourcing requirements.",
        longDescription:
            "Kiwifruit is suitable for retail, wholesale and fresh-fruit distribution programmes. Specifications can be discussed based on fruit size, grade, variety, packaging and destination.",
        image: "/images/products/food-products/kiwifruit.webp",
        tags: ["Fresh", "Global Trade"],
        season: "Origin and variety dependent",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Fruit distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Variety",
            "Fruit size",
            "Grade",
            "Maturity",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "blueberries",
        name: "Blueberries",
        category: "Fruits",
        description:
            "Fresh blueberries for premium fruit distribution, retail, foodservice and commercial sourcing requirements.",
        longDescription:
            "Blueberries are a premium fresh-fruit category used across retail, foodservice and modern food businesses. Buyer-specific requirements can include fruit size, grade, packaging, quantity and destination.",
        image: "/images/products/food-products/blueberries.webp",
        tags: ["Fresh", "High Demand", "Premium"],
        season: "Origin and production season dependent",
        uses: [
            "Premium retail",
            "Foodservice",
            "Hotels and restaurants",
            "Fresh fruit distribution",
            "Food businesses",
        ],
        buyerTypes: [
            "Importers",
            "Premium retailers",
            "Distributors",
            "Foodservice businesses",
            "Wholesalers",
        ],
        specifications: [
            "Fruit size",
            "Grade",
            "Firmness",
            "Packaging",
            "Quantity",
            "Cold-chain requirements",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "strawberries",
        name: "Strawberries",
        category: "Fruits",
        description:
            "Fresh strawberries for retail, foodservice, fruit distributors and premium fresh-produce requirements.",
        longDescription:
            "Fresh strawberries are suitable for retail, foodservice, hospitality and premium fresh-produce programmes. Due to their perishable nature, product and handling requirements should be confirmed during enquiry.",
        image: "/images/products/food-products/strawberries.webp",
        tags: ["Fresh", "Premium", "Seasonal"],
        season: "Seasonal and origin dependent",
        uses: [
            "Premium retail",
            "Foodservice",
            "Hotels and restaurants",
            "Fresh fruit distribution",
        ],
        buyerTypes: [
            "Importers",
            "Retailers",
            "Distributors",
            "Foodservice businesses",
        ],
        specifications: [
            "Fruit size",
            "Grade",
            "Maturity",
            "Packaging",
            "Quantity",
            "Handling requirements",
            "Destination",
        ],
    },

    {
        slug: "dates",
        name: "Dates",
        category: "Fruits",
        description:
            "Dates for retail, foodservice, ingredient use, wholesalers and international fruit distribution requirements.",
        longDescription:
            "Dates are used across retail, foodservice, ingredient applications and commercial fruit distribution. Requirements can be discussed around variety, size, grade, packaging, quantity and intended application.",
        image: "/images/products/food-products/dates.webp",
        tags: ["Fresh", "Dried", "Global Trade"],
        season: "Variety and origin dependent",
        uses: [
            "Retail",
            "Foodservice",
            "Ingredient applications",
            "Wholesale",
            "Food manufacturing",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food manufacturers",
        ],
        specifications: [
            "Date variety",
            "Size",
            "Grade",
            "Moisture",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },

    /* =========================================================
       VEGETABLES
    ========================================================= */

    {
        slug: "onions",
        name: "Onions",
        category: "Vegetables",
        description:
            "Fresh onions for food businesses, distributors, wholesalers, processing and commercial produce requirements.",
        longDescription:
            "Indian onions are an important fresh-vegetable category for wholesale, foodservice, retail, processing and commercial food businesses. Buyer requirements can be discussed around variety, size, grade, packaging and destination.",
        image: "/images/products/food-products/onions.webp",
        tags: ["Fresh", "Bulk", "Export"],
        season: "Availability varies by variety and season",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Food processing",
            "Commercial food use",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food processors",
        ],
        specifications: [
            "Onion variety",
            "Bulb size",
            "Grade",
            "Colour",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "potatoes",
        name: "Potatoes",
        category: "Vegetables",
        description:
            "Potatoes for foodservice, retail, distribution, processing and commercial fresh-produce requirements.",
        longDescription:
            "Potatoes are a major commercial vegetable category used across retail, foodservice, food processing and wholesale distribution. Specifications can be discussed according to variety, size, grade, packaging and intended use.",
        image: "/images/products/food-products/potatoes.webp",
        tags: ["Fresh", "Bulk", "Export"],
        season: "Availability varies by variety and season",
        uses: [
            "Retail",
            "Foodservice",
            "Food processing",
            "Wholesale",
            "Distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food processors",
        ],
        specifications: [
            "Potato variety",
            "Size",
            "Grade",
            "Intended use",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "tomatoes",
        name: "Tomatoes",
        category: "Vegetables",
        description:
            "Fresh tomatoes for food preparation, foodservice, distribution, processing and commercial buyers.",
        longDescription:
            "Fresh tomatoes are suitable for retail, foodservice, food preparation, distribution and processing. Buyer requirements can be discussed around variety, maturity, size, grade, packaging and destination.",
        image: "/images/products/food-products/tomatoes.webp",
        tags: ["Fresh", "Bulk", "Export"],
        season: "Availability varies by variety and season",
        uses: [
            "Retail",
            "Foodservice",
            "Food processing",
            "Restaurants",
            "Wholesale",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Food processors",
        ],
        specifications: [
            "Tomato variety",
            "Size",
            "Maturity",
            "Grade",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "garlic",
        name: "Garlic",
        category: "Vegetables",
        description:
            "Fresh garlic for foodservice, retail, ingredient supply, processing, distributors and commercial buyers.",
        longDescription:
            "Fresh garlic is used widely in retail, foodservice, food preparation, processing and ingredient supply. Requirements can be discussed according to bulb size, grade, variety, packaging and destination.",
        image: "/images/products/food-products/garlic.webp",
        tags: ["Fresh", "Bulk", "High Demand"],
        season: "Availability varies by variety and season",
        uses: [
            "Foodservice",
            "Retail",
            "Food processing",
            "Ingredient supply",
            "Wholesale",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Food processors",
            "Retailers",
        ],
        specifications: [
            "Garlic variety",
            "Bulb size",
            "Grade",
            "Clove size",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "green-chillies",
        name: "Green Chillies",
        category: "Vegetables",
        description:
            "Fresh green chillies for food preparation, restaurants, distributors, retailers and commercial buyers.",
        longDescription:
            "Indian green chillies are suitable for fresh retail, foodservice, restaurants, food preparation and commercial distribution. Product specifications can be discussed according to variety, size, heat level and destination.",
        image: "/images/products/food-products/green-chillies.webp",
        tags: ["Fresh", "Bulk", "Export"],
        season: "Availability varies by variety and season",
        uses: [
            "Restaurants",
            "Foodservice",
            "Retail",
            "Food preparation",
            "Wholesale",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Restaurants",
            "Retailers",
        ],
        specifications: [
            "Chilli variety",
            "Size",
            "Maturity",
            "Grade",
            "Quantity",
            "Packaging",
            "Destination",
        ],
    },

    {
        slug: "okra",
        name: "Okra",
        category: "Vegetables",
        description:
            "Fresh okra for food businesses, wholesalers, retailers and international fresh-produce requirements.",
        longDescription:
            "Fresh okra is a commonly used vegetable across South Asian, Middle Eastern, African and international food markets. Requirements can be discussed around size, tenderness, grade, packaging, quantity and destination.",
        image: "/images/products/food-products/okra.webp",
        tags: ["Fresh", "Seasonal", "Export"],
        season: "Seasonal availability",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Wholesale",
            "Fresh vegetable distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Restaurants",
        ],
        specifications: [
            "Pod size",
            "Tenderness",
            "Grade",
            "Colour",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "fresh-ginger",
        name: "Fresh Ginger",
        category: "Vegetables",
        description:
            "Fresh ginger for food preparation, processing, distribution and ingredient-oriented sourcing requirements.",
        longDescription:
            "Fresh ginger is used across food preparation, restaurants, foodservice, processing and ingredient supply. Product requirements can be discussed according to rhizome size, grade, freshness, packaging and destination.",
        image: "/images/products/food-products/fresh-ginger.webp",
        tags: ["Fresh", "Bulk", "Export"],
        season: "Availability varies by origin and season",
        uses: [
            "Food preparation",
            "Foodservice",
            "Processing",
            "Ingredient supply",
            "Wholesale",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Food processors",
            "Restaurants",
        ],
        specifications: [
            "Rhizome size",
            "Grade",
            "Freshness",
            "Appearance",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },

    {
        slug: "sweet-potatoes",
        name: "Sweet Potatoes",
        category: "Vegetables",
        description:
            "Sweet potatoes for retail, foodservice, wholesalers, distributors and commercial fresh-produce programmes.",
        longDescription:
            "Sweet potatoes are used across retail, foodservice, restaurants and commercial fresh-produce programmes. Requirements can be discussed around variety, size, grade, packaging, quantity and destination.",
        image: "/images/products/food-products/sweet-potatoes.webp",
        tags: ["Fresh", "High Demand", "Global Trade"],
        season: "Variety and origin dependent",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Wholesale",
            "Fresh vegetable distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Foodservice businesses",
        ],
        specifications: [
            "Variety",
            "Root size",
            "Grade",
            "Weight range",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "bell-peppers",
        name: "Bell Peppers",
        category: "Vegetables",
        description:
            "Fresh bell peppers for retail, foodservice, distributors, restaurants and commercial vegetable sourcing.",
        longDescription:
            "Fresh bell peppers are suitable for retail, restaurants, foodservice, food preparation and commercial distribution. Product specifications can include colour, size, grade, packaging and quantity.",
        image: "/images/products/food-products/bell-peppers.webp",
        tags: ["Fresh", "Premium", "Global Trade"],
        season: "Availability varies by origin and season",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Food preparation",
            "Wholesale",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Foodservice businesses",
        ],
        specifications: [
            "Colour",
            "Size",
            "Grade",
            "Shape",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "green-beans",
        name: "Green Beans",
        category: "Vegetables",
        description:
            "Fresh green beans for retailers, foodservice, wholesalers and international vegetable sourcing requirements.",
        longDescription:
            "Fresh green beans can be sourced for retail, foodservice, wholesale and commercial vegetable programmes. Requirements can be discussed according to pod size, grade, freshness, packaging and destination.",
        image: "/images/products/food-products/green-beans.webp",
        tags: ["Fresh", "Seasonal", "Global Trade"],
        season: "Seasonal and origin dependent",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Wholesale",
            "Fresh vegetable distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Bean size",
            "Grade",
            "Tenderness",
            "Freshness",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },

    {
        slug: "broccoli",
        name: "Broccoli",
        category: "Vegetables",
        description:
            "Fresh broccoli for retail, foodservice, distributors and commercial fresh-vegetable requirements.",
        longDescription:
            "Fresh broccoli is used across retail, foodservice, hospitality and modern fresh-food programmes. Product requirements can be discussed around head size, grade, freshness, packaging and destination.",
        image: "/images/products/food-products/broccoli.webp",
        tags: ["Fresh", "High Demand", "Global Trade"],
        season: "Seasonal and origin dependent",
        uses: [
            "Retail",
            "Foodservice",
            "Hotels and restaurants",
            "Wholesale",
            "Fresh vegetable distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
            "Foodservice businesses",
        ],
        specifications: [
            "Head size",
            "Grade",
            "Freshness",
            "Colour",
            "Packaging",
            "Quantity",
            "Destination",
        ],
        featured: true,
    },

    {
        slug: "cauliflower",
        name: "Cauliflower",
        category: "Vegetables",
        description:
            "Fresh cauliflower for retailers, wholesalers, foodservice and commercial vegetable sourcing.",
        longDescription:
            "Fresh cauliflower is suitable for retail, wholesale, foodservice and commercial food preparation. Specifications can be discussed around head size, grade, freshness, packaging and destination.",
        image: "/images/products/food-products/cauliflower.webp",
        tags: ["Fresh", "Seasonal"],
        season: "Seasonal availability",
        uses: [
            "Retail",
            "Wholesale",
            "Foodservice",
            "Food preparation",
            "Distribution",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Head size",
            "Grade",
            "Colour",
            "Freshness",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },

    {
        slug: "green-peas",
        name: "Green Peas",
        category: "Vegetables",
        description:
            "Green peas for foodservice, retail, wholesalers, distributors and commercial produce requirements.",
        longDescription:
            "Fresh green peas are suitable for retail, foodservice, food preparation and commercial distribution. Requirements can be discussed according to pea size, freshness, grade, packaging and destination.",
        image: "/images/products/food-products/green-peas.webp",
        tags: ["Fresh", "Seasonal"],
        season: "Seasonal availability",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Wholesale",
            "Food preparation",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Wholesalers",
            "Retailers",
        ],
        specifications: [
            "Pea size",
            "Grade",
            "Freshness",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },

    {
        slug: "spinach",
        name: "Spinach",
        category: "Vegetables",
        description:
            "Fresh spinach for foodservice, retail, restaurants, distributors and commercial vegetable sourcing.",
        longDescription:
            "Fresh spinach is suitable for foodservice, restaurants, retail and fresh-food businesses. Due to its perishable nature, handling, packaging and delivery requirements should be discussed during enquiry.",
        image: "/images/products/food-products/spinach.webp",
        tags: ["Fresh", "Leafy Greens"],
        season: "Seasonal and origin dependent",
        uses: [
            "Retail",
            "Foodservice",
            "Restaurants",
            "Fresh food preparation",
        ],
        buyerTypes: [
            "Importers",
            "Distributors",
            "Retailers",
            "Foodservice businesses",
        ],
        specifications: [
            "Leaf quality",
            "Freshness",
            "Grade",
            "Packaging",
            "Quantity",
            "Handling requirements",
            "Destination",
        ],
    },

    {
        slug: "asparagus",
        name: "Asparagus",
        category: "Vegetables",
        description:
            "Fresh asparagus for premium retail, foodservice, hospitality and specialised fresh-produce sourcing.",
        longDescription:
            "Fresh asparagus is positioned for premium retail, hospitality, foodservice and specialised produce programmes. Buyer requirements can be discussed around spear size, grade, freshness, packaging and destination.",
        image: "/images/products/food-products/asparagus.webp",
        tags: ["Fresh", "Premium", "Global Trade"],
        season: "Seasonal and origin dependent",
        uses: [
            "Premium retail",
            "Foodservice",
            "Hotels and restaurants",
            "Speciality distribution",
        ],
        buyerTypes: [
            "Importers",
            "Premium retailers",
            "Distributors",
            "Hotels",
            "Restaurants",
        ],
        specifications: [
            "Spear size",
            "Grade",
            "Freshness",
            "Thickness",
            "Packaging",
            "Quantity",
            "Destination",
        ],
    },
];


/* ===============================================================
   HELPERS
   =============================================================== */

function getProduct(slug: string) {
    return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}


/* ===============================================================
   SEO METADATA
   =============================================================== */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        return {};
    }

    const title = `${product.name} | Indian ${product.category} Export & Sourcing | Al Huda`;

    const description = `${product.description} Explore sourcing, grading, packaging, quantity and destination requirements with Al Huda.`;

    return {
        title,
        description,

        keywords: [
            `${product.name} exporter India`,
            `${product.name} supplier India`,
            `${product.name} export India`,
            `Indian ${product.name}`,
            `${product.name} wholesale India`,
            `${product.name} international supplier`,
            `fresh ${product.name} exporter`,
            `${product.category.toLowerCase()} exporter India`,
            "Indian fresh produce exporter",
            "fresh produce supplier India",
            "Al Huda fresh produce",
        ],

        alternates: {
            canonical: `/products/food-products/fruits-and-vegetables/${product.slug}`,
        },

        openGraph: {
            title,
            description,
            type: "website",
            images: [
                {
                    url: product.image,
                    alt: `${product.name} fresh produce`,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [product.image],
        },
    };
}


/* ===============================================================
   PAGE
   =============================================================== */

export default async function ProduceProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter(
            (item) =>
                item.category === product.category &&
                item.slug !== product.slug,
        )
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-[#f8fbf9] text-[#12342f]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#e7f3ee]">

                <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#b9ded3]/50 blur-3xl" />

                <div className="absolute -bottom-64 left-[15%] h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">

                    {/* Breadcrumb */}

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-12 flex flex-wrap items-center gap-2 text-xs text-[#6f8881]"
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
                            href="/products/food-products/fruits-and-vegetables"
                            className="transition hover:text-[#087d68]"
                        >
                            Fruits &amp; Vegetables
                        </Link>

                        <span>/</span>

                        <span className="font-medium text-[#345850]">
                            {product.name}
                        </span>

                    </nav>


                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

                        {/* Copy */}

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#087d68]">
                                    {product.category} / Fresh Produce
                                </span>

                            </div>


                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#12342f] sm:text-5xl lg:text-7xl">
                                Indian{" "}
                                <span className="text-[#07846d]">
                                    {product.name}
                                </span>{" "}
                                for global buyers.
                            </h1>


                            <p className="mt-7 max-w-2xl text-base leading-7 text-[#58736c] sm:text-lg sm:leading-8">
                                {product.description}
                            </p>


                            {/* Tags */}

                            <div className="mt-6 flex flex-wrap gap-2">

                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${tag === "High Demand"
                                                ? "bg-[#087d68] text-white"
                                                : "bg-white/80 text-[#438275]"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>


                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#087d68] px-7 text-sm font-semibold text-white transition hover:bg-[#056b59]"
                                >
                                    Request a Quote
                                    <span className="ml-2">
                                        →
                                    </span>
                                </Link>

                                <a
                                    href="#specifications"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#bdd7ce] bg-white/70 px-7 text-sm font-semibold text-[#183d36] transition hover:bg-white"
                                >
                                    View Specifications
                                </a>

                            </div>

                        </div>


                        {/* Product image */}

                        <div className="relative">

                            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#dcece6] shadow-[0_30px_90px_rgba(20,70,60,0.13)]">

                                <img
                                    src={product.image}
                                    alt={`${product.name} fresh ${product.category.toLowerCase()}`}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/65 via-transparent to-transparent" />


                                <div className="absolute bottom-6 left-6 right-6">

                                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c5eee4]">
                                            Al Huda Fresh Produce
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-white">
                                            {product.name}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                PRODUCT INTRO
            ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    About the product
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                {product.name} sourcing for commercial buyers.
                            </h2>

                        </div>


                        <div className="max-w-2xl">

                            <p className="text-lg leading-8 text-[#526d67]">
                                {product.longDescription}
                            </p>

                            <p className="mt-5 text-base leading-7 text-[#718681]">
                                Availability, specifications and commercial terms
                                can vary according to season, origin, market and
                                buyer requirements. Share your requirement with us
                                to discuss the appropriate sourcing options.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                QUICK INFO
            ========================================================= */}

            <section className="border-y border-[#dce8e3] bg-[#f8fbf9]">

                <div className="mx-auto grid max-w-7xl gap-px bg-[#dce8e3] sm:grid-cols-2 lg:grid-cols-4">

                    <InfoCard
                        label="Category"
                        value={product.category}
                    />

                    <InfoCard
                        label="Availability"
                        value={product.season ?? "Subject to availability"}
                    />

                    <InfoCard
                        label="Sourcing"
                        value="Buyer-specific"
                    />

                    <InfoCard
                        label="Market"
                        value="International"
                    />

                </div>

            </section>


            {/* =========================================================
                USES
            ========================================================= */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Applications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Common commercial uses.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                {product.name} can be considered for a range of
                                commercial fresh-produce applications depending
                                on the buyer and destination market.
                            </p>

                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {product.uses.map((use, index) => (
                                <div
                                    key={use}
                                    className="flex items-center gap-4 rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5"
                                >

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f5f0] text-[10px] font-bold text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-semibold text-[#345850]">
                                        {use}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BUYER TYPES
            ========================================================= */}

            <section className="bg-[#edf7f3]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-[#087d68]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                Suitable buyers
                            </span>

                        </div>

                        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                            Built around commercial sourcing requirements.
                        </h2>

                        <p className="mt-5 leading-7 text-[#637a74]">
                            We can discuss sourcing requirements for buyers
                            operating across fresh-produce distribution,
                            retail, foodservice and related businesses.
                        </p>

                    </div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                        {product.buyerTypes.map((buyer) => (
                            <div
                                key={buyer}
                                className="rounded-2xl border border-[#d7e7e1] bg-white p-6"
                            >

                                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5f0] text-[#087d68]">
                                    ✓
                                </div>

                                <h3 className="text-sm font-semibold leading-5 text-[#345850]">
                                    {buyer}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                SPECIFICATIONS
            ========================================================= */}

            <section
                id="specifications"
                className="scroll-mt-20 bg-white"
            >

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    Specifications
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#153b35] sm:text-4xl">
                                Tell us the specifications that matter.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#657d77]">
                                Product specifications can vary by destination,
                                buyer requirements and intended application.
                                Share as much detail as you have in your enquiry.
                            </p>

                        </div>


                        <div className="space-y-3">

                            {product.specifications.map((specification, index) => (
                                <div
                                    key={specification}
                                    className="flex items-center gap-5 rounded-2xl border border-[#dfeae5] bg-[#f8fbf9] p-5"
                                >

                                    <span className="text-xs font-bold tracking-[0.12em] text-[#087d68]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-semibold text-[#345850]">
                                        {specification}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                SOURCING PROCESS
            ========================================================= */}

            <section className="bg-[#123b34] text-white">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#73d1b8]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73d1b8]">
                                    How it works
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                Start your {product.name.toLowerCase()} enquiry.
                            </h2>

                            <p className="mt-5 max-w-md leading-7 text-[#b4d0c8]">
                                Share your requirement and the information you
                                already have. Product, quantity, specifications
                                and destination can then be discussed.
                            </p>

                        </div>


                        <div className="space-y-3">

                            <ProcessStep
                                number="01"
                                title="Share your requirement"
                                text={`Tell us how much ${product.name.toLowerCase()} you need, your destination and any product specifications.`}
                            />

                            <ProcessStep
                                number="02"
                                title="Review sourcing options"
                                text="We review the information provided and explore suitable sourcing possibilities."
                            />

                            <ProcessStep
                                number="03"
                                title="Confirm specifications"
                                text="Grade, size, packaging, quantity and other commercial requirements can be reviewed."
                            />

                            <ProcessStep
                                number="04"
                                title="Coordinate the trade"
                                text="Once commercial terms are agreed, relevant documentation and shipment requirements can be coordinated."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RELATED PRODUCTS
            ========================================================= */}

            <section className="bg-[#f8fbf9]">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-8 bg-[#087d68]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087d68]">
                                    You may also explore
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#153b35]">
                                More {product.category.toLowerCase()}.
                            </h2>

                        </div>


                        <Link
                            href="/products/food-products/fruits-and-vegetables"
                            className="text-sm font-semibold text-[#087d68] transition hover:text-[#056b59]"
                        >
                            View all fruits &amp; vegetables →
                        </Link>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {relatedProducts.map((relatedProduct) => (
                            <RelatedProductCard
                                key={relatedProduct.slug}
                                product={relatedProduct}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

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
                            Looking to source {product.name.toLowerCase()}?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d2f3eb]">
                            Tell us your quantity, preferred grade or size,
                            packaging requirements, destination market and any
                            other specifications you have.
                        </p>


                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <Link
                                href={`/contact?product=${encodeURIComponent(product.name)}`}
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#087d68] transition hover:bg-[#effaf6]"
                            >
                                Request a Quote
                                <span className="ml-2">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/products/food-products/fruits-and-vegetables"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
                            >
                                Back to Produce
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


/* ===============================================================
   INFO CARD
   =============================================================== */

function InfoCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="bg-white p-7">

            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7a908a]">
                {label}
            </p>

            <p className="mt-3 text-sm font-semibold leading-5 text-[#345850]">
                {value}
            </p>

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
   RELATED PRODUCT CARD
   =============================================================== */

function RelatedProductCard({
    product,
}: {
    product: ProduceProduct;
}) {
    return (
        <Link
            href={`/products/food-products/fruits-and-vegetables/${product.slug}`}
            className="group overflow-hidden rounded-[1.5rem] border border-[#dfeae5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,70,60,0.09)]"
        >

            <div className="relative aspect-[1.15] overflow-hidden">

                <img
                    src={product.image}
                    alt={`${product.name} fresh produce`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">

                    <h3 className="text-xl font-semibold text-white">
                        {product.name}
                    </h3>

                </div>

            </div>


            <div className="flex items-center justify-between p-5">

                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#087d68]">
                    Explore
                </span>

                <span className="text-lg text-[#087d68] transition-transform group-hover:translate-x-1">
                    →
                </span>

            </div>

        </Link>
    );
}

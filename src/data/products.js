import product from "../assets/products/example.webp";

const createRotationImages = (slug, count = 30) => {
  return Array.from(
    { length: count },
    (_, index) =>
      `/products/${slug}/${String(index + 1).padStart(2, "0")}.webp`,
  );
};

export const coffeeProducts = [
  {
    _id: "cold-brew-250-DHANKUTA",
    name: "cold brew",
    shortName: "Cold Brew – 250g [Beans / Ground]",
    slug: "cold-brew-250g-DHANKUTA",
    image: product,
    hoverImage: product,
    imageColor: "#E8D1CA",
    category: "coffee",
    type: "cold brew",
    roastLevel: 4,
    caffeine: "full",
    profile: 4,
    process: "anaerobic",
    altitude: "1,300-1,500",
    size: 250,
    price: 1650,
    grindOptions: ["beans", "ground"],
    description:
      "Bold and complex Nepali coffee, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",
    shortDescription:
      "Bold, fruity, and complex — a unique anaerobic expression.",
    aroma: ["molasses", "caramel", "chocolatey"],
    flavors: ["tropical fruit", "wine", "syrupy body"],
    origin: "DHANKUTA",
    rating: 4.9,
    reviews: 54,
    available: true,
    instock: true,
    discount: false,
    faqs: [
      {
        question: "What does anaerobic processing mean?",
        answer:
          "Coffee cherries are fermented in sealed, oxygen-free tanks. This intensifies the flavor and creates complex, wine-like notes not found in washed or natural coffees.",
      },
      {
        question: "How many cups can I brew from 250g?",
        answer:
          "Around 15–18 cups using a standard filter ratio of 15g of coffee per cup.",
      },
      {
        question: "Should I choose whole beans or ground?",
        answer:
          "Whole beans stay fresh longer. Choose ground only if you don't have a grinder — we grind it fresh specifically for filter brewing.",
      },
      {
        question: "Is anaerobic coffee more expensive than washed?",
        answer:
          "Yes — anaerobic processing requires sealed tanks and longer controlled fermentation, which adds to production cost and complexity.",
      },
    ],
  },

  {
    _id: "monarch-250-DHANKUTA",
    name: "Monarch",
    shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
    slug: "filter-roast-anaerobic-monarch-250g-DHANKUTA",
    image: product,
    hoverImage: product,
    rotationImages: createRotationImages(
      "filter-roast-anaerobic-monarch-250g-DHANKUTA",
      3,
    ),
    imageColor: "#D8B9A9",
    category: "coffee",
    type: "filter roast",
    roastLevel: 4,
    caffeine: "full",
    profile: 4,
    process: "anaerobic",
    altitude: "1,200-1,500",
    size: 250,
    price: 1650,
    grindOptions: ["beans", "ground"],
    description:
      "Bold and complex Nepali filter roast, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",
    shortDescription:
      "Bold, fruity, and complex — a unique anaerobic expression.",
    aroma: ["molasses", "caramel", "chocolatey"],
    flavors: ["tropical fruit", "wine", "syrupy body"],
    origin: "DHANKUTA",
    rating: 4.9,
    reviews: 54,
    available: true,
    instock: true,
    discount: false,
    faqs: [
      {
        question: "What does anaerobic processing mean?",
        answer:
          "Coffee cherries are fermented in sealed, oxygen-free tanks. This intensifies the flavor and creates complex, wine-like notes not found in washed or natural coffees.",
      },
      {
        question: "How many cups can I brew from 250g?",
        answer:
          "Around 15–18 cups using a standard filter ratio of 15g of coffee per cup.",
      },
      {
        question: "Should I choose whole beans or ground?",
        answer:
          "Whole beans stay fresh longer. Choose ground only if you don't have a grinder — we grind it fresh specifically for filter brewing.",
      },
      {
        question: "Is anaerobic coffee more expensive than washed?",
        answer:
          "Yes — anaerobic processing requires sealed tanks and longer controlled fermentation, which adds to production cost and complexity.",
      },
    ],
  },

  {
    _id: "special-edition-250-DHANKUTA",
    name: "special edition",
    shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
    slug: "filter-roast-anaerobic-special-edition-250g-DHANKUTA",
    image: product,
    hoverImage: product,
    rotationImages: createRotationImages(
      "filter-roast-anaerobic-special-edition-250g-DHANKUTA",
      27,
    ),
    imageColor: "#C69A82",
    category: "coffee",
    type: "filter roast",
    roastLevel: 4,
    caffeine: "full",
    profile: 4,
    process: "anaerobic",
    altitude: "1,200-1,500",
    size: 250,
    price: 1650,
    grindOptions: ["beans", "ground"],
    description:
      "Bold and complex Nepali filter roast, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",
    shortDescription:
      "Bold, fruity, and complex — a unique anaerobic expression.",
    aroma: ["molasses", "caramel", "chocolatey"],
    flavors: ["tropical fruit", "wine", "syrupy body"],
    origin: "DHANKUTA",
    rating: 4.9,
    reviews: 54,
    available: true,
    instock: true,
    discount: false,
    faqs: [
      {
        question: "What does anaerobic processing mean?",
        answer:
          "Coffee cherries are fermented in sealed, oxygen-free tanks. This intensifies the flavor and creates complex, wine-like notes not found in washed or natural coffees.",
      },
      {
        question: "How many cups can I brew from 250g?",
        answer:
          "Around 15–18 cups using a standard filter ratio of 15g of coffee per cup.",
      },
      {
        question: "Should I choose whole beans or ground?",
        answer:
          "Whole beans stay fresh longer. Choose ground only if you don't have a grinder — we grind it fresh specifically for filter brewing.",
      },
      {
        question: "Is anaerobic coffee more expensive than washed?",
        answer:
          "Yes — anaerobic processing requires sealed tanks and longer controlled fermentation, which adds to production cost and complexity.",
      },
    ],
  },
];

export const teaProducts = [
  {
    _id: "filter-anaerobic-250-DHANKUTA",
    name: "Filter Roast Coffee – Anaerobic Process | 250g Pack (Whole Beans / Ground)",
    shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
    slug: "filter-roast-anaerobic-250g-DHANKUTA",
    image: "images/products/coffee-03.webp",
    hoverImage: "images/products/coffee-03.webp",
    category: "tea",
    type: "filter roast",
    process: "anaerobic",
    size: 250,
    price: 1650,
    grindOptions: ["beans", "ground"],
    description:
      "Bold and complex Nepali filter roast, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",
    shortDescription:
      "Bold, fruity, and complex — a unique anaerobic expression.",
    aroma: ["molasses", "caramel", "chocolatey"],
    flavors: ["tropical fruit", "wine", "syrupy body"],
    origin: "DHANKUTA",
    rating: 4.9,
    reviews: 54,
    available: true,
    instock: true,
    discount: false,
    faqs: [
      {
        question: "What does anaerobic processing mean?",
        answer:
          "Coffee cherries are fermented in sealed, oxygen-free tanks. This intensifies the flavor and creates complex, wine-like notes not found in washed or natural coffees.",
      },
      {
        question: "How many cups can I brew from 250g?",
        answer:
          "Around 15–18 cups using a standard filter ratio of 15g of coffee per cup.",
      },
      {
        question: "Should I choose whole beans or ground?",
        answer:
          "Whole beans stay fresh longer. Choose ground only if you don't have a grinder — we grind it fresh specifically for filter brewing.",
      },
      {
        question: "Is anaerobic coffee more expensive than washed?",
        answer:
          "Yes — anaerobic processing requires sealed tanks and longer controlled fermentation, which adds to production cost and complexity.",
      },
    ],
  },
  {
    _id: "filter-anaerobic-250-DHANKUTA",
    name: "Filter Roast Coffee – Anaerobic Process | 250g Pack (Whole Beans / Ground)",
    shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
    slug: "filter-roast-anaerobic-250g-DHANKUTA",
    image: "images/products/coffee-03.webp",
    hoverImage: "images/products/coffee-03.webp",
    category: "tea",
    type: "filter roast",
    process: "anaerobic",
    size: 250,
    price: 1650,
    grindOptions: ["beans", "ground"],
    description:
      "Bold and complex Nepali filter roast, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",
    shortDescription:
      "Bold, fruity, and complex — a unique anaerobic expression.",
    aroma: ["molasses", "caramel", "chocolatey"],
    flavors: ["tropical fruit", "wine", "syrupy body"],
    origin: "DHANKUTA",
    rating: 4.9,
    reviews: 54,
    available: true,
    instock: true,
    discount: false,
    faqs: [
      {
        question: "What does anaerobic processing mean?",
        answer:
          "Coffee cherries are fermented in sealed, oxygen-free tanks. This intensifies the flavor and creates complex, wine-like notes not found in washed or natural coffees.",
      },
      {
        question: "How many cups can I brew from 250g?",
        answer:
          "Around 15–18 cups using a standard filter ratio of 15g of coffee per cup.",
      },
      {
        question: "Should I choose whole beans or ground?",
        answer:
          "Whole beans stay fresh longer. Choose ground only if you don't have a grinder — we grind it fresh specifically for filter brewing.",
      },
      {
        question: "Is anaerobic coffee more expensive than washed?",
        answer:
          "Yes — anaerobic processing requires sealed tanks and longer controlled fermentation, which adds to production cost and complexity.",
      },
    ],
  },
];

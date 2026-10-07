// import product from "../assets/products/example.webp";
import product1 from "../assets/products/pro1.jpg";
import product2 from "../assets/products/pro2.jpg";
import product3 from "../assets/products/pro3.jpg";
import tea1 from "../assets/products/tea1.jpg";
import tea2 from "../assets/products/tea2.jpg";
import tea3 from "../assets/products/tea3.jpg";

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
  name: "Dhankuta Anaerobic",
  shortName: "Cold Brew – 250g [Beans / Ground]",
  slug: "cold-brew-250g-DHANKUTA",

  image: product1,
  hoverImage: product1,
  imageColor: "#D9A08F",

  category: "coffee",
  type: "beans",

  roastLevel: 4,
  caffeine: "full",
  profile: 4,

  process: "Anaerobic",
  altitude: "1,300-1,500",
  origin: "Dhankuta",

 price:850,
sizeOptions: [
  { grams: 100, price: 850 },
  { grams: 250, price: 1650 },
  { grams: 500, price: 3000 },
],


  grindOptions: ["Whole bean", "Filter", "Espresso", "Moka pot","French Press","Cold Brew"],

  description:
    "Bold and complex Nepali coffee, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",

  shortDescription:
    "Bold, fruity, and complex — a unique anaerobic expression.",

  aroma: [
    "molasses",
    "caramel",
    "chocolatey",
  ],

  flavors: [
    "Tropical Fruit",
    "Wine",
    "Syrupy Body",
  ],

  /*
   * PRODUCT INFORMATION
   * Used by ProductInfoGrid
   */
  info: {
    origin: {
      value: "Dhankuta, Nepal",
      blurb:
        "Grown in the hills of Dhankuta in eastern Nepal, where elevation, climate, and mountain soil create distinctive growing conditions for specialty coffee.",
    },

    altitude: {
      value: "1,300–1,500 m",
      blurb:
        "The coffee is grown at 1,300–1,500 metres above sea level. Higher elevations can encourage slower cherry development and contribute to greater complexity in the cup.",
    },

    process: {
      value: "Anaerobic",
      blurb:
        "The coffee cherries are fermented in a controlled, oxygen-free environment. This process encourages intense fruit character, sweetness, and wine-like complexity.",
    },

    variety: {
      value: "Arabica",
      blurb:
        "A specialty Arabica coffee selected for its balance of sweetness, acidity, and expressive flavour characteristics.",
    },

    harvest: {
      value: "Seasonal",
      blurb:
        "Coffee is harvested selectively when cherries reach the right stage of ripeness, helping preserve sweetness and consistency in the final cup.",
    },

    roast: {
      value: "4/5",
      blurb:
        "A fuller roast profile developed to bring out the coffee's syrupy body, chocolate character, tropical fruit notes, and deeper sweetness.",
    },
  },

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

  ritual: {
  type: "pour-over",
  method: "Pour-over ritual",
  dose: "18g",
  doseLabel: "Coffee",
  water: "290g",
  waterLabel: "Water",
  temperature: "94°C",
  ratio: "1:16",
  totalTime: 180,

  steps: [
    {
      time: 0,
      label: "Bloom",
      water: "50g",
      duration: 45,
    },
    {
      time: 45,
      label: "Pour",
      water: "120g",
      duration: 45,
    },
    {
      time: 90,
      label: "Pour",
      water: "120g",
      duration: 90,
    },
  ],

  description:
    "The dial fills as you brew; follow the step in the centre.",
}

},

 {
  _id: "monarch-250-DHANKUTA",
  name: "Gulmi Natural Washed",
  shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
  slug: "filter-roast-anaerobic-monarch-250g-DHANKUTA",

  image: product2,
  hoverImage: product2,
  rotationImages: createRotationImages(
    "filter-roast-anaerobic-monarch-250g-DHANKUTA",
    3,
  ),
  imageColor: "#C8D2B8",

  category: "coffee",
  type: "beans",

  roastLevel: 2,
  caffeine: "full",
  profile: 4,

  process: "Washed",
  altitude: "1,200-1,500",
  origin: "Gulmi",

  price: 1650,
  sizeOptions: [
    { grams: 250, price: 1650 },
  ],

  grindOptions: ["Whole bean", "Filter", "Espresso", "Moka pot","French Press","Cold Brew"],

  description:
    "Bold and complex Nepali filter roast, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",

  shortDescription:
    "Bold, fruity, and complex — a unique anaerobic expression.",

  aroma: [
    "molasses",
    "caramel",
    "chocolatey",
  ],

 flavors: [
    "Tropical Fruit",
    "Wine",
    "Syrupy Body",
  ],

  /*
   * PRODUCT INFORMATION
   * Used by ProductInfoGrid
   */
  info: {
    origin: {
      value: "Dhankuta, Nepal",
      blurb:
        "Grown in the hills of Dhankuta in eastern Nepal, where elevation, climate, and mountain soil create distinctive growing conditions for specialty coffee.",
    },

    altitude: {
      value: "1,200–1,500 m",
      blurb:
        "The coffee is grown at 1,200–1,500 metres above sea level. Higher elevations can encourage slower cherry development and contribute to greater complexity in the cup.",
    },

    process: {
      value: "Anaerobic",
      blurb:
        "The coffee cherries are fermented in a controlled, oxygen-free environment. This process encourages intense fruit character, sweetness, and wine-like complexity.",
    },

    variety: {
      value: "Arabica",
      blurb:
        "A specialty Arabica coffee selected for its balance of sweetness, acidity, and expressive flavour characteristics.",
    },

    harvest: {
      value: "Seasonal",
      blurb:
        "Coffee is harvested selectively when cherries reach the right stage of ripeness, helping preserve sweetness and consistency in the final cup.",
    },

    roast: {
      value: "4/5",
      blurb:
        "A fuller roast profile developed to bring out the coffee's syrupy body, chocolate character, tropical fruit notes, and deeper sweetness.",
    },
  },

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

    ritual: {
  type: "pour-over",
  method: "Pour-over ritual",
  dose: "18g",
  doseLabel: "Coffee",
  water: "290g",
  waterLabel: "Water",
  temperature: "94°C",
  ratio: "1:16",
  totalTime: 180,

  steps: [
    {
      time: 0,
      label: "Bloom",
      water: "50g",
      duration: 45,
    },
    {
      time: 45,
      label: "Pour",
      water: "120g",
      duration: 45,
    },
    {
      time: 90,
      label: "Pour",
      water: "120g",
      duration: 90,
    },
  ],

  description:
    "The dial fills as you brew; follow the step in the centre.",
},
},

{
  _id: "special-edition-250-DHANKUTA",
  name: "Sindhupalchok Honey",
  shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
  slug: "filter-roast-anaerobic-special-edition-250g-DHANKUTA",

  image: product3,
  hoverImage: product3,
  rotationImages: createRotationImages(
    "filter-roast-anaerobic-special-edition-250g-DHANKUTA",
    27,
  ),
  imageColor: "#D5B77A",

  category: "coffee",
  type: "beans",

  roastLevel: 5,
  caffeine: "full",
  profile: 4,

  process: "Anaerobic",
  altitude: "1,200-1,500",
  origin: "Sindhupalchok",

  price: 1650,
  sizeOptions: [
    { grams: 200, price: 1650 },
    { grams: 500, price: 2650 },
  ],

  grindOptions: ["Whole bean", "Filter", "Espresso", "Moka pot","French Press","Cold Brew"],

  description:
    "Bold and complex Nepali filter roast, fermented without oxygen for deep fruit-forward and wine-like characteristics. Intense tropical fruit notes with a syrupy body — one of the most expressive coffees from Nepal's highlands.",

  shortDescription:
    "Bold, fruity, and complex — a unique anaerobic expression.",

  aroma: [
    "molasses",
    "caramel",
    "chocolatey",
  ],

 flavors: [
    "Tropical Fruit",
    "Wine",
    "Syrupy Body",
  ],

  /*
   * PRODUCT INFORMATION
   * Used by ProductInfoGrid
   */
  info: {
    origin: {
      value: "Dhankuta, Nepal",
      blurb:
        "Grown in the hills of Dhankuta in eastern Nepal, where elevation, climate, and mountain soil create distinctive growing conditions for specialty coffee.",
    },

    altitude: {
      value: "1,200–1,500 m",
      blurb:
        "The coffee is grown at 1,200–1,500 metres above sea level. Higher elevations can encourage slower cherry development and contribute to greater complexity in the cup.",
    },

    process: {
      value: "Anaerobic",
      blurb:
        "The coffee cherries are fermented in a controlled, oxygen-free environment. This process encourages intense fruit character, sweetness, and wine-like complexity.",
    },

    variety: {
      value: "Arabica",
      blurb:
        "A specialty Arabica coffee selected for its balance of sweetness, acidity, and expressive flavour characteristics.",
    },

    harvest: {
      value: "Seasonal",
      blurb:
        "Coffee is harvested selectively when cherries reach the right stage of ripeness, helping preserve sweetness and consistency in the final cup.",
    },

    roast: {
      value: "4/5",
      blurb:
        "A fuller roast profile developed to bring out the coffee's syrupy body, chocolate character, tropical fruit notes, and deeper sweetness.",
    },
  },

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
    ritual: {
  type: "pour-over",
  method: "Pour-over ritual",
  dose: "18g",
  doseLabel: "Coffee",
  water: "290g",
  waterLabel: "Water",
  temperature: "94°C",
  ratio: "1:16",
  totalTime: 180,

  steps: [
    {
      time: 0,
      label: "Bloom",
      water: "50g",
      duration: 45,
    },
    {
      time: 45,
      label: "Pour",
      water: "120g",
      duration: 45,
    },
    {
      time: 90,
      label: "Pour",
      water: "120g",
      duration: 90,
    },
  ],

  description:
    "The dial fills as you brew; follow the step in the centre.",
},
},

];

export const teaProducts = [
  {
    _id: "first-flush-100-ILAM",
    name: "Ilam First Flush",
    shortName: "First Flush – 100g [Loose Leaf]",
    slug: "ilam-first-flush-100g",

    image: tea1,
    hoverImage: tea1,
    imageColor: "#D8DCC8",

    category: "tea",
    type: "leaves",

    teaType: "First Flush",
    caffeine: "medium",
    oxidation: 2,
    profile: 4,

    altitude: "1,800–2,200 m",
    origin: "Ilam, Nepal",

    price: 1100,
    sizeOptions: [
      { grams: 50, price: 650 },
      { grams: 100, price: 1100 },
      { grams: 250, price: 2400 },
    ],

    formOptions: ["Whole-leaf tin", "Tea Bag"],

    description:
      "A delicate early-season tea from the highlands of Ilam, with soft floral aromas, gentle sweetness, and a bright, clean finish. First Flush captures the freshness of Nepal's first harvest in a refined cup.",

    shortDescription:
      "Floral, bright, and delicate — a fresh expression of Ilam's first harvest.",

    aroma: [
      "white flowers",
      "fresh grass",
      "honey",
    ],

    flavors: [
      "White Flowers",
      "Honey",
      "Citrus",
    ],

    info: {
      origin: {
        value: "Ilam, Nepal",
        blurb:
          "Grown in the highlands of eastern Nepal, where cool temperatures, mountain mist, and rich soil create ideal conditions for specialty tea.",
      },

      altitude: {
        value: "1,800–2,200 m",
        blurb:
          "Higher elevations encourage slower leaf development, helping create the delicate aromas and bright character found in this tea.",
      },

      process: {
        value: "Lightly oxidized",
        blurb:
          "The young leaves are carefully processed with light oxidation to preserve their freshness, floral character, and natural sweetness.",
      },

      variety: {
        value: "Camellia sinensis",
        blurb:
          "Made from the leaves of Camellia sinensis, the tea plant behind traditional teas around the world.",
      },

      harvest: {
        value: "First Flush",
        blurb:
          "Harvested during the first picking season, when young leaves and buds are at their freshest and most delicate.",
      },

      oxidation: {
        value: "Low",
        blurb:
          "Light oxidation keeps the cup bright and fresh while allowing floral and citrus notes to shine.",
      },
    },

    rating: 4.8,
    reviews: 32,

    available: true,
    instock: true,
    discount: false,

    faqs: [
      {
        question: "What is First Flush tea?",
        answer:
          "First Flush refers to the first harvest of the tea season. The young leaves are known for their delicate character, freshness, and floral aromas.",
      },
      {
        question: "How should I brew this tea?",
        answer:
          "Use around 3g of tea per 250ml of water at approximately 90°C. Steep for 2–3 minutes and adjust to taste.",
      },
      {
        question: "Can I steep the leaves more than once?",
        answer:
          "Yes. The leaves can be steeped multiple times, with later infusions revealing softer and more subtle flavours.",
      },
      {
        question: "How should I store the tea?",
        answer:
          "Store it in an airtight container away from sunlight, moisture, heat, and strong aromas.",
      },
    ],

    ritual: {
      type: "steeping",
      method: "Steeping ritual",
      dose: "3g",
      doseLabel: "Leaf",
      water: "250ml",
      waterLabel: "Water",
      temperature: "90°C",

      methods: {
        western: {
          label: "Western",
          steeps: [
            { number: 1, duration: 180 },
            { number: 2, duration: 240 },
            { number: 3, duration: 300 },
          ],
        },

        gongfu: {
          label: "Gongfu",
          steeps: [
            { number: 1, duration: 30 },
            { number: 2, duration: 45 },
            { number: 3, duration: 60 },
          ],
        },
      },
    },
  },

  {
    _id: "ilam-green-100-ILAM",
    name: "Ilam Green",
    shortName: "Ilam Green – 100g [Loose Leaf]",
    slug: "ilam-green-100g",

    image: tea2,
    hoverImage: tea2,
    imageColor: "#C9D8C2",

    category: "tea",
    type: "leaves",

    teaType: "Green Tea",
    caffeine: "medium",
    oxidation: 5,
    profile: 3,

    altitude: "1,600–2,000 m",
    origin: "Ilam, Nepal",

    price: 950,
    sizeOptions: [
      { grams: 50, price: 550 },
      { grams: 100, price: 950 },
      { grams: 250, price: 2100 },
    ],

    formOptions: ["Whole-leaf tin", "Tea Bag"],

    description:
      "A clean and refreshing green tea from Ilam, crafted to preserve the natural character of the leaf. Fresh vegetal notes meet gentle sweetness and a crisp, refreshing finish.",

    shortDescription:
      "Fresh, clean, and gently sweet — an everyday green tea from Ilam.",

    aroma: [
      "fresh grass",
      "young leaves",
      "sweet herbs",
    ],

    flavors: [
      "Green Vegetal",
      "Sweet Grass",
      "Soft Citrus",
    ],

    info: {
      origin: {
        value: "Ilam, Nepal",
        blurb:
          "Sourced from the tea-growing hills of Ilam, where cool mountain conditions help produce fresh and aromatic leaves.",
      },

      altitude: {
        value: "1,600–2,000 m",
        blurb:
          "The moderate-to-high elevation contributes to slower growth and a clean, refreshing cup.",
      },

      process: {
        value: "Minimally oxidized",
        blurb:
          "The leaves are quickly heated after harvest to preserve their fresh colour, vegetal character, and natural sweetness.",
      },

      variety: {
        value: "Camellia sinensis",
        blurb:
          "Made from carefully selected leaves of the Camellia sinensis tea plant.",
      },

      harvest: {
        value: "Early season",
        blurb:
          "Harvested from young leaves during the early part of the tea-growing season for a fresher and more delicate cup.",
      },

      oxidation: {
        value: "Very low",
        blurb:
          "Minimal oxidation keeps the tea crisp, fresh, and naturally vegetal.",
      },
    },

    rating: 4.7,
    reviews: 24,

    available: true,
    instock: true,
    discount: false,

    faqs: [
      {
        question: "What does Ilam Green taste like?",
        answer:
          "It has a fresh, clean character with gentle vegetal notes, soft sweetness, and a light citrus finish.",
      },
      {
        question: "How should I brew this tea?",
        answer:
          "Use around 3g of tea per 250ml of water at approximately 80–85°C. Steep for 2–3 minutes.",
      },
      {
        question: "Can I steep the leaves more than once?",
        answer:
          "Yes. The leaves can be re-steeped, with subsequent infusions becoming softer and sweeter.",
      },
      {
        question: "How should I store the tea?",
        answer:
          "Keep the tea sealed in an airtight container away from light, moisture, heat, and strong aromas.",
      },
    ],

    ritual: {
      type: "steeping",
      method: "Steeping ritual",
      dose: "3g",
      doseLabel: "Leaf",
      water: "250ml",
      waterLabel: "Water",
      temperature: "82°C",

      methods: {
        western: {
          label: "Western",
          steeps: [
            { number: 1, duration: 150 },
            { number: 2, duration: 180 },
            { number: 3, duration: 240 },
          ],
        },

        gongfu: {
          label: "Gongfu",
          steeps: [
            { number: 1, duration: 20 },
            { number: 2, duration: 30 },
            { number: 3, duration: 45 },
          ],
        },
      },
    },
  },

  {
    _id: "himalayan-silver-tips-100-ILAM",
    name: "Himalayan Tips",
    shortName: "Silver Tips – 100g [Loose Leaf]",
    slug: "himalayan-silver-tips-100g",

    image: tea3,
    hoverImage: tea3,
    imageColor: "#E0DED0",

    category: "tea",
    type: "leaves",

    teaType: "Silver Tip",
    caffeine: "medium",
    oxidation: 3,
    profile: 5,

    altitude: "2,000–2,400 m",
    origin: "Ilam, Nepal",

    price: 1450,
    sizeOptions: [
      { grams: 50, price: 800 },
      { grams: 100, price: 1450 },
      { grams: 250, price: 3200 },
    ],

    formOptions: ["Whole-leaf tin", "Tea Bag"],

    description:
      "A refined high-altitude tea made from carefully selected young buds and tender leaves. Silver Tips offers a soft floral aroma, delicate sweetness, and a silky, lingering finish.",

    shortDescription:
      "Silky, floral, and refined — delicate high-altitude tea from Nepal.",

    aroma: [
      "white flowers",
      "honey",
      "fresh herbs",
    ],

    flavors: [
      "Honey",
      "White Flowers",
      "Stone Fruit",
    ],

    info: {
      origin: {
        value: "Ilam, Nepal",
        blurb:
          "Grown in the higher reaches of Ilam, where cool mountain conditions encourage slow development of the finest young buds.",
      },

      altitude: {
        value: "2,000–2,400 m",
        blurb:
          "The higher elevation and cooler climate contribute to slower leaf growth and a more delicate, aromatic cup.",
      },

      process: {
        value: "Delicately processed",
        blurb:
          "Young buds and leaves are handled gently to preserve their natural sweetness, floral aromas, and silky texture.",
      },

      variety: {
        value: "Camellia sinensis",
        blurb:
          "Produced from carefully selected young leaves and buds of the Camellia sinensis tea plant.",
      },

      harvest: {
        value: "Young buds",
        blurb:
          "Collected from tender buds and young leaves prized for their delicate texture and concentrated character.",
      },

      oxidation: {
        value: "Very low",
        blurb:
          "Minimal oxidation preserves the tea's delicate aroma, natural sweetness, and bright character.",
      },
    },

    rating: 4.9,
    reviews: 18,

    available: true,
    instock: true,
    discount: false,

    faqs: [
      {
        question: "What makes Silver Tips different?",
        answer:
          "Silver Tips is made from young buds and tender leaves, giving it a softer body, delicate floral character, and naturally sweet finish.",
      },
      {
        question: "How should I brew this tea?",
        answer:
          "Use around 3g of tea per 250ml of water at approximately 85°C. Steep for 2–3 minutes for the best balance.",
      },
      {
        question: "Can I steep the leaves more than once?",
        answer:
          "Yes. Silver Tips is well suited to multiple infusions, with later steeps often becoming softer and more aromatic.",
      },
      {
        question: "How should I store the tea?",
        answer:
          "Store it airtight and keep it away from direct sunlight, moisture, heat, and strong-smelling foods.",
      },
    ],

    ritual: {
      type: "steeping",
      method: "Steeping ritual",
      dose: "3g",
      doseLabel: "Leaf",
      water: "250ml",
      waterLabel: "Water",
      temperature: "85°C",

      methods: {
        western: {
          label: "Western",
          steeps: [
            { number: 1, duration: 180 },
            { number: 2, duration: 240 },
            { number: 3, duration: 300 },
          ],
        },

        gongfu: {
          label: "Gongfu",
          steeps: [
            { number: 1, duration: 25 },
            { number: 2, duration: 40 },
            { number: 3, duration: 60 },
          ],
        },
      },
    },
  },
];

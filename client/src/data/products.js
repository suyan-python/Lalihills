// import product from "../assets/products/example.webp";
import product from "../assets/products/pro1.jpg";
import tea from "../assets/products/tea.jpg";

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
  name: "Cold Brew",
  shortName: "Cold Brew – 250g [Beans / Ground]",
  slug: "cold-brew-250g-DHANKUTA",

  image: product,
  hoverImage: product,
  imageColor: "#D9A08F",

  category: "coffee",
  type: "beans",

  roastLevel: 4,
  caffeine: "full",
  profile: 4,

  process: "anaerobic",
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
    "tropical fruit",
    "wine",
    "syrupy body",
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
  name: "Monarch",
  shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
  slug: "filter-roast-anaerobic-monarch-250g-DHANKUTA",

  image: product,
  hoverImage: product,
  rotationImages: createRotationImages(
    "filter-roast-anaerobic-monarch-250g-DHANKUTA",
    3,
  ),
  imageColor: "#C8D2B8",

  category: "coffee",
  type: "beans",

  roastLevel: 4,
  caffeine: "full",
  profile: 4,

  process: "anaerobic",
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
    "tropical fruit",
    "wine",
    "syrupy body",
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
  name: "Special Edition",
  shortName: "Filter Roast Anaerobic – 250g [Beans / Ground]",
  slug: "filter-roast-anaerobic-special-edition-250g-DHANKUTA",

  image: product,
  hoverImage: product,
  rotationImages: createRotationImages(
    "filter-roast-anaerobic-special-edition-250g-DHANKUTA",
    27,
  ),
  imageColor: "#D5B77A",

  category: "coffee",
  type: "beans",

  roastLevel: 4,
  caffeine: "full",
  profile: 4,

  process: "anaerobic",
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
    "tropical fruit",
    "wine",
    "syrupy body",
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
  name: "First Flush",
  shortName: "First Flush – 100g [Loose Leaf]",
  slug: "first-flush-100g-ILAM",

  image: tea,
  hoverImage: tea,
  imageColor: "#D8DCC8",

  category: "tea",
  type: "leaves",

  teaType: "first-flush",
  caffeine: "medium",
  oxidation: 2,
  profile: 4,

  altitude: "1,800-2,200",
  origin: "Ilam, Nepal",

  price: 850,
  sizeOptions: [
    { grams: 50, price: 650 },
    { grams: 100, price: 1100 },
    { grams: 250, price: 2400 },
  ],

  formOptions: ["loose leaf", "tea bag"],

  description:
    "A delicate early-season Nepali tea with floral aromas, bright character, and a clean finish. Carefully harvested from the highlands, First Flush captures the freshness of the season in every cup.",

  shortDescription:
    "Delicate, floral, and bright — a fresh expression of Nepal's highland tea.",

  aroma: [
    "floral",
    "fresh grass",
    "honey",
  ],

  flavors: [
    "white flowers",
    "honey",
    "citrus",
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
        "The tea is cultivated at higher elevations where cooler conditions encourage slower leaf development and contribute to a more delicate character.",
    },

    process: {
      value: "Lightly processed",
      blurb:
        "The young leaves are carefully handled to preserve their fresh character, delicate aromas, and natural sweetness.",
    },

    variety: {
      value: "Camellia sinensis",
      blurb:
        "Made from the leaves of Camellia sinensis, the tea plant responsible for traditional teas across the world.",
    },

    harvest: {
      value: "First Flush",
      blurb:
        "Harvested during the first picking season, when young leaves and buds are at their freshest and most delicate.",
    },

    oxidation: {
      value: "Low",
      blurb:
        "Light oxidation preserves the tea's fresh, floral character while developing a clean and bright cup.",
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
        "First Flush refers to the first harvest of the tea season. These young leaves are known for their delicate character, freshness, and floral aromas.",
    },
    {
      question: "How should I brew this tea?",
      answer:
        "Use around 2–3g of tea per cup and steep in hot water for approximately 2–3 minutes. Adjust the time according to your preferred strength.",
    },
    {
      question: "Can I steep the leaves more than once?",
      answer:
        "Yes. High-quality loose-leaf tea can often be steeped multiple times, with each infusion revealing slightly different aromas and flavours.",
    },
    {
      question: "How should I store the tea?",
      answer:
        "Store it in an airtight container away from sunlight, moisture, heat, and strong aromas to preserve its freshness.",
    },
  ],

  ritual: {
  type: "steeping",
  method: "Western Gongfu",
  dose: "3g",
  doseLabel: "Leaf",
  water: "250ml",
  waterLabel: "Water",
  temperature: "90°C",
  ratio: "1:83",
  steeps: [
    {
      number: 1,
      duration: 180,
    },
    {
      number: 2,
      duration: 240,
    },
    {
      number: 3,
      duration: 300,
    },
  ],
  description:
    "One steep at a time in a larger pot — the everyday way.",
}
},

];

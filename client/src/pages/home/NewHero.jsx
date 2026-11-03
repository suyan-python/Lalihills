import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Coffee, Leaf, Sprout } from "lucide-react";

import { coffeeProducts, teaProducts } from "../../data/products";
import Button from "../../components/Button";

const productThemes = [
  {
    name: "Muuiya",
    eye: "Light Roasted Coffee",
    description: "Light Roasts",
    shortDescription: "Delicate, bright, and beautifully nuanced.",
    category: "coffee",
    icon: Coffee,
    background: "bg-[#E9E1D3]",
    text: "text-[#40382D]",
    accent: "#A8A58B",
    image: "/images/hero/muuiya.jpg",
  },
  {
    name: "Ani",
    eye: "Tea from the Hills",
    description: "White & Green Tea",
    shortDescription: "Fresh, gentle, and close to nature.",
    category: "tea",
    icon: Leaf,
    background: "bg-[#DCE5D8]",
    text: "text-[#263C30]",
    accent: "#66836A",
    image: "/images/hero/ani.jpg",
  },
  {
    name: "Maruni",
    eye: "The Everyday Favourite",
    description: "Medium Roast",
    shortDescription: "A comforting balance of depth and warmth.",
    category: "coffee",
    icon: Coffee,
    background: "bg-[#E8D4BD]",
    text: "text-[#493326]",
    accent: "#A77B54",
    image: "/images/hero/maruni.jpg",
  },
  {
    name: "Raani",
    eye: "A Royal Cup",
    description: "Black Tea",
    shortDescription: "Bold, rich, and made for slow moments.",
    category: "tea",
    icon: Leaf,
    background: "bg-[#DCCBC7]",
    text: "text-[#482A2D]",
    accent: "#874B50",
    image: "/images/hero/raani.jpg",
  },
  {
    name: "Jhakri",
    eye: "For the Bold at Heart",
    description: "Dark Roast",
    shortDescription: "Deep, intense, and unapologetically bold.",
    category: "coffee",
    icon: Sprout,
    background: "bg-[#D6D0C8]",
    text: "text-[#292622]",
    accent: "#6B5545",
    image: "/images/hero/jhakri.jpg",
  },
];

const allProducts = [...coffeeProducts, ...teaProducts];

const products = productThemes.map((theme) => ({
  ...theme,
  product: allProducts.find(
    (product) => product.name.toLowerCase() === theme.name.toLowerCase(),
  ),
}));

export default function NewHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const activeProduct = products[activeIndex];

  // Automatically rotate every 5 seconds.
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  const selectProduct = (index) => {
    setActiveIndex(index);
  };

  const productLink = activeProduct.product
    ? `/shop/${activeProduct.product.category}/${activeProduct.product.slug}`
    : `/shop/${activeProduct.category}`;

  return (
    <section
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-lightWhite dark:bg-darkInk"
      onMouseLeave={() => setIsInteracting(false)}
    >
      {/* Background color */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeProduct.name}
          className={`absolute inset-0 ${activeProduct.background}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeProduct.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeProduct.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Contrast overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-5 py-20 text-center text-white sm:px-8">
        {/* Product eyebrow */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeProduct.eye}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/75 sm:text-xs"
          >
            {activeProduct.eye}
          </motion.p>
        </AnimatePresence>

        {/* Constant heading */}
        <h1 className="header max-w-4xl text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-start">
          Best brews from the
          <br />
          <span className="text-amber-600">higher belts</span>.
        </h1>

        {/* Product description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeProduct.description}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-5 text-sm tracking-wide text-white/80 sm:text-base"
          >
            {activeProduct.shortDescription}
          </motion.p>
        </AnimatePresence>

        {/* Product options */}
        <div
          className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 "
          onMouseEnter={() => setIsInteracting(true)}
          onFocus={() => setIsInteracting(true)}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            const isActive = index === activeIndex;

            return (
              <button
                key={product.name}
                type="button"
                onMouseEnter={() => selectProduct(index)}
                onFocus={() => selectProduct(index)}
                onClick={() => selectProduct(index)}
                aria-pressed={isActive}
                className={`group flex min-h-[50px] flex-col items-start justify-center rounded-full border px-2 py-2 text-center transition-all duration-300 sm:min-h-[75px] bg-gray-900/45 ${
                  isActive
                    ? "border-amber-600/80  backdrop-blur-md -translate-y-0.5 cursor-pointer"
                    : "border-white/25 bg-black/10 hover:border-white/60 hover:bg-white/10"
                }`}
              >
                <div className="flex flex-row items-center gap-3 ">
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    className={`transition-transform rounded-4xl p-1 duration-300 bg-white text-ink ${
                      isActive ? "scale-110 " : " group-hover:text-white"
                    }`}
                  />

                  <div className="flex flex-col items-start">
                    <p className="text-sm font-medium tracking-wide sm:text-base">
                      {product.name}
                    </p>

                    <p className="mt-2 max-w-[180px] text-[10px] leading-relaxed text-white/65 sm:text-xs">
                      {product.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div mode="wait">
          <div key={activeProduct.name} className="mt-8">
            <Link
              to={productLink}
              className="inline-flex items-center gap-3 rounded-full bg-amber-600 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-white hover:gap-4"
            >
              Discover
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <Button variant="transparent">Shop Hill</Button>
        </div>

        {/* Bottom label */}
        <p className="mt-12 text-[9px] uppercase tracking-[0.25em] text-white/50">
          Grown in Nepal · Made for your ritual
        </p>
      </div>
    </section>
  );
}

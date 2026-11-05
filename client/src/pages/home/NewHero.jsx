import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Coffee, Leaf, Sprout } from "lucide-react";

import { coffeeProducts, teaProducts } from "../../data/products";
import Button from "../../components/Button";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";

import { useRef } from "react";

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
    hillColors: ["#D1C7B1", "#B8A88D", "#97846B", "#75614C"],
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
    hillColors: ["#B9CCB3", "#91AE8B", "#66896D", "#3E6049"],
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
    hillColors: ["#D9BFA1", "#C39C76", "#A77B54", "#805B3D"],
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
    hillColors: ["#CDAEAA", "#B78685", "#965F65", "#713D46"],
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
    hillColors: ["#B5ADA2", "#898075", "#62594F", "#39352F"],
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

  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const hillScale = useTransform(
    scrollYProgress,
    [0, 0.8],
    reduceMotion ? [1, 1] : [1, 0.015],
  );

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
      ref={heroRef}
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
      <div className="absolute inset-0 bg-black/45" />

      {/* HIMALAYAN HILL LAYERS */}
      {/* ANIMATED HILLS */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] overflow-hidden">
        <motion.div
          className="relative h-[260px] w-full origin-bottom sm:h-[340px] lg:h-[420px]"
          style={{
            scaleY: hillScale,
            transformOrigin: "bottom",
          }}
        >
          <svg
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {/* BACK HILL */}
            <motion.path
              d="M0 260 C180 180 280 220 430 165 C600 95 720 205 880 155 C1050 90 1200 175 1440 100 L1440 500 L0 500 Z"
              animate={{ fill: activeProduct.hillColors[0] }}
              transition={{ duration: 1.2 }}
            />

            {/* MIDDLE HILL */}
            <motion.path
              d="M0 315 C160 230 300 300 470 240 C650 175 760 285 930 225 C1100 160 1280 265 1440 205 L1440 500 L0 500 Z"
              animate={{ fill: activeProduct.hillColors[1] }}
              transition={{ duration: 1.2 }}
            />

            {/* FRONT HILL */}
            <motion.path
              d="M0 365 C180 290 320 365 500 315 C680 255 800 355 980 300 C1160 245 1300 340 1440 290 L1440 500 L0 500 Z"
              animate={{ fill: activeProduct.hillColors[2] }}
              transition={{ duration: 1.2 }}
            />

            {/* FOREGROUND */}
            <motion.path
              d="M0 420 C180 365 340 420 520 375 C700 330 850 415 1030 365 C1200 325 1320 390 1440 355 L1440 500 L0 500 Z"
              animate={{ fill: activeProduct.hillColors[3] }}
              transition={{ duration: 1.2 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-start px-5 py-20 text-center text-white sm:px-8">
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
        <h1 className="header  text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-start">
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
          className="mt-12 grid w-full max-w-5xl gap-3 grid-cols-2 md:grid-cols-3 "
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
                className={`group flex min-h-[50px] flex-col items-start justify-center rounded-full border px-2 py-1 text-center transition-all duration-300 sm:min-h-[75px] bg-gray-900/45 ${
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

                  <div className="flex flex-col items-start text-start">
                    <p className="text-sm font-medium tracking-wide sm:text-base">
                      {product.name}
                    </p>

                    <p className="text-[10px] leading-relaxed text-white/65 sm:text-xs ">
                      {product.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div
          mode="wait "
          className="header flex flex-col items-center gap-4 sm:flex-row sm:gap-2 justify-center mt-8"
        >
          <div key={activeProduct.name} className="">
            <Link
              to={productLink}
              className="inline-flex items-center gap-3 rounded-full bg-amber-600 px-6 py-3 text-xs font-medium  text-ink transition-all duration-300 hover:bg-white hover:gap-4"
            >
              Shop the hills
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <Button variant="transparent" className="lowercase">
            Walk with us
          </Button>
        </div>

        {/* Bottom label */}
        <p className="mt-12 text-[9px] uppercase tracking-[0.25em] text-white/50">
          Grown in Nepal · Made for your ritual
        </p>
      </div>
    </section>
  );
}

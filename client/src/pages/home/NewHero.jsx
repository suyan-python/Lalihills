import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Coffee, Leaf, Sprout } from "lucide-react";

import { coffeeProducts, teaProducts } from "../../data/products";
import Button from "../../components/Button";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";

import { useRef } from "react";

const productThemes = [
  // MUUIYA — Bright Lavender
  {
    name: "Muuiya",
    eye: "Light Roasted Coffee",
    description: "Light Roasts",
    shortDescription:
      "“Start where I start — a bright cup, before the day wakes up.” — Muuiya",
    category: "coffee",
    icon: Coffee,
    background: "bg-[#F1E7FA]",
    text: "text-[#49345E]",
    accent: "#B58AD9",
    image: "/images/hero/muuiya.jpg",
    hillColors: ["#E8D8F5", "#D8BEEB", "#C19DDE", "#A77CCB"],
  },

  // ANI — Fresh Lilac
  {
    name: "Ani",
    eye: "Tea from the Hills",
    description: "White & Green Tea",
    shortDescription:
      "“Sit a moment. A clear cup, and the day goes quiet.” — Ani",
    category: "tea",
    icon: Leaf,
    background: "bg-[#E9EDFF]",
    text: "text-[#35416A]",
    accent: "#929FE0",
    image: "/images/hero/ani.jpg",
    hillColors: ["#DCE3FF", "#C5D0FA", "#A7B6ED", "#8799D8"],
  },

  // MARUNI — Dark Roasted Brown
  {
    name: "Maruni",
    eye: "The Everyday Favourite",
    description: "Medium Roast",
    shortDescription:
      "“Come, this is the cup we share when everyone is home.” — Maruni",
    category: "coffee",
    icon: Coffee,
    background: "bg-[#30241F]",
    text: "text-[#F0E3D3]",
    accent: "#C08B61",
    image: "/images/hero/maruni.jpg",
    hillColors: ["#5A4035", "#453027", "#30221D", "#211815"],
  },

  // RAANI — Dark Royal Plum
  {
    name: "Raani",
    eye: "A Royal Cup",
    description: "Black Tea",
    shortDescription:
      "“Bold, and in no hurry — pour, and take your time.” — Raani",
    category: "tea",
    icon: Leaf,
    background: "bg-[#30202B]",
    text: "text-[#F0DDE7]",
    accent: "#C18A9F",
    image: "/images/hero/raani.jpg",
    hillColors: ["#654052", "#4D3042", "#382330", "#241720"],
  },

  // JHAKRI — Dark Charcoal
  {
    name: "Jhakri",
    eye: "For the Bold at Heart",
    description: "Dark Roast",
    shortDescription:
      "“Stay up with me a while. The best things come slow, in the dark.” — Jhakri",
    category: "coffee",
    icon: Sprout,
    background: "bg-[#252522]",
    text: "text-[#E8E4DB]",
    accent: "#A18B70",
    image: "/images/hero/jhakri.jpg",
    hillColors: ["#514B42", "#3C3832", "#2C2925", "#1B1A18"],
  },
];

const products = [...coffeeProducts, ...teaProducts];

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
    if (isInteracting || products.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  const selectProduct = (index) => {
    setActiveIndex(index);
  };

  const productLink = activeProduct
    ? `/shop/${activeProduct.category}/${activeProduct.slug}`
    : "/shop/coffee";

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

      <AnimatePresence mode="wait">
        {activeProduct?.characterImage && (
          <motion.div
            key={activeProduct._id}
            className="pointer-events-none absolute right-0 top-1/2 z-[2] h-[280px] w-[220px] -translate-y-1/2 sm:h-[380px] sm:w-[300px] lg:h-[520px] lg:w-[420px]"
            initial={{
              opacity: 0,
              y: 180,
              scale: 0.65,
              rotate: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              y: 140,
              scale: 0.75,
              rotate: -10,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src={activeProduct.characterImage}
              alt={`${activeProduct.name} character`}
              className="h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
              animate={{
                y: [0, -12, 0, -7, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-20 text-center text-white sm:px-8">
        {/* Product eyebrow */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeProduct.eye}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mb-5 text-[10px] uppercase tracking-[0.3em] text-deepPurple sm:text-xs"
          >
            {activeProduct.eye}
          </motion.p>
        </AnimatePresence>

        {/* Interactive Character Introduction */}
        <div className="relative">
          <h1
            key={activeProduct._id}
            className="header text-4xl font-semibold leading-[1.08] tracking-tight text-start text-deepPurple dark:text-lightCream sm:text-6xl lg:text-7xl"
          >
            Well, hello
            <br />
            there! I'm
            <br />
            <span className="text-red dark:text-orange">
              {activeProduct.name}
            </span>
            <span className="text-deepPurple dark:text-lightCream">.</span>
          </h1>
        </div>

        {/* Product description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeProduct.description}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-2 text-sm max-w-md text-start tracking-wide text-deepPurple/80 sm:text-lg"
          >
            {activeProduct.shortDescription2}
          </motion.p>
        </AnimatePresence>

        {/* Character Selector */}
        <div
          className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 "
          onMouseEnter={() => setIsInteracting(true)}
          onFocus={() => setIsInteracting(true)}
        >
          {products.map((product, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.button
                key={product._id}
                type="button"
                onMouseEnter={() => selectProduct(index)}
                onFocus={() => selectProduct(index)}
                onClick={() => selectProduct(index)}
                aria-pressed={isActive}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className={`group relative flex max-h-[70px] items-center gap-2 overflow-hidden rounded-full border p-2 text-left bg-purple/75 backdrop-blur-md sm:max-h-[80px] sm:gap-3 sm:p-3 ${
                  isActive
                    ? "shadow-[0_8px_30px_rgba(180,145,210,0.16)] border-red"
                    : "border-deepPurple/40"
                }`}
              >
                {/* Active glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeCharacterGlow"
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8B2DF]/15 via-transparent to-[#8C6BAA]/10"
                    transition={{ duration: 0.4 }}
                  />
                )}

                {/* Character Image */}
                <div className="relative z-[1] flex h-14 w-10 shrink-0 items-center justify-center sm:h-16 sm:w-14 bg-deepPurple/25 rounded-full overflow-hidden">
                  {product.characterImage && (
                    <motion.img
                      src={product.characterImage}
                      alt={`${product.name} character`}
                      className="h-full w-full object-contain drop-shadow-[0_4px_7px_rgba(0,0,0,0.25)]"
                      animate={
                        isActive
                          ? {
                              y: [0, -3, 0],
                              rotate: [0, 2, 0, -2, 0],
                              scale: 1.08,
                            }
                          : {
                              y: 0,
                              rotate: 0,
                              scale: 0.92,
                            }
                      }
                      transition={
                        isActive
                          ? {
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                          : { duration: 0.3 }
                      }
                    />
                  )}
                </div>

                {/* Character Details */}
                <div className="relative z-[1] min-w-0 flex-1">
                  <p
                    className={`truncate header text-xs font-semibold tracking-wide transition-colors sm:text-sm text-darkPurple `}
                  >
                    {product.name}
                  </p>

                  <p className="mt-1 line-clamp-2 text-[9px] leading-relaxed text-darkPurple/75 font-light sm:text-[11px] uppercase">
                    {product.description2 || product.shortDescription}
                  </p>

                  {/* Active indicator */}
                  {/* <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        isActive ? "bg-[#C8A8E5]" : "bg-white/25"
                      }`}
                    />
                    <span
                      className={`text-[8px] font-semibold uppercase tracking-[0.16em] sm:text-[9px] ${
                        isActive ? "text-[#D9C3ED]" : "text-white/35"
                      }`}
                    >
                      {isActive ? "Selected" : product.category}
                    </span>
                  </div> */}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="header mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to={productLink}
            className="group inline-flex items-center justify-center gap-3 rounded-full
      bg-[#A4161A] px-7 py-3.5
      text-sm font-medium text-[#FCFBF8]
      shadow-sm
      transition-all duration-300
      hover:bg-[#7F1F27] hover:shadow-md
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-[#A4161A] focus-visible:ring-offset-2"
          >
            Shop the hills
          </Link>

          <div className="group inline-flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Link to="/our-story" className="text-sm">
                Walk with us
              </Link>
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            <span className="mt-1 h-[2px] w-full origin-left scale-x-100 rounded-full bg-orange transition-transform duration-300 group-hover:scale-x-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

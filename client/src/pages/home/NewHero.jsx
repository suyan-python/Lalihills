import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

import { coffeeProducts, teaProducts } from "../../data/products";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";

const products = [...coffeeProducts, ...teaProducts];
const characterPositions = [
  {
    className: "left-0 top-[17%] sm:left-[12%] sm:top-[15%]",
    bubbleSide: "right",
  },
  {
    className: "left-0 bottom-[13%] sm:left-[8%] sm:bottom-[12%]",
    bubbleSide: "right",
  },
  {
    className: "right-0 top-[13%] sm:right-[2%] sm:top-[12%]",
    bubbleSide: "left",
  },
  {
    className: "right-0 top-[41%] sm:right-[10%] sm:top-[39%]",
    bubbleSide: "left",
  },
  {
    className: "right-0 bottom-[11%] sm:right-[3%] sm:bottom-[10%]",
    bubbleSide: "left",
  },
];

export default function NewHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [spotlightIndex, setSpotlightIndex] = useState(null);

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

  const selectProduct = (index) => {
    setActiveIndex(index);
    setSpotlightIndex(index);
  };

  const productLink = activeProduct
    ? `/shop/${activeProduct.category}/${activeProduct.slug}`
    : "/shop/coffee";

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-lightWhite dark:bg-darkInk"
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

      {/* Character gallery */}
      <div className="pointer-events-none absolute inset-0">
        {products.map((product, index) => {
          const isActive = index === activeIndex;
          const isSpotlighted = spotlightIndex === index;
          const isDimmed = spotlightIndex !== null && !isSpotlighted;
          const position = characterPositions[index];
          const bubbleOnRight = position.bubbleSide === "right";

          return (
            <motion.button
              key={product._id}
              type="button"
              aria-label={`Select ${product.name}`}
              aria-pressed={isActive}
              onMouseEnter={() => selectProduct(index)}
              onFocus={() => selectProduct(index)}
              onClick={() => selectProduct(index)}
              onMouseLeave={() => setSpotlightIndex(null)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setSpotlightIndex(null);
                }
              }}
              className={`pointer-events-auto absolute h-36 w-24 appearance-none border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 sm:h-56 sm:w-40 lg:h-72 lg:w-52 ${position.className}`}
              style={{ zIndex: isActive ? 20 : 3 }}
              animate={{
                opacity: isDimmed ? 0.24 : 0.78,
                scale: isSpotlighted ? 1.12 : isDimmed ? 0.88 : 1,
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <motion.img
                src={product.characterImage}
                alt=""
                className="h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -6, 0], rotate: [0, 1, 0, -1, 0] }
                }
                transition={{
                  duration: 4.5 + index * 0.35,
                  repeat: reduceMotion ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.9, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 4 }}
                    transition={{ duration: 0.25 }}
                    className={`absolute top-[18%] w-[min(42vw,10rem)] rounded-2xl border bg-white/95 p-3 text-left shadow-xl shadow-deepPurple/15 backdrop-blur-md sm:top-[24%] sm:w-56 sm:p-4 ${
                      bubbleOnRight
                        ? "left-full ml-2 rounded-tl-none"
                        : "right-full mr-2 rounded-tr-none"
                    }`}
                    style={{ borderColor: `${product.accent}99` }}
                    role="status"
                    aria-live="polite"
                  >
                    <span
                      className={`absolute top-3 h-3 w-3 rotate-45 bg-white ${
                        bubbleOnRight
                          ? "-left-1.5 border-b border-l"
                          : "-right-1.5 border-r border-t"
                      }`}
                      style={{
                        borderColor: `${product.accent}99`,
                      }}
                    />
                    <span
                      className="mb-1 flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.16em] sm:text-[9px]"
                      style={{ color: product.accent }}
                    >
                      <Quote size={11} aria-hidden="true" />
                      {product.name}
                    </span>
                    <p className="text-[9px] leading-relaxed text-deepPurple sm:text-xs">
                      {product.shortDescription2}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

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
      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-start px-5 py-20 text-center text-white sm:px-8">
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
            Best brews
            <br />
            from the
            <br />
            <span className="text-red dark:text-orange">higher belts</span>
            <span className="text-deepPurple dark:text-lightCream">.</span>
          </h1>
        </div>

        {/* Character Selector */}
        <div
          className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 "
          onMouseLeave={() => setSpotlightIndex(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setSpotlightIndex(null);
            }
          }}
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

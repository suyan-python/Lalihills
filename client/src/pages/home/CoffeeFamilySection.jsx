import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { coffeeProducts } from "../../data/products";

import muuiya from "../../assets/characters/muuiya.png";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { Plus, Minus, X, ShoppingBag } from "lucide-react";

import { useCart } from "../../layouts/CartContext";

const cardAccents = [
  {
    surface: "#F8F4FB",
    imageBg: "#E4D8EF",
    accent: "#8E6BAE",
    label: "THE BRIGHT ONE",
  },
  {
    surface: "#F7F1FA",
    imageBg: "#DED0EA",
    accent: "#795A9C",
    label: "THE BALANCED ONE",
  },
  {
    surface: "#F9F5FA",
    imageBg: "#E9DFF0",
    accent: "#A17DB9",
    label: "THE BOLD ONE",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const coffeecoffeeProducts = coffeeProducts.filter(
  (product) => product.category?.toLowerCase() === "coffee",
);

function CoffeeProductCard({ product, index }) {
  const palette = cardAccents[index % cardAccents.length];
  const productLink = `/shop/coffee/${product.slug}`;

  const { addToCart, setIsCartOpen } = useCart();

  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const closeTimer = useRef(null);

  const openQuickView = () => {
    clearTimeout(closeTimer.current);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setIsQuickViewOpen(false);
    }, 180);
  };

  useEffect(() => {
    if (!isQuickViewOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsQuickViewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isQuickViewOpen]);

  const coffeeDetails = [
    { label: "Origin", value: product.origin },
    {
      label: "Roast Level",
      value: product.roastLevel ? `${product.roastLevel}/5` : null,
    },
    { label: "Process", value: product.process },
    { label: "Altitude", value: product.altitude },
  ].filter((detail) => detail.value);

  const handleAddToCart = () => {
    addToCart(product, {
      quantity,
      purchaseType: "one-time",
    });

    setIsQuickViewOpen(false);
    setQuantity(1);
    setIsCartOpen(true);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <motion.article
        variants={cardVariants}
        whileHover={{ y: -7 }}
        transition={{ duration: 0.3 }}
        className="group relative flex h-full flex-col rounded-[1.6rem] border border-[#DED2E9] bg-[#F8F4FB] p-3 shadow-[0_8px_30px_rgba(64,52,77,0.045)] transition-all duration-300 hover:border-red hover:shadow-[0_18px_45px_rgba(64,52,77,0.12)] sm:p-4"
      >
        {/* Product image */}
        <div
          className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.2rem]"
          style={{
            backgroundColor: product.imageColor || "#F8F4FB",
          }}
        >
          {/* Character */}
          {product.characterImage && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.2,
                y: 20,
                rotate: -15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                opacity: { duration: 0.35 },
                scale: {
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  delay: 0.2 + index * 0.12,
                },
                y: {
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                  delay: 0.2 + index * 0.12,
                },
                rotate: {
                  type: "spring",
                  stiffness: 160,
                  damping: 12,
                  delay: 0.2 + index * 0.12,
                },
              }}
              className="absolute top-1/2 z-[2] h-16 w-16 -translate-y-1/2 sm:h-26 sm:w-26 md:h-32 md:w-32 lg:h-52 lg:w-52"
            >
              <motion.img
                src={product.characterImage}
                alt={`${product.name} character`}
                className="h-full w-full object-contain drop-shadow-[0_5px_8px_rgba(55,39,68,0.18)]"
                animate={{
                  y: [0, -5, 0, -3, 0],
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

          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/35" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full border border-white/35" />

          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/75 text-[#49345E] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
            <ArrowUpRight size={17} />
          </span>
        </div>

        {/* Product information */}
        <div className="relative z-[2] flex flex-1 flex-col items-center justify-center px-1 pb-1 pt-2 text-center sm:px-2 sm:pt-3">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span
              className="text-[9px] font-semibold tracking-[0.18em] sm:text-[10px]"
              style={{ color: palette.accent }}
            >
              {product.roastLevel
                ? `ROAST LEVEL ${product.roastLevel}/5`
                : "LAALI HILLS COFFEE"}
            </span>
          </div>

          <h3 className="header text-lg font-semibold leading-tight text-[#40344D] sm:text-xl">
            {product.name}
          </h3>

          {product.flavors?.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
              {product.flavors.slice(0, 3).map((flavor) => (
                <span
                  key={flavor}
                  className="rounded-full bg-[#EEE6F4] px-2.5 py-1 text-[9px] text-[#695779] sm:text-[10px]"
                >
                  {flavor}
                </span>
              ))}
            </div>
          )}

          <div
            className="relative z-50 mt-3 px-5 py-2 text-center bg-red  rounded-full cursor-pointer "
            onMouseEnter={openQuickView}
            onMouseLeave={closeQuickView}
          >
            <button
              type="button"
              onClick={() => setIsQuickViewOpen((previous) => !previous)}
              className="inline-flex items-center gap-1 text-xs text-lightWhite transition-all duration-300 hover:gap-2"
            >
              Hover {product.name}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.article>

      {/* Quick View Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isQuickViewOpen && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#241B2D]/65 p-3 backdrop-blur-sm sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseEnter={openQuickView}
                onMouseLeave={closeQuickView}
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    setIsQuickViewOpen(false);
                  }
                }}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${product.name} quick view`}
                  initial={{ opacity: 0, y: 25, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative my-auto flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] shadow-[0_25px_80px_rgba(20,12,30,0.3)] sm:rounded-3xl"
                >
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setIsQuickViewOpen(false)}
                    aria-label="Close quick view"
                    className="absolute right-3 top-3 z-30 grid h-9 w-9 place-items-center rounded-full border border-[#D7C8E4] bg-white/90 text-[#49345E] shadow-sm transition hover:rotate-90 hover:bg-[#49345E] hover:text-white sm:right-5 sm:top-5"
                  >
                    <X size={17} />
                  </button>

                  {/* Main content */}
                  <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto sm:grid-cols-[0.85fr_1.15fr] sm:overflow-hidden">
                    {/* Character panel */}
                    <div
                      className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden px-5 py-7 sm:min-h-[420px] sm:px-6"
                      style={{
                        backgroundColor: product.imageColor || "#ECE6F4",
                      }}
                    >
                      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border border-white/40" />
                      <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border border-white/40" />

                      <span className="relative z-10 mb-3 rounded-full border border-white/60 bg-white/55 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#604B76] backdrop-blur-sm">
                        Meet your coffee companion
                      </span>

                      {product.characterImage && (
                        <motion.img
                          src={product.characterImage}
                          alt={`${product.name} character`}
                          className="relative z-10 h-40 w-full object-contain drop-shadow-[0_12px_15px_rgba(55,39,68,0.16)] sm:h-64"
                        />
                      )}

                      <h3 className="relative z-10 mt-2 header text-xl font-semibold text-[#40344D] sm:text-2xl">
                        {product.shortName || product.name}
                      </h3>

                      <Link
                        to={productLink}
                        onClick={() => setIsQuickViewOpen(false)}
                        className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full border border-[#795A9C]/30 bg-white/70 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#604B76] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#795A9C] hover:bg-[#795A9C] hover:text-white"
                      >
                        View Full Details
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>

                    {/* Product details */}
                    <div className="flex min-w-0 flex-col p-5 sm:overflow-y-auto sm:p-8 lg:p-10">
                      <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#987BB2]">
                        Laali Hills · Specialty Coffee
                      </span>

                      <h2 className="header pr-8 text-2xl font-semibold leading-tight text-[#40344D] sm:text-3xl lg:text-4xl">
                        {product.name}
                      </h2>

                      {product.shortDescription && (
                        <p className="mt-4 text-sm leading-7 text-[#766A80]">
                          {product.shortDescription}
                        </p>
                      )}

                      {/* Flavour notes */}
                      {product.flavors?.length > 0 && (
                        <div className="mt-6">
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#987BB2]">
                            Tasting Notes
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {product.flavors.map((flavor) => (
                              <span
                                key={flavor}
                                className="rounded-full border border-[#D7C8E4] bg-white/70 px-3 py-1.5 text-xs text-[#604B76]"
                              >
                                {flavor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Product details */}
                      {coffeeDetails.length > 0 && (
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          {coffeeDetails.map((detail) => (
                            <div
                              key={detail.label}
                              className="rounded-xl border border-[#E4D9EC] bg-white/55 p-3"
                            >
                              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#987BB2]">
                                {detail.label}
                              </p>
                              <p className="mt-1 text-sm font-semibold text-[#49345E]">
                                {detail.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Purchase bar */}
                      <div className="mt-7 border-t border-[#DED2E9] pt-5">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#987BB2]">
                              Price
                            </p>
                            <p className="mt-1 text-2xl font-semibold text-[#40344D]">
                              Rs.{" "}
                              {Number(product.price).toLocaleString("en-IN")}
                            </p>
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center gap-3 rounded-full border border-[#D7C8E4] bg-white px-3 py-2">
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity((current) =>
                                  Math.max(1, current - 1),
                                )
                              }
                              aria-label="Decrease quantity"
                              className="text-[#604B76] transition hover:text-red"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="min-w-4 text-center text-sm font-semibold text-[#40344D]">
                              {quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                setQuantity((current) => current + 1)
                              }
                              aria-label="Increase quantity"
                              className="text-[#604B76] transition hover:text-red"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleAddToCart}
                          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#49345E] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red hover:shadow-lg"
                        >
                          <ShoppingBag size={16} />
                          Add to Bag
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

export default function CoffeeFamilySection({
  eyebrow = "Maruni: let me introduce the family.",
  title = "The people in your cup.",
  description = "Each coffee is one of us. We grew up on these slopes; now we come to say hello.",
  viewAllLink = "/shop/coffee",
}) {
  return (
    <section className="relative overflow-hidden bg-[#ECE6F4] px-4 py-10 text-[#40344D] sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Character Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-14 flex max-w-5xl flex-col items-center text-center md:mb-20"
        >
          {/* Small section label */}
          <span className="mb-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#987BB2] sm:text-[10px]">
            A little introduction
          </span>

          {/* Character + Speech bubble */}
          <div className="relative flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            {/* Muuiya character */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: 45, rotate: -12 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                opacity: { duration: 0.35 },
                scale: {
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  delay: 0.15,
                },
                y: {
                  type: "spring",
                  stiffness: 180,
                  damping: 13,
                  delay: 0.15,
                },
                rotate: {
                  type: "spring",
                  stiffness: 160,
                  damping: 12,
                  delay: 0.15,
                },
              }}
              className="relative z-10 h-52 w-52 shrink-0 "
            >
              {/* Floating character */}
              <motion.img
                src={muuiya}
                alt="Muuiya"
                className="h-full w-full object-contain drop-shadow-[0_12px_15px_rgba(75,48,100,0.15)] "
                animate={{
                  y: [0, -9, 0, -5, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9,
                }}
              />

              {/* Character name */}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.65 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#D7C8E4] bg-[#F8F4FB] px-4 py-1 text-[9px] font-bold tracking-[0.15em] text-[#795A9C]"
              >
                MUUIYA
              </motion.span>
            </motion.div>

            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="relative max-w-2xl rounded-[2rem] border border-[#DCCFE8] bg-[#F8F4FB] px-6 py-7 shadow-[0_12px_35px_rgba(64,52,77,0.05)] sm:px-10 sm:py-9"
            >
              {/* Speech bubble pointer */}
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#DCCFE8] bg-[#F8F4FB] sm:-left-2 sm:top-1/2 sm:-translate-y-1/2 sm:rotate-[-45deg]" />

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#987BB2]">
                Well, hello there!
              </p>

              <h2 className="header text-2xl font-semibold leading-snug text-[#40344D] sm:text-3xl md:text-4xl">
                "I'm Muuiya.
                <span className="text-[#987BB2]">
                  {" "}
                  Let me introduce you to my coffee family.
                </span>
                "
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#766A80] sm:text-base">
                We all have our own personalities, our own little quirks, and a
                different story to tell. So, come meet everyone!
              </p>
            </motion.div>
          </div>

          {/* Transition into product cards */}
        </motion.div>

        {/* Product family */}
        {coffeecoffeeProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 xl:gap-6"
          >
            {coffeecoffeeProducts.map((product, index) => (
              <CoffeeProductCard
                key={product._id}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#CDBDDB] bg-white/35 px-6 py-16 text-center">
            <Coffee className="mx-auto mb-4 text-[#987BB2]" size={30} />
            <p className="font-heading text-lg font-semibold text-[#49345E]">
              The family is getting ready.
            </p>
            <p className="mt-2 text-sm text-[#766A80]">
              Our coffee collection will be here soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

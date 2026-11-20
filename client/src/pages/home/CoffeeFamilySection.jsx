import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { coffeeProducts } from "../../data/products";

import muuiya from "../../assets/characters/muuiya.png";
import maruni from "../../assets/characters/maruni.png";
import jhakri from "../../assets/characters/jhakri.png";

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

  const productImage = product.frontImage || product.image;
  const productDescription = product.shortDescription || product.description;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
      className="group relative flex h-full flex-col rounded-[1.6rem] border border-[#DED2E9] bg-[#F8F4FB] p-3 shadow-[0_8px_30px_rgba(64,52,77,0.045)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(64,52,77,0.12)] sm:p-4 hover:border-red"
    >
      <Link
        to={productLink}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-10 rounded-[1.6rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6BAA]"
      />

      {/* Product image */}
      {/* Product image */}
      <div
        className="relative flex aspect-[4/4.2] items-center justify-center overflow-hidden rounded-[1.2rem]"
        style={{ backgroundColor: product.imageColor || "#F8F4FB" }}
      >
        {/* Floating Character Badge */}
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

        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/75 text-[#49345E] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
      </div>

      {/* Product information */}
      <div className="relative z-[2] flex flex-1 flex-col px-1 pb-1 pt-2 sm:px-2 sm:pt-3 items-center justify-center">
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

        {/* <p className="mt-2 line-clamp-2 min-h-[2.8rem] text-xs leading-relaxed text-[#766A80] sm:text-sm">
          {productDescription}
        </p> */}

        {product.flavors?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 items-center justify-center">
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

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="inline-flex items-center gap-1 text-xs  text-red transition-all duration-300 group-hover:gap-2">
            Meet {product.name} <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
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

import { Link } from "react-router-dom";
import { useCart } from "../../layouts/CartContext";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import beans from "../../assets/shop/beans.webp";
import leaves from "../../assets/shop/leaves.webp";
import gift from "../../assets/shop/gift.jpg";
import ShopStatement from "./ShopStatement";

import { coffeeProducts } from "../../data/products";
import { teaProducts } from "../../data/products";
import Button from "../../components/Button";

import CoffeeBeans from "../../assets/icon/beans1.svg?react";
import Cherry from "../../assets/icon/cherries.svg?react";
import Cafe from "../../assets/icon/cafe.svg?react";
import Leaf from "../../assets/icon/leaf.svg?react";
import Star from "../../assets/icon/star.svg?react";

const collections = [
  {
    number: "01",
    name: "Beans",
    plainName: "Coffee",
    subtitle: "Nepali Specialty Coffee",
    image: beans,
    description:
      "Whole bean & ground, roasted to preserve the character of Nepal's highlands.",
    path: "/shop/coffee",
    accent: "rgb(74 49 28 / 94%)",
    featuredTitle: "Featured Coffee",
    id: "#beans",
  },
  {
    number: "02",
    name: "Leaves",
    plainName: "Tea",
    subtitle: "Nepali Specialty Tea",
    image: leaves,
    description:
      "Whole-leaf teas shaped by altitude, climate and generations of tradition.",
    path: "/shop/tea",
    accent: "rgb(30 44 32 / 95%)",
    featuredTitle: "Featured Tea",
    id: "#leaves",
  },
  {
    number: "03",
    name: "Gifts",
    plainName: "Gifting",
    subtitle: "Coffee & Tea Gift Sets",
    image: gift,
    description:
      "Thoughtful collections made for sharing a little piece of the hills.",
    path: "/shop/gifts",
    accent: "rgb(110 34 42 / 92%)",
    featuredTitle: "Featured Gifts",
  },
];

const collectionIcons = {
  beans: [
    {
      Component: CoffeeBeans,
      color: "#C9823D",
      positions: [
        { corner: "top-left", x: -18, y: -18, rotate: -25, size: 48 },
        { corner: "top-right", x: 18, y: -14, rotate: 20, size: 40 },
        { corner: "bottom-left", x: -16, y: 18, rotate: 15, size: 42 },
        { corner: "bottom-right", x: 18, y: 18, rotate: -20, size: 50 },
        { corner: "top-center", x: 0, y: -22, rotate: 30, size: 36 },
      ],
    },
    {
      Component: Cherry,
      color: "#A4161A",
      positions: [
        { corner: "bottom-center", x: 0, y: 22, rotate: -15, size: 52 },
        { corner: "left-center", x: -20, y: 0, rotate: 20, size: 42 },
        { corner: "right-center", x: 20, y: 0, rotate: -25, size: 44 },
      ],
    },
  ],

  leaves: [
    {
      Component: Cafe,
      color: "#28704D",
      positions: [
        { corner: "top-left", x: -18, y: -18, rotate: -15, size: 46 },
        { corner: "top-right", x: 18, y: -16, rotate: 15, size: 42 },
        { corner: "bottom-left", x: -16, y: 18, rotate: 20, size: 40 },
        { corner: "bottom-right", x: 18, y: 18, rotate: -20, size: 48 },
      ],
    },
    {
      Component: Leaf,
      color: "#83A94B",
      positions: [
        { corner: "top-center", x: 0, y: -20, rotate: 35, size: 42 },
        { corner: "left-center", x: -20, y: 0, rotate: -25, size: 46 },
        { corner: "right-center", x: 20, y: 0, rotate: 20, size: 42 },
        { corner: "bottom-center", x: 0, y: 20, rotate: -15, size: 40 },
      ],
    },
  ],

  gifts: [
    {
      Component: Star,
      color: "#F3C45C",
      positions: [
        { corner: "top-left", x: -18, y: -18, rotate: 20, size: 50 },
        { corner: "top-center", x: 0, y: -22, rotate: -15, size: 34 },
        { corner: "top-right", x: 18, y: -16, rotate: 15, size: 34 },
        { corner: "bottom-left", x: -16, y: 18, rotate: 25, size: 40 },
        { corner: "bottom-right", x: 18, y: 18, rotate: -20, size: 42 },
        { corner: "bottom-center", x: 0, y: 22, rotate: 35, size: 32 },
      ],
    },
  ],
};

const iconVariants = {
  rest: (item) => ({
    x: item.x + (item.corner.includes("left") ? -100 : 100),
    y: item.y + (item.corner.includes("top") ? -100 : 100),
    opacity: 0,
    scale: 0.5,
    rotate: item.rotate * 1.5,
  }),

  hover: (item) => ({
    x: item.x,
    y: item.y,
    opacity: 1,
    scale: 1,
    rotate: item.rotate,
    transition: {
      delay: item.delay,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};

const Shop = () => {
  return (
    <main className="relative z-20 overflow-x-hidden bg-purple " id="shop">
      <div className="max-w-[350px] md:max-w-7xl mx-auto pb-24 ">
        <div
          className=" mt-18 md:mt-24
        text-[clamp(1.5rem,8vw,3rem)]
        font-medium
        leading-[0.8]
        text-darkPurple text-center "
        >
          <p className="header tracking-tight">What the hills gave us.</p>
          <span className="text-ink/85 text-[clamp(0.5rem,3vw,1rem)]">
            Beans, Leaves and a little something to give. Take your time.
          </span>
        </div>

        {/* COLLECTIONS */}
        <section className="relative z-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 py-8 md:py-10 sm:px-2 md:px-4 lg:px-6">
            <CollectionColumn
              collection={collections[0]}
              products={coffeeProducts}
              type="coffee"
            />

            <CollectionColumn
              collection={collections[1]}
              products={teaProducts}
              type="tea"
            />

            <CollectionColumn
              collection={collections[2]}
              products={[]}
              type="gifts"
            />
          </div>
        </section>
      </div>

      {/* <ShopStatement /> */}
    </main>
  );
};

const CollectionColumn = ({ collection, products = [], type }) => {
  return (
    <div className="w-full   ">
      {/* COLLECTION HERO */}
      <CollectionHero collection={collection} products={products} type={type} />
    </div>
  );
};

const CollectionHero = ({ collection, products = [], type }) => {
  const collectionKey = collection.name?.toLowerCase();
  const icons = collectionIcons[collectionKey] || [];

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 35,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        className="group relative block aspect-[2/3] w-full overflow-hidden rounded-4xl"
      >
        {/* BACKGROUND IMAGE */}
        {/* <motion.img
          src={collection.image}
          alt={collection.plainName}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
        /> */}

        {/* ACCENT COLOR OVERLAY */}
        {/* ACCENT COLOR OVERLAY */}
        <div
          className={`absolute inset-0 ${
            collectionKey === "gifts" ? "bg-red" : "bg-[#604B76]"
          }`}
        />

        {/* DARKENING */}
        <div className="absolute inset-0 bg-gradient-to-b from-darkPurple/20 via-transparent to-darkPurple/30" />

        {/* POP-OUT ICONS */}
        <div className="pointer-events-none absolute inset-0 z-30">
          {icons.flatMap((icon, iconIndex) =>
            icon.positions.map((position, positionIndex) => {
              const item = {
                ...position,
                delay: positionIndex * 0.045 + iconIndex * 0.08,
              };

              const Icon = icon.Component;

              const cornerStyles = {
                "top-left": { left: 20, top: 20 },
                "top-right": { right: 20, top: 20 },
                "bottom-left": { left: 20, bottom: 20 },
                "bottom-right": { right: 20, bottom: 20 },
                "top-center": { left: "50%", top: 20 },
                "bottom-center": { left: "50%", bottom: 20 },
                "left-center": { left: 20, top: "50%" },
                "right-center": { right: 20, top: "50%" },
              };

              return (
                <motion.div
                  key={`${iconIndex}-${positionIndex}`}
                  custom={item}
                  variants={iconVariants}
                  className="absolute"
                  style={{
                    ...cornerStyles[position.corner],
                    width: position.size,
                    height: position.size,
                    x: position.x,
                    y: position.y,
                    color: icon.color,
                  }}
                >
                  <Icon className="h-full w-full" aria-hidden="true" />
                </motion.div>
              );
            }),
          )}
        </div>

        {/* COLLECTION HEADER */}
        <div className="relative z-20 flex h-full flex-col px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
          <Link
            to={collection.path}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-[6px] font-medium uppercase tracking-[0.25em] text-lightCream/85 sm:text-[7px] md:text-[8px]">
              {collection.subtitle}
            </span>

            <h2 className="header text-[clamp(1.5rem,5vw,3.5rem)] leading-[0.82] tracking-[-0.055em] text-lightCream font-semibold">
              {collection.name}
            </h2>
          </Link>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <FeaturedProducts
            products={products}
            type={type}
            collection={collection}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturedProducts = ({ products = [], type, collection }) => {
  const featuredProducts = products.slice(0, 2);

  return (
    <div className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-5 md:pb-5">
      {featuredProducts.length > 0 && (
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4">
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-3 text-center">
        <Button
          size="sm"
          className="border border-lightWhite/45 bg-transparent hover:bg-lightWhite/50"
          to={collection.id}
          icon={false}
        >
          Explore all {collection.name}
        </Button>
      </div>
    </div>
  );
};

const FeaturedProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const defaultSize = product.sizeOptions?.[0] || null;
  const defaultGrind = product.grindOptions?.[0] || null;
  const defaultForm = product.formOptions?.[0] || null;

  const price = defaultSize?.price ?? product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, {
      size: defaultSize?.grams ?? null,
      grind: product.category === "coffee" ? defaultGrind : null,
      form: product.category === "tea" ? defaultForm : null,
      purchaseType: "one-time",
      frequency: null,
      quantity: 1,
      price,
    });

    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.article
      layout
      className="group min-w-0 p-3 bg-slate-900/35 rounded-2xl"
      transition={{
        layout: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {/* PRODUCT IMAGE */}
      <Link
        to={`/shop/${product.category}/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="group/product relative block aspect-square overflow-hidden rounded-xl bg-paper dark:bg-hill sm:rounded-2xl "
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/product:scale-[1.04]"
        />

        {/* Hover overlay — independent for each product */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover/product:bg-ink/40">
          <span className="flex translate-y-2 items-center gap-1.5 rounded-full bg-lightWhite px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-ink opacity-0 shadow-lg transition-all duration-300 group-hover/product:translate-y-0 group-hover/product:opacity-100 sm:px-4 sm:py-2.5 sm:text-[10px]">
            View Product
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </span>
        </div>

        {/* Category label */}
        <span className="absolute left-2 top-2 rounded-full border border-lightCream/20 bg-ink/35 px-2 py-1 text-[7px] font-medium uppercase tracking-wider text-lightCream backdrop-blur-md sm:left-3 sm:top-3 sm:text-[8px]">
          {product.category}
        </span>
      </Link>

      {/* PRODUCT INFO */}
      <div className="pt-3 sm:pt-4">
        <div className="flex flex-col items-start justify-between ">
          <div className="min-w-0">
            {/* {product.origin && (
              <p className="mb-1 text-[8px] font-medium uppercase tracking-[0.18em] text-stone sm:text-[9px]">
                {product.origin}
              </p>
            )} */}

            <Link
              to={`/shop/${product.category}/${product.slug}`}
              className="header line-clamp-2 text-sm leading-snug tracking-wide text-lightCream transition-colors  dark:text-lightCream  sm:text-base "
            >
              {product.name}
            </Link>
          </div>

          <p className="shrink-0 pt-0.5 text-xs font-bold tabular-nums text-lightCream dark:text-lightCream sm:text-sm">
            NPR {price.toLocaleString()}
          </p>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-3 flex h-7 w-full items-center justify-center gap-2 rounded-full  text-[9px] font-semibold uppercase tracking-[0.02em] text-lightCream transition-all duration-300 bg-red hover:border-deepRed hover:bg-deepRed hover:text-lightCream active:scale-[0.98] dark:border-lightCream/20 dark:text-lightCream dark:hover:border-red dark:hover:bg-red sm:mt-4 sm:h-8 sm:text-[10px] cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-2 "
              >
                <Check size={14} />
                Added
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-2"
              >
                Add
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.article>
  );
};

export default Shop;

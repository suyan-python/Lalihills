import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import beans from "../../assets/shop/beans.webp";
import leaves from "../../assets/shop/leaves.webp";
import gift from "../../assets/shop/gift.jpg";
import ShopStatement from "./ShopStatement";
import Button from "../../components/Button";
import { useMemo } from "react";

import { coffeeProducts } from "../../data/products";
import { teaProducts } from "../../data/products";
// import { giftProducts } from "../../data/products";

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
    accent: "#6A4A2C",
    featuredTitle: "Featured Coffee",
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
    accent: "#2C3A2E",
    featuredTitle: "Featured Tea",
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
    accent: "#8F3038",
    featuredTitle: "Featured Gifts",
  },
];

const Shop = () => {
  return (
    <main className="relative overflow-x-hidden bg-lightWhite">
      {/* BACKGROUND WORD */}
      <div className="pointer-events-none absolute right-[-6vw] top-[8vh] z-0 select-none">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="header whitespace-nowrap text-[24vw] font-black leading-none tracking-[-0.09em] text-ink/[0.025] sm:text-[22vw] md:text-[20vw]"
        >
          Laali Hills
        </motion.p>
      </div>

      {/* COLLECTIONS */}
      <section className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 md:mx-14">
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

      <ShopStatement />
    </main>
  );
};

const CollectionColumn = ({ collection, products = [], type }) => {
  return (
    <div className="w-full border-b border-ink/10 md:border-b-0 md:border-r last:md:border-r-0">
      {/* COLLECTION HERO */}
      <CollectionHero collection={collection} />

      {/* FEATURED PRODUCTS */}
      <FeaturedProducts
        products={products}
        type={type}
        collection={collection}
      />
    </div>
  );
};

const CollectionHero = ({ collection }) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 90,
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
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      <Link to={collection.path} className="group block w-full">
        <div className="grid aspect-3/4 w-full grid-rows-[3fr_1fr] overflow-hidden rounded-b-[80px] bg-lightCream">
          {/* IMAGE */}
          <div className="relative min-h-0 overflow-hidden">
            <motion.img
              src={collection.image}
              alt={collection.plainName}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
            />

            <span className="absolute left-4 top-4 z-10 text-[6px] font-medium uppercase tracking-[0.3em] text-lightCream/75 sm:left-5 sm:top-5 sm:text-[7px] md:text-[8px]">
              {collection.number}
            </span>

            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div
            className="flex items-center justify-center px-4 py-5 text-center sm:px-6 sm:py-6 md:px-8"
            style={{ backgroundColor: collection.accent }}
          >
            <div className="flex w-full flex-col items-center">
              <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-lightCream/60 sm:text-[8px] md:text-[9px]">
                {collection.subtitle}
              </span>

              <h2 className="subheader mt-2 text-[clamp(1.75rem,3vw,3rem)] leading-[0.82] tracking-[-0.05em] text-lightCream">
                {collection.name}
              </h2>

              <div className="mt-4 md:mt-5">
                <Button
                  size="sm"
                  variant="light"
                  className="h-9 cursor-pointer gap-1.5 px-4 text-[7px] sm:h-10 sm:px-5 sm:text-[8px]"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedProducts = ({ products = [], type, collection }) => {
  const featuredProducts = products.slice(0, 2);

  return (
    <section className="px-4 py-4 sm:px-5 md:px-6 md:py-5">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center">
        <p
          className="text-md font-medium uppercase underline tracking-[0.05em]"
          style={{ color: collection.accent }}
        >
          Featured {collection.name}
        </p>
      </div>

      {/* PRODUCTS */}
      {featuredProducts.length > 0 && (
        <div className="mt-3 md:mt-5 space-y-4">
          {featuredProducts.map((product, index) => (
            <FeaturedProductCard
              key={product._id}
              product={product}
              index={index}
            />
          ))}
        </div>
      )}

      <Link
        to={collection.path}
        className="group flex items-center gap-1.5 text-[8px] font-bold uppercase underline tracking-[0.18em] text-ink/80 transition-colors hover:text-ink mt-5  justify-center"
      >
        View all
        <ArrowUpRight
          size={11}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </section>
  );
};

import { Plus } from "lucide-react";
import { useCart } from "../../layouts/CartContext";

const FeaturedProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const defaultSize = product.sizeOptions?.[0];
  const price = defaultSize?.price || product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, {
      size: defaultSize?.grams || null,
      grind:
        product.category === "coffee"
          ? product.grindOptions?.[0] || null
          : null,
      form:
        product.category === "tea" ? product.formOptions?.[0] || null : null,
      purchaseType: "one-time",
      frequency: null,
      quantity: 1,
      price,
    });
  };

  return (
    <div className="group flex gap-3 rounded-4xl  shadow-sm  p-2.5 transition-all duration-300 hover:border-ink/10 hover:bg-lightWhite sm:gap-4 sm:p-3">
      {/* IMAGE */}
      <Link
        to={`/shop/${product.category}/${product.slug}`}
        className="shrink-0 overflow-hidden rounded-3xl"
      >
        <div className="h-24 w-24 overflow-hidden sm:h-28 sm:w-28">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      {/* DETAILS */}
      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <Link
          to={`/shop/${product.category}/${product.slug}`}
          className="flex  items-end  justify-between "
        >
          <div>
            <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-stone">
              {product.origin}
            </p>

            <h4 className="header mt-1.5 text-[1.05rem] leading-[0.95] tracking-[-0.025em] text-ink sm:text-xl ">
              {product.name}
            </h4>
          </div>

          <div>
            <p className="mt-2.5 text-[14px]  tracking-[0.02em]  text-ink">
              NPR {price.toLocaleString()}
            </p>
          </div>
        </Link>

        {/* ACTIONS */}
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex h-8 items-center gap-1.5 rounded-full bg-red px-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-lightCream transition-all duration-300 hover:bg-deepRed active:scale-[0.97]"
          >
            {/* <Plus size={18} strokeWidth={2} /> */}
            Add
          </button>

          <Link
            to={`/shop/${product.category}/${product.slug}`}
            className="group/details flex h-8 items-center gap-1 rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-red transition-colors duration-300  cursor-pointer"
          >
            Details
            <ArrowUpRight
              size={11}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover/details:-translate-y-0.5 group-hover/details:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;

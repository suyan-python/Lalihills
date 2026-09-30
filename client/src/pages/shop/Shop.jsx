import { Link } from "react-router-dom";
import { useCart } from "../../layouts/CartContext";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";

import beans from "../../assets/shop/beans.webp";
import leaves from "../../assets/shop/leaves.webp";
import gift from "../../assets/shop/gift.jpg";
import ShopStatement from "./ShopStatement";

import { coffeeProducts } from "../../data/products";
import { teaProducts } from "../../data/products";
import Button from "../../components/Button";
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
    accent: "rgb(74 49 28 / 94%)",
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
    accent: "rgb(30 44 32 / 95%)",
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
    accent: "rgb(110 34 42 / 92%)",
    featuredTitle: "Featured Gifts",
  },
];

const Shop = () => {
  return (
    <main className="relative overflow-x-hidden bg-lightWhite ">
      <div className="max-w-[350px] md:max-w-7xl mx-auto">
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

        <div className="header mt-20 md:mt-36 text-3xl md:text-5xl">
          Beans, Leaves & <span className="text-red italic">Gifts</span>.
        </div>

        {/* COLLECTIONS */}
        <section className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 py-3 md:py-5  ">
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

      <ShopStatement />
    </main>
  );
};

const CollectionColumn = ({ collection, products = [], type }) => {
  return (
    <div className="w-full  ">
      {/* COLLECTION HERO */}
      <CollectionHero collection={collection} products={products} type={type} />
    </div>
  );
};

const CollectionHero = ({ collection, products = [], type }) => {
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
      <div className="group relative block aspect-[3/4] w-full overflow-hidden rounded-4xl">
        {/* BACKGROUND IMAGE */}
        <motion.img
          src={collection.image}
          alt={collection.plainName}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
        />

        {/* ACCENT COLOR OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: collection.accent,
            opacity: 0.88,
          }}
        />

        {/* DARKENING */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/30" />

        {/* COLLECTION HEADER */}
        <div className="relative z-10 flex h-full flex-col px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
          <Link to={collection.path} className="flex flex-col items-center">
            <span className="text-[6px] font-medium uppercase tracking-[0.25em] text-lightCream/65 sm:text-[7px] md:text-[8px]">
              {collection.subtitle}
            </span>

            <h2 className="header text-[clamp(1.5rem,5vw,3.5rem)] leading-[0.82] tracking-[-0.055em] text-lightCream">
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
      </div>
    </motion.div>
  );
};

const FeaturedProducts = ({ products = [], type, collection }) => {
  const featuredProducts = products.slice(0, 2);

  return (
    <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
      {featuredProducts.length > 0 && (
        <div className="space-y-2">
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <div className="mt-4  text-center">
        <Button
          size="sm"
          className="bg-white/20 border border-lightWhite/45 hover:bg-lightWhite/50"
          to={collection.path}
        >
          Explore all {collection.name}
        </Button>
      </div>
    </div>
  );
};

const FeaturedProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const [expanded, setExpanded] = useState(false);

  const defaultSize = product.sizeOptions?.[0];
  const defaultGrind = product.grindOptions?.[0] || null;
  const defaultForm = product.formOptions?.[0] || null;

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedGrind, setSelectedGrind] = useState(defaultGrind);
  const [selectedForm, setSelectedForm] = useState(defaultForm);

  const price = selectedSize?.price || product.price;

  const isCoffee = product.category === "coffee";
  const isTea = product.category === "tea";

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product, {
      size: selectedSize?.grams || null,
      grind: isCoffee ? selectedGrind : null,
      form: isTea ? selectedForm : null,
      purchaseType: "one-time",
      frequency: null,
      quantity: 1,
      price,
    });
  };

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-3xl bg-ink/35 backdrop-blur-sm shadow-sm border border-lightWhite/25"
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {/* PRODUCT ROW */}
      <button
        type="button"
        onClick={toggleExpanded}
        className="flex w-full items-center gap-3 p-2.5 text-left sm:gap-3.5 sm:p-3"
      >
        {/* IMAGE */}
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:h-18 sm:w-18">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        {/* NAME */}
        <div className="min-w-0 flex-1">
          <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-ivory">
            {product.origin}
          </p>

          <h4 className="header mt-1 text-[1rem] leading-[0.95] tracking-[-0.025em] text-lightWhite sm:text-[1.05rem]">
            {product.name}
          </h4>
        </div>

        {/* PRICE + TOGGLE */}
        <div className="flex shrink-0 items-center gap-2.5">
          <p className="text-[11px] tracking-[0.01em] text-lightWhite sm:text-sm ">
            NPR {price.toLocaleString()}
          </p>

          <span className="flex h-7 w-7 items-center justify-center rounded-full  text-lightCream border border-lightWhite">
            {expanded ? (
              <Minus size={12} strokeWidth={2.5} />
            ) : (
              <Plus size={12} strokeWidth={2.5} />
            )}
          </span>
        </div>
      </button>

      {/* EXPANDED CONTENT */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
          >
            <div className="border-t border-ink/10 px-3 pb-3 sm:px-3.5 sm:pb-3.5">
              {/* GRIND */}
              {isCoffee && product.grindOptions?.length > 0 && (
                <div className="">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone">
                      Grind
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {product.grindOptions.map((grind) => (
                      <button
                        key={grind}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedGrind(grind);
                        }}
                        className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-colors ${
                          selectedGrind === grind
                            ? "bg-lightWhite text-ink"
                            : " text-lightWhite border border-lightWhite/25 cursor-pointer"
                        }`}
                      >
                        {grind}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TEA FORM */}
              {isTea && product.formOptions?.length > 0 && (
                <div className="mt-4">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone">
                      Form
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {product.formOptions.map((form) => (
                      <button
                        key={form}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedForm(form);
                        }}
                        className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-colors ${
                          selectedForm === form
                            ? "bg-lightWhite text-ink"
                            : " text-lightWhite border border-lightWhite/25 cursor-pointer"
                        }`}
                      >
                        {form}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SIZE */}
              {product.sizeOptions?.length > 0 && (
                <div>
                  <div className="my-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone">
                      Size
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {product.sizeOptions.map((size) => (
                      <button
                        key={size.grams}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSize(size);
                        }}
                        className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-colors ${
                          selectedSize?.grams === size.grams
                            ? "bg-lightWhite text-ink"
                            : " text-lightWhite  border border-lightWhite/35 cursor-pointer"
                        }`}
                      >
                        {size.grams}g
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex h-8 flex-1 items-center justify-center rounded-full bg-red px-4 text-[8px] font-semibold uppercase tracking-[0.14em] text-lightCream transition-colors hover:bg-deepRed active:scale-[0.98] cursor-pointer"
                >
                  Add to Cart
                </button>

                <Link
                  to={`/shop/${product.category}/${product.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="group/details flex h-8 items-center gap-1 rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-lightWhite/75 underline"
                >
                  Details
                  <ArrowRight
                    size={10}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 "
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Shop;

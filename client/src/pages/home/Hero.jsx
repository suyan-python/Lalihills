import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { coffeeProducts } from "../../data/products";
import { teaProducts } from "../../data/products";
import { Leaf, Coffee, Sprout } from "lucide-react";
import tealeaves from "../../assets/icon/tealeaves.svg";
import tealeaves2 from "../../assets/icon/leaves.svg";
import coffeeleaves from "../../assets/icon/coffeeleaves.png";

const Hero = () => {
  const products = [
    ...(coffeeProducts || []).map((product) => ({
      ...product,
      productType: "coffee",
    })),
    ...(teaProducts || []).map((product) => ({
      ...product,
      productType: "tea",
    })),
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (products.length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (!products.length) return null;

  const product = products[activeIndex];
  const productPath = `/shop/${product.productType}/${product.slug}`;

  return (
    <section className="relative isolate flex min-h-[90svh] flex-col overflow-hidden bg-ink text-lightCream sm:min-h-screen">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Forest atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(65,88,69,0.5)_0%,rgba(41,58,52,0.28)_35%,transparent_90%)]" />

        {/* Soft ambient glows */}
        <div className="absolute -left-20 top-[25%] h-72 w-72 rounded-full bg-hill/25 blur-3xl" />
        <div className="absolute -right-24 top-[35%] h-80 w-80 rounded-full bg-hill/20 blur-3xl" />

        <Leaf
          aria-hidden="true"
          strokeWidth={0.7}
          className="absolute left-[7%] bottom-[19%] h-24 w-24 -rotate-45 opacity-[0.09] sm:h-36 sm:w-36 animate-botanical-drift text-amber-200"
        />

        {/* Floating botanical elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Tea leaves — drifting in from the left */}
          <img
            src={tealeaves}
            alt=""
            className="absolute left-[5%] top-[22%] w-20 opacity-[0.10] sm:w-32 animate-botanical-drift invert"
            style={{ "--drift-delay": "0s" }}
          />

          {/* Coffee leaves — slow movement on the right */}
          <img
            src={coffeeleaves}
            alt=""
            className="absolute right-[4%] top-[27%] w-24 rotate-[115deg] opacity-[0.25] sm:w-40 animate-botanical-drift-reverse invert"
            style={{ "--drift-delay": "-4s" }}
          />

          {/* Small tea leaf — floating higher in the background */}
          <img
            src={tealeaves2}
            alt=""
            className="absolute right-[24%] top-[10%] w-14 -rotate-[25deg] opacity-[0.10] sm:w-24 animate-botanical-drift invert"
            style={{ "--drift-delay": "-7s" }}
          />
        </div>
        <Coffee
          aria-hidden="true"
          strokeWidth={0.7}
          className="absolute right-[8%] bottom-[24%] h-20 w-20 rotate-12 opacity-[0.07] sm:h-32 sm:w-32 text-amber-300"
        />

        {/* Bottom fade — keep this above the floating elements */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center px-5 pb-40 pt-24 text-center sm:px-10 sm:pb-44 sm:pt-28 md:pt-32">
        <Link to={productPath} className="group inline-block ">
          <h2 className="header mt-2 text-3xl  tracking-[-0.04em] transition-colors duration-300 group-hover:text-lightCream/70 sm:text-5xl">
            {product.name}
          </h2>
        </Link>

        {/* Product visual */}
        <div className="relative mt-0 flex w-full max-w-4xl flex-1 items-center justify-center ">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lightCream/[0.2]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lightCream/[0.1]"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${product.productType}-${product.slug}`}
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <Link
                to={productPath}
                aria-label={`Discover ${product.name}`}
                className="flex min-h-0 flex-1 items-center justify-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="eager"
                  decoding="async"
                  className="max-h-[35svh] w-auto max-w-[82%] object-contain drop-shadow-2xl transition-transform duration-700 ease-out hover:scale-[1.025] sm:max-h-[43svh] md:max-h-[47svh]"
                />
              </Link>
              <div className="relative z-20 mt-3 w-full shrink-0">
                <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/65">
                  {product.productType} <span className="mx-2 text-red">/</span>
                  {product.origin || "Nepal"}
                </p>
              </div>
              {product.shortDescription && (
                <p
                  key={`${product.productType}-${product.slug}-description`}
                  className="mt-5 max-w-2xl text-[11px] leading-6 text-lightCream/80 sm:text-base"
                >
                  {product.flavors.join(" | ")}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators */}
        <div className="relative z-20 mt-5 flex items-center justify-center gap-2">
          {products.map((item, index) => (
            <button
              key={`${item.productType}-${item.slug}`}
              type="button"
              aria-label={`Show ${item.name}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className="group flex h-5 items-center justify-center"
            >
              <span
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-7 bg-ivory"
                    : "w-3 bg-lightCream/25 group-hover:bg-lightCream/55"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fixed-position CTAs within the hero */}
      <div className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 sm:bottom-10 md:gap-4">
        <a
          href="#shop"
          onClick={(event) => {
            const shopSection = document.getElementById("shop");

            if (shopSection) {
              event.preventDefault();
              shopSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="inline-flex h-10  items-center justify-center rounded-full bg-ivory px-6 text-[10px] font-semibold  text-hill transition-colors duration-300 hover:bg-lightWhite sm:h-12  sm:text-[14px]"
        >
          Explore
        </a>

        <Link
          to={productPath}
          className="inline-flex h-10  items-center justify-center rounded-full border border-lightCream/60 bg-transparent px-6 text-[10px] font-semibold  text-lightCream transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-hill sm:h-12  sm:text-[14px]"
        >
          Buy
        </Link>
      </div>
    </section>
  );
};

export default Hero;

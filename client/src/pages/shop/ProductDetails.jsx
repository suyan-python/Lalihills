import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductInfoGrid from "./ProductInfoGrid";
import StickyPurchaseBar from "./StickyPurchaseBar";
import { useCart } from "../../layouts/CartContext";
import { AnimatePresence } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

import { GiCoffeeBeans, GiCoffeePot, GiPouringPot } from "react-icons/gi";
import { FaMugHot } from "react-icons/fa";

const CircularDetail = ({
  title,
  value,
  position,
  linePosition,
  reveal,
  lineFrom,
}) => {
  const opacity = reveal;
  const scale = useTransform(reveal, [0, 1], [0.85, 1]);
  const lineScale = useTransform(reveal, [0, 1], [0, 1]);

  return (
    <div className={`absolute ${position}`}>
      <motion.div style={{ opacity, scale }} className="relative text-center">
        <span className="block text-[8px] uppercase tracking-[0.4em] text-ink/80">
          {title}
        </span>
        <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-ink font-bold">
          {value}
        </span>
        <motion.span
          style={{
            scaleX: lineScale,
            transformOrigin: lineFrom === "right" ? "right" : "left",
          }}
          className={`absolute ${linePosition} top-1/2 hidden h-px w-20 bg-ink/20 xl:block`}
        />
      </motion.div>
    </div>
  );
};

const MobileDetail = ({ title, value }) => (
  <div className="border-t border-ink/15 pt-3">
    <span className="block text-[7px] uppercase tracking-[0.35em] text-ink/50">
      {title}
    </span>
    <span className="mt-2 block text-[10px] uppercase tracking-[0.15em] text-ink">
      {value}
    </span>
  </div>
);

const TastingColumn = ({ number, title, items }) => (
  <div>
    <span className="text-[8px] tracking-[0.3em] text-lightCream/30">
      {number}
    </span>
    <h3 className="mt-5 text-xl uppercase tracking-[-0.02em]">{title}</h3>
    <div className="mt-5 space-y-2">
      {items?.map((item) => (
        <p
          key={item}
          className="text-sm font-light capitalize leading-6 text-lightCream/60"
        >
          {item}
        </p>
      ))}
    </div>
  </div>
);

const FaqItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-5 py-7 text-left sm:py-8"
      >
        <span className="w-8 shrink-0 text-[7px] font-medium tracking-[0.2em] text-red sm:w-10">
          {number}
        </span>

        <span className="flex-1 pr-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-red sm:text-base lg:text-lg">
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors duration-500 group-hover:border-red group-hover:text-red"
        >
          <Plus size={13} strokeWidth={1} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-[32px_1fr] gap-5 pb-8 sm:grid-cols-[40px_1fr]">
              <span />
              <p className="max-w-2xl text-[11px] leading-7 text-ink/50 sm:text-xs sm:leading-7">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetails = ({ products = [] }) => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = products?.find((item) => item.slug === slug);

  const sectionRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState(
    product?.grindOptions?.[0] || "beans",
  );
  const [frame, setFrame] = useState(0);
  const [purchaseType, setPurchaseType] = useState("one-time");
  const [frequency, setFrequency] = useState(
    product?.frequencies?.[0] || "Every 4 Weeks",
  );

  const DEFAULT_FREQUENCIES = [
    "Weekly",
    "Every 2 Weeks",
    "Every 3 Weeks",
    "Every 4 Weeks",
  ];
  const handleFrequencyChange = (value) => {
    setFrequency(value);
  };

  const handleAddToCart = () => {
    addToCart(product, {
      size: selectedSize.label,
      grind: selectedGrind,
      purchaseType,
      frequency: purchaseType === "subscribe" ? frequency : null,
      price: unitPrice,
      quantity,
    });
    trackEvent("add_to_cart", {
      currency: "NPR",
      value: Number(product.price) * quantity,
      items: [
        {
          item_id: product._id,
          item_name: product.name,
          item_brand: "Laali Hills",
          item_category: "Coffee",
          item_variant: `${selectedSize} / ${selectedGrind}`,
          price: Number(product.price),
          quantity,
        },
      ],
    });
  };

  useEffect(() => {
    if (!product) return;

    trackEvent("view_item", {
      currency: "NPR",
      value: Number(product.price) || 0,
      items: [
        {
          item_id: product._id,
          item_name: product.name,
          item_brand: "Laali Hills",
          item_category: "Coffee",
          price: Number(product.price) || 0,
          quantity: 1,
        },
      ],
    });
  }, [product]);

  const sizeOptions = useMemo(() => {
    if (!product) return [];

    if (product.sizeOptions?.length) {
      return product.sizeOptions.map(({ grams, price }) => ({
        label: `${grams}g`,
        grams,
        price,
      }));
    }

    return [
      {
        label: `${product.size}g`,
        grams: product.size,
        price: product.price,
      },
    ];
  }, [product]);

  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  useEffect(() => {
    setSelectedSize(sizeOptions[0]);
  }, [sizeOptions]);

  const rotationImages = useMemo(() => {
    if (!product) return [];
    if (product.rotationImages?.length) return product.rotationImages;
    return [product.image];
  }, [product]);

  const hasRealRotation = rotationImages.length > 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });

  // --- Turntable motion (used only when no real angle shots are available) ---
  const productRotateY = useTransform(smoothProgress, [0, 1], [0, 360]);
  const productRotateX = useTransform(smoothProgress, [0, 0.5, 1], [4, 0, -4]);
  const productScale = useTransform(smoothProgress, [0, 1], [1, 1]);

  // Contact shadow breathes with the rotation angle so the product feels
  // grounded instead of floating while it turns.
  const shadowScaleX = useTransform(productRotateY, (deg) => {
    const rad = (deg * Math.PI) / 180;
    return 0.55 + Math.abs(Math.cos(rad)) * 0.45;
  });
  const shadowOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 0.35, 0.35, 0.15],
  );

  const hintOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const chromeReveal = useTransform(smoothProgress, [0.02, 0.1], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 1], [0, -28]);
  const productY = useTransform(smoothProgress, [0, 1], [0, -34]);
  const ringScale = useTransform(smoothProgress, [0.03, 0.15], [0.75, 1]);
  const ringOpacity = useTransform(smoothProgress, [0.03, 0.15], [0, 1]);

  const originReveal = useTransform(smoothProgress, [0.12, 0.22], [0, 1]);

  const altitudeReveal = useTransform(smoothProgress, [0.22, 0.32], [0, 1]);

  const flavorReveal = useTransform(smoothProgress, [0.32, 0.42], [0, 1]);

  const aromaReveal = useTransform(smoothProgress, [0.42, 0.52], [0, 1]);

  const processReveal = useTransform(smoothProgress, [0.52, 0.62], [0, 1]);

  const roastReveal = useTransform(smoothProgress, [0.62, 0.72], [0, 1]);

  const caffeineReveal = useTransform(smoothProgress, [0.72, 0.82], [0, 1]);

  const typeReveal = useTransform(smoothProgress, [0.82, 0.92], [0, 1]);

  const mobileDetailOpacity = useTransform(smoothProgress, [0.16, 0.3], [0, 1]);
  const descriptionReveal = useTransform(smoothProgress, [0.14, 0.28], [0, 1]);
  const descriptionY = useTransform(smoothProgress, [0.14, 0.28], [24, 0]);

  useEffect(() => {
    if (!hasRealRotation) return; // nothing to swap when we're faking rotation with CSS

    const unsubscribe = smoothProgress.on("change", (value) => {
      const nextFrame = Math.min(
        rotationImages.length - 1,
        Math.floor(value * rotationImages.length),
      );

      setFrame(nextFrame);
    });

    return () => unsubscribe();
  }, [smoothProgress, rotationImages.length, hasRealRotation]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-lightCream px-6">
        <div className="text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-stone">
            Product not found
          </p>
          <Link
            to="/shop"
            className="mt-5 inline-flex items-center gap-3 border border-ink/20 px-6 py-3 text-[9px] uppercase tracking-[0.25em] text-ink"
          >
            <ArrowLeft size={14} />
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const subscriptionDiscount = product.subscriptionDiscount ?? 0.05;
  const unitPrice =
    purchaseType === "subscribe"
      ? selectedSize.price * (1 - subscriptionDiscount)
      : selectedSize.price;
  const total = unitPrice * quantity;

  const GRIND_CONFIG = {
    beans: {
      label: "Whole Beans",
      subtitle: "Grind fresh",
      icon: GiCoffeeBeans,
    },
    fine: {
      label: "Fine",
      subtitle: "Moka Pot",
      icon: GiCoffeePot,
    },
    medium: {
      label: "Medium",
      subtitle: "V60",
      icon: GiPouringPot,
    },
    coarse: {
      label: "Coarse",
      subtitle: "Advanced V60",
      icon: GiPouringPot,
    },
  };

  return (
    <main className="overflow-x-clip bg-lightWhite  text-ink ">
      <section ref={sectionRef} className="relative h-[400vh] bg-lightWhite">
        <div className="sticky top-0 isolate flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10">
          <motion.div
            style={{ opacity: chromeReveal }}
            className="absolute left-6 top-8 z-20 sm:left-10 sm:top-10"
          >
            <Link
              to="/shop/coffee"
              className="inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-ink/55 transition-colors hover:text-red"
            >
              <ArrowLeft size={13} strokeWidth={1.2} />
              Coffee collection
            </Link>
          </motion.div>

          <motion.div
            style={{ opacity: chromeReveal }}
            className="absolute right-6 top-8 z-20 text-right sm:right-10 sm:top-10"
          >
            <span className="block text-[8px] uppercase tracking-[0.4em] text-ink/50">
              The product
            </span>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink">
              {product.origin} · {product.type}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: productScale, y: productY, perspective: 1400 }}
            className="relative z-10 flex h-[55vh] w-[55vh] max-h-125 max-w-125 items-center justify-center"
          >
            <motion.div
              style={{ scale: ringScale, opacity: ringOpacity }}
              className="absolute inset-[6%] rounded-full border border-ink/20"
            />
            <motion.div
              style={{ scale: ringScale, opacity: ringOpacity }}
              className="absolute inset-[15%] rounded-full border border-ink/10"
            />

            <motion.div
              style={{
                rotateY: hasRealRotation ? 0 : productRotateY,
                rotateX: hasRealRotation ? 0 : productRotateX,
                transformStyle: "preserve-3d",
              }}
              className="relative h-full w-full"
            >
              <img
                src={rotationImages[frame]}
                alt={product.name}
                className="h-full w-full object-contain drop-shadow-2xl"
              />

              <motion.div
                style={{ opacity: descriptionReveal }}
                className="absolute inset-0 flex items-center justify-center bg-lightWhite/85 px-[12%] text-center"
              >
                <motion.p
                  style={{ y: descriptionY }}
                  className="max-w-sm text-xs font-light leading-6 text-ink sm:text-sm sm:leading-7"
                >
                  {product.description}
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ scaleX: shadowScaleX, opacity: shadowOpacity }}
              className="absolute bottom-[4%] h-6 w-[55%] rounded-full bg-ink/20 blur-xl"
            />
          </motion.div>

          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-36 left-1/2 z-20 -translate-x-1/2 text-center"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-ink ">
              Scroll for details
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mt-3 block h-8 w-px bg-ink/30"
            />
          </motion.div>

          <motion.div
            style={{ y: titleY }}
            className="absolute left-1/2 top-20 z-20 max-w-md -translate-x-1/2 px-6 text-center sm:top-24"
          >
            <h1 className="header text-3xl uppercase leading-[0.9] tracking-[-0.03em] text-ink sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xs font-light leading-6 text-ink/85 sm:text-sm">
              {product.shortDescription}
            </p>
          </motion.div>

          {/* DETAIL SPOKES — point out from the ring, staggered as you keep scrolling */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-[min(72vw,72vh)] w-[min(72vw,72vh)] max-h-168 max-w-2xl -translate-x-1/2 -translate-y-1/2 lg:block">
            <CircularDetail
              title="Origin"
              value={product.origin}
              position="left-[-22%] top-[18%]"
              linePosition="left-full top-1/2"
              lineFrom="left"
              reveal={originReveal}
            />

            <CircularDetail
              title="Altitude"
              value={`${product.altitude} m`}
              position="right-[-22%] top-[18%]"
              linePosition="right-full top-1/2"
              lineFrom="right"
              reveal={altitudeReveal}
            />

            <CircularDetail
              title="Process"
              value={product.process}
              position="left-[-22%] bottom-[18%]"
              linePosition="left-full top-1/2"
              lineFrom="left"
              reveal={processReveal}
            />

            <CircularDetail
              title="Roast"
              value={`${product.roastLevel}/5`}
              position="right-[-22%] bottom-[18%]"
              linePosition="right-full top-1/2"
              lineFrom="right"
              reveal={roastReveal}
            />

            <CircularDetail
              title="Flavour"
              value={product.flavors.join(" · ")}
              position="left-[-30%] top-1/2 -translate-y-1/2"
              linePosition="left-full top-1/2"
              lineFrom="left"
              reveal={flavorReveal}
            />

            <CircularDetail
              title="Aroma"
              value={product.aroma.join(" · ")}
              position="right-[-30%] top-1/2 -translate-y-1/2"
              linePosition="right-full top-1/2"
              lineFrom="right"
              reveal={aromaReveal}
            />

            <CircularDetail
              title="Caffeine"
              value={product.caffeine}
              position="left-[-15%] bottom-[-8%]"
              linePosition="right-full top-1/2"
              lineFrom="left"
              reveal={caffeineReveal}
            />

            <CircularDetail
              title="Type"
              value={product.type}
              position="right-[-15%] bottom-[-8%]"
              linePosition="left-full top-1/2"
              lineFrom="right"
              reveal={typeReveal}
            />
          </div>

          {/* MOBILE DETAIL — the ring's spokes don't fit on small screens,
                        so the same data lands as a simple fading grid instead */}

          <motion.div
            style={{ opacity: mobileDetailOpacity }}
            className="absolute bottom-10 left-6 right-6 z-20 grid grid-cols-2 gap-x-8 gap-y-5 lg:hidden"
          >
            <MobileDetail title="Origin" value={product.origin} />
            <MobileDetail title="Altitude" value={`${product.altitude} m`} />
            <MobileDetail title="Process" value={product.process} />
            <MobileDetail title="Roast" value={`${product.roastLevel}/5`} />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}

      <section className="bg-lightWhite px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-20 lg:grid-cols-[1fr_0.72fr] lg:gap-28">
          {/* STORY */}
          <div>
            <h2 className="header mt-7 max-w-3xl text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em] text-ink ">
              Product:
              <br />
              <span className="italic text-red">{product.name}.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-sm font-light leading-8 text-ink sm:text-base">
              {product.description}
            </p>

            <div className="mt-10">
              <ProductInfoGrid product={product} />
            </div>
          </div>

          {/* PURCHASE PANEL */}
          <div className="">
            <div className="relative overflow-hidden border border-ink/15 bg-ivory/35 px-5 sm:px-7">
              <div className="absolute left-0 top-0 h-1 w-24 bg-red" />

              <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-5">
                <div>
                  <h3 className="mt-4 max-w-xs text-xl font-medium uppercase leading-none tracking-[-0.02em] text-ink sm:text-2xl">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-ink/75">
                    {selectedSize.label}
                  </p>
                </div>

                <div className="text-right">
                  <p className="whitespace-nowrap text-2xl font-medium tracking-[-0.03em] text-ink">
                    NPR{" "}
                    {unitPrice.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </p>

                  {product.available && (
                    <div className="mt-3 flex items-center justify-end gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-hill" />
                      <span className="text-[7px] uppercase tracking-[0.25em] text-hill">
                        In stock
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 space-y-8">
                {sizeOptions.length > 1 && (
                  <div className="">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-ink font-bold">
                      Weight
                    </span>

                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {sizeOptions.map((option) => {
                        const active = selectedSize.label === option.label;

                        return (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() => setSelectedSize(option)}
                            className={`flex h-12 items-center justify-center border text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${active ? "border-ink bg-ink text-lightCream" : "border-ink/15 bg-lightWhite/50 text-ink/60 hover:border-ink/40 hover:text-ink"}`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* GRIND */}
                {product.grindOptions?.length > 0 && (
                  <div>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-ink">
                          Choose your grind
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {product.grindOptions.map((grind, index) => {
                        const active = selectedGrind === grind;

                        const config = GRIND_CONFIG[grind];

                        const Icon = config?.icon || FaMugHot;
                        const label = config?.label || grind;
                        const subtitle = config?.subtitle || "Custom grind";

                        return (
                          <button
                            key={grind}
                            type="button"
                            onClick={() => setSelectedGrind(grind)}
                            aria-pressed={active}
                            className={`group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden border px-4 py-5 text-center transition-all duration-500 ${
                              active
                                ? "border-ink bg-ink text-lightCream"
                                : "border-ink/10 bg-lightWhite/40 text-ink hover:border-ink/25 hover:bg-ivory cursor-pointer"
                            }`}
                          >
                            {/* Active indicator */}
                            <span
                              className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                                active
                                  ? "bg-red"
                                  : "bg-ink/10 group-hover:bg-red/40"
                              }`}
                            />

                            {/* Icon */}
                            <span
                              className={`flex h-20 w-20 items-center justify-center transition-all duration-500 ${
                                active
                                  ? "text-lightCream"
                                  : "text-ink/45 group-hover:text-red"
                              }`}
                            >
                              <Icon
                                size={55}
                                strokeWidth={1}
                                className="transition-transform duration-500 group-hover:scale-105"
                              />
                            </span>

                            {/* Grind */}
                            <span
                              className={`mt-3 block text-[9px] font-bold uppercase tracking-[0.18em] transition-colors duration-500 ${
                                active ? "text-lightCream" : "text-ink"
                              }`}
                            >
                              {label}
                            </span>

                            {/* Active bottom line */}
                            <span
                              className={`absolute bottom-0 left-0 h-[2px] bg-red transition-all duration-500 ${
                                active ? "w-full" : "w-0 group-hover:w-1/3"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* PURCHASE */}
                <div className="border-t border-ink/25">
                  {/* Subscription toggle */}
                  <div
                    className={`mt-8 flex items-center justify-between border p-4 transition-all duration-500 ${
                      purchaseType === "subscribe"
                        ? "border-emerald-700/25 bg-emerald-700/[0.04]"
                        : "border-red/20 bg-red/[0.025]"
                    }`}
                  >
                    <div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={purchaseType}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.25 }}
                        >
                          <span
                            className={`block text-[12px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                              purchaseType === "subscribe"
                                ? "text-emerald-700"
                                : "text-red"
                            }`}
                          >
                            {purchaseType === "subscribe"
                              ? `Subscription saves ${Math.round(subscriptionDiscount * 100)}%`
                              : `Subscribe & save ${Math.round(subscriptionDiscount * 100)}%`}
                          </span>

                          <span className="mt-2 block text-[9px] uppercase tracking-[0.18em] text-ink/85">
                            Delivered on your schedule · cancel anytime
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={purchaseType === "subscribe"}
                      aria-label="Toggle subscription"
                      onClick={() =>
                        setPurchaseType((current) =>
                          current === "subscribe" ? "one-time" : "subscribe",
                        )
                      }
                      className={`relative h-7 w-12 shrink-0 rounded-full border transition-all duration-500 ${
                        purchaseType === "subscribe"
                          ? "border-emerald-700 bg-emerald-700"
                          : "border-red bg-red"
                      }`}
                    >
                      <motion.span
                        animate={{
                          x: purchaseType === "subscribe" ? 20 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                        className="absolute left-[3px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-lightCream shadow-sm"
                      />
                    </button>
                  </div>

                  {/* Subscription frequency */}
                  <AnimatePresence initial={false}>
                    {purchaseType === "subscribe" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {(
                              product.frequencies || [
                                "Weekly",
                                "Every 2 Weeks",
                                "Every 3 Weeks",
                                "Every 4 Weeks",
                              ]
                            ).map((option) => {
                              const active = frequency === option;

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setFrequency(option)}
                                  aria-pressed={active}
                                  className={`relative flex min-h-[38px] items-center justify-center border px-3 text-center transition-all duration-300  ${
                                    active
                                      ? "border-emerald-700 bg-emerald-700 text-lightCream"
                                      : "border-ink/10 bg-lightWhite/40 text-ink/50 hover:border-emerald-700/30 hover:bg-emerald-700/[0.03] hover:text-emerald-700"
                                  }`}
                                >
                                  <span className="text-[10px] font-bold uppercase leading-[1.3] tracking-[0.16em]">
                                    {option}
                                  </span>

                                  <span
                                    className={`absolute bottom-0 left-0 h-[2px] bg-emerald-700 transition-all duration-300 ${
                                      active ? "w-full" : "w-0"
                                    }`}
                                  />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* QUANTITY + CTA */}
                <div className="pb-5 ">
                  <div className="flex items-baseline justify-end gap-5">
                    <div className="w-[112px] shrink-0">
                      <div className="flex h-12 w-full items-center justify-between border border-ink/15 bg-lightWhite/70">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity((value) => Math.max(1, value - 1))
                          }
                          aria-label="Decrease quantity"
                          className="flex h-10 w-10 shrink-0 items-center justify-center text-ink/55 cursor-pointer transition-colors duration-300 hover:text-ink"
                        >
                          <Minus size={11} strokeWidth={1.2} />
                        </button>

                        <span className="flex w-8 shrink-0 items-center justify-center text-[12px] font-medium tabular-nums text-ink">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => setQuantity((value) => value + 1)}
                          aria-label="Increase quantity"
                          className="flex h-10 w-10 shrink-0 items-center justify-center text-ink/55 cursor-pointer transition-colors duration-300 hover:text-ink"
                        >
                          <Plus size={11} strokeWidth={1.2} />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="header mt-1 text-3xl font-bold tracking-[-0.02em] text-ink">
                        NPR{" "}
                        {total.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="relative mt-5">
                      {/* Ink block behind */}
                      <span className="absolute inset-0 translate-x-1 translate-y-1 bg-ink" />

                      {/* Red button in front */}
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="relative z-10 flex h-14 max-w-3xl cursor-pointer items-center bg-red px-6 text-lightCream transition-all duration-300 hover:bg-deepRed active:translate-x-1 active:translate-y-1 sm:px-7"
                      >
                        <span className="text-[14px] font-bold uppercase tracking-[0.2em]">
                          Add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASTING NOTES */}

      <section className="relative overflow-hidden bg-hill px-6 py-5 text-lightCream sm:px-10 sm:py-8 lg:px-16 lg:py-8">
        <div className="mx-auto max-w-[1400px]">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h2 className="header mt-6 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.84] tracking-[-0.065em]">
              What You'll
              <br />
              <span className="italic text-cream">Get.</span>
            </h2>
          </motion.div>

          {/* TASTING NOTES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 grid lg:mt-10 lg:grid-cols-3"
          >
            {/* AROMA */}
            <div className="border-b border-lightCream/15 py-8 lg:border-b-0 lg:border-r lg:py-5 lg:pr-12">
              <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
                Aroma
              </span>

              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {(product.aroma || []).map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="text-[12px] tracking-wide text-lightCream/70 sm:text-[13px]"
                  >
                    {item}
                    {index < product.aroma.length - 1 && (
                      <span className="ml-3 text-lightCream/25">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* FLAVOURS */}
            <div className="border-b border-lightCream/15 py-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-5">
              <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
                Flavours
              </span>

              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {(product.flavors || []).map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="text-[12px] tracking-wide text-lightCream/70 sm:text-[13px]"
                  >
                    {item}
                    {index < product.flavors.length - 1 && (
                      <span className="ml-3 text-lightCream/25">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* CHARACTER */}
            <div className="py-8 lg:py-5 lg:pl-12">
              <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
                Character
              </span>

              <p className="mt-6 max-w-sm text-[12px] leading-6 text-lightCream/70 sm:text-[13px] sm:leading-7">
                {product.shortDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-lightWhite px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-275">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-soil/60 sm:text-[9px]">
              Good to know
            </span>

            <h2 className="header mt-5 max-w-xl text-[clamp(3rem,5vw,5rem)] uppercase leading-[0.84] tracking-[-0.06em] text-ink">
              Questions,
              <br />
              <span className="italic text-red">answered.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 border-t border-ink/10 sm:mt-16"
          >
            {product.faqs?.map((faq, index) => (
              <FaqItem
                key={faq.question}
                number={String(index + 1).padStart(2, "0")}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <StickyPurchaseBar
        product={product}
        visible={true}
        sizeOptions={sizeOptions}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
        purchaseType={purchaseType}
        onChangePurchaseType={setPurchaseType}
        frequency={frequency}
        onChangeFrequency={handleFrequencyChange}
        frequencies={DEFAULT_FREQUENCIES}
        quantity={quantity}
        onChangeQuantity={setQuantity}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
};

export default ProductDetails;

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductInfoGrid from "./ProductInfoGrid";
import StickyPurchaseBar from "./StickyPurchaseBar";
import { useCart } from "../../layouts/CartContext";
import { AnimatePresence } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

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
        <span className="block text-[7px] uppercase tracking-[0.4em] text-lightCream/40">
          {title}
        </span>
        <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-lightCream">
          {value}
        </span>
        <motion.span
          style={{
            scaleX: lineScale,
            transformOrigin: lineFrom === "right" ? "right" : "left",
          }}
          className={`absolute ${linePosition} top-1/2 hidden h-px w-20 bg-lightCream/15 xl:block`}
        />
      </motion.div>
    </div>
  );
};

const MobileDetail = ({ title, value }) => (
  <div className="border-t border-lightCream/15 pt-3">
    <span className="block text-[7px] uppercase tracking-[0.35em] text-lightCream/40">
      {title}
    </span>
    <span className="mt-2 block text-[10px] uppercase tracking-[0.15em] text-lightCream">
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
    if (product.sizeOptions?.length) return product.sizeOptions;
    return [
      { label: `${product.size}g`, grams: product.size, price: product.price },
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

  // --- Turntable motion (used only when no real angle shots are available) ---
  const productRotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const productRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Contact shadow breathes with the rotation angle so the product feels
  // grounded instead of floating while it turns.
  const shadowScaleX = useTransform(productRotateY, (deg) => {
    const rad = (deg * Math.PI) / 180;
    return 0.55 + Math.abs(Math.cos(rad)) * 0.45;
  });
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0.35, 0.35, 0.15],
  );

  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const chromeReveal = useTransform(scrollYProgress, [0.02, 0.1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const ringScale = useTransform(scrollYProgress, [0.03, 0.15], [0.75, 1]);
  const ringOpacity = useTransform(scrollYProgress, [0.03, 0.15], [0, 1]);

  const originReveal = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);

  const altitudeReveal = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);

  const flavorReveal = useTransform(scrollYProgress, [0.32, 0.42], [0, 1]);

  const aromaReveal = useTransform(scrollYProgress, [0.42, 0.52], [0, 1]);

  const processReveal = useTransform(scrollYProgress, [0.52, 0.62], [0, 1]);

  const roastReveal = useTransform(scrollYProgress, [0.62, 0.72], [0, 1]);

  const caffeineReveal = useTransform(scrollYProgress, [0.72, 0.82], [0, 1]);

  const typeReveal = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);

  const mobileDetailOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.3],
    [0, 1],
  );
  const descriptionReveal = useTransform(scrollYProgress, [0.14, 0.28], [0, 1]);
  const descriptionY = useTransform(scrollYProgress, [0.14, 0.28], [24, 0]);

  useEffect(() => {
    if (!hasRealRotation) return; // nothing to swap when we're faking rotation with CSS

    const unsubscribe = scrollYProgress.on("change", (value) => {
      const nextFrame = Math.min(
        rotationImages.length - 1,
        Math.floor(value * rotationImages.length),
      );

      setFrame(nextFrame);
    });

    return () => unsubscribe();
  }, [scrollYProgress, rotationImages.length, hasRealRotation]);

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

  return (
    <main className="overflow-x-clip bg-lightWhite  text-ink ">
      <section ref={sectionRef} className="relative h-[400vh] bg-ink">
        <div className="sticky top-0 isolate flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10">
          {/* ATMOSPHERE */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-soil/20 blur-[120px]" />
            <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />
          </div>

          {/* CHROME — back link + eyebrow, fades in once scrolling starts */}

          <motion.div
            style={{ opacity: chromeReveal }}
            className="absolute left-6 top-8 z-20 sm:left-10 sm:top-10"
          >
            <Link
              to="/shop/coffee"
              className="inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-lightCream/50 transition-colors hover:text-red"
            >
              <ArrowLeft size={13} strokeWidth={1.2} />
              Coffee collection
            </Link>
          </motion.div>

          <motion.div
            style={{ opacity: chromeReveal }}
            className="absolute right-6 top-8 z-20 text-right sm:right-10 sm:top-10"
          >
            <span className="block text-[8px] uppercase tracking-[0.4em] text-lightCream/50">
              The product
            </span>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-lightCream">
              {product.origin} · {product.type}
            </p>
          </motion.div>

          {/* CENTER PRODUCT — bottom-up reveal on section entry, then a
                        3D perspective turntable driven by scroll */}

          <motion.div
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: productScale, y: productY, perspective: 1400 }}
            className="relative z-10 flex h-[55vh] w-[55vh] max-h-125 max-w-125 items-center justify-center"
          >
            {/* THE RING — appears around the product as you scroll;
                            detail spokes below connect back to its edge */}

            <motion.div
              style={{ scale: ringScale, opacity: ringOpacity }}
              className="absolute inset-[6%] rounded-full border border-lightCream/25"
            />
            <motion.div
              style={{ scale: ringScale, opacity: ringOpacity }}
              className="absolute inset-[15%] rounded-full border border-lightCream/10"
            />

            <div className="absolute inset-[28%] rounded-full bg-red/10 blur-[80px]" />

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
                className="absolute inset-0 flex items-center justify-center bg-ink/55 px-[12%] text-center"
              >
                <motion.p
                  style={{ y: descriptionY }}
                  className="max-w-sm text-xs font-light leading-6 text-lightCream sm:text-sm sm:leading-7"
                >
                  {product.description}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* contact shadow that breathes with the turn */}
            <motion.div
              style={{ scaleX: shadowScaleX, opacity: shadowOpacity }}
              className="absolute bottom-[4%] h-6 w-[55%] rounded-full bg-black blur-xl"
            />
          </motion.div>

          {/* SCROLL HINT — only visible before scrolling begins */}

          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-36 left-1/2 z-20 -translate-x-1/2 text-center"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-lightCream">
              Scroll for details
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mt-3 block h-8 w-px bg-lightCream/30"
            />
          </motion.div>

          {/* NAME + SHORT DESCRIPTION — stays visible at the top as the
                        pinned product stage moves upward slightly */}

          <motion.div
            style={{ y: titleY }}
            className="absolute left-1/2 top-20 z-20 max-w-md -translate-x-1/2 px-6 text-center sm:top-24"
          >
            <h1 className="header text-3xl uppercase leading-[0.9] tracking-[-0.03em] text-lightCream sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xs font-light leading-6 text-lightCream/50 sm:text-sm">
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

      <section className="bg-lightWhite px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-20 lg:grid-cols-[1fr_0.72fr] lg:gap-28">
          {/* STORY */}
          <div>
            <h2 className="header mt-7 max-w-3xl text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em] text-ink">
              From the
              <br />
              <span className="italic text-red">hills.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-sm font-light leading-8 text-ink/65 sm:text-base">
              {product.description}
            </p>

            <div className="mt-16">
              <ProductInfoGrid product={product} />
            </div>
          </div>

          {/* PURCHASE PANEL */}
          <div className="lg:pt-16">
            <div className="border-t border-ink/15">
              {/* PRODUCT HEADER */}
              <div className="flex items-start justify-between gap-8 py-7">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-red">
                    Your selection
                  </p>

                  <h3 className="mt-3 text-lg font-medium uppercase tracking-[-0.01em] text-ink sm:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-ink/40">
                    {selectedSize.label}
                  </p>
                </div>

                <div className="text-right">
                  <p className="whitespace-nowrap text-xl font-medium tracking-[-0.02em] text-ink">
                    NPR{" "}
                    {unitPrice.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </p>

                  {product.available && (
                    <div className="mt-2 flex items-center justify-end gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-hill" />
                      <span className="text-[7px] uppercase tracking-[0.25em] text-hill">
                        In stock
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* SIZE */}
              {sizeOptions.length > 1 && (
                <div className="border-t border-ink/10 py-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-stone">
                      Size
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.2em] text-ink/30">
                      Select weight
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {sizeOptions.map((option) => {
                      const active = selectedSize.label === option.label;

                      return (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => setSelectedSize(option)}
                          className={`flex h-11 items-center justify-center border text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${active ? "border-ink bg-ink text-lightCream" : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"}`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PURCHASE */}
              <div className="border-t border-ink/10 py-7">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-stone">
                    Purchase
                  </span>

                  {purchaseType === "subscribe" && (
                    <span className="text-[7px] uppercase tracking-[0.2em] text-red">
                      Save {Math.round(subscriptionDiscount * 100)}%
                    </span>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPurchaseType("one-time")}
                    className={`h-11 border text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${purchaseType === "one-time" ? "border-ink bg-ink text-lightCream" : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"}`}
                  >
                    One-Time
                  </button>

                  <button
                    type="button"
                    onClick={() => setPurchaseType("subscribe")}
                    className={`h-11 border text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${purchaseType === "subscribe" ? "border-ink bg-ink text-lightCream" : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"}`}
                  >
                    Subscribe & Save
                  </button>
                </div>

                {purchaseType === "subscribe" && (
                  <div className="relative mt-3">
                    <select
                      value={frequency}
                      onChange={(event) => setFrequency(event.target.value)}
                      className="h-11 w-full appearance-none border border-ink/15 bg-lightCream px-4 pr-10 text-[8px] uppercase tracking-[0.2em] text-ink outline-none transition-colors duration-300 focus:border-ink/50"
                    >
                      {(
                        product.frequencies || [
                          "Weekly",
                          "Every 2 Weeks",
                          "Every 3 Weeks",
                          "Every 4 Weeks",
                        ]
                      ).map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[8px] text-ink/40">
                      ↓
                    </span>
                  </div>
                )}
              </div>

              {/* GRIND */}
              {product.grindOptions?.length > 0 && (
                <div className="border-t border-ink/10 py-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-stone">
                      Grind
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.2em] text-ink/30">
                      How it's prepared
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.grindOptions.map((grind) => {
                      const active = selectedGrind === grind;

                      return (
                        <button
                          key={grind}
                          type="button"
                          onClick={() => setSelectedGrind(grind)}
                          className={`h-11 flex-1 border px-5 text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 sm:flex-none ${active ? "border-ink bg-ink text-lightCream" : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"}`}
                        >
                          {grind}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* QUANTITY + CTA */}
              <div className="border-t border-ink/10 pt-7">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-stone">
                      Quantity
                    </span>

                    <div className="mt-4 flex h-11 items-center rounded-full border border-ink/15 bg-lightCream">
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity((value) => Math.max(1, value - 1))
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream"
                      >
                        <Minus size={11} strokeWidth={1.2} />
                      </button>

                      <span className="w-8 text-center text-[9px] font-medium text-ink">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => setQuantity((value) => value + 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream"
                      >
                        <Plus size={11} strokeWidth={1.2} />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[7px] uppercase tracking-[0.2em] text-ink/35">
                      Total
                    </span>

                    <p className="mt-1 text-base font-medium tracking-[-0.01em] text-ink">
                      NPR{" "}
                      {total.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="group mt-5 flex h-13 w-full items-center justify-between bg-red px-6 text-lightCream transition-all duration-500 hover:bg-deepRed sm:px-7"
                >
                  <span className="text-[8px] font-medium uppercase tracking-[0.3em]">
                    Add to cart
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lightCream/30 transition-all duration-500 group-hover:translate-x-1 group-hover:border-lightCream/60">
                    <ShoppingBag size={14} strokeWidth={1.1} />
                  </span>
                </button>

                <p className="mt-4 text-center text-[6px] uppercase tracking-[0.2em] text-ink/30">
                  Freshly packed · Nepal origin · Delivered with care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASTING NOTES */}

      <section className="relative overflow-hidden bg-hill px-6 py-24 text-lightCream sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-350">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-cream" />
                <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/55">
                  The tasting notes
                </span>
              </div>

              <h2 className="header text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em]">
                The story you'll
                <br />
                remember
                <br />
                <span className="italic text-cream">inside the cup.</span>
              </h2>
            </div>

            <p className="max-w-xs text-[9px] font-light uppercase leading-6 tracking-[0.15em] text-lightCream/45 lg:mb-2">
              A sensory journey shaped by altitude,
              <br className="hidden lg:block" />
              origin and the hands behind every harvest.
            </p>
          </div>

          {/* TASTING NOTES */}
          <div className="mt-20 border-t border-lightCream/15 lg:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* AROMA */}
              <div className="group border-b border-lightCream/15 py-10 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12">
                <div className="flex items-start justify-between">
                  <span className="font-title text-4xl font-light tracking-[-0.05em] text-lightCream/15">
                    01
                  </span>

                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/35">
                    Sensory
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
                    Aroma
                  </p>

                  <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-lightCream">
                    First impression.
                  </h3>

                  <div className="mt-8 space-y-3">
                    {(product.aroma || []).map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="flex items-center gap-3 border-b border-lightCream/10 pb-3"
                      >
                        <span className="h-1 w-1 rounded-full bg-cream/70" />
                        <span className="text-[9px] uppercase tracking-[0.18em] text-lightCream/65">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLAVOURS */}
              <div className="group border-b border-lightCream/15 py-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-12">
                <div className="flex items-start justify-between">
                  <span className="font-title text-4xl font-light tracking-[-0.05em] text-lightCream/15">
                    02
                  </span>

                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/35">
                    Profile
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
                    Flavours
                  </p>

                  <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-lightCream">
                    What stays with you.
                  </h3>

                  <div className="mt-8 space-y-3">
                    {(product.flavors || []).map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="flex items-center gap-3 border-b border-lightCream/10 pb-3"
                      >
                        <span className="h-1 w-1 rounded-full bg-cream/70" />
                        <span className="text-[9px] uppercase tracking-[0.18em] text-lightCream/65">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CHARACTER */}
              <div className="group py-10 lg:py-12 lg:pl-12">
                <div className="flex items-start justify-between">
                  <span className="font-title text-4xl font-light tracking-[-0.05em] text-lightCream/15">
                    03
                  </span>

                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/35">
                    Identity
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-cream">
                    Character
                  </p>

                  <h3 className="mt-4 text-2xl font-light tracking-[-0.03em] text-lightCream">
                    The soul of the cup.
                  </h3>

                  <p className="mt-8 max-w-sm text-sm font-light leading-8 text-lightCream/60">
                    {product.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER DETAIL */}
          <div className="mt-14 flex items-center justify-between border-t border-lightCream/10 pt-5">
            <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/30">
              Laali Hills
            </span>

            <span className="text-[7px] uppercase tracking-[0.25em] text-lightCream/30">
              From the higher belt
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-lightWhite px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-275">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-red/50" />
              <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-soil">
                Good to know
              </span>
              <span className="h-px w-6 bg-red/50" />
            </div>

            <h2 className="header mt-7 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.8] tracking-[-0.065em] text-ink">
              Questions,
              <br />
              <span className="italic text-red">answered.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-md text-[10px] leading-6 text-ink/45 sm:text-xs">
              Everything you might want to know before bringing a little piece
              of the hills home.
            </p>
          </motion.div>

          <div className="mt-20 border-t border-ink/10">
            {product.faqs?.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <FaqItem
                  number={String(index + 1).padStart(2, "0")}
                  question={faq.question}
                  answer={faq.answer}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5"
          >
            <span className="text-[7px] uppercase tracking-[0.3em] text-ink/30">
              Laali Hills
            </span>

            <span className="text-[7px] uppercase tracking-[0.3em] text-ink/30">
              From the higher belt
            </span>
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

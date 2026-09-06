import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductInfoGrid from "./ProductInfoGrid";
import StickyPurchaseBar from "./StickyPurchaseBar";
import { useCart } from "../../layouts/CartContext";

// CircularDetail now takes a `reveal` motion value (0 -> 1) so each label
// draws itself in on its own scroll band, instead of being static for the
// entire 400vh section.
const CircularDetail = ({ title, value, position, linePosition, reveal, lineFrom }) =>
{
    const opacity = reveal;
    const scale = useTransform(reveal, [0, 1], [0.85, 1]);
    const lineScale = useTransform(reveal, [0, 1], [0, 1]);
    const { addToCart } = useCart();

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
                    style={{ scaleX: lineScale, transformOrigin: lineFrom === "right" ? "right" : "left" }}
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
        <h3 className="mt-5 text-xl uppercase tracking-[-0.02em]">
            {title}
        </h3>
        <div className="mt-5 space-y-2">
            {items?.map((item) => (
                <p key={item} className="text-sm font-light capitalize leading-6 text-lightCream/60">
                    {item}
                </p>
            ))}
        </div>
    </div>
);

const FaqItem = ({ number, question, answer }) => (
    <details className="group border-t border-ink/15">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
            <div className="flex items-center gap-5">
                <span className="text-[8px] tracking-[0.3em] text-stone">
                    {number}
                </span>
                <span className="text-sm tracking-wide text-ink sm:text-base">
                    {question}
                </span>
            </div>

            <Plus
                size={17}
                strokeWidth={1}
                className="shrink-0 text-stone transition-transform duration-300 group-open:rotate-45"
            />
        </summary>

        <div className="pb-7 pl-9 pr-8">
            <p className="max-w-2xl text-sm font-light leading-7 text-ink/60">
                {answer}
            </p>
        </div>
    </details>
);

const ProductDetails = ({ products = [] }) =>
{
    const { slug } = useParams();
    const product = products?.find((item) => item.slug === slug);

    const sectionRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedGrind, setSelectedGrind] = useState(product?.grindOptions?.[0] || "beans");
    const [frame, setFrame] = useState(0);
    const [purchaseType, setPurchaseType] = useState("one-time");
    const [frequency, setFrequency] = useState(product?.frequencies?.[0] || "Every 4 Weeks");

    const DEFAULT_FREQUENCIES = [
        "Weekly",
        "Every 2 Weeks",
        "Every 3 Weeks",
        "Every 4 Weeks",
    ];
    const handleFrequencyChange = (value) =>
    {
        setFrequency(value);
    };

    const handleAddToCart = () => {
    addToCart(product, {
        size: selectedSize,
        grind: selectedGrind,
        purchaseType,
        frequency: purchaseType === "subscribe" ? frequency : null,
        quantity,
    });
};

    // Bag-size options with their own price. Falls back to a single size
    // built from the product's existing size/price fields when the product
    // doesn't define sizeOptions yet.
    const sizeOptions = useMemo(() =>
    {
        if (!product) return [];
        if (product.sizeOptions?.length) return product.sizeOptions;
        return [{ label: `${product.size}g`, grams: product.size, price: product.price }];
    }, [product]);

    const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

    // Keep selectedSize valid if the product (and therefore sizeOptions)
    // changes, e.g. navigating from one product page to another.
    useEffect(() =>
    {
        setSelectedSize(sizeOptions[0]);
    }, [sizeOptions]);

    const rotationImages = useMemo(() =>
    {
        if (!product) return [];
        if (product.rotationImages?.length) return product.rotationImages;
        return [product.image];
    }, [product]);

    // Multiple angle photos are scrubbed as the visitor scrolls. Products
    // without a frame set use the CSS turntable fallback below.
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
    const shadowScaleX = useTransform(productRotateY, (deg) =>
    {
        const rad = (deg * Math.PI) / 180;
        return 0.55 + Math.abs(Math.cos(rad)) * 0.45;
    });
    const shadowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.35, 0.35, 0.15]);

    // --- Phased reveal timeline, all driven by the single pinned section ---
    // 0.00–0.05  "Scroll for details" hint, visible only before scrolling starts
    // 0.02–0.10  back link + eyebrow chrome fades in
    // 0.00→1.00  product name and image drift slightly upward while staying visible
    // 0.03–0.15  the ring around the product scales/fades in
    // 0.18→0.88  the four details emit from the ring, staggered
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

    const mobileDetailOpacity = useTransform(scrollYProgress, [0.16, 0.3], [0, 1]);
    const descriptionReveal = useTransform(scrollYProgress, [0.14, 0.28], [0, 1]);
    const descriptionY = useTransform(scrollYProgress, [0.14, 0.28], [24, 0]);

    useEffect(() =>
    {
        if (!hasRealRotation) return; // nothing to swap when we're faking rotation with CSS

        const unsubscribe = scrollYProgress.on("change", (value) =>
        {
            const nextFrame = Math.min(
                rotationImages.length - 1,
                Math.floor(value * rotationImages.length)
            );

            setFrame(nextFrame);
        });

        return () => unsubscribe();
    }, [scrollYProgress, rotationImages.length, hasRealRotation]);

    if (!product)
    {
        return (
            <div className="flex min-h-screen items-center justify-center bg-lightCream px-6">
                <div className="text-center">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-stone">
                        Product not found
                    </p>
                    <Link to="/shop" className="mt-5 inline-flex items-center gap-3 border border-ink/20 px-6 py-3 text-[9px] uppercase tracking-[0.25em] text-ink">
                        <ArrowLeft size={14} />
                        Back to shop
                    </Link>
                </div>
            </div>
        );
    }

    const subscriptionDiscount = product.subscriptionDiscount ?? 0.05;
    const unitPrice = purchaseType === "subscribe"
        ? selectedSize.price * (1 - subscriptionDiscount)
        : selectedSize.price;
    const total = unitPrice * quantity;

    // TODO: wire this up to your actual cart (context/store/API) — currently
    // just a placeholder so both purchase surfaces have somewhere to call.
    // const handleAddToCart = (payload) =>
    // {
    //     console.log("Add to cart:", payload);
    // };

    return (
        <main className="overflow-x-clip bg-lightCream pb-20 text-ink sm:pb-24">

            {/* PRODUCT REVEAL — one continuous pinned section. Opens with just
                the product and a scroll hint; everything else (back link,
                eyebrow, name, description, ring, detail spokes) reveals here
                as the visitor scrolls, rather than in a separate section. */}

            <section ref={sectionRef} className="relative h-[400vh] bg-ink">

                <div className="sticky top-0 isolate flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10">

                    {/* ATMOSPHERE */}

                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-soil/20 blur-[120px]" />
                        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />
                    </div>


                    {/* CHROME — back link + eyebrow, fades in once scrolling starts */}

                    <motion.div style={{ opacity: chromeReveal }} className="absolute left-6 top-8 z-20 sm:left-10 sm:top-10">
                        <Link to="/shop/coffee" className="inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-lightCream/50 transition-colors hover:text-red">
                            <ArrowLeft size={13} strokeWidth={1.2} />
                            Coffee collection
                        </Link>
                    </motion.div>

                    <motion.div style={{ opacity: chromeReveal }} className="absolute right-6 top-8 z-20 text-right sm:right-10 sm:top-10">
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

                    <motion.div style={{ opacity: hintOpacity }} className="absolute bottom-36 left-1/2 z-20 -translate-x-1/2 text-center">
                        <span className="text-[8px] uppercase tracking-[0.4em] text-lightCream">
                            Scroll for details
                        </span>
                        <motion.span
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                            className="mx-auto mt-3 block h-8 w-px bg-lightCream/30"
                        />
                    </motion.div>


                    {/* NAME + SHORT DESCRIPTION — stays visible at the top as the
                        pinned product stage moves upward slightly */}

                    <motion.div style={{ y: titleY }} className="absolute left-1/2 top-20 z-20 max-w-md -translate-x-1/2 px-6 text-center sm:top-24">
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

            <section className="bg-lightCream px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
                <div className="mx-auto grid max-w-350 grid-cols-1 gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-28">
                    <div>
                        <span className="text-[8px] uppercase tracking-[0.4em] text-soil">
                            The story
                        </span>

                        <h2 className="header mt-6 max-w-3xl text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em] text-ink">
                            From the
                            <br />
                            <span className="italic text-red">
                                hills.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-sm font-light leading-8 text-ink/65 sm:text-base">
                            {product.description}
                        </p>
                        <div className="mt-14">
                            <ProductInfoGrid product={product} />
                        </div>
                    </div>
                    <div className="lg:pt-20">

                        <div className="border-t border-ink/15 pt-6">

                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <span className="text-[8px] uppercase tracking-[0.35em] text-stone">
                                        {selectedSize.label}
                                    </span>

                                    <p className="mt-2 text-2xl tracking-[-0.03em] text-ink">
                                        NPR {unitPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </p>
                                </div>

                                {product.available && (
                                    <span className="text-[8px] uppercase tracking-[0.3em] text-hill">
                                        Available
                                    </span>
                                )}
                            </div>


                            {/* SIZE */}

                            {sizeOptions.length > 1 && (
                                <div className="mt-10">
                                    <span className="text-[8px] uppercase tracking-[0.3em] text-stone">
                                        Size
                                    </span>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {sizeOptions.map((option) => (
                                            <button
                                                key={option.label}
                                                onClick={() => setSelectedSize(option)}
                                                className={`border px-5 py-3 text-[8px] uppercase tracking-[0.25em] transition-all duration-300 ${selectedSize.label === option.label ? "border-ink bg-ink text-lightCream" : "border-ink/20 text-ink hover:border-ink/50"}`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}


                            {/* PURCHASE TYPE */}

                            <div className="mt-10">
                                <span className="text-[8px] uppercase tracking-[0.3em] text-stone">
                                    Purchase
                                </span>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setPurchaseType("one-time")}
                                        className={`border px-5 py-3 text-[8px] uppercase tracking-[0.25em] transition-all duration-300 ${purchaseType === "one-time" ? "border-ink bg-ink text-lightCream" : "border-ink/20 text-ink hover:border-ink/50"}`}
                                    >
                                        One-Time
                                    </button>
                                    <button
                                        onClick={() => setPurchaseType("subscribe")}
                                        className={`border px-5 py-3 text-[8px] uppercase tracking-[0.25em] transition-all duration-300 ${purchaseType === "subscribe" ? "border-ink bg-ink text-lightCream" : "border-ink/20 text-ink hover:border-ink/50"}`}
                                    >
                                        Subscribe & Save {Math.round(subscriptionDiscount * 100)}%
                                    </button>
                                </div>

                                {purchaseType === "subscribe" && (
                                    <select
                                        value={frequency}
                                        onChange={(event) => setFrequency(event.target.value)}
                                        className="mt-3 border border-ink/20 bg-lightCream px-4 py-3 text-[8px] uppercase tracking-[0.2em] text-ink"
                                    >
                                        {(product.frequencies || ["Weekly", "Every 2 Weeks", "Every 3 Weeks", "Every 4 Weeks"]).map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>


                            {/* GRIND */}

                            {product.grindOptions?.length > 0 && (
                                <div className="mt-10">
                                    <span className="text-[8px] uppercase tracking-[0.3em] text-stone">
                                        Grind
                                    </span>

                                    <div className="mt-4 flex gap-2">
                                        {product.grindOptions.map((grind) => (
                                            <button
                                                key={grind}
                                                onClick={() => setSelectedGrind(grind)}
                                                className={`border px-5 py-3 text-[8px] uppercase tracking-[0.25em] transition-all duration-300 ${selectedGrind === grind ? "border-ink bg-ink text-lightCream" : "border-ink/20 text-ink hover:border-ink/50"}`}
                                            >
                                                {grind}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}


                            {/* QUANTITY */}

                            <div className="mt-8">
                                <span className="text-[8px] uppercase tracking-[0.3em] text-stone">
                                    Quantity
                                </span>

                                <div className="mt-4 flex h-12 w-fit items-center border border-ink/20">
                                    <button
                                        onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                                        className="flex h-full w-12 items-center justify-center text-ink/60 transition-colors hover:text-red"
                                    >
                                        <Minus size={13} strokeWidth={1.2} />
                                    </button>

                                    <span className="w-10 text-center text-xs">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => setQuantity((value) => value + 1)}
                                        className="flex h-full w-12 items-center justify-center text-ink/60 transition-colors hover:text-red"
                                    >
                                        <Plus size={13} strokeWidth={1.2} />
                                    </button>
                                </div>
                            </div>


                            {/* CTA */}

                            <button
                                onClick={() => handleAddToCart({ product, size: selectedSize, purchaseType, frequency, quantity, unitPrice, total })}
                                className="group mt-8 flex w-full items-center justify-between bg-red px-6 py-4 text-lightCream transition-colors duration-300 hover:bg-deepRed"
                            >
                                <span className="text-[9px] uppercase tracking-[0.3em]">
                                    NPR {total.toLocaleString(undefined, { maximumFractionDigits: 0 })} · Add to Cart
                                </span>

                                <ShoppingBag
                                    size={17}
                                    strokeWidth={1.2}
                                    className="transition-transform duration-300 group-hover:-translate-y-1"
                                />
                            </button>

                        </div>

                    </div>

                </div>
            </section>


            {/* TASTING NOTES */}

            <section className="bg-hill px-6 py-20 text-lightCream sm:px-10 sm:py-28 lg:px-16 lg:py-36">
                <div className="mx-auto max-w-350">

                    <div className="max-w-2xl">
                        <span className="text-[8px] uppercase tracking-[0.4em] text-lightCream/50">
                            Inside the cup
                        </span>

                        <h2 className="header mt-6 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em]">
                            The flavour
                            <br />
                            <span className="italic text-cream">
                                story.
                            </span>
                        </h2>
                    </div>


                    <div className="mt-16 grid grid-cols-1 gap-12 border-t border-lightCream/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">

                        <TastingColumn
                            number="01"
                            title="Aroma"
                            items={product.aroma}
                        />

                        <TastingColumn
                            number="02"
                            title="Flavours"
                            items={product.flavors}
                        />

                        <TastingColumn
                            number="03"
                            title="Character"
                            items={[product.shortDescription]}
                        />

                    </div>

                </div>
            </section>


            {/* FAQ */}

            <section className="bg-lightCream px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
                <div className="mx-auto max-w-275">

                    <div className="text-center">
                        <span className="text-[8px] uppercase tracking-[0.4em] text-soil">
                            Good to know
                        </span>

                        <h2 className="header mt-6 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.065em] text-ink">
                            Questions,
                            <br />
                            <span className="italic text-red">
                                answered.
                            </span>
                        </h2>
                    </div>


                    <div className="mt-16">
                        {product.faqs?.map((faq, index) => (
                            <FaqItem
                                key={faq.question}
                                number={`0${index + 1}`}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>

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
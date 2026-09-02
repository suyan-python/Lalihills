import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CircularDetail = ({ title, value, position, linePosition }) => (
    <div className={`absolute ${position}`}>
        <div className="relative text-center">
            <span className="block text-[7px] uppercase tracking-[0.4em] text-lightCream/40">
                {title}
            </span>
            <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-lightCream">
                {value}
            </span>
            <span className={`absolute ${linePosition} top-1/2 hidden h-px w-20 bg-lightCream/15 xl:block`} />
        </div>
    </div>
);

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

const ProductFact = ({ label, value }) => (
    <div className="border-b border-ink/15 px-1 py-5 sm:border-r sm:px-4">
        <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
            {label}
        </span>
        <span className="mt-2 block text-xs uppercase tracking-[0.12em] text-ink">
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

    const rotationImages = useMemo(() =>
    {
        if (!product) return [];
        if (product.rotationImages?.length) return product.rotationImages;
        return [product.image];
    }, [product]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const productRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const productScale = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0.92, 1, 1, 0.9]);

    useEffect(() =>
    {
        const unsubscribe = scrollYProgress.on("change", (value) =>
        {
            const nextFrame = Math.min(
                rotationImages.length - 1,
                Math.floor(value * rotationImages.length)
            );

            setFrame(nextFrame);
        });

        return () => unsubscribe();
    }, [scrollYProgress, rotationImages.length]);

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

    return (
        <main className="overflow-hidden bg-lightCream text-ink">

            {/* PRODUCT INTRO */}

            <section className="relative flex min-h-screen items-start justify-start px-6 pt-28 sm:px-10 lg:px-16 ">
                <div className="mx-auto grid w-full max-w-375 grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="order-2 lg:order-1"
                    >
                        <Link to="/shop/coffee" className="mb-10 inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-stone transition-colors hover:text-red">
                            <ArrowLeft size={13} strokeWidth={1.2} />
                            Coffee collection
                        </Link>

                        <p className="text-[8px] uppercase tracking-[0.4em] text-soil">
                            {product.origin} · {product.type}
                        </p>

                        <h1 className="header mt-5 max-w-xl text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.78] tracking-[-0.07em] text-ink">
                            {product.name}
                        </h1>

                        <p className="mt-7 max-w-md text-sm font-light leading-7 text-ink/60 sm:text-base">
                            {product.shortDescription}
                        </p>

                        <div className="mt-10 flex items-center gap-8">
                            <div>
                                <span className="block text-[8px] uppercase tracking-[0.3em] text-stone">
                                    Origin
                                </span>
                                <span className="mt-2 block text-xs uppercase tracking-[0.12em] text-ink">
                                    {product.origin}
                                </span>
                            </div>

                            <div className="h-8 w-px bg-ink/15" />

                            <div>
                                <span className="block text-[8px] uppercase tracking-[0.3em] text-stone">
                                    Altitude
                                </span>
                                <span className="mt-2 block text-xs tracking-[0.12em] text-ink">
                                    {product.altitude} m
                                </span>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="order-1 flex items-center justify-center lg:order-2"
                    >
                        <div className="relative flex aspect-square w-[75vw] max-w-162.5 items-center justify-center sm:w-[60vw] lg:w-full">

                            <div className="absolute inset-[12%] rounded-full border border-ink/10" />
                            <div className="absolute inset-[20%] rounded-full border border-ink/5" />

                            <div className="absolute inset-[25%] rounded-full bg-stone/10 blur-3xl" />

                            <img
                                src={product.image}
                                alt={product.name}
                                className="relative z-10 h-[75%] w-[75%] object-contain drop-shadow-2xl"
                            />

                            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center">
                                <span className="text-[7px] uppercase tracking-[0.4em] text-stone">
                                    Scroll to explore
                                </span>
                                <span className="mt-3 h-8 w-px bg-ink/20" />
                            </div>

                        </div>
                    </motion.div>

                </div>
            </section>


            {/* 360 EXPERIENCE */}

            <section ref={sectionRef} className="relative h-[400vh] bg-ink">

                <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10">

                    {/* ATMOSPHERE */}

                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-soil/20 blur-[120px]" />
                        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />
                    </div>


                    {/* TOP LABEL */}

                    <div className="absolute left-6 top-8 z-20 sm:left-10 sm:top-10">
                        <span className="text-[8px] uppercase tracking-[0.4em] text-lightCream/50">
                            The product
                        </span>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-lightCream">
                            {product.origin}
                        </p>
                    </div>


                    {/* CENTER PRODUCT */}

                    <motion.div
                        style={{ scale: productScale }}
                        className="relative z-10 flex h-[65vh] w-[65vh] max-h-150 max-w-150 items-center justify-center"
                    >

                        <div className="absolute inset-[8%] rounded-full border border-lightCream/10" />

                        <div className="absolute inset-[18%] rounded-full border border-lightCream/5" />

                        <div className="absolute inset-[28%] rounded-full bg-red/10 blur-[80px]" />

                        <motion.div style={{ rotate: productRotate }} className="relative h-full w-full">
                            <img
                                src={rotationImages[frame]}
                                alt={product.name}
                                className="h-full w-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                    </motion.div>


                    {/* CIRCULAR INFORMATION */}

                    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">

                        <CircularDetail
                            title="Origin"
                            value={product.origin}
                            position="left-[12%] top-[28%]"
                            linePosition="left-full top-1/2"
                        />

                        <CircularDetail
                            title="Altitude"
                            value={`${product.altitude} m`}
                            position="right-[12%] top-[28%]"
                            linePosition="right-full top-1/2"
                        />

                        <CircularDetail
                            title="Process"
                            value={product.process}
                            position="left-[10%] bottom-[28%]"
                            linePosition="left-full top-1/2"
                        />

                        <CircularDetail
                            title="Roast"
                            value={`${product.roastLevel}/5`}
                            position="right-[10%] bottom-[28%]"
                            linePosition="right-full top-1/2"
                        />

                    </div>


                    {/* MOBILE DETAIL */}

                    <div className="absolute bottom-10 left-6 right-6 z-20 grid grid-cols-2 gap-x-8 gap-y-5 lg:hidden">
                        <MobileDetail title="Origin" value={product.origin} />
                        <MobileDetail title="Altitude" value={`${product.altitude} m`} />
                        <MobileDetail title="Process" value={product.process} />
                        <MobileDetail title="Roast" value={`${product.roastLevel}/5`} />
                    </div>


                    {/* SCROLL INDICATOR */}

                    <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
                        <span className="text-[7px] uppercase tracking-[0.45em] text-lightCream/40">
                            Keep scrolling
                        </span>
                    </div>

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


                        {/* PRODUCT FACTS */}

                        <div className="mt-14 grid grid-cols-2 border-t border-ink/15 sm:grid-cols-4">

                            <ProductFact label="Origin" value={product.origin} />
                            <ProductFact label="Process" value={product.process} />
                            <ProductFact label="Altitude" value={`${product.altitude} m`} />
                            <ProductFact label="Roast" value={`${product.roastLevel}/5`} />

                        </div>
                    </div>


                    {/* BUY BOX */}

                    <div className="lg:pt-20">

                        <div className="border-t border-ink/15 pt-6">

                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <span className="text-[8px] uppercase tracking-[0.35em] text-stone">
                                        {product.size}g
                                    </span>

                                    <p className="mt-2 text-2xl tracking-[-0.03em] text-ink">
                                        NPR {product.price.toLocaleString()}
                                    </p>
                                </div>

                                {product.available && (
                                    <span className="text-[8px] uppercase tracking-[0.3em] text-hill">
                                        Available
                                    </span>
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

                            <button className="group mt-8 flex w-full items-center justify-between bg-red px-6 py-4 text-lightCream transition-colors duration-300 hover:bg-deepRed">
                                <span className="text-[9px] uppercase tracking-[0.3em]">
                                    Add to cart
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

        </main>

    );
};

export default ProductDetails;
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Minus, Plus, ShoppingBag } from "lucide-react";

const DEFAULT_FREQUENCIES = [
    "Weekly",
    "Every 2 Weeks",
    "Every 3 Weeks",
    "Every 4 Weeks",
];

const StickyPurchaseBar = ({
    product,
    visible,
    sizeOptions,
    selectedSize,
    onSelectSize,
    purchaseType,
    onChangePurchaseType,
    frequency,
    onChangeFrequency,
    quantity,
    onChangeQuantity,
    onAddToCart,
}) =>
{
    const subscriptionDiscount = product.subscriptionDiscount ?? 0.05;
    const frequencies = product.frequencies ?? DEFAULT_FREQUENCIES;

    const unitPrice = purchaseType === "subscribe"
        ? selectedSize.price * (1 - subscriptionDiscount)
        : selectedSize.price;

    const total = unitPrice * quantity;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-5 sm:pb-5"
                >
                    <div className="mx-auto max-w-[1500px] overflow-hidden border border-lightCream/15 bg-ink/95 text-lightCream shadow-2xl backdrop-blur-xl">

                        {/* TOP ACCENT */}

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-red/70 to-transparent" />

                        <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8 lg:py-4">

                            {/* PRODUCT */}

                            <div className="flex min-w-0 items-center gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-lightCream/5 sm:h-14 sm:w-14">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-3">
                                        <span className="truncate text-[11px] uppercase tracking-[0.18em] text-lightCream">
                                            {product.name}
                                        </span>

                                        <span className="hidden h-px w-5 bg-lightCream/20 sm:block" />

                                        <span className="hidden text-[7px] uppercase tracking-[0.3em] text-lightCream/40 sm:block">
                                            {product.origin}
                                        </span>
                                    </div>

                                    <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-lightCream/40">
                                        {product.type} · {product.process}
                                    </p>
                                </div>

                            </div>


                            {/* PURCHASE OPTIONS */}

                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                                {/* SIZE */}

                                <div className="flex items-center border border-lightCream/15">

                                    {sizeOptions.map((option) => (
                                        <button
                                            key={option.label}
                                            type="button"
                                            onClick={() => onSelectSize(option)}
                                            className={`relative px-4 py-2.5 text-[8px] uppercase tracking-[0.25em] transition-all duration-300 ${selectedSize.label === option.label ? "bg-lightCream text-ink" : "text-lightCream/55 hover:text-lightCream"}`}
                                        >
                                            {option.label}

                                            {selectedSize.label === option.label && (
                                                <motion.span
                                                    layoutId="selected-size"
                                                    className="absolute inset-x-0 bottom-0 h-px bg-red"
                                                />
                                            )}
                                        </button>
                                    ))}

                                </div>


                                {/* PURCHASE TYPE */}

                                <div className="hidden items-center border border-lightCream/15 md:flex">

                                    <button
                                        type="button"
                                        onClick={() => onChangePurchaseType("one-time")}
                                        className={`px-4 py-2.5 text-[8px] uppercase tracking-[0.22em] transition-all duration-300 ${purchaseType === "one-time" ? "bg-lightCream/10 text-lightCream" : "text-lightCream/40 hover:text-lightCream/70"}`}
                                    >
                                        One-time
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => onChangePurchaseType("subscribe")}
                                        className={`flex items-center gap-2 px-4 py-2.5 text-[8px] uppercase tracking-[0.22em] transition-all duration-300 ${purchaseType === "subscribe" ? "bg-lightCream/10 text-lightCream" : "text-lightCream/40 hover:text-lightCream/70"}`}
                                    >
                                        Subscribe
                                        <span className="text-red">
                                            −{Math.round(subscriptionDiscount * 100)}%
                                        </span>
                                    </button>

                                </div>


                                {/* FREQUENCY */}

                                {purchaseType === "subscribe" && (
                                    <div className="relative hidden lg:block">
                                        <select
                                            value={frequency}
                                            onChange={(event) => onChangeFrequency(event.target.value)}
                                            className="appearance-none border border-lightCream/15 bg-transparent py-2.5 pl-4 pr-9 text-[8px] uppercase tracking-[0.22em] text-lightCream/70 outline-none"
                                        >
                                            {frequencies.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                    className="bg-ink text-lightCream"
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={12}
                                            strokeWidth={1}
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lightCream/40"
                                        />
                                    </div>
                                )}


                                {/* QUANTITY */}

                                <div className="flex h-[38px] items-center border border-lightCream/15">

                                    <button
                                        type="button"
                                        onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
                                        className="flex h-full w-9 items-center justify-center text-lightCream/40 transition-colors hover:text-red"
                                    >
                                        <Minus size={11} strokeWidth={1.2} />
                                    </button>

                                    <span className="w-7 text-center text-[9px] tracking-[0.1em]">
                                        {String(quantity).padStart(2, "0")}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => onChangeQuantity(quantity + 1)}
                                        className="flex h-full w-9 items-center justify-center text-lightCream/40 transition-colors hover:text-red"
                                    >
                                        <Plus size={11} strokeWidth={1.2} />
                                    </button>

                                </div>

                            </div>


                            {/* PRICE + CTA */}

                            <div className="flex items-center justify-between gap-5 border-t border-lightCream/10 pt-3 lg:border-0 lg:pt-0">

                                <div className="flex items-baseline gap-3">
                                    <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/35">
                                        Total
                                    </span>

                                    <span className="text-sm tracking-[-0.02em] text-lightCream sm:text-base">
                                        NPR {total.toLocaleString()}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => onAddToCart({
                                        product,
                                        size: selectedSize,
                                        purchaseType,
                                        frequency,
                                        quantity,
                                        unitPrice,
                                        total,
                                    })}
                                    className="group flex shrink-0 items-center gap-4 bg-red px-5 py-3.5 text-lightCream transition-all duration-500 hover:bg-deepRed sm:px-7"
                                >
                                    <span className="text-[8px] uppercase tracking-[0.3em]">
                                        Add to cart
                                    </span>

                                    <ShoppingBag
                                        size={15}
                                        strokeWidth={1.1}
                                        className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </button>

                            </div>

                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyPurchaseBar;
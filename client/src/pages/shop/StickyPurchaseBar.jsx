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
    frequencies = DEFAULT_FREQUENCIES,

    frequency,
    onChangeFrequency,
    quantity,
    onChangeQuantity,
    onAddToCart,
}) =>
{
    const subscriptionDiscount = product.subscriptionDiscount ?? 0.05;
    const unitPrice = purchaseType === "subscribe"
        ? selectedSize.price * (1 - subscriptionDiscount)
        : selectedSize.price;

    const total = unitPrice * quantity;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-8 sm:pb-6"
                >
                    <div className="mx-auto max-w-375">
                        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[220px_1fr_300px] lg:items-center lg:gap-8">

                            {/* PRODUCT */}

                            <div className="hidden min-w-0 items-center gap-3 lg:flex">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-lightCream/70 p-2 backdrop-blur-md">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <span className="block truncate text-[10px] font-medium uppercase tracking-[0.22em] text-ink">
                                        {product.name}
                                    </span>

                                    <span className="mt-1 block truncate text-[7px] uppercase tracking-[0.3em] text-ink/45">
                                        {product.origin} · {product.type}
                                    </span>
                                </div>
                            </div>


                            {/* CONTROLS */}

                            <div className="flex min-w-0 items-center justify-center gap-2 sm:gap-3">

                                {/* SIZE */}

                                <div className="flex shrink-0 items-center gap-1 rounded-full border border-ink/20 bg-lightCream/70 p-1 backdrop-blur-md">

                                    {sizeOptions.map((option) => (
                                        <button
                                            key={option.label}
                                            type="button"
                                            onClick={() => onSelectSize(option)}
                                            className={`rounded-full px-4 py-2.5 text-[8px] font-medium uppercase tracking-[0.22em] transition-all duration-300 ${selectedSize.label === option.label ? "bg-ink text-lightCream" : "text-ink/55 hover:text-ink"}`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}

                                </div>


                                {/* PURCHASE TYPE */}

                                <div className="hidden shrink-0 items-center gap-1 rounded-full border border-ink/20 bg-lightCream/70 p-1 backdrop-blur-md md:flex">

                                    <button
                                        type="button"
                                        onClick={() => onChangePurchaseType("one-time")}
                                        className={`rounded-full px-4 py-2.5 text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${purchaseType === "one-time" ? "bg-ink text-lightCream" : "text-ink/50 hover:text-ink"}`}
                                    >
                                        One-time
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => onChangePurchaseType("subscribe")}
                                        className={`flex min-w-31.25 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${purchaseType === "subscribe" ? "bg-ink text-lightCream" : "text-ink/50 hover:text-ink"}`}
                                    >
                                        Subscribe
                                        <span className="text-red">
                                            −{Math.round(subscriptionDiscount * 100)}%
                                        </span>
                                    </button>

                                </div>


                                {/* FREQUENCY */}

                                <AnimatePresence initial={false}>
                                    {purchaseType === "subscribe" && (
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: 145 }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative hidden shrink-0 overflow-hidden md:block"
                                        >
                                            <select
                                                value={frequency}
                                                onChange={(event) => onChangeFrequency(event.target.value)}
                                                className="h-9.5 w-36.25 appearance-none rounded-full border border-ink/20 bg-lightCream/70 px-4 pr-9 text-[8px] font-medium uppercase tracking-[0.18em] text-ink outline-none backdrop-blur-md"
                                            >
                                                {frequencies.map((option) => (
                                                    <option
                                                        key={option}
                                                        value={option}
                                                        className="bg-lightCream text-ink"
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>

                                            <ChevronDown
                                                size={12}
                                                strokeWidth={1.2}
                                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/45"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>


                                {/* QUANTITY */}

                                <div className="flex h-10 shrink-0 items-center rounded-full border border-ink/20 bg-lightCream/70 p-1 backdrop-blur-md">

                                    <button
                                        type="button"
                                        onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream"
                                    >
                                        <Minus size={11} strokeWidth={1.2} />
                                    </button>

                                    <span className="w-7 text-center text-[9px] font-medium tracking-[0.15em] text-ink">
                                        {String(quantity).padStart(2, "0")}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => onChangeQuantity(quantity + 1)}
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream"
                                    >
                                        <Plus size={11} strokeWidth={1.2} />
                                    </button>

                                </div>

                            </div>


                            {/* PRICE + CTA */}

                            <div className="flex min-w-0 items-center justify-end gap-3">

                                <div className="flex h-11 min-w-31.25 shrink-0 items-center justify-between gap-3 rounded-full border border-ink/20 bg-lightCream/70 px-5 backdrop-blur-md">
                                    <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-ink/45">
                                        Total
                                    </span>

                                    <span className="whitespace-nowrap text-sm font-medium tracking-[-0.02em] text-ink sm:text-base">
                                        NPR {total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </span>
                                </div>

                             <button
    type="button"
    onClick={onAddToCart}
    className="group flex h-11 shrink-0 items-center justify-center gap-4 rounded-full bg-red px-6 text-lightCream transition-all duration-500 hover:bg-deepRed sm:px-8"
>
    <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.28em]">
        Add to cart
    </span>

    <ShoppingBag
        size={15}
        strokeWidth={1.1}
        className="transition-transform duration-500 group-hover:translate-x-0.5"
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
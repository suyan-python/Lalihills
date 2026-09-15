import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";

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
}) => {
  const subscriptionDiscount = product.subscriptionDiscount ?? 0.05;
  const unitPrice =
    purchaseType === "subscribe"
      ? selectedSize.price * (1 - subscriptionDiscount)
      : selectedSize.price;

  const total = unitPrice * quantity;

  const [sizeOpen, setSizeOpen] = useState(false);
  const [frequencyOpen, setFrequencyOpen] = useState(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-8 sm:pb-6 "
        >
          <div className="mx-auto max-w-375">
            <div className="relative flex flex-col gap-3  border border-ink/15 bg-lightCream/55 p-3 shadow-[0_-12px_40px_rgba(33,28,22,0.12)] backdrop-blur-xl sm:p-4 lg:grid lg:grid-cols-[220px_1fr_300px] lg:items-center lg:gap-8 lg:p-4 rounded-4xl">
              {/* PRODUCT */}
              <div className="hidden min-w-0 items-center gap-3 lg:flex">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-lightCream/70 p-2 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <span className="block truncate text-[12px] font-bold uppercase tracking-[0.22em] text-ink">
                    {product.name}
                  </span>

                  <span className="mt-1 block truncate text-[8px] uppercase tracking-[0.3em] text-ink/85">
                    {product.origin} · {product.type}
                  </span>
                </div>
              </div>

              <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 sm:justify-center sm:gap-3">
                {/* SELECT SIZE  */}
                <div className="relative w-full max-w-[220px]">
                  <button
                    type="button"
                    onClick={() => setSizeOpen((open) => !open)}
                    className="flex h-11 w-full items-center justify-between rounded-full border border-ink/15 bg-lightWhite px-4 text-ink transition-all duration-300 hover:border-ink/30"
                    aria-expanded={sizeOpen}
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
                      Size · {selectedSize.label}
                    </span>

                    <ChevronDown
                      size={14}
                      strokeWidth={1.2}
                      className={`transition-transform duration-300 ${
                        sizeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {sizeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 z-50 mb-2 w-full overflow-hidden rounded-2xl border border-ink/10 bg-lightWhite p-1 shadow-xl"
                      >
                        {sizeOptions.map((option) => {
                          const active = selectedSize.label === option.label;

                          return (
                            <button
                              key={option.label}
                              type="button"
                              onClick={() => {
                                onSelectSize(option);
                                setSizeOpen(false);
                              }}
                              className={`flex w-full items-center justify-between rounded-4xl px-4 py-3 text-left transition-colors duration-200 ${
                                active
                                  ? "bg-ink text-lightCream"
                                  : "text-ink hover:bg-ink/5"
                              }`}
                            >
                              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
                                {option.label}
                              </span>

                              {option.price && (
                                <span
                                  className={`text-[8px] tracking-[0.1em] ${
                                    active ? "text-lightCream" : "text-ink/75"
                                  }`}
                                >
                                  Rs. {option.price.toLocaleString()}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* PURCHASE TYPE */}

                <div className="hidden shrink-0 items-center gap-1 border border-ink/15 bg-lightWhite p-1 md:flex rounded-4xl">
                  <button
                    type="button"
                    onClick={() => onChangePurchaseType("one-time")}
                    className={`px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-4xl ${purchaseType === "one-time" ? "bg-ink text-lightCream" : "text-ink/85 hover:text-ink"}`}
                  >
                    One-time
                  </button>

                  <button
                    type="button"
                    onClick={() => onChangePurchaseType("subscribe")}
                    className={`flex min-w-31.25 items-center justify-center gap-2 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 rounded-4xl ${purchaseType === "subscribe" ? "bg-ink text-lightCream" : "text-ink/85 hover:text-ink"}`}
                  >
                    Subscribe
                    <span className="text-green-500">
                      −{Math.round(subscriptionDiscount * 100)}%
                    </span>
                  </button>
                </div>

                {/* FREQUENCY */}

                <AnimatePresence initial={false}>
                  {purchaseType === "subscribe" && (
                    <motion.div
                      initial={{ opacity: 0, width: 0, x: 8 }}
                      animate={{ opacity: 1, width: 150, x: 0 }}
                      exit={{ opacity: 0, width: 0, x: 8 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative hidden shrink-0 md:block"
                    >
                      <button
                        type="button"
                        onClick={() => setFrequencyOpen((open) => !open)}
                        className="flex h-10 w-[150px] items-center justify-between rounded-full border border-ink/15 bg-lightWhite px-4 text-ink transition-all duration-300 hover:border-ink/30"
                        aria-expanded={frequencyOpen}
                      >
                        <span className="truncate text-[9px] font-medium uppercase tracking-[0.16em]">
                          {frequency}
                        </span>

                        <ChevronDown
                          size={13}
                          strokeWidth={1.2}
                          className={`shrink-0 text-ink/45 transition-transform duration-300 ${
                            frequencyOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {frequencyOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute bottom-full left-0 z-50 mb-2 w-[190px] overflow-hidden rounded-2xl border border-ink/10 bg-lightWhite p-1.5 shadow-xl"
                          >
                            <div className="space-y-0.5">
                              {frequencies.map((option, index) => {
                                const active = frequency === option;

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                      onChangeFrequency(option);
                                      setFrequencyOpen(false);
                                    }}
                                    className={`group/frequency relative flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                                      active
                                        ? "bg-ink text-lightCream"
                                        : "text-ink hover:bg-ink/5"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span
                                        className={`text-[7px] tabular-nums ${active ? "text-lightCream/75" : "text-ink/75"}`}
                                      >
                                        {String(index + 1).padStart(2, "0")}
                                      </span>

                                      <span className="text-[8px] font-medium uppercase tracking-[0.14em]">
                                        {option}
                                      </span>
                                    </div>

                                    {active && (
                                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* QUANTITY */}

                <div className="flex h-10 shrink-0 items-center border border-ink/15 bg-lightWhite p-1 rounded-4xl">
                  <button
                    type="button"
                    onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-8 w-8 items-center justify-center text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream rounded-full"
                  >
                    <Minus size={11} strokeWidth={1.2} />
                  </button>

                  <span className="w-7 text-center text-[10px] font-medium tracking-[0.15em] text-ink">
                    {String(quantity).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() => onChangeQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="flex h-8 w-8 items-center justify-center text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream rounded-full"
                  >
                    <Plus size={11} strokeWidth={1.2} />
                  </button>
                </div>
              </div>

              {/* PRICE + CTA */}

              <div className="flex min-w-0 items-center gap-2 justify-between  border-t border-ink/10 pt-3 sm:justify-end sm:border-0 sm:pt-0">
                <div className="flex h-11 shrink-0 items-center justify-between border border-ink/15 bg-lightWhite px-4 sm:px-5 rounded-4xl">
                  <span className="header whitespace-nowrap text-sm font-bold tracking-[-0.02em] text-ink sm:text-base">
                    NPR{" "}
                    {total.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onAddToCart}
                  className="group flex h-11 min-w-0 flex-1 items-center justify-center gap-3 bg-red px-4 text-lightCream transition-all duration-500 hover:bg-deepRed sm:flex-none sm:px-8 rounded-4xl cursor-pointer"
                >
                  <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em]">
                    Add to cart
                  </span>
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

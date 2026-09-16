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
            <div className="relative flex flex-col gap-3 rounded-3xl border border-ink/15  p-3 shadow-[0_-12px_40px_rgba(33,28,22,0.12)] backdrop-blur-sm sm:gap-4 sm:rounded-4xl sm:p-4 lg:grid lg:grid-cols-[200px_1fr_260px] lg:items-center lg:gap-6 lg:p-4 xl:grid-cols-[220px_1fr_300px] xl:gap-8">
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
                {/* SELECT SIZE */}
                <div className="relative w-full sm:w-auto sm:min-w-[180px] sm:max-w-[220px]">
                  <button
                    type="button"
                    onClick={() => setSizeOpen((open) => !open)}
                    className="flex h-11 w-full items-center justify-between rounded-full border border-ink/15 bg-lightWhite px-4 text-ink transition-all duration-300 hover:border-ink/30"
                    aria-expanded={sizeOpen}
                  >
                    <span className="truncate text-[10px] font-medium uppercase tracking-[0.2em]">
                      Size · {selectedSize.label}
                    </span>

                    <ChevronDown
                      size={14}
                      strokeWidth={1.2}
                      className={`shrink-0 transition-transform duration-300 ${
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

                {/* PURCHASE TYPE */}

                <div className="flex w-full items-center gap-1 rounded-4xl border border-ink/15 bg-lightWhite p-1 sm:w-auto">
                  {/* ONE-TIME */}
                  <button
                    type="button"
                    onClick={() => {
                      onChangePurchaseType("one-time");
                      setFrequencyOpen(false);
                    }}
                    className={`flex-1 whitespace-nowrap rounded-4xl px-3 py-2.5 text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-300 sm:flex-none sm:px-4 sm:text-[10px] sm:tracking-[0.2em] ${
                      purchaseType === "one-time"
                        ? "bg-ink text-lightCream"
                        : "text-ink/85 hover:text-ink"
                    }`}
                  >
                    One-time
                  </button>

                  {/* SUBSCRIBE */}
                  <div
                    className={`relative flex-1 rounded-4xl transition-all duration-300 sm:flex-none ${
                      purchaseType === "subscribe"
                        ? "bg-ink text-lightCream"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onChangePurchaseType("subscribe")}
                      className={`flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-4xl px-3 py-2.5 text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-300 sm:min-w-31.25 sm:px-4 sm:text-[10px] sm:tracking-[0.2em] ${
                        purchaseType === "subscribe"
                          ? "text-lightCream"
                          : "text-ink/85 hover:text-ink"
                      }`}
                    >
                      Subscribe
                      <span className="text-green-500">
                        −{Math.round(subscriptionDiscount * 100)}%
                      </span>
                    </button>

                    {/* MOBILE FREQUENCY */}
                    {purchaseType === "subscribe" && (
                      <button
                        type="button"
                        onClick={() => setFrequencyOpen((open) => !open)}
                        className="flex w-full items-center justify-center gap-1 pb-2 text-[7px] uppercase tracking-[0.12em] text-lightCream/70 sm:hidden"
                        aria-expanded={frequencyOpen}
                      >
                        <span className="truncate">{frequency}</span>

                        <ChevronDown
                          size={11}
                          strokeWidth={1.2}
                          className={`shrink-0 transition-transform duration-300 ${
                            frequencyOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}

                    {/* MOBILE FREQUENCY OPTIONS */}
                    <AnimatePresence>
                      {purchaseType === "subscribe" && frequencyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute bottom-full left-0 z-50 mb-2 w-full min-w-[190px] overflow-hidden rounded-2xl border border-ink/10 bg-lightWhite p-1.5 shadow-xl sm:hidden"
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
                                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                                    active
                                      ? "bg-ink text-lightCream"
                                      : "text-ink hover:bg-ink/5"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span
                                      className={`text-[7px] tabular-nums ${
                                        active
                                          ? "text-lightCream/75"
                                          : "text-ink/75"
                                      }`}
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
                  </div>
                </div>

                {/* DESKTOP FREQUENCY */}

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
                      className="relative hidden shrink-0 sm:block"
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
                                        className={`text-[7px] tabular-nums ${
                                          active
                                            ? "text-lightCream/75"
                                            : "text-ink/75"
                                        }`}
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
              </div>

              {/* PRICE + CTA */}

              <div className="flex min-w-0 items-center justify-between gap-2 border-t border-ink/10 pt-3 sm:justify-end sm:border-0 sm:pt-0">
                {/* QUANTITY */}

                <div className="ml-auto flex h-9 w-[104px] shrink-0 items-center justify-between rounded-4xl border border-ink/15 bg-lightWhite p-1 sm:ml-0 sm:h-10 sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream sm:h-8 sm:w-8"
                  >
                    <Minus
                      size={10}
                      strokeWidth={1.2}
                      className="sm:h-[11px] sm:w-[11px]"
                    />
                  </button>

                  <span className="w-6 text-center text-[9px] font-medium tracking-[0.15em] text-ink sm:w-7 sm:text-[10px]">
                    {String(quantity).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() => onChangeQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream sm:h-8 sm:w-8"
                  >
                    <Plus
                      size={10}
                      strokeWidth={1.2}
                      className="sm:h-[11px] sm:w-[11px]"
                    />
                  </button>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-between rounded-4xl border border-ink/15 bg-lightWhite px-3.5 sm:h-11 sm:px-5">
                  <span className="header whitespace-nowrap text-sm font-bold tracking-[-0.02em] text-ink sm:text-base">
                    NPR.{" "}
                    {total.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onAddToCart}
                  className="group flex h-10 min-w-0 flex-1 items-center justify-center gap-3 rounded-4xl bg-red px-4 text-lightCream transition-all duration-500 hover:bg-deepRed sm:h-11 sm:flex-none sm:px-8 cursor-pointer"
                >
                  <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] sm:text-[10px]">
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

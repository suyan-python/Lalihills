import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetailsRight = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedGrind,
  setSelectedGrind,
  quantity,
  setQuantity,
  purchaseType,
  setPurchaseType,
  frequency,
  setFrequency,
  onAddToCart,
  onThemeToggle,
  onCartOpen,
}) => {
  const [activeInfo, setActiveInfo] = useState("taste");
  const [added, setAdded] = useState(false);
  const [frequencyOpen, setFrequencyOpen] = useState(false);

  const frequencyOptions = [
    "Weekly",
    "Every 2 Weeks",
    "Every 4 Weeks",
    "Every 8 Weeks",
  ];

  const isCoffee = product?.type === "beans";

  const subscriptionDiscount = product?.subscriptionDiscount ?? 0.1;

  const unitPrice = selectedSize?.price
    ? purchaseType === "subscribe"
      ? selectedSize.price * (1 - subscriptionDiscount)
      : selectedSize.price
    : 0;

  const total = unitPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart();

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 3000);
  };

  const infoOptions = ["taste", "origin", "ritual"];

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-paper text-ink">
      {/* TOP — INFORMATION */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex h-full flex-col">
          {/* TOP NAV */}
          <div className="flex shrink-0 items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-8 lg:px-10">
            {/* INFO NAV */}

            <div className="relative flex rounded-full  bg-stone/10 p-1">
              <motion.div
                className="absolute inset-y-1 rounded-full bg-lightWhite shadow-md shadow-black/10"
                animate={{
                  x: `${infoOptions.indexOf(activeInfo) * 100}%`,
                }}
                style={{
                  width: `${95 / infoOptions.length}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 32,
                  mass: 0.7,
                }}
              />

              {infoOptions.map((item) => {
                const active = activeInfo === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveInfo(item)}
                    className={`relative z-10 min-w-[75px] rounded-full px-4 py-2 text-[8px] uppercase tracking-[0.05em] transition-colors duration-300 md:min-w-[45px] md:text-[10px] font-bold ${
                      active
                        ? "text-ink"
                        : "text-ink/65 hover:text-ink/70 cursor-pointer"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={onThemeToggle}
                className="text-[8px] uppercase tracking-[0.2em] text-ink transition-colors border border-black/30 rounded-full py-1 px-2 font-medium"
              >
                Theme
              </button>

              <button
                type="button"
                onClick={onCartOpen}
                className="text-[8px] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-ink"
              >
                Cart
              </button>
            </div>
          </div>

          {/* INFORMATION CONTENT */}
          <div className="flex-1 px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <AnimatePresence mode="wait">
              {activeInfo === "taste" && (
                <InfoPanel key="taste" title="Taste">
                  <p className="max-w-lg text-sm  leading-7 text-soil">
                    {product.description}
                  </p>

                  {product.flavors?.length > 0 && (
                    <div className="mt-10">
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.flavors.map((flavor) => (
                          <span
                            key={flavor}
                            className="rounded-full border border-ink/10 p-2 text-[10px] tracking-[0.05em] text-ink/75"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </InfoPanel>
              )}

              {activeInfo === "origin" && (
                <InfoPanel key="origin" title="Origin">
                  <div className="max-w-lg">
                    <h3 className="header text-4xl uppercase leading-none tracking-[-0.04em] sm:text-5xl">
                      {product.origin}
                    </h3>

                    {product.info?.origin?.blurb && (
                      <p className="mt-6 text-sm font-light leading-7 text-ink/60">
                        {product.info.origin.blurb}
                      </p>
                    )}

                    <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7">
                      <InfoValue label="Altitude" value={product.altitude} />

                      <InfoValue label="Process" value={product.process} />

                      <InfoValue
                        label="Variety"
                        value={product.info?.variety?.value}
                      />

                      <InfoValue
                        label="Harvest"
                        value={product.info?.harvest?.value}
                      />
                    </div>
                  </div>
                </InfoPanel>
              )}

              {activeInfo === "ritual" && (
                <InfoPanel key="ritual" title="Ritual">
                  {product.ritual ? (
                    <RitualPanel ritual={product.ritual} />
                  ) : (
                    <p className="text-sm font-light leading-7 text-ink/60">
                      Ritual information coming soon.
                    </p>
                  )}
                </InfoPanel>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BOTTOM — PURCHASE */}
      <div className="shrink-0  px-6 py-2 sm:px-8 lg:px-10 lg:py-4 bg-lightWhite ">
        {/* PLAN */}
        <div className="relative max-w-md">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75">
              Plan
            </span>
          </div>

          <div className="mt-1 grid max-w-[300px] grid-cols-2 rounded-full bg-ivory p-1">
            <PurchaseOption
              active={purchaseType === "one-time"}
              onClick={() => setPurchaseType("one-time")}
            >
              One time
            </PurchaseOption>

            <PurchaseOption
              active={purchaseType === "subscribe"}
              onClick={() => {
                setPurchaseType("subscribe");
                setFrequencyOpen(true);
              }}
            >
              Subscribe
              <br />
              <span className="text-[8px] tracking-[0.1em] text-red">
                Save 10%
              </span>
            </PurchaseOption>
          </div>

          {/* FREQUENCY SIDE PANEL */}
          <AnimatePresence>
            {purchaseType === "subscribe" && frequencyOpen && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-full top-0 z-50 w-52"
              >
                <div className="rounded-2xl border border-ink/10 bg-ivory p-2 shadow-lg">
                  {frequencyOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setFrequency(option);
                        setFrequencyOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[8px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                        frequency === option
                          ? "bg-ink text-lightCream"
                          : "text-ink/60 hover:bg-ink/5 hover:text-ink"
                      }`}
                    >
                      {option}

                      {frequency === option && (
                        <span className="text-[7px]">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FORM / GRIND + SIZE */}
        <div className="mt-3 grid grid-cols-2 gap-5">
          {/* GRIND */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75">
              {isCoffee ? "Grind" : "Form"}
            </span>

            <div className="mt-3 flex flex-wrap gap-2">
              {(isCoffee ? product.grindOptions : product.formOptions)?.map(
                (option) => {
                  const active = selectedGrind === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedGrind(option)}
                      className={`rounded-full border px-3 py-2 text-[10px] tracking-[0.05em] transition-all duration-300 font-medium ${
                        active
                          ? " bg-red text-lightCream"
                          : "border-ink/10 text-ink hover:border-ink/30 cursor-pointer"
                      }`}
                    >
                      {option}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* SIZE */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75">
              Size
            </span>

            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizeOptions?.map((size) => {
                const active = selectedSize?.grams === size.grams;

                return (
                  <button
                    key={size.grams}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-3 py-2 text-[10px] tracking-[0.05em] transition-all duration-300 font-medium ${
                      active
                        ? " bg-red text-lightCream"
                        : "border-ink/10 text-ink hover:border-ink/30 cursor-pointer"
                    }`}
                  >
                    {size.grams}g
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* QUANTITY */}
        <div className="mt-3 flex items-center gap-12">
          <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75">
            Quantity
          </span>

          <div className="flex items-baseline  gap-2 border border-black/10 rounded-full">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex h-7 w-7 items-center justify-center text-sm cursor-pointer"
            >
              −
            </button>

            <span className="min-w-4 text-center text-xs">{quantity}</span>

            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="flex h-7 w-7 items-center justify-center text-sm cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* FIXED PURCHASE BAR */}
      <div className="shrink-0 border-t border-ink/20 bg-lightWhite  px-6 py-4 text-ink sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-5">
          {/* PRODUCT SUMMARY */}
          <div className="min-w-0">
            <p className="header truncate text-[16px] ">{product.name}</p>

            <p className=" truncate text-[10px] tracking-[0.05em] text-ink/80">
              {selectedGrind} · {selectedSize?.size} · Qty {quantity}
            </p>
          </div>

          {/* PRICE + CART */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7">
            <span className="header text-md">Rs. {total.toLocaleString()}</span>

            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full bg-red px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-lightWhite transition-all duration-300 hover:bg-cream active:scale-[0.98] md:px-4"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION */}
      <AnimatePresence>
        {added && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-24 right-6 z-30 rounded-full bg-hill px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-lightCream shadow-xl sm:right-8"
          >
            {product.roastLevel
              ? `${product.roastLevel} roast added`
              : "Added to bag"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InfoPanel = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <span className="header text-[28px] uppercase tracking-[0.04em] text-ink">
      {title}
    </span>

    <div className="mt-1">{children}</div>
  </motion.div>
);

const InfoValue = ({ label, value }) => (
  <div>
    <span className="text-[7px] uppercase tracking-[0.3em] text-stone">
      {label}
    </span>

    <p className="mt-2 text-xs font-light text-ink/70">{value || "—"}</p>
  </div>
);

const PurchaseOption = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full py-1 text-[10px] font-bold tracking-[0.05em] transition-all duration-300 ${
      active
        ? "bg-lightWhite text-ink shadow-md shadow-black/10"
        : "text-ink/75  cursor-pointer"
    }`}
  >
    {children}
  </button>
);

const RitualPanel = ({ ritual }) => {
  const isCoffee = ritual.type === "pour-over";

  return (
    <div className="max-w-xl">
      {/* METHOD */}
      <div>
        <p className="text-[8px] uppercase tracking-[0.22em] text-stone">
          {isCoffee ? "Coffee Ritual" : "Tea Ritual"}
        </p>

        <h3 className="header mt-2 text-3xl uppercase tracking-[-0.04em] text-ink">
          {ritual.method}
        </h3>
      </div>

      {/* BREW VARIABLES */}
      <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
        <RitualStat value={ritual.dose} label={ritual.doseLabel} />

        <RitualStat value={ritual.water} label={ritual.waterLabel} />

        <RitualStat value={ritual.temperature} label="Temp" />

        {isCoffee && ritual.ratio && (
          <RitualStat value={ritual.ratio} label="Ratio" />
        )}
      </div>

      {/* TIMER */}
      <div className="mt-12">
        {isCoffee ? (
          <CoffeeTimer ritual={ritual} />
        ) : (
          <TeaTimer ritual={ritual} />
        )}
      </div>

      {/* DESCRIPTION */}
      {ritual.description && (
        <p className="mt-8 max-w-md text-[10px] font-light leading-5 text-ink/45">
          {ritual.description}
        </p>
      )}
    </div>
  );
};

const RitualStat = ({ value, label }) => (
  <div>
    <p className="text-lg tracking-[-0.03em] text-ink">{value}</p>

    <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-stone">
      {label}
    </p>
  </div>
);

const CoffeeTimer = ({ ritual }) => {
  return (
    <div>
      {/* TIMER UI */}
      <div className="relative mx-auto flex aspect-square max-w-[260px] items-center justify-center rounded-full border border-ink/10">
        <div className="text-center">
          <p className="text-3xl tracking-[-0.04em] text-ink">0:00</p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-stone">
            {ritual.steps?.[0]?.label || "Bloom"}
          </p>

          {ritual.steps?.[0]?.water && (
            <p className="mt-1 text-[9px] text-ink/40">
              {ritual.steps[0].water}
            </p>
          )}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <button className="rounded-full bg-ink px-6 py-3 text-[8px] uppercase tracking-[0.18em] text-lightCream">
          Start brew
        </button>

        <button className="rounded-full border border-ink/10 px-5 py-3 text-[8px] uppercase tracking-[0.18em] text-ink/50">
          Reset
        </button>
      </div>
    </div>
  );
};

const TeaTimer = ({ ritual }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    return `${minutes}:${String(remaining).padStart(2, "0")}`;
  };

  return (
    <div>
      {/* STEEP OPTIONS */}
      <div className="flex gap-2">
        {ritual.steeps?.map((steep) => (
          <div
            key={steep.number}
            className="flex-1 rounded-xl border border-ink/10 px-3 py-3 text-center"
          >
            <p className="text-[7px] uppercase tracking-[0.18em] text-stone">
              {steep.number === 1
                ? "1st"
                : steep.number === 2
                  ? "2nd"
                  : `${steep.number}th`}
            </p>

            <p className="mt-2 text-sm text-ink">
              {formatTime(steep.duration)}
            </p>
          </div>
        ))}
      </div>

      {/* TIMER */}
      <div className="mt-8 text-center">
        <p className="text-4xl tracking-[-0.04em] text-ink">3:00</p>

        <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-stone">
          Steeping
        </p>
      </div>

      {/* CONTROLS */}
      <div className="mt-5 flex justify-center gap-3">
        <button className="rounded-full bg-ink px-6 py-3 text-[8px] uppercase tracking-[0.18em] text-lightCream">
          Start steep
        </button>

        <button className="rounded-full border border-ink/10 px-5 py-3 text-[8px] uppercase tracking-[0.18em] text-ink/50">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsRight;

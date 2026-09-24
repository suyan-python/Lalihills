import { useEffect, useMemo, useState } from "react";
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

  const originalTotal = selectedSize?.price * quantity;
  const discountedTotal = originalTotal * 0.9;

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
            <div className="w-full">
              <div className="relative grid w-full max-w-xs grid-cols-3 rounded-full bg-stone/10 p-1 sm:max-w-sm">
                <motion.div
                  className="absolute inset-y-1 rounded-full bg-lightWhite shadow-md shadow-black/10"
                  style={{
                    width: `calc((100% - 8px) / ${infoOptions.length})`,
                  }}
                  animate={{
                    left: `calc(4px + ${infoOptions.indexOf(activeInfo)} * ((100% - 8px) / ${infoOptions.length}))`,
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
                      className={`relative z-10 flex h-8 items-center justify-center rounded-full px-3 text-[8px] font-bold uppercase tracking-[0.08em] transition-colors duration-300 sm:h-9 sm:px-4 sm:text-[9px] ${
                        active
                          ? "text-ink"
                          : "cursor-pointer text-ink/50 hover:text-ink/75"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={onThemeToggle}
                className="flex h-8 items-center rounded-full border border-black/20 px-2.5 text-[7px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-black/40 sm:h-9 sm:px-3 sm:text-[8px] sm:tracking-[0.2em]"
              >
                Theme
              </button>

              <button
                type="button"
                onClick={onCartOpen}
                className="flex h-8 items-center px-1 text-[7px] font-medium uppercase tracking-[0.16em] text-ink/50 transition-colors hover:text-ink sm:h-9 sm:px-2 sm:text-[8px] sm:tracking-[0.2em]"
              >
                Cart
              </button>
            </div>
          </div>

          {/* INFORMATION CONTENT */}
          <div className="min-h-0 flex-1 px-6 sm:px-8 py-4 md:py-8 lg:px-10 ">
            <AnimatePresence mode="wait">
              {activeInfo === "taste" && (
                <InfoPanel key="taste" title="Taste">
                  <p className="max-w-lg text-sm leading-7 text-soil">
                    {product.description}
                  </p>

                  {product.flavors?.length > 0 && (
                    <div className="mt-7">
                      <div className="flex flex-wrap gap-2">
                        {product.flavors.map((flavor) => (
                          <span
                            key={flavor}
                            className="rounded-full uppercase font-semibold border border-ink/20 px-3 py-2 text-[9px] tracking-[0.05em] text-ink/75"
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
                      <p className="mt-5 text-sm font-light leading-7 text-ink/60">
                        {product.info.origin.blurb}
                      </p>
                    )}

                    <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
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

        <div className="flex justify-between text-center gap-8 relative  ">
          <div className="w-full ">
            <div className=" text-start">
              <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75">
                Plan
              </span>
            </div>
            <div className="mt-1 grid grid-cols-2 rounded-full bg-ivory p-1">
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
                  className="absolute left-40 md:left-52 top-0 z-50 w-52"
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
                        className={`flex  items-center justify-between rounded-xl px-3 py-2.5 text-left text-[8px] uppercase tracking-[0.1em] transition-colors duration-200 ${
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

            <div className="mt-1">
              {purchaseType === "subscribe" && (
                <div className="flex items-center gap-2 text-[7px] md:text-[9px] uppercase tracking-[0.16em] font-bold  justify-center">
                  <span className="text-deepRed">Subscription</span>
                  <span className="text-ink/20">/</span>
                  <span className="text-ink/45">{frequency}</span>
                </div>
              )}
            </div>
          </div>

          {/* SIZE */}
          <div className="w-full flex flex-col items-start ">
            <div className="text-left ">
              <span className=" text-[10px] uppercase tracking-[0.15em] text-ink/75 text-left ">
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
        </div>

        {/* FORM / GRIND + QUANTITY */}
        <div className="mt-3 grid grid-cols-2 gap-8">
          {/* GRIND */}
          <div className="w-full">
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

          {/* QUANTITY */}
          <div className="mt-3 flex flex-col  items-start gap-5  w-full">
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
            {/* <span className="header text-md">Rs. {total.toLocaleString()}</span> */}

            {purchaseType === "subscribe" ? (
              <div className="flex items-baseline gap-2">
                <span className="header text-lg text-deepRed">
                  Rs. {(originalTotal * 0.9).toLocaleString()}
                </span>

                <span className="text-sm text-ink/35 line-through">
                  Rs. {originalTotal.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="header text-md text-ink">
                Rs. {originalTotal.toLocaleString()}
              </span>
            )}

            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full bg-red px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-lightWhite transition-all duration-300 hover:bg-hill active:bg-hill active:scale-[0.98] md:px-4"
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
            className="absolute top-24 left-6 z-100 rounded-full bg-hill px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-lightCream shadow-xl sm:right-8"
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
    <div className="mx-auto w-full max-w-xl text-center ">
      {/* METHOD */}
      <div className="">
        <h3 className="header text-3xl leading-none tracking-[0.01em] ">
          {ritual.method}
        </h3>
      </div>

      {/* BREW VARIABLES */}
      <div className="mx-auto mt-5 grid max-w-75 grid-cols-2 gap-y-4 sm:grid-cols-4">
        <RitualStat value={ritual.dose} label={ritual.doseLabel} />
        <RitualStat value={ritual.water} label={ritual.waterLabel} />
        <RitualStat value={ritual.temperature} label="Temp" />

        {isCoffee && ritual.ratio && (
          <RitualStat value={ritual.ratio} label="Ratio" />
        )}
      </div>

      {/* TIMER */}
      <div className="">
        {isCoffee ? (
          <CoffeeTimer ritual={ritual} />
        ) : (
          <TeaTimer ritual={ritual} />
        )}
      </div>
    </div>
  );
};

const RitualStat = ({ value, label }) => (
  <div>
    <p className="text-lg tracking-[-0.03em] text-ink">{value}</p>

    <p className="text-[7px] uppercase tracking-[0.2em] text-ink/75">{label}</p>
  </div>
);

const CoffeeTimer = ({ ritual }) => {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const totalTime = ritual.totalTime || 180;
  const steps = ritual.steps || [];

  const currentStep = useMemo(() => {
    return (
      [...steps].reverse().find((step) => elapsed >= step.time) || steps[0]
    );
  }, [steps, elapsed]);

  const progress = Math.min(elapsed / totalTime, 1);
  const circumference = 2 * Math.PI * 86;

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setElapsed((current) => {
        if (current >= totalTime) {
          setRunning(false);
          return totalTime;
        }

        return current + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running, totalTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    return `${minutes}:${String(remaining).padStart(2, "0")}`;
  };

  const handleStart = () => {
    if (elapsed >= totalTime) {
      setElapsed(0);
    }

    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  const isComplete = elapsed >= totalTime;

  return (
    <div className="flex w-full flex-col items-center text-center">
      {/* TIMER */}
      <div className="relative h-52 w-52 sm:h-56 sm:w-56">
        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
          {/* TRACK */}
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            className="text-soil/30"
          />

          {/* PROGRESS */}
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            className="text-red transition-[stroke-dashoffset] duration-500"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
        </svg>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[7px] font-medium uppercase tracking-[0.24em] text-ink/35">
            {isComplete ? "Brew complete" : currentStep?.label || "Bloom"}
          </span>

          <span className="header mt-1 text-4xl leading-none tracking-[-0.05em] text-ink sm:text-5xl">
            {formatTime(elapsed)}
          </span>

          {!isComplete && currentStep?.water && (
            <span className="mt-2 text-[8px] uppercase tracking-[0.18em] text-ink/40">
              {currentStep.water}
            </span>
          )}
        </div>
      </div>

      {/* CONTROLS */}
      <div className=" flex items-center justify-center gap-2">
        {!running ? (
          <button
            type="button"
            onClick={handleStart}
            className="min-w-[112px] rounded-full bg-red px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-lightCream transition-all duration-300 hover:bg-ink active:scale-[0.97] cursor-pointer"
          >
            {isComplete ? "Brew Again" : elapsed > 0 ? "Resume" : "Start Brew"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePause}
            className="min-w-[112px] rounded-full bg-red px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-lightCream transition-all duration-300 hover:bg-ink active:scale-[0.97] cursor-pointer"
          >
            Pause
          </button>
        )}

        <button
          type="button"
          onClick={handleReset}
          className="rounded-full border border-ink/10 px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-ink/85 transition-all duration-300 hover:border-ink/25 hover:text-ink active:scale-[0.97]"
        >
          Reset
        </button>
      </div>

      <div className="mt-3">
        {isComplete && (
          <p className="text-[8px] uppercase tracking-[0.18em] text-ink">
            Ready to enjoy
          </p>
        )}
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

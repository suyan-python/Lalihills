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
  onCartOpen,
  darkMode,
  onThemeToggle,
}) => {
  const [activeInfo, setActiveInfo] = useState("Taste");
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

  const infoOptions = ["Taste", "Origin", "Ritual"];

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-raised dark:bg-ink text-ink transition-colors duration-300">
      {/* TOP — INFORMATION */}
      <div className=" z-10  min-h-0 flex-1 overflow-y-auto">
        <div className="flex h-full flex-col">
          {/* TOP NAV */}
          <div className="flex shrink-0 items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-8 lg:px-10">
            {/* INFO NAV */}
            <div className="w-fit">
              <div className="relative grid w-full max-w-xs grid-cols-3 rounded-full bg-stone/10 p-1 sm:max-w-sm">
                <motion.div
                  className="absolute inset-y-1 rounded-full bg-lightWhite shadow-md shadow-black/10"
                  style={{
                    width: `calc((100% - 8px) / ${infoOptions.length})`,
                  }}
                  animate={{
                    left: `calc(4px + ${infoOptions.indexOf(
                      activeInfo,
                    )} * ((100% - 8px) / ${infoOptions.length}))`,
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
                      className={`relative z-10 flex h-8 items-center justify-center rounded-full px-3 text-[8px] font-bold  tracking-[0.02em] transition-colors duration-300 sm:h-8 sm:px-4 md:text-[11px] ${
                        active
                          ? "text-ink"
                          : "cursor-pointer text-ink/50 hover:text-ink/75  dark:text-lightWhite/50 dark:hover:text-lightWhite/75 "
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIONS */}
            <button
              type="button"
              onClick={onThemeToggle}
              aria-label="Toggle dark mode"
              className="flex h-8 cursor-pointer items-center rounded-full border border-black/20 px-2.5 text-[7px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-black/40 dark:border-lightCream/20 dark:text-lightCream dark:hover:border-lightCream/40 sm:h-9 sm:px-3 sm:text-[8px] sm:tracking-[0.2em]"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>

          {/* INFORMATION CONTENT */}
          <div className="min-h-0 flex-1 px-6 sm:px-8 py-4 md:py-8 lg:px-10 ">
            <AnimatePresence mode="wait">
              {activeInfo === "Taste" && (
                <InfoPanel key="Taste" title="Taste">
                  <h1 className="header max-w-lg text-3xl leading-7 text-ink dark:text-lightWhite">
                    {product.origin}{" "}
                    <span className="italic text-red">{product.process}</span>
                  </h1>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-soil dark:text-lightWhite">
                    {product.description}
                  </p>

                  {product.flavors?.length > 0 && (
                    <div className="mt-7">
                      <div className="flex flex-wrap gap-2">
                        {product.flavors.map((flavor) => (
                          <span
                            key={flavor}
                            className="rounded-full font-semibold border border-ink/20 dark:border-lightWhite/30 px-3 py-2 text-[10px] tracking-[0.02em] text-ink/65 dark:text-lightWhite/70"
                          >
                            {flavor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </InfoPanel>
              )}

              {activeInfo === "Origin" && (
                <InfoPanel key="Origin" title="Origin">
                  <div className="max-w-lg">
                    <h3 className="header text-3xl leading-none  md:text-3xl dark:text-lightWhite">
                      Know your origin.
                    </h3>

                    {product.info?.origin?.blurb && (
                      <p className="mt-5 text-sm leading-7 text-ink/80 dark:text-lightWhite">
                        {product.info.origin.blurb}
                      </p>
                    )}

                    <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                      <InfoValue
                        label="Altitude"
                        value={product.altitude}
                        dark
                      />
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

              {activeInfo === "Ritual" && (
                <InfoPanel key="Ritual" title="Ritual">
                  {product.ritual ? (
                    <RitualPanel ritual={product.ritual} />
                  ) : (
                    <p className="text-sm font-light leading-7 text-ink/60 dark:text-lightWhite">
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
      <div className="shrink-0 bg-lightWhite dark:bg-darkSoil px-6 py-2 text-ink transition-colors duration-300  dark:text-lightWhite sm:px-8 lg:px-10 lg:py-4">
        {/* PLAN */}

        <div className="flex justify-between text-center gap-8 relative  ">
          <div className="w-full ">
            <div className=" text-start">
              <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75 dark:text-darkLightCream">
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
              <span className=" text-[10px] uppercase tracking-[0.15em] text-ink/75 text-left dark:text-darkLightCream ">
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
                          ? " bg-red dark:bg-deepRed text-lightCream dark:border-deepRed"
                          : "border-ink/10 text-ink   cursor-pointer dark:text-darkLightCream dark:border-lightWhite/25"
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
            <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75 dark:text-darkLightCream">
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
                          ? " bg-red text-lightCream dark:border-deepRed"
                          : "border-ink/10 text-in dark:text-lightWhite dark:border-lightCream/25 cursor-pointer"
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
            <span className="text-[10px] uppercase tracking-[0.15em] text-ink/75 dark:text-darkLightCream">
              Quantity
            </span>

            <div className="flex items-baseline  gap-2 border border-black/10 dark:border-white/20 rounded-full text-ink dark:text-lightWhite">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-7 w-7 items-center justify-center text-sm cursor-pointer "
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
      <div className="shrink-0 border-t border-ink/20 dark:border-lightWhite/30 bg-lightWhite dark:bg-darkSoil transition-colors duration-300  px-6 py-4 text-ink sm:px-8 lg:px-10 dark:text-lightWhite">
        <div className="flex items-center justify-between gap-5">
          {/* PRODUCT SUMMARY */}
          <div className="min-w-0">
            <p className="header truncate text-[16px] ">{product.name}</p>

            <p className=" truncate text-[10px] tracking-[0.05em] text-ink/80 dark:text-lightWhite/80">
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

                <span className="text-sm text-ink/35 line-through dark:text-lightWhite/35">
                  Rs. {originalTotal.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="header text-md text-ink dark:text-lightWhite">
                Rs. {originalTotal.toLocaleString()}
              </span>
            )}

            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full bg-red px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-lightWhite transition-all duration-300 hover:bg-hill active:bg-hill active:scale-[0.98] md:px-4 cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION */}
      <AnimatePresence>
        {added && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-1/2 top-24 z-[120] -translate-x-1/2 rounded-md bg-hill px-6 py-4 text-center text-[8px] uppercase tracking-[0.16em] text-lightCream shadow-2xl"
          >
            Added to Cart
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
  <div className="rounded-2xl border border-ink/5 bg-raised px-4 py-4 transition-colors duration-300 hover:border-ink/10 hover:bg-lightWhite dark:border-lightCream/10 dark:bg-ink/20 dark:hover:border-lightCream/15 dark:hover:bg-ink/30 sm:px-5 sm:py-5">
    <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-stone dark:text-lightCream/45">
      {label}
    </span>

    <p className="mt-2 text-sm font-medium leading-5 tracking-[-0.01em] text-ink dark:text-lightCream/90">
      {value || "—"}
    </p>
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
        <h3 className="header text-3xl leading-none tracking-[0.01em] dark:text-lightWhite ">
          {ritual.method}
        </h3>
      </div>

      {/* BREW VARIABLES */}
      <div className="mx-auto mt-5 flex gap-10 justify-center max-w-sm gap-y-4 sm:grid-cols-4   ">
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
  <div className="flex flex-col items-center text-center ">
    <p className="text-lg tracking-[-0.03em] text-ink dark:text-lightWhite">
      {value}
    </p>
    <p className="text-[7px] uppercase tracking-[0.2em] text-ink/75 dark:text-lightWhite/55">
      {label}
    </p>
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
            className="text-soil/30 dark:text-ivory/55"
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
            className="text-red dark:text-deepRed transition-[stroke-dashoffset] duration-500"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
        </svg>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[7px] font-medium uppercase tracking-[0.24em] text-ink/35 dark:text-lightCream/45">
            {isComplete ? "Brew complete" : currentStep?.label || "Bloom"}
          </span>

          <span className="header mt-1 text-4xl leading-none tracking-[-0.05em] text-ink sm:text-5xl dark:text-lightCream">
            {formatTime(elapsed)}
          </span>

          {!isComplete && currentStep?.water && (
            <span className="mt-2 text-[8px] uppercase tracking-[0.18em] text-ink/40 dark:text-lightCream/40">
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
            className="min-w-[112px] rounded-full bg-red dark:bg-deepRed px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-lightCream transition-all duration-300 hover:bg-ink  active:scale-[0.97] cursor-pointer"
          >
            {isComplete ? "Brew Again" : elapsed > 0 ? "Resume" : "Start Brew"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePause}
            className="min-w-[112px] rounded-full bg-red dark:bg-deepRed px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-lightCream transition-all duration-300 hover:bg-ink active:scale-[0.97] cursor-pointer"
          >
            Pause
          </button>
        )}

        <button
          type="button"
          onClick={handleReset}
          className="rounded-full border border-ink/10 dark:border-lightCream/40 px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-ink/85 dark:text-lightCream/85 transition-all duration-300 hover:border-ink/25 dark:hover:border-lightCream/25 hover:text-ink dark:hover:text-lightCream cursor-pointer active:scale-[0.97]"
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
  const [method, setMethod] = useState("western");
  const [steepIndex, setSteepIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const steepTimes = [
    { number: 1, duration: 180 },
    { number: 2, duration: 240 },
    { number: 3, duration: 300 },
  ];

  const currentSteep = steepTimes[steepIndex];
  const totalTime = currentSteep.duration;

  const progress = Math.min(elapsed / totalTime, 1);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;

    return `${minutes}:${String(remaining).padStart(2, "0")}`;
  };

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

  const handleMethodChange = (nextMethod) => {
    setMethod(nextMethod);
    setSteepIndex(0);
    setElapsed(0);
    setRunning(false);
  };

  const handleSteepChange = (index) => {
    setSteepIndex(index);
    setElapsed(0);
    setRunning(false);
  };

  const handleStart = () => {
    if (elapsed >= totalTime) {
      setElapsed(0);
    }

    setRunning(true);
  };

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  const isComplete = elapsed >= totalTime;

  return (
    <div className="mx-auto w-full max-w-md">
      {/* METHOD */}
      <div className="flex flex-col items-center">
        <div className="mt-3  justify-center items-center  rounded-full bg-ink/5 dark:bg-cream/15 p-1 w-fit ">
          {[
            { id: "western", label: "Western" },
            { id: "gongfu", label: "Gongfu" },
          ].map((option) => {
            const active = method === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleMethodChange(option.id)}
                className={`rounded-full  py-2.5 px-4 text-[12px] font-semibold  tracking-[0.02em] transition-all duration-300 ${
                  active
                    ? "bg-lightWhite text-ink  shadow-sm"
                    : "text-ink/40 dark:text-lightWhite hover:text-ink cursor-pointer"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* STEEP OPTIONS */}
      <div className="mt-6">
        <div className="mt-3 flex justify-center gap-5 ">
          {steepTimes.map((steep, index) => {
            const active = steepIndex === index;

            return (
              <button
                key={steep.number}
                type="button"
                onClick={() => handleSteepChange(index)}
                className={`rounded-4xl border py-1.5 px-3 w-fit text-center  transition-all duration-300 ${
                  active
                    ? " bg-red dark:bg-deepRed dark:border-deepRed text-lightCream"
                    : "border-ink/10 dark:border-lightCream/25 text-ink dark:text-lightWhite hover:border-ink/25 cursor-pointer"
                }`}
              >
                <p
                  className={`text-[7px] uppercase tracking-[0.18em] font-bold ${
                    active ? "text-lightCream/50" : "text-stone"
                  }`}
                >
                  {steep.number === 1
                    ? "1st"
                    : steep.number === 2
                    ? "2nd"
                    : "3rd"}
                </p>

                <p className=" text-sm">{formatTime(steep.duration)}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* TIMER */}
      <div className="mt-1 text-center">
        <div className="relative mx-auto h-48 w-48">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              className="text-soil/30 dark:text-ivory/55"
            />

            <circle
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              className="text-red dark:text-deepRed transition-[stroke-dashoffset] duration-500"
              strokeDasharray={2 * Math.PI * 82}
              strokeDashoffset={2 * Math.PI * 82 * (1 - progress)}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[7px] uppercase tracking-[0.22em] text-stone dark:text-lightWhite/55">
              {isComplete
                ? "Steep complete"
                : `${currentSteep.number}${
                    currentSteep.number === 1
                      ? "st"
                      : currentSteep.number === 2
                      ? "nd"
                      : "rd"
                  } steep`}
            </span>

            <span className="header mt-1 text-4xl leading-none tracking-[-0.04em] text-ink dark:text-lightWhite">
              {formatTime(elapsed)}
            </span>

            {!isComplete && (
              <span className="mt-2 text-[7px] uppercase tracking-[0.18em] text-ink/35 dark:text-lightWhite/55">
                {method === "western" ? "Western" : "Gongfu"}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => {
            if (isComplete) {
              setElapsed(0);
              setRunning(true);
            } else if (running) {
              setRunning(false);
            } else {
              setRunning(true);
            }
          }}
          className="min-w-[112px] rounded-full bg-red dark:bg-deepRed px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-lightCream transition-all duration-300 hover:bg-hill active:scale-[0.97]"
        >
          {isComplete
            ? "Start Again"
            : running
            ? "Pause"
            : elapsed > 0
            ? "Resume"
            : "Start Steep"}
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-full border border-ink/10 dark:border-lightCream/55 px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-ink/50 dark:text-lightCream/75 transition-all duration-300 hover:border-ink/25 hover:text-ink active:scale-[0.97]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsRight;

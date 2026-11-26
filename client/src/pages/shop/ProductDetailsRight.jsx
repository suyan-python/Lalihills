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

  const infoOptions = ["Taste", "Origin", "Ritual", "Order"];

  return (
    <div className="relative flex  max-h-[calc(100vh-100px)] max-w-2xl flex-col justify-between self-start overflow-hidden rounded-[2rem] border border-deepPurple/45 text-[#40344D] shadow-[0_20px_70px_rgba(64,52,77,0.10)] transition-colors duration-300 dark:border-[#51415F] bg-[#F6F2FB] dark:bg-[#241B2D] dark:text-[#F2EAF8] dark:shadow-[0_20px_70px_rgba(0,0,0,0.30)] my-28 ">
      {/* TOP — INFORMATION */}
      <div className="z-10 min-h-0 min-h-[420px] shrink-0 overflow-y-auto sm:min-h-[500px] ">
        <div className="flex flex-col">
          {/* TOP NAV */}
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#D7C8E4] px-6 py-5 transition-colors duration-300 dark:border-[#51415F] sm:px-8 lg:px-10">
            {/* INFO NAV */}
            <div className="min-w-0 flex-1">
              <div className="relative grid w-full max-w-lg grid-cols-4 rounded-full border border-[#D7C8E4] bg-[#D7C8E4] p-1 transition-colors duration-300 dark:border-[#51415F] dark:bg-[#30243A] sm:max-w-3xl">
                <motion.div
                  className="absolute inset-y-1 rounded-full bg-[#F8F4FB] shadow-[0_2px_8px_rgba(64,52,77,0.12)] transition-colors duration-300 dark:bg-[#493853]"
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
                    stiffness: 350,
                    damping: 30,
                  }}
                />

                {infoOptions.map((item) => {
                  const active = activeInfo === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setActiveInfo(item)}
                      className={`relative z-10 flex h-9 min-w-0 items-center justify-center rounded-full px-2 text-[9px] tracking-[0.04em] transition-colors duration-300 sm:px-4 sm:text-[12px] ${
                        active
                          ? "font-semibold text-[#40344D] dark:text-[#F2EAF8]"
                          : "cursor-pointer text-[#766A80] hover:text-[#40344D] dark:text-[#B9A9C7] dark:hover:text-[#F2EAF8]"
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
              className="flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D7C8E4] bg-[#F8F4FB] px-3 text-[8px] font-bold uppercase tracking-[0.16em] text-[#40344D] transition-all duration-300 hover:border-[#987BB2] hover:bg-[#EEE6F4] dark:border-[#51415F] dark:bg-[#30243A] dark:text-[#F2EAF8] dark:hover:border-[#B99AD8] dark:hover:bg-[#493853] sm:px-4 sm:text-[9px]"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>

          {/* INFORMATION CONTENT */}
          <div className="px-6 py-3 sm:px-8 sm:py-4 lg:px-9">
            <AnimatePresence mode="wait">
              {activeInfo === "Taste" && (
                <InfoPanel key="Taste" title="Taste">
                  <h1 className="header max-w-lg text-3xl leading-8 text-[#40344D]">
                    {product.origin}{" "}
                    <span className="italic text-[#795A9C]">
                      {product.process}
                    </span>
                  </h1>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#766A80]">
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

              {activeInfo === "Order" && (
                <InfoPanel key="Order" title="Order">
                  <OrderPanel
                    product={product}
                    isCoffee={isCoffee}
                    purchaseType={purchaseType}
                    setPurchaseType={setPurchaseType}
                    frequency={frequency}
                    setFrequency={setFrequency}
                    frequencyOptions={frequencyOptions}
                    frequencyOpen={frequencyOpen}
                    setFrequencyOpen={setFrequencyOpen}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    selectedGrind={selectedGrind}
                    setSelectedGrind={setSelectedGrind}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </InfoPanel>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* FIXED PURCHASE BAR */}
      <div className="shrink-0 border-t border-[#D7C8E4] bg-[#D7C8E4] px-6 py-5 text-[#40344D] transition-colors duration-300 dark:border-[#51415F] dark:bg-[#241B2D] dark:text-[#F2EAF8] sm:px-8 lg:px-9">
        {" "}
        <div className="flex items-center justify-between gap-5">
          {/* PRODUCT SUMMARY */}
          <div className="min-w-0">
            <p className="header truncate text-base font-bold ">
              {product.name}
            </p>
            <p className="truncate text-[12px]  text-[#766A80]">
              {selectedGrind} · {selectedSize?.grams}g · Qty {quantity}
            </p>
          </div>

          {/* PRICE + CART */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7">
            {/* <span className="header text-md">Rs. {total.toLocaleString()}</span> */}

            {purchaseType === "subscribe" ? (
              <div className="flex items-baseline gap-2">
                <span className="header text-lg font-bold text-[#40344D]">
                  Rs. {discountedTotal.toLocaleString()}
                </span>

                <span className="text-sm text-ink/35 line-through dark:text-lightWhite/35">
                  Rs. {originalTotal.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="header text-lg text-ink dark:text-lightWhite">
                NPR. {originalTotal.toLocaleString()}
              </span>
            )}

            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full bg-[#40344D] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#795A9C] active:scale-[0.97] cursor-pointer"
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
    className={`flex min-h-[42px] cursor-pointer items-center justify-center rounded-xl px-2 py-2 text-center transition-all duration-300 ${
      active
        ? "bg-[#40344D] text-white shadow-sm shadow-[#40344D]/15 dark:bg-[#B99AD8] dark:text-[#241B2D] dark:shadow-black/20"
        : "text-[#766A80] hover:bg-[#EEE6F4] hover:text-[#40344D] dark:text-[#B9A9C7] dark:hover:bg-[#493853] dark:hover:text-[#F2EAF8]"
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
        <h3 className="header text-xl md:text-3xl leading-none tracking-[0.01em] dark:text-lightWhite ">
          {ritual.method}
        </h3>
      </div>

      {/* BREW VARIABLES */}
      <div className="mx-auto mt-2 md:mt-5 flex gap-10 justify-center max-w-sm gap-y-4 sm:grid-cols-4   ">
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
    <div className="mx-auto w-full max-w-md ">
      {/* METHOD */}
      <div className="flex flex-col items-center">
        <div className="mt-2 md:mt-3 justify-center items-center  rounded-full bg-ink/5 dark:bg-cream/15 p-1 w-fit ">
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
                className={`rounded-full py-2.5 px-4 text-[12px] font-semibold  tracking-[0.02em] transition-all duration-300 ${
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
      <div className="mt-3 md:mt-6">
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
        <div className="relative mx-auto h-28 md:h-48 w-28 md:w-48">
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
            <span className="text-[5px] md:text-[7px] uppercase tracking-[0.22em] text-stone dark:text-lightWhite/55">
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

            <span className="header mt-1 text-2xl md:text-4xl leading-none tracking-[-0.04em] text-ink dark:text-lightWhite">
              {formatTime(elapsed)}
            </span>

            {!isComplete && (
              <span className="mt-2 text-[7px] uppercase tracking-[0.18em] text-ink/45 dark:text-lightWhite/55">
                {method === "western" ? "Western" : "Gongfu"}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-2 md:mt-4 flex justify-center gap-2">
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

const OrderPanel = ({
  product,
  isCoffee,
  purchaseType,
  setPurchaseType,
  frequency,
  setFrequency,
  frequencyOptions,
  frequencyOpen,
  setFrequencyOpen,
  selectedSize,
  setSelectedSize,
  selectedGrind,
  setSelectedGrind,
  quantity,
  setQuantity,
}) => {
  return (
    <div className="w-full space-y-5 text-[#40344D] dark:text-[#F2EAF8]">
      {/* PURCHASE PLAN + SIZE */}
      <div className="grid grid-cols-2 gap-5 sm:gap-8">
        {/* PURCHASE PLAN */}
        <div className="relative min-w-0">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#766A80] dark:text-[#B9A9C7]">
            Purchase plan
          </p>

          <div className="grid grid-cols-2 gap-1 rounded-2xl border border-[#D7C8E4] bg-white/65 p-1 dark:border-[#51415F] dark:bg-[#241B2D]/70">
            <PurchaseOption
              active={purchaseType === "one-time"}
              onClick={() => {
                setPurchaseType("one-time");
                setFrequencyOpen(false);
              }}
            >
              <span className="text-[10px] font-semibold">One time</span>
            </PurchaseOption>

            <PurchaseOption
              active={purchaseType === "subscribe"}
              onClick={() => {
                setPurchaseType("subscribe");
                setFrequencyOpen(true);
              }}
            >
              <span className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-semibold">Subscribe</span>
                <span className="text-[8px] font-bold tracking-wide text-[#795A9C] dark:text-[#C9AFE2]">
                  SAVE 10%
                </span>
              </span>
            </PurchaseOption>
          </div>

          {/* FREQUENCY SELECTOR */}
          <AnimatePresence>
            {purchaseType === "subscribe" && frequencyOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full z-50 mt-2 w-full min-w-[150px] rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] p-2 shadow-[0_12px_35px_rgba(64,52,77,0.16)] dark:border-[#51415F] dark:bg-[#382B43] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
              >
                <p className="px-3 pb-2 pt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#987BB2] dark:text-[#B99AD8]">
                  Delivery frequency
                </p>

                <div className="space-y-1">
                  {frequencyOptions.map((option) => {
                    const active = frequency === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setFrequency(option);
                          setFrequencyOpen(false);
                        }}
                        className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left text-[9px] font-medium transition-all duration-200 ${
                          active
                            ? "bg-[#40344D] text-white dark:bg-[#B99AD8] dark:text-[#241B2D]"
                            : "text-[#766A80] hover:bg-[#EEE6F4] hover:text-[#40344D] dark:text-[#B9A9C7] dark:hover:bg-[#493853] dark:hover:text-[#F2EAF8]"
                        }`}
                      >
                        {option}
                        {active && (
                          <span className="text-[10px] font-bold">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SUBSCRIPTION INFO */}
          <AnimatePresence mode="wait">
            {purchaseType === "subscribe" && (
              <motion.div
                key={frequency}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-2 flex items-center gap-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#795A9C] dark:bg-[#B99AD8]" />
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#795A9C] dark:text-[#C9AFE2]">
                  {frequency}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SIZE */}
        <div className="min-w-0">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#766A80] dark:text-[#B9A9C7]">
            Select size
          </p>

          <div className="flex flex-wrap gap-2">
            {product.sizeOptions?.map((size) => {
              const active = selectedSize?.grams === size.grams;

              return (
                <button
                  key={size.grams}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] cursor-pointer rounded-full border px-3 py-2.5 text-[10px] font-semibold transition-all duration-200 ${
                    active
                      ? "border-[#40344D] bg-[#40344D] text-white shadow-md shadow-[#40344D]/15 dark:border-[#B99AD8] dark:bg-[#B99AD8] dark:text-[#241B2D]"
                      : "border-[#D7C8E4] bg-white/60 text-[#766A80] hover:border-[#987BB2] hover:text-[#40344D] dark:border-[#51415F] dark:bg-[#382B43] dark:text-[#B9A9C7] dark:hover:border-[#987BB2] dark:hover:text-[#F2EAF8]"
                  }`}
                >
                  {size.grams}g
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-[#D7C8E4]/80 dark:bg-[#51415F]" />

      {/* GRIND / FORM + QUANTITY */}
      <div className="grid grid-cols-2 gap-5 sm:gap-8">
        {/* GRIND / FORM */}
        <div className="min-w-0">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#766A80] dark:text-[#B9A9C7]">
            {isCoffee ? "Choose your grind" : "Choose your form"}
          </p>

          <div className="flex flex-wrap gap-2">
            {(isCoffee ? product.grindOptions : product.formOptions)?.map(
              (option) => {
                const active = selectedGrind === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedGrind(option)}
                    className={`cursor-pointer rounded-full border px-3 py-2.5 text-[9px] font-semibold transition-all duration-200 ${
                      active
                        ? "border-[#40344D] bg-[#40344D] text-white dark:border-[#B99AD8] dark:bg-[#B99AD8] dark:text-[#241B2D]"
                        : "border-[#D7C8E4] bg-white/60 text-[#766A80] hover:border-[#987BB2] hover:text-[#40344D] dark:border-[#51415F] dark:bg-[#382B43] dark:text-[#B9A9C7] dark:hover:border-[#987BB2] dark:hover:text-[#F2EAF8]"
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
        <div className="min-w-0">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#766A80] dark:text-[#B9A9C7]">
            Quantity
          </p>

          <div className="inline-flex h-10 items-center gap-4 rounded-full border border-[#D7C8E4] bg-white/65 px-3 dark:border-[#51415F] dark:bg-[#382B43]">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="flex h-7 w-5 cursor-pointer items-center justify-center text-lg font-light text-[#766A80] transition-colors hover:text-[#40344D] disabled:cursor-not-allowed disabled:opacity-35 dark:text-[#B9A9C7] dark:hover:text-white"
            >
              −
            </button>

            <span className="min-w-4 text-center text-xs font-bold tabular-nums text-[#40344D] dark:text-[#F2EAF8]">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="flex h-7 w-5 cursor-pointer items-center justify-center text-lg font-light text-[#766A80] transition-colors hover:text-[#40344D] dark:text-[#B9A9C7] dark:hover:text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* SUBSCRIPTION NOTE */}
      {purchaseType === "subscribe" && (
        <p className="text-[9px] leading-relaxed text-[#766A80] dark:text-[#B9A9C7]">
          A little something from the hills, delivered on your chosen schedule.
        </p>
      )}
    </div>
  );
};

export default ProductDetailsRight;

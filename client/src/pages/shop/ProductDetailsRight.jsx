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

  const isCoffee = product?.type === "beans";

  const subscriptionDiscount = product?.subscriptionDiscount ?? 0.1;

  const unitPrice =
    purchaseType === "subscribe"
      ? selectedSize.price * (1 - subscriptionDiscount)
      : selectedSize.price;

  const total = unitPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart();

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 3000);
  };

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-lightWhite text-ink">
      {/* TOP — INFORMATION */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex h-full flex-col">
          {/* TOP NAV */}
          <div className="flex shrink-0 items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-8 lg:px-10">
            {/* INFO NAV */}
            <div className="flex items-center gap-5 sm:gap-7">
              {["taste", "origin", "ritual"].map((item) => {
                const active = activeInfo === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveInfo(item)}
                    className={`relative pb-1 text-[8px] uppercase tracking-[0.22em] transition-colors duration-300 sm:text-[9px] ${
                      active ? "text-ink" : "text-ink/30 hover:text-ink/60"
                    }`}
                  >
                    {item}

                    <motion.span
                      initial={false}
                      animate={{
                        scaleX: active ? 1 : 0,
                        opacity: active ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-ink"
                    />
                  </button>
                );
              })}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={onThemeToggle}
                className="text-[8px] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-ink"
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
                  <p className="max-w-lg text-sm font-light leading-7 text-ink/60">
                    {product.description}
                  </p>

                  {product.flavors?.length > 0 && (
                    <div className="mt-10">
                      <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
                        Flavour notes
                      </span>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.flavors.map((flavor) => (
                          <span
                            key={flavor}
                            className="rounded-full border border-ink/10 px-3 py-2 text-[8px] uppercase tracking-[0.12em] text-ink/60"
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
                  <div className="max-w-lg">
                    <p className="text-sm font-light leading-7 text-ink/60">
                      A good cup is less about rushing the process and more
                      about giving it the time it deserves.
                    </p>

                    <div className="mt-10 space-y-5">
                      {[
                        ["01", "Prepare", "Choose your preferred brew."],
                        ["02", "Brew", "Give the coffee time to open."],
                        ["03", "Enjoy", "Slow down and taste the difference."],
                      ].map(([number, title, description]) => (
                        <div
                          key={number}
                          className="flex gap-5 border-t border-ink/10 pt-5"
                        >
                          <span className="text-[7px] tracking-[0.2em] text-stone">
                            {number}
                          </span>

                          <div>
                            <h4 className="text-[9px] uppercase tracking-[0.2em]">
                              {title}
                            </h4>

                            <p className="mt-2 text-xs font-light leading-5 text-ink/50">
                              {description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </InfoPanel>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BOTTOM — PURCHASE */}
      <div className="shrink-0 border-t border-ink/10 bg-ivory px-6 py-7 sm:px-8 lg:px-10 lg:py-8">
        {/* PLAN */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
              Plan
            </span>

            {purchaseType === "subscribe" && (
              <span className="text-[7px] uppercase tracking-[0.2em] text-red">
                10% off
              </span>
            )}
          </div>

          <div className="mt-3 grid grid-cols-2 rounded-full bg-ink/5 p-1">
            <PurchaseOption
              active={purchaseType === "one-time"}
              onClick={() => setPurchaseType("one-time")}
            >
              One time
            </PurchaseOption>

            <PurchaseOption
              active={purchaseType === "subscribe"}
              onClick={() => setPurchaseType("subscribe")}
            >
              Subscribe
            </PurchaseOption>
          </div>
        </div>

        {/* FREQUENCY */}
        <AnimatePresence initial={false}>
          {purchaseType === "subscribe" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-5">
                <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
                  Frequency
                </span>

                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    "Weekly",
                    "Every 2 Weeks",
                    "Every 4 Weeks",
                    "Every 8 Weeks",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFrequency(option)}
                      className={`min-h-10 rounded-full border px-2 text-[7px] uppercase tracking-[0.08em] transition-all duration-300 ${
                        frequency === option
                          ? "border-ink bg-ink text-lightCream"
                          : "border-ink/10 text-ink/40 hover:border-ink/30"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FORM / GRIND + SIZE */}
        <div className="mt-6 grid grid-cols-2 gap-5">
          {/* GRIND */}
          <div>
            <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
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
                      className={`rounded-full border px-3 py-2 text-[7px] uppercase tracking-[0.12em] transition-all duration-300 ${
                        active
                          ? "border-ink bg-ink text-lightCream"
                          : "border-ink/10 text-ink/40 hover:border-ink/30"
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
            <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
              Size
            </span>

            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizeOptions?.map((size) => {
                const active = selectedSize?.size === size.size;

                return (
                  <button
                    key={size.size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-3 py-2 text-[7px] uppercase tracking-[0.12em] transition-all duration-300 ${
                      active
                        ? "border-ink bg-ink text-lightCream"
                        : "border-ink/10 text-ink/40 hover:border-ink/30"
                    }`}
                  >
                    {size.size}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* QUANTITY */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
            Quantity
          </span>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 text-sm"
            >
              −
            </button>

            <span className="min-w-4 text-center text-xs">{quantity}</span>

            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 text-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* FIXED PURCHASE BAR */}
      <div className="shrink-0 border-t border-ink/10 bg-ink px-6 py-4 text-lightCream sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-5">
          {/* PRODUCT SUMMARY */}
          <div className="min-w-0">
            <p className="truncate text-[9px] uppercase tracking-[0.15em]">
              {product.name}
            </p>

            <p className="mt-1 truncate text-[7px] uppercase tracking-[0.15em] text-lightCream/40">
              {selectedGrind} · {selectedSize?.size} · Qty {quantity}
            </p>
          </div>

          {/* PRICE + CART */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7">
            <span className="text-sm">Rs. {total.toLocaleString()}</span>

            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full bg-lightCream px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-cream active:scale-[0.98] sm:px-6"
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
    <span className="text-[7px] uppercase tracking-[0.4em] text-stone">
      {title}
    </span>

    <div className="mt-8">{children}</div>
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
    className={`rounded-full py-2.5 text-[8px] uppercase tracking-[0.16em] transition-all duration-300 ${
      active ? "bg-ink text-lightCream" : "text-ink/40 hover:text-ink"
    }`}
  >
    {children}
  </button>
);

export default ProductDetailsRight;

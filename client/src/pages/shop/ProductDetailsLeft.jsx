import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoastLevel from "./RoastLevel";
import OxidationLevel from "./OxidationLevel";

const ProductDetailsLeft = ({
  product,
  productType,
  setProductType,
  origins = [],
  selectedOrigin,
  setSelectedOrigin,
}) => {
  if (!product) return null;

  const isBeans = productType === "beans";

  return (
    <section className="relative flex h-dvh min-h-[620px] w-full overflow-hidden bg-ivory text-ink">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT — PRODUCT IMAGE */}
        <div className="relative h-[58dvh] min-h-[420px] overflow-hidden bg-cream lg:h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={product.image}
              src={product.image}
              alt={product.name}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* BEANS / LEAVES TOGGLE */}
          <div className="absolute right-5 top-5 z-10 sm:right-7 sm:top-7 lg:right-8 lg:top-8">
            <div className="flex rounded-full border border-lightCream/30 bg-ink/20 p-1 backdrop-blur-md">
              {[
                { id: "beans", label: "Beans" },
                { id: "leaves", label: "Leaves" },
              ].map((option) => {
                const active = productType === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setProductType(option.id)}
                    className={`rounded-full px-4 py-2 text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-500 sm:px-5 ${
                      active
                        ? "bg-lightCream text-ink"
                        : "text-lightCream/70 hover:text-lightCream"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* IMAGE INDEX / TYPE */}
          <div className="absolute bottom-5 left-5 z-10 sm:bottom-7 sm:left-7 lg:bottom-8 lg:left-8">
            <span className="text-[7px] uppercase tracking-[0.35em] text-lightCream/60">
              {isBeans ? "Coffee" : "Tea"}
            </span>
          </div>
        </div>

        {/* RIGHT — PRODUCT INFORMATION */}
        <div className="flex h-[42dvh] min-h-[300px] flex-col overflow-y-auto bg-ivory lg:h-full lg:min-h-0">
          <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14">
            {/* ORIGIN */}
            <div>
              <span className="text-[7px] uppercase tracking-[0.4em] text-stone">
                Origin
              </span>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {origins.map((origin) => {
                  const active = selectedOrigin === origin;

                  return (
                    <button
                      key={origin}
                      type="button"
                      onClick={() => setSelectedOrigin(origin)}
                      className={`relative pb-1 text-left text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                        active ? "text-ink" : "text-ink/30 hover:text-ink/60"
                      }`}
                    >
                      {origin}

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
            </div>

            {/* PRODUCT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={product._id || product.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-auto pt-16 lg:pt-20"
              >
                {/* PRODUCT NAME */}
                <h1 className="header max-w-xl text-[clamp(3rem,5vw,5.5rem)] uppercase leading-[0.82] tracking-[-0.06em]">
                  {product.name}
                </h1>

                {/* FLAVOURS */}
                {product.flavors?.length > 0 && (
                  <div className="mt-8">
                    <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
                      Flavour
                    </span>

                    <p className="mt-2 max-w-md text-sm font-light leading-6 text-ink/60">
                      {product.flavors.join(" · ")}
                    </p>
                  </div>
                )}

                {/* ROAST / OXIDATION */}
                <div className="mt-8 border-t border-ink/10 pt-6">
                  {isBeans ? (
                    <RoastLevel roast={product.roastLevel} />
                  ) : (
                    <OxidationLevel oxidation={product.oxidation} />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsLeft;

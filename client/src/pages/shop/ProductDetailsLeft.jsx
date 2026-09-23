import { AnimatePresence, motion } from "framer-motion";
import RoastLevel from "./RoastLevel";
import OxidationLevel from "./OxidationLevel";

const ProductDetailsLeft = ({
  product,
  productType,
  setProductType,
  productOptions = [],
  setCurrentProduct,
}) => {
  const isBeans = productType === "beans";

  if (!product) return null;

  return (
    <section className="relative h-dvh min-h-[620px] w-full overflow-hidden bg-ink text-lightCream">
      {/* PRODUCT IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={product.image}
          src={product.image}
          alt={product.name}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* IMAGE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/25" />

      {/* BEANS / LEAVES */}
      <div className="absolute right-5 top-5 z-[100] pointer-events-auto sm:right-7 sm:top-7 lg:right-8 lg:top-8">
        <div className="flex rounded-full border border-lightCream/20 bg-ink/55 p-1 ">
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
                className={`cursor-pointer rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500  ${
                  active
                    ? "bg-red text-lightWhite"
                    : "text-lightCream/60 hover:text-lightCream"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="max-w-2xl">
          {/* PRODUCT OPTIONS */}
          <div className="mb-7">
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {productOptions.map((option) => {
                const active = product?._id === option?._id;

                return (
                  <button
                    key={option._id}
                    type="button"
                    onClick={() => setCurrentProduct(option)}
                    style={
                      active
                        ? { backgroundColor: option.imageColor }
                        : undefined
                    }
                    className={`rounded-full border px-3 py-1 text-[10px] tracking-[0.02em] transition-all duration-300 ${
                      active
                        ? "border-transparent text-ink"
                        : "cursor-pointer border-lightWhite/75 bg-ink/75 text-lightCream/85"
                    }`}
                  >
                    {option.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product._id || product.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* PRODUCT NAME */}
              <h1 className="header max-w-3xl text-[clamp(3rem,5vw,5.5rem)] uppercase leading-[0.82] tracking-[-0.06em]">
                {product.name}
              </h1>

              {/* FLAVOURS */}
              {product.flavors?.length > 0 && (
                <p className="mt-5 max-w-md text-[10px] font-light leading-5 text-lightCream/65 sm:text-xs sm:leading-6">
                  {product.flavors.join(" · ")}
                </p>
              )}

              {/* ROAST / OXIDATION */}
              <div className="mt-6 border-t border-lightCream/15 pt-5">
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
    </section>
  );
};

export default ProductDetailsLeft;

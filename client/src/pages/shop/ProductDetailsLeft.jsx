import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Leaf, MapPin, Mountain, Sparkles } from "lucide-react";
import RoastLevel from "./RoastLevel";
import OxidationLevel from "./OxidationLevel";

const ProductDetailsLeft = ({
  product,
  productType,
  setProductType,
  productOptions = [],
  setCurrentProduct,
}) => {
  if (!product) return null;

  const isBeans = productType === "beans";

  const filteredOptions = productOptions.filter((option) =>
    isBeans ? option.category === "coffee" : option.category === "tea",
  );

  const productDescription = product.shortDescription || product.description;

  const productTypeLabel =
    product.type ||
    (isBeans ? "Specialty Coffee" : product.teaType || "Specialty Tea");

  const productTaste =
    product.taste || product.flavors?.join(", ") || "Not specified";

  const productHeight = product.altitude || product.height || "Not specified";

  const details = [
    {
      label: "Origin",
      value: product.origin,
      icon: MapPin,
    },
    {
      label: "Product Type",
      value: productTypeLabel,
      icon: isBeans ? Coffee : Leaf,
    },
    {
      label: isBeans ? "Roast Level" : "Oxidation",
      value: isBeans
        ? product.roastLevel
          ? `${product.roastLevel}/5`
          : null
        : product.oxidation || null,
      icon: Sparkles,
    },
    {
      label: "Taste Profile",
      value: productTaste,
      icon: Coffee,
    },
    {
      label: "Grown At",
      value: productHeight,
      icon: Mountain,
    },
  ].filter((detail) => detail.value);

  return (
    <section className="relative h-dvh min-h-[700px] w-full overflow-hidden bg-[#241B2D] text-[#F8F4FB]">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={product.image}
          className="absolute inset-0 overflow-hidden"
        >
          {/* Blurred background layer */}
          <motion.img
            src={product.image}
            alt=""
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.4, scale: 1.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl"
          />

          {/* Main background image */}
          <motion.img
            src={product.image}
            alt={product.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.7 },
              scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Soft dark overlay */}
          <div className="absolute inset-0 bg-[#241B2D]/25" />
        </motion.div>
      </AnimatePresence>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#241B2D]/95 via-[#241B2D]/65 to-[#241B2D]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#241B2D]/95 via-transparent to-[#241B2D]/40" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
        {/* Top: Beans / Leaves Toggle */}
        <div className="flex justify-end">
          <div className="relative flex rounded-full border border-white/20 bg-[#241B2D]/75 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            {[
              { id: "beans", label: "Coffee Beans", icon: Coffee },
              { id: "leaves", label: "Tea Leaves", icon: Leaf },
            ].map((option) => {
              const active = productType === option.id;
              const Icon = option.icon;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setProductType(option.id)}
                  className={`relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition-all duration-300 sm:px-5 sm:text-[10px] ${
                    active ? "text-[#40344D]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="product-type-indicator"
                      className="absolute inset-0 rounded-full bg-[#E8DDF1]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <Icon
                    size={15}
                    className={`relative z-10 ${
                      active ? "text-[#795A9C]" : ""
                    }`}
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Content */}
        <div className="ml-auto flex w-full max-w-[540px] flex-1 flex-col justify-center pt-8">
          {/* Origin Selection */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D7C8E4]">
                Discover the {isBeans ? "origins" : "tea collection"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filteredOptions.map((option) => {
                const active = product._id === option._id;
                const label = isBeans
                  ? option.origin
                  : option.teaType || option.origin;

                return (
                  <button
                    key={option._id}
                    type="button"
                    onClick={() => setCurrentProduct(option)}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-[10px] font-semibold transition-all duration-300 ${
                      active
                        ? "border-[#D7C8E4] bg-[#E8DDF1] text-[#40344D] shadow-[0_4px_18px_rgba(0,0,0,0.15)]"
                        : "border-white/25 bg-[#241B2D]/45 text-white/75 backdrop-blur-md hover:border-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Roast / Oxidation */}
          <div className="mt-6 max-w-sm">
            {/* <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D7C8E4]">
              {isBeans ? "Roast character" : "Oxidation character"}
            </p> */}

            {isBeans ? (
              <RoastLevel
                roastLevel={product.roastLevel}
                products={filteredOptions}
                onProductChange={setCurrentProduct}
              />
            ) : (
              <OxidationLevel
                oxidation={product.oxidation}
                products={filteredOptions}
                onProductChange={setCurrentProduct}
              />
            )}
          </div>

          {/* Product Feature Card */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={product._id || product.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-7 min-h-[210px] overflow-hidden rounded-2xl border border-white/15 bg-[#241B2D] shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:min-h-[235px]"
            >
              {/* Card Background */}
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Card Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#241B2D]/95 via-[#241B2D]/70 to-[#241B2D]/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241B2D]/65 to-transparent" />

              {/* Card Content */}
              <div className="relative z-10 flex min-h-[210px] max-w-[85%] flex-col justify-end p-5 sm:min-h-[235px] sm:p-6">
                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#D7C8E4]">
                  {isBeans ? "Specialty Coffee" : "Nepali Specialty Tea"}
                  {isBeans && product.roastLevel
                    ? ` · Roast ${product.roastLevel}/5`
                    : ""}
                </p>

                <h2 className="header mt-3 text-3xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl">
                  {product.name}
                </h2>

                {productDescription && (
                  <p className="mt-3 max-w-sm text-[10px] leading-5 text-white/80 sm:text-xs sm:leading-6">
                    {productDescription}
                  </p>
                )}
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-5 right-5 z-10 h-10 w-10 rounded-full border border-white/25 sm:bottom-6 sm:right-6">
                <div className="absolute inset-2 rounded-full border border-white/40" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Product Information */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${product._id}-information`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              {/* Origin */}
              {product.origin && (
                <div className="mb-5 flex items-center gap-2">
                  <MapPin size={13} className="shrink-0 text-[#C8B2DF]" />

                  <p className="text-[10px] font-medium text-white/80">
                    From{" "}
                    <span className="font-semibold text-white">
                      {product.origin}
                    </span>
                  </p>
                </div>
              )}

              {/* Flavour Notes */}
              {product.flavors?.length > 0 && (
                <div className="mb-5">
                  <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#C8B2DF]">
                    Tasting Notes
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {product.flavors.map((flavor) => (
                      <span
                        key={flavor}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-medium text-white/85 backdrop-blur-sm"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Attributes */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {details
                  .filter((detail) => detail.label !== "Origin")
                  .map((detail) => {
                    const DetailIcon = detail.icon;

                    return (
                      <div
                        key={detail.label}
                        className="rounded-xl border border-white/15 bg-[#241B2D]/40 p-3 backdrop-blur-md"
                      >
                        <div className="flex items-center gap-1.5">
                          <DetailIcon
                            size={12}
                            className="shrink-0 text-[#C8B2DF]"
                          />

                          <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/55">
                            {detail.label}
                          </p>
                        </div>

                        <p className="mt-2 text-[10px] font-semibold leading-relaxed text-white/90">
                          {detail.value}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsLeft;

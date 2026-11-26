import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Gift, Leaf, MapPin, Mountain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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
    <section className="relative w-full overflow-visible bg-[#ECE6F4] text-[#40344D] transition-colors duration-300 dark:bg-[#1D1625] dark:text-[#F2EAF8]">
      {" "}
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
              scale: { duration: 1.2, ease: [0.22, 1, 1, 1] },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Soft dark overlay */}
          <div className="absolute inset-0 bg-[#241B2D]/45" />

          {/* Product Character */}
          <AnimatePresence mode="wait">
            {product.characterImage && (
              <motion.img
                key={product.characterImage}
                src={product.characterImage}
                alt={product.name}
                initial={{ opacity: 0, x: -45, y: 20, scale: 0.94 }}
                animate={{ opacity: 0.75, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 z-10 h-[75%] w-[48%] object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.3)] sm:h-[88%] sm:w-[42%]"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#241B2D]/95 via-[#241B2D]/65 to-[#241B2D]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#241B2D]/95 via-transparent to-[#241B2D]/40" />
      {/* Beans / Leaves Toggle */}
      <div className="absolute left-1/2 top-5 z-20 flex -translate-x-1/2 items-center gap-2 lg:left-[calc(100%_+_1.5rem)] lg:top-10 lg:-translate-y-1/2">
        <div className="relative isolate flex rounded-full border border-white/20 bg-[#241B2D]/75 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          {/* Sliding background */}
          <motion.div
            className="absolute bottom-1.5 top-1.5 left-1.5 z-0 w-[calc(50%-6px)] rounded-full bg-[#E8DDF1]"
            animate={{
              x: productType === "leaves" ? "100%" : "0%",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 26,
              mass: 0.8,
            }}
          />

          {[
            { id: "beans", label: "Beans", icon: Coffee },
            { id: "leaves", label: "Leaves", icon: Leaf },
          ].map((option) => {
            const active = productType === option.id;
            const Icon = option.icon;

            return (
              <motion.button
                key={option.id}
                type="button"
                onClick={() => setProductType(option.id)}
                whileTap={{ scale: 0.96 }}
                className={`relative z-10 flex min-w-[125px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 sm:min-w-[145px] sm:px-5 sm:text-[10px] ${
                  active ? "text-[#40344D]" : "text-white/60 hover:text-white"
                }`}
              >
                <motion.span
                  animate={{
                    scale: active ? 1.08 : 1,
                    rotate: active ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={15} className={active ? "text-[#795A9C]" : ""} />
                </motion.span>

                <span>{option.label}</span>
              </motion.button>
            );
          })}
        </div>
        <Link
          to="/gift"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-[#D9A9B9] bg-gradient-to-br from-[#F6DCE7] via-[#EED5E8] to-[#E4D9F2] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-[#68445F] shadow-[0_8px_28px_rgba(126,76,111,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C98DA8] hover:shadow-[0_12px_32px_rgba(126,76,111,0.25)] sm:px-6 sm:text-[10px] dark:border-[#8E647F] dark:from-[#503247] dark:via-[#49334F] dark:to-[#39304F] dark:text-[#F6DCE7] dark:hover:border-[#C18EAE]"
        >
          {/* Decorative glow */}
          <span className="absolute -right-3 -top-4 h-12 w-12 rounded-full bg-white/40 blur-xl transition-all duration-500 group-hover:scale-150 dark:bg-[#D9A9B9]/20" />

          {/* Gift icon */}
          <motion.span
            whileHover={{ rotate: [-8, 8, -6, 0], scale: 1.12 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Gift size={15} strokeWidth={1.8} />
          </motion.span>

          <span className="relative">Gifts</span>

          {/* Ribbon accent */}
          <span className="relative h-1.5 w-1.5 rounded-full bg-[#B87999] dark:bg-[#D9A9B9] animate-bounce" />
        </Link>
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9 ">
        {/* Product Content */}
        <div className="ml-auto flex w-full max-w-[540px] flex-1 flex-col justify-center  ">
          {/* Origin Selection */}
          <div>
            <div className="mb-3 flex items-center justify-between ">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D7C8E4]">
                Discover the {isBeans ? "origins" : "tea collection"}
              </p>
            </div>
            <div className="w-full">
              <div className="relative grid w-full grid-cols-2 gap-1 rounded-full border border-[#D7C8E4] bg-[#D7C8E4]/70 p-1 sm:flex sm:w-fit sm:flex-wrap sm:rounded-full">
                <motion.div
                  className="absolute inset-y-1 rounded-full bg-[#F8F4FB] shadow-[0_3px_14px_rgba(121,90,156,0.22)]"
                  style={{
                    width: `calc((100% - 8px) / ${filteredOptions.length})`,
                  }}
                  animate={{
                    left: `calc(4px + ${filteredOptions.findIndex(
                      (option) => option._id === product._id,
                    )} * ((100% - 8px) / ${filteredOptions.length}))`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />

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
                      className={`relative z-10 flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.06em] transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:text-[11px] text-[#40344D] ${
                        active ? "" : "cursor-pointer  hover:text-[#40344D]/75"
                      }`}
                    >
                      <span className="relative">
                        {label}
                        {active && (
                          <motion.span
                            layoutId="origin-indicator"
                            className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#987BB2]"
                          />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Roast / Oxidation */}
          <div className="mt-6 max-w-sm">
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
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-4 min-h-[320px] overflow-hidden rounded-2xl border border-white/15 bg-[#241B2D] shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:min-h-[360px]"
            >
              {/* Card Background */}
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Subtle image tint */}
              <div className="absolute inset-0 bg-[#241B2D]/10" />

              {/* Bottom text gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241B2D] via-[#241B2D]/75 via-35% to-transparent" />

              {/* Additional bottom depth */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#241B2D]/70 to-transparent" />

              {/* Card Content */}
              <div className="relative z-10 flex min-h-[320px] max-w-[90%] flex-col justify-end px-6 pb-3 sm:min-h-[360px] sm:max-w-[85%] sm:px-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D7C8E4]">
                  {isBeans
                    ? Number(product.roastLevel) <= 2
                      ? "Light Roast"
                      : Number(product.roastLevel) === 3
                      ? "Medium Roast"
                      : "Dark Roast"
                    : "Nepali Specialty Tea"}
                </p>

                <h2 className="header mt-3 text-3xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl">
                  {product.name}
                </h2>

                {productDescription && (
                  <p className="mt-2 max-w-md text-[11px] leading-6 text-white/80 sm:text-sm sm:leading-7">
                    {productDescription}
                  </p>
                )}
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
              {/* Flavour Notes */}
              {product.flavors?.length > 0 && (
                <div className="mb-5">
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

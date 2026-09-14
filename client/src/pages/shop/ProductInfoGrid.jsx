import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Droplets,
  Mountain,
  Sprout,
  Sun,
  Wheat,
  X,
} from "lucide-react";

const FIELD_CONFIG = [
  { key: "origin", label: "Origin" },
  { key: "altitude", label: "Altitude" },
  { key: "process", label: "Process" },
  { key: "variety", label: "Variety" },
  { key: "harvest", label: "Harvest" },
  { key: "roast", label: "Roast" },
];

const FIELD_ICONS = {
  origin: Mountain,
  altitude: Mountain,
  process: Droplets,
  variety: Sprout,
  harvest: Wheat,
  roast: Sun,
};

function resolveField(product, key) {
  if (product.info?.[key]) return product.info[key];

  switch (key) {
    case "origin":
      return product.origin ? { value: product.origin } : null;

    case "altitude":
      return product.altitude ? { value: `${product.altitude} m` } : null;

    case "process":
      return product.process ? { value: product.process } : null;

    case "roast":
      return product.roastLevel ? { value: `${product.roastLevel}/5` } : null;

    default:
      return null;
  }
}

const InfoTile = ({ number, label, value, hasBlurb, onClick }) => {
  const content = (
    <div className="relative flex h-full min-h-[155px] flex-col overflow-hidden">
      {/* top row */}
      <div className="flex items-baseline justify-between">
        <span className="text-[8px] font-medium tracking-[0.18em] text-ink/55">
          {number}
        </span>

        <span className="flex h-8 w-8 items-center justify-center border border-ink/10  text-ink/35 transition-all duration-500 group-hover:border-red/30 group-hover:bg-red group-hover:text-lightCream">
          <ArrowUpRight
            size={13}
            strokeWidth={1.1}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>

      {/* content */}
      <div className="mt-auto">
        <span className="block text-[7px] font-medium uppercase tracking-[0.35em] text-stone">
          {label}
        </span>

        <span className="mt-2 block max-w-[90%] text-[15px] uppercase leading-[1.05] tracking-[-0.01em] text-ink sm:text-base">
          {value}
        </span>
      </div>

      {/* hover accent */}
      <span className="pointer-events-none absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-red/5 opacity-0 transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />
    </div>
  );

  if (!hasBlurb) {
    return (
      <div className="relative min-h-[125px] border-b border-ink/10 px-4 py-5 sm:px-5 lg:px-6">
        {content}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative min-h-[125px] cursor-pointer border-b border-ink/10 px-4 py-5 text-left transition-colors duration-500 hover:bg-ink/[0.025] sm:px-5 lg:px-6"
    >
      {content}
    </button>
  );
};

const ProductInfoGrid = ({ product }) => {
  const [activeKey, setActiveKey] = useState(null);

  const fields = FIELD_CONFIG.map(({ key, label }) => ({
    key,
    label,
    data: resolveField(product, key),
  })).filter(({ data }) => data);

  const active = fields.find((field) => field.key === activeKey);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveKey(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <section className="">
        <div className="mx-auto max-w-[1600px]">
          {product.flavors?.length > 0 && (
            <div className="">
              <div className=" flex flex-wrap gap-4  justify-center items-center">
                {product.flavors.map((flavor) => (
                  <div key={flavor} className="group/flavor relative">
                    {/* Solid offset shadow */}
                    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-ink transition-transform duration-300 group-hover/flavor:translate-x-1.5 group-hover/flavor:translate-y-1.5" />

                    {/* Actual box */}
                    <div className="relative flex items-center gap-3 border border-ink/15 bg-lightCream px-4 py-3 transition-transform duration-300 group-hover/flavor:-translate-x-0.5 group-hover/flavor:-translate-y-0.5">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-ink/10 bg-ivory text-red">
                        <Coffee size={11} strokeWidth={1.2} />
                      </span>

                      <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-ink/85">
                        {flavor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 grid grid-cols-2 border-t border-ink/10 sm:grid-cols-3 lg:grid-cols-6">
            {fields.map(({ key, label, data }, index) => (
              <InfoTile
                key={key}
                number={String(index + 1).padStart(2, "0")}
                label={label}
                value={data.value}
                hasBlurb={Boolean(data.blurb)}
                onClick={() => setActiveKey(key)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[200] bg-ink/45 backdrop-blur-[3px]"
            onClick={() => setActiveKey(null)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col overflow-hidden bg-lightCream text-ink shadow-2xl"
            >
              {/* HEADER */}
              <div className="relative flex items-center justify-between  px-6 py-5 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-red" />

                  <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-stone">
                    In detail
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveKey(null)}
                  aria-label="Close details"
                  className="group flex h-10 w-10 cursor-pointer items-center justify-center border border-ink/10 transition-all duration-300 hover:border-red hover:bg-red hover:text-lightCream"
                >
                  <X
                    size={16}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:rotate-90"
                  />
                </button>
              </div>

              {/* CONTENT */}
              <div className="hide-scrollbar flex-1 overflow-y-auto px-6 py-10 sm:px-8 sm:py-14">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* ICON + VALUE */}
                  <div className=" flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-ink/10 bg-ivory text-red">
                      {(() => {
                        const Icon = FIELD_ICONS[active.key] || Coffee;

                        return <Icon size={25} strokeWidth={1} />;
                      })()}
                    </div>

                    <div className="pt-1">
                      <span className="block text-[8px] uppercase tracking-[0.3em] text-stone">
                        {active.label}
                      </span>

                      <h4 className="header mt-3 max-w-md text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.88] tracking-[-0.05em] text-ink">
                        {active.data.value}
                      </h4>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  {active.data.blurb && (
                    <div className="mt-12 border-t border-ink/10 pt-8">
                      <p className="mt-2 max-w-lg text-[15px] font-light leading-8 text-ink/85">
                        {active.data.blurb}
                      </p>
                    </div>
                  )}

                  {/* VISUAL DETAIL BLOCK */}
                  <div className="mt-12 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10">
                    <div className="bg-ivory p-5 sm:p-6">
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                        Detail
                      </span>

                      <span className="mt-3 block text-[10px] uppercase tracking-[0.08em] text-ink">
                        {active.label}
                      </span>
                    </div>

                    <div className="bg-soil p-5 sm:p-6">
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-lightWhite">
                        Origin
                      </span>

                      <span className="mt-3 block text-[10px] uppercase tracking-[0.08em] text-lightWhite">
                        Nepal
                      </span>
                    </div>
                  </div>

                  {/* QUOTE / BRAND MOMENT */}
                  <div className="mt-16 border-l border-red pl-5 bg-lightWhite py-3">
                    <p className="max-w-sm text-sm font-light italic leading-7 text-ink/55">
                      “Every detail has a role in shaping what eventually
                      reaches your cup.”
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* FOOTER */}
              <div className="border-t border-ink/10 px-6 py-5 sm:px-8">
                <button
                  type="button"
                  onClick={() => setActiveKey(null)}
                  className="group flex w-full cursor-pointer items-center justify-between text-left"
                >
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.35em] text-ink/85 transition-colors duration-300 group-hover:text-red">
                      Back to details
                    </span>

                    <span className="mt-1 block text-[7px] uppercase tracking-[0.25em] text-ink/50">
                      Close this view
                    </span>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center border border-ink/10 transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-lightCream">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.1}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductInfoGrid;

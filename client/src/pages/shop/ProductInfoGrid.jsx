import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// Field order + labels for the grid. A field only renders if resolveField
// finds a value for it on the product — missing fields are skipped rather
// than shown empty.
const FIELD_CONFIG = [
    { key: "origin", label: "Origin" },
    { key: "altitude", label: "Altitude" },
    { key: "process", label: "Process" },
    { key: "variety", label: "Variety" },
    { key: "harvest", label: "Harvest" },
    { key: "roast", label: "Roast" },
];

// Prefers the richer `product.info[key]` shape ({ value, blurb }) when
// present. Falls back to the flat legacy fields already on the product
// (origin, altitude, process, roastLevel) so this drops in without
// requiring every product to be re-written first — those fallback tiles
// just won't be clickable since they have no blurb.
function resolveField(product, key)
{
    if (product.info?.[key]) return product.info[key];

    switch (key)
    {
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

const InfoTile = ({ label, value, hasBlurb, onClick }) => (
    <button
        type="button"
        onClick={hasBlurb ? onClick : undefined}
        className={`group border-b border-ink/15 px-1 py-5 text-left sm:border-r sm:px-4 ${hasBlurb ? "cursor-pointer" : "cursor-default"}`}
    >
        <span className="flex items-center justify-between gap-2">
            <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                {label}
            </span>
            {hasBlurb && (
                <span className="text-[7px] uppercase tracking-[0.2em] text-red opacity-0 transition-opacity group-hover:opacity-100">
                    More
                </span>
            )}
        </span>
        <span className="mt-2 block text-xs uppercase tracking-[0.12em] text-ink">
            {value}
        </span>
    </button>
);

const ProductInfoGrid = ({ product }) =>
{
    const [activeKey, setActiveKey] = useState(null);

    const fields = FIELD_CONFIG
        .map(({ key, label }) => ({ key, label, data: resolveField(product, key) }))
        .filter(({ data }) => data);

    const active = fields.find((field) => field.key === activeKey);

    return (
        <>
            <div className="grid grid-cols-2 border-t border-ink/15 sm:grid-cols-3 lg:grid-cols-6">
                {fields.map(({ key, label, data }) => (
                    <InfoTile
                        key={key}
                        label={label}
                        value={data.value}
                        hasBlurb={Boolean(data.blurb)}
                        onClick={() => setActiveKey(key)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6 backdrop-blur-sm"
                        onClick={() => setActiveKey(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.97 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative w-full max-w-md bg-lightCream px-8 py-10 text-ink"
                        >
                            <button
                                type="button"
                                onClick={() => setActiveKey(null)}
                                className="absolute right-5 top-5 text-ink/50 transition-colors hover:text-ink"
                            >
                                <X size={18} strokeWidth={1.2} />
                            </button>

                            <span className="text-[8px] uppercase tracking-[0.4em] text-soil">
                                {active.label}
                            </span>

                            <p className="mt-3 text-xl uppercase tracking-[-0.02em] text-ink">
                                {active.data.value}
                            </p>

                            <p className="mt-5 text-sm font-light leading-7 text-ink/65">
                                {active.data.blurb}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductInfoGrid;

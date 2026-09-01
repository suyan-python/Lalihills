import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) =>
{
    const {
        name,
        slug,
        image,
        imageColor,
        price,
        flavors = [],
        roastLevel,
        available,
    } = product;

    const roastLabels = {
        1: "Dark",
        2: "Medium Dark",
        3: "Medium",
        4: "Medium Light",
        5: "Light",
    };

    const roastName = roastLabels[roastLevel] || "Medium";
    const roastProgress = ((roastLevel || 3) / 5) * 100;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group"
        >
            <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ backgroundColor: imageColor || "#E8D1CA" }}
            >
                <motion.img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-ink/0 transition-all duration-500 group-hover:bg-ink/35" />

                <div className="absolute inset-x-4 bottom-4 z-10 grid grid-cols-2 translate-y-0 opacity-100 md:translate-y-5 md:opacity-0 md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <Link
                        to={`/shop/${product.category}/${slug}`}
                        className="flex items-center justify-center gap-2 bg-ivory/95 py-4 text-[8px] font-medium uppercase tracking-[0.25em] text-ink backdrop-blur-md transition-colors duration-300 hover:bg-ink hover:text-ivory"
                    >
                        Details
                        <ArrowUpRight size={13} strokeWidth={1.2} />
                    </Link>

                    <button
                        type="button"
                        disabled={!available}
                        className="flex items-center justify-center gap-2 bg-red py-4 text-[8px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:bg-deepRed disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Quick Buy
                        <ShoppingBag size={13} strokeWidth={1.2} />
                    </button>
                </div>

                <div className="absolute inset-x-5 bottom-20 z-10 translate-y-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <div className="border border-ivory/20 bg-ink/75 p-5 backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <span className="block text-[7px] uppercase tracking-[0.25em] text-ivory/50">
                                    Origin
                                </span>

                                <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-ivory">
                                    {product.origin || product.region || "Nepal"}
                                </span>
                            </div>

                            <div>
                                <span className="block text-[7px] uppercase tracking-[0.25em] text-ivory/50">
                                    Process
                                </span>

                                <span className="mt-1 block text-[9px] capitalize tracking-[0.08em] text-ivory">
                                    {product.process || "—"}
                                </span>
                            </div>

                            <div>
                                <span className="block text-[7px] uppercase tracking-[0.25em] text-ivory/50">
                                    Altitude
                                </span>

                                <span className="mt-1 block text-[9px] tracking-[0.08em] text-ivory">
                                    {product.altitude ? `${product.altitude} MASL` : "—"}
                                </span>
                            </div>

                            <div>
                                <span className="block text-[7px] uppercase tracking-[0.25em] text-ivory/50">
                                    Profile
                                </span>

                                <span className="mt-1 block text-[9px] capitalize tracking-[0.08em] text-ivory">
                                    {product.profile || "—"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="pt-5">
                <div className="flex items-start justify-between gap-5">
                    <Link
                        to={`/shop/${product.category}/${slug}`}
                        className="min-w-0"
                    >
                        <h3 className="text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-ink transition-colors duration-300 group-hover:text-red sm:text-xs">
                            {name}
                        </h3>
                    </Link>

                    <span className="shrink-0 text-[11px] font-medium tracking-[0.04em] text-ink sm:text-xs">
                        Rs. {price.toLocaleString()}
                    </span>
                </div>

                {flavors.length > 0 && (
                    <p className="mt-1 text-[9px] leading-5 tracking-[0.3em] text-soil sm:text-[10px] uppercase">
                        {flavors.join(" | ")}
                    </p>
                )}

                <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between">
                        <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-stone">
                            Roast Level
                        </span>

                        <span className="text-[7px] font-medium uppercase tracking-[0.18em] text-soil">
                            {roastName}
                        </span>
                    </div>

                    <div className="relative h-[3px] w-full overflow-hidden bg-ink/10">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: roastProgress / 100 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{ transformOrigin: "left" }}
                            className="absolute inset-y-0 left-0 w-full bg-red"
                        />
                    </div>

                    <div className="mt-2 flex justify-between">
                        <span className="text-[6px] uppercase tracking-[0.2em] text-stone">
                            Dark
                        </span>

                        <span className="text-[6px] uppercase tracking-[0.2em] text-stone">
                            Light
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default ProductCard;
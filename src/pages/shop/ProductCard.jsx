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


    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
        >

            {/* =================================================
                IMAGE
            ================================================= */}
            <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{
                    backgroundColor: imageColor ?? "#E8D1CA",
                }}
            >

                <motion.img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />


                {/* =================================================
                    HOVER ACTIONS
                ================================================= */}

                <div
                    className="
                absolute inset-x-4 bottom-4
                grid grid-cols-2
                overflow-hidden

                opacity-100 translate-y-0

                md:translate-y-6
                md:opacity-0

                md:transition-all
                md:duration-400
                md:ease-[cubic-bezier(0.22,1,0.36,1)]

                md:group-hover:translate-y-0
                md:group-hover:opacity-100
            "
                >

                    {/* Details */}

                    <Link
                        to={`/shop/${product.category}/${slug}`}
                        className="
                    flex items-center justify-center gap-2
                    bg-[#F8EDE8]/95
                    py-4
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#241817]
                    backdrop-blur-md

                    transition-colors
                    duration-300

                    hover:bg-[#241817]
                    hover:text-[#F8EDE8]
                "
                    >

                        <span>
                            Details
                        </span>

                        <ArrowUpRight
                            size={13}
                            strokeWidth={1.2}
                        />

                    </Link>


                    {/* =================================================
                QUICK BUY — RIGHT
            ================================================= */}

                    <button
                        type="button"
                        disabled={!available}
                        className="
                    flex items-center justify-center gap-2
                    bg-red
                    py-4
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#F8EDE8]
                    backdrop-blur-md

                    transition-colors
                    duration-300

                    hover:bg-deepRed

                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
                    >

                        <span>
                            Quick Buy
                        </span>

                        <ShoppingBag
                            size={13}
                            strokeWidth={1.2}
                        />

                    </button>

                </div>

            </div>


            {/* =================================================
                PRODUCT INFORMATION
            ================================================= */}

            <div className="pt-5">

                <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                    <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-stone">
                        ID · {product._id}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-soil">
                        {product.category}
                    </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-5">
                    <Link to={`/shop/${product.category}/${slug}`} className="min-w-0">
                        <h3 className="max-w-[100%] text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.1em] text-ink transition-colors duration-300 group-hover:text-red sm:text-[13px]">
                            {name}
                        </h3>
                    </Link>

                    <span className="shrink-0 text-[11px] font-medium tracking-[0.04em] text-ink sm:text-xs">
                        Rs. {price.toLocaleString()}
                    </span>
                </div>

                <div className="mt-5 space-y-3">

                    <div className="flex items-start gap-6">
                        <span className="w-20 shrink-0 text-[7px] font-semibold uppercase tracking-[0.2em] text-stone">
                            Origin
                        </span>

                        <span className="text-[10px] uppercase leading-4 tracking-[0.08em] text-soil">
                            {product.origin || product.region || "Nepal"}
                        </span>
                    </div>

                    {flavors.length > 0 && (
                        <div className="flex items-start gap-6">
                            <span className="w-20 shrink-0 text-[7px] font-semibold uppercase tracking-[0.2em] text-stone">
                                Tasting Notes
                            </span>

                            <p className="text-[10px] capitalize leading-5 text-soil">
                                {flavors.join(" · ")}
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4 border-t border-ink/10 pt-4">

                        <div>
                            <span className="block text-[7px] font-semibold uppercase tracking-[0.2em] text-stone">
                                Altitude
                            </span>

                            <span className="mt-1 block text-[10px] uppercase tracking-[0.08em] text-ink">
                                {product.altitude ? `${product.altitude} masl` : "—"}
                            </span>
                        </div>

                        <div>
                            <span className="block text-[7px] font-semibold uppercase tracking-[0.2em] text-stone">
                                Process
                            </span>

                            <span className="mt-1 block text-[10px] capitalize tracking-[0.08em] text-ink">
                                {product.process || "—"}
                            </span>
                        </div>

                    </div>

                    <div className="flex items-center gap-3 border-t border-ink/10 pt-4">

                        <span className="shrink-0 text-[7px] font-semibold uppercase tracking-[0.25em] text-stone">
                            Roast
                        </span>

                        <div className="relative h-px flex-1 bg-ink/10">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: roastLevel ? roastLevel / 5 : 0.5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                style={{ transformOrigin: "left" }}
                                className="absolute inset-y-0 left-0 w-full bg-red"
                            />
                        </div>

                        <span className="shrink-0 text-[7px] font-medium uppercase tracking-[0.18em] text-soil">
                            {roastName}
                        </span>

                    </div>

                </div>

            </div>

        </motion.article>
    );
};


export default ProductCard;
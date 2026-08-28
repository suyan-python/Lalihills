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
                    bg-[#B73E46]/95
                    py-4
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#F8EDE8]
                    backdrop-blur-md

                    transition-colors
                    duration-300

                    hover:bg-[#8F3038]

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


                {/* Name + Price */}

                <div className="flex items-start justify-between gap-6">

                    <Link
                        to={`/shop/${product.category}/${slug}`}
                        className="min-w-0"
                    >

                        <h3 className="text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-[#241817] transition-colors duration-300 group-hover:text-[#B73E46] sm:text-xs">
                            {name}
                        </h3>

                    </Link>


                    <span className="shrink-0 text-[11px] tracking-[0.05em] text-[#66504B] sm:text-xs">
                        Rs. {price.toLocaleString()}
                    </span>

                </div>


                {/* =================================================
                    FLAVORS
                ================================================= */}

                {flavors.length > 0 && (

                    <p className="mt-3 text-[10px] capitalize leading-5 text-[#8B625D]">
                        {flavors.join(" · ")}
                    </p>

                )}


                {/* =================================================
                    ROAST
                ================================================= */}

                <div className="mt-5 flex items-center gap-3">

                    <span className="shrink-0 text-[7px] font-semibold uppercase tracking-[0.25em] text-[#9A7B75]">
                        Roast
                    </span>


                    <div className="relative h-px flex-1 bg-[#241817]/10">

                        <motion.div
                            initial={{
                                scaleX: 0,
                            }}
                            whileInView={{
                                scaleX: roastLevel
                                    ? roastLevel / 5
                                    : 0.5,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                transformOrigin: "left",
                            }}
                            className="absolute inset-y-0 left-0 w-full bg-[#B73E46]"
                        />

                    </div>


                    <span className="shrink-0 text-[7px] uppercase tracking-[0.18em] text-[#8B625D]">
                        {roastName}
                    </span>

                </div>

            </div>

        </motion.article>
    );
};


export default ProductCard;
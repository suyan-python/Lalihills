import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../layouts/CartContext";

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

    const { addToCart } = useCart();
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
    className="group relative aspect-[4/5] overflow-hidden bg-cream"
    style={{ backgroundColor: imageColor || "#E8D1CA" }}
>
    {/* PRODUCT IMAGE */}

    <motion.img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:translate-y-[-1%]"
    />


    {/* ATMOSPHERIC OVERLAY */}

    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

    <div className="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />


    {/* TOP CORNER */}

    <div className="absolute left-5 top-5 z-10 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="h-px w-5 bg-ivory/60" />

        <span className="text-[7px] uppercase tracking-[0.35em] text-ivory/80">
            {product.category}
        </span>
    </div>


    {/* PRODUCT DETAILS */}

    <div className="absolute inset-x-5 bottom-20 z-10 translate-y-3 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ivory/25 pt-4">

            <div>
                <span className="block text-[6px] uppercase tracking-[0.3em] text-ivory/50">
                    Origin
                </span>

                <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-ivory">
                    {product.origin || product.region || "Nepal"}
                </span>
            </div>

            <div>
                <span className="block text-[6px] uppercase tracking-[0.3em] text-ivory/50">
                    Altitude
                </span>

                <span className="mt-1 block text-[9px] tracking-[0.08em] text-ivory">
                    {product.altitude ? `${product.altitude} MASL` : "—"}
                </span>
            </div>

            <div>
                <span className="block text-[6px] uppercase tracking-[0.3em] text-ivory/50">
                    Process
                </span>

                <span className="mt-1 block text-[9px] capitalize tracking-[0.08em] text-ivory">
                    {product.process || "—"}
                </span>
            </div>

            <div>
                <span className="block text-[6px] uppercase tracking-[0.3em] text-ivory/50">
                    Profile
                </span>

                <span className="mt-1 block text-[9px] capitalize tracking-[0.08em] text-ivory">
                    {product.profile || "—"}
                </span>
            </div>

        </div>
    </div>


    {/* BOTTOM ACTION */}

    <div className="absolute inset-x-4 bottom-4 z-20 flex translate-y-2 items-center gap-2 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">

        <Link
            to={`/shop/${product.category}/${slug}`}
            className="group/details flex flex-1 items-center justify-between border border-ivory/40 bg-ivory/95 px-5 py-3.5 text-[7px] font-medium uppercase tracking-[0.3em] text-ink backdrop-blur-md transition-all duration-400 hover:bg-ink hover:text-ivory"
        >
            <span>Explore product</span>

            <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover/details:-translate-y-0.5 group-hover/details:translate-x-0.5"
            />
        </Link>

      <button
    type="button"
    disabled={!available}
    onClick={() =>
        addToCart(product, {
            quantity: 1,
            purchaseType: "one-time",
        })
    }
    className="flex h-[42px] w-[48px] shrink-0 items-center justify-center bg-red text-ivory transition-all duration-400 hover:bg-deepRed disabled:cursor-not-allowed disabled:opacity-50"
    aria-label={`Add ${name} to cart`}
>
    <ShoppingBag
        size={14}
        strokeWidth={1.1}
    />
</button>

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
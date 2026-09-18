import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../layouts/CartContext";
import Button from "../../components/Button";

const ProductCard = ({ product }) => {
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
      className="group "
    >
      <Link to={`/shop/${product.category}/${slug}`}>
        <div className="group relative aspect-2/2 overflow-hidden  transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:translate-y-[-1%]">
          {/* PRODUCT IMAGE */}

          <motion.img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover rounded-4xl"
          />
          {/* TOP CORNER */}

          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="h-px w-5 bg-ivory/60" />

            <span className="text-[7px] uppercase tracking-[0.35em] text-ivory/80">
              {product.category}
            </span>
          </div>

          {/* BOTTOM ACTION */}
        </div>
      </Link>

      <div className="py-10">
        <div className="flex items-start justify-between gap-5">
          <Link to={`/shop/${product.category}/${slug}`} className="min-w-0">
            <h3 className="text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-ink transition-colors duration-300 group-hover:text-red sm:text-xs">
              {name}
            </h3>
          </Link>

          <span className="shrink-0 text-[11px] font-medium tracking-[0.04em] text-ink sm:text-xs">
            Rs. {price.toLocaleString()}
          </span>
        </div>

        {flavors.length > 0 && (
          <p className="mt-1 text-[7px] leading-5 tracking-widest md:tracking-[0.3em] text-soil md:text-[10px] uppercase text-center md:text-left">
            {flavors.join(" | ")}
          </p>
        )}

        <div className="mt-2 md:mt-5 ">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[7px] font-semibold uppercase md:tracking-[0.25em] text-stone">
              Roast Level
            </span>

            <span className="text-[7px] font-medium uppercase md:tracking-[0.18em] text-soil">
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
            <span className="text-[6px] uppercase tracking-[0.2em] text-soil">
              Dark
            </span>

            <span className="text-[6px] uppercase tracking-[0.2em] text-stone">
              Light
            </span>
          </div>
        </div>

        {/* button  */}

        <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
          <Button
            to={`/shop/${product.category}/${slug}`}
            variant="primary"
            size="sm"
            className="w-full sm:w-auto"
          >
            Details
          </Button>

          <button
            type="button"
            disabled={!available}
            onClick={() =>
              addToCart(product, {
                quantity: 1,
                purchaseType: "one-time",
              })
            }
            className="group/buy flex h-10 w-full shrink-0 items-center justify-center gap-2 bg-transparent px-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-red transition-all duration-300 hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer sm:h-auto sm:w-auto sm:justify-start sm:px-1 sm:text-[9px] sm:tracking-[0.18em]"
            aria-label={`Quick buy ${name}`}
          >
            <span>Quick Buy</span>

            <ShoppingBag
              size={14}
              strokeWidth={1.2}
              className="shrink-0 transition-transform duration-300 group-hover/buy:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;

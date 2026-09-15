import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../layouts/CartContext";

const FloatingCartButton = () => {
  const { cartCount, setIsCartOpen, isCartOpen } = useCart();

  return (
    <motion.button
      type="button"
      onClick={() => setIsCartOpen(true)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isCartOpen ? 0 : 1,
        y: isCartOpen ? 20 : 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group fixed bottom-6 right-6 z-[80] flex h-12 items-center rounded-full bg-ink px-2 text-lightCream shadow-lg transition-all duration-300 hover:bg-red hover:shadow-xl active:scale-[0.97] sm:bottom-8 sm:right-8"
      aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <ShoppingBag
          size={25}
          strokeWidth={1.2}
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <motion.span
          key={cartCount}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
          className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red px-1.5 text-[7px] font-semibold tabular-nums text-lightCream transition-colors duration-300 group-hover:bg-lightCream group-hover:text-red"
        >
          {cartCount}
        </motion.span>
      </span>
    </motion.button>
  );
};

export default FloatingCartButton;

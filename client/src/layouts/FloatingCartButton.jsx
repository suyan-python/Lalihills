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
      className="fixed bottom-6 right-6 z-[80] flex h-12 items-center gap-3 bg-ink px-4 text-lightCream shadow-2xl transition-colors duration-500 hover:bg-red sm:bottom-8 sm:right-8"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <ShoppingBag size={16} strokeWidth={1.1} />

        {cartCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red px-1 text-[6px] font-medium text-lightCream">
            {cartCount}
          </span>
        )}
      </span>

      <span className="text-[7px] font-medium uppercase tracking-[0.3em]">
        Cart
      </span>
    </motion.button>
  );
};

export default FloatingCartButton;

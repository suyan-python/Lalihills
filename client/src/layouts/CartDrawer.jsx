import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import empty from "../assets/icon/empty.svg";
import Button from "../components/Button";

const CartDrawer = () => {
  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[90] bg-ink/25 backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-[100] flex h-dvh min-h-0 w-full flex-col overflow-hidden bg-lightWhite sm:w-[70vw] lg:w-1/3"
          >
            {/* Header */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-ink/10 px-6 sm:px-8">
              <h2 className="header mt-1 text-xl uppercase tracking-[0.04em] text-ink">
                My Cart
                <span className="ml-2 text-xs text-red/75">({cartCount})</span>
              </h2>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:bg-ink hover:text-lightCream"
                aria-label="Close cart"
              >
                <X size={16} strokeWidth={1.2} />
              </button>
            </div>

            {/* Scrollable Cart Items */}
            <div className="min-h-0 w-full flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
              {cartItems.length === 0 ? (
                <EmptyCart onClose={() => setIsCartOpen(false)} />
              ) : (
                <div className="w-full">
                  {cartItems.map((item, index) => (
                    <CartItem
                      key={item.cartKey}
                      item={item}
                      index={index}
                      onRemove={removeFromCart}
                      onUpdateQuantity={updateQuantity}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Fixed Bottom Summary */}
            {cartItems.length > 0 && (
              <div className="shrink-0">
                <CartSummary total={cartTotal} />
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

const CartItem = ({ item, index, onRemove, onUpdateQuantity }) => {
  const { product, quantity, size, grind, purchaseType, frequency } = item;

  const itemTotal = Number(item.price ?? product.price) * quantity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-b border-ink/10 py-6 first:pt-0"
    >
      <div className="flex gap-5">
        {/* Product Image */}
        <div className="relative h-32 w-24 shrink-0 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover rounded-2xl"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <span className="absolute left-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-lightCream/90 px-1.5 text-[7px] font-medium text-ink backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-red sm:text-[8px]">
                  {product.category}
                </p>

                {purchaseType === "subscribe" && (
                  <>
                    <span className="h-1 w-1 shrink-0 rounded-full bg-emerald-700/70" />

                    <p className="text-[6px] font-medium uppercase tracking-[0.18em] text-emerald-700 sm:text-[7px]">
                      Subscription
                    </p>
                  </>
                )}
              </div>

              <h3 className="header mt-1.5 text-[13px] font-medium uppercase leading-[0.95] tracking-[-0.01em] text-ink sm:text-[15px] md:text-[22px]">
                {product.name}
              </h3>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => onRemove(item.cartKey)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-ink/30 transition-all duration-300 hover:bg-red/5 hover:text-red sm:h-8 sm:w-8"
              aria-label={`Remove ${product.name}`}
            >
              <X size={13} strokeWidth={1.2} />
            </button>
          </div>

          {/* Product Meta */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 sm:mt-4 sm:gap-x-5">
            {size && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[6px] uppercase tracking-[0.2em] text-ink/40 sm:text-[7px]">
                  Size
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-ink sm:text-[9px]">
                  {size}
                </span>
              </div>
            )}

            {grind && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[6px] uppercase tracking-[0.2em] text-ink/40 sm:text-[7px]">
                  Grind
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-ink sm:text-[9px]">
                  {grind}
                </span>
              </div>
            )}

            {purchaseType === "subscribe" && frequency && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[6px] uppercase tracking-[0.2em] text-ink/40 sm:text-[7px]">
                  Every
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-ink sm:text-[9px]">
                  {frequency}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="mt-5 flex items-center justify-between gap-4 sm:mt-6">
            {/* Quantity */}
            <div className="flex h-8 items-center rounded-full border border-ink/10 bg-lightCream/60 px-0.5 transition-colors duration-300 group-hover:border-ink/20 sm:h-9 sm:px-1">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.cartKey, quantity - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink/40 transition-all duration-300 hover:bg-ink hover:text-lightCream sm:h-7 sm:w-7"
                aria-label="Decrease quantity"
              >
                <Minus size={10} strokeWidth={1.3} />
              </button>

              <span className="w-6 text-center text-[8px] font-medium text-ink sm:w-7 sm:text-[9px]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onUpdateQuantity(item.cartKey, quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink/40 transition-all duration-300 hover:bg-ink hover:text-lightCream sm:h-7 sm:w-7"
                aria-label="Increase quantity"
              >
                <Plus size={10} strokeWidth={1.3} />
              </button>
            </div>

            {/* Price */}
            <div className="min-w-0 text-right">
              <p className="header whitespace-nowrap text-[14px] font-medium leading-none tracking-[-0.02em] text-ink sm:text-[15px] md:text-[16px]">
                NPR{" "}
                {itemTotal.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CartSummary = ({ total }) => {
  const { setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="shrink-0 rounded-t-[2rem] bg-hill px-5 pb-5 pt-5 sm:rounded-t-[2.5rem] sm:px-8 sm:pb-8 sm:pt-6"
    >
      {/* Summary */}
      <div className="flex items-end justify-between gap-6">
        <div className="min-w-0">
          <p className="text-[7px] font-medium uppercase tracking-[0.25em] text-lightWhite/55 sm:text-[8px]">
            Order summary
          </p>

          <p className="mt-2 text-[9px] font-light italic leading-4 text-lightWhite/55 sm:text-[10px]">
            Shipping calculated at checkout
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-[7px] font-medium uppercase tracking-[0.25em] text-lightWhite/55 sm:text-[8px]">
            Total
          </p>

          <p className="header mt-1 text-xl font-medium leading-none tracking-[-0.03em] text-lightWhite sm:text-2xl">
            NPR{" "}
            {Number(total).toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>

      {/* Checkout */}
      <button
        type="button"
        onClick={handleCheckout}
        className="group mt-5 flex h-12 w-full items-center justify-between rounded-full bg-lightWhite px-5 text-ink transition-all duration-300 hover:bg-cream active:scale-[0.98] cursor-pointer sm:mt-6 sm:h-13 sm:px-6"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em]">
          Proceed to checkout
        </span>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-lightWhite transition-transform duration-300 group-hover:translate-x-0.5 sm:h-8 sm:w-8">
          <ArrowRight size={13} strokeWidth={1.8} className="sm:h-4 sm:w-4" />
        </span>
      </button>
    </motion.div>
  );
};

const EmptyCart = ({ onClose }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <img src={empty} alt="" className="h-36 w-36 object-contain opacity-70" />

      <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-deepRed">
        Nothing selected yet
      </p>

      <h3 className="mt-2 header text-[18px] uppercase tracking-[0.04em] text-ink">
        Your cart is quiet.
      </h3>

      <Button onClick={onClose} className="cursor-pointer mt-5">
        Continue Exploring
      </Button>
    </div>
  );
};

export default CartDrawer;

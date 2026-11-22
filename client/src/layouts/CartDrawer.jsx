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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[90] bg-[#241B2D]/45 backdrop-blur-[3px]"
          />

          {/* Cart Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-[100] flex h-dvh min-h-0 w-full flex-col overflow-hidden border-l border-[#D7C8E4] bg-[#F8F4FB] text-[#40344D] shadow-[-20px_0_80px_rgba(36,27,45,0.12)] sm:w-[480px] lg:w-[520px]"
          >
            {/* Header */}
            <div className="relative flex shrink-0 items-center justify-between border-b border-[#D7C8E4]/80 px-6 py-6 sm:px-8">
              <div>
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8C6BAA]">
                  A little something from the hills
                </p>

                <h2 className="header text-2xl text-[#40344D]">
                  Your Bag
                  <span className="ml-2 align-middle font-sans text-sm font-medium text-[#8C6BAA]">
                    ({cartCount})
                  </span>
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D7C8E4] text-[#40344D] transition-all duration-300 hover:border-[#40344D] hover:bg-[#40344D] hover:text-white"
                aria-label="Close cart"
              >
                <X size={17} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="relative min-h-0 w-full flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
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

            {/* Bottom Summary */}
            {cartItems.length > 0 && (
              <div className="shrink-0 border-t border-[#D7C8E4]/80 bg-[#F8F4FB] px-6 pb-6 pt-4 sm:px-8">
                <CartSummary total={cartTotal} />
              </div>
            )}

            {/* Subtle brand footer */}
            <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-1 w-full bg-gradient-to-r from-[#795A9C] via-[#C8B2DF] to-[#795A9C]" />
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
      className="group border-b border-[#D7C8E4]/80 py-6 first:pt-0 last:border-b-0"
    >
      <div className="flex gap-4 sm:gap-5">
        {/* Product Image */}
        <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#ECE6F4] sm:h-36 sm:w-28">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-2xl object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <span className="absolute left-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full border border-white/40 bg-[#F8F4FB]/90 px-1.5 text-[8px] font-semibold tracking-wider text-[#40344D] backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Product Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8C6BAA]">
                  {product.category}
                </p>

                {purchaseType === "subscribe" && (
                  <span className="rounded-full bg-[#E8E0EF] px-2 py-0.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#795A9C]">
                    Subscription
                  </span>
                )}
              </div>

              <h3 className="header mt-2 text-[15px] font-medium uppercase leading-tight tracking-[-0.02em] text-[#40344D] sm:text-lg">
                {product.name}
              </h3>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => onRemove(item.cartKey)}
              className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent text-[#766A80]/60 transition-all duration-300 hover:border-[#D7C8E4] hover:bg-[#ECE6F4] hover:text-[#795A9C]"
              aria-label={`Remove ${product.name}`}
            >
              <X size={14} strokeWidth={1.5} />
            </button>
          </div>

          {/* Product Details */}
          {(size || grind || (purchaseType === "subscribe" && frequency)) && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {size && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] uppercase tracking-[0.15em] text-[#766A80]/70">
                    Size
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#40344D]">
                    {size}
                  </span>
                </div>
              )}

              {grind && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] uppercase tracking-[0.15em] text-[#766A80]/70">
                    Grind
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#40344D]">
                    {grind}
                  </span>
                </div>
              )}

              {purchaseType === "subscribe" && frequency && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] uppercase tracking-[0.15em] text-[#766A80]/70">
                    Every
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#40344D]">
                    {frequency}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Quantity & Price */}
          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            {/* Quantity Selector */}
            <div className="flex h-9 items-center rounded-full border border-[#D7C8E4] bg-white/60 px-1 transition-colors duration-300 group-hover:border-[#BCA8D0]">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.cartKey, quantity - 1)}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#766A80] transition-all duration-200 hover:bg-[#40344D] hover:text-white"
                aria-label="Decrease quantity"
              >
                <Minus size={11} strokeWidth={1.5} />
              </button>

              <span className="w-7 text-center text-[10px] font-semibold tabular-nums text-[#40344D]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onUpdateQuantity(item.cartKey, quantity + 1)}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#766A80] transition-all duration-200 hover:bg-[#40344D] hover:text-white"
                aria-label="Increase quantity"
              >
                <Plus size={11} strokeWidth={1.5} />
              </button>
            </div>

            {/* Price */}
            <div className="min-w-0 text-right">
              <p className="mb-1 text-[8px] font-medium uppercase tracking-[0.15em] text-[#766A80]/70">
                Item total
              </p>

              <p className="header whitespace-nowrap text-base font-semibold tracking-tight text-[#40344D] sm:text-lg">
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

  const formattedTotal = Number(total).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="shrink-0  bg-[#F8F4FB] px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6"
    >
      {/* Order Summary */}
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#795A9C] sm:text-[10px]">
            Your order
          </p>

          <p className="mt-2 text-[9px] font-normal leading-relaxed text-[#766A80] sm:text-[10px]">
            Shipping calculated at checkout
          </p>
        </div>

        <div className="text-right">
          <p className="header text-2xl font-semibold leading-none tracking-[-0.04em] text-[#40344D] sm:text-3xl">
            NPR {formattedTotal}
          </p>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        type="button"
        onClick={handleCheckout}
        className="group mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#40344D] px-5 text-[#F8F4FB] transition-all duration-300 hover:bg-[#795A9C] active:scale-[0.985] sm:h-14 sm:px-6"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px]">
          Proceed to checkout
        </span>

        <ArrowRight
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Brand Note */}
      <p className="mt-4 text-center text-[8px] font-medium uppercase tracking-[0.18em] text-[#8C6BAA]/80">
        A little piece of the hills, on its way to you.
      </p>
    </motion.div>
  );
};

const EmptyCart = ({ onClose }) => {
  return (
    <div className="flex h-full min-h-[380px] flex-col items-center justify-center px-4 py-10 text-center">
      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mb-5 flex h-44 w-44 items-center justify-center rounded-full bg-[#ECE6F4]/70"
      >
        <div className="absolute inset-3 rounded-full border border-dashed border-[#C8B2DF]/70" />

        <img
          src={empty}
          alt="An illustration representing an empty shopping bag"
          className="relative z-10 h-36 w-36 object-contain opacity-85"
        />
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8C6BAA]">
          Nothing picked out yet
        </p>

        <h3 className="header mt-3 text-xl font-medium tracking-[-0.02em] text-[#40344D] sm:text-2xl">
          Your bag is taking a break.
        </h3>

        <p className="mx-auto mt-3 max-w-[260px] text-[11px] leading-6 text-[#766A80]">
          There's something lovely waiting in the hills. Go find your next
          favourite.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-7"
      >
        <Button onClick={onClose} variant="dark" className="cursor-pointer">
          Continue Exploring
        </Button>
      </motion.div>

      <p className="mt-7 text-[8px] font-medium uppercase tracking-[0.2em] text-[#8C6BAA]/70">
        When the hills are happy, they are Laali.
      </p>
    </div>
  );
};

export default CartDrawer;

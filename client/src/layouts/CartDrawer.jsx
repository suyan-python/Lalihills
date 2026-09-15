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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[90] bg-ink/25 backdrop-blur-[2px]"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[100] flex h-dvh w-full flex-col bg-lightWhite sm:w-[70vw] lg:w-1/3"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-ink/10 px-6 sm:px-8">
              <h2 className="header mt-1 text-xl uppercase tracking-[0.04em] text-ink ">
                My Cart
                <span className="ml-2 text-xs text-red/75">({cartCount})</span>
              </h2>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:bg-ink hover:text-lightCream cursor-pointer"
                aria-label="Close cart"
              >
                <X size={16} strokeWidth={1.2} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              {cartItems.length === 0 ? (
                <EmptyCart onClose={() => setIsCartOpen(false)} />
              ) : (
                <div className="space-y-0">
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

            {cartItems.length > 0 && <CartSummary total={cartTotal} />}
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
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-red">
                  {product.category}
                </p>

                {purchaseType === "subscribe" && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-emerald-700" />
                    <p className="text-[7px] uppercase tracking-[0.2em] text-emerald-700">
                      Subscription
                    </p>
                  </>
                )}
              </div>

              <h3 className="header mt-1.5 text-[12px] font-medium uppercase leading-tight tracking-[0.02em] text-ink md:text-[22px]">
                {product.name}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => onRemove(item.cartKey)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink/35 transition-all duration-300 hover:border-red/30 hover:bg-red/5 hover:text-red cursor-pointer"
              aria-label={`Remove ${product.name}`}
            >
              <X size={13} strokeWidth={1.2} />
            </button>
          </div>

          {/* Product Meta */}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {size && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[8px] uppercase tracking-[0.18em] text-ink/75">
                  Size
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
                  {size}
                </span>
              </div>
            )}

            {grind && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[8px] uppercase tracking-[0.18em] text-ink/75">
                  Grind
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
                  {grind}
                </span>
              </div>
            )}

            {purchaseType === "subscribe" && frequency && (
              <div className="flex items-baseline gap-1.5">
                <span className="text-[8px] uppercase tracking-[0.18em] text-ink/75">
                  Every
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-ink">
                  {frequency}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="mt-6 flex items-end justify-between gap-4">
            {/* Quantity */}
            <div className="flex h-9 items-center rounded-full border border-ink/15 bg-lightCream/50 px-1 transition-colors duration-300 group-hover:border-ink/25">
              <button
                type="button"
                onClick={() => onUpdateQuantity(item.cartKey, quantity - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream"
                aria-label="Decrease quantity"
              >
                <Minus size={11} strokeWidth={1.2} />
              </button>

              <span className="w-7 text-center text-[9px] font-medium text-ink">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onUpdateQuantity(item.cartKey, quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink/45 transition-all duration-300 hover:bg-ink hover:text-lightCream"
                aria-label="Increase quantity"
              >
                <Plus size={11} strokeWidth={1.2} />
              </button>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="header whitespace-nowrap text-[13px] font-medium tracking-[0.02em] text-ink md:text-[16px]">
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
    <div className="shrink-0 border-t border-ink/10 bg-hill px-6 pb-6 pt-5 sm:px-8 sm:pb-8 rounded-t-4xl">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-lightWhite">
            Order summary
          </p>
          <p className="mt-2 text-sm text-lightWhite">
            Shipping calculated at checkout
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-lightWhite">
            Total
          </p>
          <p className="header mt-1 text-lg font-medium tracking-[-0.02em] text-lightWhite">
            NPR{" "}
            {Number(total).toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Button
          to="/checkout"
          onClick={handleCheckout}
          variant="light"
          size="md"
          icon
          className="h-12 w-full justify-between px-6"
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

const EmptyCart = ({ onClose }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <img src={empty} alt="" className="h-36 w-36 object-contain opacity-70" />

      <p className="mt-5 text-[7px] uppercase tracking-[0.35em] text-deepRed">
        Nothing selected yet
      </p>

      <h3 className="mt-3 font-title text-2xl uppercase tracking-[0.04em] text-ink">
        Your cart is quiet.
      </h3>

      <p className="mt-3 max-w-[240px] text-[9px] leading-relaxed text-ink/50">
        Explore the hills and discover something worth bringing home.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-7 border-b border-ink pb-1 text-[7px] uppercase tracking-[0.3em] text-deepRed font-semibold cursor-pointer"
      >
        Continue exploring
      </button>
    </div>
  );
};

export default CartDrawer;

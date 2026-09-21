import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../layouts/CartContext";
import Button from "../../components/Button";
import logo from "../../assets/logo/logo1.png";
import { motion, AnimatePresence } from "framer-motion";
import PaymentMethod from "./PaymentMethod";
import QRPayment from "./QRPayment";
import PaymentConfirmation from "./PaymentConfirmation";

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const { cartCount, setIsCartOpen, isCartOpen } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Prototype order:", {
      customer: formData,
      items: cartItems,
      total: cartTotal,
    });

    alert("Order prototype submitted successfully.");
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-lightWhite px-6 py-32 text-ink sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[7px] uppercase tracking-[0.35em] text-ink/40">
            Checkout
          </p>

          <h1 className="mt-4 font-title text-4xl uppercase tracking-[0.03em] sm:text-5xl">
            Your cart is empty.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[10px] leading-6 tracking-[0.08em] text-ink/50">
            There is nothing here yet. Explore our collection and find something
            worth bringing home.
          </p>

          <Button to={"/shop"} variant="dark" className="mt-5">
            Continue Shopping
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col md:flex-row bg-lightWhite   text-ink  ">
      <div className="flex flex-col items-end justify-end min-h-screen mx-auto md:w-[60%] px-10 py-20 md:py-26 border-r border-ink/25 ">
        <div className="">
          {/* Header Section */}
          <div className="flex items-center justify-between ">
            <img
              src={logo}
              alt="Laali Hills"
              className="h-8 w-auto object-contain"
            />

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
              className="z-[80] hidden md:flex h-12 items-center rounded-full bg-ink px-2 text-lightCream shadow-lg transition-all duration-300 hover:bg-red hover:shadow-xl active:scale-[0.97] sm:bottom-8 sm:right-8 cursor-pointer"
              aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
            >
              <span className="relative flex h-8 w-8 items-center justify-center ">
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
          </div>

          {/* Form Section */}
          <div className="gap-10 lg:gap-20">
            <section className="py-8">
              <div className="">
                <h2 className="text-lg  font-bold  text-ink">Contact</h2>
              </div>

              <form onSubmit={handleSubmit} className="mt-2 space-y-3">
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-7 sm:grid-cols-2">
                  <InputField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-14">
                  <h2 className="text-lg  font-bold  text-ink">
                    Delivery Details
                  </h2>
                </div>

                <div>
                  <InputField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <InputField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Province"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <InputField
                    label="Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-12 rounded-4xl bg-lightCream p-5 sm:p-6">
                  <label className="block">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                        Order notes
                      </span>

                      <span className="text-[8px] text-ink/85 font-light italic">
                        Optional
                      </span>
                    </div>

                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Anything we should know?"
                      className="mt-4 min-h-24 w-full resize-none rounded-2xl border border-ink/10 bg-lightWhite/50 px-4 py-3 text-sm leading-6 tracking-wide text-ink outline-none transition-all duration-300 placeholder:text-ink/30 focus:border-ink/25 focus:bg-lightWhite"
                    />
                  </label>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>

      <div className="min-h-screen md:w-[40%] bg-ivory ">
        <OrderSummary cartItems={cartItems} cartTotal={cartTotal} />
      </div>
    </main>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <label className="block">
      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-ink/70">
        {label}
        {required && <span className="ml-1 text-red">*</span>}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 h-10 px-3 w-full border border-ink/25 rounded-4xl  text-sm tracking-wide text-ink outline-none transition-colors duration-300 placeholder:text-ink/25 focus:border-ink"
      />
    </label>
  );
};

const OrderSummary = ({ cartItems, cartTotal }) => {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const PROMO_CODE = "LAALI2026";
  const PROMO_DISCOUNT = 0.05;

  const subtotal = Number(cartTotal) || 0;
  const promoDiscount = promoApplied ? subtotal * PROMO_DISCOUNT : 0;
  const finalTotal = subtotal - promoDiscount;

  const [paymentStep, setPaymentStep] = useState("checkout");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setPaymentStep("payment-method");
  };

  return (
    <aside className="lg:sticky lg:top-32 lg:self-start">
      <div className=" text-lightCream max-w-md mr-auto  px-7 pb-10 ">
        {/* ITEMS */}
        <div className="mt-7">
          {cartItems.map((item) => {
            const { product, quantity, size, grind, purchaseType, frequency } =
              item;

            const itemPrice = Number(item.unitPrice ?? product.price) || 0;

            return (
              <div key={item.cartKey} className="flex gap-4 py-2 first:pt-0">
                <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-ink">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4 ">
                    <h3 className="max-w-[70%] text-[14px] font-bold uppercase leading-4 tracking-[0.10em] text-ink">
                      {product.name}
                    </h3>

                    <span className="header shrink-0 text-[14px]  text-ink">
                      Rs. {(itemPrice * quantity).toLocaleString()}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-soil ">
                    {size && <span className="">{size}</span>}

                    {grind && <span className="">{grind}</span>}

                    <span className="">× {quantity}</span>

                    {purchaseType === "subscribe" && frequency && (
                      <span className="">{frequency}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromoApplied(false);
              }}
              placeholder="Promo code"
              disabled={promoApplied}
              className="h-10 min-w-0 flex-1 border px-4 border-ink/50 rounded-4xl bg-transparent  text-[10px] uppercase tracking-[0.12em] text-ink outline-none transition-colors duration-300 placeholder:text-ink/50 focus:border-ink/50 disabled:opacity-60"
            />

            <button
              type="button"
              onClick={() => {
                if (promoCode.trim().toUpperCase() === PROMO_CODE) {
                  setPromoApplied(true);
                }
              }}
              disabled={promoApplied || !promoCode.trim()}
              className="shrink-0 text-[9px] font-medium uppercase tracking-[0.18em] text-lightWhite transition-opacity duration-300 hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-30 bg-ink rounded-full p-2 cursor-pointer"
            >
              {promoApplied ? "Applied" : "Apply"}
            </button>
          </div>

          {promoApplied && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.15em] text-ink">
                Promo · LAALI2026
              </span>

              <button
                type="button"
                onClick={() => {
                  setPromoCode("");
                  setPromoApplied(false);
                }}
                className="text-[8px] uppercase tracking-[0.15em] text-ink/40 transition-colors hover:text-ink"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        {/* TOTALS */}
        <div className="flex items-center justify-between mt-10">
          <span className="text-[12px] tracking-[0.1em] text-ink">
            Subtotal
          </span>

          <span className="header text-[12px] text-ink">
            Rs.{" "}
            {subtotal.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>

        {promoApplied && (
          <div className="flex items-center justify-between mt-1">
            <span className="text-[12px] tracking-[0.1em] text-ink">
              Discount
            </span>

            <span className="header text-[12px] text-ink">
              − Rs.{" "}
              {promoDiscount.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mt-1">
          <span className="text-[12px]  tracking-[0.1em] text-ink">
            Shipping
          </span>

          <span className="text-[12px]  tracking-[0.01em] text-ink/75">
            Enter Shipping Address
          </span>
        </div>

        {/* TOTAL */}
        <div className="flex items-end justify-between pt-6 border-b border-ink/45 pb-3">
          <span className="text-[20px] font-medium   text-ink">Total</span>

          <span className="header text-[20px] font-medium tracking-[0.02em] text-ink">
            Rs.{" "}
            {finalTotal.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>

        <button
          type="submit"
          className="group mt-8 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-lightCream transition-all duration-300 hover:bg-hill active:scale-[0.98] cursor-pointer sm:px-8"
        >
          <span className="text-[12px] font-bold tracking-[0.15em]">
            Place order
          </span>

          <ArrowRight
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <button
          type="button"
          onClick={() => setPaymentStep("payment-method")}
          className="group mt-3 flex h-10 w-full items-center justify-center gap-3 rounded-full border border-ink/15 bg-transparent px-6 text-ink transition-all duration-300 hover:border-ink/30 hover:bg-cream active:scale-[0.98] cursor-pointer"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
            Pay via QR
          </span>

          <ArrowRight
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {paymentStep === "payment-method" && (
          <PaymentMethod
            total={finalTotal}
            onSelect={(method) => {
              setPaymentMethod(method);
              setPaymentStep("qr");
            }}
            onBack={() => setPaymentStep("checkout")}
          />
        )}

        {paymentStep === "qr" && paymentMethod && (
          <QRPayment
            method={paymentMethod}
            total={finalTotal}
            transactionId={transactionId}
            setTransactionId={setTransactionId}
            onBack={() => {
              setTransactionId("");
              setPaymentStep("payment-method");
            }}
            onComplete={() => {
              setPaymentStep("confirmation");
            }}
          />
        )}

        {paymentStep === "confirmation" && (
          <PaymentConfirmation
            orderNumber="LH-1024"
            method={paymentMethod?.name}
            total={finalTotal}
          />
        )}
      </div>
    </aside>
  );
};

export default Checkout;

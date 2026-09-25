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
import esewa from "../../assets/logo/payment/esewa.webp";
import khalti from "../../assets/logo/payment/khalti.png";
import connectips from "../../assets/logo/payment/connectips.png";
import nepalpay from "../../assets/logo/payment/nepalpay.png";

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
        {/* CHECKOUT CONTENT */}
        <div className="mx-auto w-full max-w-2xl">
          {/* Checkout Header */}
          <div className="border-b border-ink/15 pb-3">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="header text-[9px] font-semibold uppercase tracking-[0.22em] text-red">
                  Laali Hills
                </p>

                <h1 className="header mt-2 text-4xl leading-none tracking-[-0.045em] text-ink sm:text-5xl">
                  Checkout
                </h1>
              </div>
            </div>

            {/* Payment Trust */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-ink/8 pt-3">
              <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-ink/45">
                Secure payments
              </span>

              <div className="flex items-center gap-2">
                <div className="flex h-7 items-center border border-ink/10 bg-white px-2.5">
                  <img
                    src={esewa}
                    alt="eSewa"
                    className="h-5 w-auto object-contain"
                  />
                </div>

                <div className="flex h-7 items-center border border-ink/10 bg-white px-2.5">
                  <img
                    src={khalti}
                    alt="Khalti"
                    className="h-5 w-auto object-contain"
                  />
                </div>

                <div className="flex h-7 items-center border border-ink/10 bg-white px-2.5">
                  <img
                    src={nepalpay}
                    alt="NepalPay"
                    className="h-5 w-auto object-contain"
                  />
                </div>

                <div className="flex h-7 items-center border border-ink/10 bg-white px-2.5">
                  <img
                    src={connectips}
                    alt="connectIPS"
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-5">
            {/* CONTACT */}
            <section>
              <div className="flex items-center justify-between ">
                <div className="flex items-baseline gap-3">
                  <span className="text-[9px] font-semibold tracking-[0.15em] text-red">
                    01
                  </span>
                  <h2 className="header text-xl tracking-[-0.025em] text-ink sm:text-2xl ">
                    Contact information
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <InputField
                  label="Email address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <InputField
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </section>

            {/* DELIVERY */}
            <section className="mt-10">
              <div className="flex items-center justify-between ">
                <div className="flex items-baseline gap-3">
                  <span className="text-[9px] font-semibold tracking-[0.15em] text-red">
                    02
                  </span>

                  <h2 className="header text-xl tracking-[-0.025em] text-ink sm:text-2xl">
                    Delivery address
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <InputField
                  label="Street address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">
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

                <InputField
                  label="Postal code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* NOTES */}
            <section className="mt-10">
              <div className="flex items-center justify-between ">
                <div className="flex items-baseline gap-3">
                  <span className="text-[9px] font-semibold tracking-[0.15em] text-red">
                    03
                  </span>

                  <h2 className="header text-xl tracking-[-0.025em] text-ink sm:text-2xl">
                    Order notes
                  </h2>
                </div>
              </div>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Anything we should know about your order?"
                className="mt-5 min-h-28 w-full resize-none rounded-lg border border-ink/15 bg-white px-4 py-3.5 text-sm leading-6 tracking-wide text-ink outline-none transition-colors duration-200 placeholder:text-ink/30 hover:border-ink/25 focus:border-ink/50 focus:ring-1 focus:ring-ink/5"
              />
            </section>

            {/* Checkout reassurance */}
            <div className="mt-8 border-y border-ink/10 py-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-4 w-4 shrink-0 text-ink/60"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  <div>
                    <p className="text-[10px] font-medium text-ink">
                      Secure checkout
                    </p>
                    <p className="mt-0.5 text-[9px] leading-4 text-ink/45">
                      Your information is protected.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-4 w-4 shrink-0 text-ink/60"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 7h13v10H3z" />
                    <path d="M16 10h3l2 3v4h-5z" />
                    <circle cx="7" cy="18" r="1.5" />
                    <circle cx="18" cy="18" r="1.5" />
                  </svg>

                  <div>
                    <p className="text-[10px] font-medium text-ink">
                      Reliable delivery
                    </p>
                    <p className="mt-0.5 text-[9px] leading-4 text-ink/45">
                      Carefully packed from the hills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 h-4 w-4 shrink-0 text-ink/60"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 11a8 8 0 1 1-2.34-5.66" />
                    <path d="M20 4v7h-7" />
                  </svg>

                  <div>
                    <p className="text-[10px] font-medium text-ink">
                      Freshly prepared
                    </p>
                    <p className="mt-0.5 text-[9px] leading-4 text-ink/45">
                      We prepare every order with care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
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

  const finalTotal = Math.max(0, subtotal - promoDiscount);

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
          <div className="divide-y divide-ink/8">
            {cartItems.map((item) => {
              const {
                product,
                quantity = 1,
                size,
                grind,
                purchaseType,
                frequency,
              } = item;

              // Extract the numeric gram value from whatever format
              // the cart stores, e.g. "250g", "250 g", or 250.
              const selectedGrams = Number.parseInt(
                String(size).replace(/\D/g, ""),
                10,
              );

              // Find the matching size option
              const selectedSize = product.sizeOptions?.find(
                (option) => Number(option.grams) === selectedGrams,
              );

              // IMPORTANT:
              // Size-specific price takes priority over the old/stored unitPrice.
              const itemPrice = Number(
                selectedSize?.price ?? item.unitPrice ?? product.price ?? 0,
              );

              const lineTotal = itemPrice * Number(quantity);

              return (
                <div
                  key={item.cartKey}
                  className="flex gap-4 py-4 first:pt-2 last:pb-2"
                >
                  {/* Product Image */}
                  <div className="h-[76px] w-[62px] shrink-0 overflow-hidden rounded-md bg-ink/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="header text-[14px] font-semibold uppercase leading-[1.35] tracking-[0.09em] text-ink">
                          {product.name}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] uppercase tracking-[0.12em] text-stone">
                          {size && <span>{size}</span>}

                          {size && grind && (
                            <span className="h-2.5 w-px bg-ink/15" />
                          )}

                          {grind && <span>{grind}</span>}

                          <span className="h-2.5 w-px bg-ink/15" />

                          <span>Qty {quantity}</span>
                        </div>

                        {purchaseType === "subscribe" && frequency && (
                          <div className="mt-2 inline-flex items-center gap-1.5 text-[8px] font-medium uppercase tracking-[0.13em] text-red">
                            <span className="h-1.5 w-1.5 rounded-full bg-red" />
                            {frequency} delivery
                          </div>
                        )}
                      </div>

                      <div className="shrink-0 text-right">
                        <span className="header text-[16px] tracking-[-0.01em] text-ink">
                          Rs. {lineTotal.toLocaleString()}
                        </span>

                        {quantity > 1 && (
                          <p className="mt-1 text-[8px] tracking-[0.08em] text-ink/35">
                            Rs. {itemPrice.toLocaleString()} / unit
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROMO CODE */}
        <div className="mt-7 border-y border-ink/10 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-ink/55">
              Have a promo code?
            </span>
          </div>

          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromoApplied(false);
              }}
              placeholder="Enter code"
              disabled={promoApplied}
              className="h-10 min-w-0 flex-1 rounded-md border border-ink/15 bg-white px-3.5 text-[10px] uppercase tracking-[0.12em] text-ink outline-none transition-colors duration-200 placeholder:text-ink/30 hover:border-ink/25 focus:border-ink/45 disabled:bg-ink/5 disabled:text-ink/50"
            />

            <button
              type="button"
              onClick={() => {
                if (promoCode.trim().toUpperCase() === PROMO_CODE) {
                  setPromoApplied(true);
                }
              }}
              disabled={promoApplied || !promoCode.trim()}
              className="h-10 shrink-0 rounded-md border border-ink bg-ink px-5 text-[9px] font-medium uppercase tracking-[0.16em] text-lightWhite transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:border-ink/20 disabled:bg-ink/20"
            >
              {promoApplied ? "Applied" : "Apply"}
            </button>
          </div>

          {promoApplied && (
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red" />

                <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-ink/70">
                  {promoCode.toUpperCase()} applied
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPromoCode("");
                  setPromoApplied(false);
                }}
                className="text-[8px] uppercase tracking-[0.14em] text-ink/40 transition-colors hover:text-ink"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* TOTALS */}
        <div className="mt-6">
          <div className="flex items-center justify-between py-1">
            <span className="text-[11px] tracking-[0.06em] text-ink/65">
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
            <div className="flex items-center justify-between py-1">
              <span className="text-[11px] tracking-[0.06em] text-ink/65">
                Discount
              </span>

              <span className="header text-[12px] text-red">
                − Rs.{" "}
                {promoDiscount.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between py-1">
            <span className="text-[11px] tracking-[0.06em] text-ink/65">
              Shipping
            </span>

            <span className="text-right text-[10px] tracking-[0.02em] text-ink/45">
              Enter shipping address
            </span>
          </div>

          {/* Total */}
          <div className="mt-4 flex items-end justify-between border-t border-ink/15 pt-4">
            <div>
              <span className="header text-base tracking-[-0.02em] text-ink">
                Total
              </span>

              <p className="mt-1 text-[8px] uppercase tracking-[0.13em] text-ink/35">
                Including applicable charges
              </p>
            </div>

            <span className="header text-xl tracking-[-0.02em] text-ink">
              Rs.{" "}
              {(subtotal - (promoApplied ? promoDiscount : 0)).toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 0,
                },
              )}
            </span>
          </div>
        </div>

        {/* PAYMENT ACTIONS */}
        <div className="mt-5 border-t border-ink/10 pt-5">
          <button
            type="submit"
            className="group flex h-12 w-full items-center justify-center gap-3 rounded-md bg-ink px-6 text-lightCream transition-colors duration-200 hover:bg-hill active:scale-[0.99] cursor-pointer sm:px-8"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Place order
            </span>

            <ArrowRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          <div className="my-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-ink/8" />
            <span className="text-[8px] uppercase tracking-[0.16em] text-ink/30">
              or
            </span>
            <span className="h-px flex-1 bg-ink/8" />
          </div>

          <button
            type="button"
            onClick={() => setPaymentStep("payment-method")}
            className="group flex h-11 w-full items-center justify-center gap-3 rounded-md border border-ink/15 bg-white px-6 text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-cream active:scale-[0.99] cursor-pointer sm:px-8"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.17em]">
              Pay via QR
            </span>

            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>

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

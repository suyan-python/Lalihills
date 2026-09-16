import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../layouts/CartContext";
import Button from "../../components/Button";
import logo from "../../assets/logo/logo1.png";
import { motion } from "framer-motion";

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
    <main className="flex flex-row bg-lightWhite   text-ink  ">
      <div className="flex flex-col items-end justify-end min-h-screen mx-auto w-[60%] px-12 py-20 md:py-26 border-r-2 border-ink">
        <div className="">
          {/* Header Section */}
          <div className="mb-2 flex items-center justify-between">
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
              className=" z-[80] flex h-12 items-center rounded-full bg-ink px-2 text-lightCream shadow-lg transition-all duration-300 hover:bg-red hover:shadow-xl active:scale-[0.97] sm:bottom-8 sm:right-8"
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
                <div className="mt-12 rounded-4xl bg-cream p-5 sm:p-6">
                  <label className="block">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink">
                        Order notes
                      </span>

                      <span className="text-[8px] text-ink/85">Optional</span>
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

      <div className="min-h-screen w-[40%] bg-ink ">
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
                <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-lightCream/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4 ">
                    <h3 className="max-w-[70%] text-[14px] font-bold uppercase leading-4 tracking-[0.10em]">
                      {product.name}
                    </h3>

                    <span className="shrink-0 text-[14px]  text-lightWhite">
                      Rs. {(itemPrice * quantity).toLocaleString()}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    {size && (
                      <span className="text-[10px] uppercase tracking-[0.12em] text-cream">
                        {size}
                      </span>
                    )}

                    {grind && (
                      <span className="text-[10px] uppercase tracking-[0.12em] text-cream">
                        {grind}
                      </span>
                    )}

                    <span className="text-[10px] uppercase tracking-[0.12em] text-cream">
                      × {quantity}
                    </span>

                    {purchaseType === "subscribe" && frequency && (
                      <span className="text-[10px] uppercase tracking-[0.12em] text-cream">
                        {frequency}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TOTALS */}
        <div className="mt-6 space-y-3 border-b border-lightCream/10 pb-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-lightCream">
              Subtotal
            </span>

            <span className="text-[14px]">
              Rs.{" "}
              {Number(cartTotal).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-lightCream">
              Shipping
            </span>

            <span className="text-[10px] uppercase tracking-[0.15em] text-green-500/85">
              Free
            </span>
          </div>
        </div>

        {/* TOTAL */}
        <div className="flex items-end justify-between pt-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
            Total
          </span>

          <span className="header text-xl font-medium tracking-[-0.02em]">
            NRs.{" "}
            {Number(cartTotal).toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>

        <button
          type="submit"
          className="group mt-10 flex h-14 w-full items-center justify-center rounded-full bg-lightWhite px-6 text-ink transition-all duration-300 cursor-pointer hover:bg-lightCream active:scale-[0.99] sm:px-8 gap-2"
        >
          <span className="text-[12px] font-bold  tracking-[0.15em]">
            Place order
          </span>
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </aside>
  );
};

export default Checkout;

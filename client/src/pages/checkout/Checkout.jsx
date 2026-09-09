import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../layouts/CartContext";

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();

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

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-4 bg-ink px-7 py-4 text-[8px] font-medium uppercase tracking-[0.28em] text-lightCream transition-colors duration-500 hover:bg-red"
          >
            Continue shopping
            <ArrowRight size={14} strokeWidth={1.1} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-lightWhite px-4 pb-20 pt-28 text-ink sm:px-8 sm:pt-36 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 border-b border-ink/15 pb-8 sm:mb-16 sm:pb-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-[7px] uppercase tracking-[0.3em] text-ink/45 transition-colors duration-300 hover:text-red"
          >
            <ArrowLeft size={13} strokeWidth={1.1} />
            Continue shopping
          </Link>

          <h1 className="mt-5 header text-[clamp(3.5rem,7vw,6rem)] uppercase leading-[0.82] tracking-tighter">
            Checkout
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-6 text-ink/50">
            A few details, then your order begins its journey from the hills.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
          <section className="border border-ink/15 bg-lightWhite px-5 py-7 sm:px-8 sm:py-9">
            <div className="flex items-end justify-between border-b border-ink/15 pb-5">
              <div>
                <p className="text-[7px] uppercase tracking-[0.3em] text-ink/45">
                  01
                </p>

                <h2 className="mt-2 text-xs font-medium uppercase tracking-[0.15em]">
                  Your information
                </h2>
              </div>

              <span className="text-[7px] uppercase tracking-[0.25em] text-ink/35">
                Required fields marked *
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2">
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

              <div className="mt-6">
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-6">
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-12 border-b border-ink/15 pb-5">
                <p className="text-[7px] uppercase tracking-[0.3em] text-ink/45">
                  02
                </p>

                <h2 className="mt-2 text-xs font-medium uppercase tracking-[0.15em]">
                  Delivery details
                </h2>
              </div>

              <div className="mt-8">
                <InputField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
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

              <div className="mt-6">
                <InputField
                  label="Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6">
                <label className="block">
                  <span className="text-[7px] uppercase tracking-[0.25em] text-ink/45">
                    Order Notes
                  </span>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Anything we should know?"
                    className="mt-3 w-full resize-none border-b border-ink/20 bg-transparent px-0 py-3 text-[10px] tracking-wider text-ink outline-none transition-colors duration-300 placeholder:text-ink/25 focus:border-red"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="group mt-10 flex h-14 w-full items-center justify-between bg-red px-6 text-lightCream transition-colors duration-500 hover:bg-deepRed sm:px-8"
              >
                <span className="text-[8px] font-medium uppercase tracking-[0.3em]">
                  Place order
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.1}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-center text-[7px] uppercase tracking-[0.15em] text-ink/75">
                Prototype checkout — payment will be added later.
              </p>
            </form>
          </section>

          <OrderSummary cartItems={cartItems} cartTotal={cartTotal} />
        </div>
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
      <span className="text-[7px] uppercase tracking-[0.25em] text-ink/45">
        {label}
        {required && <span className="ml-1 text-red">*</span>}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-3 h-11 w-full border-b border-ink/20 bg-transparent px-0 text-[10px] tracking-wider text-ink outline-none transition-colors duration-300 placeholder:text-ink/25 focus:border-red"
      />
    </label>
  );
};

const OrderSummary = ({ cartItems, cartTotal }) => {
  return (
    <aside className="lg:sticky lg:top-32 lg:self-start">
      <div className="relative overflow-hidden bg-ink px-5 py-7 text-lightCream sm:px-7 sm:py-8">
        <div className="absolute left-0 top-0 h-1 w-24 bg-red" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] uppercase tracking-[0.3em] text-lightCream/45">
              03
            </p>

            <h2 className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-lightCream">
              Your order
            </h2>
          </div>

          <span className="text-[7px] uppercase tracking-[0.2em] text-lightCream/45">
            {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        <div className="mt-8">
          {cartItems.map((item) => {
            const { product, quantity, size, grind, purchaseType, frequency } =
              item;

            const itemPrice = Number(item.unitPrice ?? product.price) || 0;

            return (
              <div
                key={item.cartKey}
                className="border-b border-lightCream/15 py-5 first:pt-0"
              >
                <div className="flex gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden bg-lightCream/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[9px] font-medium uppercase leading-5 tracking-[0.08em] text-lightCream">
                        {product.name}
                      </h3>

                      <span className="shrink-0 text-[9px] font-medium text-lightCream">
                        Rs. {(itemPrice * quantity).toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-2 space-y-1">
                      {size && (
                        <p className="text-[7px] uppercase tracking-[0.15em] text-lightCream/45">
                          Size:{" "}
                          <span className="text-lightCream/80">{size}</span>
                        </p>
                      )}

                      {grind && (
                        <p className="text-[7px] uppercase tracking-[0.15em] text-lightCream/45">
                          Grind:{" "}
                          <span className="text-lightCream/80">{grind}</span>
                        </p>
                      )}

                      <p className="text-[7px] uppercase tracking-[0.15em] text-lightCream/45">
                        Quantity:{" "}
                        <span className="text-lightCream/80">{quantity}</span>
                      </p>

                      {purchaseType === "subscribe" && frequency && (
                        <p className="text-[7px] uppercase tracking-[0.15em] text-lightCream/45">
                          Delivery:{" "}
                          <span className="text-lightCream/80">
                            {frequency}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 space-y-3 border-b border-lightCream/15 pb-6">
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-lightCream/45">
              Subtotal
            </span>

            <span className="text-[9px] text-lightCream">
              Rs.{" "}
              {Number(cartTotal).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-lightCream/45">
              Shipping
            </span>

            <span className="text-[8px] uppercase tracking-[0.15em] text-lightCream/40">
              Calculated later
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between pt-5">
          <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-lightCream">
            Total
          </span>

          <span className="text-xl font-medium tracking-[0.03em] text-lightCream">
            Rs.{" "}
            {Number(cartTotal).toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Checkout;

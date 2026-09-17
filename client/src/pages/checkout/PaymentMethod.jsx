import { ArrowLeft, ArrowRight } from "lucide-react";
import esewa from "../../assets/logo/payment/esewa.webp";
import khalti from "../../assets/logo/payment/khalti.png";
import connectips from "../../assets/logo/payment/connectips.png";
import nepalpay from "../../assets/logo/payment/nepalpay.png";

const paymentMethods = [
  {
    id: "esewa",
    name: "eSewa",
    logo: esewa,
  },
  {
    id: "khalti",
    name: "Khalti",
    logo: khalti,
  },
  {
    id: "connectips",
    name: "connectIPS",
    logo: connectips,
  },
  {
    id: "nepalpay",
    name: "NEPALPAY",
    logo: nepalpay,
  },
];

const PaymentMethod = ({ onSelect, onBack }) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center mt-7">
        <h2 className="text-sm font-light tracking-[0.01em] text-ink/75">
          Choose your Payment medium
        </h2>
      </div>

      <div className="mt-2 space-y-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method)}
            className="group relative flex h-14 w-full items-center justify-between overflow-hidden rounded-2xl border border-ink/10 bg-lightWhite px-5 text-left transition-all duration-300 hover:border-ink/25 hover:bg-cream active:scale-[0.99]"
          >
            {/* Background Logo */}
            <div
              className="pointer-events-none absolute inset-0 bg-contain bg-right bg-no-repeat opacity-[0.08] transition-all duration-500 group-hover:opacity-[0.25] group-hover:scale-105"
              style={{ backgroundImage: `url(${method.logo})` }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
                {method.name}
              </span>
            </div>

            {/* Arrow */}
            <span className="relative z-10 flex h-9 w-9 items-center justify-center  text-ink/50 transition-all duration-300  group-hover:text-ink  ">
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-8 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-ink/45 transition-colors duration-300 "
      >
        <ArrowLeft size={13} strokeWidth={1.5} />
        Back
      </button>
    </section>
  );
};

export default PaymentMethod;

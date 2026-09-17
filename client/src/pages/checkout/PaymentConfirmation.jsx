import { Check } from "lucide-react";

const PaymentConfirmation = ({ orderNumber, method, total }) => {
  return (
    <section className="w-full">
      <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900 text-lightCream">
          <Check size={22} strokeWidth={1.5} />
        </div>

        <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-ink">
          Thank you for your order.
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-6 text-ink/55">
          We've received your payment details. Your payment will be verified
          before your order is processed.
        </p>

        <div className="mt-10 w-full max-w-sm border-y border-ink/10 py-5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-ink/40">
              Order
            </span>

            <span className="text-[9px] font-medium tracking-[0.1em] text-ink">
              {orderNumber}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-ink/40">
              Payment
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-ink">
              {method}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-ink/40">
              Amount
            </span>

            <span className="text-sm font-medium text-ink">
              Rs.{" "}
              {Number(total).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>

        <p className="mt-8 text-[8px] uppercase tracking-[0.18em] text-ink">
          Payment status · Verification pending
        </p>
      </div>
    </section>
  );
};

export default PaymentConfirmation;

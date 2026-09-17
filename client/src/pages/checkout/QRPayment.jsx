import { ArrowLeft, Check } from "lucide-react";

const QRPayment = ({
  method,
  total,
  transactionId,
  setTransactionId,
  onBack,
  onComplete,
}) => {
  const qrCodes = {
    esewa: "/payment/esewa-qr.png",
    khalti: "/payment/khalti-qr.png",
    connectips: "/payment/connectips-qr.png",
    nepalpay: "/payment/nepalpay-qr.png",
  };

  return (
    <section className="w-full">
      <div className="mt-8 flex flex-col items-center">
        <div className="flex h-64 w-64 items-center justify-center rounded-3xl border border-ink/10 bg-lightWhite p-5">
          <img
            src={qrCodes[method.id]}
            alt={`${method.name} payment QR code`}
            className="h-full w-full object-contain"
          />
        </div>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.08em] text-ink/75">
          Scan with {method.name}
        </p>
      </div>

      <div className="mt-10">
        <label className="block">
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-ink/45">
            Transaction ID
          </span>

          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Enter transaction ID"
            className="mt-3 h-12 w-full border border-ink/15 bg-transparent px-5 text-sm tracking-wide text-ink outline-none transition-colors duration-300 placeholder:text-ink/25 focus:border-ink rounded-full"
          />
        </label>

        <button
          type="button"
          onClick={onComplete}
          disabled={!transactionId.trim()}
          className="group mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-ink px-6 text-lightCream transition-all duration-300 hover:bg-hill disabled:cursor-not-allowed disabled:opacity-30"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
            I've completed payment
          </span>

          <Check
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </button>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-8 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-ink/45 transition-colors hover:text-ink"
      >
        <ArrowLeft size={13} strokeWidth={1.5} />
        Change payment method
      </button>
    </section>
  );
};

export default QRPayment;

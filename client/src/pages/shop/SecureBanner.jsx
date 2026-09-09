import { Headset, LockKeyhole, RotateCcw, Truck } from "lucide-react";

const SecureBanner = () => {
  return (
    <div>
      <section className="pb-12  sm:pb-14  lg:pb-16">
        <div className="grid  grid-cols-2 divide-x divide-ink/10 lg:grid-cols-4">
          {/* Fast Delivery */}
          <div className="flex flex-col items-center px-5 text-center sm:px-8">
            <Truck
              size={20}
              strokeWidth={1.2}
              className="h-5 w-5 text-ink/70"
            />

            <span className="mt-4 text-[14px] font-medium uppercase tracking-[0.25em] text-ink sm:text-[10px]">
              Fast Delivery
            </span>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col items-center px-5 text-center sm:px-8">
            <Headset
              size={20}
              strokeWidth={1.2}
              className="h-5 w-5 text-ink/70"
            />

            <span className="mt-4 text-[14px] font-medium uppercase tracking-[0.25em] text-ink sm:text-[10px]">
              Customer Support
            </span>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center px-5 text-center sm:px-8">
            <LockKeyhole
              size={20}
              strokeWidth={1.2}
              className="h-5 w-5 text-ink/70"
            />

            <span className="mt-4 text-[14px] font-medium uppercase tracking-[0.25em] text-ink sm:text-[10px]">
              Secure Payment
            </span>
          </div>

          {/* Refund & Free Returns */}
          <div className="flex flex-col items-center px-5 text-center sm:px-8">
            <RotateCcw
              size={20}
              strokeWidth={1.2}
              className="h-5 w-5 text-ink/70"
            />

            <span className="mt-4 text-[14px] font-medium uppercase tracking-[0.25em] text-ink sm:text-[10px]">
              Refund & Free Returns
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecureBanner;

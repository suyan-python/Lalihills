import { Headset, LockKeyhole, RotateCcw, Truck } from "lucide-react";

const SecureBanner = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Packed with care",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description: "We're here to help",
    },
    {
      icon: LockKeyhole,
      title: "Secure Payment",
      description: "Safe & protected",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Simple & hassle-free",
    },
  ];

  return (
    <section className="border-y border-ink/10 py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`flex justify-center px-5 py-3 text-center sm:px-8 ${
                index % 2 === 0 ? "max-lg:border-r max-lg:border-ink/10" : ""
              } ${index < 2 ? "max-lg:border-b max-lg:border-ink/10" : ""} ${
                index < features.length - 1
                  ? "lg:border-r lg:border-ink/10"
                  : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <Icon size={19} strokeWidth={1.15} className="text-ink/60" />

                <span className="mt-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-ink sm:text-[9px]">
                  {feature.title}
                </span>

                <span className="mt-1 text-[8px] text-stone sm:text-[9px]">
                  {feature.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SecureBanner;

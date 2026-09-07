import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ShopBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[82vh]">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/shop-banner.mp4" type="video/mp4" />
        </video>

        {/* NATURAL DARKENING */}
        <div className="absolute inset-0 bg-ink/45" />

        {/* SUBTLE EDGE DARKENING */}
        <div className="absolute inset-0 bg-ink/15" />

        {/* TOP INFORMATION */}
        <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10 lg:left-14 lg:right-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-lightCream/60" />
            <span className="text-[7px] font-medium uppercase tracking-[0.35em] text-lightCream/80 sm:text-[8px]">
              From Nepal
            </span>
          </div>

          <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/60 sm:text-[8px]">
            Laali Hills
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="px-6 pb-8 sm:px-10 sm:pb-12 lg:px-14 lg:pb-14 xl:px-16 xl:pb-16">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="text-[7px] uppercase tracking-[0.35em] text-lightCream/65 sm:text-[8px]">
                  Coffee · Tea · Gifting
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.1,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="header max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-lightCream"
              >
                From the hills.
                <br />
                <span className="italic text-cream">To your ritual.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-xl"
              >
                <p className="text-[11px] leading-5 tracking-wide text-lightCream/70 sm:text-[12px] sm:leading-6">
                  Coffee and tea shaped by Nepal&apos;s hills, selected for
                  their character and brought to you with the story of where
                  they began.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-9 flex flex-col gap-5 border-t border-lightCream/20 pt-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/55 sm:text-[8px]">
                    Nepal
                  </span>

                  <span className="h-3 w-px bg-lightCream/20" />

                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/55 sm:text-[8px]">
                    Higher Belt
                  </span>

                  <span className="h-3 w-px bg-lightCream/20" />

                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/55 sm:text-[8px]">
                    Small Batch
                  </span>
                </div>

                <Link
                  to="/shop/coffee"
                  className="group flex w-fit items-center gap-4 text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream transition-colors duration-500 hover:text-cream"
                >
                  <span>Explore coffee</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-lightCream/35 transition-all duration-500 group-hover:border-lightCream/70 group-hover:bg-lightCream group-hover:text-ink">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.1}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* FRAME */}
        <div className="pointer-events-none absolute inset-0 border border-lightCream/10" />
      </div>
    </section>
  );
};

export default ShopBanner;

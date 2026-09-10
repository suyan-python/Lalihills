import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmartVideo from "../../components/SmartVideo";

const ShopBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative aspect-video w-full">
        {/* VIDEO */}
        <SmartVideo
          src="/videos/shop-banner.mp4"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* NATURAL DARKENING */}
        <div className="absolute inset-0 bg-ink/45" />

        {/* SUBTLE EDGE DARKENING */}
        <div className="absolute inset-0 bg-ink/15" />

        {/* TOP INFORMATION */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-8 sm:right-8 sm:top-7 lg:left-14 lg:right-14 lg:top-10">
          <div className="flex items-center gap-3">
            <span className="text-[7px] font-medium uppercase tracking-[0.35em] text-lightCream/80 sm:text-[8px]">
              From Nepal
            </span>
          </div>

          <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/60 sm:text-[8px]">
            Laali Hills
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="absolute inset-x-0 bottom-4 sm:bottom-8 lg:bottom-12">
          <div className="px-4 sm:px-8 lg:px-14 xl:px-16">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-2 flex items-center gap-3 sm:mb-4 lg:mb-5"
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
                className="header max-w-4xl text-[clamp(2rem,8vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-lightCream"
              >
                From the hills.
                <br />
                <span className="italic text-cream">To your ritual.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 flex flex-col gap-3  pt-3 sm:mt-7 sm:gap-5 sm:pt-4 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:pt-5"
              >
                <div className="flex items-center gap-3 sm:gap-5">
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
                  className="group flex w-fit items-center gap-3 text-[7px] font-medium uppercase tracking-[0.25em] text-lightCream transition-colors duration-500 hover:text-cream sm:gap-4 sm:text-[8px] sm:tracking-[0.3em]"
                >
                  <span>Explore coffee</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lightCream/35 transition-all duration-500 group-hover:border-lightCream/70 group-hover:bg-lightCream group-hover:text-ink sm:h-9 sm:w-9">
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

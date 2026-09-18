import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmartVideo from "../../components/SmartVideo";

const ShopBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative flex justify-center items-center min-h-screen w-full">
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

        {/* MAIN CONTENT */}
        <div className="absolute ">
          <div className="px-4 sm:px-8 lg:px-14 xl:px-16">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-2 flex items-center justify-center gap-3 sm:mb-4 lg:mb-5 "
              >
                <span className="text-[7px] uppercase tracking-[0.35em] text-lightCream/65 sm:text-[8px] ">
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
                className="header max-w-4xl text-[clamp(3.6rem,6.8vw,6.8rem)] font-medium uppercase leading-[0.78] tracking-[-0.075em] text-lightCream text-center"
              >
                From the hills
                <br />
                <span className="italic text-cream">To your ritual</span>
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
                className="mt-4 flex flex-col gap-3  pt-3 sm:mt-7 sm:gap-5 sm:pt-4 lg:mt-10 lg:flex-row items-center justify-center lg:pt-5 "
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

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmartVideo from "../../components/SmartVideo";

const ShopBanner = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-ink">
      <div className="relative flex min-h-[85svh] w-full items-center justify-center sm:min-h-[90svh] lg:min-h-screen">
        {/* BACKGROUND VIDEO */}
        <SmartVideo
          src="/videos/shop-banner.mp4"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/55" />

        {/* CONTENT */}
        <div className="relative z-10 w-full px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3 sm:mb-9"
            >
              <span className="h-px w-6 bg-red sm:w-9" />
              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-lightCream/80 sm:text-[10px]">
                Coffee · Tea · Gifting
              </span>
              <span className="h-px w-6 bg-red sm:w-9" />
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="header max-w-5xl text-[clamp(3.2rem,8.5vw,7.8rem)] font-medium uppercase leading-[0.88] tracking-[-0.065em] text-lightCream"
            >
              From the hills
              <br />
              <span className="font-normal italic text-cream">
                to your ritual.
              </span>
            </motion.h1>

            {/* SUPPORTING COPY */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-6 max-w-md text-xs leading-6 text-lightCream/75 sm:mt-7 sm:text-sm sm:leading-7"
            >
              Thoughtfully sourced coffee and tea, shaped by the land and people
              of Nepal.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-8 sm:mt-10"
            >
              <Link
                to="/shop/coffee"
                className="group inline-flex min-h-12 items-center justify-center gap-8 rounded-full bg-lightCream px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-red hover:text-lightCream sm:min-h-14 sm:px-8 sm:text-[11px]"
              >
                Explore the collection
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* ORIGIN DETAILS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 flex items-center gap-3 sm:mt-16 sm:gap-5"
            >
              <span className="text-[8px] uppercase tracking-[0.22em] text-lightCream/65 sm:text-[9px]">
                Nepal
              </span>
              <span className="h-3 w-px bg-lightCream/30" />
              <span className="text-[8px] uppercase tracking-[0.22em] text-lightCream/65 sm:text-[9px]">
                High-altitude origins
              </span>
              <span className="h-3 w-px bg-lightCream/30" />
              <span className="text-[8px] uppercase tracking-[0.22em] text-lightCream/65 sm:text-[9px]">
                Small batch
              </span>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM SCROLL CUE */}
        <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-lightCream/55 md:flex">
          <span className="text-[8px] uppercase tracking-[0.22em]">
            Discover Laali Hills
          </span>
          <ArrowDownRight size={13} strokeWidth={1.4} />
        </div>

        {/* SUBTLE FRAME */}
        <div className="pointer-events-none absolute inset-3 border border-lightCream/15 sm:inset-5" />
      </div>
    </section>
  );
};

export default ShopBanner;

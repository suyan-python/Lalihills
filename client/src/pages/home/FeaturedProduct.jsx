import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  return (
    <section className="relative overflow-hidden bg-lightWhite px-7 py-20 text-ink sm:px-12 sm:py-24 lg:px-20 lg:py-28 xl:px-28">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[600px] overflow-hidden bg-soil">
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5]"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source src="/videos/picked.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-ink/10" />

              <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">
                <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-ivory/70">
                  From Nepal
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-xl lg:pl-4"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[8px] font-medium uppercase tracking-[0.4em] text-stone"
          >
            Featured Coffee
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="header mt-6 text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.84] tracking-[-0.055em] text-ink"
          >
            Laali Hills
            <br />
            <span className="italic text-red">Arabica.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="mt-10 grid max-w-lg grid-cols-3 border-y border-ink/10 py-5"
          >
            <div>
              <p className="text-[7px] uppercase tracking-[0.25em] text-stone">
                Origin
              </p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                Nepal
              </p>
            </div>

            <div className="border-l border-ink/10 pl-5">
              <p className="text-[7px] uppercase tracking-[0.25em] text-stone">
                Process
              </p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                Washed
              </p>
            </div>

            <div className="border-l border-ink/10 pl-5">
              <p className="text-[7px] uppercase tracking-[0.25em] text-stone">
                Roast
              </p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                Medium
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9"
          >
            <Link
              to="/shop/coffee"
              className="group inline-flex items-center gap-4 bg-red px-7 py-4 text-[8px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors duration-500 hover:bg-deepRed"
            >
              Explore Coffee
              <span className="flex h-7 w-7 items-center justify-center bg-ivory/10">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

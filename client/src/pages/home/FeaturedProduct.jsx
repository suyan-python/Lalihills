import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SmartVideo from "../../components/SmartVideo";

const FeaturedProduct = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-lightWhite text-ink">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[65vh] overflow-hidden lg:min-h-screen"
        >
          <SmartVideo
            src="/videos/picked.mp4"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* VERY SUBTLE DEPTH */}
          <div className="absolute inset-0 bg-ink/5" />

          {/* VIDEO LABEL */}
          <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10">
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/70">
              From the hills of Nepal
            </span>
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex min-h-[50vh] items-center bg-ivory px-7 py-20 sm:px-12 lg:min-h-screen lg:px-16 xl:px-20">
          <div className="w-full max-w-xl">
            {/* LABEL */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-[8px] font-medium uppercase tracking-[0.4em] text-soil/60 sm:text-[9px]"
            >
              Featured Coffee
            </motion.span>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="header mt-6 text-[clamp(3.8rem,7vw,7rem)] uppercase leading-[0.82] tracking-[-0.065em] text-ink"
            >
              Laali Hills
              <br />
              <span className="italic text-red">Arabica.</span>
            </motion.h2>

            {/* SHORT DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-sm text-[12px] leading-6 text-ink/55 sm:text-[13px] sm:leading-7"
            >
              Grown in the highlands of Nepal. Roasted to let the character of
              its origin speak.
            </motion.p>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex items-center gap-6 border-t border-ink/10 pt-5"
            >
              <div>
                <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                  Origin
                </span>
                <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                  Nepal
                </span>
              </div>

              <span className="h-7 w-px bg-ink/10" />

              <div>
                <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                  Process
                </span>
                <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                  Washed
                </span>
              </div>

              <span className="h-7 w-px bg-ink/10" />

              <div>
                <span className="block text-[7px] uppercase tracking-[0.3em] text-stone">
                  Roast
                </span>
                <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-ink">
                  Medium
                </span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <Link
                to="/shop/coffee"
                className="group inline-flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.3em] text-ink"
              >
                <span className="border-b border-ink/30 pb-1 transition-colors duration-500 group-hover:border-red">
                  Explore Coffee
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-ivory">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

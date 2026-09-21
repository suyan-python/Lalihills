import { motion } from "framer-motion";
import cherry from "../../assets/explore/cherry.jpg";

const ExploreLand = () => {
  return (
    <section className="relative overflow-hidden bg-lightWhite">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-32 md:px-12 md:py-40 lg:px-16 lg:py-48">
        {/* Section Intro */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-20 lg:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="header mt-5 max-w-lg text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.84] tracking-[-0.055em] text-ink">
              Where the
              <br />
              <span className="text-ink/35">hills meet coffee.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl md:justify-self-end"
          ></motion.div>
        </div>

        {/* Main Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden sm:mt-20 md:mt-28 rounded-4xl"
        >
          <div className="aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
            <img
              src={cherry}
              alt="Coffee growing landscape in the hills of Nepal"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 md:bottom-9 md:left-9">
            <span className="text-[6px] uppercase tracking-[0.3em] text-lightCream/75 sm:text-[7px] sm:tracking-[0.4em]">
              mountain & mid hill regions
            </span>
          </div>

          <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 md:bottom-9 md:right-9">
            <span className="text-[6px] uppercase tracking-[0.3em] text-lightCream/75 sm:text-[7px] sm:tracking-[0.4em]">
              arabica coffee
            </span>
          </div>
        </motion.div>

        {/* Closing Thought */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.72, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-24 max-w-3xl text-center sm:mt-32 md:mt-40"
        >
          <p className="header text-[clamp(2rem,5vw,4.5rem)] uppercase leading-[0.88] tracking-[-0.055em] text-ink">
            Geography becomes
            <span className="text-ink/30"> character.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreLand;

import { motion } from "framer-motion";
import cherry from "../../assets/explore/cherry.jpg";

const ExploreLand = () => {
  return (
    <section className="relative bg-lightWhite text-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-32 md:px-12 md:py-40 lg:px-16 lg:py-44">
        {/* Intro */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="header text-[clamp(3.2rem,7vw,6.3rem)] uppercase leading-[0.8] tracking-[-0.065em] text-center">
              Coffee grows
              <br />
              <span className="text-ink/25">with the landscape.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end md:pb-2"
          ></motion.div>
        </div>

        {/* Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 sm:mt-28 md:mt-36"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_0.5fr] md:gap-5">
            {/* Main image */}
            <div className="group relative overflow-hidden rounded-[2rem]">
              <div className="aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
                <img
                  src={cherry}
                  alt="Coffee growing landscape in the hills of Nepal"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <span className="text-[7px] uppercase tracking-[0.4em] text-lightCream/70">
                  Nepal
                </span>

                <p className="header mt-2 text-2xl uppercase leading-none tracking-[-0.04em] text-lightCream sm:text-3xl">
                  The coffee hills
                </p>
              </div>
            </div>

            {/* Side information */}
            <div className="flex flex-col justify-between rounded-[2rem] bg-hill p-7 text-lightCream sm:p-9 md:p-10">
              <div>
                <span className="text-[7px] uppercase tracking-[0.4em] text-lightCream/40">
                  Growing environment
                </span>
              </div>

              <div className="mt-16 md:mt-0">
                <div className="border-t border-lightCream/15 py-5">
                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/40">
                    Landscape
                  </span>

                  <p className="mt-2 text-[11px] font-light text-lightCream/80">
                    Hills, valleys and terraced farmland
                  </p>
                </div>

                <div className="border-t border-lightCream/15 py-5">
                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/40">
                    Crop
                  </span>

                  <p className="mt-2 text-[11px] font-light text-lightCream/80">
                    Primarily Arabica coffee
                  </p>
                </div>

                <div className="border-t border-lightCream/15 py-5">
                  <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/40">
                    Character
                  </span>

                  <p className="mt-2 text-[11px] font-light text-lightCream/80">
                    Shaped by place, altitude and climate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreLand;

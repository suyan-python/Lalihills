import laliStampLogo from "../../assets/logo/round.svg";
import { motion } from "framer-motion";
import SmartVideo from "../../components/SmartVideo";
import Button from "../../components/Button";

const Halfhalf = () => {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          {/* LEFT — CONTENT */}
          <div className="flex min-h-[60vh] items-center justify-center bg-hill px-8 py-16 sm:px-12 lg:min-h-screen lg:px-16 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="max-w-xl text-center lg:text-left"
            >
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
                className="mt-5 text-center text-[clamp(3.4rem,6.5vw,6.5rem)] font-medium  leading-[0.82] tracking-[-0.065em] text-lightCream sm:mt-6 md:text-left"
              >
                <span className="header uppercase">From the hills</span>
                <br />
                <span className="italic text-lightCream/80 font-light text-6xl tracking-[0em] ">
                  to your cup.{" "}
                </span>
              </motion.h2>

              {/* DETAILS */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 13 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="mx-auto mt-[34px] flex max-w-md items-center justify-center gap-[21px] lg:mx-0 lg:justify-start"
              >
                {["Nepal", "High Altitude", "Whole Leaf"].map((item, index) => (
                  <div key={item} className="flex items-center gap-[21px]">
                    <span className="whitespace-nowrap text-[11px] font-light uppercase tracking-[0.18em] text-lightCream/80">
                      {item}
                    </span>

                    {index !== 2 && (
                      <span className="h-[3px] w-[3px] shrink-0 rotate-45 bg-[#C5A675]/80" />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="mt-32"
              >
                <Button to="/shop/tea" variant="light">
                  Explore Leaves
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — VIDEO */}
          <div className="relative min-h-[60vh] overflow-hidden lg:min-h-screen">
            <SmartVideo
              src="/videos/leaves.mp4"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* CENTER STAMP */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-50 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lightCream/40 bg-lightCream/10 p-3 backdrop-blur-[2px] sm:h-32 sm:w-32 lg:h-36 lg:w-36">
          <div className="absolute inset-2 rounded-full border border-dashed border-lightCream/30" />

          <img
            src={laliStampLogo}
            alt="Laali Hills"
            className="relative z-10 h-full w-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Halfhalf;

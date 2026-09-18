import laliStampLogo from "../../assets/logo/round.svg";
import { motion } from "framer-motion";
import SmartVideo from "../../components/SmartVideo";

const Halfhalf2 = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT — VIDEO */}
        <div className="relative min-h-[60vh] overflow-hidden lg:min-h-screen">
          <SmartVideo
            src="/videos/green.mp4"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT — CONTENT */}
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
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="subheader mt-7 max-w-2xl text-[clamp(3.6rem,6.8vw,6.8rem)] uppercase leading-[0.82] tracking-[-0.065em] text-lightCream font-medium"
            >
              Where
              <br />
              <span className="italic text-cream">Laali</span>
              <br />
              begins.
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="mx-auto mt-10 flex max-w-md items-center justify-center gap-5 lg:mx-0 lg:justify-start"
            >
              <span className="text-[13px] font-medium tracking-wide text-lightCream">
                Nepal
              </span>

              <span className="h-3 w-px bg-lightCream/20" />

              <span className="text-[13px] font-medium tracking-wide text-lightCream">
                Higher Belt
              </span>

              <span className="h-3 w-px bg-lightCream/20" />

              <span className="text-[13px] font-medium tracking-wide text-lightCream">
                Laali Hills
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CENTER STAMP */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lightCream/40 bg-lightCream/10 p-3 backdrop-blur-[2px] sm:h-32 sm:w-32 lg:h-36 lg:w-36">
        <div className="absolute inset-2 rounded-full border border-dashed border-lightCream/30" />

        <img
          src={laliStampLogo}
          alt="Laali Hills"
          className="relative z-10 h-full w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Halfhalf2;

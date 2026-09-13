import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartVideo from "../../components/SmartVideo";

const AuthenticSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // LIQUID LAYER 01 — DEEP RED
  const layerOneY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.72],
    ["110%", "20%", "0%"],
  );

  // LIQUID LAYER 02 — RED
  const layerTwoY = useTransform(
    scrollYProgress,
    [0.08, 0.5, 0.78],
    ["120%", "28%", "0%"],
  );

  // LIQUID LAYER 03 — SOIL
  const layerThreeY = useTransform(
    scrollYProgress,
    [0.16, 0.55, 0.82],
    ["125%", "35%", "0%"],
  );

  // LIQUID LAYER 04 — HILL
  const layerFourY = useTransform(
    scrollYProgress,
    [0.24, 0.6, 0.86],
    ["130%", "40%", "0%"],
  );

  // FINAL IVORY LAYER
  const layerFiveY = useTransform(
    scrollYProgress,
    [0.32, 0.65, 0.9],
    ["135%", "55%", "0%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-ivory"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ===================================================== */}
        {/* VIDEO */}
        {/* ===================================================== */}

        <motion.div
          className="absolute inset-0"
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 0.65, 1],
              ["0%", "-4%", "-4%"],
            ),
          }}
        >
          <SmartVideo
            src="/videos/know-origin.mp4"
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        {/* VIDEO TREATMENT */}
        <div className="absolute inset-0 bg-ink/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 via-45% to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />

        {/* ===================================================== */}
        {/* LIQUID LAYERS */}
        {/* ===================================================== */}

        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          {/* LAYER 01 — DEEP RED */}
          <motion.div
            style={{ y: layerOneY }}
            className="absolute -bottom-[5%] -left-[15%] h-[75%] w-[125%] rounded-[48%_52%_42%_58%/58%_45%_55%_42%] bg-deepRed"
          />

          {/* LAYER 02 — RED */}
          <motion.div
            style={{ y: layerTwoY }}
            className="absolute -bottom-[8%] -left-[20%] h-[70%] w-[135%] rounded-[58%_42%_50%_50%/45%_55%_45%_55%] bg-red"
          />

          {/* LAYER 03 — SOIL */}
          <motion.div
            style={{ y: layerThreeY }}
            className="absolute -bottom-[10%] -left-[18%] h-[66%] w-[130%] rounded-[42%_58%_52%_48%/52%_42%_58%_48%] bg-soil"
          />

          {/* LAYER 04 — HILL */}
          <motion.div
            style={{ y: layerFourY }}
            className="absolute -bottom-[12%] -left-[20%] h-[62%] w-[140%] rounded-[52%_48%_45%_55%/48%_58%_42%_52%] bg-hill"
          />

          {/* LAYER 05 — IVORY */}
          <motion.div
            style={{ y: layerFiveY }}
            className="absolute -bottom-[15%] -left-[15%] h-[58%] w-[130%] rounded-[46%_54%_55%_45%/55%_45%_55%_45%] bg-ivory"
          />
        </div>

        {/* ===================================================== */}
        {/* CONTENT */}
        {/* ===================================================== */}

        <div className="relative z-30 flex h-full items-center px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16 xl:px-20">
          <div className="w-full max-w-2xl">
            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.35,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="subheader mt-5 max-w-2xl text-[clamp(3rem,8vw,7.5rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em] text-lightCream sm:mt-6 lg:mt-7"
            >
              Know
              <br />
              Your
              <br />
              <span className="font-medium text-red">Origin.</span>
            </motion.h2>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ml-5 mt-8 sm:mt-10"
            >
              <button className="group inline-flex items-center gap-4 border border-lightCream/30 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.28em] text-lightCream transition-all duration-500 hover:border-lightCream/60 hover:bg-lightCream hover:text-ink">
                <span>Explore</span>
              </button>
            </motion.div>
          </div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-8 right-8 z-10 hidden text-right sm:block lg:bottom-12 lg:right-12"
          >
            <span className="block text-[7px] font-medium uppercase tracking-[0.38em] text-lightCream/45">
              Grown above the ordinary
            </span>

            <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-lightCream/75">
              Nepal · Himalayan Origin
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticSection;

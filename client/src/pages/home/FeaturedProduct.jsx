import { Link } from "react-router-dom";
import SmartVideo from "../../components/SmartVideo";
import { ArrowUpRight, Leaf } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../../components/Button";
import laliStampLogo from "../../assets/logo/round.svg";

const FeaturedProduct = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const liquidOneX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-35%", "0%", "25%"],
  );
  const liquidOneY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["20%", "0%", "-15%"],
  );

  const liquidTwoX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["30%", "0%", "-25%"],
  );
  const liquidTwoY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-10%", "5%", "25%"],
  );

  const liquidThreeX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-20%", "5%", "30%"],
  );
  const liquidThreeY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["30%", "0%", "-20%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-red text-ink z-0"
    >
      <div className="grid min-h-screen lg:sticky lg:top-0 lg:h-screen lg:grid-cols-2">
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
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-ink">
              From the hills of Nepal
            </span>
          </div>
        </motion.div>
        {/* CONTENT */}
        <div className="relative flex min-h-[50vh] items-center overflow-hidden bg-deepRed px-7 py-20 sm:px-12 lg:min-h-screen lg:px-16 xl:px-20">
          {" "}
          {/* LIQUID SCROLL LAYERS */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              style={{
                x: liquidOneX,
                y: liquidOneY,
              }}
              className="absolute -left-[25%] -top-[18%] h-[65%] w-[80%] rounded-[48%] bg-lightWhite/[0.05] blur-[4px]"
            />

            <motion.div
              style={{
                x: liquidTwoX,
                y: liquidTwoY,
              }}
              className="absolute -right-[25%] top-[5%] h-[65%] w-[80%] rounded-[50%] bg-hill/[0.055] blur-[5px]"
            />

            <motion.div
              style={{
                x: liquidThreeX,
                y: liquidThreeY,
              }}
              className="absolute -bottom-[20%] -left-[15%] h-[60%] w-[85%] rounded-[50%] bg-soil/[0.05] blur-[6px]"
            />

            <motion.div
              style={{
                x: liquidTwoX,
                y: liquidOneY,
              }}
              className="absolute -bottom-[15%] -right-[20%] h-[50%] w-[70%] rounded-[50%] bg-deepRed/[0.035] blur-[8px]"
            />
          </div>
          {/* WATERMARKS */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Leaf
              size={300}
              strokeWidth={0.55}
              className="absolute -right-24 -top-16 rotate-[25deg] text-hill/[0.035]"
            />

            <Leaf
              size={250}
              strokeWidth={0.55}
              className="absolute -bottom-20 -left-16 rotate-[-115deg] text-red/[0.025]"
            />
          </div>
          <div className="w-full max-w-3xl">
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
              className="mt-5 text-center text-[clamp(3.4rem,6.5vw,6.5rem)] font-medium  leading-[0.82] tracking-[-0.065em] text-lightCream sm:mt-6 md:text-right"
            >
              <span className="header uppercase">Coffee made by</span>
              <br />
              <span className="italic text-lightCream/80 font-light text-6xl tracking-[0em]">
                people who know.
              </span>
            </motion.h2>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 13 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-12"
            >
              <div className="grid grid-cols-3 gap-0">
                {[
                  { number: "01", label: "Origin", value: "Nepal" },
                  { number: "02", label: "Producers", value: "Local Farmers" },
                  { number: "03", label: "Altitude", value: "1,300–2,200 m" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`min-w-0 ${
                      index !== 0
                        ? "border-l border-lightCream/15 pl-3 sm:pl-5 lg:pl-7"
                        : "pr-2 sm:pr-4"
                    } ${index !== 2 ? "mr-3 sm:mr-5 lg:mr-7" : ""}`}
                  >
                    <span className="block text-[8px] font-medium uppercase tracking-[0.2em] text-lightCream/45 sm:text-[9px]">
                      {item.label}
                    </span>

                    <span className="mt-2 block text-[11px] font-normal leading-snug tracking-[-0.02em] text-lightCream sm:text-[13px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-32 text-center md:text-left "
            >
              <Button to="/shop/coffee" variant="light">
                Explore Beans
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* CENTER STAMP */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 z-50 flex h-28 w-28 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-lightCream/40 bg-lightCream/10 p-3 backdrop-blur-[2px] sm:h-32 sm:w-32 lg:h-36 lg:w-36">
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

export default FeaturedProduct;

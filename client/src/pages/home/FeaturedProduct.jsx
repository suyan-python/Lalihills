import { Link } from "react-router-dom";
import SmartVideo from "../../components/SmartVideo";
import { ArrowUpRight, Leaf } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../../components/Button";

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
      className="relative min-h-screen overflow-hidden bg-lightWhite text-ink"
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
        <div className="relative flex min-h-[50vh] items-center overflow-hidden bg-ivory px-7 py-20 sm:px-12 lg:min-h-screen lg:px-16 xl:px-20">
          {" "}
          {/* LIQUID SCROLL LAYERS */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              style={{
                x: liquidOneX,
                y: liquidOneY,
              }}
              className="absolute -left-[25%] -top-[18%] h-[65%] w-[80%] rounded-[48%] bg-red/[0.05] blur-[4px]"
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
              className="block text-[9px] font-medium uppercase tracking-[0.38em] text-soil/65 sm:text-[10px] text-center md:text-left"
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
              className="subheader mt-5 max-w-2xl text-[clamp(3.6rem,6.8vw,6.8rem)] uppercase leading-[0.82] tracking-[-0.065em] text-ink sm:mt-6 text-center md:text-left font-medium"
            >
              Laali Hills
              <br />
              <span className="italic text-red">Arabica.</span>
            </motion.h2>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-2 max-w-xl  pt-6 md:mt-10 "
            >
              <div className="grid grid-cols-3 text-center md:text-left">
                <div>
                  <span className="block text-[7px] font-medium uppercase tracking-[0.3em] text-stone sm:text-[8px]">
                    Origin
                  </span>
                  <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-ink sm:text-[11px]">
                    Nepal
                  </span>
                </div>

                <div className=" pl-5 sm:pl-6">
                  <span className="block text-[7px] font-medium uppercase tracking-[0.3em] text-stone sm:text-[8px]">
                    Process
                  </span>
                  <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-ink sm:text-[11px]">
                    Washed
                  </span>
                </div>

                <div className=" pl-5 sm:pl-6">
                  <span className="block text-[7px] font-medium uppercase tracking-[0.3em] text-stone sm:text-[8px]">
                    Roast
                  </span>
                  <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-ink sm:text-[11px]">
                    Medium
                  </span>
                </div>
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
              className="mt-14 text-center md:text-left"
            >
              <Button to={"/shop/coffee"}>Explore Coffee</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

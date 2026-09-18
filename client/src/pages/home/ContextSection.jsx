import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SmartVideo from "../../components/SmartVideo";

import context from "/videos/context.mp4";
import Button from "../../components/Button";

const ContextSection = () => {
  return (
    <section
      className="
            relative
            flex
            min-h-[75vh]
            items-center
            justify-center
            overflow-hidden
            bg-ink 
        "
    >
      <SmartVideo
        src={context}
        className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
      />

      <div
        className="
                absolute
                inset-0
                bg-ink/55
            "
      />

      <div
        className="
                absolute
                inset-0
                bg-gradient-to-b
                from-deepRed/10
                via-transparent
                to-ink/40
            "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
                    relative
                    z-10
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    items-center
                    px-6
                    py-24
                    text-center
                    sm:px-10
                    lg:py-32
                "
      >
        {/* Eyebrow */}

        <div className="mb-7 flex items-center gap-4">
          <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/60 sm:text-[9px]">
            Beyond the cup
          </span>
        </div>

        <h2 className="header max-w-7xl text-[clamp(3.6rem,6.8vw,6.8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em] text-lightWhite">
          Discover
          <br />
          the
          <span className="text-ivory"> context.</span>
        </h2>

        <Button to={"/explore"} variant="light" className="mt-5">
          Explore
        </Button>
      </motion.div>
    </section>
  );
};

export default ContextSection;

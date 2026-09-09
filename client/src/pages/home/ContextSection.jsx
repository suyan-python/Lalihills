import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import context from "/videos/context.mp4";

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
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
      >
        <source src={context} type="video/mp4" />
      </video>

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

        <h2 className="header max-w-7xl text-[clamp(4rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-lightWhite">
          Discover
          <br />
          the
          <span className="text-ivory"> context.</span>
        </h2>

        <Link
          to="/explore"
          className="group mt-10 inline-flex items-center gap-4 border border-lightCream/30 px-5 py-3.5 text-lightWhite transition-all duration-500 hover:border-lightCream/60 hover:bg-lightCream hover:text-ink sm:px-6 sm:py-4"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
            Explore
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.2}
            className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      <div
        className="
                absolute
                bottom-6
                left-6
                right-6
                z-10
                flex
                items-center
                justify-between
                sm:bottom-8
                sm:left-10
                sm:right-10
            "
      >
        <span
          className="
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-lightCream/40
                "
        >
          Nepal
        </span>

        <span
          className="
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-lightCream/40
                "
        >
          Laali Hills
        </span>
      </div>
    </section>
  );
};

export default ContextSection;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import context from "/videos/collab.mp4";

const Collab = () => {
  return (
    <section
      className="
            relative
            flex
            min-h-screen
            items-center
            justify-center
            overflow-hidden
            bg-ink
        "
    >
      {/* Background Video */}

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

      {/* Dark cinematic overlay */}

      <div
        className="
                absolute
                inset-0
                bg-ink/55
            "
      />

      {/* Subtle brand tint */}

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

      {/* Content */}

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
                    max-w-3xl
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

        <div
          className="
                    mb-7
                    flex
                    items-center
                    gap-4
                "
        >
          <span
            className="
                        text-[8px]
                    uppercase
                    tracking-[0.45em]
                    text-lightCream/75 
                    "
          >
            Title
          </span>
        </div>

        {/* Title */}

        <h2
          className="
                    header
                    max-w-3xl
                    text-[clamp(3.5rem,8vw,7rem)]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
                text-lightWhite
                "
        >
          The
          <span className="text-ivory">Collab.</span>
        </h2>

        {/* CTA */}

        <Link
          to="/explore"
          className="
                        group
                        mt-24
                        inline-flex
                        items-center
                        gap-5
                        border
                        border-lightCream/40
                        bg-lightWhite
                        px-4
                        py-2
                        text-ink
                        transition-all
                        duration-500
                        hover:border-ivory/40
                        hover:bg-ivory
                        sm:px-8 font-semibold
                    "
        >
          <span
            className="
                        text-[12px]
                        font-medium
                        uppercase
                        tracking-[0.35em]
                    "
          >
            Explore the Collab
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.2}
            className="
                            transition-transform
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                        "
          />
        </Link>
      </motion.div>

      {/* Bottom location detail */}

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

export default Collab;

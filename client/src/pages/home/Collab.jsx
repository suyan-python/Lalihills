import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SmartVideo from "../../components/SmartVideo";

import context from "/videos/collab.mp4";
import Button from "../../components/Button";

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
                    text-[clamp(3.6rem,6.8vw,6.8rem)]
                font-medium
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
        <Button variant="light" className="mt-10">
          Explore the Collab
        </Button>
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
      </div>
    </section>
  );
};

export default Collab;

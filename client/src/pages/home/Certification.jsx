import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import roundedLogo from "../../assets/logo/round.svg";
import coffeeBeans from "../../assets/images/coffee-beans.jpg";

const CertificationSection = () => {
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
      {/* Background Image */}

      <img
        src={coffeeBeans}
        alt="Laali Hills certification"
        loading="lazy"
        className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
      />

      {/* Dark image treatment */}

      <div
        className="
                absolute
                inset-0
                bg-ink/60
            "
      />

      {/* Subtle red atmosphere */}

      <div
        className="
                absolute
                inset-0
                bg-gradient-to-br
                from-deepRed/15
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
          amount: 0.25,
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
                    max-w-4xl
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
                        text-lightCream/75 font-bold
                    "
          >
            Our standards
          </span>
        </div>

        {/* Certification Logo */}

        <div
          className="
    mb-8
    flex
    h-28
    w-28
    items-center
    justify-center
    rounded-full
    border
    border-lightCream/30
    bg-ink/20
    p-3
    backdrop-blur-sm
    sm:h-32
    sm:w-32
"
        >
          <img
            src={roundedLogo}
            alt="Laali Hills"
            className="
            h-full
            w-full
            rounded-full
            object-contain
        "
          />
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
          We are a
          <br />
          <span
            className="
                        text-cream
                    "
          >
            Certified.
          </span>
        </h2>

        {/* Certification list */}

        <div
          className="
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-8
                    gap-y-4
                    pt-5
                "
        >
          <span
            className="
                        text-[7px]
                        uppercase
                        tracking-[0.3em]
                        text-lightCream/55
                    "
          >
            Quality assured
          </span>

          <span
            className="
                        h-1
                        w-1
                        rounded-full
                        bg-red
                    "
          />

          <span
            className="
                        text-[7px]
                        uppercase
                        tracking-[0.3em]
                        text-lightCream/55
                    "
          >
            Traceable origin
          </span>

          <span
            className="
                        h-1
                        w-1
                        rounded-full
                        bg-red
                    "
          />

          <span
            className="
                        text-[7px]
                        uppercase
                        tracking-[0.3em]
                        text-lightCream/55
                    "
          >
            Responsible sourcing
          </span>
        </div>

        {/* CTA */}

        <Link
          to="/certifications"
          className="
                        group
                        mt-10
                        inline-flex
                        items-center
                        gap-5
                        border
                        border-lightCream/40
                        px-5
                        py-2
                        bg-lightWhite
                        text-ink
                        transition-all
                        duration-500
                        hover:border-lightCream
                        hover:bg-lightCream
                    "
        >
          <span
            className="
                        text-[12px]
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                    "
          >
            View certifications
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
    </section>
  );
};

export default CertificationSection;

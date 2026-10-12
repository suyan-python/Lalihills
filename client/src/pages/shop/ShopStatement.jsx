import { motion } from "framer-motion";

const ShopStatement = () => {
  return (
    <section
      className="
                relative
                overflow-hidden
                bg-ink
                py-14
                sm:py-18
                lg:py-20
            "
    >
      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
                        flex
                        w-max
                        shrink-0
                        whitespace-nowrap
                    "
        >
          <span
            className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
          >
            NEPAL
          </span>

          <span
            className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
          >
            NEPAL
          </span>

          <span
            className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
          >
            NEPAL
          </span>

          <span
            className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
          >
            NEPAL
          </span>
        </motion.div>
      </div>

      {/* =================================================
                MAIN STATEMENT
                LEFT → RIGHT
            ================================================= */}

      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
                        flex
                        w-max
                        shrink-0
                        items-center
                        whitespace-nowrap header
                    "
        >
          {/* FIRST */}

          <div className="flex items-center">
            <p
              className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                leading-none
                                tracking-[-0.05em]
                                text-[#F8EDE8]
                            "
            >
              Discover the product.
            </p>

            <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />

            <p
              className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                italic
                                leading-none
                                tracking-[-0.05em]
                                text-[#D9828A]
                            "
            >
              Discover Laali Hills.
            </p>

            <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />
          </div>

          {/* DUPLICATE */}

          <div className="flex items-center">
            <p
              className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                leading-none
                                tracking-[-0.05em]
                                text-[#F8EDE8]
                            "
            >
              Discover the product.
            </p>

            <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />

            <p
              className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                italic
                                leading-none
                                tracking-[-0.05em]
                                text-[#D9828A]
                            "
            >
              Discover the place.
            </p>

            <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopStatement;

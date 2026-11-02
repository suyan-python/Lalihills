import { motion, useReducedMotion } from "framer-motion";

const ShopStatement = () => {
  const reduceMotion = useReducedMotion();

  const copy =
    "Every cup carries a story of where it began. From Nepal's hills to the rituals of everyday life, discover the people, land and craft behind what we make.";

  const words = copy.split(" ");

  const reveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  return (
    <section className="relative isolate overflow-hidden bg-leafTint py-20 text-ink sm:py-28 lg:py-36">
      {/* BACKGROUND TYPOGRAPHY */}
      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none">
        <motion.span
          initial={{ x: "0%" }}
          whileInView={{ x: reduceMotion ? "0%" : "-4%" }}
          viewport={{ once: true }}
          transition={{
            duration: 18,
            ease: "easeInOut",
          }}
          className="header whitespace-nowrap text-[34vw] font-medium leading-none tracking-[-0.11em] text-leaf/[0.055]"
        >
          NEPAL
        </motion.span>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* TOP EDITORIAL DETAILS */}
        <div className="mb-14 flex items-center justify-between sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex items-center gap-3"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-soil sm:text-[10px]">
              The Laali Hills Story
            </span>
          </motion.div>
        </div>

        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.35fr_0.65fr] md:items-end md:gap-16 lg:gap-24">
          {/* HEADING */}
          <div>
            <div className="mb-5 overflow-hidden sm:mb-7">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={reveal}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[9px] uppercase tracking-[0.22em] text-soil/70 sm:text-[10px]"
              >
                A connection to the land
              </motion.p>
            </div>

            <h2 className="header text-[clamp(3.6rem,8.2vw,8rem)] font-medium uppercase leading-[0.83] tracking-[-0.075em]">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={reveal}
                  transition={{
                    duration: 1.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  A little closer
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={reveal}
                  transition={{
                    duration: 1.5,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block font-normal italic text-red"
                >
                  to the hills.
                </motion.span>
              </span>
            </h2>

            {/* DRAWING LINE */}
            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <svg
                viewBox="0 0 150 22"
                fill="none"
                className="h-5 w-32 overflow-visible"
                aria-hidden="true"
              >
                <motion.path
                  d="M1 17 C 24 17, 27 3, 49 7 S 80 21, 99 10 S 127 2, 149 7"
                  stroke="#A4161A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.4,
                    delay: 0.7,
                    ease: "easeInOut",
                  }}
                />
              </svg>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="text-[8px] uppercase tracking-[0.18em] text-soil/65"
              >
                Rooted in Nepal
              </motion.span>
            </div>
          </div>

          {/* SUPPORTING STORY */}
          <div className="md:pb-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1.3,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="max-w-md text-sm leading-[2] text-soil sm:text-base sm:leading-[2.1]">
                {words.map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    initial={{ opacity: 0.15 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion ? 0 : 0.45 + index * 0.035,
                      ease: "easeOut",
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* ORIGIN SIGNATURE */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="mt-9 flex items-center gap-4 sm:mt-12"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf/20">
                <span className="header text-sm italic text-leaf">L.</span>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Laali Hills
                </p>
                <p className="text-[8px] uppercase tracking-[0.16em] text-soil/65">
                  From the hills of Nepal
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM EDITORIAL FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-16 flex items-center justify-between border-t border-leaf/15 pt-5 sm:mt-24 lg:mt-28"
        >
          <span className="text-[8px] uppercase tracking-[0.18em] text-soil/65 sm:text-[9px]">
            From the land. With intention.
          </span>

          <span className="text-[8px] uppercase tracking-[0.18em] text-soil/65 sm:text-[9px]">
            27° N — Nepal
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopStatement;

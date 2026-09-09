import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FeatureStandard = () => {
  const questions = [
    "Where it came from.",
    "Who produced it.",
    "What the land is like.",
    "How it was cultivated.",
    "Why we chose it.",
    "What makes it special.",
  ];

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-lightWhite sm:px-10 sm:py-28 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-lightWhite/15 sm:inset-x-10 sm:top-8 lg:inset-x-16" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24"
        >
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-red" />

              <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightWhite/55 sm:text-[9px]">
                A way of seeing
              </span>
            </div>

            <h2 className="header max-w-3xl text-[clamp(4.5rem,11vw,10rem)] uppercase leading-[0.78] tracking-[-0.07em] text-lightWhite">
              The hills
              <br />
              <span className="italic text-red">come first</span>
              <span className="text-lightWhite/35">.</span>
            </h2>

            <p className="mt-8 max-w-sm text-[12px] leading-6 text-lightWhite/55 sm:text-[13px] sm:leading-7">
              Everything we feature begins with a genuine connection to Nepal.
            </p>
          </div>

          <div className="border-t border-lightWhite/20">
            <div className="flex items-center justify-between py-4">
              <span className="text-[8px] uppercase tracking-[0.35em] text-lightWhite/45">
                Field notes
              </span>

              <span className="text-[8px] uppercase tracking-[0.35em] text-lightWhite/35">
                06 / 06
              </span>
            </div>

            {questions.map((question, index) => (
              <motion.div
                key={question}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center justify-between border-b border-lightWhite/12 py-4 sm:py-4.5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[7px] tracking-[0.2em] text-lightWhite/35">
                    0{index + 1}
                  </span>

                  <span className="text-[12px] tracking-wide text-lightWhite/75 transition-colors duration-500 group-hover:text-lightWhite sm:text-[13px]">
                    {question}
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1}
                  className="text-lightWhite/35 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DIVIDER STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-20 flex items-center justify-between border-t border-lightWhite/15 pt-5"
        >
          <span className="text-[7px] uppercase tracking-[0.35em] text-lightWhite/35">
            Laali Hills
          </span>

          <span className="text-[7px] uppercase tracking-[0.35em] text-lightWhite/45">
            Origin first
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureStandard;

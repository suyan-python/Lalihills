import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { insideTheCup } from "../data/trending";

const InsideTheCup = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-hill px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        {/* SECTION HEADER */}
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14 lg:mb-16">
          <div>
            <h2 className="header mt-6 max-w-3xl text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.04em] text-lightCream">
              {insideTheCup.title}
            </h2>
          </div>
        </div>

        {/* FEATURE */}
        <div className="grid lg:grid-cols-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[380px] overflow-hidden bg-ink sm:aspect-[5/4] sm:min-h-0 lg:col-span-6 lg:aspect-auto lg:min-h-[700px]"
          >
            <motion.img
              src={insideTheCup.image}
              alt={insideTheCup.productName}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            {/* Subtle image treatment */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
              <span className="text-[8px] uppercase tracking-[0.3em] text-lightCream/80">
                A closer look
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-lightCream/65">
                Nepal
              </span>
            </div>
          </motion.div>

          {/* PRODUCT STORY */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-between bg-ivory px-6 py-9 sm:px-10 sm:py-12 lg:col-span-6 lg:px-12 lg:py-14 xl:px-16 xl:py-16"
          >
            <div>
              {/* PRODUCT HEADING */}
              <div className="flex items-start justify-between gap-4">
                <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-red">
                  Featured coffee
                </span>

                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red/70" />
              </div>

              <h3 className="subheader mt-8 break-words text-[clamp(3.5rem,6.5vw,6.5rem)] leading-[0.78] tracking-[-0.07em] text-brown">
                {insideTheCup.productName}
                <span className="text-red">.</span>
              </h3>

              <p className="mt-8 max-w-lg text-[12px] leading-[1.9] text-brown/65 sm:text-[13px]">
                {insideTheCup.statement}
              </p>

              {/* TASTING NOTES */}
              <div className="mt-9 border-y border-brown/15 py-5">
                <span className="mb-4 block text-[8px] font-medium uppercase tracking-[0.3em] text-brown/40">
                  In the cup
                </span>

                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {insideTheCup.notes.map((note, index) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.14em] text-brown/80 sm:text-[10px]"
                    >
                      {note}
                      {index !== insideTheCup.notes.length - 1 && (
                        <span className="h-1 w-1 rounded-full bg-red/55" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* ORIGIN DETAILS */}
              <div className="mt-3">
                {insideTheCup.details.map((detail, index) => (
                  <div
                    key={detail.label}
                    className="group/row grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-brown/10 py-[17px]"
                  >
                    <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-brown/45 transition-colors duration-300 group-hover/row:text-red sm:text-[9px]">
                      <span className="mr-3 tabular-nums text-red/65">
                        0{index + 1}
                      </span>
                      {detail.label}
                    </span>

                    <span className="text-right text-[11px] leading-relaxed text-brown/80 sm:text-[12px]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={insideTheCup.href}
              className="group mt-10 flex w-full items-center justify-between border-b border-brown/25 pb-4 pt-2 text-[9px] font-medium uppercase tracking-[0.25em] text-brown transition-colors duration-300 hover:border-red hover:text-red sm:mt-12"
            >
              <span>Discover the coffee</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brown/20 transition-all duration-300 group-hover:border-red group-hover:bg-red group-hover:text-lightCream">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsideTheCup;

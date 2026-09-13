import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { insideTheCup } from "../data/trending";

const InsideTheCup = () => {
  return (
    <section className="overflow-hidden bg-hill px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-end justify-between sm:mb-16">
          <div>
            <h2 className="subheader mt-6 max-w-3xl text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.06em] text-lightCream">
              {insideTheCup.title}
            </h2>
          </div>
          <span className="hidden text-[8px] uppercase tracking-[0.35em] text-lightCream/25 sm:block">
            Laali Hills / Product Journal
          </span>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-6 lg:aspect-auto lg:min-h-[720px]">
            <motion.img
              src={insideTheCup.image}
              alt={insideTheCup.productName}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between bg-ivory px-7 py-10 sm:px-12 sm:py-14 lg:col-span-6 lg:px-16 lg:py-16 xl:px-20 ">
            <div>
              <div className="flex items-start justify-between gap-8">
                <div>
                  <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red">
                    {insideTheCup.process}
                  </span>
                  <h3 className="font-title mt-5 text-[clamp(3.5rem,7vw,7rem)] leading-[0.75] tracking-[-0.07em] text-brown">
                    {insideTheCup.productName}.
                  </h3>
                </div>
                <span className="text-[8px] uppercase tracking-[0.3em] text-brown/30">
                  01 / 04
                </span>
              </div>
              <p className="mt-8 max-w-md text-[13px] leading-6 text-brown/55">
                {insideTheCup.statement}
              </p>
              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-y border-brown/10 py-5">
                {insideTheCup.notes.map((note) => (
                  <span
                    key={note}
                    className="text-[9px] uppercase tracking-[0.25em] text-brown/60"
                  >
                    {note}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                {insideTheCup.details.map((detail, index) => (
                  <div
                    key={detail.label}
                    className="flex items-baseline justify-between border-b border-brown/10 py-4"
                  >
                    <span className="text-[8px] uppercase tracking-[0.3em] text-brown/35">
                      0{index + 1} / {detail.label}
                    </span>
                    <span className="text-[11px] text-brown/70">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={insideTheCup.href}
              className="group mt-12 inline-flex w-fit items-center gap-4 border-b border-brown/20 pb-2 text-[8px] font-medium uppercase tracking-[0.32em] text-brown transition-colors duration-500 hover:border-red hover:text-red"
            >
              Discover the coffee{" "}
              <ArrowUpRight
                size={13}
                strokeWidth={1.2}
                className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideTheCup;

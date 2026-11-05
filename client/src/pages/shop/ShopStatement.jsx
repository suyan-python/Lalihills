import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ShopStatement = ({ image = "/images/nepal-coffee-hills.jpg" }) => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stories = [
    {
      number: "01",
      title: "The land",
      description: "Every good story has a place to begin.",
    },
    {
      number: "02",
      title: "The craft",
      description: "Thoughtful choices make all the difference.",
    },
    {
      number: "03",
      title: "The ritual",
      description: "A little moment worth slowing down for.",
    },
  ];

  return (
    <section className="overflow-hidden bg-lightCream py-16 text-ink sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* MAIN EDITORIAL GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 lg:gap-24">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <img
              src={image}
              alt="The hills of Nepal"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <span className="text-[9px] uppercase tracking-[0.2em] text-lightWhite/80">
                Rooted in Nepal
              </span>
            </div>
          </motion.div>

          {/* STORY */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-6 text-[9px] uppercase tracking-[0.25em] text-red sm:text-[10px]"
            >
              From the hills, with care
            </motion.p>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="header max-w-xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]"
            >
              A little of Nepal,
              <span className="block font-normal italic text-red">
                in every cup.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-7 max-w-md text-sm leading-[2] text-soil sm:mt-9 sm:text-base"
            >
              We believe the best things carry a sense of where they come from.
              Laali Hills brings together the character of Nepal's hills and the
              simple joy of a good everyday brew.
            </motion.p>

            {/* STORY POINTS */}
            <div className="mt-10 border-t border-leaf/20 sm:mt-12">
              {stories.map((story, index) => (
                <motion.div
                  key={story.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.12 }}
                  className="flex items-center gap-5 border-b border-leaf/20 py-5"
                >
                  <span className="text-[9px] tracking-widest text-red">
                    {story.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="header text-lg">{story.title}</h3>
                    <p className="mt-1 text-xs text-soil/75">
                      {story.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                    className="text-soil/60"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BRAND SIGNATURE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex flex-col gap-3 border-t border-leaf/20 pt-6 sm:mt-24 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="header text-xl italic text-leaf">
            When the hills are happy, they are Laali.
          </span>

          <span className="text-[8px] uppercase tracking-[0.2em] text-soil/60">
            From the hills of Nepal
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopStatement;

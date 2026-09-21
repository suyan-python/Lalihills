import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const plantStages = [
  {
    number: "01",
    title: "The plant",
    text: "Coffee grows as an evergreen shrub or small tree, producing flowers before the fruit develops.",
  },
  {
    number: "02",
    title: "The flower",
    text: "Small, fragrant white flowers appear along the branches. After flowering, the coffee cherry begins to form.",
  },
  {
    number: "03",
    title: "The cherry",
    text: "The fruit develops over time, changing as it matures. Inside each cherry are usually two seeds.",
  },
  {
    number: "04",
    title: "The seed",
    text: "Those seeds are what we call green coffee. After processing and drying, they are ready for roasting.",
  },
];

const ExploreCoffeePlant = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={sectionRef} className="relative bg-hill text-lightWhite">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[1fr_0.85fr]">
        {/* Sticky visual */}
        <div className="relative h-[70vh] min-h-[520px] lg:sticky lg:top-0 lg:h-dvh">
          <div className="absolute inset-0 overflow-hidden">
            <motion.video
              style={{ scale: imageScale }}
              src="/videos/coffeePlant.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-ink/20" />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent" />
          </div>

          {/* Image label */}
          <div className="absolute bottom-7 left-6 sm:bottom-9 sm:left-8 md:left-12 lg:left-16">
            <p className="text-[7px] uppercase tracking-[0.4em] text-lightCream/60">
              Coffea arabica
            </p>

            <p className="mt-2 text-[9px] font-light text-lightCream/45">
              From flower to cherry to seed.
            </p>
          </div>

          {/* Chapter marker */}
          <div className="absolute left-6 top-7 sm:left-8 sm:top-9 md:left-12 md:top-12 lg:left-16">
            <span className="text-[7px] uppercase tracking-[0.35em] text-lightCream/55">
              The coffee plant
            </span>
          </div>
        </div>

        {/* Story */}
        <div className="relative px-6 py-24 sm:px-10 sm:py-32 md:px-16 md:py-40 lg:px-20 lg:py-48">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="text-[7px] uppercase tracking-[0.35em] text-lightWhite/35">
                Before the bean
              </span>

              <h2 className="header mt-5 text-[clamp(2.8rem,5vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.06em]">
                It starts
                <br />
                <span className="text-lightWhite/30">with a plant.</span>
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative mt-24 sm:mt-32">
              {/* Vertical line */}
              <div className="absolute left-[3px] top-1 bottom-0 w-px bg-lightWhite/10" />

              {plantStages.map((stage, index) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pb-24 pl-10 last:pb-0 sm:pb-32"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full bg-lightWhite/30" />

                  <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-lightWhite/30">
                    {stage.number}
                  </span>

                  <h3 className="header mt-3 text-[clamp(1.8rem,3vw,3rem)] uppercase leading-none tracking-[-0.04em] text-lightWhite">
                    {stage.title}
                  </h3>

                  <p className="mt-5 max-w-xs text-[10px] font-light leading-6 text-lightWhite/50 sm:text-[11px] sm:leading-7">
                    {stage.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCoffeePlant;

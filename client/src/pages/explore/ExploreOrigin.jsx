import dhankuta from "../../assets/origins/dhankuta.jpg";
import gulmi from "../../assets/origins/gulmi.jpg";
import kavre from "../../assets/origins/kavre.jpg";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const origins = [
  {
    name: "Dhankuta",
    region: "Eastern Nepal",
    image: dhankuta,
    description:
      "Coffee from the eastern hills of Nepal, shaped by its elevation, climate and farming landscape.",
  },
  {
    name: "Gulmi",
    region: "Western Nepal",
    image: gulmi,
    description:
      "The western hills offer another expression of Nepal's coffee-growing landscape and agricultural traditions.",
  },
  {
    name: "Kavre",
    region: "Central Nepal",
    image: kavre,
    description:
      "Closer to the central hills, coffee grows within a landscape of valleys, terraces and changing elevations.",
  },
];

const ExploreOrigins = () => {
  const sectionRef = useRef(null);
  const [activeOrigin, setActiveOrigin] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section ref={sectionRef} className="relative  bg-lightWhite">
      <div className="px-6 py-24 sm:px-8 sm:py-32 md:px-12 md:py-40 lg:px-0 lg:py-48">
        {/* Header */}
        <div className="mb-16 sm:mb-20 md:gap-16 lg:mb-28 lg:gap-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="header text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.84] tracking-[-0.06em] text-ink "
          >
            Nepal is not
            <br />
            <span className="text-ink/30">one origin.</span>
          </motion.h2>
        </div>

        {/* Scrollytelling */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — stays fixed */}
          <div className="hidden md:block">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <AnimatePresence mode="sync">
                <motion.img
                  key={origins[activeOrigin].image}
                  src={origins[activeOrigin].image}
                  alt={`${origins[activeOrigin].name} coffee growing region in Nepal`}
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={origins[activeOrigin].name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-10 left-8 lg:bottom-12 lg:left-12"
                >
                  <span className="block text-[7px] uppercase tracking-[0.4em] text-lightCream/60">
                    {origins[activeOrigin].region}
                  </span>

                  <span className="header mt-2 block text-3xl uppercase leading-none tracking-[-0.04em] text-lightCream">
                    {origins[activeOrigin].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT — scrolls normally */}
          <div className="relative">
            {origins.map((origin, index) => (
              <motion.article
                key={origin.name}
                onViewportEnter={() => setActiveOrigin(index)}
                viewport={{ amount: 0.65 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-h-screen flex-col justify-center px-8 py-24 lg:px-20"
              >
                {/* Mobile image */}
                <div className="mb-10 overflow-hidden rounded-3xl md:hidden">
                  <img
                    src={origin.image}
                    alt={`${origin.name} coffee growing region in Nepal`}
                    className="aspect-[4/5] h-full w-full object-cover"
                  />
                </div>

                <span className="text-[7px] uppercase tracking-[0.4em] text-stone">
                  {origin.region}
                </span>

                <h3 className="header mt-4 text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.06em] text-ink">
                  {origin.name}
                </h3>

                <p className="mt-8 max-w-sm text-[11px] font-light leading-7 text-ink/55 sm:text-xs">
                  {origin.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOrigins;

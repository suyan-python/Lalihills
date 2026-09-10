import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import hillsImage from "../../assets/about/hills.jpg";
import farmerImage from "../../assets/about/farmer.jpg";
import coffeeImage from "../../assets/about/coffee.jpg";

const AboutStory = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Overall subtle movement based on page scroll
  const titleY = useTransform(scrollYProgress, [0, 0.45, 1], [70, 0, -40]);

  const sideY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -30]);

  const quoteY = useTransform(scrollYProgress, [0.35, 0.7, 1], [60, 0, -30]);

  const lineScale = useTransform(scrollYProgress, [0.15, 0.8], [0, 1]);

  const currentChapter = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["01", "02", "03", "04", "04"],
  );

  const [chapterLabel, setChapterLabel] = useState(currentChapter.get());

  useMotionValueEvent(currentChapter, "change", (latest) => {
    setChapterLabel(latest);
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-lightCream px-6 py-28 sm:px-10 sm:py-36 lg:px-16 "
    >
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [80, -80]),
        }}
        className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D9828A]/[0.06] blur-[120px]"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-50, 100]),
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-red/[0.04] blur-[100px]"
      />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className=" ">
          <div className="lg:col-span-8 lg:col-start-5">
            <motion.div
              style={{
                y: titleY,
              }}
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-5xl header text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.93] tracking-[-0.05em] text-brown"
              >
                <span className="italic text-red">Laali Hills</span> began with
                a simple belief:
              </motion.p>

              <div className="relative mt-3 overflow-hidden">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: "100%",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-title text-[clamp(2.8rem,5vw,5.5rem)] italic leading-[0.93] tracking-[-0.05em] text-red"
                >
                  Where something comes from matters.
                </motion.p>
              </div>
            </motion.div>

            <div className="mt-24 space-y-32 sm:mt-32 sm:space-y-44">
              <StoryVisual
                number="01"
                title="The Land"
                image={hillsImage}
                imagePosition="left"
              >
                Nepal's hills hold a remarkable diversity of landscapes,
                climates and communities. Here, coffee and tea are shaped by
                altitude, soil, rainfall and seasons.
                <br />
                <br />
                The land is not simply where our products come from. It is part
                of what makes them what they are.
              </StoryVisual>

              <StoryVisual
                number="02"
                title="The People"
                image={farmerImage}
                imagePosition="right"
              >
                Behind every harvest are people who understand the land through
                generations of experience.
                <br />
                <br />
                We believe their knowledge, patience and work deserve to be part
                of the story that reaches your cup.
              </StoryVisual>

              <StoryVisual
                number="03"
                title="The Craft"
                image={coffeeImage}
                imagePosition="left"
              >
                From cultivation to processing, every step shapes the character
                of what eventually reaches you.
                <br />
                <br />
                We care about how something is grown, how it is handled, and how
                its origin can still be experienced in the final cup.
              </StoryVisual>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
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
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative py-10 sm:py-20"
              >
                <div className="border-l border-red/30 pl-7 sm:pl-10">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-red">
                    04 — The Experience
                  </span>

                  <p className="mt-7 max-w-3xl font-subtitle text-2xl italic leading-relaxed text-[#705752] sm:text-3xl lg:text-4xl">
                    Because discovering a product should also mean discovering
                    the place, people and story behind it.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              style={{
                y: quoteY,
              }}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-32 overflow-hidden border-t border-red/20 pt-10 sm:mt-44"
            >
              <p className="max-w-3xl font-subtitle text-2xl italic leading-relaxed text-mutedBrown sm:text-3xl lg:text-4xl">
                "We don't simply bring the hills to your cup. We bring the story
                with them."
              </p>

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 70,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-8 h-px bg-red"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   STORY PARAGRAPH
============================================================= */

const StoryVisual = ({
  number,
  title,
  image,
  imagePosition = "left",
  children,
}) => {
  const imageLeft = imagePosition === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1,
      }}
      className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
        imageLeft ? "" : "lg:[&>*:first-child]:order-2"
      }`}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="lg:col-span-7"
      >
        <div className="group relative overflow-hidden">
          {/* Image */}

          <motion.img
            src={image}
            alt={title}
            initial={{
              scale: 1.15,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown/20 via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-5 left-5">
            <span className="font-title text-5xl leading-none text-lightCream/80">
              {number}
            </span>
          </div>
        </div>
      </motion.div>

      {/* =================================================
                TEXT
            ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: imageLeft ? 35 : -35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="lg:col-span-5"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-red" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-[#9A7B75]">
            {number}
          </span>
        </div>

        <h3 className="mt-5 font-title text-4xl leading-none tracking-[-0.04em] text-brown sm:text-5xl">
          {title}
        </h3>

        <div className="mt-7 text-[13px] leading-7 text-[#66504B] sm:text-sm sm:leading-8">
          {children}
        </div>

        {/* Decorative line */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 40,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="mt-8 h-px bg-red"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutStory;

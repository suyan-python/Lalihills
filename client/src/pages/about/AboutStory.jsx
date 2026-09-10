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
import { Bean, Leaf } from "lucide-react";

const AboutStory = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0.35, 0.7, 1], [60, 0, -30]);
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
      className="relative overflow-hidden bg-cream  py-18 sm:py-20"
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

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mt-20 flex flex-col items-center px-5 py-20 text-center sm:mt-28 sm:py-28"
      >
        <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red/60 sm:text-[9px]">
          The story continues
        </span>

        <p className="mt-7 max-w-4xl font-subtitle text-[clamp(1.8rem,3.5vw,3.5rem)] italic leading-[1.08] tracking-[-0.025em] text-brown">
          “We don't simply bring the hills to your cup.
          <span className="text-red"> We bring the story with them.</span>”
        </p>
      </motion.div>

      <div className="relative mt-24 sm:mt-32 lg:mt-40">
        {/* BACKGROUND WATERMARKS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -120]),
              rotate: useTransform(scrollYProgress, [0, 1], [-10, 12]),
            }}
            className="absolute -right-16 top-[8%] text-hill/[0.045]"
          >
            <Leaf size={260} strokeWidth={0.7} />
          </motion.div>

          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [80, -80]),
              rotate: useTransform(scrollYProgress, [0, 1], [18, -15]),
            }}
            className="absolute -left-12 top-[32%] text-red/[0.035]"
          >
            <Bean size={180} strokeWidth={0.7} />
          </motion.div>

          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [100, -160]),
              rotate: useTransform(scrollYProgress, [0, 1], [-20, 10]),
            }}
            className="absolute -right-10 top-[58%] text-soil/[0.04]"
          >
            <Bean size={130} strokeWidth={0.7} />
          </motion.div>

          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
              rotate: useTransform(scrollYProgress, [0, 1], [25, -5]),
            }}
            className="absolute -left-20 bottom-[8%] text-hill/[0.04]"
          >
            <Leaf size={220} strokeWidth={0.7} />
          </motion.div>
        </div>

        {/* STORY CHAPTERS */}
        <div className="relative">
          <StoryChapter
            number="01"
            title="The Land"
            image={hillsImage}
            statement="Nepal's hills shape everything."
            detail="Altitude. Soil. Rain. Season."
            index={0}
          />

          <StoryChapter
            number="02"
            title="The People"
            image={farmerImage}
            statement="Every harvest has a story."
            detail="Knowledge passed down through generations."
            index={1}
          />

          <StoryChapter
            number="03"
            title="The Craft"
            image={coffeeImage}
            statement="From the hill to the cup."
            detail="Grown with care. Handled with intention."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   STORY PARAGRAPH
============================================================= */

const StoryVisual = ({ number, title, image, children }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* CHAPTER HEADER */}
      <div className="mb-8 text-center sm:mb-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block text-[8px] font-medium uppercase tracking-[0.4em] text-red/70 sm:text-[9px]"
        >
          {number}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="subheader mt-4 text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.84] tracking-[-0.06em] text-brown"
        >
          {title}
        </motion.h3>
      </div>

      {/* FULL WIDTH IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative overflow-hidden"
      >
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="aspect-[16/9] w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] sm:aspect-[2/1] lg:aspect-[2.15/1]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent" />
      </motion.div>

      {/* STORY TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-xl px-4 pt-8 text-center sm:pt-10"
      >
        <div className="text-[12px] leading-6 text-brown/65 sm:text-[13px] sm:leading-7">
          {children}
        </div>
      </motion.div>
    </motion.article>
  );
};

const StoryChapter = ({ number, title, image, statement, detail, index }) => {
  const colors = ["bg-deepRed", "bg-hill", "bg-soil"];

  const textColors = ["text-lightCream", "text-lightCream", "text-lightCream"];

  return (
    <div
      className="relative h-[135vh]"
      style={{
        zIndex: index + 1,
      }}
    >
      <div className="sticky top-0 flex h-screen items-center py-8 sm:py-10">
        <motion.article
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[88vh] w-full overflow-hidden rounded-sm"
        >
          {/* IMAGE */}
          <motion.img
            src={image}
            alt={title}
            initial={{
              scale: 1.12,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* SUBTLE IMAGE DEPTH */}
          <div className="absolute inset-0 bg-ink/10" />

          {/* TOP CHAPTER INFO */}
          <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-10 sm:right-10 sm:top-10 lg:left-14 lg:right-14 lg:top-14">
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-lightCream/75 sm:text-[10px]">
              {number}
            </span>

            <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/60">
              Laali Hills
            </span>
          </div>

          {/* CENTER TITLE */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="block text-[8px] font-medium uppercase tracking-[0.45em] text-lightCream/70 sm:text-[9px]">
                Chapter {number}
              </span>

              <h3
                className={`subheader mt-5 text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.78] tracking-[-0.07em] ${textColors[index]}`}
              >
                {title}
              </h3>
            </motion.div>
          </div>

          {/* BOTTOM STORY */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-8 sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-14 lg:left-14 lg:right-14">
            <div>
              <p className="max-w-lg font-subtitle text-[clamp(1.4rem,2.5vw,2.4rem)] italic leading-[1.05] text-lightCream">
                {statement}
              </p>

              <p className="mt-3 text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/60 sm:text-[9px]">
                {detail}
              </p>
            </div>

            <span className="hidden text-[8px] uppercase tracking-[0.3em] text-lightCream/50 sm:block">
              Scroll to continue
            </span>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default AboutStory;

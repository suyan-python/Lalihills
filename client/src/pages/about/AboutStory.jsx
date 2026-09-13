import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import hillsImage from "../../assets/about/hills.jpg";
import farmerImage from "../../assets/about/farmer.jpg";
import coffeeImage from "../../assets/about/coffee.jpg";
import { Bean, Leaf } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

  const chapters = [
    {
      number: "01",
      title: "Land",
      statement: "Everything begins with where the coffee grows.",
      detail: "High hills. Living soil. A landscape that shapes every cup.",
      image: hillsImage,
      theme: "bg-hill",
    },
    {
      number: "02",
      title: "People",
      statement: "Behind every cup are hands, knowledge and generations.",
      detail: "The producers who care for the land and the coffee it gives.",
      image: farmerImage,
      theme: "bg-stone",
    },
    {
      number: "03",
      title: "Craft",
      statement: "Good coffee is not found. It is carefully made.",
      detail: "Harvesting, processing and roasting become part of the story.",
      image: coffeeImage,
      theme: "bg-soil",
    },
    {
      number: "04",
      title: "Laali",
      statement: "We bring more than coffee from the hills.",
      detail: "We bring the place, the people and the story with it.",
      image: hillsImage,
      theme: "bg-red",
    },
  ];

  return <StoryTimeline chapters={chapters} />;
};

/* =============================================================
   STORY PARAGRAPH
============================================================= */
const StoryVisual = ({ chapter }) => {
  return (
    <div
      className={`relative hidden h-screen overflow-hidden lg:block ${chapter.theme}`}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={chapter.index}
          src={chapter.image}
          alt={chapter.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easyOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* IMAGE META */}
      <div className="absolute left-10 right-10 top-10 flex items-start justify-between text-lightCream">
        <AnimatePresence mode="wait">
          <motion.span
            key={chapter.number}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-[9px] uppercase tracking-[0.35em] text-lightCream/70"
          >
            Chapter {chapter.number}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={chapter.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[8px] uppercase tracking-[0.35em] text-lightCream/60">
              The story of Laali Hills
            </span>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-lightCream">
              {chapter.title}
            </p>
          </motion.div>
        </AnimatePresence>

        <span className="text-[9px] uppercase tracking-[0.3em] text-lightCream/50">
          {String(chapter.index + 1).padStart(2, "0")} / 04
        </span>
      </div>
    </div>
  );
};

const StoryChapter = ({
  number,
  title,
  statement,
  detail,
  index,
  isActive,
  onActive,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Chapter opacity:
  // 0%   → low
  // 50%  → fully visible
  // 100% → low again
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.25, 0.55, 1, 0.55, 0.25],
  );

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [35, 0, -35]);

  const descriptionOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.42, 0.55],
    [0, 1, 1],
  );

  const descriptionY = useTransform(scrollYProgress, [0.25, 0.5], [80, 0]);

  const descriptionClip = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <motion.article
      ref={ref}
      onViewportEnter={onActive}
      viewport={{ amount: 0.5 }}
      className="flex min-h-screen items-center py-24 sm:py-32"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-3xl px-6 sm:px-12 lg:px-16 xl:px-24"
      >
        <div>
          <span className="text-[12px] font-medium uppercase tracking-[0.45em] text-ink/40">
            Chapter {number}
          </span>

          <h3 className="subheader mt-5 text-[clamp(4rem,9vw,11rem)] uppercase leading-[0.78] tracking-[-0.07em] text-ink">
            {title}
          </h3>
        </div>

        <motion.div
          style={{
            opacity: descriptionOpacity,
            y: descriptionY,
            clipPath: descriptionClip,
          }}
          className="mt-12"
        >
          <p className="text-[clamp(1.5rem,2.5vw,3.5rem)] italic leading-[1.05] text-ink">
            {statement}
          </p>

          <p className="mt-5 max-w-md text-[12px] font-medium uppercase leading-5 tracking-[0.25em] text-ink/45">
            {detail}
          </p>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

const StoryTimeline = ({ chapters }) => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="relative bg-ivory">
      <div className="grid lg:grid-cols-2">
        {/* STORY CONTENT */}
        <div className="relative">
          {chapters.map((chapter, index) => (
            <StoryChapter
              key={chapter.number}
              {...chapter}
              index={index}
              isActive={activeChapter === index}
              onActive={() => setActiveChapter(index)}
            />
          ))}
        </div>

        {/* FIXED VISUAL */}
        <div className="sticky top-0 hidden h-screen lg:block">
          <StoryVisual
            chapter={{
              ...chapters[activeChapter],
              index: activeChapter,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

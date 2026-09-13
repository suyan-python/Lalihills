import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import JournalPreview from "./JournalPreview";

const TrendingHero = () => {
  const [activePreview, setActivePreview] = useState(null);

  const openPreview = (section) => {
    setActivePreview(section);
  };
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ivory px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:min-h-screen lg:px-12 lg:pb-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-14 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-[8px] font-medium uppercase tracking-[0.42em] text-red sm:text-[9px]">
              Laali Hills Trending
            </span>
            <h1 className="font-title mt-6 max-w-5xl text-[clamp(4.5rem,10vw,10rem)] leading-[0.78] tracking-[-0.075em] text-brown">
              What's moving
              <br />
              <span className="italic text-red">in coffee.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pb-2 lg:pl-10"
          >
            <p className="max-w-sm text-[13px] leading-6 text-brown/55 sm:text-[14px] sm:leading-7">
              Stories, shifts and ideas shaping coffee — from the hills of Nepal
              to cups around the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-0 z-30 bg-ink px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1600px] border-b border-brown/15">
          <nav className="flex items-center gap-7 py-4 text-[10px] font-bold sm:gap-10">
            <button
              onClick={() => openPreview("top")}
              className="cursor-pointer uppercase tracking-[0.35em] text-lightWhite transition-colors duration-300 hover:text-red"
            >
              Top
            </button>

            <button
              onClick={() => openPreview("newest")}
              className="cursor-pointer uppercase tracking-[0.35em] text-lightWhite transition-colors duration-300 hover:text-red"
            >
              Newest
            </button>

            <button
              onClick={() => openPreview("hot")}
              className="flex cursor-pointer items-center gap-2 uppercase tracking-[0.35em] text-lightWhite transition-colors duration-300 hover:text-red"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              Hot
            </button>
          </nav>
        </div>
      </section>

      <JournalPreview
        type={activePreview}
        onClose={() => setActivePreview(null)}
      />
    </>
  );
};

export default TrendingHero;

import { ArrowUpRight, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { hotStories } from "../../data/trending";

const HotTrending = () => {
  return (
    <section
      id="hot"
      className="scroll-mt-20 bg-deepRed px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 border-b border-lightCream/15 pb-5 sm:mb-16">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Flame
                  size={12}
                  strokeWidth={1.2}
                  className="text-lightCream/60"
                />
                <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/60 sm:text-[9px]">
                  What's moving
                </span>
              </div>

              <h2 className="subheader mt-5 text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.76] tracking-[-0.07em] text-lightCream">
                Hot
                <br />
                <span className="italic text-red">right now.</span>
              </h2>
            </div>

            <span className="hidden max-w-[180px] text-right text-[8px] uppercase leading-4 tracking-[0.25em] text-lightCream/30 sm:block">
              Stories getting attention across the coffee world
            </span>
          </div>
        </div>

        <div>
          {hotStories.map((story, index) => (
            <HotStory key={story.href} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HotStory = ({ story, index }) => {
  return (
    <Link
      to={story.href}
      className="group grid gap-6 border-b border-lightCream/15 py-8 sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-10 lg:py-12"
    >
      <div className="sm:col-span-1">
        <span className="text-[9px] font-medium tracking-[0.25em] text-lightCream/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden sm:col-span-4 lg:col-span-3">
        <motion.img
          src={story.image}
          alt={story.title}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      </div>

      <div className="sm:col-span-6 lg:col-span-7">
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/40">
            {story.category}
          </span>

          <span className="h-px w-5 bg-lightCream/15" />

          <span className="flex items-center gap-1.5 text-[7px] font-medium uppercase tracking-[0.3em] text-lightCream/55">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            Trending
          </span>
        </div>

        <h3 className="subheader mt-4 max-w-4xl text-[clamp(2rem,3.5vw,3.8rem)] uppercase leading-[0.87] tracking-[-0.05em] text-lightCream transition-colors duration-500 group-hover:text-cream">
          {story.title}
        </h3>

        <p className="mt-4 max-w-2xl text-[10px] leading-5 text-lightCream/45 sm:text-[11px]">
          {story.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <span className="text-[8px] uppercase tracking-[0.25em] text-lightCream/30">
            {story.readTime}
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-lightCream/30">
            {story.date}
          </span>
        </div>
      </div>

      <div className="hidden justify-end lg:col-span-1 lg:flex">
        <span className="flex h-9 w-9 items-center justify-center border border-lightCream/15 text-lightCream/40 transition-all duration-500 group-hover:border-lightCream/50 group-hover:text-lightCream">
          <ArrowUpRight
            size={14}
            strokeWidth={1.2}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
};

export default HotTrending;

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { newestStories } from "../../data/trending";

const NewestTrending = () => {
  return (
    <section
      id="newest"
      className="scroll-mt-20 bg-lightCream px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-12 border-b border-brown/15 pb-5 sm:mb-16">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red sm:text-[9px]">
                Latest dispatches
              </span>

              <h2 className="subheader mt-5 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.8] tracking-[-0.065em] text-brown">
                Just
                <br />
                <span className="italic text-red">in.</span>
              </h2>
            </div>

            <span className="hidden text-[8px] uppercase tracking-[0.3em] text-brown/30 sm:block">
              The latest from the journal
            </span>
          </div>
        </div>

        {/* Latest stories */}
        <div>
          {newestStories.map((story, index) => (
            <NewestStory key={story.href} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NewestStory = ({ story, index }) => {
  return (
    <Link
      to={story.href}
      className="group grid gap-6 border-b border-brown/15 py-8 first:border-t sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-10 lg:py-12"
    >
      {/* Date */}
      <div className="sm:col-span-2">
        <div className="flex items-center justify-between sm:block">
          <span className="block text-[9px] font-medium uppercase tracking-[0.3em] text-red">
            {story.date}
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-brown/25 sm:mt-2 sm:block">
            {story.readTime}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden sm:col-span-4 lg:col-span-3">
        <motion.img
          src={story.image}
          alt={story.title}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            delay: index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      </div>

      {/* Content */}
      <div className="sm:col-span-5 lg:col-span-6">
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-brown/40">
            {story.category}
          </span>

          {story.isNew && (
            <>
              <span className="h-px w-5 bg-brown/15" />
              <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-red">
                New
              </span>
            </>
          )}
        </div>

        <h3 className="subheader mt-4 text-[clamp(1.9rem,3vw,3.2rem)] uppercase leading-[0.87] tracking-[-0.045em] text-brown transition-colors duration-500 group-hover:text-red">
          {story.title}
        </h3>

        <p className="mt-4 max-w-xl text-[10px] leading-5 text-brown/45 sm:text-[11px]">
          {story.excerpt}
        </p>
      </div>

      {/* Arrow */}
      <div className="hidden justify-end lg:col-span-1 lg:flex">
        <span className="flex h-9 w-9 items-center justify-center border border-brown/15 text-brown/40 transition-all duration-500 group-hover:border-red group-hover:text-red">
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

export default NewestTrending;

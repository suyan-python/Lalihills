import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { topStories } from "../../data/trending";

const TopTrending = () => {
  const leadStory = topStories[0];
  const secondaryStories = topStories.slice(1);

  return (
    <section
      id="top"
      className="scroll-mt-20 bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-12 flex items-end justify-between border-b border-brown/15 pb-5 sm:mb-16">
          <div>
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red sm:text-[9px]">
              Top stories
            </span>

            <h2 className="subheader mt-5 text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.8] tracking-[-0.065em] text-brown">
              Worth
              <br />
              <span className="italic text-red">reading.</span>
            </h2>
          </div>

          <span className="hidden text-[8px] font-medium uppercase tracking-[0.3em] text-brown/30 sm:block">
            The editor's selection
          </span>
        </div>

        {/* Lead story */}
        <Link
          to={leadStory.href}
          className="group grid border-b border-brown/15 pb-12 lg:grid-cols-12 lg:gap-12 lg:pb-16"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-[1.25/1]">
            <motion.img
              src={leadStory.image}
              alt={leadStory.title}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
          </div>

          <div className="flex flex-col justify-center pt-8 lg:col-span-5 lg:pt-0">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-red">
                {leadStory.number} — {leadStory.category}
              </span>

              <span className="text-[8px] uppercase tracking-[0.25em] text-brown/30">
                {leadStory.readTime}
              </span>
            </div>

            <h3 className="subheader mt-7 text-[clamp(2.8rem,4.5vw,5rem)] uppercase leading-[0.84] tracking-[-0.055em] text-brown transition-colors duration-500 group-hover:text-red">
              {leadStory.title}
            </h3>

            <p className="mt-7 max-w-md text-[11px] leading-5 text-brown/50 sm:text-[12px] sm:leading-6">
              {leadStory.excerpt}
            </p>

            <div className="mt-9 inline-flex w-fit items-center gap-3 border-b border-brown/20 pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-brown transition-colors duration-500 group-hover:border-red group-hover:text-red">
              Read story
              <ArrowUpRight size={13} strokeWidth={1.2} />
            </div>
          </div>
        </Link>

        {/* Secondary stories */}
        <div className="grid lg:grid-cols-2 lg:gap-x-12">
          {secondaryStories.map((story, index) => (
            <TopStory key={story.href} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TopStory = ({ story, index }) => {
  return (
    <Link
      to={story.href}
      className="group grid gap-6 border-b border-brown/15 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
    >
      {/* Number */}
      <div className="sm:col-span-1">
        <span className="text-[9px] font-medium tracking-[0.2em] text-red">
          {story.number}
        </span>
      </div>

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden sm:col-span-4">
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
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center sm:col-span-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-brown/40">
            {story.category}
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-brown/25">
            {story.readTime}
          </span>
        </div>

        <h3 className="subheader mt-4 text-[clamp(1.8rem,3vw,3rem)] uppercase leading-[0.88] tracking-[-0.045em] text-brown transition-colors duration-500 group-hover:text-red">
          {story.title}
        </h3>

        <p className="mt-4 max-w-md text-[10px] leading-5 text-brown/45 sm:text-[11px]">
          {story.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-3 text-[8px] font-medium uppercase tracking-[0.3em] text-brown/60 transition-colors duration-300 group-hover:text-red">
          Read
          <ArrowUpRight size={12} strokeWidth={1.2} />
        </span>
      </div>
    </Link>
  );
};

export default TopTrending;

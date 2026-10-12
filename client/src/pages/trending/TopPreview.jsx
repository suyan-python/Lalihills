import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PreviewFooter from "./SharedFooter";
import PreviewTopHeader from "./PreviewTopHeader";
import PreviewShell from "./SharedShell";
import { topStories } from "../../data/trending";

const TopPreview = ({ onClose }) => {
  const stories = topStories.slice(0, 3);
  const lead = stories[0];
  const secondary = stories.slice(1);

  if (!lead) {
    return (
      <PreviewShell onClose={onClose}>
        <div className="bg-ivory">
          <PreviewTopHeader
            label="Editor's selection"
            title="Top stories."
            description="The stories we think are worth your attention."
          />
          <PreviewFooter path="/trending/top" onClose={onClose} />
        </div>
      </PreviewShell>
    );
  }

  return (
    <PreviewShell onClose={onClose}>
      <div className="overflow-hidden bg-ivory">
        <PreviewTopHeader
          label="Editor's selection"
          title="Top stories."
          description="The stories we think are worth your attention."
        />

        <div className="grid lg:grid-cols-12">
          {/* LEAD STORY */}
          <Link
            to={lead.href}
            onClick={onClose}
            className="group relative min-w-0 lg:col-span-7"
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-cream sm:aspect-[16/10] lg:aspect-auto lg:min-h-[580px]">
              <motion.img
                src={lead.image}
                alt={lead.title}
                loading="eager"
                decoding="async"
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-ink/5" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
                <span className="inline-flex items-center gap-3 text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/75 sm:text-[9px]">
                  <span className="h-px w-5 bg-[#C5A675]" />
                  {lead.category}
                </span>

                <h3 className="subheader mt-4 max-w-3xl break-words text-[clamp(2.2rem,5.4vw,5.5rem)] uppercase leading-[0.85] tracking-[-0.06em] text-lightCream">
                  {lead.title}
                </h3>

                {lead.readTime && (
                  <span className="mt-5 block text-[8px] uppercase tracking-[0.25em] text-lightCream/55">
                    {lead.readTime}
                  </span>
                )}
              </div>

              <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-lightCream/40 text-lightCream transition-colors duration-300 group-hover:border-lightCream group-hover:bg-lightCream group-hover:text-brown sm:right-7 sm:top-7">
                <span className="text-sm">↗</span>
              </span>
            </div>
          </Link>

          {/* SUPPORTING STORIES */}
          <div className="flex min-w-0 flex-col lg:col-span-5">
            {secondary.map((story, index) => (
              <Link
                key={story.href}
                to={story.href}
                onClick={onClose}
                className="group grid min-w-0 grid-cols-[100px_minmax(0,1fr)] items-center gap-4 border-b border-brown/10 p-4 transition-colors duration-300 hover:bg-lightCream sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6 sm:p-6 lg:flex-1 lg:grid-cols-[minmax(120px,0.85fr)_minmax(0,1fr)] lg:gap-6 lg:p-7 xl:p-8"
              >
                {/* STORY IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-cream sm:aspect-[4/3] lg:aspect-[4/5]">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>

                {/* STORY TEXT */}
                <div className="flex min-w-0 flex-col justify-center py-1">
                  <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-red sm:text-[8px] sm:tracking-[0.25em]">
                    0{index + 2} <span className="text-brown/30">/</span>{" "}
                    {story.category}
                  </span>

                  <h3 className="subheader mt-3 break-words text-[clamp(1.2rem,2.3vw,2.3rem)] uppercase leading-[0.9] tracking-[-0.045em] text-brown transition-colors duration-300 group-hover:text-red">
                    {story.title}
                  </h3>

                  {story.readTime && (
                    <span className="mt-4 text-[7px] uppercase tracking-[0.2em] text-brown/40 sm:text-[8px] sm:tracking-[0.25em]">
                      {story.readTime}
                    </span>
                  )}

                  <span className="mt-4 text-[9px] text-brown/55 transition-colors group-hover:text-red">
                    Read story ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <PreviewFooter path="/trending/top" onClose={onClose} />
      </div>
    </PreviewShell>
  );
};

export default TopPreview;

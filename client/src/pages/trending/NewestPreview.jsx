import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { newestStories } from "../../data/trending";
import PreviewShell from "./SharedShell";
import PreviewTopHeader from "./PreviewTopHeader";
import PreviewFooter from "./SharedFooter";

const NewestPreview = ({ onClose }) => {
  const stories = newestStories.slice(0, 4);
  const [lead, ...remainingStories] = stories;

  return (
    <PreviewShell onClose={onClose}>
      <div className="overflow-hidden bg-lightCream">
        <PreviewTopHeader
          label="Latest dispatches"
          title="Just in."
          description="The newest stories from the Laali Hills Journal."
        />

        {lead && (
          <>
            {/* LEAD STORY */}
            <Link
              to={lead.href}
              onClick={onClose}
              className="group relative block border-b border-brown/10"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-cream sm:aspect-[16/8] lg:aspect-[2.15/1]">
                <motion.img
                  src={lead.image}
                  alt={lead.title}
                  loading="eager"
                  decoding="async"
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-9 lg:p-12">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/80">
                      {lead.category}
                    </span>

                    <span className="h-px w-5 bg-lightCream/40" />

                    <span className="text-[8px] uppercase tracking-[0.2em] text-lightCream/55">
                      {lead.date}
                    </span>

                    {lead.isNew && (
                      <span className="border border-lightCream/35 px-2 py-1 text-[7px] font-medium uppercase tracking-[0.2em] text-lightCream">
                        New
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-5 sm:mt-6">
                    <h3 className="subheader max-w-4xl break-words text-[clamp(2.2rem,5.3vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.06em] text-lightCream">
                      {lead.title}
                    </h3>

                    <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-lightCream/45 text-lightCream transition-all duration-300 group-hover:border-lightCream group-hover:bg-lightCream group-hover:text-brown sm:flex">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.2}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  {lead.excerpt && (
                    <p className="mt-4 max-w-xl text-[11px] leading-5 text-lightCream/70 sm:text-[12px]">
                      {lead.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>

            {/* RECENT STORIES */}
            {remainingStories.length > 0 && (
              <div className="px-5 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between gap-4 border-b border-brown/15 py-5">
                  <span className="text-[8px] font-medium uppercase tracking-[0.32em] text-brown/45">
                    More recent stories
                  </span>

                  <span className="text-[8px] tabular-nums uppercase tracking-[0.2em] text-brown/35">
                    {String(remainingStories.length).padStart(2, "0")}{" "}
                    dispatches
                  </span>
                </div>

                {remainingStories.map((story, index) => (
                  <motion.div
                    key={story.href}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={story.href}
                      onClick={onClose}
                      className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-4 border-b border-brown/10 py-5 sm:grid-cols-[36px_150px_minmax(0,1fr)_36px] sm:gap-x-6 sm:py-7 lg:grid-cols-[44px_190px_minmax(0,1fr)_40px] lg:gap-x-8 lg:py-8"
                    >
                      {/* INDEX */}
                      <span className="hidden self-start pt-1 text-[9px] font-medium tabular-nums tracking-[0.15em] text-red sm:block">
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      {/* IMAGE */}
                      <div className="relative col-start-2 row-span-2 row-start-1 aspect-[4/3] overflow-hidden bg-cream sm:col-start-auto sm:row-span-1">
                        <img
                          src={story.image}
                          alt={story.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>

                      {/* STORY CONTENT */}
                      <div className="col-start-1 row-start-1 min-w-0 sm:col-start-auto sm:row-start-auto">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="text-[7px] font-medium uppercase tracking-[0.25em] text-red sm:text-[8px]">
                            {story.category}
                          </span>

                          <span className="hidden h-px w-4 bg-brown/20 sm:block" />

                          <span className="text-[7px] uppercase tracking-[0.2em] text-brown/40 sm:text-[8px]">
                            {story.date}
                          </span>

                          {story.isNew && (
                            <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-red">
                              New
                            </span>
                          )}
                        </div>

                        <h3 className="subheader mt-3 break-words text-[clamp(1.35rem,2.7vw,2.7rem)] uppercase leading-[0.9] tracking-[-0.045em] text-brown transition-colors duration-300 group-hover:text-red">
                          {story.title}
                        </h3>

                        {story.excerpt && (
                          <p className="mt-3 line-clamp-2 max-w-2xl text-[10px] leading-5 text-brown/50 sm:text-[11px]">
                            {story.excerpt}
                          </p>
                        )}
                      </div>

                      {/* MOBILE ARROW */}
                      <span className="col-start-2 row-start-1 flex h-8 w-8 items-center justify-center border border-brown/15 text-brown/60 transition-all duration-300 group-hover:border-red group-hover:bg-red group-hover:text-lightCream sm:hidden">
                        <ArrowUpRight size={14} strokeWidth={1.2} />
                      </span>

                      {/* DESKTOP ARROW */}
                      <span className="hidden h-9 w-9 items-center justify-center rounded-full border border-brown/15 text-brown/45 transition-all duration-300 group-hover:border-red group-hover:bg-red group-hover:text-lightCream sm:flex">
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.2}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}

        {!lead && (
          <div className="px-5 py-16 text-[11px] text-brown/50 sm:px-8">
            New stories are on their way.
          </div>
        )}

        <PreviewFooter path="/trending/newest" onClose={onClose} />
      </div>
    </PreviewShell>
  );
};

export default NewestPreview;

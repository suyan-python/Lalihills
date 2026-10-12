import React from "react";
import { hotStories } from "../../data/trending";
import PreviewShell from "./SharedShell";
import { ArrowUpRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import PreviewFooter from "./SharedFooter";

const HotPreview = ({ onClose }) => {
  const stories = hotStories.slice(0, 3);
  const [lead, ...supportingStories] = stories;

  return (
    <PreviewShell onClose={onClose}>
      <div className="overflow-hidden bg-deepRed text-lightCream">
        {/* HEADER */}
        <header className="relative border-b border-lightCream/10 px-5 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex items-end justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lightCream/15">
                  <Flame size={13} strokeWidth={1.3} className="text-red" />
                </span>

                <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/55 sm:text-[9px] sm:tracking-[0.4em]">
                  What's moving
                </span>

                <span className="h-1 w-1 rounded-full bg-red" />
              </div>

              <h2 className="subheader mt-5 text-[clamp(3.25rem,9vw,7rem)] uppercase leading-[0.78] tracking-[-0.07em]">
                Hot
                <br />
                <span className="mt-1 inline-block italic text-red">
                  right now.
                </span>
              </h2>
            </div>

            <div className="hidden shrink-0 pb-1 text-right sm:block">
              <span className="block text-[8px] uppercase leading-5 tracking-[0.25em] text-lightCream/35">
                The stories
                <br />
                getting attention
              </span>

              <span className="mt-4 block text-[9px] tabular-nums tracking-[0.2em] text-lightCream/55">
                {String(stories.length).padStart(2, "0")} STORIES
              </span>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-lightCream/10 pt-4 sm:hidden">
            <span className="text-[8px] uppercase tracking-[0.25em] text-lightCream/40">
              The stories getting attention
            </span>

            <span className="text-[9px] tabular-nums tracking-[0.15em] text-lightCream/60">
              {String(stories.length).padStart(2, "0")} STORIES
            </span>
          </div>
        </header>

        {/* STORIES */}
        {lead ? (
          <div className="grid lg:grid-cols-12">
            {/* LEAD STORY */}
            <Link
              to={lead.href}
              onClick={onClose}
              className="group relative block min-w-0 overflow-hidden border-b border-lightCream/10 lg:col-span-7 lg:border-b-0 lg:border-r"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/10] lg:aspect-[0.94/1]">
                <img
                  src={lead.image}
                  alt={lead.title}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />

                {/* Contrast for text */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-transparent to-ink/85" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-medium tabular-nums tracking-[0.2em] text-lightCream">
                      01
                    </span>

                    <span className="h-px w-6 bg-lightCream/40" />

                    <span className="text-[8px] uppercase tracking-[0.3em] text-lightCream/75">
                      Lead story
                    </span>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-lightCream/40 text-lightCream transition-all duration-300 group-hover:border-lightCream group-hover:bg-lightCream group-hover:text-deepRed sm:h-10 sm:w-10">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.2}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
                  <span className="inline-flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/65">
                    <Flame size={11} strokeWidth={1.3} className="text-red" />
                    {lead.category}
                  </span>

                  <h3 className="subheader mt-4 max-w-3xl break-words text-[clamp(2.3rem,6vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.06em] transition-colors duration-300 group-hover:text-lightCream/80">
                    {lead.title}
                  </h3>

                  {lead.excerpt && (
                    <p className="mt-4 line-clamp-2 max-w-xl text-[10px] leading-5 text-lightCream/65 sm:text-[11px] sm:leading-6">
                      {lead.excerpt}
                    </p>
                  )}

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-red" />

                    <span className="text-[8px] uppercase tracking-[0.25em] text-lightCream/55">
                      Read the story
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* SUPPORTING STORIES */}
            <div className="min-w-0 lg:col-span-5">
              <div className="flex items-center justify-between border-b border-lightCream/10 px-5 py-5 sm:px-8 lg:px-8">
                <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream/55">
                  Also making waves
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-lightCream/30">
                  02 — {String(stories.length).padStart(2, "0")}
                </span>
              </div>

              {supportingStories.map((story, index) => (
                <Link
                  key={story.href}
                  to={story.href}
                  onClick={onClose}
                  className="group grid min-w-0 grid-cols-[104px_minmax(0,1fr)] gap-4 border-b border-lightCream/10 p-5 transition-colors duration-300 hover:bg-ink/10 sm:grid-cols-[145px_minmax(0,1fr)] sm:gap-6 sm:p-8 lg:block lg:p-8"
                >
                  {/* Story image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:aspect-[16/7]">
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    <div className="absolute inset-0 bg-ink/5 transition-colors duration-300 group-hover:bg-transparent" />
                  </div>

                  {/* Story details */}
                  <div className="flex min-w-0 flex-col justify-center lg:mt-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-medium tabular-nums tracking-[0.2em] text-red">
                        0{index + 2}
                      </span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.2}
                        className="shrink-0 text-lightCream/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lightCream"
                      />
                    </div>

                    <span className="mt-3 text-[7px] uppercase tracking-[0.25em] text-lightCream/40 sm:text-[8px] sm:tracking-[0.3em]">
                      {story.category}
                    </span>

                    <h3 className="subheader mt-3 break-words text-[clamp(1.2rem,2.5vw,2.4rem)] uppercase leading-[0.9] tracking-[-0.045em] transition-colors duration-300 group-hover:text-red">
                      {story.title}
                    </h3>

                    {story.excerpt && (
                      <p className="mt-3 hidden line-clamp-2 text-[10px] leading-5 text-lightCream/45 sm:block lg:mt-4">
                        {story.excerpt}
                      </p>
                    )}

                    <span className="mt-4 hidden items-center gap-2 text-[7px] uppercase tracking-[0.25em] text-lightCream/35 transition-colors duration-300 group-hover:text-lightCream/75 lg:inline-flex">
                      Explore story
                      <ArrowUpRight size={11} strokeWidth={1.2} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-5 py-16 sm:px-10 sm:py-24">
            <p className="subheader text-4xl uppercase tracking-[-0.04em] text-lightCream/80 sm:text-6xl">
              Nothing hot. Yet.
            </p>
            <p className="mt-4 text-[11px] leading-6 text-lightCream/45">
              Check back soon for the latest stories from Laali Hills.
            </p>
          </div>
        )}

        <PreviewFooter path="/trending/hot" onClose={onClose} dark />
      </div>
    </PreviewShell>
  );
};

export default HotPreview;

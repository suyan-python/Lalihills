import React from "react";
import { hotStories } from "../../data/trending";
import PreviewShell from "./SharedShell";
import { ArrowUpRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import PreviewFooter from "./SharedFooter";

const HotPreview = ({ onClose }) => {
  const stories = hotStories.slice(0, 3);
  const lead = stories[0];

  return (
    <PreviewShell onClose={onClose}>
      <div className="bg-deepRed text-lightCream">
        <div className="border-b border-lightCream/15 px-6 py-7 sm:px-10 sm:py-9 lg:px-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Flame size={12} strokeWidth={1.2} className="text-red" />

                <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/50">
                  What's moving
                </span>
              </div>

              <h2 className="subheader mt-4 text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.78] tracking-[-0.065em]">
                Hot
                <br />
                <span className="italic text-red">right now.</span>
              </h2>
            </div>

            <span className="hidden text-right text-[8px] uppercase leading-4 tracking-[0.25em] text-lightCream/25 sm:block">
              The stories
              <br />
              getting attention
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12">
          <Link
            to={lead.href}
            onClick={onClose}
            className="group relative overflow-hidden lg:col-span-7"
          >
            <div className="relative aspect-[4/3] lg:aspect-[1.1/1]">
              <img
                src={lead.image}
                alt={lead.title}
                className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-ink/25" />

              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
                <span className="text-[10px] font-medium tracking-[0.25em] text-red">
                  01
                </span>

                <span className="h-px w-8 bg-lightCream/30" />

                <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/60">
                  Trending
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <span className="text-[8px] uppercase tracking-[0.35em] text-lightCream/60">
                  {lead.category}
                </span>

                <h3 className="subheader mt-4 max-w-3xl text-[clamp(2.4rem,4.5vw,4.8rem)] uppercase leading-[0.82] tracking-[-0.055em]">
                  {lead.title}
                </h3>
              </div>
            </div>
          </Link>

          <div className="lg:col-span-5">
            {stories.slice(1).map((story, index) => (
              <Link
                key={story.href}
                to={story.href}
                onClick={onClose}
                className="group block border-b border-lightCream/15 p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.25em] text-red">
                    0{index + 2}
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.2}
                    className="text-lightCream/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lightCream"
                  />
                </div>

                <div className="mt-5 aspect-[16/7] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>

                <span className="mt-5 block text-[7px] uppercase tracking-[0.35em] text-lightCream/35">
                  {story.category}
                </span>

                <h3 className="subheader mt-3 text-[clamp(1.5rem,2.5vw,2.5rem)] uppercase leading-[0.88] tracking-[-0.04em] transition-colors duration-300 group-hover:text-red">
                  {story.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <PreviewFooter path="/trending/hot" onClose={onClose} dark />
      </div>
    </PreviewShell>
  );
};

export default HotPreview;

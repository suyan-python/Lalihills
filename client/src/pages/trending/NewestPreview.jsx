import React from "react";
import { newestStories } from "../../data/trending";
import PreviewShell from "./SharedShell";
import PreviewTopHeader from "./PreviewTopHeader";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PreviewFooter from "./SharedFooter";

const NewestPreview = ({ onClose }) => {
  const stories = newestStories.slice(0, 4);
  const lead = stories[0];
  const remainingStories = stories.slice(1);

  return (
    <PreviewShell onClose={onClose}>
      <div className="bg-lightCream">
        <PreviewTopHeader
          label="Latest dispatches"
          title="Just in."
          description="The newest stories from the Laali Hills Journal."
        />

        {/* Lead story */}
        <Link
          to={lead.href}
          onClick={onClose}
          className="group relative block overflow-hidden border-b border-brown/15"
        >
          <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[2.2/1]">
            <img
              src={lead.image}
              alt={lead.title}
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

            <div className="absolute left-6 right-6 bottom-6 sm:left-10 sm:right-10 sm:bottom-9 lg:left-12 lg:right-12">
              <div className="flex items-center gap-3">
                <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/65">
                  {lead.category}
                </span>

                <span className="h-px w-6 bg-lightCream/30" />

                <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/50">
                  {lead.date}
                </span>

                {lead.isNew && (
                  <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-red">
                    New
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-end justify-between gap-8">
                <h3 className="subheader max-w-4xl text-[clamp(2.2rem,4.5vw,4.8rem)] uppercase leading-[0.82] tracking-[-0.055em] text-lightCream">
                  {lead.title}
                </h3>

                <span className="hidden h-11 w-11 shrink-0 items-center justify-center border border-lightCream/30 text-lightCream transition-all duration-500 group-hover:border-lightCream group-hover:bg-lightCream group-hover:text-brown sm:flex">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Latest stream */}
        <div className="px-6 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between border-b border-brown/15 py-4">
            <span className="text-[7px] font-medium uppercase tracking-[0.4em] text-brown/35">
              Earlier dispatches
            </span>

            <span className="text-[7px] uppercase tracking-[0.3em] text-brown/20">
              03 stories
            </span>
          </div>

          {remainingStories.map((story, index) => (
            <Link
              key={story.href}
              to={story.href}
              onClick={onClose}
              className="group relative grid gap-5 border-b border-brown/15 py-7 sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              {/* Number */}
              <div className="sm:col-span-1">
                <span className="text-[9px] font-medium tracking-[0.25em] text-red">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/8] overflow-hidden sm:col-span-3">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-ink/5 transition-colors duration-500 group-hover:bg-transparent" />
              </div>

              {/* Content */}
              <div className="sm:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[7px] font-medium uppercase tracking-[0.35em] text-brown/40">
                    {story.category}
                  </span>

                  <span className="h-px w-4 bg-brown/15" />

                  <span className="text-[7px] uppercase tracking-[0.3em] text-brown/25">
                    {story.date}
                  </span>

                  {story.isNew && (
                    <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-red">
                      New
                    </span>
                  )}
                </div>

                <h3 className="subheader mt-3 max-w-3xl text-[clamp(1.5rem,2.7vw,2.6rem)] uppercase leading-[0.88] tracking-[-0.045em] text-brown transition-colors duration-500 group-hover:text-red">
                  {story.title}
                </h3>

                <p className="mt-3 max-w-2xl text-[10px] leading-5 text-brown/40 sm:text-[11px]">
                  {story.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden justify-end sm:col-span-1 sm:flex">
                <span className="flex h-9 w-9 items-center justify-center border border-brown/10 text-brown/25 transition-all duration-500 group-hover:border-red group-hover:bg-red group-hover:text-lightCream">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>

              {/* Hover line */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-red transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Link>
          ))}
        </div>

        <PreviewFooter path="/trending/newest" onClose={onClose} />
      </div>
    </PreviewShell>
  );
};

export default NewestPreview;

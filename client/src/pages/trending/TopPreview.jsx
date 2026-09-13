import React from "react";
import PreviewFooter from "./SharedFooter";
import { Link } from "react-router-dom";
import PreviewTopHeader from "./PreviewTopHeader";
import PreviewShell from "./SharedShell";
import { motion } from "framer-motion";

import { topStories } from "../../data/trending";

const TopPreview = ({ onClose }) => {
  const stories = topStories.slice(0, 3);
  const lead = stories[0];
  const secondary = stories.slice(1);

  return (
    <PreviewShell onClose={onClose}>
      <div className="bg-ivory">
        <PreviewTopHeader
          label="Editor's selection"
          title="Top stories."
          description="The stories we think are worth your attention."
        />

        <div className="grid lg:grid-cols-12">
          <Link
            to={lead.href}
            onClick={onClose}
            className="group relative overflow-hidden lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[1.15/1]">
              <motion.img
                src={lead.image}
                alt={lead.title}
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-ink/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/70">
                  {lead.category}
                </span>

                <h3 className="subheader mt-4 max-w-3xl text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.82] tracking-[-0.06em] text-lightCream">
                  {lead.title}
                </h3>
              </div>
            </div>
          </Link>

          <div className="flex flex-col lg:col-span-5">
            {secondary.map((story, index) => (
              <Link
                key={story.href}
                to={story.href}
                onClick={onClose}
                className="group grid flex-1 grid-cols-[110px_1fr] gap-5 border-b border-brown/15 p-6 transition-colors hover:bg-lightCream sm:grid-cols-[150px_1fr] sm:p-8"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-red">
                    0{index + 2} / {story.category}
                  </span>

                  <h3 className="subheader mt-3 text-[clamp(1.4rem,2.5vw,2.4rem)] uppercase leading-[0.88] tracking-[-0.04em] text-brown transition-colors group-hover:text-red">
                    {story.title}
                  </h3>

                  <span className="mt-4 text-[8px] uppercase tracking-[0.25em] text-brown/30">
                    {story.readTime}
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

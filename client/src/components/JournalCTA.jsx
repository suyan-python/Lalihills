import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JournalCTA = () => {
  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex items-end justify-between border-b border-brown/15 pb-5 sm:mb-16">
          <div>
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red/70">
              The journal
            </span>

            <h2 className="header mt-4 text-[clamp(3rem,5vw,5rem)] leading-[0.82] tracking-[-0.06em] text-brown">
              More to read.
            </h2>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-brown/35 sm:block">
            05 stories
          </span>
        </div>

        <div>
          <EditorialStory
            number="02"
            category="Process"
            title="Fermentation Is Changing the Cup."
            description="Why experimental processing is creating completely different coffee experiences."
            slug="fermentation-is-changing-the-cup"
          />

          <EditorialStory
            number="03"
            category="Culture"
            title="Why Is Cold Coffee Everywhere?"
            description="From cafés to home brewing, cold coffee has become more than a summer drink."
            slug="why-is-cold-coffee-everywhere"
          />

          <EditorialStory
            number="04"
            category="Education"
            title="Why Does Altitude Matter?"
            description="How elevation, climate and slower maturation can influence what ends up in your cup."
            slug="why-does-altitude-matter"
          />

          <EditorialStory
            number="05"
            category="Origin"
            title="What Does Single Origin Actually Mean?"
            description="A closer look at why knowing where your coffee comes from matters."
            slug="what-does-single-origin-mean"
          />
        </div>
      </div>
    </section>
  );
};

const EditorialStory = ({ number, category, title, description, slug }) => {
  return (
    <Link
      to={`/trending/${category.toLowerCase()}/${slug}`}
      className="group grid gap-5 border-t border-brown/15 py-8 transition-colors duration-500 hover:bg-lightCream sm:grid-cols-12 sm:gap-8 sm:py-10"
    >
      <div className="sm:col-span-1">
        <span className="text-[9px] font-medium tracking-[0.2em] text-red">
          {number}
        </span>
      </div>

      <div className="sm:col-span-2">
        <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-brown/40">
          {category}
        </span>
      </div>

      <div className="sm:col-span-5">
        <h3 className="subheader text-[clamp(1.8rem,3vw,3rem)] leading-[0.9] tracking-[-0.04em] text-brown transition-colors duration-500 group-hover:text-red">
          {title}
        </h3>
      </div>

      <div className="sm:col-span-3 sm:col-start-10">
        <p className="text-[11px] leading-5 text-brown/45">{description}</p>
      </div>

      <div className="hidden items-center justify-end sm:col-span-1 sm:flex">
        <span className="text-lg text-brown/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-red">
          ↗
        </span>
      </div>
    </Link>
  );
};

export default JournalCTA;

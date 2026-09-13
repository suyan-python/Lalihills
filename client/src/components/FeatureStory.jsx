import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { featuredStory } from "../data/trending";

const FeatureStory = () => {
  return (
    <section className="bg-lightWhite px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        {/* Editorial label */}
        <div className="mb-7 flex items-center justify-between border-b border-brown/15 pb-4">
          <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red sm:text-[9px]">
            The lead story
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-brown/35 sm:text-[9px]">
            {featuredStory.readTime}
          </span>
        </div>

        <Link
          to={featuredStory.href}
          className="group grid overflow-hidden lg:grid-cols-12"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[680px]">
            <motion.img
              src={featuredStory.image}
              alt={featuredStory.title}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />
          </div>

          {/* Story */}
          <div className="relative flex flex-col justify-between bg-deepRed px-7 py-10 sm:px-12 sm:py-14 lg:col-span-5 lg:px-14 lg:py-16 xl:px-20">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium uppercase tracking-[0.38em] text-lightCream/55 sm:text-[9px]">
                  {featuredStory.category}
                </span>

                <span className="text-[8px] uppercase tracking-[0.3em] text-lightCream/35 sm:text-[9px]">
                  {featuredStory.date}
                </span>
              </div>

              <h2 className="subheader mt-10 text-[clamp(3rem,5.2vw,6rem)] uppercase leading-[0.82] tracking-[-0.06em] text-lightCream">
                {featuredStory.title}
              </h2>

              <p className="mt-8 max-w-md text-[11px] leading-5 text-lightCream/55 sm:text-[12px] sm:leading-6">
                {featuredStory.description}
              </p>
            </div>

            <div className="mt-12">
              <span className="inline-flex items-center gap-4 border-b border-lightCream/25 pb-2 text-[8px] font-medium uppercase tracking-[0.32em] text-lightCream transition-all duration-500 group-hover:border-lightCream">
                Read story
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeatureStory;

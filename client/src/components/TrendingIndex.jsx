import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { trendingStories } from "../data/trending";

const TrendingIndex = () => {
  return (
    <section className="relative z-20 bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* SECTION INTRO */}
          <div className="lg:col-span-3">
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red">
              The index
            </span>

            <h2 className="header mt-6 text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.8] tracking-[-0.06em] text-brown">
              Trending.
            </h2>

            <p className="mt-7 max-w-xs text-[11px] leading-5 text-brown/75">
              A running collection of things worth knowing, tasting and talking
              about.
            </p>
          </div>

          {/* STORY INDEX */}
          <div className="lg:col-span-9">
            {trendingStories.map((story, index) => (
              <motion.a
                key={story.number}
                href={story.href}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-x-5 gap-y-5 border-t border-brown/10 py-7 sm:grid-cols-[42px_minmax(0,1fr)_180px] sm:items-center sm:gap-x-6 sm:py-8 lg:grid-cols-[50px_minmax(0,1fr)_220px] lg:gap-x-8"
              >
                {/* NUMBER */}
                <span className="text-[9px] font-medium tracking-[0.25em] text-red">
                  {story.number}
                </span>

                {/* STORY CONTENT */}
                <div className="min-w-0">
                  <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-brown/55">
                    {story.category}
                  </span>

                  {/* MOBILE IMAGE */}
                  {story.image && (
                    <div className="relative mt-4 aspect-[16/9] overflow-hidden sm:hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  <h3 className="subheader mt-3 max-w-2xl text-[clamp(1.8rem,3vw,3.3rem)] uppercase leading-[0.9] tracking-[-0.045em] text-brown transition-colors duration-500 group-hover:text-red">
                    {story.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-[11px] leading-5 text-brown/75 sm:text-[12px]">
                    {story.excerpt}
                  </p>

                  {/* MOBILE READ TIME */}
                  <div className="mt-5 flex items-center justify-between sm:hidden">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-brown/35">
                      {story.readTime}
                    </span>
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1}
                      className="text-brown/50 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red"
                    />
                  </div>
                </div>

                {/* DESKTOP IMAGE + META */}
                <div className="hidden sm:flex sm:flex-col sm:items-end sm:gap-4">
                  {story.image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                      <img
                        src={story.image}
                        alt={story.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/5" />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-cream">
                      <span className="font-title text-3xl italic text-brown/20">
                        Laali Hills
                      </span>
                    </div>
                  )}

                  <div className="flex w-full items-center justify-between">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-brown/35">
                      {story.readTime}
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1}
                      className="text-brown/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingIndex;

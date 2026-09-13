import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { trendingStories } from "../data/trending";

const TrendingIndex = () => {
  return (
    <section className="bg-ivory px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red">
              The index
            </span>
            <h2 className="font-title mt-6 text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.8] tracking-[-0.06em] text-brown">
              Trending.
            </h2>
            <p className="mt-7 max-w-xs text-[11px] leading-5 text-brown/45">
              A running collection of things worth knowing, tasting and talking
              about.
            </p>
          </div>
          <div className="lg:col-span-9">
            {trendingStories.map((story, index) => (
              <motion.a
                key={story.number}
                href={story.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-5 border-t border-brown/10 py-7 sm:grid-cols-[70px_1fr_180px] sm:items-center sm:py-9"
              >
                <span className="text-[9px] font-medium tracking-[0.25em] text-red/65">
                  {story.number}
                </span>
                <div>
                  <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-brown/35">
                    {story.category}
                  </span>
                  <h3 className="subheader mt-3 max-w-2xl text-[clamp(1.8rem,3vw,3.3rem)] uppercase leading-[0.9] tracking-[-0.045em] text-brown transition-colors duration-500 group-hover:text-red">
                    {story.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[11px] leading-5 text-brown/45 sm:text-[12px]">
                    {story.excerpt}
                  </p>
                </div>
                <div className="hidden justify-end sm:flex sm:flex-col sm:items-end sm:gap-5">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-brown/30">
                    {story.readTime}
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1}
                    className="text-brown/35 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red"
                  />
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

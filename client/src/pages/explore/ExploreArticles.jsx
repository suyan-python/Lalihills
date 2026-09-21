import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { article } from "../../data/article.js";

const articles = article;

const ExploreArticles = () => {
  return (
    <section className="bg-lightWhite">
      <div className="mx-auto max-w-[1600px] px-6  sm:px-8 py-8 md:px-12 md:py-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 gap-6 sm:mb-20 ">
          <div>
            <h2 className="header text-center text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.82] tracking-[-0.06em] text-ink">
              Learn the
              <br />
              <span className="text-ink/30">context.</span>
            </h2>
          </div>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-14 sm:gap-x-6 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* Image */}
              <div
                className="relative block overflow-hidden"
                aria-label={`Read ${article.title}`}
              >
                <div className="aspect-square md:aspect-[4/3] overflow-hidden bg-cream rounded-4xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-5 sm:pt-6">
                <span className="text-[6px] uppercase tracking-[0.35em] text-stone sm:text-[7px] sm:tracking-[0.4em]">
                  {article.category}
                </span>

                <h3 className="header mt-3 text-[clamp(1.35rem,2.4vw,2.5rem)] uppercase leading-[0.9] tracking-[-0.045em] text-ink">
                  {article.title}
                </h3>

                <p className="mt-4 max-w-sm text-[9px] font-light leading-5 text-ink/55 sm:text-[10px] sm:leading-6 ">
                  {article.description}
                </p>

                <Button to={article.slug} size="sm" className="mt-3" external>
                  explore more
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreArticles;

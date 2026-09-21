import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import story from "../../assets/explore/magazine/story.jpg";
import origin from "../../assets/explore/magazine/origin.mp4";
import processing from "../../assets/explore/magazine/processing.mp4";
import speciality from "../../assets/explore/magazine/speciality.mp4";
import brewing from "../../assets/explore/magazine/brewing.jpg";
import roasting from "../../assets/explore/magazine/roasting.mp4";
import plant from "../../assets/explore/magazine/plant.jpg";

const stories = [
  {
    id: 1,
    number: "01",
    category: "Nepali Coffee",
    type: "image",
    title: "The Story of Coffee in Nepal",
    description: "How coffee found its place among the hills of Nepal.",
    image: story,
    slug: "/explore/nepali-coffee",
  },
  {
    id: 2,
    number: "02",
    category: "Origins",
    type: "video",
    title: "Where Nepal Grows Coffee",
    description: "Discover the landscapes and regions behind Nepali coffee.",
    image: origin,
    slug: "/explore/coffee-regions-nepal",
  },
  {
    id: 3,
    number: "03",
    category: "Processing",
    type: "video",
    title: "Inside the Coffee Process",
    description: "From cherry to green bean, every step shapes the cup.",
    image: processing,
    slug: "/explore/coffee-processing",
  },
  {
    id: 4,
    number: "04",
    category: "Specialty Coffee",
    type: "video",
    title: "What Makes Coffee Specialty?",
    description: "A closer look at what makes specialty coffee different.",
    image: speciality,
    slug: "/explore/specialty-coffee",
  },
  {
    id: 5,
    number: "05",
    category: "Brewing",
    type: "image",
    title: "Understanding Your Cup",
    description: "How brewing changes the coffee you taste.",
    image: brewing,
    slug: "/explore/coffee-brewing",
  },
  {
    id: 6,
    number: "06",
    category: "Roasting",
    type: "video",
    title: "The Art of Roasting",
    description:
      "How heat transforms green coffee into something entirely new.",
    image: roasting,
    slug: "/explore/coffee-roasting",
  },
  {
    id: 7,
    number: "07",
    category: "Coffee Plant",
    type: "image",
    title: "It Starts With a Plant",
    description: "Before the bean, there is a flower, a cherry and a tree.",
    image: plant,
    slug: "/explore/coffee-plant",
  },
];

const ExploreMagazine = () => {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStory = (offset) => {
    return stories[(active + offset + stories.length) % stories.length];
  };

  const activeStory = stories[active];

  return (
    <section className="overflow-hidden bg-lightCream">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 md:px-12 pt-10 lg:px-16 pb-10">
        {/* Header */}
        <div className="mb-5 md:mb-10">
          <div>
            <h2 className="mt-4 text-[clamp(1.5rem,6vw,2.5rem)] uppercase leading-[0.82] tracking-[-0.06em] text-ink text-center">
              Explore <span className="text-ink/30">Endless.</span>
            </h2>
          </div>
        </div>

        {/* Featured Story */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[16/9] lg:aspect-[2.2/1]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.7 },
                scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              }}
              className="absolute inset-0"
            >
              {activeStory.type === "video" ? (
                <video
                  src={activeStory.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

              <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-8 md:p-12 lg:p-16">
                <span className="text-[7px] uppercase tracking-[0.4em] text-lightCream/60">
                  {activeStory.category}
                </span>

                <h3 className="header mt-3 text-[clamp(2.2rem,5vw,5.5rem)] uppercase leading-[0.82] tracking-[-0.055em] text-lightCream">
                  {activeStory.title}
                </h3>

                <p className="mt-5 max-w-md text-[9px] font-light leading-5 text-lightCream/65 sm:text-[10px] sm:leading-6">
                  {activeStory.description}
                </p>

                <Link
                  to={activeStory.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[7px] font-semibold uppercase tracking-[0.25em] text-lightCream sm:text-[8px]"
                >
                  Explore more
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Magazine Index */}

        <div className="mt-5 overflow-hidden">
          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-5"
            initial={false}
          >
            {[-2, -1, 0, 1, 2].map((offset, index) => {
              const story = getStory(offset);
              const isCenter = offset === 0;

              return (
                <button
                  key={story.id}
                  onClick={() =>
                    setActive(stories.findIndex((item) => item.id === story.id))
                  }
                  initial={false}
                  className={`magazine-card group relative overflow-hidden text-left ${
                    index === 0 || index === 4 ? "hidden md:block" : ""
                  } ${isCenter ? "is-active" : ""}`}
                >
                  <div
                    className={`overflow-hidden transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isCenter ? "bg-ink" : "bg-cream"
                    }`}
                  >
                    <div className="aspect-[1.4/1] overflow-hidden">
                      {story.type === "video" ? (
                        <video
                          src={story.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover magazine-card-media transform-gpu transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                        />
                      ) : (
                        <img
                          src={story.image}
                          alt={story.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover magazine-card-media transform-gpu transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                        />
                      )}
                    </div>

                    <div
                      className={`magazine-card-content p-2.5 transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-4 ${
                        isCenter
                          ? "bg-ink text-lightCream"
                          : "bg-cream text-ink"
                      }`}
                    >
                      <span className="text-[6px] tracking-[0.2em] opacity-50 sm:text-[7px]">
                        {story.number}
                      </span>

                      <h4 className="header mt-1 line-clamp-2 text-[10px] uppercase leading-[0.9] tracking-[-0.03em] sm:text-sm">
                        {story.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Progress */}
        <div className="mt-8 h-px w-full bg-ink/10">
          <motion.div
            key={active}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-ink"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreMagazine;

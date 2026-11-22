import React from "react";
import {
  Flame,
  ArrowUpRight,
  Play,
  Heart,
  MessageCircle,
  Coffee,
  Leaf,
} from "lucide-react";

import Button from "../../components/Button";
import { coffeeProducts, teaProducts } from "../../data/products";
import { motion } from "framer-motion";

const socialCharacters = [...coffeeProducts, ...teaProducts].filter(
  (product, index, array) =>
    product.characterImage &&
    array.findIndex(
      (item) => item.characterImage === product.characterImage,
    ) === index,
);

const socialPosts = [
  {
    category: "ORIGINS",
    title: "Rooted in the hills.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85",
    className: "col-span-1 row-span-2",
    type: "story",
  },
  {
    category: "COFFEE RITUALS",
    title: "A slower kind of morning.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=85",
    className: "col-span-1",
    type: "reel",
  },
  {
    category: "OUR PEOPLE",
    title: "Good things grow together.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",
    className: "col-span-1",
    type: "story",
  },
];

const SocialsSummary = () => {
  return (
    <section className="relative overflow-hidden bg-purple px-5 py-12 text-ink transition-colors duration-300 dark:bg-ink dark:text-lightCream sm:px-10 sm:py-14 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Main layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 ">
          {/* Centered Text Content */}
          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[460px] sm:py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="header max-w-2xl text-4xl  leading-[1.12] tracking-tight text-[#40344D] sm:text-5xl lg:text-6xl"
            >
              Hey, we've got
              <br />
              <span className="font-normal text-[#8C6BAA]">socials too!</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-4"
            >
              <Button to={"/socials"} icon={false} variant="purple" size="md">
                Come hang out with us
              </Button>

              <div className="flex items-center gap-2 text-xs text-[#766A80]">
                <Coffee size={15} className="text-[#8C6BAA]" />
                <span>There's more to our story</span>
              </div>
            </motion.div>

            {/* Social platform links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex items-center justify-center gap-3 border-t border-[#D7C8E4] px-5 pt-6"
            >
              <span className="mr-1 text-[10px] uppercase tracking-[0.16em] text-[#8B7D96]">
                Find us on
              </span>

              <a
                href="YOUR_Flame_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="Laali Hills on Flame"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7C8E4] text-[#59466B] transition-all duration-300 hover:border-[#8C6BAA] hover:bg-[#8C6BAA] hover:text-white"
              >
                <Flame size={16} />
              </a>

              <a
                href="YOUR_FACEBOOK_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="Laali Hills on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7C8E4] text-[#59466B] transition-all duration-300 hover:border-[#8C6BAA] hover:bg-[#8C6BAA] hover:text-white"
              >
                f
              </a>

              <a
                href="YOUR_YOUTUBE_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="Laali Hills on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7C8E4] text-[#59466B] transition-all duration-300 hover:border-[#8C6BAA] hover:bg-[#8C6BAA] hover:text-white"
              >
                <Play size={15} />
              </a>
            </motion.div>
          </div>

          {/* Character Social Stage */}
          <div className="relative mx-auto mt-2 flex h-[205px] w-full max-w-2xl items-end justify-center sm:h-[260px]">
            {/* Soft background glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-44 w-[85%] -translate-x-1/2 rounded-full bg-[#C8B2DF]/35 blur-[65px] sm:h-56" />

            {/* Decorative orbit */}
            <svg
              className="pointer-events-none absolute inset-x-0 bottom-2 h-[190px] w-full opacity-50 sm:h-[240px]"
              viewBox="0 0 600 250"
              fill="none"
              preserveAspectRatio="xMidYMax meet"
            >
              <ellipse
                cx="300"
                cy="190"
                rx="250"
                ry="65"
                stroke="#A98CBD"
                strokeWidth="1.2"
                strokeDasharray="4 7"
              />
              <ellipse
                cx="300"
                cy="190"
                rx="190"
                ry="42"
                stroke="#C8B2DF"
                strokeWidth="1"
              />
            </svg>

            {/* Floating social icons */}
            <motion.div
              className="absolute left-[15%] top-[25%] z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-[#D94A83] shadow-lg backdrop-blur-md sm:left-[18%] sm:h-12 sm:w-12"
              animate={{ y: [0, -9, 0], rotate: [-6, 5, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flame size={21} />
            </motion.div>

            <motion.div
              className="absolute right-[15%] top-[15%] z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-[#E53935] shadow-lg backdrop-blur-md sm:right-[19%] sm:h-12 sm:w-12"
              animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Play size={20} />
            </motion.div>

            <motion.span
              className="absolute left-[50%] bottom-[30%] text-xl text-[#8C6BAA]"
              animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.span>

            {/* Side-by-side characters */}
            <div className="relative z-20 flex w-full items-end justify-center gap-8 sm:gap-20">
              {socialCharacters.slice(0, 2).map((character, index) => (
                <motion.div
                  key={character._id}
                  initial={{
                    opacity: 0,
                    y: 35,
                    x: index === 0 ? -25 : 25,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 14,
                  }}
                  className="relative flex flex-col items-center"
                >
                  {/* Character speech bubble */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                    className={`absolute -top-12 z-30 w-32 rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] px-3 py-2.5 shadow-lg sm:-top-14 sm:w-40 ${
                      index === 0
                        ? "-left-12 rounded-bl-sm sm:-left-16"
                        : "-right-12 rounded-br-sm sm:-right-16"
                    }`}
                  >
                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-widest text-[#8C6BAA]">
                      {index === 0 ? "Psst... you!" : "One more thing!"}
                    </span>
                    <p className="text-[9px] font-medium leading-relaxed text-[#40344D] sm:text-[11px]">
                      {index === 0
                        ? "There's more to Laali than what's in your cup!"
                        : "Come say hi! We don't bite. Mostly. ;)"}
                    </p>
                    <span
                      className={`absolute -bottom-2 h-4 w-4 rotate-45 border-b border-r border-[#D7C8E4] bg-[#F8F4FB] ${
                        index === 0 ? "right-5" : "left-5"
                      }`}
                    />
                  </motion.div>

                  <motion.img
                    src={character.characterImage}
                    alt={`${character.name} character`}
                    className="h-[145px] w-[125px] object-contain drop-shadow-[0_10px_15px_rgba(64,52,77,0.18)] sm:h-[205px] sm:w-[175px]"
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  />

                  <span className="mt-1 rounded-full border border-[#D7C8E4] bg-white/75 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#766A80] shadow-sm sm:text-[9px]">
                    {character.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSummary;

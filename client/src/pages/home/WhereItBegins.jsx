import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import jhakri from "../../assets/characters/jhakri.png"; // adjust path

import { coffeeProducts, teaProducts } from "../../data/products";

const WhereItBegins = () => {
  const jhakriCharacter = [...coffeeProducts, ...teaProducts].find(
    (product) => product.characterImage === jhakri,
  );
  return (
    <section className="relative overflow-hidden bg-purple px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Jhakri speaks */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex justify-center text-center sm:mb-20"
        >
          <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row sm:gap-7">
            {/* Character + Name */}
            <div className="flex shrink-0 flex-col items-center">
              <motion.img
                src={jhakri}
                alt={jhakriCharacter?.name || "Jhakri"}
                className="h-28 w-24 object-contain sm:h-52 sm:w-42"
                animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="mt-2 rounded-full border border-[#D7C8E4] bg-[#F8F4FB] px-4 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#795A9C]">
                {jhakriCharacter?.name}
              </span>
            </div>

            {/* Speech Bubble */}
            <div className="relative rounded-2xl border border-[#D7C8E4] bg-[#F8F4FB] px-5 py-4 text-center shadow-[0_12px_35px_rgba(64,52,77,0.08)] sm:text-left sm:px-7 sm:py-5">
              <h2 className="header text-2xl font-semibold leading-tight text-[#40344D] sm:text-4xl lg:text-5xl">
                "Hey, you made it!
                <br />
                <span className="font-normal text-[#8C6BAA]">
                  Let me show where it begins."
                </span>
              </h2>

              {/* Speech bubble tail */}
              <span
                className="
    absolute -top-2 left-1/2
    h-4 w-4 -translate-x-1/2 rotate-45
    border-l border-t border-[#D7C8E4]
    bg-[#F8F4FB]

    sm:left-0 sm:top-1/2
    sm:-translate-x-1/2 sm:-translate-y-1/2
    sm:rotate-[-45deg]
    sm:border-l sm:border-b
    sm:border-t-0 sm:border-r-0
  "
              />
            </div>
          </div>
        </motion.div>

        {/* Story and video */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Jhakri's story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h3 className="header text-4xl font-semibold leading-[1.1] tracking-tight text-[#40344D] sm:text-5xl lg:text-6xl">
              Sit a while.
            </h3>

            <p className="mt-5 text-base leading-[1.9] text-[#766A80] sm:text-lg">
              We go up into the hills and bring back only what is worth the walk
              — its place, its people, the morning it was picked. Nothing we
              hand you is a stranger.
            </p>

            <p className=" mt-5 text-lg italic leading-relaxed text-deepPurple sm:text-xl  ">
              "From the hills. From the soil. From the people. To you."
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#293A34] shadow-[0_25px_70px_rgba(64,52,77,0.16)]">
              <video
                className="h-full w-full object-cover"
                src="/videos/laali-story.mp4"
                poster="/images/laali-story-poster.webp"
                muted
                loop
                playsInline
                controls
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="pointer-events-none absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">
                  A glimpse of where it begins
                </span>
                <p className="header mt-1 text-xl sm:text-2xl">
                  A little closer to the source.
                </p>
              </div>
            </div>

            <span className="absolute -bottom-7 -right-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8C6BAA] sm:-right-5">
              From Nepal, with care.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhereItBegins;

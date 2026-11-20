import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot, Sparkles, Star } from "lucide-react";

import { coffeeProducts, teaProducts } from "../../data/products";
import gift from "../../assets/characters/gift.png";
import Button from "../../components/Button";

const getCharacters = (products) =>
  products.filter(
    (product, index, array) =>
      product.characterImage &&
      array.findIndex(
        (item) => item.characterImage === product.characterImage,
      ) === index,
  );

const characterPositions = [
  "left-[3%] top-[12%]",
  "left-[17%] bottom-[2%]",
  "right-[17%] top-[4%]",
  "right-[3%] bottom-[3%]",
  "left-[42%] top-[1%]",
  "right-[42%] bottom-[0%]",
];

const CollectionPanel = ({ title, subtitle, link, products, type }) => {
  const characters = getCharacters(products);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#D7C8E4] bg-[#ECE6F4]"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8B2DF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-white/60 blur-3xl" />

      {/* Collection introduction */}
      <div className="relative z-10 flex min-h-[270px] flex-col items-center justify-center px-6 pb-5 pt-12 text-center sm:min-h-[300px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#8C6BAA]"
        >
          Discover our {type}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="header mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#40344D] sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-4 max-w-xs text-sm leading-relaxed text-[#766A80] sm:text-base"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          <Button to={link} variant="dark" size="md" className="mt-6">
            Explore {type}
          </Button>
        </motion.div>
      </div>

      {/* Character introduction stage */}
      <div className="relative z-10 mt-2 flex min-h-[185px] items-end justify-center px-4 sm:min-h-[220px] sm:px-8 overflow-hidden">
        {/* Grounding line */}
        <div className="absolute bottom-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#B9A5CA]/60 to-transparent sm:bottom-7" />

        <div className="relative flex w-full max-w-md items-end justify-center gap-1 sm:gap-4">
          {characters.map((character, index) => (
            <motion.div
              key={character._id}
              initial={{ opacity: 0, y: 45, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.5 + index * 0.16,
                duration: 0.65,
                type: "spring",
                stiffness: 110,
                damping: 14,
              }}
              className="group/character relative flex min-w-0 flex-1 flex-col items-center"
            >
              {/* Character */}
              <motion.img
                src={character.characterImage}
                alt={`${character.name} character`}
                className="h-[115px] w-full max-w-[100px] object-contain drop-shadow-[0_7px_8px_rgba(64,52,77,0.12)] sm:h-[155px] sm:max-w-[125px]"
                whileHover={{
                  y: -10,
                  scale: 1.08,
                  rotate: index % 2 === 0 ? -3 : 3,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 12 }}
              />

              {/* Character name */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.16 }}
                className="relative z-10 mb-2 mt-1 max-w-full truncate rounded-full border border-[#D7C8E4] bg-[#F8F4FB]/90 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#59466B] shadow-sm sm:text-[9px]"
              >
                {character.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const End = () => {
  return (
    <section className="bg-purple px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Coffee and tea collections */}
        <div className="grid gap-5 md:grid-cols-2">
          <CollectionPanel
            title="Get Your Beans"
            subtitle="Bold characters. Distinct origins. Coffee with a story to tell."
            link="/shop/coffee"
            products={coffeeProducts}
            type="coffee"
          />

          <CollectionPanel
            title="Get Your Leaves"
            subtitle="A different kind of calm, shaped by the hills of Nepal."
            link="/shop/tea"
            products={teaProducts}
            type="tea"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-5 min-h-[340px] overflow-hidden rounded-[2rem] bg-[#8F2635] text-white sm:min-h-[380px]"
        >
          {/* Ambient red glow */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#D85A69]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-[25%] h-80 w-80 rounded-full bg-[#E7A0A5]/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-[#641B2A]/35 blur-3xl" />

          {/* Decorative ribbon curves */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path
              d="M-100 100 C180 -80 320 380 600 180 S1000 -50 1300 180"
              stroke="#FFE5DF"
              strokeWidth="2"
            />
            <path
              d="M-100 160 C180 -20 320 440 600 240 S1000 10 1300 240"
              stroke="#FFE5DF"
              strokeWidth="2"
            />
            <path
              d="M700 -100 C500 100 1000 250 800 600"
              stroke="#FFE5DF"
              strokeWidth="2"
            />
          </svg>

          {/* Ribbon cross decoration */}
          <div className="pointer-events-none absolute -right-12 top-0 h-full w-24 rotate-[18deg] bg-[#E9A0A3]/[0.08]" />
          <div className="pointer-events-none absolute right-[9%] top-0 h-full w-8 bg-[#FFE5DF]/[0.06]" />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#FFE5DF]/15" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#FFE5DF]/10" />
          <div className="pointer-events-none absolute bottom-7 left-[48%] h-3 w-3 rounded-full bg-[#F6C9BC]/50 blur-[1px]" />

          {/* Floating gift details */}
          {/* Decorative floating icons */}
          <motion.div
            className="pointer-events-none absolute left-[45%] top-[15%] text-[#F6C9BC]/70"
            animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={22} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute bottom-[15%] left-[8%] text-[#F6C9BC]/60"
            animate={{ y: [0, 9, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star size={17} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute right-[38%] top-[70%] text-[#FFE5DF]/70"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <CircleDot size={20} strokeWidth={1.5} />
          </motion.div>

          {/* Decorative label */}
          <div className="absolute right-6 top-6 z-20 rounded-full border border-[#FFE5DF]/25 bg-[#641B2A]/20 px-4 py-2 backdrop-blur-md sm:right-10 sm:top-9">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FFE5DF]">
              The Laali Gift Collection
            </span>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex min-h-[340px] flex-col items-center justify-between gap-2 px-7 pb-8 pt-20 sm:min-h-[380px] sm:flex-row sm:px-12 sm:py-12 md:px-16">
            <div className="relative z-10 max-w-lg text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#F6C9BC]">
                Made to be shared
              </span>

              <h3 className="mt-4 header text-3xl font-bold leading-[1.15] text-[#FFF7F3] sm:text-4xl md:text-5xl">
                A little Laali.
                <br />A lot of love.
              </h3>

              <Button
                to="/shop/gifts"
                variant="light"
                size="md"
                className="mt-7"
              >
                Explore Gift Collection
              </Button>
            </div>

            {/* Gift visual */}
            <motion.div
              className="relative flex h-[190px] w-full items-center justify-center sm:h-[280px] sm:w-[42%] md:h-[320px]"
              whileHover="hover"
            >
              {/* Gift spotlight */}
              <div className="absolute h-48 w-48 rounded-full bg-[#F6C9BC]/20 blur-3xl sm:h-64 sm:w-64" />

              {/* Decorative rings */}
              <motion.div
                className="absolute h-52 w-52 rounded-full border border-dashed border-[#FFE5DF]/30 sm:h-72 sm:w-72"
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute h-40 w-40 rounded-full border border-[#FFE5DF]/15 sm:h-56 sm:w-56"
                variants={{
                  hover: { scale: 1.12, rotate: -15 },
                }}
                transition={{ duration: 0.7 }}
              />

              <motion.img
                src={gift}
                alt="Laali Hills gift collection"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_30px_rgba(55,0,10,0.35)]"
                animate={{
                  y: [0, -9, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                }}
                whileHover={{ scale: 1.06 }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Sparkle */}
              <motion.span
                className="absolute right-[8%] top-[12%] z-20 text-3xl text-[#FFE5DF]"
                animate={{ rotate: 180, scale: [1, 1.3, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✳
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default End;

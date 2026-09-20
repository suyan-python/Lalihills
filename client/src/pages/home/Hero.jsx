import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./effects.css";
import Cursor from "./Cursor";
import useMagnetic from "./UseMagnetic.js";
import useInView from "./useInview.js";

// ---------------------------------------------------------------------
// Adapted from otsuka-air.jp's structure: a cinematic hero, a numbered
// "Chapter" narrative that reveals on normal scroll (no pinning/scroll-
// jacking — just whileInView fades), an ON/OFF-style occasions grid, and
// a horizontal producer carousel standing in for their Interview section.
//
// Image/video placeholders below are intentionally left as gradient
// blocks rather than stock photography — per the brand doc, Laali Hills
// should never lean on generic Himalayan imagery. Swap each one for real
// photography/video of the actual farms, producers and product.
// ---------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

// ------------------------------- HERO ---------------------------------

const Hero = () => {
  const magnet = useMagnetic(0.25);

  return (
    <section className="relative flex h-screen min-h-[640px] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center text-lightCream">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[140px]" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink to-ink" />
      </div>

      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-[9px] uppercase tracking-[0.5em] text-lightCream/50"
      >
        Laali Hills
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="header relative z-10 mt-6 text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.86] tracking-[-0.06em]"
      >
        When the hills
        <br />
        are <span className="text-shimmer italic">happy.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-8 max-w-md text-sm font-light leading-7 text-lightCream/60 sm:text-base"
      >
        They bloom. They become Laali. Specialty coffee and tea, carried down
        from the hills of Nepal with the story still attached.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-10"
      >
        <Link
          to="/shop"
          ref={magnet.ref}
          onMouseMove={magnet.onMouseMove}
          onMouseLeave={magnet.onMouseLeave}
          className="magnetic group inline-flex items-center gap-3 border border-lightCream/25 px-7 py-4 text-[9px] uppercase tracking-[0.3em] text-lightCream transition-colors duration-300 hover:border-lightCream hover:bg-lightCream hover:text-ink"
        >
          Explore the Collection
          <ArrowRight
            size={13}
            strokeWidth={1.2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="text-[7px] uppercase tracking-[0.4em] text-lightCream/40">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-3 block h-8 w-px bg-lightCream/25"
        />
      </motion.div>
    </section>
  );
};

// ------------------------------ MARQUEE ---------------------------------

const MARQUEE_ITEMS = [
  "Specialty Coffee",
  "Specialty Tea",
  "From the Hills of Nepal",
  "Laali Hills",
];

const MarqueeStrip = () => (
  <div className="overflow-hidden border-y border-lightCream/10 bg-ink py-5">
    <div className="marquee-track">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
        <span
          key={index}
          className="mx-6 flex items-center gap-6 whitespace-nowrap text-xs uppercase tracking-[0.35em] text-lightCream/40"
        >
          {item}
          <span className="text-red">·</span>
        </span>
      ))}
    </div>
  </div>
);

// ----------------------------- CHAPTERS --------------------------------

const CHAPTERS = [
  {
    number: "01",
    tag: "Essence",
    heading: (
      <>
        The hills have{" "}
        <span className="italic text-red">something to give.</span>
      </>
    ),
    body: "Laali represents that heightened moment when the hills are flourishing — dense with greenery, blooming, giving abundantly. Hills represents the abundance, the landscape, the life that surrounds it. Together, they are the essence of Nepal's hills.",
    align: "left",
  },
  {
    number: "02",
    tag: "Origin",
    heading: (
      <>
        We are what we <span className="italic text-red">feature.</span>
      </>
    ),
    body: "Where it came from. Who produced it. What the land gave it. Why we chose it. Every Laali Hills product carries its origin and its people with it — never an anonymous commodity.",
    align: "right",
  },
  {
    number: "03",
    tag: "Story",
    heading: (
      <>
        The product alone is{" "}
        <span className="italic text-red">not the whole experience.</span>
      </>
    ),
    body: "A packet of coffee can be replicated. A packet of tea can be replicated. The story behind it cannot. Every product carries the story of its origin, its producer, its landscape, its cultivation.",
    align: "left",
  },
  {
    number: "04",
    tag: "Authenticity",
    heading: (
      <>
        Premium means <span className="italic text-red">intentional.</span>
      </>
    ),
    body: "Beautiful packaging, exceptional photography, refined service — none of it exists to hide an ordinary product. The product has to be bulletproof first. Aesthetics attract. Story creates curiosity. Authenticity builds trust.",
    align: "right",
  },
  {
    number: "05",
    tag: "Philosophy",
    heading: (
      <>
        From the hills,{" "}
        <span className="italic text-red">to the experience.</span>
      </>
    ),
    body: "We want to discover what the hills have to give, preserve its story, present it beautifully, and take it to people who appreciate what makes it special.",
    align: "left",
    cta: true,
  },
];

const ChapterSection = ({ chapter }) => {
  const isRight = chapter.align === "right";
  const [imageRef, imageVisible] = useInView({ threshold: 0.3 });

  return (
    <section className="relative overflow-hidden bg-lightCream px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div
        className={`mx-auto grid max-w-350 grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24 ${isRight ? "lg:[direction:rtl]" : ""}`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:[direction:ltr]"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-soil">
            Chapter {chapter.number} · {chapter.tag}
          </span>

          <h2 className="header mt-6 max-w-lg text-[clamp(2.25rem,4.5vw,3.75rem)] uppercase leading-[0.95] tracking-[-0.04em] text-ink">
            {chapter.heading}
          </h2>

          <p className="mt-7 max-w-md text-sm font-light leading-7 text-ink/60 sm:text-base">
            {chapter.body}
          </p>

          {chapter.cta && (
            <Link
              to="/shop"
              className="link-sweep group mt-9 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-ink transition-colors hover:text-red"
            >
              Explore the Collection
              <ArrowRight
                size={13}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          )}
        </motion.div>

        {/* TODO: replace with real photography/video of the origin, farm or process this chapter refers to.
                    Reveal here is pure CSS (.reveal-wipe in effects.css) driven by useInView, not Framer. */}
        <div
          ref={imageRef}
          className={`reveal-wipe relative aspect-4/5 w-full overflow-hidden bg-soil lg:[direction:ltr] ${imageVisible ? "is-visible" : ""}`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-soil via-ink to-red/20" />
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 55%)",
            }}
          />
          <span className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.3em] text-lightCream/40">
            {chapter.tag}
          </span>
        </div>
      </div>
    </section>
  );
};

// --------------------------- OCCASIONS GRID -----------------------------

const FOR_YOURSELF = [
  { title: "Morning Ritual", caption: "Where the day begins." },
  { title: "Focus Hours", caption: "A quiet lift through deep work." },
  { title: "Slow Afternoons", caption: "Tea, unhurried." },
  { title: "Discovery", caption: "A new origin, a new story." },
];

const FOR_OTHERS = [
  {
    title: "Corporate Gifting",
    caption: "A gift with provenance, not just a box.",
  },
  { title: "Celebrations", caption: "Marking a moment worth remembering." },
  { title: "Hosting", caption: "Something to offer guests, proudly." },
  { title: "Thank You", caption: "Gratitude, from the hills." },
];

const OccasionColumn = ({ label, items, variant }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className={`px-6 py-16 sm:px-10 sm:py-20 lg:px-14 ${variant === "dark" ? "bg-ink text-lightCream" : "bg-lightCream text-ink"}`}
  >
    <span
      className={`text-[8px] uppercase tracking-[0.4em] ${variant === "dark" ? "text-lightCream/40" : "text-soil"}`}
    >
      {label}
    </span>

    <div
      className={`mt-8 divide-y ${variant === "dark" ? "divide-lightCream/10" : "divide-ink/10"}`}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-baseline justify-between gap-6 py-5"
        >
          <span className="text-lg uppercase tracking-[-0.01em] sm:text-xl">
            {item.title}
          </span>
          <span
            className={`hidden max-w-40 text-right text-[11px] font-light leading-5 sm:block ${variant === "dark" ? "text-lightCream/50" : "text-ink/50"}`}
          >
            {item.caption}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const OccasionsGrid = () => (
  <section>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <OccasionColumn
        label="For Yourself"
        items={FOR_YOURSELF}
        variant="dark"
      />
      <OccasionColumn label="For Others" items={FOR_OTHERS} variant="light" />
    </div>
  </section>
);

// --------------------------- PRODUCER CAROUSEL ---------------------------

// TODO: replace with real producers once documented — names, regions,
// portraits and quotes here are placeholders, per the brand doc's
// commitment to real people rather than stock representations.
const PRODUCERS = [
  {
    name: "Producer name",
    region: "Ilam, Nepal",
    role: "Tea Grower",
    quote: "One line on what this harvest means to them.",
  },
  {
    name: "Producer name",
    region: "Gulmi, Nepal",
    role: "Coffee Grower",
    quote: "One line on the land or the process.",
  },
  {
    name: "Producer name",
    region: "Kaski, Nepal",
    role: "Tea Grower",
    quote: "One line on why this origin is special.",
  },
  {
    name: "Producer name",
    region: "Syangja, Nepal",
    role: "Coffee Grower",
    quote: "One line worth remembering.",
  },
];

const ProducerCard = ({ producer }) => (
  <div className="group relative w-72 shrink-0 snap-start overflow-hidden bg-soil sm:w-80">
    <div className="relative aspect-3/4 w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-soil via-ink to-red/25 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 text-lightCream">
        <span className="text-[8px] uppercase tracking-[0.3em] text-lightCream/50">
          {producer.role} · {producer.region}
        </span>
        <p className="mt-2 text-lg uppercase tracking-[-0.01em]">
          {producer.name}
        </p>
        <p className="mt-2 text-xs font-light leading-5 text-lightCream/60">
          “{producer.quote}”
        </p>
      </div>
    </div>
  </div>
);

const ProducerCarousel = () => {
  const scrollRef = useRef(null);

  return (
    <section className="bg-ink px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-350">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-lightCream/40">
              Interview
            </span>
            <h2 className="header mt-6 max-w-xl text-[clamp(2.25rem,4.5vw,3.75rem)] uppercase leading-[0.95] tracking-[-0.04em] text-lightCream">
              The people
              <br />
              behind the <span className="italic text-red">hills.</span>
            </h2>
          </div>

          <Link
            to="/producers"
            className="link-sweep group inline-flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-lightCream/60 transition-colors hover:text-lightCream"
          >
            Meet everyone
            <ArrowUpRight
              size={13}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCERS.map((producer, index) => (
            <ProducerCard
              key={`${producer.name}-${index}`}
              producer={producer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ------------------------------ BOTTOM NAV -------------------------------

const NAV_TILES = [
  { label: "Our Story", caption: "Where Laali Hills comes from", to: "/about" },
  {
    label: "Our Process",
    caption: "From the hills to the cup",
    to: "/process",
  },
  { label: "Shop", caption: "Coffee & tea, by origin", to: "/shop" },
  { label: "The People", caption: "The producers behind it", to: "/producers" },
];

const BottomNavTile = ({ tile }) => (
  <Link
    to={tile.to}
    className="group relative block aspect-square overflow-hidden bg-soil"
  >
    <div className="absolute inset-0 bg-linear-to-br from-soil via-ink to-red/20 transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-ink/30 transition-colors duration-500 group-hover:bg-ink/10" />

    <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-lightCream sm:p-8">
      <span className="text-[8px] uppercase tracking-[0.3em] text-lightCream/50">
        {tile.caption}
      </span>
      <span className="mt-2 flex items-center gap-2 text-lg uppercase tracking-[-0.01em] sm:text-xl">
        {tile.label}
        <ArrowUpRight
          size={16}
          strokeWidth={1.2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </div>
  </Link>
);

const BottomNav = () => (
  <section className="bg-ink px-6 pb-6 sm:px-10 lg:px-16">
    <div className="mx-auto grid max-w-350 grid-cols-2 gap-3 lg:grid-cols-4">
      {NAV_TILES.map((tile) => (
        <BottomNavTile key={tile.label} tile={tile} />
      ))}
    </div>
  </section>
);

// --------------------------------- HOME ----------------------------------

const Home = () => (
  <main className="overflow-hidden bg-lightCream text-ink">
    <div className="grain-overlay" />
    <Cursor />

    <Hero />
    <MarqueeStrip />

    {CHAPTERS.map((chapter) => (
      <ChapterSection key={chapter.number} chapter={chapter} />
    ))}

    <OccasionsGrid />
    <ProducerCarousel />
    <BottomNav />
  </main>
);

export default Home;

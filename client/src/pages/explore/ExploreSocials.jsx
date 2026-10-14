import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Grid2X2,
  Coffee,
  Leaf,
  Sprout,
  MapPin,
  Flame,
  Sun,
  Moon,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@laalihills",
    href: "YOUR_INSTAGRAM_URL",
    icon: Flame,
  },
  {
    name: "Facebook",
    handle: "Laali Hills",
    href: "YOUR_FACEBOOK_URL",
    icon: Flame,
  },
  {
    name: "YouTube",
    handle: "Laali Hills",
    href: "YOUR_YOUTUBE_URL",
    icon: Flame,
  },
];

const highlights = [
  { label: "Our Origins", icon: MapPin, color: "bg-hill" },
  { label: "Coffee", icon: Coffee, color: "bg-soil" },
  { label: "Tea", icon: Leaf, color: "bg-deepRed" },
  { label: "Our People", icon: Sprout, color: "bg-hill" },
];

const posts = [
  {
    category: "Origins",
    title: "Where every cup begins",
    image: "/images/explore/origin.jpg",
    type: "story",
    shape: "tall",
  },
  {
    category: "Coffee",
    title: "A closer look at our beans",
    image: "/images/explore/coffee.jpg",
    type: "reel",
  },
  {
    category: "Tea",
    title: "Slow mornings, better tea",
    image: "/images/explore/tea.jpg",
    type: "story",
  },
  {
    category: "Behind the scenes",
    title: "The hands behind the harvest",
    image: "/images/explore/harvest.jpg",
    type: "reel",
  },
  {
    category: "Coffee",
    title: "The ritual of a good brew",
    image: "/images/explore/brewing.jpg",
    type: "story",
  },
  {
    category: "People",
    title: "Stories from the hills",
    image: "/images/explore/people.jpg",
    type: "story",
  },
];

const filters = [
  "All",
  "Origins",
  "Coffee",
  "Tea",
  "Behind the scenes",
  "People",
];

const ExploreSocials = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDark, setIsDark] = useState(false);

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  return (
    <main
      className={` ${
        isDark ? "dark" : ""
      } min-h-screen bg-lightWhite text-ink transition-colors duration-300 dark:bg-ink dark:text-lightCream`}
    >
      {/* CINEMATIC COVER */}
      <section className="relative h-[62svh] min-h-[440px] max-h-[760px] overflow-hidden sm:h-[70svh]">
        <video
          src="/videos/plantation.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1400px] items-end justify-between gap-6 px-5 pb-8 sm:px-10 sm:pb-12 lg:px-16"
        >
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.32em] text-lightCream/70 sm:text-[10px]">
              From the hills of Nepal
            </p>

            <h1 className="header text-[clamp(3.5rem,10vw,8.5rem)] uppercase leading-[0.8] tracking-[-0.065em]">
              Explore
              <br />
              <span className="text-lightCream/60">the context.</span>
            </h1>
          </div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-1 hidden items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-lightCream/65 sm:flex"
          >
            Scroll to discover
            <ArrowDown size={14} strokeWidth={1.3} />
          </motion.div>
        </motion.div>
      </section>

      {/* SOCIAL PROFILE */}
      <section className="relative mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-16">
        {/* LIGHT / DARK MODE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsDark((prev) => !prev)}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={isDark}
          className="absolute right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-lightCream/25 bg-red/90 px-4 py-2.5 text-sm text-lightCream shadow-sm backdrop-blur-md transition-colors hover:bg-deepRed dark:border-lightCream/15 dark:bg-ink/90 dark:text-lightCream dark:hover:bg-hill"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span>{isDark ? "Light mode" : "Dark mode"}</span>
        </button>

        <div className="flex flex-col gap-6 border-b border-lightCream/10 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Brand avatar */}
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-red/50 bg-hill p-1 sm:h-24 sm:w-24">
              <div className="flex h-full w-full items-center justify-center rounded-full border border-lightCream/20">
                <span className="header text-xl tracking-[-0.08em] sm:text-2xl">
                  LH.
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                  Laali Hills
                </h2>
                <span className="rounded-full border border-lightCream/15 px-2 py-1 text-[8px] uppercase tracking-[0.15em] text-lightCream/60">
                  Nepal
                </span>
              </div>

              <p className="mt-1 text-xs text-lightCream/55 sm:text-sm">
                Specialty coffee & tea, rooted in origin.
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-lightCream/40">
                Land · People · Craft
              </p>
            </div>
          </div>

          {/* Social platform links */}
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow Laali Hills on ${name}`}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-lightCream/15 px-4 text-xs text-lightCream/75 transition-colors hover:border-red hover:bg-red hover:text-lightCream"
              >
                <Icon size={14} strokeWidth={1.6} />
                <span>{name}</span>
                <ArrowUpRight size={11} />
              </a>
            ))}
          </div>
        </div>

        {/* STORY HIGHLIGHTS */}
        <div className="flex gap-5 overflow-x-auto py-7 sm:gap-8 sm:py-9">
          {highlights.map(({ label, icon: Icon, color }) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
              className="group flex min-w-[70px] flex-col items-center gap-3"
            >
              <div className="rounded-full border border-lightCream/20 p-[3px] transition-colors group-hover:border-red">
                <div
                  className={`flex h-[58px] w-[58px] items-center justify-center rounded-full ${color} sm:h-[68px] sm:w-[68px]`}
                >
                  <Icon size={22} strokeWidth={1.2} />
                </div>
              </div>
              <span className="whitespace-nowrap text-[10px] text-lightCream/65 transition-colors group-hover:text-lightCream">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* FEED HEADING */}
        <div className="flex items-end justify-between gap-4 pb-5">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-red">
              The Laali journal
            </p>
            <h2 className="header text-3xl tracking-[-0.045em] sm:text-4xl">
              Life around the hills.
            </h2>
          </div>

          <span className="hidden text-[10px] text-lightCream/40 sm:block">
            Stories, people & everyday rituals
          </span>
        </div>

        {/* FEED FILTERS */}
        <div className="flex gap-5 overflow-x-auto border-b border-lightCream/10 pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 border-b pb-3 text-[10px] transition-colors sm:text-xs ${
                activeFilter === filter
                  ? "border-red text-lightCream"
                  : "border-transparent text-lightCream/45 hover:text-lightCream/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SOCIAL CONTENT GRID */}
        <div className="grid grid-cols-2 gap-2 py-5 sm:grid-cols-3 sm:gap-4 sm:py-7">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className={`group relative isolate aspect-[4/5] overflow-hidden rounded-sm bg-hill ${
                post.shape === "tall" ? "sm:row-span-1" : ""
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/15" />

              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/45 px-2 py-1 text-[9px] backdrop-blur-sm">
                {post.type === "reel" ? (
                  <Play size={10} />
                ) : (
                  <Grid2X2 size={10} />
                )}
                <span className="uppercase tracking-wider">{post.type}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                <p className="mb-2 text-[8px] uppercase tracking-[0.2em] text-lightCream/65 sm:text-[9px]">
                  {post.category}
                </p>
                <h3 className="max-w-[240px] text-sm leading-snug sm:text-lg">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center gap-1 text-[9px] text-lightCream/65 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                  Discover story <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOLLOW CTA */}
        <div className="mb-12 mt-5 flex flex-col items-start justify-between gap-5 rounded-xl border border-lightCream/10 bg-lightCream/[0.03] p-6 sm:mb-20 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-red">
              Stay close to the hills
            </p>
            <h2 className="header text-2xl tracking-tight sm:text-3xl">
              There’s more to discover.
            </h2>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-lightCream/50 sm:text-sm">
              Follow our journey through coffee, tea, the people who grow them,
              and the places that make them special.
            </p>
          </div>

          <a
            href="YOUR_INSTAGRAM_URL"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-3 rounded-full bg-red px-5 text-xs font-medium transition-colors hover:bg-deepRed"
          >
            Follow Laali Hills
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ExploreSocials;

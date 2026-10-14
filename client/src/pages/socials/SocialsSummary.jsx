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

import { Link } from "react-router-dom";
import Button from "../../components/Button";

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
    <section className="relative overflow-hidden bg-lightWhite px-5 py-20 text-ink transition-colors duration-300 dark:bg-ink dark:text-lightCream sm:px-10 sm:py-28 lg:px-16">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-red/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 gap-5 sm:mb-14  text-center">
          <div className="gap-3 text-center ">
            <h1 className="header text-5xl font-medium uppercase tracking-[0.25em] text-red dark:text-lightCream/60">
              Our Socials
            </h1>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <h2 className="max-w-lg text-4xl font-light leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              More than a cup.
              <br />
              <span className="font-normal text-red">A whole world.</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-ink/65 dark:text-lightCream/65 sm:text-base">
              Laali Hills sharing stories of coffee craft, inspiring places, and
              daily morning rituals.
            </p>

            {/* Social actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to={"/socials"} icon={false}>
                Explore our Socials
              </Button>

              <div className="flex items-center gap-2 text-xs text-ink/50 dark:text-lightCream/50">
                <Coffee size={15} />
                <span>Stories worth slowing down</span>
              </div>
            </div>

            {/* Social platform links */}
            <div className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-6 dark:border-lightCream/10">
              <span className="mr-1 text-[10px] uppercase tracking-[0.16em] text-ink/45 dark:text-lightCream/45">
                Find us on
              </span>

              <a
                href="YOUR_Flame_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="Laali Hills on Flame"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 transition-all duration-300 hover:border-red hover:bg-red hover:text-lightCream dark:border-lightCream/15"
              >
                <Flame size={17} />
              </a>

              <a
                href="YOUR_FACEBOOK_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="Laali Hills on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-sm font-semibold transition-all duration-300 hover:border-red hover:bg-red hover:text-lightCream dark:border-lightCream/15"
              >
                f
              </a>

              <a
                href="YOUR_YOUTUBE_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="Laali Hills on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 transition-all duration-300 hover:border-red hover:bg-red hover:text-lightCream dark:border-lightCream/15"
              >
                <Play size={16} />
              </a>
            </div>
          </div>

          {/* Social content collage */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Decorative label */}
            <div className="absolute -left-3 top-8 z-20 hidden  items-center gap-2 rounded-full border border-ink/10 bg-lightWhite px-4 py-3 shadow-lg dark:border-lightCream/10 dark:bg-hill sm:flex">
              <Leaf size={16} className="text-red" />
              <span className="text-[10px] tracking-wide">
                Grown with purpose
              </span>
            </div>

            <div className="grid h-[390px] grid-cols-2 grid-rows-2 gap-3 sm:h-[460px] sm:gap-4">
              {socialPosts.map((post, index) => (
                <a
                  key={post.title}
                  href="/explore"
                  className={`group relative isolate overflow-hidden rounded-2xl bg-paper dark:bg-hill ${post.className}`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

                  {/* Post type indicator */}
                  <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md">
                    {post.type === "reel" ? (
                      <Play size={13} fill="currentColor" />
                    ) : (
                      <Flame size={14} />
                    )}
                  </div>

                  {/* Post details */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/75">
                      {post.category}
                    </p>

                    <h3 className="max-w-[200px] text-lg font-light leading-snug sm:text-xl">
                      {post.title}
                    </h3>

                    {index === 0 && (
                      <div className="mt-4 flex items-center gap-4 text-[10px] text-white/80">
                        <span className="flex items-center gap-1.5">
                          <Heart size={13} />
                          Made with care
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MessageCircle size={13} />
                          Shared stories
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Floating Explore badge */}
            <a
              href="/explore"
              className="absolute -bottom-5 right-4 z-20 flex items-center gap-3 rounded-full border border-ink/10 bg-lightWhite py-2 pl-2 pr-5 shadow-xl transition-transform duration-300 hover:-translate-y-1 dark:border-lightCream/10 dark:bg-hill sm:right-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red text-lightCream">
                <ArrowUpRight size={18} />
              </span>

              <span>
                <span className="block text-xs font-medium">Take a look</span>
                <span className="mt-0.5 block text-[10px] text-ink/50 dark:text-lightCream/50">
                  Explore Laali Hills
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSummary;

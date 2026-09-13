import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Leaf, Sprout } from "lucide-react";

// import logo from "/gold.png"
import logo from "../assets/logo/gold.svg";

import trending from "../assets/images/trending.jpg";
import shop from "../assets/images/shop.jpg";
import explore from "../assets/images/explore.webp";
import stories from "../assets/images/stories.jpg";
import about from "../assets/images/about.webp";
import support from "../assets/images/support.png";

const menuItems = [
  {
    title: "Trending",
    path: "/trending",
    description: "What's happening around Laali Hills.",
    preview: "Discover what is new, loved and happening.",
    image: trending,
    subItems: [
      {
        title: "Top",
        path: "/trending/top",
      },
      {
        title: "Newest",
        path: "/trending/newest",
      },
      {
        title: "Hot",
        path: "/trending/hot",
      },
    ],
  },

  {
    title: "Shop",
    path: "/shop",
    description: "Explore coffee, tea and collections.",
    preview: "Exceptional products, sourced from the hills of Nepal.",
    image: shop,
    subItems: [
      {
        title: "Coffee",
        items: [
          {
            title: "Beans (Coffee)",
            path: "/shop/coffee",
          },
        ],
      },

      {
        title: "Tea",
        items: [
          {
            title: "Leaves (Tea)",
            path: "/shop/tea",
          },
        ],
      },

      {
        title: "Collection",
        items: [
          {
            title: "Gifts",
            path: "/shop/collection/gifts",
          },
          {
            title: "Accessories",
            path: "/shop/collection/accessories",
          },
          {
            title: "Bulk (Wholesale)",
            path: "/shop/collection/accessories",
          },
        ],
      },
    ],
  },

  {
    title: "Explore",
    path: "/explore",
    description: "Go beyond the cup.",
    preview: "Discover the places, people and processes behind Laali Hills.",
    image: explore,
    subItems: [
      {
        title: "Origins",
        path: "/explore/origins",
      },
      {
        title: "Farmers",
        path: "/explore/farmers",
      },
      {
        title: "Our Processes",
        path: "/explore/processes",
      },
      {
        title: "Why Laali Hills",
        path: "/explore/why-laali-hills",
      },
      {
        title: "Nepal Coffee",
        path: "/explore/nepal-coffee",
      },
    ],
  },

  {
    title: "Stories",
    path: "/stories",
    description: "Stories from the hills.",
    preview: "People, places and moments behind every cup.",
    image: stories,
    subItems: [
      {
        title: "Farm Stories",
        path: "/stories/farm",
      },
      {
        title: "Coffee Blog",
        path: "/stories/coffee",
      },
      {
        title: "Tea Blog",
        path: "/stories/tea",
      },
      {
        title: "Culture",
        path: "/stories/culture",
      },
    ],
  },

  {
    title: "About",
    path: "/about",
    description: "The story of Laali Hills.",
    preview: "Where the hills become an experience.",
    image: about,
    subItems: [],
  },

  {
    title: "Support",
    path: "/support",
    description: "We're here to help.",
    preview: "Questions, orders, shipping and everything in between.",
    image: support,
    subItems: [],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Trending");

  const activeMenu =
    menuItems.find((item) => item.title === activeItem) || menuItems[0];

  // Prevent background scrolling while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 md:top-9 z-[100]">
        <div className="flex h-24 items-center justify-between px-3 sm:px-8 lg:px-12 xl:px-16 text-lightWhite">
          {/* LOGO */}
          <Link
            to="/"
            className="group relative z-[110] flex items-center"
            aria-label="Laali Hills"
          >
            <img
              src={logo}
              alt="Laali Hills"
              className="
        block
        h-8
        w-auto
        object-contain
        sm:h-9
        lg:h-14
    "
            />
          </Link>

          {/* BURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="group relative z-[110] flex h-12 w-12 items-center justify-center "
          >
            <span className="relative flex h-6 w-7 flex-col justify-center cursor-pointer">
              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: 45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: -4,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute left-0 h-px w-7 ${menuOpen ? "bg-ink" : "bg-soil"}`}
              />

              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: -45,
                        y: 0,
                      }
                    : {
                        rotate: 0,
                        y: 4,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute left-0 h-px w-7 ${menuOpen ? "bg-ink" : "bg-soil"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-[3px]"
            />
            {/* =================================================
                DESKTOP MENU
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: "-100%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "-100%",
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[90] hidden h-fit w-full overflow-hidden bg-ink lg:block"
            >
              <div className="flex h-full w-full">
                {/* ==========================================
                    LEFT NAVIGATION
                =========================================== */}

                <div className="relative flex w-[20%] flex-col border-r border-lightWhite/10 px-10 pb-12 pt-32 xl:px-16">
                  {/* Small label */}

                  <div className="my-10 flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.35em] text-ivory">
                      Navigations Laali Hills
                    </span>
                  </div>

                  {/* Main menu */}

                  <nav className="flex flex-1 flex-col justify-start ">
                    {menuItems.map((item, index) => {
                      const isActive = activeItem === item.title;

                      return (
                        <motion.div
                          key={item.title}
                          onMouseEnter={() => setActiveItem(item.title)}
                          onFocus={() => setActiveItem(item.title)}
                          onClick={() => setActiveItem(item.title)}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: 0.08 + index * 0.045,
                            duration: 0.5,
                          }}
                          className="group flex w-full items-center justify-between border-b border-lightWhite/10 py-4 text-left"
                        >
                          <Link
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="flex flex-1 items-center gap-4"
                          >
                            {/* Active indicator */}

                            <motion.span
                              animate={{
                                width: isActive ? 24 : 0,
                                opacity: isActive ? 1 : 0,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              className="h-px bg-lightWhite"
                            />

                            <span
                              className={`md:text-base tracking-[-0.025em] transition-colors duration-300 xl:text-2xl ${
                                isActive
                                  ? "text-lightWhite"
                                  : "text-lightWhite/45 group-hover:text-lightWhite/75"
                              }`}
                            >
                              {item.title}
                            </span>
                          </Link>

                          <ChevronRight
                            size={18}
                            strokeWidth={1}
                            className={`transition-all duration-300 ${
                              isActive
                                ? "translate-x-0 text-lightWhite opacity-100"
                                : "-translate-x-2 text-lightWhite/45 opacity-0"
                            }`}
                          />
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* ===========================================
    RIGHT PREVIEW
=========================================== */}

                <div className="relative flex w-[80%] overflow-hidden bg-lightWhite">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Large leaf */}
                    <Leaf
                      size={230}
                      strokeWidth={0.7}
                      className="absolute -left-16 -top-16 rotate-[25deg] text-hill/[0.055]"
                    />

                    {/* Small leaf */}
                    <Leaf
                      size={110}
                      strokeWidth={0.8}
                      className="absolute left-[24%] top-[18%] -rotate-[35deg] text-red/[0.045]"
                    />

                    {/* Sprout */}
                    <Sprout
                      size={180}
                      strokeWidth={0.7}
                      className="absolute bottom-[-35px] left-[12%] rotate-[18deg] text-hill/[0.045]"
                    />

                    {/* Small botanical detail */}
                    <Leaf
                      size={75}
                      strokeWidth={0.8}
                      className="absolute bottom-[20%] left-[8%] rotate-[70deg] text-soil/[0.04]"
                    />
                  </div>
                  {/* ===========================================
        LEFT — EDITORIAL PREVIEW
    =========================================== */}

                  <div className="relative flex w-[40%] flex-col px-12 pb-4 pt-32 xl:px-16">
                    <div className="relative flex h-full flex-col">
                      {/* Preview heading */}

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeMenu.title}
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="mb-12"
                        >
                          <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-ink/90">
                            {String(menuItems.indexOf(activeMenu) + 1).padStart(
                              2,
                              "0",
                            )}
                          </p>

                          <h2 className="max-w-xl subheader text-5xl leading-[0.9] tracking-[-0.035em] text-ink xl:text-6xl">
                            {activeMenu.title}
                          </h2>

                          <p className="mt-4 max-w-md  text-base italic leading-relaxed text-ink/70">
                            {activeMenu.preview}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      {/* ======================================
                SUB NAVIGATION
            ======================================= */}

                      <div className="relative flex-1">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeMenu.title}
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -10,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: 0.05,
                            }}
                          >
                            {activeMenu.subItems?.length > 0 && (
                              <div className="grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8">
                                {activeMenu.subItems.map((subItem) => {
                                  if (
                                    typeof subItem === "string" ||
                                    subItem.path
                                  ) {
                                    return (
                                      <Link
                                        to={
                                          typeof subItem === "string"
                                            ? subItem
                                            : subItem.path
                                        }
                                        onClick={() => setMenuOpen(false)}
                                        key={
                                          typeof subItem === "string"
                                            ? subItem
                                            : subItem.path
                                        }
                                        className="group flex items-center justify-between border-b border-ink/10 pb-4"
                                      >
                                        <span className="text-sm text-ink/75 transition-colors duration-300 group-hover:text-ink">
                                          {typeof subItem === "string"
                                            ? subItem
                                            : subItem.title}
                                        </span>

                                        <ArrowUpRight
                                          size={14}
                                          strokeWidth={1}
                                          className="text-ink/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                                        />
                                      </Link>
                                    );
                                  }

                                  return (
                                    <div
                                      key={subItem.title}
                                      className="space-y-3"
                                    >
                                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-ink/70">
                                        {subItem.title}
                                      </p>

                                      {subItem.items?.map((child) => (
                                        <Link
                                          to={child.path}
                                          onClick={() => setMenuOpen(false)}
                                          key={child.path}
                                          className="group flex items-center gap-3 text-sm text-ink/75"
                                        >
                                          <span className="h-px w-2 bg-ink transition-all duration-300 group-hover:w-5" />

                                          <span className="transition-colors duration-300 group-hover:text-ink">
                                            {child.title}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* No subnav */}

                            {(!activeMenu.subItems ||
                              activeMenu.subItems.length === 0) && (
                              <Link
                                to={activeMenu.path}
                                onClick={() => setMenuOpen(false)}
                                className="group inline-flex items-center gap-4 border-b border-ink/50 pb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ink"
                              >
                                Discover {activeMenu.title}
                                <ArrowUpRight
                                  size={14}
                                  strokeWidth={1}
                                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                              </Link>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[50%] overflow-hidden ">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeMenu.title}
                        initial={{
                          opacity: 0,
                          scale: 1.08,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 py-12  px-5"
                      >
                        <img
                          src={activeMenu.image}
                          alt={`${activeMenu.title} preview`}
                          className="h-full w-full object-cover rounded-4xl"
                        />

                        {/* Bottom information */}

                        <div className="absolute inset-x-0 bottom-0 py-16 px-10">
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: 0.2,
                            }}
                          >
                            <span className="text-[7px] uppercase tracking-[0.35em] text-lightWhite/80">
                              Discover
                            </span>

                            <p className="mt-2 font-title text-2xl leading-none text-lightWhite">
                              {activeMenu.title}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                MOBILE MENU
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: "-100%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "-100%",
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-0 z-[90] overflow-y-auto bg-ink lg:hidden"
            >
              <div className="min-h-full px-6 pb-10 pt-32 sm:px-10">
                {/* Mobile label */}

                <div className="mb-8 flex items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.35em] text-lightWhite/60">
                    Explore Laali Hills
                  </span>
                </div>

                {/* Mobile menu */}

                <nav>
                  {menuItems.map((item, index) => {
                    const isActive = activeItem === item.title;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.08 + index * 0.05,
                          duration: 0.45,
                        }}
                        className="border-b border-lightWhite/10"
                      >
                        <div className="flex w-full items-center justify-between py-5 text-left">
                          <Link
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`text-xl ${
                              isActive
                                ? "text-lightWhite"
                                : "text-lightWhite/70"
                            }`}
                          >
                            {item.title}
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              setActiveItem(isActive ? "" : item.title)
                            }
                            aria-expanded={isActive}
                            aria-label={`${isActive ? "Collapse" : "Expand"} ${item.title} submenu`}
                          >
                            <motion.span
                              animate={{
                                rotate: isActive ? 90 : 0,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="block"
                            >
                              <ChevronRight
                                size={18}
                                strokeWidth={1}
                                className="text-lightWhite"
                              />
                            </motion.span>
                          </button>
                        </div>

                        {/* Mobile subnav */}

                        <AnimatePresence>
                          {isActive && item.subItems?.length > 0 && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 gap-4 pb-6 pl-2">
                                {item.subItems.map((subItem) => {
                                  if (
                                    typeof subItem === "string" ||
                                    subItem.path
                                  ) {
                                    return (
                                      <Link
                                        to={
                                          typeof subItem === "string"
                                            ? subItem
                                            : subItem.path
                                        }
                                        onClick={() => setMenuOpen(false)}
                                        key={
                                          typeof subItem === "string"
                                            ? subItem
                                            : subItem.path
                                        }
                                        className="text-xs text-lightWhite/60"
                                      >
                                        {typeof subItem === "string"
                                          ? subItem
                                          : subItem.title}
                                      </Link>
                                    );
                                  }

                                  return (
                                    <div
                                      key={subItem.title}
                                      className="space-y-2"
                                    >
                                      <p className="text-[8px] uppercase tracking-[0.25em] text-lightWhite/60">
                                        {subItem.title}
                                      </p>

                                      {subItem.items?.map((child) => (
                                        <Link
                                          to={child.path}
                                          onClick={() => setMenuOpen(false)}
                                          key={child.path}
                                          className="block text-xs text-lightWhite/60"
                                        >
                                          {child.title}
                                        </Link>
                                      ))}
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile footer */}

                <div className="mt-10">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-lightWhite/35">
                    Nepal • Origin • Craft
                  </p>

                  <p className="mt-2 text-xs italic text-lightWhite/55">
                    The hills are our beginning.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

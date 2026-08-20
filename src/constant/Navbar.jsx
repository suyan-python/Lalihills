import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import
{
    ArrowUpRight,
    ChevronRight,
    X,
} from "lucide-react";

const menuItems = [
    {
        title: "Trending",
        description: "What's happening around Laali Hills.",
        preview: "Discover what is new, loved and happening.",
        subItems: ["Top", "Newest", "Hot"],
    },

    {
        title: "Shop",
        description: "Explore coffee, tea and collections.",
        preview: "Exceptional products, sourced from the hills of Nepal.",
        subItems: [
            {
                title: "Coffee",
                items: ["All Coffee"],
            },
            {
                title: "Tea",
                items: ["All Tea"],
            },
            {
                title: "Collection",
                items: ["Packaging", "Gifts", "Accessories"],
            },
        ],
    },

    {
        title: "Explore",
        description: "Go beyond the cup.",
        preview: "Discover the places, people and processes behind Laali Hills.",
        subItems: [
            "Origins",
            "Farmers",
            "Our Processes",
            "Why Laali Hills",
            "Nepal Coffee",
        ],
    },

    {
        title: "Stories",
        description: "Stories from the hills.",
        preview: "People, places and moments behind every cup.",
        subItems: [
            "Farm Stories",
            "Coffee Blog",
            "Tea Blog",
            "Culture",
        ],
    },

    {
        title: "About",
        description: "The story of Laali Hills.",
        preview: "Where the hills become an experience.",
        subItems: [],
    },

    {
        title: "Support",
        description: "We're here to help.",
        preview: "Questions, orders, shipping and everything in between.",
        subItems: [],
    },
];

const Navbar = () =>
{
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Trending");

    const activeMenu =
        menuItems.find((item) => item.title === activeItem) ||
        menuItems[0];

    // Prevent background scrolling while menu is open
    useEffect(() =>
    {
        if (menuOpen)
        {
            document.body.style.overflow = "hidden";
        } else
        {
            document.body.style.overflow = "";
        }

        return () =>
        {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            {/* =====================================================
          NAVBAR
      ====================================================== */}

            <header className="fixed inset-x-0 top-9 z-[100]">
                <div className="flex h-24 items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16 text-[#F8EDE8]">

                    {/* LOGO */}
                    <a
                        href="/"
                        className="group relative z-[110] flex items-center"
                        aria-label="Laali Hills"
                    >
                        {/* Replace this with your actual logo */}
                        <span className="header italic text-2xl  tracking-[-0.03em] sm:text-3xl">
                            Laali Hills
                        </span>
                    </a>

                    {/* BURGER */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="group relative z-[110] flex h-12 w-12 items-center justify-center"
                    >
                        <span className="relative flex h-6 w-7 flex-col justify-center">
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
                                className="absolute left-0 h-px w-7 bg-white"
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
                                className="absolute left-0 h-px w-7 bg-white"
                            />
                        </span>
                    </button>
                </div>
            </header>

            {/* =====================================================
          MENU OVERLAY
      ====================================================== */}

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
                            className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-[3px]"
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
                            className="fixed right-0 top-0 z-[90] hidden h-fit w-full overflow-hidden bg-[#281A18] lg:block"
                        >
                            <div className="flex h-full w-full">

                                {/* ==========================================
                    LEFT NAVIGATION
                =========================================== */}

                                <div className="relative flex w-[42%] flex-col border-r border-[#E9C9C1]/10 px-10 pb-12 pt-32 xl:px-16">

                                    {/* Small label */}

                                    <div className="mb-10 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#C64A50]" />

                                        <span className="text-[9px] uppercase tracking-[0.35em] text-[#BFA29B]">
                                            Explore Laali Hills
                                        </span>
                                    </div>

                                    {/* Main menu */}

                                    <nav className="flex flex-1 flex-col justify-start">
                                        {menuItems.map((item, index) =>
                                        {
                                            const isActive = activeItem === item.title;

                                            return (
                                                <motion.button
                                                    key={item.title}
                                                    type="button"
                                                    onMouseEnter={() =>
                                                        setActiveItem(item.title)
                                                    }
                                                    onFocus={() =>
                                                        setActiveItem(item.title)
                                                    }
                                                    onClick={() =>
                                                        setActiveItem(item.title)
                                                    }
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
                                                    className="group flex w-full items-center justify-between border-b border-[#E9C9C1]/10 py-4 text-left"
                                                >
                                                    <div className="flex items-center gap-4">

                                                        {/* Active indicator */}

                                                        <motion.span
                                                            animate={{
                                                                width: isActive ? 24 : 0,
                                                                opacity: isActive ? 1 : 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                            }}
                                                            className="h-px bg-[#D9828A]"
                                                        />

                                                        <span
                                                            className={`font-title text-3xl tracking-[-0.025em] transition-colors duration-300 xl:text-4xl ${isActive
                                                                ? "text-[#F5E8E3]"
                                                                : "text-[#8E706A] group-hover:text-[#D6B8B1]"
                                                                }`}
                                                        >
                                                            {item.title}
                                                        </span>
                                                    </div>

                                                    <ChevronRight
                                                        size={18}
                                                        strokeWidth={1}
                                                        className={`transition-all duration-300 ${isActive
                                                            ? "translate-x-0 text-[#D9828A] opacity-100"
                                                            : "-translate-x-2 text-[#8E706A] opacity-0"
                                                            }`}
                                                    />
                                                </motion.button>
                                            );
                                        })}
                                    </nav>

                                    {/* Bottom */}

                                    <div className="flex items-end justify-between border-t border-[#E9C9C1]/10 pt-6">
                                        <div>
                                            <p className="text-[8px] uppercase tracking-[0.3em] text-[#80635E]">
                                                Nepal • Origin • Craft
                                            </p>

                                            <p className="mt-2 font-subtitle text-sm italic text-[#BFA29B]">
                                                The hills are our beginning.
                                            </p>
                                        </div>

                                        <p className="text-[9px] text-[#80635E]">
                                            © {new Date().getFullYear()}
                                        </p>
                                    </div>
                                </div>

                                {/* ==========================================
                    RIGHT PREVIEW
                =========================================== */}

                                <div className="relative flex w-[58%] flex-col overflow-hidden bg-[#32211F] px-12 pb-12 pt-32 xl:px-20">

                                    {/* Ambient decorative glow */}

                                    <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#B73E46]/10 blur-[120px]" />

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
                                                <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#D9828A]">
                                                    {String(
                                                        menuItems.indexOf(activeMenu) + 1
                                                    ).padStart(2, "0")}
                                                </p>

                                                <h2 className="max-w-xl font-title text-5xl leading-[0.9] tracking-[-0.035em] text-[#F5E8E3] xl:text-7xl">
                                                    {activeMenu.title}
                                                </h2>

                                                <p className="mt-6 max-w-md font-subtitle text-xl italic leading-relaxed text-[#C9AAA3]">
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
                                                        <div className="grid max-w-2xl grid-cols-2 gap-x-12 gap-y-8">

                                                            {activeMenu.subItems.map(
                                                                (subItem, index) =>
                                                                {

                                                                    /*
                                                                      Supports both:
                                  
                                                                      "Top"
                                  
                                                                      and:
                                  
                                                                      {
                                                                        title: "Coffee",
                                                                        items: ["All Coffee"]
                                                                      }
                                                                    */

                                                                    if (
                                                                        typeof subItem ===
                                                                        "string"
                                                                    )
                                                                    {
                                                                        return (
                                                                            <a
                                                                                href="#"
                                                                                key={subItem}
                                                                                className="group flex items-center justify-between border-b border-[#E9C9C1]/10 pb-4"
                                                                            >
                                                                                <span className="text-sm text-[#D9C1BB] transition-colors duration-300 group-hover:text-white">
                                                                                    {subItem}
                                                                                </span>

                                                                                <ArrowUpRight
                                                                                    size={14}
                                                                                    strokeWidth={1}
                                                                                    className="text-[#8E706A] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D9828A]"
                                                                                />
                                                                            </a>
                                                                        );
                                                                    }

                                                                    return (
                                                                        <div
                                                                            key={subItem.title}
                                                                            className="space-y-3"
                                                                        >
                                                                            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D9828A]">
                                                                                {subItem.title}
                                                                            </p>

                                                                            {subItem.items.map(
                                                                                (child) => (
                                                                                    <a
                                                                                        href="#"
                                                                                        key={child}
                                                                                        className="group flex items-center gap-3 text-sm text-[#D9C2BC]"
                                                                                    >
                                                                                        <span className="h-px w-0 bg-[#D9828A] transition-all duration-300 group-hover:w-5" />

                                                                                        <span className="transition-colors duration-300 group-hover:text-white">
                                                                                            {child}
                                                                                        </span>
                                                                                    </a>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* No subnav */}

                                                    {(!activeMenu.subItems ||
                                                        activeMenu.subItems.length === 0) && (
                                                            <a
                                                                href="#"
                                                                className="group inline-flex items-center gap-4 border-b border-[#D9828A]/40 pb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#E7CCC6]"
                                                            >
                                                                Discover {activeMenu.title}

                                                                <ArrowUpRight
                                                                    size={14}
                                                                    strokeWidth={1}
                                                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                                                />
                                                            </a>
                                                        )}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* ======================================
                        EDITORIAL FOOTER
                    ======================================= */}

                                        <div className="mt-auto flex items-end justify-between border-t border-[#E9C9C1]/10 pt-6">

                                            <div className="max-w-sm">
                                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#80635E]">
                                                    Laali Hills Journal
                                                </p>

                                                <p className="mt-2 font-subtitle text-base italic text-[#A98A83]">
                                                    From the land, through the hands,
                                                    into your cup.
                                                </p>
                                            </div>

                                            <div className="hidden text-right xl:block">
                                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#80635E]">
                                                    Nepal
                                                </p>

                                                <p className="mt-1 font-title text-lg text-[#BFA29B]">
                                                    01 — 77
                                                </p>
                                            </div>
                                        </div>
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
                            className="fixed inset-0 z-[90] overflow-y-auto bg-[#281A18] lg:hidden"
                        >
                            <div className="min-h-full px-6 pb-10 pt-32 sm:px-10">

                                {/* Mobile label */}

                                <div className="mb-8 flex items-center gap-3">
                                    <span className="h-px w-7 bg-[#C64A50]" />

                                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#BFA29B]">
                                        Explore Laali Hills
                                    </span>
                                </div>

                                {/* Mobile menu */}

                                <nav>
                                    {menuItems.map((item, index) =>
                                    {
                                        const isActive =
                                            activeItem === item.title;

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
                                                className="border-b border-[#E9C9C1]/10"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveItem(
                                                            isActive
                                                                ? ""
                                                                : item.title
                                                        )
                                                    }
                                                    className="flex w-full items-center justify-between py-5 text-left"
                                                >
                                                    <span
                                                        className={`font-title text-3xl ${isActive
                                                            ? "text-[#F5E8E3]"
                                                            : "text-[#C3A49E]"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </span>

                                                    <motion.span
                                                        animate={{
                                                            rotate: isActive
                                                                ? 90
                                                                : 0,
                                                        }}
                                                    >
                                                        <ChevronRight
                                                            size={18}
                                                            strokeWidth={1}
                                                            className="text-[#D9828A]"
                                                        />
                                                    </motion.span>
                                                </button>

                                                {/* Mobile subnav */}

                                                <AnimatePresence>
                                                    {isActive &&
                                                        item.subItems?.length >
                                                        0 && (
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

                                                                    {item.subItems.map(
                                                                        (subItem) =>
                                                                        {
                                                                            if (
                                                                                typeof subItem ===
                                                                                "string"
                                                                            )
                                                                            {
                                                                                return (
                                                                                    <a
                                                                                        href="#"
                                                                                        key={subItem}
                                                                                        className="text-sm text-[#BFA29B]"
                                                                                    >
                                                                                        {subItem}
                                                                                    </a>
                                                                                );
                                                                            }

                                                                            return (
                                                                                <div
                                                                                    key={
                                                                                        subItem.title
                                                                                    }
                                                                                    className="space-y-2"
                                                                                >
                                                                                    <p className="text-[8px] uppercase tracking-[0.25em] text-[#D9828A]">
                                                                                        {
                                                                                            subItem.title
                                                                                        }
                                                                                    </p>

                                                                                    {subItem.items.map(
                                                                                        (child) => (
                                                                                            <a
                                                                                                href="#"
                                                                                                key={child}
                                                                                                className="block text-sm text-[#BFA29B]"
                                                                                            >
                                                                                                {child}
                                                                                            </a>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            );
                                                                        }
                                                                    )}
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
                                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#80635E]">
                                        Nepal • Origin • Craft
                                    </p>

                                    <p className="mt-2 font-subtitle text-base italic text-[#A98A83]">
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
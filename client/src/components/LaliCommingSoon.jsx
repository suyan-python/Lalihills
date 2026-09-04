import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png"
import slogan from "../assets/logo/slogan.svg"

const videos = [
    "/videos/plantation.mp4",
    "/videos/cherry.mp4",
    "/videos/harvesting2.mp4",
    "/videos/harvesting3.mp4",
    "/videos/farm.mp4",
    "/videos/coffee.mp4",
];


const LaliComingSoon = () =>
{
    const [currentVideo, setCurrentVideo] = useState(0);
    const [visible, setVisible] = useState(true);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleVideoEnded = () =>
    {
        setVisible(false);

        setTimeout(() =>
        {
            setCurrentVideo((prev) =>
                (prev + 1) % videos.length
            );

            setVisible(true);
        }, 100);
    };


    useEffect(() =>
    {
        const timer = setTimeout(() =>
        {
            setActiveSlide((prev) => (prev === 0 ? 1 : 0));
        }, 8000);

        return () => clearTimeout(timer);
    }, [activeSlide]);


    return (
        <main className="relative min-h-screen overflow-hidden bg-brown text-lightCream">

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241817]/65 via-[#241817]/35 to-transparent">

                {/* Video */}
                <motion.video
                    key={videos[currentVideo]}
                    initial={{
                        opacity: 0,
                        scale: 1.02,
                    }}
                    animate={{
                        opacity: visible ? 0.20 : 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "easeInOut",
                    }}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    onEnded={handleVideoEnded}
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src={videos[currentVideo]}
                        type="video/mp4"
                    />
                </motion.video>

                {/* Dark brown cinematic overlay */}
                <div className="absolute inset-0 bg-brown/25" />

                {/* Subtle Laali pink glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(216,138,146,0.12),transparent_55%)]" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brown via-transparent to-transparent" />

            </div>

            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center items-center overflow-hidden px-6 pb-28 pt-8 sm:px-10 lg:px-14">

                <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1400px] items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16"
                >

                    <AnimatePresence mode="wait">

                        {activeSlide === 0 && (
                            <motion.div
                                key="hero"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{
                                    opacity: 0,
                                    x: -80,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                "
                            >
                                <div className="flex w-full max-w-5xl flex-col items-center">

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
                                            duration: 0.8,
                                            delay: 0.2,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="flex items-center justify-center gap-4"
                                    >

                                        <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#E1C4BE] sm:text-[9px]"
                                        >
                                            From the hills of Nepal
                                        </span>


                                    </motion.div>

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 35,
                                            scale: 0.97,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 1.3,
                                            delay: 0.35,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="relative mt-3 flex w-full flex-col items-center"
                                    >
                                        <motion.div className="relative z-10 flex justify-center"
                                            initial={{
                                                opacity: 0,
                                                scale: 0.92,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.45,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >

                                            <motion.img
                                                src={logo}
                                                alt="Laali Hills — Nepali specialty coffee and tea"
                                                className="block w-[240px] object-contain sm:w-[330px] md:w-[400px] lg:w-[480px] xl:w-[540px]"
                                                initial={{
                                                    clipPath: "inset(0 100% 0 0)",
                                                }}
                                                animate={{
                                                    clipPath: "inset(0 0% 0 0)",
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: 0.6,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                            />

                                        </motion.div>
                                        {/* <motion.img
                                                src={slogan}
                                                alt=""
                                                aria-hidden="true"
                                                className="pointer-events-none w-[120px] object-contain sm:w-[155px] md:w-[185px] lg:w-[215px]"
                                            /> */}

                                        <motion.div
                                            initial={{ opacity: 0, y: 18 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
                                            className="relative z-0 mt-6 flex items-center justify-center gap-3"
                                        >

                                            <p className="subheader text-[8px] uppercase tracking-[0.4em] text-lightCream/75 sm:text-[9px] md:text-[10px] font-semibold">
                                                Best Brews from the <span className="text-cream">Higher Belt</span>
                                            </p>

                                        </motion.div>

                                    </motion.div>

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 1.25,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="mt-8 flex items-center gap-4"
                                    >

                                        <p className="subheader text-[9px] uppercase tracking-[0.22em] text-[#F5E8E3] sm:text-[10px] md:text-[11px]"
                                        >
                                            From the hills.
                                            <span className="mx-2 text-[#D9828A]">·</span>

                                            From the soil.
                                            <span className="mx-2 text-[#D9828A]">·</span>

                                            From the people.
                                            <span className="mx-2 text-[#D9828A]">·</span>

                                            <span className="italic text-[#D9828A]">
                                                To you.
                                            </span>
                                        </p>


                                    </motion.div>


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
                                            duration: 0.8,
                                            delay: 1.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="mt-9"
                                    >

                                        <Link
                                            to="/shop"
                                            className="group inline-flex items-center gap-4 bg-red px-6 py-3 text-[8px] font-medium uppercase tracking-[0.3em] text-[#F8EDE8] transition-all duration-500 hover:border-[#D9828A]/60 hover:bg-hill"
                                        >

                                            <span>
                                                Explore offerings
                                            </span>

                                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5"
                                            />

                                        </Link>

                                    </motion.div>

                                </div>
                            </motion.div>
                        )}

                        {activeSlide === 1 && (


                            <motion.div
                                key="laali-essence"
                                initial={{
                                    opacity: 0,
                                    x: 80,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -80,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        px-6
        sm:px-10
    "
                            >
                                <div className="
        grid
        w-full
        max-w-6xl
        grid-cols-1
        gap-12
        lg:grid-cols-[1.15fr_0.85fr]
        lg:items-center
        lg:gap-20
    ">

                                    <div>

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.25,
                                                duration: 0.8,
                                            }}
                                            className="
                    flex
                    items-center
                    gap-3
                "
                                        >

                                            <span className="
                    text-[8px]
                    uppercase
                    tracking-[0.45em]
                    text-lightCream/70
                ">
                                                The essence of Laali Hills
                                            </span>

                                        </motion.div>


                                        <motion.h2
                                            initial={{
                                                opacity: 0,
                                                y: 30,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.4,
                                                duration: 1,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="
                    header
                    mt-7
                    max-w-2xl
                    text-[clamp(3.5rem,8vw,7rem)]
                    font-black
                    uppercase
                    leading-[0.78]
                    tracking-[-0.075em]
                    text-lightCream text-left
                "
                                        >
                                            When the hills
                                            <br />
                                            are
                                            <span className="text-cream">
                                                Laali.
                                            </span>
                                        </motion.h2>

                                    </div>


                                    {/* RIGHT */}

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 30,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 0.6,
                                            duration: 1,
                                        }}
                                        className="
                max-w-md
                lg:pt-16
            "
                                    >

                                        <p className="
                text-[12px]
                leading-6
                tracking-wide
                text-lightCream/75
                sm:text-[13px]
                sm:leading-7 font-bold
            ">
                                            Laali comes from <i>Laali Guras</i>, the rhododendron
                                            that blooms across Nepal's hills. Hills speaks to the
                                            landscape, soil and life that surround it.
                                        </p>

                                        {/* Divider */}

                                        <div className="
                my-7
                h-px
                w-full
                bg-lightCream/15
            " />

                                        {/* Statement */}

                                        <p className="
                font-title
                text-[11px]
                uppercase
                leading-6
                tracking-[0.15em]
                text-cream
            ">
                                            The feeling of hills
                                            <br />
                                            when they are flourishing.
                                        </p>


                                        {/* CTA */}

                                        <Link
                                            to="/aboutLaali"
                                            className="
                    mt-8 group inline-flex items-center gap-4 bg-red px-6 py-3 text-[8px] font-medium uppercase tracking-[0.3em] text-[#F8EDE8] transition-all duration-500 hover:border-[#D9828A]/60 hover:bg-hill
                "
                                        >

                                            <span>
                                                Know Laali
                                            </span>

                                            <ArrowRight
                                                className="
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-500
                        group-hover:translate-x-1.5
                    "
                                            />

                                        </Link>

                                    </motion.div>

                                </div>
                            </motion.div>


                        )}


                    </AnimatePresence>


                    {/* <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: 1.4,
                        }}
                        className="absolute right-5 top-1/2 hidden -translate-y-1/2 lg:right-2 lg:block"
                    >

                        <div className="flex flex-col items-center gap-5">

                            <span className="h-16 w-px bg-gradient-to-b from-transparent via-[#D9828A]/50 to-transparent" />

                            <span className="[writing-mode:vertical-rl] text-[7px] uppercase tracking-[0.4em] text-[#C8A49E]"
                            >
                                Origin · People · Land · Experience
                            </span>

                            <span className="h-16 w-px bg-gradient-to-b from-transparent via-[#D9828A]/50 to-transparent" />

                        </div>

                    </motion.div> */}

                </div>


                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.7,
                    }}
                    className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2"
                >

                    <motion.div
                        animate={{
                            y: [0, 7, 0],
                            opacity: [0.55, 1, 0.55],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center"
                    >
                        <span className="mb-3 text-[7px] font-medium uppercase tracking-[0.45em] text-lightCream/70">
                            Scroll
                        </span>

                        <ChevronDown
                            size={20}
                            strokeWidth={0.9}
                            className="text-lightCream"
                        />
                    </motion.div>

                </motion.div>

            </section>

            <div
                className="pointer-events-none absolute inset-0 z-30 opacity-[0.035]"
                style={{
                    backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='7'/%3E%3C/svg%3E")
          `,
                }}
            />
            <div className="
    absolute
    bottom-8
    left-1/2
    z-30
    flex
    -translate-x-1/2
    items-center
    gap-3
">
                {[0, 1].map((index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className="
                relative
                h-px
                w-12
                overflow-hidden
                bg-lightCream/25
            "
                        aria-label={`Go to slide ${index + 1}`}
                    >

                        {activeSlide === index && (
                            <motion.span
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 5,
                                    ease: "linear",
                                }}
                                className="
                        absolute
                        inset-y-0
                        left-0
                        bg-lightCream
                    "
                            />
                        )}

                    </button>
                ))}
            </div>
        </main>
    );
};

export default LaliComingSoon;
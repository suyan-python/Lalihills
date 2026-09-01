import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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


    return (
        <main className="relative min-h-screen overflow-hidden bg-brown text-lightCream">

            {/* <div className="pointer-events-none absolute -left-32 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#D88A92]/50 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#A9363C]/55 blur-[140px]" /> */}

            {/* =====================================================
    HERO VIDEO BACKGROUND
===================================================== */}
            {/* <div className="pointer-events-none absolute inset-0 bg-[#241817]/50" /> */}


            <div className="pointer-events-none
        absolute
        inset-0
        bg-gradient-to-r
        from-[#241817]/65
        via-[#241817]/35
        to-transparent">

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

                {/* =================================================
        MAIN CONTENT
    ================================================= */}

                <div
                    className="
        relative
        z-10
        mx-auto
        flex
        min-h-[calc(100vh-5rem)]
        w-full
        max-w-[1400px]
        items-center
        justify-center
        px-6
        py-24
        text-center
        sm:px-10
        lg:px-16
    "
                >
                    <div className="flex w-full max-w-5xl flex-col items-center">

                        {/* =================================================
            EYEBROW
        ================================================= */}

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


                            <span
                                className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.4em]
                    text-[#E1C4BE]
                    sm:text-[9px]
                "
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
                            className="
        relative
        mt-3
        flex
        w-full
        flex-col
        items-center
    "
                        >

                            {/* =================================================
        MAIN LOGO
    ================================================= */}

                            <motion.div
                                className="
            relative
            z-10
            flex
            justify-center
        "
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
                                    className="
                block
                w-[240px]
                object-contain
                sm:w-[330px]
                md:w-[400px]
                lg:w-[480px]
                xl:w-[540px]
            "
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


                            {/* =================================================
        SLOGAN — BELOW LOGO
    ================================================= */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -15,
                                    rotate: -30,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 1.1,
                                    delay: 1.05,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
            relative
            z-0
            mt-5
            flex
            justify-center
            sm:-mt-7
            md:mt-3
        "
                            >

                                <motion.img
                                    src={slogan}
                                    alt=""
                                    aria-hidden="true"
                                    className="
                pointer-events-none
                w-[120px]
                object-contain
                sm:w-[155px]
                md:w-[185px]
                lg:w-[215px]
            "
                                />

                            </motion.div>

                        </motion.div>


                        {/* =================================================
            TAGLINE
        ================================================= */}

                        {/* <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 1,
                            }}
                            className="
                mt-7
                max-w-md
                font-subtitle
                text-base
                italic
                leading-relaxed
                text-[#E0C3BD]
                sm:text-lg
            "
                        >
                            When the hills are happy, they are{" "}
                            <span className="text-[#D9828A]">
                                Laali.
                            </span>
                        </motion.p> */}

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


                            <p
                                className="
                    font-title
                    text-[9px]
                    uppercase
                    tracking-[0.22em]
                    text-[#F5E8E3]
                    sm:text-[10px]
                    md:text-[11px]
                "
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


                        {/* =================================================
            CTA
        ================================================= */}

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
                                className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    bg-red
                    px-6
                    py-3
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#F8EDE8]
                    transition-all
                    duration-500
                    hover:border-[#D9828A]/60
                    hover:bg-hill
                "
                            >

                                <span>
                                    Explore offerings
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


                    {/* =================================================
        SIDE EDITORIAL MARKER
    ================================================= */}

                    <motion.div
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
                        className="
            absolute
            right-5
            top-1/2
            hidden
            -translate-y-1/2
            lg:right-8
            lg:block
        "
                    >

                        <div className="flex flex-col items-center gap-5">

                            <span className="h-16 w-px bg-gradient-to-b from-transparent via-[#D9828A]/50 to-transparent" />

                            <span
                                className="
                    [writing-mode:vertical-rl]
                    text-[7px]
                    uppercase
                    tracking-[0.4em]
                    text-[#C8A49E]
                "
                            >
                                Origin · People · Land · Experience
                            </span>

                            <span className="h-16 w-px bg-gradient-to-b from-transparent via-[#D9828A]/50 to-transparent" />

                        </div>

                    </motion.div>

                </div>

                {/* =================================================
        SCROLL INDICATOR
    ================================================= */}

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
                    className="
            absolute
            bottom-4
            left-1/2
            z-20
            -translate-x-1/2
        "
                >

                    <motion.div
                        animate={{
                            y: [0, 5, 0],
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center"
                    >

                        <span className="
                text-[7px]
                font-medium
                uppercase
                tracking-[0.4em]
                text-lightCream/70
            ">
                            Scroll
                        </span>

                        <motion.div
                            animate={{
                                height: [0, 20, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 1.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mt-2 w-px bg-lightCream/70"
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
        </main>
    );
};

export default LaliComingSoon;
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="pointer-events-none absolute inset-0 bg-[#241817]/90" />


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
                        opacity: visible ? 1 : 0,
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

                <div className="relative max-w-6xl text-center">

                    {/* =================================================
            BRAND TITLE
        ================================================= */}

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 45,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                header
                max-w-5xl
                text-[clamp(3.7rem,9vw,8.5rem)]
                leading-[0.82]
                tracking-[-0.045em]
            "
                    >

                        <span className="block text-lightCream">
                            Laali
                        </span>

                        <span className="ml-[8vw] block italic text-[#D9828A]">
                            Hills
                        </span>

                    </motion.h1>

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
                            duration: 1,
                            delay: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-4  text-center"
                    >

                        <p className="
                font-subtitle
                text-[clamp(0.75rem,2.2vw,1.2rem)]
                italic
                leading-[1.25]
                tracking-[-0.02em]
                text-[#F1DCD7] 
            ">
                            When the hills are happy,
                            <span className="text-[#D9828A]">
                                {" "}they are Laali.
                            </span>
                        </p>

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
                            duration: 0.9,
                            delay: 1.35,
                        }}
                        className="mt-8"
                    >

                        <p className="
                font-title
                text-[clamp(0.75rem,2.2vw,1rem)]
                uppercase
                tracking-[0.2em]
                text-lightCream
            ">
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
                            delay: 1.55,
                        }}
                        className="
                mt-4
                flex
                items-center
                justify-center
                gap-3
                text-[7px]
                md:text-[9px]
                uppercase
                tracking-[0.35em]
                text-lightCream cursor-pointer
            "
                    >

                        <Link to={"/shop/coffee"} >

                            Explore offerings
                        </Link>


                        <ArrowRight className="h-4 w-4" />

                    </motion.div>

                </div>


                {/* =================================================
        RIGHT EDITORIAL MARKER
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
                        delay: 1.1,
                    }}
                    className="
            absolute
            right-6
            top-1/2
            hidden
            -translate-y-1/2
            lg:right-14
            lg:block
        "
                >

                    <div className="flex flex-col items-center gap-5">

                        <div className="
                h-20
                w-px
                bg-gradient-to-b
                from-transparent
                via-[#D88A92]/50
                to-transparent
            " />

                        <div className="
                [writing-mode:vertical-rl]
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-[#B9948F]
            ">
                            Origin • People • Land • Experience
                        </div>

                        <div className="
                h-20
                w-px
                bg-gradient-to-b
                from-transparent
                via-[#D88A92]/50
                to-transparent
            " />

                    </div>

                </motion.div>


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
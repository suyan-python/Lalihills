import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const LaliComingSoon = () =>
{
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#241817] text-[#F8EDE8]">

            {/* <div className="pointer-events-none absolute -left-32 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#D88A92]/10 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#A9363C]/15 blur-[140px]" /> */}

            {/* =====================================================
    HERO VIDEO BACKGROUND
===================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Video */}
                <motion.video
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="/videos/plantation.mp4"
                        type="video/mp4"
                    />
                </motion.video>

                {/* Dark brown cinematic overlay */}
                <div className="absolute inset-0 bg-[#241817]/45" />

                {/* Warm red/brown tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#241817]/30 via-transparent to-[#241817]/80" />

                {/* Subtle Laali pink glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(216,138,146,0.12),transparent_55%)]" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#241817] to-transparent" />

            </div>

            <section className="relative z-10 min-h-screen overflow-hidden mx-auto flex  w-full max-w-7xl flex-col justify-center px-6 pb-28 pt-8 sm:px-10 lg:px-14">
                <div className="relative max-w-5xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <span className="h-px w-10 bg-[#C64A50]" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#DCA7A3]">
                            From the hills of Nepal
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.1,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="header max-w-4xl  text-[clamp(3.7rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]"
                    >
                        <span className="block text-[#F8EDE8] ">
                            Laali
                        </span>

                        <span className="ml-[8vw] block italic text-[#D9828A] ">
                            Hills
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.65 }}
                        className="mt-10 max-w-xl"
                    >
                        <p className="text-sm leading-7 text-[#D8BCB7] sm:text-base sm:leading-8">
                            A new expression of Nepal's hills is taking shape.
                            Specialty coffee, exceptional tea, and the stories of
                            the people and land behind every cup.
                        </p>
                        <div className="mt-10 flex items-center gap-3 text-[#F8EDE8] uppercase text-[10px] md:text-xs text-center md:text-start tracking-widest justify-center md:justify-start">
                            explore offerings
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </motion.div>


                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:right-14 lg:block"
                >
                    <div className="flex flex-col items-center gap-5">
                        <div className="h-20 w-px bg-gradient-to-b from-transparent via-[#D88A92]/50 to-transparent" />

                        <div className="writing-vertical text-[9px] uppercase tracking-[0.4em] text-[#B9948F] [writing-mode:vertical-rl]">
                            Origin • People • Land • Experience
                        </div>

                        <div className="h-20 w-px bg-gradient-to-b from-transparent via-[#D88A92]/50 to-transparent" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center"
                    >
                        {/* Text */}
                        <span className="text-[7px] font-medium uppercase tracking-[0.4em] text-[#F8EDE8]/70">
                            Scroll
                        </span>

                        {/* Animated line */}
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
                            className="mt-2 w-px bg-[#F8EDE8]/70"
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
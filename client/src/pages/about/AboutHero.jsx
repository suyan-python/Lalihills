import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const AboutHero = ({ image }) =>
{
    return (
        <section className="relative h-screen min-h-[680px] overflow-hidden bg-brown">

            {/* =====================================================
                BACKGROUND IMAGE
            ====================================================== */}

            <motion.img
                src={image}
                alt="Laali Hills — Nepal"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Cinematic overlays */}

            <div className="absolute inset-0 bg-brown/35" />

            <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-transparent to-brown/20" />


            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">

                <div className="mx-auto w-full max-w-[1500px]">

                    {/* Small eyebrow */}

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
                            duration: 0.8,
                            delay: 0.3,
                        }}
                        className="mb-7 flex items-center gap-3"
                    >

                        <span className="h-px w-10 bg-[#D9828A]" />

                        <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/80">
                            The Laali Hills Story
                        </span>

                    </motion.div>


                    {/* Main title */}

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-6xl header text-[clamp(4rem,11vw,11rem)] leading-[0.78] tracking-[-0.07em] text-lightCream"
                    >
                        Our
                        <span className="ml-3 italic text-[#D9828A]">
                            Story.
                        </span>
                    </motion.h1>


                    {/* Bottom information */}

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
                            duration: 0.8,
                            delay: 0.8,
                        }}
                        className="mt-10 flex flex-col gap-6 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between"
                    >

                        <p className="max-w-md text-[10px] leading-5 text-lightCream/75 sm:text-xs">
                            A story shaped by highland soil, careful hands,
                            and the belief that what comes from Nepal's hills
                            deserves to be experienced differently.
                        </p>

                        <div className="flex items-center gap-3 text-lightCream/70">
                            <span className="text-[7px] uppercase tracking-[0.3em]">
                                Scroll to discover
                            </span>

                            <motion.div
                                animate={{
                                    y: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <ArrowDown
                                    size={13}
                                    strokeWidth={1}
                                />
                            </motion.div>
                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default AboutHero;
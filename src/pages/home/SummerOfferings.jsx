import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import summerCoffee from "../../assets/offerings/img1.jpg";
import summerTea from "../../assets/offerings/img2.jpg";
import summerGifting from "../../assets/offerings/img3.webp";


const offerings = [
    {
        title: "Summer Coffee",
        subtitle: "Cool. Bright. Refreshing.",
        image: summerCoffee,
        link: "#",
    },
    {
        title: "Summer Tea",
        subtitle: "A cooler way to discover Nepal.",
        image: summerTea,
        link: "#",
    },
    {
        title: "Summer Gifting",
        subtitle: "Thoughtful moments from the hills.",
        image: summerGifting,
        link: "#",
    },
];


const SummerOfferings = () =>
{
    return (
        <section className="relative overflow-hidden bg-brown px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-36 ">

            <div className="mx-auto max-w-[1500px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mx-auto max-w-3xl text-center">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center justify-center gap-3"
                    >

                        <span className="h-px w-8 bg-red" />

                        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-mutedBrown">
                            Seasonal Selection
                        </span>

                        <span className="h-px w-8 bg-red" />

                    </motion.div>


                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-6 font-title text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-[-0.055em] text-lightCream"
                    >
                        Summer
                        <span className="ml-3 italic text-red">
                            Offerings
                        </span>
                    </motion.h2>


                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.25,
                        }}
                        className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#705752] sm:text-base"
                    >
                        A seasonal collection inspired by warmer days,
                        cooler cups and the flavours of Nepal's hills.
                        Discover something made for summer.
                    </motion.p>

                </div>


                {/* =================================================
                    OFFERING CARDS
                ================================================= */}

                <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 md:grid-cols-3 lg:gap-7">

                    {offerings.map((offering, index) =>
                    {
                        return (
                            <motion.a
                                key={offering.title}
                                href={offering.link}
                                initial={{
                                    opacity: 0,
                                    y: 70,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`
    group relative block overflow-hidden
    rounded-t-[20rem]
    bg-darkBrown

    ${index === 0
                                        ? "h-[540px] lg:h-[650px]"
                                        : index === 1
                                            ? "h-[500px] lg:h-[590px] lg:mt-16"
                                            : "h-[540px] lg:h-[630px] lg:mt-6"
                                    }
`}
                            >

                                {/* =================================================
                                    IMAGE
                                ================================================= */}

                                <motion.img
                                    src={offering.image}
                                    alt={offering.title}
                                    initial={{
                                        scale: 1.08,
                                    }}
                                    whileInView={{
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                                />


                                {/* =================================================
                                    IMAGE OVERLAY
                                ================================================= */}

                                <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/20 to-transparent" />

                                <div className="absolute inset-0 bg-deepRed/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />


                                {/* =================================================
                                    CARD CONTENT
                                ================================================= */}

                                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">

                                    <div className="flex items-end justify-between gap-5">

                                        <div>

                                            <span className="text-[8px] uppercase tracking-[0.3em] text-lightCream/60">
                                                0{index + 1}
                                            </span>

                                            <h3 className="mt-3 font-title text-3xl leading-none tracking-[-0.04em] text-lightCream sm:text-4xl">
                                                {offering.title}
                                            </h3>

                                            <p className="mt-3 max-w-[220px] text-xs leading-5 text-lightCream/70">
                                                {offering.subtitle}
                                            </p>

                                        </div>


                                        {/* Arrow */}

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-lightCream/30 text-lightCream transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-lightCream group-hover:text-brown">

                                            <ArrowUpRight
                                                size={17}
                                                strokeWidth={1.3}
                                            />

                                        </div>

                                    </div>


                                    {/* Bottom line */}

                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        whileHover={{
                                            width: "100%",
                                        }}
                                        className="mt-7 h-px bg-lightCream/40"
                                    />

                                </div>


                                {/* =================================================
                                    HOVER NUMBER
                                ================================================= */}

                                <div className="pointer-events-none absolute left-7 top-8 overflow-hidden sm:left-9">

                                    <motion.span
                                        initial={{
                                            y: "100%",
                                        }}
                                        whileHover={{
                                            y: 0,
                                        }}
                                        className="block font-title text-[5rem] leading-none text-lightCream/20"
                                    >
                                        0{index + 1}
                                    </motion.span>

                                </div>

                            </motion.a>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};


export default SummerOfferings;
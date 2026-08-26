import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutImage = ({ images }) =>
{
    return (
        <section className="bg-lightCream px-4 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">

            <div className="mx-auto max-w-[1600px]">

                {/* =================================================
                    GALLERY HEADER
                ================================================== */}

                <div className="mb-12 flex items-end justify-between px-2 sm:mb-16">

                    <div>

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-px w-8 bg-red" />

                            <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-mutedBrown">
                                From the hills
                            </span>

                        </div>

                        <h2 className="font-title text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-[-0.06em] text-brown">
                            In
                            <span className="ml-2 italic text-red">
                                pictures.
                            </span>
                        </h2>

                    </div>

                    <p className="hidden max-w-xs text-right text-[10px] leading-5 text-[#80635E] sm:block">
                        Landscapes, people, hands and moments
                        from the places that shape Laali Hills.
                    </p>

                </div>


                {/* =================================================
                    EDITORIAL GALLERY
                ================================================== */}

                <div className="grid grid-cols-12 gap-3 sm:gap-5">


                    {/* =============================================
                        LARGE LEFT IMAGE
                    ============================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative col-span-12 aspect-[4/5] overflow-hidden sm:col-span-7 sm:aspect-[4/5] lg:col-span-7"
                    >

                        <img
                            src={images[0]}
                            alt="Nepal hills"
                            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent opacity-60" />

                        <GalleryCaption
                            number="01"
                            text="The land"
                        />

                    </motion.div>


                    {/* =============================================
                        RIGHT STACK
                    ============================================== */}

                    <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-5 sm:grid-cols-1 sm:gap-5">

                        {/* Small landscape */}

                        <GalleryImage
                            src={images[1]}
                            number="02"
                            text="High altitude"
                            aspect="aspect-square sm:aspect-[4/3]"
                            delay={0.1}
                        />

                        {/* Small portrait */}

                        <GalleryImage
                            src={images[2]}
                            number="03"
                            text="The hands behind it"
                            aspect="aspect-square sm:aspect-[4/3]"
                            delay={0.2}
                        />

                    </div>


                    {/* =============================================
                        WIDE IMAGE
                    ============================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative col-span-12 mt-1 aspect-[16/7] overflow-hidden sm:mt-3"
                    >

                        <img
                            src={images[3]}
                            alt="Coffee farming in Nepal"
                            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-brown/15 transition-opacity duration-500 group-hover:bg-brown/5" />

                        <GalleryCaption
                            number="04"
                            text="Where coffee begins"
                        />

                    </motion.div>


                    {/* =============================================
                        BOTTOM ASYMMETRIC ROW
                    ============================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative col-span-7 mt-1 aspect-[5/6] overflow-hidden sm:col-span-5 sm:mt-3"
                    >

                        <img
                            src={images[4]}
                            alt="Nepalese tea"
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent" />

                        <GalleryCaption
                            number="05"
                            text="Tea gardens"
                        />

                    </motion.div>


                    {/* Text block */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="col-span-5 flex flex-col justify-end px-5 pb-3 sm:col-span-7 sm:px-10 sm:pb-8"
                    >

                        <span className="mb-6 text-[8px] font-semibold uppercase tracking-[0.35em] text-red">
                            The Laali Hills philosophy
                        </span>

                        <p className="font-title text-[clamp(1.8rem,3vw,3.5rem)] leading-[0.95] tracking-[-0.04em] text-brown">
                            Every origin has
                            <span className="italic text-red">
                                {" "}a story.
                            </span>
                        </p>

                        <p className="mt-6 max-w-md text-[11px] leading-6 text-[#725853]">
                            We believe the best way to understand what is
                            in your cup is to understand where it began.
                        </p>

                        <a
                            href="/explore"
                            className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-brown/20 pb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-brown"
                        >
                            Explore our origins

                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </a>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};


/* =============================================================
   SMALL GALLERY IMAGE
============================================================= */

const GalleryImage = ({
    src,
    number,
    text,
    aspect,
    delay = 0,
}) =>
{
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.9,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative overflow-hidden ${aspect}`}
        >

            <img
                src={src}
                alt={text}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />

            <GalleryCaption
                number={number}
                text={text}
            />

        </motion.div>
    );
};


/* =============================================================
   GALLERY CAPTION
============================================================= */

const GalleryCaption = ({
    number,
    text,
}) =>
{
    return (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">

            <div>
                <span className="text-[7px] uppercase tracking-[0.3em] text-white/60">
                    {number}
                </span>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
                    {text}
                </p>
            </div>

            <ArrowUpRight
                size={14}
                strokeWidth={1}
                className="text-white/70 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
            />

        </div>
    );
};


export default AboutImage;
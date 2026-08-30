import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import beans from "../../assets/shop/beans.webp"
import leaves from "../../assets/shop/leaves.webp"
import gift from "../../assets/shop/gift.jpg"
import ShopStatement from "./ShopStatement";

const collections = [
    {
        number: "01",
        name: "Beans",
        plainName: "Coffee",
        subtitle: "Nepali Specialty Coffee",
        description:
            "Whole bean & ground, roasted to preserve the character of Nepal's highlands.",
        path: "/shop/coffee",
        image: beans,
        accent: "#B73E46",
    },
    {
        number: "02",
        name: "Leaves",
        plainName: "Tea",
        subtitle: "Nepali Specialty Tea",
        description:
            "Whole-leaf teas shaped by altitude, climate and generations of tradition.",
        path: "/shop/tea",
        image: leaves,
        accent: "#7B5048",
    },
    {
        number: "03",
        name: "Gifts",
        plainName: "Gifting",
        subtitle: "Coffee & Tea Gift Sets",
        description:
            "Thoughtful collections made for sharing a little piece of the hills.",
        path: "/shop/gifts",
        image: gift,
        accent: "#C4777F",
    },
];


const Shop = () =>
{
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F9F5F2]">


            {/* =====================================================
                BACKGROUND WORD
            ===================================================== */}

            <div className="pointer-events-none absolute right-[-4vw] top-[5vh] select-none">

                <motion.p
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        header
                        whitespace-nowrap
                        text-[25vw]
                        font-black
                        leading-none
                        tracking-[-0.09em]
                        text-[#241817]/[0.025]
                    "
                >
                    HILLS
                </motion.p>

            </div>


            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="relative px-7 pb-16 pt-36 sm:px-12 sm:pb-20 sm:pt-44 lg:px-20 lg:pb-24 lg:pt-36 xl:px-28">

                <div className="mx-auto max-w-[1500px]">


                    {/* Top metadata */}

                    <div className="flex items-center justify-between">

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="flex items-center gap-4"
                        >

                            <span className="h-px w-10 bg-[#B73E46]" />

                            <span className="
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.4em]
                                text-[#8B625D]
                            ">
                                Laali Hills · Collections
                            </span>

                        </motion.div>

                    </div>


                    {/* Main heading */}

                    <div className="mt-14 grid lg:grid-cols-12 lg:gap-10">


                        <div className="lg:col-span-8">

                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    header
                                    max-w-5xl
                                    text-[clamp(2.5rem,9vw,3.5rem)]
                                    font-black
                                    leading-[0.78]
                                    tracking-[-0.075em]
                                    text-[#241817]
                                "
                            >
                                From the
                                <span className="block italic text-[#B73E46]">
                                    hills.
                                </span>
                            </motion.h1>

                        </div>


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
                                duration: 0.9,
                                delay: 0.25,
                            }}
                            className="
                                mt-10
                                max-w-sm
                                lg:col-span-4
                                lg:mt-auto
                                lg:pb-2
                            "
                        >

                            <p className="
                                font-subtitle
                                text-lg
                                italic
                                leading-relaxed
                                text-[#795D57]
                                sm:text-xl
                            ">
                                Coffee, tea and thoughtful gifts —
                                each carrying something of where
                                it came from.
                            </p>


                            <div className="mt-7 flex items-center gap-3">

                                <span className="h-px w-12 bg-[#B73E46]" />

                                <span className="
                                    text-[7px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#9A7B75]
                                ">
                                    Discover Nepal
                                </span>

                            </div>

                        </motion.div>

                    </div>


                    {/* Divider */}

                    <motion.div
                        initial={{
                            scaleX: 0,
                        }}
                        animate={{
                            scaleX: 1,
                        }}
                        transition={{
                            duration: 1.3,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            transformOrigin: "left",
                        }}
                        className="
                        mt-10
                            h-1
                            w-full
                            bg-[#241817]/10"

                    />

                </div>

            </section>


            {/* =====================================================
                COLLECTION JOURNEY
            ===================================================== */}

            <section className="relative px-7 pb-32 sm:px-12 sm:pb-40 lg:px-20 lg:pb-48 xl:px-28">

                <div className="mx-auto max-w-[1500px]">

                    {/* =================================================
                        COFFEE — FEATURED
                    ================================================= */}

                    <CollectionFeature
                        collection={collections[0]}
                    />


                    {/* =================================================
                        TEA + GIFTS
                    ================================================= */}

                    <div className="
                        mt-8
                        grid
                        gap-8
                        md:grid-cols-2
                        lg:mt-20
                        lg:gap-12
                    ">

                        <CollectionSecondary
                            collection={collections[1]}
                            index={1}
                        />

                        <CollectionSecondary
                            collection={collections[2]}
                            index={2}
                        />

                    </div>

                </div>

            </section>


            {/* =====================================================
                CLOSING STATEMENT
            ===================================================== */}

            <ShopStatement />

        </main>
    );
};


/* ================================================================
   FEATURED COLLECTION
================================================================ */

const CollectionFeature = ({
    collection,
}) =>
{
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 60,
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
        >

            <Link
                to={collection.path}
                className="group block"
            >

                <div className="
                    grid
                    overflow-hidden
                    lg:grid-cols-[1.35fr_0.65fr]
                ">


                    {/* IMAGE */}

                    <div className="
                        relative
                        aspect-[4/5]
                        overflow-hidden
                        bg-[#E8D1CA]
                        sm:aspect-[16/10]
                        lg:aspect-auto
                    ">

                        <motion.img
                            src={collection.image}
                            alt={collection.description}
                            loading="lazy"
                            decoding="async"
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-[1400ms]
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                group-hover:scale-[1.04]
                            "
                        />


                        <div className="
                            absolute
                            inset-0
                            bg-[#241817]/0
                            transition-colors
                            duration-700
                            group-hover:bg-[#241817]/20
                        " />


                        {/* Number */}

                        <div className="
                            absolute
                            left-6
                            top-6
                            flex
                            items-center
                            gap-3
                        ">

                            <span className="
                                h-px
                                w-7
                                bg-white/60"
                            />

                            <span className="
                            text-[8px]
                            tracking-[0.3em]
                            text-white
                            ">
                                {collection.number}
                            </span>

                        </div>


                        {/* Image CTA */}

                        <div className="
                            absolute
                            bottom-6
                            left-6
                            right-6
                            flex
                            items-center
                            justify-between
                            border-t
                            border-white/30
                            pt-4
                            text-white
                        ">

                            <span className="
                                text-[8px]
                                uppercase
                                tracking-[0.3em]
                            ">
                                Explore collection
                            </span>

                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.2}
                                className="
                                    transition-transform
                                    duration-500
                                    group-hover:-translate-y-1
                                    group-hover:translate-x-1
                                "
                            />

                        </div>

                    </div>


                    {/* CONTENT */}

                    <div className="
                        flex
                        min-h-[360px]
                        flex-col
                        justify-between
                        bg-darkBrown
                        p-7
                        sm:p-10
                        lg:p-12
                        xl:p-16
                    ">

                        <div>

                            <span className="
                                text-[8px]
                                uppercase
                                tracking-[0.3em]
                                text-white/70
                            ">
                                {collection.subtitle}
                            </span>


                            <h2 className="
                                header
                                mt-5
                                text-[clamp(3rem,6vw,4rem)]
                                font-black
                                leading-[0.78]
                                tracking-[-0.07em]
                                text-white
                            ">
                                {collection.name}
                            </h2>


                            <p className="
                                mt-6
                                max-w-sm
                                text-[12px]
                                leading-6
                                text-white/70
                            ">
                                {collection.description}
                            </p>

                        </div>


                        <div className="mt-12">

                            <div className="
                                h-px
                                w-full
                                bg-[#241817]/10
                            " />

                            <div className="
                                mt-5
                                flex
                                items-center
                                justify-between
                            ">

                                <span className="
                                    text-[8px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#8B625D]
                                ">
                                    {collection.plainName}
                                </span>

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.2}
                                    className="
                                        text-[#B73E46]
                                        transition-transform
                                        duration-500
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </Link>

        </motion.div >
    );
};


/* ================================================================
   SECONDARY COLLECTION
================================================================ */

const CollectionSecondary = ({
    collection,
    index,
}) =>
{
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.9,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            <Link
                to={collection.path}
                className="group block"
            >

                <div className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-[#E8D1CA]
                    sm:aspect-[5/6]
                ">

                    <motion.img
                        src={collection.image}
                        alt={collection.description}
                        loading="lazy"
                        decoding="async"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-[1400ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover:scale-[1.045]
                        "
                    />


                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#241817]/75
                        via-[#241817]/10
                        to-transparent
                    " />


                    {/* Number */}

                    <div className="
                        absolute
                        left-6
                        top-6
                        flex
                        items-center
                        gap-3
                    ">

                        <span className="
                            text-[8px]
                            tracking-[0.3em]
                            text-white
                        ">
                            {collection.number}
                        </span>

                        <span className="
                            h-px
                            w-7
                            bg-white/50
                        " />

                    </div>


                    {/* Bottom content */}

                    <div className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-7
                        sm:p-9
                    ">

                        <span className="
                            text-[8px]
                            uppercase
                            tracking-[0.3em]
                            text-white/70
                        ">
                            {collection.subtitle}
                        </span>


                        <div className="
                            mt-3
                            flex
                            items-end
                            justify-between
                            gap-5
                        ">

                            <div>

                                <h2 className="
                                    header
                                    text-[clamp(2.8rem,5vw,3rem)]
                                    font-black
                                    leading-[0.8]
                                    tracking-[-0.07em]
                                    text-white
                                ">
                                    {collection.name}
                                </h2>

                                <p className="
                                    mt-4
                                    max-w-xs
                                    text-[11px]
                                    leading-5
                                    text-white/70
                                ">
                                    {collection.description}
                                </p>

                            </div>


                            <div className="
                                flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/40
                                text-white
                                transition-all
                                duration-500
                                group-hover:bg-white
                                group-hover:text-[#241817]
                            ">

                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.2}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </Link>

        </motion.div>
    );
};


export default Shop;
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
        <main className="relative min-h-screen overflow-hidden bg-lightWhite">
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
                    Laali Hills
                </motion.p>

            </div>

            <section className="relative px-7  pt-36 sm:px-12 sm:pt-44 lg:px-20 pb-5 lg:pt-36 xl:px-28">
                <div className="mx-auto max-w-[1500px]">

                    {/* Main heading */}

                    <div className="mt-5 grid lg:grid-cols-12 lg:gap-10 ">
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
                                    font-medium
                                    leading-[0.78]
                                    tracking-[-0.075em]
                                    text-[#241817]
                                "
                            >
                                Our
                                <span className="block italic text-red">
                                    Selects
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
                        </motion.div>
                    </div>

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
                        mt-5
                            h-px
                            w-full
                            bg-[#241817]/50"

                    />

                </div>

            </section>

            <section className="relative px-7 pb-32 sm:px-12 sm:pb-40 lg:px-20 lg:pb-48 xl:px-28 mt-5">

                <div className="mx-auto max-w-[1500px]">

                    <div className="
                        my-8
                        grid
                        gap-8
                        md:grid-cols-3
                        lg:my-20
                        lg:gap-12
                    ">

                        <CollectionSecondary
                            collection={collections[0]}
                            index={0}
                        />
                        <CollectionSecondary
                            collection={collections[1]}
                            index={1}
                        />

                        <CollectionSecondary
                            collection={collections[2]}
                            index={2}
                        />

                    </div>

                    <CollectionFeature
                        collection={collections[0]}
                    />
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

const CollectionFeature = ({ collection }) =>
{
    return (
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
                amount: 0.2,
            }}
            transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <Link
                to={collection.path}
                className="group relative block overflow-hidden"
            >
                {/* IMAGE */}
                <div className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-[#211C16]
                    sm:aspect-[16/9]
                    lg:aspect-[21/10]
                ">
                    <motion.img
                        src={collection.image}
                        alt={collection.description}
                        loading="lazy"
                        decoding="async"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-[1800ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover:scale-[1.045]
                        "
                    />
                    <div className="
                        absolute
                        inset-0
                        bg-[#211C16]/10
                        transition-colors
                        duration-700
                        group-hover:bg-[#211C16]/5
                    " />
                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#211C16]/95
                        via-[#211C16]/35
                        to-transparent
                    " />
                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#8F3038]/15
                        via-transparent
                        to-transparent
                    " />
                    <div className="
                        absolute
                        left-6
                        right-6
                        top-6
                        flex
                        items-center
                        justify-between
                        sm:left-10
                        sm:right-10
                        sm:top-10
                        lg:left-14
                        lg:right-14
                        lg:top-12
                    ">
                        <div className="
                            flex
                            items-center
                            gap-3
                        ">

                            <span className="
                                h-px
                                w-8
                                bg-[ivory]/60
                            " />

                            <span className="
                                text-[8px]
                                uppercase
                                tracking-[0.35em]
                                text-[ivory]/90
                            ">
                                {collection.number}
                            </span>
                        </div>
                        <span className="
                            text-[8px]
                            uppercase
                            tracking-[0.3em]
                            text-[ivory]/70
                        ">
                            Laali Hills
                        </span>
                    </div>
                    <div className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-6
                        sm:p-10
                        lg:p-14
                        xl:p-16
                    ">
                        <div className="
                            max-w-3xl
                        ">
                            <div className="
                                mb-4
                                flex
                                items-center
                                gap-3
                            ">

                                <span className="
                                    text-[8px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-[ivory]/70
                                ">
                                    {collection.subtitle}
                                </span>
                            </div>
                            <h2 className="
                                header
                                max-w-2xl
                                text-[clamp(3.5rem,8vw,7rem)]
                                font-black
                                uppercase
                                leading-[0.78]
                                tracking-[-0.075em]
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-r
                                from-[ivory]
                                via-[ivory]
                                to-[#A99B82]
                                transition-all
                                duration-700
                                group-hover:from-white
                                group-hover:to-[ivory]
                            ">
                                {collection.name}
                            </h2>
                            <p className="
                                mt-6
                                max-w-md
                                text-[11px]
                                leading-5
                                tracking-wide
                                text-[ivory]/70
                                sm:text-[12px]
                                sm:leading-6
                            ">
                                {collection.description}
                            </p>
                            <div className="
                                mt-8
                                flex
                                items-center
                                justify-between
                                border-t
                                border-[ivory]/20
                                pt-4
                                sm:mt-10
                                sm:pt-5
                            ">
                                <span className="
                                    text-[8px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-[ivory]/80
                                ">
                                    {collection.plainName}
                                </span>
                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                ">
                                    <span className="
                                        hidden
                                        text-[8px]
                                        uppercase
                                        tracking-[0.3em]
                                        text-[ivory]/70
                                        transition-all
                                        duration-500
                                        sm:block
                                        group-hover:text-[ivory]
                                    ">
                                        Explore
                                    </span>

                                    <div className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[ivory]/40
                                        bg-[#211C16]/20
                                        backdrop-blur-sm
                                        transition-all
                                        duration-500
                                        group-hover:border-[#A62A34]
                                        group-hover:bg-[#A62A34]
                                    ">

                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.2}
                                            className="
                                                text-[ivory]
                                                transition-transform
                                                duration-500
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="
                        pointer-events-none
                        absolute
                        inset-0
                        border
                        border-[ivory]/10
                        transition-all
                        duration-700
                        group-hover:border-[ivory]/25
                    " />
                </div>
            </Link>
        </motion.div>
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
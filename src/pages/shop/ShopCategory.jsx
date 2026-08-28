import { motion } from "framer-motion";
import ProductGrid from "./ProductGrid";

const ShopCategory = ({
    title,
    description,
    products = [],
    filterComponent,
}) =>
{
    return (
        <main className="min-h-screen bg-lightWhite">


            {/* =================================================
                CATEGORY HEADER
            ================================================= */}

            <section className="relative overflow-hidden px-7 pb-16 pt-32 sm:px-12 sm:pb-20 sm:pt-40 lg:px-24 lg:pb-24 lg:pt-44 xl:px-32">

                <div className="mx-auto max-w-[1500px]">


                    {/* =================================================
                        TOP LABEL
                    ================================================= */}

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
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-10 flex items-center gap-4"
                    >

                        <span className="h-px w-9 bg-[#B73E46]" />

                        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8B625D]">
                            Laali Hills Collection
                        </span>

                    </motion.div>


                    {/* =================================================
                        TITLE + FILTER
                    ================================================= */}

                    <div className="flex items-end justify-between gap-8">


                        {/* Title */}

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
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                header
                                text-[clamp(3.5rem,8vw,7rem)]
                                font-black
                                leading-[0.8]
                                tracking-[-0.065em]
                                text-[#241817]
                            "
                        >
                            {title}
                        </motion.h1>


                        {/* Filter */}

                        {filterComponent && (

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
                                }}
                                className="shrink-0"
                            >
                                {filterComponent}
                            </motion.div>

                        )}

                    </div>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    {/* {description && (

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
                            className="mt-10 max-w-xl"
                        >

                            <p className="font-subtitle text-base italic leading-relaxed text-[#8B625D] sm:text-lg">
                                {description}
                            </p>

                        </motion.div>

                    )} */}


                    {/* =================================================
                        EDITORIAL UNDERLINE
                    ================================================= */}

                    <div className="relative mt-14 h-px w-full bg-[#241817]/10">


                        {/* Animated red accent */}

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: "18%",
                            }}
                            transition={{
                                duration: 1.4,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute left-0 top-0 h-px bg-[#B73E46]"
                        />


                        {/* Right metadata */}

                        <div className="absolute right-0 top-4 hidden items-center gap-3 sm:flex">

                            <span className="text-[7px] uppercase tracking-[0.25em] text-[#9A7B75]">
                                {products.length} Pieces
                            </span>

                            <span className="h-1 w-1 rounded-full bg-[#B73E46]" />

                            <span className="text-[7px] uppercase tracking-[0.25em] text-[#9A7B75]">
                                Nepal · Origin
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                PRODUCTS
            ================================================= */}

            <section className="px-7 pb-32 sm:px-12 sm:pb-40 lg:px-24 lg:pb-48 xl:px-32">

                <div className="mx-auto max-w-[1500px]">

                    <ProductGrid
                        products={products}
                    />

                </div>

            </section>

        </main>
    );
};

export default ShopCategory;
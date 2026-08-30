import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ProductGrid from "./ProductGrid";


const ShopCategory = ({
    displayName,
    displaySubtitle,

    description,

    seoTitle,
    seoDescription,

    collectionLabel,
    originLabel,

    products = [],

    filterComponent,
}) =>
{
    return (
        <main className="min-h-screen bg-lightWhite">


            {/* =================================================
                SEO
            ================================================= */}

            <Helmet>

                <title>
                    {seoTitle}
                </title>

                <meta
                    name="description"
                    content={seoDescription}
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

            </Helmet>


            {/* =================================================
                CATEGORY HEADER
            ================================================= */}

            <section className="relative overflow-hidden px-7 pb-16 pt-32 sm:px-12 sm:pb-20 sm:pt-40 lg:px-24 lg:pb-24 lg:pt-44 xl:px-32">

                <div className="mx-auto max-w-[1500px]">


                    {/* =================================================
                        COLLECTION LABEL
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
                            {collectionLabel}
                        </span>

                    </motion.div>


                    {/* =================================================
                        TITLE + FILTER
                    ================================================= */}

                    <div className="flex items-end justify-between gap-8">


                        <div>

                            {/* H1 */}

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
                                    text-[clamp(2.5rem,8vw,4rem)]
                                    font-black
                                    leading-[0.8]
                                    tracking-[-0.065em]
                                    text-[#241817]
                                "
                            >
                                {displayName}
                            </motion.h1>

                        </div>


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

                    {description && (

                        <motion.p
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
                            className="
                                mt-4
                                max-w-xl
                                text-base
                                italic
                                leading-relaxed
                                text-[#8B625D]
                                sm:text-lg
                            "
                        >
                            {description}
                        </motion.p>

                    )}


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <div className="relative mt-14 h-px w-full bg-[#241817]/10">

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            animate={{
                                width: "18%",
                            }}
                            transition={{
                                duration: 1.3,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute left-0 top-0 h-px bg-[#B73E46]"
                        />

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
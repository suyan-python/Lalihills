import { motion } from "framer-motion";

const ShopStatement = () =>
{
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#32211F]
                py-24
                sm:py-32
                lg:py-40
            "
        >

            {/* =================================================
                BACKGROUND — NEPAL
                RIGHT → LEFT
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">

                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        flex
                        w-max
                        shrink-0
                        whitespace-nowrap
                    "
                >

                    <span
                        className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
                    >
                        NEPAL
                    </span>

                    <span
                        className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
                    >
                        NEPAL
                    </span>

                    <span
                        className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
                    >
                        NEPAL
                    </span>

                    <span
                        className="
                            px-8
                            font-black
                            text-[25vw]
                            leading-none
                            tracking-[-0.08em]
                            text-[#F8EDE8]/[0.035]
                        "
                    >
                        NEPAL
                    </span>

                </motion.div>

            </div>


            {/* =================================================
                MAIN STATEMENT
                LEFT → RIGHT
            ================================================= */}

            <div className="relative overflow-hidden">

                <motion.div
                    animate={{
                        x: ["-50%", "0%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        flex
                        w-max
                        shrink-0
                        items-center
                        whitespace-nowrap
                    "
                >

                    {/* FIRST */}

                    <div className="flex items-center">

                        <p
                            className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                leading-none
                                tracking-[-0.05em]
                                text-[#F8EDE8]
                            "
                        >
                            Discover the product.
                        </p>

                        <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />

                        <p
                            className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                italic
                                leading-none
                                tracking-[-0.05em]
                                text-[#D9828A]
                            "
                        >
                            Discover Laali Hills.
                        </p>

                        <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />

                    </div>


                    {/* DUPLICATE */}

                    <div className="flex items-center">

                        <p
                            className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                leading-none
                                tracking-[-0.05em]
                                text-[#F8EDE8]
                            "
                        >
                            Discover the product.
                        </p>

                        <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />

                        <p
                            className="
                                px-8
                                font-title
                                text-[clamp(2.5rem,5vw,5rem)]
                                italic
                                leading-none
                                tracking-[-0.05em]
                                text-[#D9828A]
                            "
                        >
                            Discover the place.
                        </p>

                        <span className="mx-8 h-2 w-2 rounded-full bg-[#D9828A]" />

                    </div>

                </motion.div>

            </div>


            {/* =================================================
                BOTTOM LABEL
            ================================================= */}

            <div className="relative mx-auto mt-12 flex max-w-[1500px] items-center justify-center px-7 sm:px-12 lg:px-20">

                <div className="flex items-center gap-4">

                    <span className="h-px w-8 bg-[#D9828A]/60" />

                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#C9AAA3]">
                        From Nepal's hills
                    </span>

                    <span className="h-px w-8 bg-[#D9828A]/60" />

                </div>

            </div>

        </section>
    );
};

export default ShopStatement;
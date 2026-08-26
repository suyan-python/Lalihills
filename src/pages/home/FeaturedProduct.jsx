import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import drip from "../../assets/products/dripnew.jpeg"
import hills from "../../assets/hills/1.jpg"

const FeaturedProduct = () =>
{
    return (
        <section className="relative overflow-hidden bg-lightCream px-6 py-20 text-brown sm:px-10 sm:py-28 lg:px-16 lg:py-36">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                >
                    {/* Decorative background shape */}
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#D9828A] blur-2xl" />
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#D9828A]/70 blur-3xl" />
                    <div className="absolute -rightt-8 -bottom-8 h-32 w-32 rounded-full bg-[#D9828A]/50 blur-3xl" />

                    <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden">

                        <img
                            src={hills}
                            alt="Laali Hills"
                            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[4px]"
                        />

                        {/* Dim + brown tint */}
                        <div className="absolute inset-0 bg-[#2B1C1A]/55" />

                        {/* Optional subtle pink warmth */}
                        <div className="absolute inset-0 bg-[#D9828A]/5" />


                        <div className="absolute inset-0">

                            {/* Soft pink glow */}
                            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#D9828A]/15 blur-[90px]" />

                            {/* Red glow */}
                            <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-red/20 blur-[100px]" />

                            {/* Subtle center glow */}
                            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A2A7]/5 blur-[80px]" />
                        </div>

                        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] overflow-hidden">

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                className="absolute -bottom-24 left-[-25%] h-72 w-[150%] rounded-[50%] bg-[#5B3430]"
                            />

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.4,
                                    delay: 0.1,
                                }}
                                className="absolute -bottom-32 left-[-30%] h-64 w-[160%] rounded-[50%] bg-[#3D2422]"
                            />

                            <motion.div
                                initial={{ y: 70, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.6,
                                    delay: 0.2,
                                }}
                                className="absolute -bottom-40 left-[-35%] h-60 w-[170%] rounded-[50%] bg-brown"
                            />

                        </div> */}

                        <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">

                            <div className="flex items-center gap-3">

                                <span className="h-px w-7 bg-[#D9828A]" />

                                <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#D8B7B0]">
                                    Coming Soon
                                </span>

                            </div>

                            <span className="text-[8px] uppercase tracking-[0.25em] text-[#9D7771]">
                                01 / 01
                            </span>

                        </div>

                        <div className="absolute inset-0 flex items-center justify-center px-8">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.2,
                                }}
                                className="relative z-10 text-center"
                            >

                                <p className="mb-5 text-[8px] font-medium uppercase tracking-[0.45em] text-[#D9828A]">
                                    From the hills of Nepal
                                </p>

                                <h3 className="font-title text-5xl leading-[0.85] tracking-[-0.045em] text-lightCream sm:text-6xl">
                                    Something
                                    <br />
                                    <span className="italic text-[#D9828A]">
                                        is coming.
                                    </span>
                                </h3>

                                <div className="mx-auto mt-7 h-px w-10 bg-red" />

                                <p className="mx-auto mt-5 max-w-[230px] font-subtitle text-base italic leading-relaxed text-[#BFA29B]">
                                    Exceptional coffee, tea and stories shaped by the hills.
                                </p>

                            </motion.div>

                        </div>


                        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">

                            <div>

                                <p className="text-[7px] uppercase tracking-[0.35em] text-[#80635E]">
                                    Laali Hills
                                </p>

                                <p className="mt-1 font-subtitle text-sm italic text-[#BFA29B]">
                                    Nepal • Origin • Craft
                                </p>

                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9828A]/25">

                                <span className="header text-sm italic text-[#D9828A]">
                                    LH
                                </span>

                            </div>

                        </div>


                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.035]"
                            style={{
                                backgroundImage: `
                url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E")
            `,
                            }}
                        />


                    </div>
                </motion.div>

                {/* =====================================================
            PRODUCT INFORMATION
        ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-xl "
                >

                    {/* Eyebrow */}

                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-8 bg-red" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8C5752]">
                            Featured Origin
                        </span>
                    </div>

                    {/* Product title */}

                    <h2 className=" text-[clamp(3rem,6vw,5.5rem)] leading-[0.86] tracking-[-0.045em] text-brown">
                        Lali Hills
                        <br />
                        <span className="italic text-[#A83C45]">
                            Arabica
                        </span>
                    </h2>

                    {/* Short description */}

                    <p className="mt-8 max-w-lg font-subtitle md:text-xl leading-relaxed text-[#674C48] text-2xl">
                        A coffee shaped by the hills of Nepal — grown with
                        patience, crafted with care, and brought to your cup
                        with its origin intact.
                    </p>

                    {/* Product information */}

                    <div className="mt-9 grid max-w-md grid-cols-3 border-y border-brown/10 py-5">
                        <div>
                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#96736D]">
                                Origin
                            </p>

                            <p className="mt-2 text-xs font-medium text-[#3D2926]">
                                Lali Hills, Nepal
                            </p>
                        </div>

                        <div className="border-l border-brown/10 pl-5">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#96736D]">
                                Process
                            </p>

                            <p className="mt-2 text-xs font-medium text-[#3D2926]">
                                Washed
                            </p>
                        </div>

                        <div className="border-l border-brown/10 pl-5">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#96736D]">
                                Roast
                            </p>

                            <p className="mt-2 text-xs font-medium text-[#3D2926]">
                                Medium
                            </p>
                        </div>
                    </div>

                    {/* CTA */}

                    <div className="mt-9 flex flex-wrap items-center gap-6">

                        <a
                            href=""
                            className="group inline-flex items-center gap-4 bg-red px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-deepRed hover:shadow-xl hover:shadow-red/15"
                        >
                            Buy Now

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </span>
                        </a>

                        <a
                            href=""
                            className="group inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#674C48]"
                        >
                            Explore Coffee

                            <span className="h-px w-0 bg-red transition-all duration-300 group-hover:w-6" />
                        </a>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
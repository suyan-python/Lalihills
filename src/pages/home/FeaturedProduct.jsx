import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import drip from "../../assets/products/dripnew.jpeg"

const FeaturedProduct = () =>
{
    return (
        <section className="relative overflow-hidden bg-[#F8EDE8] px-6 py-20 text-[#241817] sm:px-10 sm:py-28 lg:px-16 lg:py-36">

            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

                {/* =====================================================
            PRODUCT IMAGE
        ====================================================== */}

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

                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#D9828A]/20 blur-2xl" />

                    <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden bg-[#EBD8D2]">

                        {/* Replace this image */}
                        <img
                            src={drip}
                            alt="Laali Hills specialty coffee"
                            className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-[1.03]"
                        />

                        {/* Origin badge */}

                        <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[#241817]/50 text-center backdrop-blur-md">
                                <span className="text-[7px] font-medium uppercase leading-3 tracking-[0.2em] text-white">
                                    Nepal
                                    <br />
                                    Origin
                                </span>
                            </div>
                        </div>

                        {/* Image caption */}

                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                            <div>
                                <p className="text-[8px] uppercase tracking-[0.3em] text-white/70">
                                    From the hills
                                </p>

                                <p className="mt-1 font-subtitle text-lg italic text-white">
                                    Nepal
                                </p>
                            </div>

                            <span className="text-[8px] uppercase tracking-[0.25em] text-white/70">
                                01 / 01
                            </span>
                        </div>
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
                    className="max-w-xl"
                >

                    {/* Eyebrow */}

                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#B73E46]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8C5752]">
                            Featured Origin
                        </span>
                    </div>

                    {/* Product title */}

                    <h2 className="subheader text-[clamp(3rem,6vw,5.5rem)] leading-[0.86] tracking-[-0.045em] text-[#241817]">
                        Lali Hills
                        <br />
                        <span className="italic text-[#A83C45]">
                            Arabica
                        </span>
                    </h2>

                    {/* Short description */}

                    <p className="mt-8 max-w-lg font-subtitle text-xl leading-relaxed text-[#674C48] sm:text-2xl">
                        A coffee shaped by the hills of Nepal — grown with
                        patience, crafted with care, and brought to your cup
                        with its origin intact.
                    </p>

                    {/* Product information */}

                    <div className="mt-9 grid max-w-md grid-cols-3 border-y border-[#241817]/10 py-5">
                        <div>
                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#96736D]">
                                Origin
                            </p>

                            <p className="mt-2 text-xs font-medium text-[#3D2926]">
                                Lali Hills, Nepal
                            </p>
                        </div>

                        <div className="border-l border-[#241817]/10 pl-5">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#96736D]">
                                Process
                            </p>

                            <p className="mt-2 text-xs font-medium text-[#3D2926]">
                                Washed
                            </p>
                        </div>

                        <div className="border-l border-[#241817]/10 pl-5">
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
                            className="group inline-flex items-center gap-4 bg-[#B73E46] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#8F3038] hover:shadow-xl hover:shadow-[#B73E46]/15"
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

                            <span className="h-px w-0 bg-[#B73E46] transition-all duration-300 group-hover:w-6" />
                        </a>

                    </div>

                </motion.div>
            </div>

            {/* =====================================================
          DECORATIVE NUMBER
      ====================================================== */}

            <div className="pointer-events-none absolute bottom-5 right-6 hidden select-none lg:block">
                <span className="font-title text-[9rem] leading-none text-[#241817]/[0.035]">
                    01
                </span>
            </div>
        </section>
    );
};

export default FeaturedProduct;
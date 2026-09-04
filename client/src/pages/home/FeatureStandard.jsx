import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FeatureStandard = () =>
{
    const questions = [
        "Where it came from.",
        "Who produced it.",
        "What the land is like.",
        "How it was cultivated.",
        "Why we chose it.",
        "What makes it special.",
    ];

    return (
        <section className="relative overflow-hidden bg-lightCream px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
            <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">

                {/* LEFT */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >

                    <h2 className="header mt-7 max-w-2xl text-[clamp(3.8rem,7vw,7rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-ink">
                        The hills are
                        <br />
                        what we
                        <br />
                        <span className="italic text-red">
                            feature.
                        </span>
                    </h2>


                    <p className="mt-8 max-w-lg text-sm font-light leading-7 text-ink/65 sm:text-base">
                        Everything Laali Hills presents must have a genuine
                        connection to its origin. We believe the story behind
                        what we feature matters just as much as what is in the cup.
                    </p>


                    <div className="mt-10">
                        <p className="font-title text-[11px] uppercase tracking-[0.25em] text-hill">
                            We are what we feature.
                        </p>
                    </div>
                </motion.div>


                {/* RIGHT */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="border-t border-ink/15">

                        {questions.map((question, index) => (
                            <motion.div
                                key={question}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.7, delay: index * 0.08 }}
                                className="group flex items-center justify-between border-b border-ink/15 py-5 sm:py-6"
                            >
                                <div className="flex items-center gap-5">

                                    <span className="text-[8px] tracking-[0.2em] text-stone">
                                        0{index + 1}
                                    </span>

                                    <span className="text-sm font-light tracking-wide text-ink transition-colors duration-300 group-hover:text-red sm:text-base">
                                        {question}
                                    </span>

                                </div>

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.1}
                                    className="text-stone transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red"
                                />
                            </motion.div>
                        ))}

                    </div>


                    {/* Bottom statement */}

                    <div className="mt-10 flex items-center justify-between">

                        <span className="text-[8px] uppercase tracking-[0.35em] text-ink/40">
                            Our standard
                        </span>

                        <span className="text-[8px] uppercase tracking-[0.35em] text-soil">
                            Origin first
                        </span>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default FeatureStandard;
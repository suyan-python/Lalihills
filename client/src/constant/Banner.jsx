import { motion } from "framer-motion";

const Banner = () =>
{

    const leftMessages = [
        "SPECIALTY COFFEE FROM THE HILLS OF NEPAL",
        "TRACEABLE ORIGINS",
        "GROWN AT ALTITUDE",
        "FROM NEPALESE HILLS TO YOUR CUP",
    ];

    const rightMessages = [
        "ARTISAN TEA · DISTINCTIVE COFFEE",
        "LAND · PEOPLE · CRAFT",
        "DISCOVER THE HILLS",
        "ROOTED IN ORIGIN",
    ];

    return (

        <div className="absolute inset-x-0 top-0 z-[120] hidden h-5 overflow-hidden border-b border-[#FBEDEA]/10 bg-red md:block">
            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-32 bg-gradient-to-l from-red to-transparent" />
                <motion.div
                    className="flex h-full w-max items-center whitespace-nowrap"
                    animate={{
                        x: ["-20%", "80%"],
                    }}
                    transition={{
                        duration: 18,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {leftMessages.map((message, index) => (
                        <div
                            key={index}
                            className="flex items-center"
                        >
                            <span className="px-8 text-[7px] font-medium uppercase tracking-[0.3em] text-[#FBEDEA]/70 sm:text-[8px]">
                                {message}
                            </span>

                            <span className="text-[6px] text-[#FBEDEA]/25">
                                ◆
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-32 bg-gradient-to-r from-red to-transparent" />
                <motion.div
                    className="flex h-full w-max items-center whitespace-nowrap"
                    animate={{
                        x: ["20%", "-80%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {rightMessages.map((message, index) => (
                        <div
                            key={index}
                            className="flex items-center"
                        >
                            <span className="text-[6px] text-[#FBEDEA]/25">
                                ◆
                            </span>

                            <span className="px-8 text-[7px] font-medium uppercase tracking-[0.3em] text-[#FBEDEA]/70 sm:text-[8px]">
                                {message}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
                <div className="relative flex h-full items-center bg-red px-6">
                    <div className="absolute inset-0 bg-red shadow-[0_0_24px_12px_var(--color-deepRed)]" />
                    <div className="relative flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FBEDEA]/80" />

                        <span className="whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.3em] text-[#FBEDEA] sm:text-[8px]">
                            LAALI HILLS
                        </span>

                        <span className="text-[6px] text-[#FBEDEA]/40">
                            ·
                        </span>

                        <span className="whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.25em] text-[#FBEDEA]/60 sm:text-[8px]">
                            ARRIVING SOON
                        </span>

                    </div>

                </div>

            </div>
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-40 w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-red/40 to-transparent" />

        </div>
    );
};

export default Banner;
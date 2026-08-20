import { motion } from "framer-motion";

const Banner = () =>
{
    const message =
        "LAALI HILLS IS ARRIVING SOON  ·  SPECIALTY COFFEE & TEA FROM THE HILLS OF NEPAL";

    return (
        <div className="fixed left-0 right-0 top-0 z-[120] h-7 overflow-hidden border-b border-white/10 bg-[#8F3038]/30 backdrop-blur-md">

            {/* Moving track */}
            <div className="relative flex h-full items-center">

                {/* LEFT → RIGHT */}
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{
                        x: ["-100%", "-5%", "0%", "5%", "100%"],
                        opacity: [0, 1, 1, 0.8, 0],
                    }}
                    transition={{
                        duration: 10,
                        times: [0, 0.35, 0.5, 0.65, 1],
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute whitespace-nowrap"
                >
                    <p className="px-8 text-[7px] md:text-[8px] font-medium uppercase tracking-[0.35em] text-[#FBEDEA] sm:text-[9px]">
                        {message}
                    </p>
                </motion.div>

                {/* RIGHT → LEFT */}
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{
                        x: ["100%", "5%", "0%", "-5%", "-100%"],
                        opacity: [0, 0.8, 1, 1, 0],
                    }}
                    transition={{
                        duration: 10,
                        delay: 5,
                        times: [0, 0.35, 0.5, 0.65, 1],
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute whitespace-nowrap"
                >
                    <p className="px-8 text-[8px] font-medium uppercase tracking-[0.35em] text-[#FBEDEA] sm:text-[9px]">
                        {message}
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;
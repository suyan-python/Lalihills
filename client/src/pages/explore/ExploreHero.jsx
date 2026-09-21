import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ExploreHero = () => {
  return (
    <section className="relative flex h-dvh min-h-[620px] w-full items-end overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src="/videos/plantation.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover rounded-b-4xl"
        />

        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-12 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16 lg:pb-20 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <span className="block text-[7px] font-medium uppercase tracking-[0.35em] text-lightCream/65 sm:text-[8px] sm:tracking-[0.45em]">
            Laali Hills
          </span>

          <h1 className="header mt-4 text-[clamp(3.2rem,9vw,8rem)] uppercase leading-[0.82] tracking-[-0.055em] text-lightCream">
            Explore
            <br />
            <span className="text-lightCream/65">the context.</span>
          </h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 right-6 flex flex-col items-center gap-3 sm:bottom-12 sm:right-8 md:right-12 lg:right-16"
        >
          <span className="text-[6px] uppercase tracking-[0.35em] text-lightCream/60 sm:text-[7px]">
            Begin
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={15}
              strokeWidth={1}
              className="text-lightCream/70"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreHero;

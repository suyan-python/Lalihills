import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SmartVideo from "../../components/SmartVideo";

const AboutHero = ({ video }) => {
  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-deepRed">
      {/* VIDEO */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <SmartVideo
          src={video}
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* DEEP RED ATMOSPHERE */}
      <div className="absolute inset-0 bg-ink/35" />

      {/* DARK RED FROM BOTTOM */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/20" />

      {/* STRONGER RED ON LEFT */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/20 to-transparent" />

      {/* SUBTLE RED FILM */}
      <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto w-full max-w-[1500px]">
          {/* EYEBROW */}
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-red/80" />

            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/80">
              The Laali Hills Story
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="header max-w-6xl text-[clamp(4rem,11vw,11rem)] leading-[0.78] tracking-[-0.07em] text-lightCream"
          >
            Our
            <span className="ml-3 italic text-red">Story.</span>
          </motion.h1>

          {/* LOWER INFORMATION */}
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
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col gap-6 border-t border-lightCream/20 pt-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-[10px] leading-5 text-lightCream/75 sm:text-xs">
              A story shaped by highland soil, careful hands, and the belief
              that what comes from Nepal&apos;s hills deserves to be experienced
              differently.
            </p>

            <div className="flex items-center gap-3 text-lightCream/70">
              <span className="text-[7px] uppercase tracking-[0.3em]">
                Scroll to discover
              </span>

              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown size={13} strokeWidth={1} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FRAME */}
      <div className="pointer-events-none absolute inset-5 border border-lightCream/10 sm:inset-8 lg:inset-10" />
    </section>
  );
};

export default AboutHero;

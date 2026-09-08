import React from "react";
import laliStampLogo from "../../assets/logo/round.svg";
import { motion } from "framer-motion";

const Halfhalf2 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.18,
            delayChildren: 0.15,
          },
        },
      }}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT — VIDEO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[60vh] overflow-hidden lg:min-h-screen"
        >
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 2.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/green.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="flex min-h-[60vh] items-center justify-center bg-hill px-8 py-16 sm:px-12 lg:min-h-screen lg:px-16 xl:px-24"
        >
          <div className="max-w-xl text-center lg:text-left">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="text-[8px] font-medium uppercase tracking-[0.4em] text-lightCream/60"
            >
              From the hills
            </motion.span>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="subheader mt-6 text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.8] tracking-[-0.065em] text-lightCream"
            >
              Where
              <br />
              <span className="italic text-cream">Laali</span>
              <br />
              begins.
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="mx-auto mt-8 max-w-md text-[11px] leading-6 tracking-wide text-lightCream/70 lg:mx-0 sm:text-[12px] sm:leading-7"
            >
              Rooted in Nepal&apos;s hills, Laali Hills is a celebration of the
              places, people and natural character behind every cup.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="mx-auto mt-10 flex max-w-md items-center justify-center gap-5 border-t border-lightCream/15 pt-5 lg:mx-0 lg:justify-start"
            >
              <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/50">
                Nepal
              </span>

              <span className="h-3 w-px bg-lightCream/20" />

              <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/50">
                Higher Belt
              </span>

              <span className="h-3 w-px bg-lightCream/20" />

              <span className="text-[7px] uppercase tracking-[0.3em] text-lightCream/50">
                Laali Hills
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CENTER STAMP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82, rotate: 8 }}
        whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 1.7,
          delay: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lightCream/40 bg-lightCream/10 p-3 backdrop-blur-[2px] sm:h-32 sm:w-32 lg:h-36 lg:w-36"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            delay: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-2 rounded-full border border-dashed border-lightCream/30"
        />

        <img
          src={laliStampLogo}
          alt="Laali Hills"
          className="relative z-10 h-full w-full object-contain"
        />
      </motion.div>
    </motion.section>
  );
};

export default Halfhalf2;

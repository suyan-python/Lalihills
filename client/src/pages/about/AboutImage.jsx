import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutImage = ({ images }) => {
  return (
    <section className="relative overflow-hidden bg-lightCream px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="my-14 flex items-end justify-between "
        >
          <div>
            <span className="block text-[8px] font-medium uppercase tracking-[0.4em] text-red/70 sm:text-[9px]">
              From the hills
            </span>

            <h2 className="header mt-5 text-[clamp(3.5rem,7vw,7rem)] leading-[0.82] tracking-[-0.055em] text-brown">
              In
              <span className="ml-2 italic text-red">pictures.</span>
            </h2>
          </div>
        </motion.div>

        {/* GALLERY */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* 01 — LARGE IMAGE */}
          <GalleryImage
            src={images[0]}
            number="01"
            text="The land"
            aspect="aspect-[16/9] sm:aspect-[2.15/1]"
            delay={0}
          />

          {/* 02 + 03 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <GalleryImage
                src={images[1]}
                number="02"
                text="High altitude"
                aspect="aspect-[4/5] sm:aspect-[4/5]"
                delay={0.1}
              />
            </div>

            <div className="lg:col-span-7 lg:pt-24">
              <GalleryImage
                src={images[2]}
                number="03"
                text="The hands behind it"
                aspect="aspect-[4/5] sm:aspect-[5/4]"
                delay={0.2}
              />
            </div>
          </div>

          {/* 04 — CINEMATIC */}
          <GalleryImage
            src={images[3]}
            number="04"
            text="Where coffee begins"
            aspect="aspect-[16/8] sm:aspect-[2.4/1]"
            delay={0.1}
          />

          {/* 05 + PHILOSOPHY */}
          <div className="grid items-end gap-10 pt-4 sm:gap-16 sm:pt-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <GalleryImage
                src={images[4]}
                number="05"
                text="Tea gardens"
                aspect="aspect-[4/5]"
                delay={0.15}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-6 lg:col-start-7 lg:pb-6"
            >
              <span className="block text-[8px] font-bold uppercase tracking-[0.4em] text-red/70 sm:text-[9px]">
                The Laali Hills philosophy
              </span>

              <h3 className="header mt-6 max-w-xl text-[clamp(2.2rem,4vw,4.5rem)] leading-[0.9] tracking-[-0.05em] text-brown">
                Every origin has
                <span className="italic text-red"> a story.</span>
              </h3>

              <p className="mt-7 max-w-md text-[12px] leading-6 text-brown/55 sm:text-[13px] sm:leading-7">
                We believe the best way to understand what is in your cup is to
                understand where it began.
              </p>

              <a
                href="/explore"
                className="group mt-8 inline-flex items-center gap-4 border-b border-brown/20 pb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-brown transition-colors duration-500 hover:border-red hover:text-red"
              >
                <span>Explore our origins</span>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, number, text, aspect, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden ${aspect}`}
    >
      <motion.img
        src={src}
        alt={text}
        loading="lazy"
        decoding="async"
        initial={{
          scale: 1.06,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-70" />

      <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
        <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-lightCream/55">
          {number}
        </span>

        <span className="h-px w-5 bg-lightCream/40" />

        <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-lightCream/80">
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default AboutImage;

import laliStampLogo from "../../assets/logo/round.svg";
import farm from "../../assets/hills/farm.jpg";
import { motion } from "framer-motion";
import SmartVideo from "../../components/SmartVideo";

const AuthenticSection = () => {
  return (
    <section className="relative overflow-hidden bg-hill">
      <div
        className="relative
            
            max-h-[75vh]
            items-center
            justify-center
            overflow-hidden
            bg-ink "
      >
        {/* VIDEO */}
        <SmartVideo
          src="/videos/know-origin.mp4"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERALL VIDEO TREATMENT */}
        <div className="absolute inset-0 bg-ink/15" />

        {/* DARK GRADIENT FROM LEFT */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 via-45% to-transparent" />

        {/* SUBTLE BOTTOM DARKENING */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16 xl:px-20">
          <div className="w-full max-w-2xl">
            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.35,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="subheader mt-5 max-w-2xl text-[clamp(3rem,8vw,7.5rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em] text-lightCream sm:mt-6 lg:mt-7"
            >
              Know
              <br />
              Your
              <br />
              <span className="font-medium text-red">Origin.</span>
            </motion.h2>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 sm:mt-10 ml-5"
            >
              <button className="group inline-flex items-center gap-4 border border-lightCream/30 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.28em] text-lightCream transition-all duration-500 hover:border-lightCream/60 hover:bg-lightCream hover:text-ink">
                <span>Explore</span>
              </button>
            </motion.div>
          </div>

          {/* LOCATION LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-8 right-8 z-10 hidden text-right sm:block lg:bottom-12 lg:right-12"
          >
            <span className="block text-[7px] font-medium uppercase tracking-[0.38em] text-lightCream/45">
              Grown above the ordinary
            </span>

            <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-lightCream/75">
              Nepal · Himalayan Origin
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticSection;

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
        <div className="relative z-10 flex h-full items-center px-4 py-5 sm:px-8 sm:py-10 lg:px-16 lg:py-16 xl:px-20 ">
          <div className="w-full max-w-2xl ">
            {/* LABEL */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/60 sm:text-[9px]"
            >
              The origin behind every cup
            </motion.span>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="subheader mt-3 max-w-2xl text-[clamp(2.2rem,8vw,8rem)] uppercase leading-[0.82] tracking-[-0.065em] text-lightCream sm:mt-6 lg:mt-7"
            >
              Know
              <br />
              Your
              <br />
              <span className="text-red">Origin.</span>
            </motion.h2>

            {/* ORIGIN DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 sm:mt-7 lg:mt-10"
            >
              <button className=" text-lightWhite px-4 py-1 uppercase tracking-widest">
                Explore
              </button>
            </motion.div>
          </div>
          {/* LOCATION LABEL */}
          <div className="absolute bottom-8 right-8 z-10 hidden text-right sm:block lg:bottom-12 lg:right-12">
            <span className="block text-[7px] uppercase tracking-[0.4em] text-lightCream/50">
              Grown above the ordinary
            </span>

            <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-lightCream/80">
              Nepal · Himalayan Origin
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticSection;

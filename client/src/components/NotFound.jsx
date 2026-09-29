import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import error from "../assets/icon/error.svg";
import Button from "./Button";

const NotFound = () => {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-ink px-6 text-lightCream sm:px-10 lg:px-16">
      {/* WATERMARK */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.img
          src={error}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-[55vw] w-[55vw] max-h-[720px] max-w-[720px] object-contain opacity-[0.055] sm:h-[50vw] sm:w-[50vw] lg:h-[42vw] lg:w-[42vw]"
        />
      </div>

      {/* SUBTLE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/30" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-2xl text-center "
      >
        {/* TITLE */}
        {/* <h1 className="header mt-6 text-[clamp(3.5rem,8vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em]">
          This path
          <br />
          <span className="italic text-cream">leads nowhere.</span>
        </h1> */}

        {/* DESCRIPTION */}
        <p className="mx-auto  max-w-md text-sm  leading-7 text-lightCream sm:text-base">
          This path{" "}
          <span className="italic text-red font-bold bg-lightCream py-1 px-2 rounded-4xl">
            leads nowhere.
          </span>
        </p>

        {/* CTA */}
        <Button to={"/"} variant="light" className="mt-5">
          Return to the hill
        </Button>
      </motion.div>
    </main>
  );
};

export default NotFound;

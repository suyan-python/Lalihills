import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-ink px-6 text-lightCream sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="header select-none text-[35vw] leading-none tracking-[-0.08em] text-lightCream/[0.025]">
          404
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl text-center"
      >
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-red" />
          <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-lightCream/55">
            404 · Page Not Found
          </span>
          <span className="h-px w-8 bg-red" />
        </div>

        <h1 className="header text-[clamp(3.5rem,8vw,8rem)] uppercase leading-[0.82] tracking-[-0.065em]">
          This path
          <br />
          <span className="italic text-cream">leads nowhere.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-lightCream/55 sm:text-base">
          Looks like this trail has taken you a little too far from the hills.
          Let&apos;s get you back to where the good things are.
        </p>

        <Link
          to="/"
          className="group mx-auto mt-10 flex w-fit items-center gap-4 border-b border-lightCream/25 pb-3 text-[8px] font-medium uppercase tracking-[0.3em] text-lightCream transition-colors duration-500 hover:border-red hover:text-cream"
        >
          <span>Return to the hills</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-lightCream/20 transition-all duration-500 group-hover:translate-x-1 group-hover:border-red">
            <ArrowUpRight size={13} strokeWidth={1.1} />
          </span>
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;

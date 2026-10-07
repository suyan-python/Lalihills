import { motion } from "framer-motion";

const OxidationLevel = ({ oxidation }) => {
  const levels = ["Green", "Oxidation", "Full"];

  const value = Math.min(5, Math.max(1, Number(oxidation) || 1));

  const progress = ((value - 1) / 4) * 100;

  const activeIndex = value <= 2 ? 0 : value <= 3 ? 1 : 2;

  return (
    <div>
      {/* Oxidation Scale */}
      <div>
        {/* Labels */}
        <div className="flex justify-between px-5">
          {levels.map((level, index) => {
            const isCurrent = index === activeIndex;

            return (
              <motion.span
                key={level}
                transition={{ duration: 0.35 }}
                className={`text-[9px] uppercase tracking-[0.16em] ${
                  isCurrent ? "font-bold text-lightWhite" : "font-light"
                }`}
              >
                {level}
              </motion.span>
            );
          })}
        </div>

        {/* Scale */}
        <div className="relative mt-3">
          {/* Oxidation gradient */}
          <div className="h-[8px] w-full rounded-full bg-gradient-to-r from-[#7C8D68] via-yellow-800 to-[#4A382C]" />

          {/* Pointer */}
          {oxidation && (
            <motion.div
              className="absolute top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lightWhite bg-lightWhite shadow-[0_0_0_3px_rgba(255,255,255,0.08)]"
              animate={{
                left: `${progress}%`,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-ink" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OxidationLevel;

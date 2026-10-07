import { motion } from "framer-motion";

const RoastLevel = ({ roast }) => {
  const levels = ["Light", "Medium", "Dark"];

  const normalizedRoast = String(roast || "")
    .trim()
    .toLowerCase();

  const activeIndex = levels.findIndex(
    (level) => level.toLowerCase() === normalizedRoast,
  );

  const progress =
    activeIndex >= 0 ? (activeIndex / (levels.length - 1)) * 100 : 0;

  return (
    <div>
      {/* Header 

      {/* Labels */}
      <div className="mt-4 flex justify-between">
        {levels.map((level, index) => {
          const isCurrent = index === activeIndex;

          return (
            <motion.span
              key={level}
              transition={{
                duration: 0.4,
              }}
              className={`text-[9px] uppercase tracking-[0.16em] px-5 ${
                isCurrent ? "font-medium text-lightWhite" : "font-normal"
              }`}
            >
              {level}
            </motion.span>
          );
        })}
      </div>

      {/* Roast Scale */}
      <div className="mt-2">
        <div className="relative">
          {/* Track */}
          <div className="h-[2px] w-full rounded-full bg-lightWhite/10" />

          {/* Progress */}
          <motion.div
            className="absolute left-0 top-0 h-[2px] rounded-full bg-lightWhite/75"
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Points */}
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
            {levels.map((level, index) => {
              const isActive = index <= activeIndex;
              const isCurrent = index === activeIndex;

              return (
                <motion.div
                  key={level}
                  animate={{
                    scale: isCurrent ? 1.15 : 1,
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex h-3 w-3 items-center justify-center rounded-full border ${
                    isCurrent
                      ? "border-lightWhite bg-lightWhite"
                      : isActive
                      ? "border-lightWhite/70 bg-lightWhite/70"
                      : "border-lightWhite/20 bg-ink"
                  }`}
                >
                  {isCurrent && <div className="h-1 w-1 rounded-full bg-ink" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Roast */}
      {activeIndex >= 0 && (
        <div className="mt-4 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-red" />

          <span className="text-[8px] uppercase tracking-[0.15em] text-lightWhite/45">
            {roast} roast
          </span>
        </div>
      )}
    </div>
  );
};

export default RoastLevel;

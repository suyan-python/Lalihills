const RoastLevel = ({ roast }) => {
  const levels = ["Light", "Medium", "Dark"];

  const normalizedRoast = String(roast || "")
    .trim()
    .toLowerCase();

  const activeIndex = levels.findIndex(
    (level) => level.toLowerCase() === normalizedRoast,
  );

  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-lightWhite/50">
            Roast level
          </span>

          <p className=" text-[12px] font-medium uppercase tracking-[0.12em] text-lightWhite">
            {roast || "—"}
          </p>
        </div>

        {activeIndex >= 0 && (
          <span className="text-[7px] uppercase tracking-[0.18em] text-lightWhite/35">
            {activeIndex + 1} / 3
          </span>
        )}
      </div>

      {/* Roast Scale */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5">
          {levels.map((level, index) => {
            const isActive = index <= activeIndex;
            const isCurrent = index === activeIndex;

            return (
              <div key={level} className="flex flex-1 flex-col gap-2">
                <div
                  className={`h-2 w-full rounded-sm border transition-all duration-300 ${
                    isActive
                      ? "border-lightWhite/80 bg-lightWhite"
                      : "border-lightWhite/15 bg-lightWhite/5"
                  }`}
                />

                <span
                  className={`text-[7px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isCurrent
                      ? "font-medium text-lightWhite"
                      : "text-lightWhite/35"
                  }`}
                >
                  {level}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Roast */}
      {activeIndex >= 0 && (
        <div className="mt-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />

          <span className="text-[8px] uppercase tracking-[0.15em] text-lightWhite/55">
            {roast} roast
          </span>
        </div>
      )}
    </div>
  );
};

export default RoastLevel;

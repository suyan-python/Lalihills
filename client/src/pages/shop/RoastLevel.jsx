const RoastLevel = ({ roast }) => {
  const levels = ["Light", "Medium", "Dark"];

  const activeIndex = levels.findIndex(
    (level) => level.toLowerCase() === roast,
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[7px] uppercase tracking-[0.35em] text-stone">
          Roast
        </span>

        <span className="text-[8px] uppercase tracking-[0.2em] text-ink/50">
          {roast}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {levels.map((level, index) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              index <= activeIndex ? "bg-ink" : "bg-ink/10"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 flex justify-between text-[6px] uppercase tracking-[0.25em] text-ink/30">
        <span>Light</span>
        <span>Medium</span>
        <span>Dark</span>
      </div>
    </div>
  );
};

export default RoastLevel;

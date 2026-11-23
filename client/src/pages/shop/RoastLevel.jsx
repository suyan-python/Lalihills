import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RoastLevel = ({ roastLevel, products = [], onProductChange }) => {
  const [sliderValue, setSliderValue] = useState(
    Math.min(5, Math.max(1, Number(roastLevel) || 1)),
  );

  const levels = ["Light", "Medium", "Dark"];

  const activeIndex = sliderValue <= 2 ? 0 : sliderValue <= 3 ? 1 : 2;

  const progress = ((sliderValue - 1) / 4) * 100;

  // Sync slider when the selected product changes externally
  useEffect(() => {
    setSliderValue(Math.min(5, Math.max(1, Number(roastLevel) || 1)));
  }, [roastLevel]);

  const handleRoastChange = (value) => {
    const selectedLevel = Number(value);

    // Update slider immediately for smooth movement
    setSliderValue(selectedLevel);

    // Find the closest available product
    const availableProducts = products
      .filter((product) => Number(product.roastLevel) >= 1)
      .sort(
        (a, b) =>
          Math.abs(Number(a.roastLevel) - selectedLevel) -
          Math.abs(Number(b.roastLevel) - selectedLevel),
      );

    if (availableProducts.length > 0) {
      onProductChange?.(availableProducts[0]);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D7C8E4]">
            Roast Level
          </p>

          <motion.p
            key={sliderValue}
            initial={{ opacity: 0.5, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="header mt-1 text-lg font-bold "
          >
            {levels[activeIndex]}
          </motion.p>
        </div>
      </div>

      {/* Smooth continuous slider */}
      <div className="relative px-1">
        <div className="relative h-2 overflow-hidden rounded-full bg-[#D7C8E4]">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#C8B2DF] via-[#987BB2] to-[#604B76]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.12, ease: "linear" }}
          />
        </div>

        <input
          type="range"
          min="1"
          max="5"
          step="0.01"
          value={sliderValue}
          onChange={(e) => handleRoastChange(e.target.value)}
          aria-label="Select roast level"
          className="roast-slider absolute left-0 top-1 h-8 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent"
        />

        <div className="mt-4 flex justify-between">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => handleRoastChange(level)}
              className={`text-[10px] font-semibold transition-colors ${
                sliderValue >= level - 0.5 ? "text-[#795A9C]" : "text-[#A99BB3]"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .roast-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 4px solid #795A9C;
          box-shadow: 0 2px 10px rgba(64, 52, 77, 0.2);
          cursor: grab;
        }

        .roast-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.12);
        }

        .roast-slider::-moz-range-thumb {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 4px solid #795A9C;
          box-shadow: 0 2px 10px rgba(64, 52, 77, 0.2);
          cursor: grab;
        }
      `}</style>
    </div>
  );
};

export default RoastLevel;

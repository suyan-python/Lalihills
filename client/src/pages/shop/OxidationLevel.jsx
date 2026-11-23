import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OxidationLevel = ({ oxidation, products = [], onProductChange }) => {
  const levels = ["Green", "Oxidation", "Full"];

  const [sliderValue, setSliderValue] = useState(
    Math.min(5, Math.max(1, Number(oxidation) || 1)),
  );

  const activeIndex = sliderValue <= 2 ? 0 : sliderValue <= 3 ? 1 : 2;

  const progress = ((sliderValue - 1) / 4) * 100;

  useEffect(() => {
    setSliderValue(Math.min(5, Math.max(1, Number(oxidation) || 1)));
  }, [oxidation]);

  const handleOxidationChange = (value) => {
    const selectedLevel = Number(value);

    // Update slider independently for smooth movement
    setSliderValue(selectedLevel);

    // Find the closest available tea product
    const availableProducts = products
      .filter(
        (product) =>
          Number.isFinite(Number(product.oxidation)) &&
          Number(product.oxidation) >= 1,
      )
      .sort(
        (a, b) =>
          Math.abs(Number(a.oxidation) - selectedLevel) -
          Math.abs(Number(b.oxidation) - selectedLevel),
      );

    if (availableProducts.length > 0) {
      onProductChange?.(availableProducts[0]);
    }
  };

  return (
    <div className="w-full">
      {/* Labels */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#987BB2]">
            Oxidation Level
          </p>

          <motion.p
            key={activeIndex}
            initial={{ opacity: 0.5, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="header mt-1 text-lg font-bold text-[#40344D]"
          >
            {levels[activeIndex]}
          </motion.p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative px-1">
        <div className="relative h-2 overflow-hidden rounded-full bg-[#D7C8E4]">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full"
            style={{
              background:
                "linear-gradient(to right, #7C8D68, #987B43, #4A382C)",
            }}
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
          onChange={(e) => handleOxidationChange(e.target.value)}
          aria-label="Select oxidation level"
          className="oxidation-slider absolute left-0 top-1 h-8 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent"
        />

        {/* Scale numbers */}
        <div className="mt-4 flex justify-between">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => handleOxidationChange(level)}
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
        .oxidation-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 4px solid #795A9C;
          box-shadow: 0 2px 10px rgba(64, 52, 77, 0.2);
          cursor: grab;
        }

        .oxidation-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.12);
        }

        .oxidation-slider::-moz-range-thumb {
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

export default OxidationLevel;

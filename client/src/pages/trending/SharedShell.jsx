import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const PreviewShell = ({ children, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-3 backdrop-blur-md sm:p-6 lg:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[94vh] w-full max-w-[1500px] overflow-hidden"
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.98 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-9 w-9 cursor-pointer items-center justify-center border border-brown/15 bg-lightCream/90 text-brown transition-all duration-300 hover:border-red hover:bg-red hover:text-lightCream z-[100]"
          aria-label="Close preview"
        >
          <X size={14} strokeWidth={1.2} />
        </button>

        <div className="max-h-[94vh] overflow-y-auto">{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default PreviewShell;

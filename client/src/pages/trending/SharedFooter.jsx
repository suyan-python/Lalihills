import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PreviewFooter = ({ path, onClose, dark = false }) => {
  return (
    <div
      className={` flex items-center justify-end border-t px-6 py-5 sm:px-10 lg:px-12 ${
        dark ? "border-lightCream/15" : "border-brown/15"
      }`}
    >
      <Link
        to={path}
        onClick={onClose}
        className={`group flex items-center gap-3 text-[8px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
          dark ? "text-lightCream hover:text-red" : "text-brown hover:text-red"
        }`}
      >
        View full section
        <span
          className={`flex h-8 w-8 items-center justify-center border transition-all duration-300 ${
            dark
              ? "border-lightCream/20 group-hover:border-red group-hover:bg-red"
              : "border-brown/15 group-hover:border-red group-hover:bg-red"
          }`}
        >
          <ArrowUpRight
            size={13}
            strokeWidth={1.2}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </div>
  );
};

export default PreviewFooter;

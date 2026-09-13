import React from "react";

const PreviewTopHeader = ({ label, title, description }) => {
  return (
    <div className="border-b border-brown/15 px-6 py-7 sm:px-10 sm:py-9 lg:px-12">
      <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-red sm:text-[9px]">
        {label}
      </span>

      <h2 className="subheader mt-4 text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.78] tracking-[-0.065em] text-brown">
        {title}
      </h2>

      <p className="mt-5 max-w-md text-[10px] leading-5 text-brown/45 sm:text-[11px]">
        {description}
      </p>
    </div>
  );
};

export default PreviewTopHeader;

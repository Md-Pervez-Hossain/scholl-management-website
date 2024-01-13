import React from "react";
import { twMerge } from "tailwind-merge";

const Paragraph = ({ children, className }) => {
  return (
    <div
      className={twMerge("text-base text-[#BFB7B9] leading-[28px] ", className)}
    >
      {children}
    </div>
  );
};

export default Paragraph;

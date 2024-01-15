import React from "react";
import { twMerge } from "tailwind-merge";
const Heading = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "text-base lg:text-[18px] font-[500] lg:my-2 my-1 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Heading;

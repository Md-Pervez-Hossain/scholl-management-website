import React from "react";
import MorningShift from "./MorningShift";
import EveningShift from "./EveningShift";

const Shifts = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-5 lg:my-16 my-5 ">
      <MorningShift />
      <EveningShift />
    </div>
  );
};

export default Shifts;

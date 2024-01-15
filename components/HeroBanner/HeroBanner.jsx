import React from "react";

import "./HeroBanner.css";
import PrimaryButton from "../Share/Button/PrimaryButton";
const HeroBanner = () => {
  return (
    <>
      <div className="banner lg:min-h-[calc(100vh-130px)] min-h-[calc(500px-130px)] flex justify-center items-center py-5 text-center">
        <div className=" text-white">
          <h2 className="lg:text-[40px] text-[24px]  font-[600]">
            Mosharraf Hossain School <br /> & College
          </h2>
          <PrimaryButton className="mt-5 ">About us</PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

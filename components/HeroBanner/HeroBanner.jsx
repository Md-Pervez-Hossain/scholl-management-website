import React from "react";
import "./HeroBanner.css";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <>
      <div className="banner lg:min-h-[calc(100vh-130px)] min-h-[calc(500px-130px)] flex justify-center items-center py-5 text-center">
        <div className=" text-white">
          <h2 className="lg:text-[40px] text-[24px]  font-[600]">
            Mosharraf Hossain School <br /> & College
          </h2>
          <Link href="/about">
            <PrimaryButton className="mt-5  border-2 border-white">
              About us
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

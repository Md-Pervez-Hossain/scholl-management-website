import Link from "next/link";
import React from "react";

const OtherPages = () => {
  return (
    <div className="lg:mt-5 mt-3">
      <h2 className="text-[18px] font-[600]  text-center lg:text-start  gap-5 mb-3">
        Other Pages
      </h2>
      <div className="flex flex-col gap-2">
        <Link href="/">
          <p className="text-[16px] text-[#BFB7B9] text-center lg:text-start">
            Support
          </p>
        </Link>
        <Link href="/privacy-policy">
          <p className="text-[16px] text-[#BFB7B9] text-center lg:text-start">
            Privacy Policy
          </p>
        </Link>
        <Link href="/terms-condition">
          <p className="text-[16px] text-[#BFB7B9] text-center lg:text-start">
            Terms & Condition
          </p>
        </Link>
      </div>
    </div>
  );
};

export default OtherPages;

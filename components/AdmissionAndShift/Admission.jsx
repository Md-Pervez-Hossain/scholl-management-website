import Link from "next/link";
import React from "react";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

const Admission = () => {
  return (
    <div className="   bg-[#40282C] rounded-md my-16">
      <div className="text-center lg:p-16 px-5 py-10 text-white">
        <Title>Admission</Title>
        <Paragraph className="mb-5 text-grayText">
          Time to register for school is now! complete online registration for
          new and returning students. Our office is open to assist you with the
          admission process.
        </Paragraph>
        <Link href="/admission">
          <PrimaryButton className="bg-white border-2 border-white px-6 py-2 rounded  text-white">
            Apply Now
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Admission;

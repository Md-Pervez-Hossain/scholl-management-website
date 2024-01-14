import React from "react";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

const About = () => {
  return (
    <div>
      <h2 className="text-[18px] font-[600] mb-3 text-center lg:text-start ">
        About
      </h2>
      <Paragraph className="text-center lg:text-start">
        Mosharraf Hossain School and College is an all-girls educational
        institute in Baily Road, Dhaka, Bangladesh.
      </Paragraph>
      <div className="mt-5">
        <h2 className="text-[18px] font-[600] mb-3  text-center lg:text-start">
          Mosharraf Hossain
        </h2>
        <Paragraph className="text-center lg:text-start">
          {" "}
          Chairman & Founder Mosharraf Hossain School and College
        </Paragraph>
      </div>
    </div>
  );
};

export default About;

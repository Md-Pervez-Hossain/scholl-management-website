import Image from "next/image";
import React from "react";
import morningShift from "../../../assets/morningShift.png";
import Title from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";

const SchoolMorningShift = () => {
  return (
    <div
      className=" grid lg:grid-cols-2 gap-10 items-center  my-5  "
      id="SchoolMorningShift"
    >
      <div>
        <Title>Morning shift</Title>
        <Paragraph>
          Teacher portals often include tools for lesson planning, allowing
          educators to create and organize lesson plans, resources, and
          assessments. Many teacher portals provide gradebook and grade
          management tools, allowing educators to record grades, calculate
          averages, and track
        </Paragraph>
      </div>
      <div>
        <div className="relative">
          <div className="overflow-hidden group rounded-md">
            <Image
              src={morningShift}
              style={{ objectFit: "contain" }}
              width={1000}
              alt=""
              className="imageHover"
            />
          </div>
          <h2 className=" absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-[32px] text-[18px]  font-[500]">
            Morning Shift
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SchoolMorningShift;

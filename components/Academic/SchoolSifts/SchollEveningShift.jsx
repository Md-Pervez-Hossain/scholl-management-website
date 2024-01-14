import Image from "next/image";
import React from "react";
import EveningPic from "../../../assets/eveningShift.png";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";

const SchollEveningShift = () => {
  return (
    <div
      id="SchoolEveningShift"
      className="grid lg:grid-cols-2 gap-10 items-center lg:my-16 my-5 "
    >
      <div className="relative  ">
        <div className="overflow-hidden group rounded-md">
          <Image
            src={EveningPic}
            style={{ objectFit: "contain" }}
            width={1000}
            height={1000}
            alt=""
            className="imageHover"
          />
        </div>
        <span className="divCenter lg:text-[32px] text-[18px]">
          Evening Shift
        </span>
      </div>
      <div>
        <Title>Evening shift</Title>
        <Paragraph>
          Teacher portals often include tools for lesson planning, allowing
          educators to create and organize lesson plans, resources, and
          assessments. Many teacher portals provide gradebook and grade
          management tools, allowing educators to record grades, calculate
          averages, and track
        </Paragraph>
      </div>
    </div>
  );
};

export default SchollEveningShift;

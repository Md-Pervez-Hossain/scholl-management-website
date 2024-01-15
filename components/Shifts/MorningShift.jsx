import React from "react";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

const MorningShift = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center border border-gray-200 lg:py-16 py-4 px-8 rounded-lg  ">
      <Title>Morning Shift</Title>
      <Paragraph className="mb-5">
        Teacher portals often include tools for lesson planning, allowing
        educators to create and organize lesson plans, resources, and
        assessments.
      </Paragraph>
      <PrimaryButton>View Details</PrimaryButton>
    </div>
  );
};

export default MorningShift;

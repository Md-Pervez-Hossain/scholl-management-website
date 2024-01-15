import React from "react";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

const EveningShift = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center border border-gray-200 lg:py-16 py-4 lg:px-8 px-2 rounded-lg ">
      <Title>Evening Shift</Title>
      <Paragraph className="mb-5">
        Teacher portals often include tools for lesson planning, allowing
        educators to create and organize lesson plans, resources, and
        assessments.
      </Paragraph>
      <PrimaryButton>View Details</PrimaryButton>
    </div>
  );
};

export default EveningShift;

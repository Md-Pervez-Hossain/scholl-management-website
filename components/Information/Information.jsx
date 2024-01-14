"use client";
import Image from "next/image";
import React from "react";
import AcademicInfo from "../../assets/academic-info.png";
import AdmissionInfo from "../../assets/admission-info.png";
import Rules from "../../assets/rules.png";
import ClassSixSyllabusPic from "../../assets/teacher.svg";
import PrimaryButton from "../Share/Button/PrimaryButton";
import Title from "../ui/Title";
import Heading from "../ui/Heading";

const Information = () => {
  const handleSyllabusDownload = (syllabus) => {
    console.log(syllabus);
    const aTag = document.createElement("a");
    aTag.href = syllabus.src;
    aTag.setAttribute("download", syllabus.src);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="lg:my-16 my-5 ">
      <Title className="text-center">Information</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative z-0 overflow-hidden group rounded-md">
          <Image
            style={{ objectFit: "contain" }}
            width={1000}
            alt=""
            src={AdmissionInfo}
            className=" rounded-md imageHover"
          />
          <div className="divCenter">
            <Heading>Admission Info</Heading>
            <PrimaryButton
              onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)}
              className="border-2 border-white lg:px-4 lg:py-2 py-1 px-2 text-[13px] lg:text-base rounded-md bg-transparent"
            >
              Get PDF
            </PrimaryButton>
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-md">
          <Image
            style={{ objectFit: "contain" }}
            width={1000}
            alt=""
            src={AcademicInfo}
            className=" rounded-md imageHover"
          />
          <div className="divCenter">
            <Heading>Academic info</Heading>
            <PrimaryButton
              onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)}
              className="border-2 border-white lg:px-4 lg:py-2 py-1 px-2 text-[13px] lg:text-base rounded-md bg-transparent"
            >
              Get PDF
            </PrimaryButton>
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-md">
          <Image
            style={{ objectFit: "contain" }}
            width={1000}
            alt=""
            src={Rules}
            className=" rounded-md imageHover"
          />
          <div className="divCenter">
            <Heading>Rules & Regulation</Heading>
            <PrimaryButton
              onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)}
              className="border-2 border-white lg:px-4 lg:py-2 py-1 px-2 text-[13px] lg:text-base rounded-md bg-transparent"
            >
              Get PDF
            </PrimaryButton>
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-md">
          <Image
            style={{ objectFit: "contain" }}
            width={1000}
            alt=""
            src={AdmissionInfo}
            className=" rounded-md imageHover"
          />
          <div className="divCenter">
            <Heading>Admission Info</Heading>
            <PrimaryButton
              onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)}
              className="border-2 border-white lg:px-4 lg:py-2 py-1 px-2 text-[13px] lg:text-base rounded-md bg-transparent"
            >
              Get PDF
            </PrimaryButton>
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-md">
          <Image
            style={{ objectFit: "contain" }}
            width={1000}
            alt=""
            src={AcademicInfo}
            className=" rounded-md imageHover"
          />
          <div className="divCenter">
            <Heading>Academic info</Heading>
            <PrimaryButton
              onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)}
              className="border-2 border-white lg:px-4 lg:py-2 py-1 px-2 text-[13px] lg:text-base rounded-md bg-transparent"
            >
              Get PDF
            </PrimaryButton>
          </div>
        </div>
        <div className="relative overflow-hidden group rounded-md">
          <Image
            style={{ objectFit: "contain" }}
            width={1000}
            alt=""
            src={Rules}
            className=" rounded-md imageHover"
          />
          <div className="divCenter">
            <Heading>Rules & Regulation</Heading>
            <PrimaryButton
              onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)}
              className="border-2 border-white lg:px-4 lg:py-2 py-1 px-2 text-[13px] lg:text-base rounded-md bg-transparent"
            >
              Get PDF
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

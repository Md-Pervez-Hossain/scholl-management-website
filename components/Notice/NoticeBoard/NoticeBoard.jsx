import React from "react";
import noticePic from "../../../assets/noticePic.png";
import Image from "next/image";
import Slider from "./Slider";
import Title from "@/components/ui/Title";

const NoticeBoard = () => {
  return (
    <div
      id="NoticeBoard"
      className=" py-16 bg-[#FBC531] rounded lg:p-16 p-5  grid grid-cols-3  gap-5 items-center"
    >
      <div className=" col-span-3 lg:col-span-1 p-3">
        <Title>Our Notice Board</Title>
        <Image style={{ objectFit: "contain" }} src={noticePic} alt="" />
      </div>
      <div className=" col-span-3 lg:col-span-2 px-5">
        <Slider />
      </div>
    </div>
  );
};

export default NoticeBoard;

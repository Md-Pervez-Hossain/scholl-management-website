import Image from "next/image";
import React from "react";
import ChairmanPic from "../../assets/chairman.png";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
const Chairman = () => {
  return (
    <div className=" grid lg:grid-cols-2 gap-10 lg:my-16 my-5 items-center">
      <div className=" overflow-hidden group rounded-md">
        <Image
          style={{ objectFit: "contain" }}
          width={1000}
          alt=""
          src={ChairmanPic}
          className="imageHover"
        />
      </div>
      <div>
        <Title>Chairmen Welcome</Title>
        <Paragraph>
          “Welcome to our website. I am honored to be the Chairmen of Mosharraf
          Hossain School & College. I have been entrusted with continuing the
          academic excellence of this School & College and enriching the quality
          of student life.”
        </Paragraph>
      </div>
    </div>
  );
};

export default Chairman;

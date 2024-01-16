import React from "react";
import phoneIcon from "../../assets/phone_icon.svg";
import mailIcon from "../../assets/Mail Icon.svg";
import Image from "next/image";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
const NavigationMenu = () => {
  return (
    <Container>
      <div className=" py-1  hidden lg:flex items-center justify-between flex-wrap gap-10">
        <div className="flex items-center flex-wrap gap-5">
          <div className="flex items-center flex-wrap gap-3">
            <Image alt="iamge" src={phoneIcon} width={15} height={15} />
            <Paragraph>+880 1700000000</Paragraph>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <Image alt="" src={mailIcon} width={15} height={15} />
            <Paragraph>mhsc926@gmail.com</Paragraph>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          <Paragraph>School Calendar</Paragraph>
          <Paragraph>Parents Portal</Paragraph>
        </div>
      </div>
    </Container>
  );
};

export default NavigationMenu;

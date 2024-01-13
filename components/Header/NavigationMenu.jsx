import React from "react";
import phoneIcon from "../../assets/phone_icon.svg";
import mailIcon from "../../assets/Mail Icon.svg";
import Image from "next/image";
import Container from "../ui/Container";
const NavigationMenu = () => {
  return (
    <Container className="py-2">
      <div className="  hidden lg:flex items-center justify-between flex-wrap gap-10">
        <div className="flex items-center flex-wrap gap-5">
          <div className="flex items-center flex-wrap gap-3">
            <Image alt="" src={phoneIcon} width={20} height={20} />
            <p className="text-[14px]">+880 1700000000</p>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <Image alt="" src={mailIcon} width={20} height={20} />
            <p className="text-[14px]">mhsc926@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          <p className="text-[14px]">School Calendar</p>
          <p className="text-[14px]">Parents Portal</p>
        </div>
      </div>
    </Container>
  );
};

export default NavigationMenu;

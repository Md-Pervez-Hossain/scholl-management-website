"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/school_logo.png";
import Header from "./Header";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Container from "../ui/Container";
const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#40282C]   sticky -top-2 z-50">
      <Container>
        <div className=" flex  items-center gap-5 justify-between">
          <Image alt="" src={logo} width={70} height={70} />
          <div>
            <div className="hidden lg:flex ">
              <Header />
            </div>
            <div className="lg:hidden flex justify-end px-5 ">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoClose className="text-white text-3xl" />
                ) : (
                  <IoMdMenu className="text-white text-3xl" />
                )}
              </button>
            </div>
            <div
              className={`md:hidden   w-[200px] h-full  text-start    absolute top-0    transition-all duration-500 ease-in-out   ${
                isOpen ? "left-0" : "-left-[250px]"
              }`}
            >
              <Header />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResponsiveHeader;

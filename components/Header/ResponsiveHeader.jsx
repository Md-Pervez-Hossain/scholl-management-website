"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/school_logo.png";
import Header from "./Header";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Container from "../ui/Container";
import Link from "next/link";
import MobileHeader from "./MobilHeader";
const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#40282C]   sticky -top-[8px] z-50 py-4">
      <Container>
        <div className=" flex  items-center gap-5 justify-between">
          <Link href="/">
            <Image
              alt=""
              src={logo}
              className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
            />
          </Link>
          <div>
            <div className="hidden lg:flex ">
              <Header />
            </div>
            <div className="lg:hidden flex justify-end lg:px-5 ">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <IoClose className="text-white text-3xl" />
                ) : (
                  <IoMdMenu className="text-white text-3xl" />
                )}
              </button>
            </div>
            <div
              className={`md:hidden   w-[200px]  h-screen  text-start  bg-primary  absolute top-0    transition-all duration-500 ease-in-out   ${
                isOpen ? "left-0" : "-left-[250px]"
              }`}
            >
              <MobileHeader setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResponsiveHeader;

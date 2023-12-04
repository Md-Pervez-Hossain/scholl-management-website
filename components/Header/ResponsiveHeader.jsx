"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import logo from "../../assets/school_logo.png"
import Header from './Header';
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-[#40282C] py-5  '>
      <div className='lg:w-11/12  xl:w-9/12 px-5 lg:px-0 mx-auto flex  items-center gap-5 justify-between'>
        <Image alt="" src={logo} width={70} height={70} />
        <div>
          <div className="hidden lg:flex ">
            <Header />
          </div>
          <div className='lg:hidden flex justify-end '>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <IoClose className='text-white text-3xl' /> : <IoMdMenu className='text-white text-3xl' />}</button>
          </div>
          <div className={`md:hidden bg-[#40282C]  w-[200px] h-full  text-start py-10 px-5  absolute top-0   text-white transition-all duration-500 ease-in-out   ${isOpen ? "left-0" : "-left-[250px]"}`}>
            <Header />
          </div>
        </div>



      </div>
    </div>
  );
};

export default ResponsiveHeader;
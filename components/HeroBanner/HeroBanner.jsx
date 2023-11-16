import Image from 'next/image';
import React from 'react';
import Banner from "../../assets/hero-banner.png"
const HeroBanner = () => {
  return (
    <>
      <div className='relative'>
        <Image src={Banner} sizes="(max-width: 768px) 100vw, 33vw" alt='' />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className='lg:text-[50px] text-[18px]  font-[600]'>Mosharraf Hossain School & College</h2>
        <button className='bg-[#40282C] px-6 py-3 rounded-lg lg:text-[24px] text-[16px] mt-5'>About us</button>
      </div>
    </>

  );
};

export default HeroBanner;
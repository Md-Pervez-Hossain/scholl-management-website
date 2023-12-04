import Image from 'next/image';
import React from 'react';
import ChairmanPic from '../../assets/chairman.png'
const Chairman = () => {
  return (
    <div className=' lg:w-11/12 xl:w-9/12 px-5 lg:px-0 mx-auto grid lg:grid-cols-2 gap-10 my-16 items-center'>
      <div>
        <Image style={{ objectFit: "contain" }} width={1000} alt='' src={ChairmanPic} className=' rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
      </div>
      <div>
        <h2 className='text-[32px] font-[600] mb-5 '>Chairmen Welcome</h2>
        <p className='text-[#BFB7B9] leading-[28px]'>“Welcome to our website. I am honored to be the Chairmen of Mosharraf Hossain School & College. I have been entrusted
          with continuing the academic excellence of this School & College and enriching  the quality of  student life.”</p>
      </div>
    </div>
  );
};

export default Chairman;
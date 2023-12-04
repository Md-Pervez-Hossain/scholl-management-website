import Image from 'next/image';
import React from 'react';
import ChairmanPic from "../../../assets/chairman.png"

const ChairmanMessage = () => {
  return (
    <div className='md:w-9/12 px-5 md:px-0 mx-auto my-16 grid lg:grid-cols-2 gap-10 '>
      <div className='text-center'>
        <Image sizes="(max-width: 768px) 100vw, 33vw" alt='' src={ChairmanPic} className=' rounded-md' />
        <div className='mt-5'>
          <h2 className='text-[24px] font-[500]'>Md. Mosharraf Hossain</h2>
          <p>Chairman & Founder </p>
          <p>Mosharraf Hossain School and College</p>
        </div>
      </div>
      <div>
        <h2 className='text-[24px] font-[600] mb-5'>Message From Chairman</h2>
        <p className='text-[#BFB7B9] mb-2'>Mosharraf Hossain School and College is an all-girls
          educational institute in Baily Road, Dhaka, Bangladesh.
          It has 4 campuses and around 25,000 students. Mosharraf
          Hossain School and College is one of the renowned educational
          institutes in Bangladesh. We consider every child as unique
          and so we maintain inclusive learning-teaching environment
          at every step in our great set-up. It is a fact now that our
          results are getting better in the public examinations every time.
          It has been made possible through our extensive and effective
          care stretched out to every individual student. Our students
          conglomerate here from multifarious backgrounds; various strata
          of the society...</p>
        <div className='text-[#BFB7B9]'>
          <h2 className='font-[500]'>Md. Mosharraf Hossain</h2>
          <p>Chairman & Founder </p>
          <p>Mosharraf Hossain School and College</p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
import Image from 'next/image';
import React from 'react';
import morningShift from "../../../assets/morningShift.png"

const SchoolMorningShift = () => {
  return (
    <div className='lg:w-11/12 px-5 lg:px-0 xl:w-9/12 mx-auto grid lg:grid-cols-2 gap-10 items-center  my-5  ' id="SchoolMorningShift">
      <div >
        <h2 className='  text-[#40282C] text-[32px] font-[500]  mb-5 ' >Morning shift</h2>
        <p className='' >Teacher portals often include tools for lesson planning, allowing educators to create and organize lesson plans, resources, and assessments.
          Many teacher portals provide gradebook and grade management tools, allowing educators to record grades, calculate averages, and track</p>
      </div>
      <div>
        <div className='relative'>
          <Image src={morningShift} style={{ objectFit: "contain" }} width={1000} alt='' className='rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
          <h2 className=' absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-[32px] text-[18px]  font-[500]'>
            Morning Shift
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SchoolMorningShift;
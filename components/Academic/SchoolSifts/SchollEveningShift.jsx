import Image from 'next/image';
import React from 'react';
import EveningPic from "../../../assets/eveningShift.png"

const SchollEveningShift = () => {
  return (
    <div className='grid md:grid-cols-2 gap-10 items-center rounded-e-md border border-[#40282C]'>

      <div className='relative'>
        <Image src={EveningPic} sizes="(max-width: 768px) 100vw, 33vw" alt='' />
        <h2 className=' absolute  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-[32px]  font-[500]'>
          Evening Shift
        </h2>
      </div>
      <div className=''>
        <h2 className='text-[#40282C] text-[32px] font-[500]   mb-5' >Evening shift</h2>
        <p>Teacher portals often include tools for lesson planning, allowing educators to create and organize lesson plans, resources, and assessments.
          Many teacher portals provide gradebook and grade management tools, allowing educators to record grades, calculate averages, and track</p>
      </div>

    </div>
  );
};

export default SchollEveningShift;
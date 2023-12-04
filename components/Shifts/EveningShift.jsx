import React from 'react';
import PrimaryButton from '../Share/Button/PrimaryButton';

const EveningShift = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center border border-[#40282C] py-16 px-8 rounded hover:bg-[#40282C]  transition-all duration-700 hover:text-white cursor-pointer'>
      <h2 className="text-[18px] font-[600] mb-3 ">Evening Shift</h2>
      <p className='mb-5'>
        Teacher portals often include tools for lesson planning,
        allowing educators to create and organize lesson plans,
        resources, and assessments.
      </p>
      <PrimaryButton className="border-2 birder-white">View Details</PrimaryButton>
    </div>
  );
};

export default EveningShift;
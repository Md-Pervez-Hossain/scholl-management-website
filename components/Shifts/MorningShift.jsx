import React from 'react';

const MorningShift = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center border border-[#40282C] py-16 px-8 rounded'>
      <h2 className="text-[18px] font-[600] mb-3 ">Morning Shift</h2>
      <p className='mb-5'>
        Teacher portals often include tools for lesson planning,
        allowing educators to create and organize lesson plans,
        resources, and assessments.
      </p>
      <button className='bg-[#40282C] px-6 py-3 text-white rounded'>View Details</button>
    </div>
  );
};

export default MorningShift;
import React from 'react';
import MorningShift from './MorningShift';
import EveningShift from './EveningShift';

const Shifts = () => {
  return (
    <div className='lg:w-11/12 xl:w-9/12 px-5 lg:px-0 mx-auto grid md:grid-cols-2 gap-5 my-16 '>
      <MorningShift />
      <EveningShift />
    </div>
  );
};

export default Shifts;
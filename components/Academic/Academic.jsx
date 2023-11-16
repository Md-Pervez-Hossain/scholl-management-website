import React from 'react';
import SchoolMorningShift from './SchoolSifts/SchoolMorningShift';
import SchollEveningShift from './SchoolSifts/SchollEveningShift';
import UpComingEvents from './UpComingEvents/UpComingEvents';


const Academic = () => {
  return (
    <div className='md:w-9/12 px-5 md:px-0 mx-auto  my-16 '>
      <SchoolMorningShift />
      <SchollEveningShift />
      <UpComingEvents />
    </div>
  );
};

export default Academic;
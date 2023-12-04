import React from 'react';
import SchoolMorningShift from './SchoolSifts/SchoolMorningShift';
import SchollEveningShift from './SchoolSifts/SchollEveningShift';
import UpComingEvents from './UpComingEvents/UpComingEvents';
import Calender from './Calender/Calender';


const Academic = () => {
  return (
    <div className=' '>
      <div className='my-16'>
        <SchoolMorningShift />
        <SchollEveningShift />
      </div>
      <Calender />
      <UpComingEvents />
    </div>
  );
};

export default Academic;
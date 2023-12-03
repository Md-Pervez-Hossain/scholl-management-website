import React from 'react';
import phoneIcon from "../../assets/phone_icon.svg"
import mailIcon from "../../assets/Mail Icon.svg"
import Image from 'next/image'
const NavigationMenu = () => {
  return (
    <div className=''>
      <div className='w-9/12 mx-auto py-4 flex items-center justify-between flex-wrap gap-10'>
        <div className='flex items-center flex-wrap gap-5'>
          <div className='flex items-center flex-wrap gap-3'>
            <Image alt='' src={phoneIcon} width={20} height={20} />
            <p>+880 1700000000</p>
          </div>
          <div className='flex items-center flex-wrap gap-3'>
            <Image alt='' src={mailIcon} width={20} height={20} />
            <p>mhsc926@gmail.com</p>
          </div>
        </div>
        <div className='flex items-center flex-wrap gap-5'>
          <p>School Calendar</p>
          <p>Parents Portal</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
import React from 'react';
import noticePic from '../../../assets/noticePic.png'
import Image from 'next/image';
import Slider from './Slider';

const NoticeBoard = () => {
  return (
    <div id="NoticeBoard" className='md:w-9/12 mx-auto my-16 bg-[#FBC531] rounded lg:p-16 p-5  grid grid-cols-3  gap-5 items-center'>
      <div className=' col-span-3 lg:col-span-1'>
        <h2 className='text-[32px] font-[500]'>Our Notice Board</h2>
        <Image style={{ objectFit: "contain" }} src={noticePic} alt="" />
      </div>
      <div className=' col-span-3 lg:col-span-2'>
        <Slider />
      </div>
    </div>
  );
};

export default NoticeBoard;
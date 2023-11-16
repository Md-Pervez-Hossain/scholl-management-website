import React from 'react';
import noticePic from '../../../assets/noticePic.png'
import Image from 'next/image';
import Slider from './Slider';

const NoticeBoard = () => {
  return (
    <div className='w-9/12 mx-auto my-16 bg-[#FBC531] rounded px-16 py-16 grid md:grid-cols-3 gap-10 items-center'>
      <div className='md:col-span-1'>
        <h2 className='text-[32px] font-[500]'>Our Notice Board</h2>
        <Image width={250} height={200} src={noticePic} alt="" />
      </div>
      <div className=' col-span-3 md:col-span-2'>
        <Slider />
      </div>
    </div>
  );
};

export default NoticeBoard;
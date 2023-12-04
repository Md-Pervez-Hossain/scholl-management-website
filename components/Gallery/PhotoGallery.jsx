import React from 'react';
import img1 from "../../assets/photo-galery1.png"
import img2 from "../../assets/photo-galery2.png"
import img3 from "../../assets/photo-galery3.png"
import img4 from "../../assets/photo-galery4.png"
import img5 from "../../assets/photo-galery5.png"
import img6 from "../../assets/photo-galery6.png"

import Image from 'next/image';

const PhotoGallery = () => {
  return (
    <div id="PhotoGallary" className=' lg:w-11/12 px-5 lg:px-0 xl:w-9/12 mx-auto  my-16'>
      <h2 className='text-[32px] font-[600] mb-5 text-center'>Photo Gallery</h2>
      <div className='grid md:grid-cols-4 gap-5'>
        <div>
          <Image src={img1} sizes="(max-width: 768px) 100vw, 33vw" alt='' className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
        </div>
        <div>
          <Image src={img2} sizes="(max-width: 768px) 100vw, 33vw" alt='' className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
        </div>
        <div className='col-span-2'>
          <Image src={img3} sizes="(max-width: 768px) 100vw, 33vw" alt='' className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
        </div>
        <div>
          <Image src={img4} sizes="(max-width: 768px) 100vw, 33vw" alt='' className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
        </div>
        <div className='col-span-2'>
          <Image src={img5} sizes="(max-width: 768px) 100vw, 33vw" alt='' className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
        </div>
        <div>
          <Image src={img6} sizes="(max-width: 768px) 100vw, 33vw" alt='' className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

import Image from 'next/image';
import React from 'react';
import AcademicInfo from "../../assets/academic-info.png"
import AdmissionInfo from "../../assets/admission-info.png"
import Rules from "../../assets/rules.png"
const Information = () => {
  return (
    <div className='md:w-9/12 px-5 md:px-0 mx-auto my-16'>
      <h2 className='text-[32px] font-[600] mb-5 text-center'>Information</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} alt='' src={AdmissionInfo} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Admission Info</h2>
            <button className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} alt='' src={AcademicInfo} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Academic info</h2>
            <button className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} alt='' src={Rules} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Rules & Regulation</h2>
            <button className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} alt='' src={AdmissionInfo} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Admission Info</h2>
            <button className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} alt='' src={AcademicInfo} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Academic info</h2>
            <button className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} alt='' src={Rules} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Rules & Regulation</h2>
            <button className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
"use client"
import Image from 'next/image';
import React from 'react';
import AcademicInfo from "../../assets/academic-info.png"
import AdmissionInfo from "../../assets/admission-info.png"
import Rules from "../../assets/rules.png"
import ClassSixSyllabusPic from "../../assets/teacher.svg"

const Information = () => {


  const handleSyllabusDownload = (syllabus) => {
    console.log(syllabus);
    const aTag = document.createElement("a");
    aTag.href = syllabus.src;
    aTag.setAttribute("download", syllabus.src);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className=' lg:w-11/12 xl:w-9/12 px-5 lg:px-0 mx-auto my-16'>
      <h2 className='text-[32px] font-[600] mb-5 text-center'>Information</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} width={1000} alt='' src={AdmissionInfo} className=' rounded-md' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Admission Info</h2>
            <button onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)} className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} width={1000} alt='' src={AcademicInfo} className=' rounded-md' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Academic info</h2>
            <button onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)} className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} width={1000} alt='' src={Rules} className=' rounded-md' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Rules & Regulation</h2>
            <button onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)} className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} width={1000} alt='' src={AdmissionInfo} className=' rounded-md' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Admission Info</h2>
            <button onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)} className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} width={1000} alt='' src={AcademicInfo} className=' rounded-md' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Academic info</h2>
            <button onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)} className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
        <div className='relative'>
          <Image style={{ objectFit: "contain" }} width={1000} alt='' src={Rules} className=' rounded-md' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-[18px] mb-3'>Rules & Regulation</h2>
            <button onClick={() => handleSyllabusDownload(ClassSixSyllabusPic)} className='border-2 border-white px-6 py-2 rounded-md'>Get PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
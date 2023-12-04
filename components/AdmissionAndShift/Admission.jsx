import Link from 'next/link'
import React from 'react';
import PrimaryButton from '../Share/Button/PrimaryButton';

const Admission = () => {
  return (
    <div className='lg:w-11/12 mx-auto xl:w-9/12    bg-[#40282C] rounded-md my-16'>
      <div className='text-center lg:p-16 px-5 py-10 text-white'>
        <h2 className='mb-5'>Admission</h2>
        <p className='mb-5'>
          Time to register for school is now! complete
          online registration for new and returning students.
          Our office is open to assist you with the admission process.</p>
        <Link href='/admission'>
          <PrimaryButton className='bg-white border-2 border-white px-6 py-2 rounded text-[#40282C] hover:text-white'>Apply Now</PrimaryButton>
        </Link>

      </div>
    </div>

  );
};

export default Admission;
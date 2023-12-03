import Link from 'next/link'
import React from 'react';

const Admission = () => {
  return (
    <div className='md:w-9/12 mx-auto bg-[#40282C] py-16 px-5 lg:px-24 text-center text-white rounded-md'>
      <h2 className='mb-5'>Admission</h2>
      <p className='mb-5'>
        Time to register for school is now! complete
        online registration for new and returning students.
        Our office is open to assist you with the admission process.</p>
      <Link href='/admission'><button className='bg-white px-6 py-2 rounded text-[#40282C]'>Apply Now</button></Link>
    </div>
  );
};

export default Admission;
import React from 'react';

const loading = () => {
  return (
    <div className=' h-screen flex items-center justify-center'>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#40282C]"></div>
    </div>
  );
};

export default loading;
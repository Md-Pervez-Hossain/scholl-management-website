import React, { useState } from 'react';
import Image from 'next/image'
const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file && file instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      // Handle the case where the file is not valid or empty
      console.error('Invalid file selected.');
    }
  };

  return (

    <div className='w-full h-[200px] relative my-5'>
      <label htmlFor='photoUpload' className='cursor-pointer'>
        {image ? (
          <>
            <div className='flex flex-col items-center  justify-center border-2 border-dashed border-[#999] rounded-lg w-full h-[200px]'>
              <div className='relative   '>
                <Image src={image} alt='placeholder' width={320} height={320} />
              </div>
              <button
                onClick={() => setImage(null)}
                className='absolute  bg-white p-2 rounded-md opacity-75'
              >
                Remove
              </button>
            </div>
          </>
        ) : (
          <div className='border-4 border-dashed border-[#999] rounded-lg w-full h-[200px] flex items-center justify-center'>
            <span className='text-gray-500 font-[500]'>Upload  photo</span>
          </div>
        )}
        <input
          onChange={handleImage}
          id='photoUpload'
          type='file'
          name='profile_img'
          accept='image/*'
          className='hidden'

        />
      </label>
    </div>

  );
};

export default ImageUploader;
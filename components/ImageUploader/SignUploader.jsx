
import React, { useState } from 'react';
import Image from 'next/image'
import signPic from "../../assets/sign_uploader.png"
const SignUploader = () => {
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
    <div className='w-full  relative my-5'>
      <label htmlFor='signUpload' className='cursor-pointer'>
        {image ? (
          <>
            <div className='relative   '>
              <Image src={image} alt='placeholder' width={200} height={200} />
            </div>
            <button
              onClick={() => setImage(null)}
              className='absolute top-10 left-14  bg-white p-2 rounded-md opacity-75'
            >
              Remove
            </button>
          </>
        ) : (
          <div className=' w-full'>
            <Image alt='' src={signPic} width={300} height={250} />
          </div>
        )}
        <input
          onChange={handleImage}
          id='signUpload'
          type='file'
          name='profile_img'
          accept='image/*'
          className='hidden'

        />
      </label>
    </div>
  );
};

export default SignUploader;
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({

  });
  const handleContact = (values) => {
    console.log(values);
  };
  return (
    <div className='border border-[#999] p-10 rounded-md' >
      <form onSubmit={handleSubmit(handleContact)}>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='flex flex-col'>
            <label className='text-[18px] font-[500] mb-3'>Your Name</label>
            <input  {...register("name", { required: true })} placeholder='Enter Your Name' className='border border-[#999] px-4 py-3 rounded' />
          </div>
          <div className='flex flex-col'>
            <label className='text-[18px] font-[500] mb-3'>Phone Number</label>
            <input  {...register("phone_number", { required: true })} placeholder='Enter Phone Number' className='border border-[#999] px-4 py-3 rounded' />
          </div>
          <div className='flex flex-col'>
            <label className='text-[18px] font-[500] mb-3'>Subject</label>
            <input  {...register("subject", { required: true })} placeholder='Enter Subject' className='border border-[#999] px-4 py-3 rounded' />
          </div>
          <div className='flex flex-col'>
            <label className='text-[18px] font-[500] mb-3'>Email</label>
            <input  {...register("email", { required: true })} placeholder='Enter Subject' type='email' className='border border-[#999] px-4 py-3 rounded' />
          </div>
        </div>
        <div className='flex flex-col my-5'>
          <label className='text-[18px] font-[500] mb-3'>Message</label>
          <textarea  {...register("message", { required: true })} placeholder='Type Your Message' type='text' className='border border-[#999] px-4 py-3 rounded' />
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-[#40282C] px-4 py-3 rounded-md text-white '>Submit Message</button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
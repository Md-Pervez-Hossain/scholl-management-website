"use client"

import { blood_groups, classes, gender, religionArray } from '@/data';
import React from 'react';
import { useForm } from 'react-hook-form';

const ApplicationForm = () => {
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
    <div className='w-9/12 mx-auto my-16'>
      <h2 className='text-[36px] font-[600] text-center my-5'>School Application Form</h2>
      <div className='border border-[#999] p-10 rounded-md' >
        <form onSubmit={handleSubmit(handleContact)}>
          <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Student Name</label>
              <input  {...register("student_name", { required: true })} placeholder='Enter Student Name' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.student_name && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Email Address</label>
              <input type='email'  {...register("email_address", { required: true })} placeholder='Enter Email Address' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.email_address && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Phone Number</label>
              <input type='text'  {...register("phone_number", { required: true })} placeholder='Enter Phone number' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.phone_number && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Date of Birth</label>
              <input type='date'  {...register("dob", { required: true })} placeholder='Enter Phone number' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.dob && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Class Selection</label>
              <select {...register("student_class")} className='border border-[#999] px-4 py-3 rounded'>
                <option value="" selected>Select Your Class</option>
                {
                  classes.map(studetClass => {
                    return (
                      <>
                        <option >{studetClass}</option>
                      </>
                    )
                  })
                }
              </select>
              {
                errors.student_class && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Gender Selection</label>
              <select {...register("gender")} className='border border-[#999] px-4 py-3 rounded'>
                <option value="" selected>Select Your Gender</option>
                {
                  gender.map(gender => {
                    return (
                      <>
                        <option value={gender} >{gender}</option>
                      </>
                    )
                  })
                }
              </select>
              {
                errors.gender && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Blood Group Selection</label>
              <select {...register("blood_group")} className='border border-[#999] px-4 py-3 rounded'>
                <option value="" selected>Select Your Blood Group</option>
                {
                  blood_groups.map(blood => {
                    return (
                      <>
                        <option value={blood} >{blood}</option>
                      </>
                    )
                  })
                }
              </select>
              {
                errors.blood_group && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Religion Selection</label>
              <select {...register("religion")} className='border border-[#999] px-4 py-3 rounded'>
                <option value="" selected>Select Your Religion</option>
                {
                  religionArray.map(religion => {
                    return (
                      <>
                        <option value={religion}>{religion}</option>
                      </>
                    )
                  })
                }
              </select>
              {
                errors.religion && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
          </div>
          <div className='flex flex-col my-5'>
            <label className='text-[18px] font-[500] mb-3'>Message</label>
            <textarea  {...register("message", { required: true })} placeholder='Type Your Message' type='text' className='border border-[#999] px-4 py-3 rounded' />
            {
              errors.message && <p className='text-[#40282C]'>This Field is Required</p>
            }
          </div>

          <h2 className='text-[24px] font-[600] my-5'>Perent’s/Guardian’s Information</h2>
          <div className='grid grid-cols-3 gap-5'>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Father Name</label>
              <input type='text'  {...register("father_name", { required: true })} placeholder='Enter Father Name' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.father_name && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Father Occupation</label>
              <input type='text'  {...register("father_occupation", { required: true })} placeholder='Enter Father Occupation' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.father_occupation && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Phone Number</label>
              <input type='text'  {...register("father_phone_number", { required: true })} placeholder='Enter Phone number' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.father_occupation && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Mother Name</label>
              <input type='text'  {...register("mother_name", { required: true })} placeholder='Enter Mother Name' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.mother_name && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Mother Occupation</label>
              <input type='text'  {...register("mother_occupation", { required: true })} placeholder='Enter Mother Occupation' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.mother_occupation && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-[18px] font-[500] mb-3'>Phone Number</label>
              <input type='text'  {...register("mother_phone_number", { required: true })} placeholder='Enter Phone number' className='border border-[#999] px-4 py-3 rounded' />
              {
                errors.father_occupation && <p className='text-[#40282C]'>This Field is Required</p>
              }
            </div>
          </div>
          <div className='flex items-center justify-center mt-8'>
            <button className='bg-[#40282C] px-4 py-3 rounded-md text-white '>Submit Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
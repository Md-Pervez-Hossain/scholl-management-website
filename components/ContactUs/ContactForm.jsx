"use client";
import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../Share/Button/PrimaryButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({});
  const handleContact = (values) => {
    console.log(values);
  };
  return (
    <div className="border border-[#999] lg:p-10 p-4 rounded-md">
      <form onSubmit={handleSubmit(handleContact)}>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
              className="border border-[#999] px-4 py-3 rounded"
            />
            {errors.name && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Phone Number
            </label>
            <input
              {...register("phone_number", { required: true })}
              placeholder="Enter Phone Number"
              className="border border-[#999] px-4 py-3 rounded"
            />
            {errors.phone_number && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Subject
            </label>
            <input
              {...register("subject", { required: true })}
              placeholder="Enter Subject"
              className="border border-[#999] px-4 py-3 rounded"
            />
            {errors.subject && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter Subject"
              type="email"
              className="border border-[#999] px-4 py-3 rounded"
            />
            {errors.email && (
              <p className="text-[#40282C]">This Field is Required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col my-5">
          <label className="lg:text-[18px] text-[14px] font-[500] mb-2">
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Type Your Message"
            type="text"
            className="border border-[#999] px-4 py-3 rounded"
          />
          {errors.message && (
            <p className="text-[#40282C]">This Field is Required</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton>Submit Message</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

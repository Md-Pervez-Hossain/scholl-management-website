"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

import { Navigation } from "swiper/modules";
const Slider = () => {
  const sliderArray = [
    {
      id: 1,
      title: "Eid ul - Adha",
      date: "11 / 16 / 2023",
      description:
        "In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.",
    },
    {
      id: 2,
      title: "Eid ul - Fitor",
      date: " 12 / 20 / 2023",
      description:
        "In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.",
    },
    {
      id: 2,
      title: "Summer 2024",
      date: "9 / 25 / 2024",
      description:
        "In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.",
    },
  ];

  return (
    <div className=" z-0">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sliderArray?.map((slide) => {
          return (
            <>
              <SwiperSlide>
                <div className="text-center lg:px-16 flex flex-col justify-center items-center bg-white rounded shadow-md lg:py-24 py-5">
                  <h2 className="bg-[#40282C] rounded-md lg:w-36 lg:h-36 w-24 h-16 text-white flex items-center justify-center ">
                    <span className=" flex items-center justify-center  lg:w-32 lg:h-32 w-24 h-16 rounded border-2 border-dashed text-[#FBC531]">
                      {slide.date}
                    </span>
                  </h2>
                  <p className="text-[24px] font-[500] py-3"> {slide.title}</p>
                  <p className="text-[#999]">{slide.description}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;

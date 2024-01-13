"use client";
import Image from "next/image";
import stateBg from "../../assets/state-bg.png";
import "./States.css";
import teacherImage from "../../assets/teacher.svg";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import Container from "../ui/Container";
const States = () => {
  const [counterStage, setCounterStage] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStage(true)}
        onExit={() => setCounterStage(false)}
      >
        <div className=" statesBanner h-[500px] flex items-center justify-center rounded-md ">
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-36 p-5">
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3 overflow-hidden group">
                <Image
                  src={teacherImage}
                  alt=""
                  width={70}
                  height={70}
                  className="imageHover"
                />
              </div>
              <div>
                <h2 className="text-[32px] font-[400] ">
                  {counterStage && <CountUp duration={2} start={0} end={50} />}{" "}
                  +
                </h2>
                <p className="text-[18px] ">Teachers</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                <Image src={teacherImage} alt="" width={70} height={70} />
              </div>
              <div>
                <h2 className="text-[32px] font-[400] ">
                  {counterStage && (
                    <CountUp duration={2} start={0} end={1500} />
                  )}
                  +
                </h2>
                <p className="text-[18px] ">Students</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                <Image src={teacherImage} alt="" width={70} height={70} />
              </div>
              <div>
                <h2 className="text-[32px] font-[400] ">
                  {counterStage && <CountUp duration={2} start={0} end={94} />}{" "}
                  %
                </h2>
                <p className="text-[18px] ">Success</p>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center text-center  text-white">
              <div className="border-2 border-[#999] p-5 rounded-full mb-3">
                <Image src={teacherImage} alt="" width={70} height={70} />
              </div>
              <div>
                <h2 className="text-[32px] font-[400] ">
                  {" "}
                  {counterStage && (
                    <CountUp duration={2} start={0} end={2019} />
                  )}{" "}
                </h2>
                <p className="text-[18px] ">The Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default States;

import Image from 'next/image';
import stateBg from "../../assets/state-bg.png";
import "./States.css"
import teacherImage from "../../assets/teacher.svg"
const States = () => {
  return (
    <>
      <div className=' statesBanner h-[500px] flex items-center justify-center '>
        <div className='w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className=' flex flex-col items-center justify-center text-center  text-white'>
            <div className='border-2 border-[#999] p-5 rounded-full'>
              <Image src={teacherImage} alt='' width={70} height={70} />
            </div>
            <div>
              <h2 className='text-[32px] font-[400] '>50+</h2>
              <p className='text-[18px] '>Teachers</p>
            </div>
          </div>
          <div className=' flex flex-col items-center justify-center text-center  text-white'>
            <div className='border-2 border-[#999] p-5 rounded-full'>
              <Image src={teacherImage} alt='' width={70} height={70} />
            </div>
            <div>
              <h2 className='text-[32px] font-[400] '>50+</h2>
              <p className='text-[18px] '>Teachers</p>
            </div>
          </div>
          <div className=' flex flex-col items-center justify-center text-center  text-white'>
            <div className='border-2 border-[#999] p-5 rounded-full'>
              <Image src={teacherImage} alt='' width={70} height={70} />
            </div>
            <div>
              <h2 className='text-[32px] font-[400] '>50+</h2>
              <p className='text-[18px] '>Teachers</p>
            </div>
          </div>
          <div className=' flex flex-col items-center justify-center text-center  text-white'>
            <div className='border-2 border-[#999] p-5 rounded-full'>
              <Image src={teacherImage} alt='' width={70} height={70} />
            </div>
            <div>
              <h2 className='text-[32px] font-[400] '>50+</h2>
              <p className='text-[18px] '>Teachers</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default States;

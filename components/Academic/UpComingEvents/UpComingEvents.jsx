import Image from 'next/image';
import React from 'react';
import EidulAzha from "../../../assets/eidul-azha.png"
import Ashura from "../../../assets/asuhura.png"
import EidMiladunnobi from "../../../assets/ediamuladunnobi.png"
import VictoryPic from "../../../assets/victory.png"
const UpComingEvents = () => {
  return (
    <div id="UpComingEvents" className='my-16 '>
      <h2 className='text-center text-[32px] font-[600] mb-5'>
        Upcomming Events</h2>

      <div className='border border-[#999] p-8 rounded-lg'>
        <div className='grid lg:grid-cols-4 items-center gap-10  mb-8'>
          <div className='flex items-center  gap-10 col-span-4  lg:col-span-3 '>
            <div>
              <h2 className='text-[60px] font-[600] text-[#FFBF64]'>24</h2>
              <p className='text-[#999] text-[18px]'>Jun</p>
            </div>
            <div>
              <h3 className='text-24px font-[600] mb-3 '>Eid ul - Adha</h3>
              <div className='flex items-center gap-5 mb-3'>
                <div className='flex items-center gap-3 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.7099 15.6798L12.6099 13.8298C12.0699 13.5098 11.6299 12.7398 11.6299 12.1098V8.00977" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span > 8:00 - 5:00 PM</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z" fill="#222222" />
                    <path d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z" fill="#222222" />
                  </svg>
                  <span> 8:00 - 5:00 PM</span>
                </div>
              </div>
              <p className='text-[#999]'>In Bangladesh, Eid ul-Adha is a public holiday, commemorating the test of faith passed by Ibrahim according to the Koran.</p>
            </div>
          </div>
          <div className=' col-span-4 lg:col-span-1'>
            <Image style={{ objectFit: "contain" }} width={1000} alt='' src={EidulAzha} />
          </div>
        </div>

        <div className='grid lg:grid-cols-4 items-center gap-10  mb-8'>
          <div className='flex items-center  gap-10 col-span-4  lg:col-span-3 '>
            <div>
              <h2 className='text-[60px] font-[600] text-[#FFBF64]'>14</h2>
              <p className='text-[#999] text-[18px]'>Aug</p>
            </div>
            <div>
              <h3 className='text-24px font-[600] mb-3 '>Ashura</h3>
              <div className='flex items-center gap-5 mb-3'>
                <div className='flex items-center gap-3 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.7099 15.6798L12.6099 13.8298C12.0699 13.5098 11.6299 12.7398 11.6299 12.1098V8.00977" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span > 8:00 - 5:00 PM</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z" fill="#222222" />
                    <path d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z" fill="#222222" />
                  </svg>
                  <span> 8:00 - 5:00 PM</span>
                </div>
              </div>
              <p className='text-[#999]'>Ashura falls on the tenth day of the Islamic month of Muharram, and is among the most widely and intensely celebrated of holidays in Muslim </p>
            </div>
          </div>
          <div className=' col-span-4 lg:col-span-1'>
            <Image style={{ objectFit: "contain" }} width={1000} alt='' src={Ashura} />
          </div>
        </div>
        <div className='grid lg:grid-cols-4 items-center gap-10  mb-8'>
          <div className='flex items-center  gap-10 col-span-4  lg:col-span-3 '>
            <div>
              <h2 className='text-[60px] font-[600] text-[#FFBF64]'>15</h2>
              <p className='text-[#999] text-[18px]'>Dec</p>
            </div>
            <div>
              <h3 className='text-24px font-[600] mb-3 '>Eid-e-Milad un-Nabi</h3>
              <div className='flex items-center gap-5 mb-3'>
                <div className='flex items-center gap-3 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.7099 15.6798L12.6099 13.8298C12.0699 13.5098 11.6299 12.7398 11.6299 12.1098V8.00977" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span > 8:00 - 5:00 PM</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z" fill="#222222" />
                    <path d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z" fill="#222222" />
                  </svg>
                  <span> 8:00 - 5:00 PM</span>
                </div>
              </div>
              <p className='text-[#999]'>Ashura falls on the tenth day of the Islamic month of Muharram, and is among the most widely and intensely celebrated of holidays in Muslim </p>
            </div>
          </div>
          <div className=' col-span-4 lg:col-span-1'>
            <Image style={{ objectFit: "contain" }} width={1000} alt='' src={EidMiladunnobi} />
          </div>
        </div>
        <div className='grid lg:grid-cols-4 items-center gap-10  mb-8'>
          <div className='flex items-center  gap-10 col-span-4  lg:col-span-3 '>
            <div>
              <h2 className='text-[60px] font-[600] text-[#FFBF64]'>16</h2>
              <p className='text-[#999] text-[18px]'>Dec</p>
            </div>
            <div>
              <h3 className='text-24px font-[600] mb-3 '>Victory Day</h3>
              <div className='flex items-center gap-5 mb-3'>
                <div className='flex items-center gap-3 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.7099 15.6798L12.6099 13.8298C12.0699 13.5098 11.6299 12.7398 11.6299 12.1098V8.00977" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span > 8:00 - 5:00 PM</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z" fill="#222222" />
                    <path d="M12.0002 22.76C10.5202 22.76 9.03018 22.2 7.87018 21.09C4.92018 18.25 1.66018 13.72 2.89018 8.33C4.00018 3.44 8.27018 1.25 12.0002 1.25C12.0002 1.25 12.0002 1.25 12.0102 1.25C15.7402 1.25 20.0102 3.44 21.1202 8.34C22.3402 13.73 19.0802 18.25 16.1302 21.09C14.9702 22.2 13.4802 22.76 12.0002 22.76ZM12.0002 2.75C9.09018 2.75 5.35018 4.3 4.36018 8.66C3.28018 13.37 6.24018 17.43 8.92018 20C10.6502 21.67 13.3602 21.67 15.0902 20C17.7602 17.43 20.7202 13.37 19.6602 8.66C18.6602 4.3 14.9102 2.75 12.0002 2.75Z" fill="#222222" />
                  </svg>
                  <span> 8:00 - 5:00 PM</span>
                </div>
              </div>
              <p className='text-[#999]'>Ashura falls on the tenth day of the Islamic month of Muharram, and is among the most widely and intensely celebrated of holidays in Muslim </p>
            </div>
          </div>
          <div className=' col-span-4 lg:col-span-1'>
            <Image style={{ objectFit: "contain" }} width={1000} alt='' src={VictoryPic} />
          </div>
        </div>

        <div className='flex  items-center justify-center mt-8'>
          <button className='border-2 border-[#999] px-4 py-2 rounded text-[#999]'>View All</button>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;
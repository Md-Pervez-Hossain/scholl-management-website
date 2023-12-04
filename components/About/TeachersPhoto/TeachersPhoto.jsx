import React from 'react';
import img1 from "../../../assets/arif.png"
import img2 from "../../../assets/arif (1).png"
import img3 from "../../../assets/arif (2).png"
import img4 from "../../../assets/arif (3).png"
import img5 from "../../../assets/arif (4).png"
import img6 from "../../../assets/arif (5).png"
import img7 from "../../../assets/arif (6).png"
import img8 from "../../../assets/arif (7).png"
import img9 from "../../../assets/arif (8).png"
import img10 from "../../../assets/arif (9).png"
import img11 from "../../../assets/arif (10).png"
import img12 from "../../../assets/arif (11).png"
import Image from 'next/image';

const TeachersPhoto = () => {
  const teacherPhotoArray = [
    {
      id: 1,
      name: "Siddiqui Nasir Uddin",
      title: "Parents’ Representative (College)",
      img: img1
    },
    {
      id: 2,
      name: "Md.Hamidur Rahman",
      title: "Associate Professor",
      img: img2
    },
    {
      id: 3,
      name: "Md. Matiar Rahman",
      title: "Associate Professor",
      img: img3
    },
    {
      id: 4,
      name: "Minoti Rani Ray",
      title: "Assistant Professor",
      img: img4
    },
    {
      id: 5,
      name: "Jahangir Alam",
      title: "Lecturer",
      img: img5
    },
    {
      id: 6,
      name: "Md. Shahidul Islam",
      title: "Lecturer",
      img: img6
    },
    {
      id: 7,
      name: "Anjum Ara Begum",
      title: "Lecturer",
      img: img7
    },
    {
      id: 8,
      name: "Shamima Akhter",
      title: "Lecturer",
      img: img8
    },
    {
      id: 9,
      name: "Md. Abu Sayem",
      title: "Lecturer",
      img: img9
    },
    {
      id: 10,
      name: "Md. Nasim Rahman",
      title: "Lecturer",
      img: img10
    },
    {
      id: 11,
      name: "Md. Swapan Miah",
      title: "Lecturer",
      img: img11
    },
    {
      id: 12,
      name: "Md. Rafiul Alam",
      title: "Lecturer",
      img: img12
    },
  ]

  return (
    <div className='md:w-9/12 px-5 md:px-0 mx-auto my-16'>
      <h2 className='text-[32px] font-[600] text-center mb-8'>Teachers Photo</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
        {
          teacherPhotoArray?.map(photo => {
            return (
              <>
                <div className='text-center' >
                  <Image alt='' style={{ objectFit: "contain" }} width={1000} src={photo.img} className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer ' />
                  <h3 className='text-[18px] font-[500] mt-2'>{photo?.name}</h3>
                  <h3 >{photo?.title}</h3>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default TeachersPhoto;
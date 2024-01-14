import React from "react";
import img1 from "../../assets/galary-1.png";
import img2 from "../../assets/galary-2.png";
import img3 from "../../assets/galary-3.png";
import img4 from "../../assets/galary-4.png";
import img5 from "../../assets/galary-5.png";
import img6 from "../../assets/galary-6.png";
import img7 from "../../assets/galary-7.png";
import img8 from "../../assets/galary-8.png";
import img9 from "../../assets/galary-9.png";
import Image from "next/image";

const images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
  {
    id: 9,
    img: img9,
  },
];
const Gallery = () => {
  return (
    <div>
      <h2 className="text-[18px] font-[600] mb-3 text-center lg:flex ">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-3 gap-5 lg:gap-4">
        {images?.map((img) => {
          return (
            <>
              <div className=" overflow-hidden rounded-md group">
                <Image
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt=""
                  src={img.img}
                  className="imageHover"
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

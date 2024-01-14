import React from "react";
import img1 from "../../assets/photo-galery1.png";
import img2 from "../../assets/photo-galery2.png";
import img3 from "../../assets/photo-galery3.png";
import img4 from "../../assets/photo-galery4.png";
import img5 from "../../assets/photo-galery5.png";
import img6 from "../../assets/photo-galery6.png";

import Image from "next/image";
import Title from "../ui/Title";
import Container from "../ui/Container";

const PhotoGallery = () => {
  return (
    <div id="PhotoGallary" className=" lg:my-16 my-5">
      <Title className="text-center">Photo Galler</Title>
      <div className="grid md:grid-cols-4 gap-5">
        <div className=" overflow-hidden rounded-md group">
          <Image
            src={img1}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="imageHover"
          />
        </div>
        <div className=" overflow-hidden rounded-md group">
          <Image
            src={img2}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="imageHover"
          />
        </div>
        <div className="col-span-2  overflow-hidden rounded-md group">
          <Image
            src={img3}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="imageHover"
          />
        </div>
        <div className="overflow-hidden rounded-md group">
          <Image
            src={img4}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="imageHover"
          />
        </div>
        <div className="col-span-2 overflow-hidden rounded-md group">
          <Image
            src={img5}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="imageHover"
          />
        </div>
        <div className="overflow-hidden rounded-md group">
          <Image
            src={img6}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="imageHover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

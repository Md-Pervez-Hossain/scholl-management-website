import React from "react";
import Gallery from "../Gallery/Gallery";
import About from "./About";
import Contact from "./Contact";
import SocialAccount from "./SocialAccount";
import OtherPages from "./OtherPages";

const Footer = () => {
  return (
    <div className=" bg-[#40282C]">
      <div className="md:w-9/12 px-5 md:px-0 mx-auto text-white py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <SocialAccount />
          <OtherPages />
        </div>
      </div>
    </div>
  );
};

export default Footer;

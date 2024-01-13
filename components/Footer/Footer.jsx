import React from "react";
import Gallery from "../Gallery/Gallery";
import About from "./About";
import Contact from "./Contact";
import SocialAccount from "./SocialAccount";
import OtherPages from "./OtherPages";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <div className=" bg-primary">
      <Container>
        <div className=" text-white py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <About />
          <Contact />
          <Gallery />
          <div>
            <SocialAccount />
            <OtherPages />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

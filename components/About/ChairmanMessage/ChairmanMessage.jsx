import Image from "next/image";
import React from "react";
import ChairmanPic from "../../../assets/chairman.png";
import Title from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

const ChairmanMessage = () => {
  return (
    <Container>
      <div className=" lg:mt-16 mt-5 grid lg:grid-cols-2 lg:gap-10 gap-5 items-start ">
        <div className="text-center">
          <div className="overflow-hidden rounded-lg group">
            <Image
              sizes="(max-width: 768px) 100vw, 33vw"
              alt=""
              src={ChairmanPic}
              className="imageHover"
            />
          </div>
          <div className="mt-5">
            <Heading>Md. Mosharraf Hossain</Heading>
            <Paragraph>Chairman & Founder</Paragraph>
            <Paragraph>Mosharraf Hossain School and College</Paragraph>
          </div>
        </div>
        <div>
          <Title className="mt-0 text-center lg:text-start">
            Message From Chairman
          </Title>
          <Paragraph className="text-center lg:text-start">
            {" "}
            Mosharraf Hossain School and College is an all-girls educational
            institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses and
            around 25,000 students. Mosharraf Hossain School and College is one
            of the renowned educational institutes in Bangladesh. We consider
            every child as unique and so we maintain inclusive learning-teaching
            environment at every step in our great set-up. It is a fact now that
            our results are getting better in the public examinations every
            time. It has been made possible through our extensive and effective
            care stretched out to every individual student.
          </Paragraph>
          <div className="text-[#BFB7B9] my-3 text-center lg:text-start">
            <h2 className="font-[500]">Md. Mosharraf Hossain</h2>
            <p>Chairman & Founder </p>
            <p>Mosharraf Hossain School and College</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChairmanMessage;

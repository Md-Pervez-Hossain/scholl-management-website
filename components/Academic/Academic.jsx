import React from "react";
import SchoolMorningShift from "./SchoolSifts/SchoolMorningShift";
import SchollEveningShift from "./SchoolSifts/SchollEveningShift";
import UpComingEvents from "./UpComingEvents/UpComingEvents";
import Calender from "./Calender/Calender";
import Container from "../ui/Container";

const Academic = () => {
  return (
    <>
      <Container>
        <div className="lg:my-16 my-5">
          <SchoolMorningShift />
          <SchollEveningShift />
        </div>
        <Calender />
        <UpComingEvents />
      </Container>
    </>
  );
};

export default Academic;

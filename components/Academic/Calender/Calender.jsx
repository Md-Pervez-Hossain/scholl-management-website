"use client"
import React, { useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./Calender.css";
import CalenderPopup from "./CalenderPopup";
const localizer = momentLocalizer(moment);
const Calender = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleSelectEvent = (event) => {
    console.log(event);
    setSelectedEvent(event);
  };
  const handleClosePopup = () => {
    setSelectedEvent(null);
  };
  const calenderInfo = [
    {
      title: "Class Party",
      description: "Gather for a fun-filled celebration.",
      start: moment("2023-12-02T09:00:00").toDate(),
      end: moment("2023-12-02T10:00:00").toDate(),
    },
    {
      title: "Holiday",
      description: "Enjoy a relaxing day off!",
      start: moment("2023-12-03T00:00:00").toDate(),
      end: moment("2023-12-03T00:00:00").toDate(),
    },
    {
      title: "Exam",
      description: "Important examination.",
      start: moment("2023-12-04T13:15:00").toDate(),
      end: moment("2023-12-04T14:30:00").toDate(),
    },
    {
      title: "",
      description: "Placeholder event description.",
      start: moment("2023-12-05T16:00:00").toDate(),
      end: moment("2023-12-05T17:30:00").toDate(),
    },
    {
      title: "",
      description: "Another placeholder event description.",
      start: moment("2023-12-06T08:45:00").toDate(),
      end: moment("2023-12-06T09:30:00").toDate(),
    },
    {
      title: "Exam",
      description: "Important examination.",
      start: moment("2023-12-07T14:00:00").toDate(),
      end: moment("2023-12-07T15:15:00").toDate(),
    },
    {
      title: "",
      description: "Yet another placeholder event.",
      start: moment("2023-12-08T11:30:00").toDate(),
      end: moment("2023-12-08T12:45:00").toDate(),
    },
    {
      title: "",
      description: "Placeholder description.",
      start: moment("2023-12-09T09:30:00").toDate(),
      end: moment("2023-12-09T10:45:00").toDate(),
    },
    {
      title: "",
      description: "A description for another event.",
      start: moment("2023-12-10T13:00:00").toDate(),
      end: moment("2023-12-10T14:00:00").toDate(),
    },
    {
      title: "",
      description: "Description for the last event.",
      start: moment("2023-12-11T15:45:00").toDate(),
      end: moment("2023-12-11T16:30:00").toDate(),
    },
  ];
  const EventDisplay = ({ event }) => (
    <div
      style={{
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>{event.title}</div>
    </div>
  );
  const eventStyleGetter = (event) => {
    const date = new Date(event.start);

    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    if (dayName === "Friday") {
      event.title = "Weekend";
    }
    const styles = {
      Weekend: {
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
      },
      Exam: {
        backgroundColor: "#FFBF64",
        color: "white",
        textAlign: "center",
      },
      "": {
        backgroundColor: "transparent",
      },
    };
    const { backgroundColor, color, textAlign } = styles[event.title] || {};

    return {
      style: {
        backgroundColor,
        color,
        textAlign,
      },
    };
  };


  return (
    <div id="Calender" className="my-16 lg:w-11/12 px-5 lg:px-0 xl:w-9/12 mx-auto" style={{ height: 600 }}>
      <h2 className='text-center text-[32px] font-[600] mb-5'>
        Calender</h2>
      <Calendar
        localizer={localizer}
        events={calenderInfo}
        eventPropGetter={eventStyleGetter}
        defaultView="month"
        views={["month"]}
        onSelectEvent={handleSelectEvent}
        components={{
          event: EventDisplay,
        }}

      />
      {selectedEvent && (
        <CalenderPopup
          event={selectedEvent}
          onClosePopup={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Calender;

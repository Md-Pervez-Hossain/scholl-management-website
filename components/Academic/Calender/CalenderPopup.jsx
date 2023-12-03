import moment from "moment";
import React from "react";


const CalenderPopup = ({ event, onClosePopup }) => {
  console.log(event);
  const date = moment("Sat Dec 02 2023 10:00:00 GMT+0600");
  const formattedDate = date.format("dddd, MMMM DD YYYY HH:mm:ss");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-10 w-[500px] overflow-x-auto overflow-y-auto ">
        <p className=" text-xl font-[500] mb-2 text-black">{event.title}</p>
        <p>{event.description}</p>
        <p>Start: {formattedDate}</p>
        <p>End: {event.end.toString()}</p>
        <div className="flex items-end justify-end my-5">
          <button onClick={onClosePopup}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CalenderPopup;

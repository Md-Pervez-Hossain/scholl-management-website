import React from "react";
import Title from "../ui/Title";
const VideoGallary = () => {
  const videos = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27",
    },
  ];

  return (
    <div id="VideoGallary" className="w-9/12 mx-auto my-16">
      <Title>Video Gallery</Title>
      <div className="grid grid-cols-3 gap-10">
        {videos?.map((video) => {
          return (
            <div key={video?.id}>
              <iframe
                width="350px"
                height="250px"
                src={`${video?.link}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoGallary;

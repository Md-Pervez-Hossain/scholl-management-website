"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const DisplayVideoGallery = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-5">
        {videos.map((video, index) => (
          <div key={index} className="thumbnail-item" onClick={() => handleVideoClick(video)}>
            <Image style={{ objectFit: "contain" }} width={500} height={500} src={video.thumbnail} alt={video.title} />
          </div>
        ))}
      </div>
      <div className="video-player">
        {selectedVideo ? (
          <div>
            <h2>{selectedVideo.title}</h2>
            <iframe
              width="100%"
              height="400"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>Select a video to play</p>
        )}
      </div>
    </div>
  );
};

export default DisplayVideoGallery;


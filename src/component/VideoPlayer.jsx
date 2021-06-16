import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer() {
  return (
    <div className="VideoPlayer">
      <ReactPlayer
        className="reactPlayer"
        muted={true}
        playing={true}
        url="https://youtu.be/-SBsT032jVI"
        loop={true}
        width="100%"
        height="100%"
        controls={false}
      />
    </div>
  );
}

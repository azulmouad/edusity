import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const player = useRef(null);

  function closePlayer(e) {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={videoUrl} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;

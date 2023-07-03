import React from 'react';
import ReactPlayer from 'react-player';

const TrailerPlayer = ({ trailerUrl }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={trailerUrl}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default TrailerPlayer;
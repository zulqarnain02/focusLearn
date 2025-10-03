import React from 'react';
import YouTube from 'react-youtube'; // If you want to use react-youtube
import { extractVideoId } from '../Constants'; // Assuming you have a function to extract video ID

const YouTubeApp = ({ videoId }) => {
  // Determine embed method based on preference: iframe vs. react-youtube
  const useIframe = true; // Set this to true for iframe, false for react-youtube

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1, // Enable autoplay if desired
    },
  };

  return (
    <div className='block'>
      {videoId ? (
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <YouTube videoId={videoId} opts={opts} className="absolute top-0 left-0 w-full h-full" />
        </div>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default YouTubeApp;
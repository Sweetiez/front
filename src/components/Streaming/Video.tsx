import React, { useEffect, useRef } from 'react';
import { Instance } from 'simple-peer';

interface VideoProps {
  peer: Instance;
}

const Video: React.FC<VideoProps> = ({ peer }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    peer.on('stream', (stream) => {
      const video = videoRef.current;

      if (video !== null) {
        video.srcObject = stream;
        video.load();
      }
    });
  }, [peer]);

  return (
    <>
      <video autoPlay playsInline ref={videoRef} />
    </>
  );
};

export default Video;

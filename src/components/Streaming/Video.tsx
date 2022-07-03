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
      video ? (video.srcObject = stream) : console.log('no video found');
    });
  }, [peer]);

  return (
    <>
      <video playsInline autoPlay ref={videoRef} />
    </>
  );
};

export default Video;

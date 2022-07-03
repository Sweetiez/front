import React, {useRef} from 'react';
import '../../../assets/css/streaming.css';
import Room from '../Room';

export const Streaming: React.FC = () => {
  const roomId = useRef<string>('1e136bfc-c4e6-4872-b250-c7f44eaf2391');

  return (
    <>
      <Room roomID={roomId.current} />
    </>
  );
};

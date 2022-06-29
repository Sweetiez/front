import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SimplePeer, { Instance, SignalData } from 'simple-peer';
import '../../assets/css/_carousel.css';
import '../../assets/css/streaming.scss';

enum ConnectionStatus {
  OFFERING,
  RECEIVING,
  CONNECTED,
}

// const webSocketConnection = new WebSocket(process.env.REACT_APP_WEBSOCKET_API_ENDPOINT);

export const Streaming = () => {
  const websocketEndpoint = process.env.REACT_APP_WEBSOCKET_API_ENDPOINT;
  const webSocketConnection = useMemo(
    () => new WebSocket(websocketEndpoint ? websocketEndpoint : ''),
    [websocketEndpoint],
  );
  const videoSelf = useRef<HTMLVideoElement | null>(null);
  const videoCaller = useRef<HTMLVideoElement | null>(null);
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus | null>(null);
  const [offerSignal, setOfferSignal] = useState<SignalData>();
  const [simplePeer, setSimplePeer] = useState<Instance>();

  useEffect(() => {
    webSocketConnection.onmessage = (message: any) => {
      const payload = JSON.parse(message.data);
      if (payload?.type === 'offer') {
        setOfferSignal(payload);
        setConnectionStatus(ConnectionStatus.RECEIVING);
      } else if (payload?.type === 'answer') simplePeer?.signal(payload);
    };
  }, [simplePeer, webSocketConnection]);

  const sendOrAcceptInvitation = (isInitiator: boolean, offer?: SignalData) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(async (mediaStream) => {
        const video = videoSelf.current;
        video!.srcObject = mediaStream;
        await video!.play();

        const sp = new SimplePeer({
          trickle: false,
          initiator: isInitiator,
          stream: mediaStream,
        });

        if (isInitiator) setConnectionStatus(ConnectionStatus.OFFERING);
        else offer && sp.signal(offer);

        sp.on('signal', (data) =>
          webSocketConnection.send(JSON.stringify(data)),
        );
        sp.on('connect', () => setConnectionStatus(ConnectionStatus.CONNECTED));
        sp.on('stream', async (stream) => {
          const video = videoCaller.current;
          video!.srcObject = stream;
          await video!.play();
        });
        setSimplePeer(sp);
      });
  };

  return (
    <div className="web-rtc-page">
      {connectionStatus === null && (
        <button onClick={() => sendOrAcceptInvitation(true)}>CALL</button>
      )}
      {connectionStatus === ConnectionStatus.OFFERING && (
        <div className="loader"></div>
      )}
      {connectionStatus === ConnectionStatus.RECEIVING && (
        <button onClick={() => sendOrAcceptInvitation(false, offerSignal)}>
          ANSWER CALL
        </button>
      )}
      <div className="video-container">
        <video ref={videoSelf} className="video-block" />
        <video ref={videoCaller} className="video-block" />
      </div>
    </div>
  );
};

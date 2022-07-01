import React, { useEffect, useMemo, useRef, useState } from 'react';
import SimplePeer, { Instance, SignalData } from 'simple-peer';
import '../../assets/css/streaming.css';

enum ConnectionStatus {
  OFFERING,
  RECEIVING,
  CONNECTED,
}

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

  const sendOrAcceptInvitation = async (
    isInitiator: boolean,
    offer?: SignalData,
  ) => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const video = videoSelf.current;

      if (!mediaStream || !video) {
        console.log(mediaStream, video);
        return;
      } // todo: display error

      video.srcObject = mediaStream;
      await video.play();

      const sp = new SimplePeer({
        trickle: false,
        initiator: isInitiator,
        stream: mediaStream,
        config: {
          iceServers: [
            { urls: 'stun:stun.siwiorek.fr' },
            {
              urls: 'turn:turn.siwiorek.fr?transport=udp',
              username: 'guest',
              credential: 'somepassword',
            },
          ],
          iceTransportPolicy: 'relay',
        },
      });

      isInitiator
        ? setConnectionStatus(ConnectionStatus.OFFERING)
        : offer && sp.signal(offer);

      sp.on('signal', (data) => webSocketConnection.send(JSON.stringify(data)));
      sp.on('connect', () => setConnectionStatus(ConnectionStatus.CONNECTED));
      sp.on('stream', async (stream) => {
        const video = videoCaller.current;

        if (!mediaStream || !video) {
          console.error(mediaStream, video);
          return;
        } // todo: display error

        video.srcObject = stream;
        await video.play();
      });
      setSimplePeer(sp);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="web-rtc-page">
      {connectionStatus === null && (
        <button
          className="button-call"
          onClick={() => sendOrAcceptInvitation(true)}
        >
          CALL
        </button>
      )}
      {connectionStatus === ConnectionStatus.OFFERING && (
        <div className="loader"></div>
      )}
      {connectionStatus === ConnectionStatus.RECEIVING && (
        <button
          className="button-call"
          onClick={() => sendOrAcceptInvitation(false, offerSignal)}
        >
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

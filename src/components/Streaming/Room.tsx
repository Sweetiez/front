import React, { useEffect, useRef, useState } from 'react';
import SimplePeer, { Instance, SignalData } from 'simple-peer';
import Video from './Video';
import Header from '../Page/Header';
import { Link } from 'react-router-dom';

interface RoomProps {
  roomID: string;
}

interface Message {
  eventName: string;
  data: any;
}

interface PeerWrapper {
  peerID: string;
  peer: Instance;
}

interface SignalWrapper {
  signal: SignalData;
  callerID: string;
}

interface ReceivingSignalWrapper {
  id: string;
  signal: SignalData;
}

const Room: React.FC<RoomProps> = ({ roomID }) => {
  const [peers, setPeers] = useState<Instance[]>([]);

  const userVideo = useRef<HTMLVideoElement | null>(null);
  const peersRef = useRef<PeerWrapper[]>([]);

  const selfSocketID = useRef<string>('');

  const receivingReturnedSignal = (payload: ReceivingSignalWrapper) => {
    const item = peersRef.current.find(
      (wrapper) => wrapper.peerID === payload.id,
    );
    item?.peer.signal(payload.signal);
  };

  useEffect(() => {
    const websocketEndpoint = process.env.REACT_APP_WEBSOCKET_API_ENDPOINT;
    const socket = new WebSocket(websocketEndpoint ? websocketEndpoint : '');
    const createPeer = (
      userToSignal: string,
      callerID: string,
      stream: MediaStream,
    ): Instance => {
      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream,
        config: {
          iceTransportPolicy: 'relay',
          iceCandidatePoolSize: 5,
          iceServers: [
            { urls: 'stun:stun.siwiorek.fr' },
            {
              urls: 'turn:turn.siwiorek.fr?transport=udp',
              username: 'guest',
              credential: 'somepassword',
            },
          ],
        },
      });

      peer.on('signal', (signal: SignalData) => {
        socket.send(
          JSON.stringify({
            eventName: 'send signal',
            data: {
              roomID,
              userToSignal,
              callerID,
              signal,
            },
          }),
        );
      });

      return peer;
    };

    const addPeer = (
      incomingSignal: SignalData,
      callerID: string,
      stream: MediaStream,
    ): Instance => {
      const peer = new SimplePeer({
        initiator: false,
        trickle: false,
        stream,
        config: {
          iceTransportPolicy: 'relay',
          iceCandidatePoolSize: 5,
          iceServers: [
            { urls: 'stun:stun.siwiorek.fr' },
            {
              urls: 'turn:turn.siwiorek.fr?transport=udp',
              username: 'guest',
              credential: 'somepassword',
            },
          ],
        },
      });

      peer.on('signal', (signal: SignalData) => {
        socket.send(
          JSON.stringify({
            eventName: 'return signal',
            data: { roomID, signal, callerID },
          }),
        );
      });

      peer.signal(incomingSignal);

      return peer;
    };

    const retrievePeers = (users: string[], stream: MediaStream) => {
      const peers: Instance[] = [];

      users.forEach((userID: string) => {
        const peer = createPeer(userID, selfSocketID.current, stream);
        peersRef.current.push({
          peerID: userID,
          peer,
        });

        peers.push(peer);
      });

      setPeers(peers);
    };

    const userJoined = (payload: SignalWrapper, stream: MediaStream) => {
      const peer = addPeer(payload.signal, payload.callerID, stream);

      peersRef.current.push({
        peerID: payload.callerID,
        peer,
      });

      setPeers((users) => [...users, peer]);
    };

    const userLeft = (id: string) => {
      // handling user disconnecting
      // finding the id of the peer who just left
      const peerObj = peersRef.current.find((p) => p.peerID === id);
      if (peerObj) {
        peerObj.peer.destroy();
      }

      peersRef.current = peersRef.current.filter((p) => p.peerID !== id);
      const newPeers = peersRef.current.map((el) => el.peer);

      setPeers(newPeers);
    };

    const videoConstraints = {
      height: window.innerHeight / 2,
      width: window.innerWidth / 2,
    };

    socket.onmessage = (message) => {
      const response: Message = JSON.parse(message.data);

      if (response.eventName === 'connected') {
        selfSocketID.current = response.data;
      }
    };

    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        if (!userVideo || !userVideo.current) return;
        userVideo.current.srcObject = stream;

        socket.send(
          JSON.stringify({
            eventName: 'join room',
            data: { roomID, customerID: '' },
          }),
        );

        socket.onmessage = (message) => {
          const response: Message = JSON.parse(message.data);

          if (response.eventName === 'all users') {
            retrievePeers(response.data, stream);
          }

          if (response.eventName === 'user joined') {
            userJoined(response.data, stream);
          }

          if (response.eventName === 'receiving returned signal') {
            receivingReturnedSignal(response.data);
          }

          if (response.eventName === 'user left') {
            userLeft(response.data);
          }
        };
      });
  }, [roomID]);

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <video muted ref={userVideo} autoPlay playsInline controls />
      </div>
      <div className="flex-1 justify-center ">
        <div className="grid grid-cols-3">
          {peers.map((peer, index) => {
            return <Video key={index} peer={peer} />;
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <div className="m-3 py-2 px-4 shadow-md no-underline rounded-full bg-red-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
            <div className="flex justify-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone-off"
              >
                <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
                <line x1="23" y1="1" x2="1" y2="23"></line>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Room;

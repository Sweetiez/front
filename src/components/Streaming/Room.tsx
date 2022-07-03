import React, { useEffect, useRef, useState } from 'react';
import SimplePeer, { Instance, SignalData } from 'simple-peer';
import Video from './Video';

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
  // const websocketEndpoint = process.env.REACT_APP_WEBSOCKET_API_ENDPOINT;
  // const socketRef = useRef<WebSocket>(
  //   new WebSocket(websocketEndpoint ? websocketEndpoint : ''),
  // );

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
          iceServers: [
            { urls: 'stun:stun.siwiorek.fr' },
            {
              urls: [
                'turn:turn.siwiorek.fr?transport=tcp',
                'turn:turn.siwiorek.fr?transport=udp',
              ],
              username: 'guest',
              credential: 'somepassword',
            },
          ],
          iceTransportPolicy: 'relay',
        },
      });

      peer.on('signal', (signal: SignalData) => {
        console.log('offer peer signal detected', signal);

        socket.send(
          // socketRef.current.send(
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
          iceServers: [
            { urls: 'stun:stun.siwiorek.fr' },
            {
              urls: [
                'turn:turn.siwiorek.fr?transport=tcp',
                'turn:turn.siwiorek.fr?transport=udp',
              ],
              username: 'guest',
              credential: 'somepassword',
            },
          ],
          iceTransportPolicy: 'relay',
        },
      });

      peer.on('signal', (signal: SignalData) => {
        console.log('answer peer signal detected', signal);

        socket.send(
          // socketRef.current.send(
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

      console.log("I was here");

      // removing the peer from the arrays and storing remaining peers in new array
      // const peers = peersRef.current.filter((p) => p.peerID !== id);
      // peersRef.current = peers;
      // setPeers((peers) => [...peers]);

      // removing the peer from the arrays and storing remaining peers in new array
      peersRef.current = peersRef.current.filter((p) => p.peerID !== id);
      setPeers((peers) => [...peers]);

      // peersRef.current = peersRef.current.filter(p => p.peerID !== id);
      // setPeers(peersRef.current.map(wrapper => wrapper.peer));
    };

    const videoConstraints = {
      height: window.innerHeight / 2,
      width: window.innerWidth / 2,
    };

    socket.onmessage = (message) => {
      // socketRef.current.onmessage = (message) => {
      const response: Message = JSON.parse(message.data);

      if (response.eventName === 'connected') {
        selfSocketID.current = response.data;
        console.log(selfSocketID.current);
      }

      if (response.eventName === 'user left') {
        console.log(`${response.data}`);
        userLeft(response.data);
      }
    };

    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        if (!userVideo || !userVideo.current) return;
        userVideo.current.srcObject = stream;

        socket.send(
          // socketRef.current.send(
          JSON.stringify({
            eventName: 'join room',
            data: { roomID, customerID: '' },
          }),
        );

        socket.onmessage = (message) => {
          // socketRef.current.onmessage = (message) => {
          const response: Message = JSON.parse(message.data);

          if (response.eventName === 'all users') {
            retrievePeers(response.data, stream);
          }

          if (response.eventName === 'user joined') {
            userJoined(response.data, stream);
          }

          if (response.eventName === 'receiving returned signal') {
            console.log(response.data);
            receivingReturnedSignal(response.data);
          }
        };
      });
  }, [roomID]);

  return (
    <>
      <div>
        <video muted ref={userVideo} autoPlay playsInline />
        {peers.map((peer, index) => {
          return <Video key={index} peer={peer} />;
        })}
      </div>
    </>
  );
};

export default Room;

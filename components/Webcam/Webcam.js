// import data from '@hooks/useData'
// import Comment from '@components/Comment'
// import ComingSoon from '@components/ComingSoon'
// import common from '@styles/common.module.css'
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from './Webcam.module.css'
import Example from "@components/Example";

// export default function Projects() {
//   return (
//     <>
//       <div className={`row ${common.wrapper} ${styles.projects}`}>
//         <div className={`col`}>
//           <Comment text={data.comments.projects} />
//           <ComingSoon rows={2} cols={3} />
//         </div>
//       </div>
//     </>
//   )
// }

export default function Webcam() {
  const router = useRouter()
  // const [mediaStream, setMediaStream] = useState<MediaStream>()
  const [mediaStream, setMediaStream] = useState()
  const videoRef = useRef(null)

  useEffect(() => {
    console.log("** useEffect")
    setupWebcamVideo()
  }, [mediaStream])

  async function setupWebcamVideo() {
    console.log("* setupWebcamVideo")
    if (!mediaStream) {
      await setupMediaStream()
    } else {
      const videoCurr = videoRef.current
      if (!videoCurr) return
      // const video = videoCurr! as HTMLVideoElement
      const video = videoCurr
      if (!video.srcObject) {
        video.srcObject = mediaStream
      }
    }
  }

  async function setupMediaStream() {
    console.log("* setupMediaStream")
    try {
      const ms = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: true })
      console.log({ ms })
      setMediaStream(ms)
      ms.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
      const { close } = peerConnection;
      peerConnection.close = function() {
        console.log("* close")
        localVideo.srcObject = null;

        localStream.getTracks().forEach(track => track.stop());

        return close.apply(this, arguments);
      };
    } catch (e) {
      alert('Camera is disabled')
      throw e
    }
  }

  const signalingChannel = new SignalingChannel(remoteClientId);
  signalingChannel.addEventListener('message', message => {
      // New message from remote client received
      console.log({ message })
  });
  signalingChannel.send('Hello!');

  async function makeCall() {
    const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
    const peerConnection = new RTCPeerConnection(configuration);
    signalingChannel.addEventListener('message', async message => {
        if (message.answer) {
            const remoteDesc = new RTCSessionDescription(message.answer);
            await peerConnection.setRemoteDescription(remoteDesc);
        }
    });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    signalingChannel.send({'offer': offer});
  }

  return (
    <div className={styles.webcam}>
      {/* <video className="h-full w-full mx-auto" ref={videoRef} autoPlay muted /> */}
      <Example />
    </div>
  )
}
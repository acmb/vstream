// import { useState } from "react";
// import Webcam from "@components/Webcam";
// import NoWebcam from "@components/NoWebcam";
import Example from "@components/Example";
import common from '@styles/common.module.css'
import styles from './Main.module.css'

export default function Main() {
  // const [toggleTab, setToggleTab] = useState(false)
//  <div onClick={() => setToggleTab(!toggleTab)}>Toggle webcam</div> 
//   {toggleTab ? (
//       <Webcam />
//   ) : (
//     <>
//       <div className="font-bold mb-10 text-lg">No webcam</div>
//       <NoWebcam />
//     </>
//   )}

  return (
    <>
      <div className={`${styles.main} ${common.wrapper}`}>
        <Example name="MVP" description="Next.js Video Stream to Backend" /> 
      </div>
    </>
  )
}

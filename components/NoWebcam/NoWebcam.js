// import data from '@hooks/useData'
// import Comment from '@components/Comment'
// import ComingSoon from '@components/ComingSoon'
// import common from '@styles/common.module.css'
import { useRef, useState, useEffect } from "react";
import styles from './NoWebcam.module.css'

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

export default function NoWebcam() {
  
  return (
    <div className="w-full h-full relative z-0">
      Webcam disabled.
    </div>
  )
}
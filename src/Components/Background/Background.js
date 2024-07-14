import React, { useRef } from 'react';
import "./Background.css";
import img1 from "../Images/image1.png";
import img2 from "../Images/image2.png";
import img3 from "../Images/image3.png";
import video from "../Images/video1.mp4";




export default function Background({count,playlist,setplaylist}) {
  const player = useRef(null);
  function closerplayer (e){
    if(e.target === player.current){
      setplaylist(false);
      
    }
  }
  if(playlist){
    return(
        <div className='videoplayer' ref={player} onClick={closerplayer}>
            <video src={video} autoPlay muted controls></video>
        </div>

    )
  
  }

 
   else if(count===0){
    return( <div className='background'>
             <img src={img1} alt=''></img>
           </div> )
  }
  else if(count===1){
    return( <div className='background'>
      <img src={img2} alt=''></img>
    </div> )
  }
  else if(count===2){
    return( <div className='background'>
      <img src={img3} alt=''></img>
    </div> )
  }


  
}

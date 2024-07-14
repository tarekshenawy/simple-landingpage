import React from 'react';
import "./Content.css";
import playicon from "../Images/play_icon.png";
import pausicon from "../Images/pause_icon.png";
import rightarrow from "../Images/right-arrow.png";


export default function Content({text,count,setcount,playlist,setplaylist}) {
 
  return (

    <div className='container'>
      <div  className='content'>
          <p>{text.text1}</p>
          <p>{text.text2}</p>
      <button>explore your features <img src={rightarrow} alt=''></img></button>
          <ul>
            <li onClick={()=>setcount(0)} >{count ===0 ?"🟠" :"⚪" }</li>
            <li onClick={()=>setcount(1)}>{count ===1 ? "🟠": "⚪"}</li>
            <li onClick={()=>setcount(2)}>{count ===2 ? "🟠": "⚪" }</li>
          </ul>

      </div>
      <div className='playvideo'>
        <img src={playlist ? pausicon : playicon } alt="" onClick={()=>setplaylist(!playlist)}></img>
      </div>
    
    </div>
    
    

  )
}

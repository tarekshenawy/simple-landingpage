import React, { useState } from 'react';
import "./Navbar.css";
import menuicon from "../Images/menu-icon.png";

export default function Navbar() {

const [mobileicon,setMobileicon]=useState(false);

  function showmenu(){
    mobileicon ? setMobileicon(false):setMobileicon(true);
    console.log("tarek")

  }
  return (
    <nav>
        <h2>Ev-olution</h2>
        <ul className={mobileicon ? "":"hide"}>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
        </ul>
        <img src={menuicon} alt='' className='menuicon' onClick={showmenu}></img>
    </nav>
  )
}

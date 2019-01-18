// This is the Nav

import React from "react";
import Logo from "../../assets/images/pointer.png"

// This is the Nav gets called into app.js
const Nav = (props) =>
 <div id="nav">
  <div className='nav-text logo'>
    <div className="logoDiv">ClickyGame<img id="logo" alt="logo" src={Logo}/></div>
  </div>
  <div className='nav-text'>
      CLICK ANY IMAGE
  </div>
  <div className='nav-text'>
    SCORE: {props.score} | TOP SCORE: 0 
  </div>
  
</div>

export default Nav;
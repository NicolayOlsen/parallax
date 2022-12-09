import React from 'react'
import "./header.css"
import python from "../../assets/python.svg"
import js from "../../assets/js.svg"


const Header = () => {
  return (
    <div className="parallax__header" id="home">
      <div className="parallax__header-content">
        <img src={python} data-value="-5" alt="python" />
        <img src={js} data-value="5" alt="javascript" />
        <img src={python} data-value="-2" alt="python" />
        <img src={python} data-value="6" alt="python" />
        <img src={python} data-value="4" alt="python" />
        <img src={python} data-value="-6" alt="python" />
        <img src={python} data-value="8" alt="python" />
        <img src={python} data-value="-4" alt="python" />
        <img src={python} data-value="5" alt="python" />
        <img src={python} data-value="-9" alt="python" />
        <img src={python} data-value="-5" alt="python" />
        <h1 className="gradient__text" data-value="3" >Parallax</h1>
      </div>
    </div>
  );
}

export default Header;
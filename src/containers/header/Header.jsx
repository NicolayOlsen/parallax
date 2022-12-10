import React from 'react';
import "./header.css"
import python from "../../assets/python.png"
import ts from "../../assets/typescript.png"
import js from "../../assets/javascript.png"
import react from "../../assets/react.png"
import next from "../../assets/next.png"
import tailwind from "../../assets/tailwind.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import border1 from "../../assets/border1.png"
import border2 from "../../assets/border2.png"
import border3 from "../../assets/border3.png"
import border4 from "../../assets/border4.png"
import border5 from "../../assets/border5.png"
import border6 from "../../assets/border6.png"
import border7 from "../../assets/border7.png"
import solid1 from "../../assets/solid1.png"
import solid2 from "../../assets/solid2.png"
import solid3 from "../../assets/solid3.png"
import solid4 from "../../assets/solid4.png"
import solid5 from "../../assets/solid5.png"
import solid6 from "../../assets/solid6.png"
import solid7 from "../../assets/solid7.png"
import solid8 from "../../assets/solid8.png"
import solid9 from "../../assets/solid9.png"
import solid10 from "../../assets/solid10.png"
import solid11 from "../../assets/solid11.png"
import solid12 from "../../assets/solid12.png"
import solid13 from "../../assets/solid13.png"
import solid14 from "../../assets/solid14.png"


const Header = () => {

  document.addEventListener("mousemove", parallax);
  function parallax(e){
    document.querySelectorAll(".parallax__header-content img").forEach(function(move){

      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 900;
      var y = (e.clientY * moving_value) / 900;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px";
    });
  }

  return (
    <div className="parallax__header" id="home">
      <div className="parallax__header-content" >
        <img src={python} data-value="7.5" alt="python" />
        <img src={js} data-value="-8.3" alt="javascript" />
        <img src={ts} data-value="3.2" alt="typescript" />
        <img src={react} data-value="2" alt="react" />
        <img src={next} data-value="9.1" alt="next" />
        <img src={tailwind} data-value="0" alt="tailwind" />
        <img src={html} data-value="-6.7" alt="html" />
        <img src={css} data-value="-8.7" alt="css" />
        <img src={border1} data-value="-1.9" alt="border" />
        <img src={border2} data-value="-5.3" alt="border" />
        <img src={border3} data-value="2" alt="border" />
        <img src={border4} data-value="7.1" alt="border" />
        <img src={border5} data-value="-6.5" alt="border" />
        <img src={border6} data-value="-9.1" alt="border" />
        <img src={border7} data-value="9" alt="border" />
        <img src={solid1} data-value="6.7" alt="solid" />
        <img src={solid2} data-value="-6.8" alt="solid" />
        <img src={solid3} data-value="-7" alt="solid" />
        <img src={solid4} data-value="2.9" alt="solid" />
        <img src={solid5} data-value="0.5" alt="solid" />
        <img src={solid6} data-value="0.4" alt="solid" />
        <img src={solid7} data-value="8.4" alt="solid" />
        <img src={solid8} data-value="-0.7" alt="solid" />
        <img src={solid9} data-value="-8.6" alt="solid" />
        <img src={solid10} data-value="-1.8" alt="solid" />
        <img src={solid11} data-value="7.3" alt="solid" />
        <img src={solid12} data-value="-6.7" alt="solid" />
        <img src={solid13} data-value="-9" alt="solid" />
        <img src={solid14} data-value="2.3" alt="solid" />
        <h1 className="gradient__text" data-value="3" >Parallax</h1>
        <p>Website by Vybz</p>
      </div>
    </div>
  );
}

export default Header;
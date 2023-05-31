import React, { useState } from "react";
import vectorB from "../../assets/VectorB.png";
import vectorH from "../../assets/VectorH.png";
import "./collapse.css";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const [showOpenButton, setShowOpenButton] = useState(true);

  const toggle = () => {
    setOPen(!open);
    setShowOpenButton(!showOpenButton);
  };


  return (
    <div className="collapseModule">
      <button onClick={toggle} className="btnCollapse">
        {props.label}
        {showOpenButton && (
          <img src={vectorB} alt="open button" className="btnOpen " />
        )}
        {!showOpenButton && (
          <img src={vectorH} alt="close button" className="btnClose" />
        )}
      </button>
      <div className="openCollapse">
        {open && <div className="toggle">{props.children}</div>}
      </div>
    </div>
  );
};

export default Collapsible;

import React from "react";
import arrowL from "../../assets/VectorLeft.png";
import arrowR from "../../assets/VectorRight.png";

const CarouselControls = ({ prev, next }) => {
  return (
    <div className="control">
      <img
        src={arrowL}
        alt="arrow left"
        className="arrowL carousel-control left"
        onClick={prev}
      />
      <img
        src={arrowR}
        alt="arrow right"
        className="arrowR carousel-control right"
        onClick={next}
      />
    </div>
  );
};

export default CarouselControls;

import React from "react";

const CarouselItem = ({ slide }) => {
  return (
    <div className="carousel-item">
      <img src={slide} />
    </div>
  );
};

export default CarouselItem;

import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./carousel.css";
import { HousingContext } from "../../hooks/useContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CarouselControls from "./CarouselControls";

function Carousel({ Slides }) {
  const params = useParams();
  const { id } = params;

  const { housings } = useContext(HousingContext);
  const house = housings.find((housings) => housings.id === id);
  const slides = house?.pictures;

  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  });

  return (
    <div className="carouselContainer">
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {slides?.map((slide, index) => (
            <CarouselItem slide={slide} key={index} />
          ))}
        </div>
        {slides.length > 1 && (<CarouselControls prev={prev} next={next} />)}
        {slides.length > 1 && (<div className="carouselCounter">
          {currentSlide + 1}/{slides.length}
        </div>)}
      </div>
    </div>
  );
}

export default Carousel;

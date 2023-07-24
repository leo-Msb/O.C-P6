import React from "react";
import Collapsible from "../components/collapses/Collapsible";
import "../styles/logements.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { HousingContext } from "../hooks/useContext";
import Carousel from "../components/carousel/Carousel";
import vectorStar from "../assets/VectorStar.png";
import vectorStarColor from "../assets/VectorStarColor.png";
import Error from "../pages/Error";

function Logements(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const { housings } = useContext(HousingContext);

  const house = housings.find((housings) => housings.id === id);

  const generateStars = () => {
    const rating = parseInt(house?.rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starImg = i <= rating ? vectorStarColor : vectorStar;
      stars.push(<img key={i} src={starImg} alt="star" className="star" />);
    }
   
    return stars;
  };

  if (!house) {
    return <Error />
  }

  return (
    <div className="houseConteiner">

      <Carousel className="carouselBlock" />

      <div className="houseInfoContainer">
        <div className="house-title">
          <h1>{house?.title}</h1>
          <p>{house?.location}</p>
          <ul className="equipmentsList">
            {house?.tags?.map((tags, index) => {
              return <li key={index}>{tags}</li>;
            })}
          </ul>
        </div>
        <div className="hostConteiner">
          <div className="hostInfo">
            <h2>{house?.host.name}</h2>
            <img
              src={house?.host.picture}
              alt="host pictures"
              className="img-host"
            />
          </div>
          <div className="hostNote">{generateStars()}</div>
        </div>
      </div>

      <div className="houseCollapse">
        <Collapsible label="Description">{house?.description}</Collapsible>{" "}
        <Collapsible label="Equipement">
          <ul className="equipmentsListHouse">
            {house?.equipments?.map((equipments, index) => {
              return <li key={index}>{equipments}</li>;
            })}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
}

export default Logements;

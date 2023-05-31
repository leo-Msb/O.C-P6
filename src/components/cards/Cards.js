import React from "react";
import "./cards.css";
import { useNavigate, useParams } from "react-router-dom";
import { HousingContext } from "../../hooks/useContext";
import { useContext } from "react";

function Cards({ Housings, onClick }) {
  const params = useParams();
  const { id } = params;

  const { housings } = useContext(HousingContext);

  // console.log(housings);

  const navigate = useNavigate();

  const houseNavigate = (id) => navigate(`/logements/${id}`);

  return (
    <div className="conteiner">
      <div className="cardsConteiner">
        {housings &&
          housings.map((housings) => {
            return (
              <div key={housings.id} onClick={() => houseNavigate(housings.id)}> 
                <div className="card">
                  <div className="img-card">
                  <div className="img-shadow">
                    <img src={housings.cover} alt="House picture" />
                    <p className="img-title">{housings.title}</p>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cards;

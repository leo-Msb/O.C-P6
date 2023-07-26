import React from "react";
import "../styles/error.css";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="errorMsg">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link
          to={{ pathname: "/Home", state: "desiredState" }}
          className="homeLink"
        >
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default Error;

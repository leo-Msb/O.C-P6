import React from 'react';
import "./banner.css";
import imgPropos from "../../assets/img-propos.png";
import imgHome from "../../assets/img-bannier-home.png";

function Banner ({ page }) {

    let imageSrc;

    if (page === "Home") {
        imageSrc = imgHome;
    } else if ( page ==="About") {
        imageSrc = imgPropos;
    }

    return (
        <div className="bannerContainer">
        <img src={imageSrc} alt="Banner" />
        {page === "Home" && (
            <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
        )}
    </div>
);
};

export default Banner;
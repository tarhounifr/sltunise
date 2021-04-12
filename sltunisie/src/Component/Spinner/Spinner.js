import React from "react";
import chargement from "../../assets/chargement.gif";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <div className="text-center">
        <span className="visually-hidden">Chargement...</span>
        <img src={chargement} alt="chargement" />
        <img src={chargement} alt="chargement" />
        <img src={chargement} alt="chargement" />
      </div>
    </div>
  );
};

export default Spinner;

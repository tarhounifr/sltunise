import React from "react";
import backcard from "../../assets/complexe.jpg";
import imgPr from "../../assets/owner.png";

import "./ContactComplexe.css";

const ContactComplexe = ({ contact }) => {
  return (
    <div className="sectionConCom">
      <div>
        <div className="card profile-card-3">
          <div className="background-block">
            <img src={backcard} alt="profile-sample1" className="background" />
          </div>
          <div className="profile-thumb-block">
            <img src={imgPr} alt="profile" className="profile" />
          </div>
          <div className="card-content text-uppercase ">
            <h2>{contact.identifiant}</h2>
            <ul>
              <li>
                <span>Governoment : </span> {contact.gov}
              </li>
              <li>
                <span>Adress :</span> {contact.adress}
              </li>
              <li>
                <span>Num de Tel :</span> {contact.phone}
              </li>
            </ul>
            <div className="icon-block">
              <a href={contact.fbowner}>
                <i className="fa fa-facebook" />
              </a>
              <a href={contact.insowner}>
                <i className="fa fa-instagram" />
              </a>
              <a href={contact.phone}>
                <i className="fa fa-phone" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComplexe;

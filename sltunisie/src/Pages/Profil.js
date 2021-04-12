import React from "react";
import { useSelector } from "react-redux";
import "./Profil.css";
const Profil = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <section className="bodyProfil">
      <div className="image-area">
        <div className="img-wrapper">
          <img src={user.imgPro} alt="ImageProfil" />
          <h2>{user.identifiant}</h2>
          <ul>
            <li>
              <a href={user.face}>
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href={user.Instag}>
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-phone" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw">
                <i className="fa fa-map" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profil;

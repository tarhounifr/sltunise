import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { logout } from "../JS/actions/user";
import { logoutOwner } from "../JS/actions/owner";

import "./Navbar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthOwner = useSelector((state) => state.ownerReducer.isAuthOwner);
  return (
    <header>
      <nav className="navbar navbar-expand-xl">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src="" alt="logo" />
          </Link>
          <button
            type="button"
            data-target="#navbarCollapse"
            data-toggle="collapse"
            className="navbar-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        {/* Collection of nav links, forms, and other content for toggling */}
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">
                <i className="fa fa-home" />
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link to="/Equipe">
                <i className="fa fa-users" />
                <span>Equipe</span>
              </Link>
            </li>
            {/*
            <li>
              <a href="#">
                <i className="fa fa-users" />
                <span>Team</span>
              </a>
            </li>
            */}
            <li>
              <Link to="/Contactez-nous">
                <i className="fa fa-envelope" />
                <span>Contactez-nous</span>
              </Link>
            </li>
            {isAuth || isAuthOwner ? (
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    isAuthOwner ? dispatch(logoutOwner()) : dispatch(logout());
                  }}
                >
                  <i className="fa fa-power-off" />
                  <span>Deconnecter</span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/SignUp">
                    <i className="fa fa-user-plus" />
                    <span>Créer un compte</span>
                  </Link>
                </li>
                <li>
                  <Link to="/SignIn">
                    <i className="fa fa-user" />
                    <span>Se connecter</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </>
    </header>
  );
};

export default NavBar;

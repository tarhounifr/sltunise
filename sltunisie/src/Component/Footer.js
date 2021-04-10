import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        {/*  social link 
        <div className="footer-social-link">
          <ul>
            
            

           
          </ul>
        </div>*/}
      </div>

      {/* copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Copyright © 2021, Tous droits réservés </span>
            </div>
            {/* End Col */}
            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li>
                    <a href="/">
                      {" "}
                      <i className="fa fa-home" />
                      <span> Acceuil</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="fa fa-facebook" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com">
                      <i className="fa fa-youtube" />
                      <span>Youtube</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com">
                      <i className="fa fa-instagram" />

                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="/Contactez-nous">
                      <i className="fa fa-envelope" />
                      <span>Contactez-nous</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Copyright Container */}
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../JS/actions/user";
import { signinOwner } from "../JS/actions/owner";
import "./SignIn.css";

const SignIn = ({ history }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const handelchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [owner, setOwner] = useState({});

  const handelChange = (event) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="bodySignIn">
        <div className="row">
          <div className="col-md-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip ">
                  <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    defaultChecked
                  />
                  <label
                    htmlFor="tab-1"
                    className="tab"
                    style={{ marginTop: "50px" }}
                  >
                    Joueur
                  </label>
                  <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="sign-up"
                  />
                  <label
                    htmlFor="tab-2"
                    className="tab"
                    style={{ "margin-top": "50px" }}
                  >
                    complexe terrain
                  </label>
                  <div className="login-space" style={{ "margin-top": "50px" }}>
                    <div className="login">
                      {/* Joueur  */}

                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Num de Telephone
                        </label>
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          placeholder="Entrer votre num de telephone"
                          name="phone"
                          onChange={handelchange}
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          mot de passe
                        </label>
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Choisissez un mot de passe "
                          name="password"
                          onChange={handelchange}
                        />{" "}
                      </div>

                      <div className="group">
                        <input
                          type="submit"
                          className="button"
                          defaultValue="Sign Up"
                          onClick={() => dispatch(signin(user, history))}
                        />
                      </div>

                      {/* end Joueur  */}
                    </div>
                    {/* complexe terrain  */}
                    <div className="sign-up-form">
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Num de Telephone
                        </label>
                        <input
                          id="pass"
                          type="text"
                          className="input"
                          placeholder="Entrer votre num de telephone"
                          name="phone"
                          onChange={handelChange}
                        />{" "}
                      </div>
                      <div className="group">
                        {" "}
                        <label htmlFor="pass" className="label">
                          mot de passe
                        </label>{" "}
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Choisissez un mot de passe "
                          name="password"
                          onChange={handelChange}
                        />{" "}
                      </div>

                      <div className="group">
                        <input
                          type="submit"
                          className="button"
                          onClick={() => dispatch(signinOwner(owner, history))}
                        />
                      </div>
                    </div>
                    {/* end complexe terrain  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </>
      </div>
    </div>
  );
};

export default SignIn;

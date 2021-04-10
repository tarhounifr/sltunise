import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../JS/actions/user";
import { signupOwner } from "../JS/actions/owner";
import "./SignUp.css";
const SignUp = ({ history }) => {
  const [newUser, setnewUser] = useState({});
  const dispatch = useDispatch();
  const handelchange = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const [newOwner, setnewOwner] = useState({});

  const handelChange = (event) => {
    setnewOwner({ ...newOwner, [event.target.name]: event.target.value });
  };
  return (
    <div className="bodySignUp">
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                  Joueur
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  complexe terrain
                </label>
                <div className="login-space">
                  <div className="login">
                    {/* Joueur  */}

                    <div className="group">
                      <label htmlFor="user" className="label">
                        Identifiant Joueur
                      </label>
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Créez votre Identifiant"
                        name="identifiant"
                        onChange={handelchange}
                      />
                    </div>
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
                      {" "}
                      <label htmlFor="pass" className="label">
                        governorat
                      </label>{" "}
                      <input
                        className="input"
                        type="text"
                        name="gov"
                        list="fruits"
                        autoComplete="off"
                        placeholder="Choisissez une governorat "
                        onChange={handelchange}
                      />
                      <datalist id="fruits">
                        <option>Ben Arous</option>
                        <option>Ariana</option>
                        <option>Béja</option>
                        <option>Bizerte</option>
                        <option>Gabès</option>
                        <option>Gafsa</option>
                        <option>Jendouba</option>
                        <option>Kairouan</option>
                        <option>Kasserine</option>
                        <option>Kébili</option>
                        <option>Manouba</option>
                        <option>Mahdia</option>
                        <option> Médenine</option>
                        <option>Monastir</option>
                        <option>Nabeul</option>
                        <option>Sfax</option>
                        <option>Sidi Bouzid</option>
                        <option>Siliana</option>
                        <option>Sousse</option>
                        <option>Tataouine</option>
                        <option>Tozeur</option>
                        <option>Tunis</option>
                        <option>Zaghouan</option>
                        <option>Kef</option>
                      </datalist>
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">
                        adress
                      </label>
                      <input
                        id="pass"
                        type="text"
                        className="input"
                        placeholder="governorate"
                        name="adress"
                        onChange={handelchange}
                      />
                    </div>

                    <div className="group">
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign Up"
                        onClick={() => dispatch(signup(newUser, history))}
                      />
                    </div>

                    {/* end Joueur  */}
                  </div>
                  {/* complexe terrain  */}
                  <div className="sign-up-form">
                    <div className="group">
                      {" "}
                      <label htmlFor="owner" className="label">
                        Identifiant complexe terrain
                      </label>
                      <input
                        id="owner"
                        type="text"
                        className="input"
                        placeholder="Créez votre Identifiant"
                        name="identifiant"
                        onChange={handelChange}
                      />
                    </div>
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
                      {" "}
                      <label htmlFor="pass" className="label">
                        governorat
                      </label>{" "}
                      <input
                        className="input"
                        type="text"
                        name="gov"
                        list="fruits"
                        autoComplete="off"
                        placeholder="Choisissez une governorat "
                        onChange={handelChange}
                      />
                      <datalist id="fruits">
                        <option>Ben Arous</option>
                        <option>Ariana</option>
                        <option>Béja</option>
                        <option>Bizerte</option>
                        <option>Gabès</option>
                        <option>Gafsa</option>
                        <option>Jendouba</option>
                        <option>Kairouan</option>
                        <option>Kasserine</option>
                        <option>Kébili</option>
                        <option>Manouba</option>
                        <option>Mahdia</option>
                        <option> Médenine</option>
                        <option>Monastir</option>
                        <option>Nabeul</option>
                        <option>Sfax</option>
                        <option>Sidi Bouzid</option>
                        <option>Siliana</option>
                        <option>Sousse</option>
                        <option>Tataouine</option>
                        <option>Tozeur</option>
                        <option>Tunis</option>
                        <option>Zaghouan</option>
                        <option>Kef</option>
                      </datalist>
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">
                        adress
                      </label>
                      <input
                        id="pass"
                        type="text"
                        className="input"
                        placeholder="adress"
                        name="adress"
                        onChange={handelChange}
                      />
                    </div>

                    <div className="group">
                      <input
                        type="submit"
                        className="button"
                        onClick={() => dispatch(signupOwner(newOwner, history))}
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
  );
};

export default SignUp;

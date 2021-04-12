import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./Component/Navbar/NavBar";
import Footer from "./Component/Footer/Footer";
import Error from "./Pages/Error";
import Landpage from "./Pages/Landpage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profil from "./Pages/Profil";
import Complexe from "./Pages/Complexe";
import PrivateRoute from "./router/PrivateRoute";
import Allcomplexe from "./Pages/Allcomplexe";

import { currentUser } from "./JS/actions/user";
import { currentOwner } from "./JS/actions/owner";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOwner());
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <PrivateRoute path="/Profil" component={Profil} />
        <PrivateRoute path="/Complexe" component={Complexe} />
        <PrivateRoute path="/AllComplexe" component={Allcomplexe} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

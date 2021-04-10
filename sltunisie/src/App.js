import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Error from "./Pages/Error";
import Landpage from "./Pages/Landpage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profil from "./Pages/Profil";
import Complexe from "./Pages/Complexe";
import { currentUser } from "./JS/actions/user";
import "./App.css";
import PrivateRoute from "./router/PrivateRoute";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
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
        <Route path="/Complexe" component={Complexe} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

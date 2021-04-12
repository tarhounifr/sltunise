import axios from "axios";
import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGOUT,
  SIGNIN_USER,
  SIGNUP_USER,
} from "../actionType/user";

export const signup = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signup", newUser);

    dispatch({ type: SIGNUP_USER, payload: result.data }); //msg , token , user
    history.push("/Profil");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const signin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signin", user);

    dispatch({ type: SIGNIN_USER, payload: result.data }); //msg , token , user
    history.push("/AllComplexe");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/user/current", config);

    dispatch({ type: CURRENT_USER, payload: result.data }); //msg , token , user
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const logout = () => {
  return { type: LOGOUT };
};

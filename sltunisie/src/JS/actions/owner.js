import axios from "axios";
import {
  CURRENT_OWNER,
  FAIL_OWNER,
  LOAD_OWNER,
  LOGOUT,
  SIGNIN_OWNER,
  SIGNUP_OWNER,
} from "../actionType/owner";

export const signupOwner = (newOwner, history) => async (dispatch) => {
  dispatch({ type: LOAD_OWNER });

  try {
    const result = await axios.post("/api/owner/signup", newOwner);

    dispatch({ type: SIGNUP_OWNER, payload: result.data }); //msg , token , user
    history.push("/Complexe");
  } catch (error) {
    dispatch({ type: FAIL_OWNER, payload: error.response.data.errors });
  }
};

export const signinOwner = (owner, history) => async (dispatch) => {
  dispatch({ type: LOAD_OWNER });

  try {
    const result = await axios.post("/api/owner/signin", owner);

    dispatch({ type: SIGNIN_OWNER, payload: result.data }); //msg , token , user
    history.push("/Complexe");
  } catch (error) {
    dispatch({ type: FAIL_OWNER, payload: error.response.data.errors });
  }
};

export const currentOwner = () => async (dispatch) => {
  dispatch({ type: LOAD_OWNER });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/owner/current", config);

    dispatch({ type: CURRENT_OWNER, payload: result.data }); //msg , token , user
  } catch (error) {
    dispatch({ type: FAIL_OWNER, payload: error.response.data.errors });
  }
};

export const logoutOwner = () => {
  return { type: LOGOUT };
};

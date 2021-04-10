import {
  FAIL_USER,
  LOAD_USER,
  LOGOUT,
  SIGNIN_USER,
  SIGNUP_USER,
  CURRENT_USER,
} from "../actionType/user";

const initialState = {
  user: {},
  isAuth: false,
  loadUser: false,
  errors: [],
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case SIGNUP_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case SIGNIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case CURRENT_USER:
      return {
        ...state,
        loadUser: false,
        user: payload,
        isAuth: true,
        errors: [],
      };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loadUser: false,
        errors: [],
        user: {},
        isAuth: false,
      };

    default:
      return state;
  }
};
export default userReducer;

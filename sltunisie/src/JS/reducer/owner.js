import {
  CURRENT_OWNER,
  FAIL_OWNER,
  LOAD_OWNER,
  LOGOUT,
  SIGNIN_OWNER,
  SIGNUP_OWNER,
} from "../actionType/owner";

const initialState = {
  owner: {},
  isAuthOwner: false,
  loadOwner: false,
  errors: [],
};
const ownerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_OWNER:
      return { ...state, loadOwner: true };
    case SIGNUP_OWNER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadOwner: false,
        owner: payload.owner,
        isAuthOwner: true,
        errors: [],
      };
    case SIGNIN_OWNER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadOwner: false,
        owner: payload.owner,
        isAuthOwner: true,
        errors: [],
      };

    case FAIL_OWNER:
      return { ...state, loadOwner: false, errors: payload };
    case CURRENT_OWNER:
      return {
        ...state,
        loadOwner: false,
        owner: payload,
        isAuthOwner: true,
        errors: [],
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loadOwner: false,
        errors: [],
        owner: {},
        isAuthOwner: false,
      };

    default:
      return state;
  }
};
export default ownerReducer;

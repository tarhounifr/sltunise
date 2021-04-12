import { GET_CONTACT, LOAD_CONTACT, FAIL_CONTACT } from "../actionType/contact";

const intialState = {
  contactList: [],
  errors: null,
  load: false,
};
const contactReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load: true };
    case GET_CONTACT:
      return {
        ...state,
        load: false,
        contactList: payload.listOwners,
      };

    case FAIL_CONTACT:
      return { ...state, load: false, error: payload };

    default:
      return state;
  }
};
export default contactReducer;

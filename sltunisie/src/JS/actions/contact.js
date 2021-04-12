import axios from "axios";
import { GET_CONTACT, LOAD_CONTACT, FAIL_CONTACT } from "../actionType/contact";

export const getContacts = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CONTACT });
    const result = await axios.get("/api/owner");

    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_CONTACT,
      payload: error.reponse,
    });
  }
};
export const editContacts = (id, newContact) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CONTACT });
    await axios.put(`/api/owner/${id}`, newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACT,
      payload: error.reponse,
    });
  }
};

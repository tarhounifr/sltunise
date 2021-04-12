import axios from "axios";
import { GET_TERRAIN, LOAD_TERRAIN, FAIL_TERRAIN } from "../actionType/terrain";

export const getTerrains = (_id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_TERRAIN });
    const result = await axios.get(`/api/owner/terrain${_id}`);

    dispatch({ type: GET_TERRAIN, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_TERRAIN,
      payload: error.reponse,
    });
  }
};

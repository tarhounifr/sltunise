import { GET_TERRAIN, LOAD_TERRAIN, FAIL_TERRAIN } from "../actionType/terrain";

const intialState = {
  terrainList: [],
  errors: null,
  load: false,
};
const terrainReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_TERRAIN:
      return { ...state, load: true };
    case GET_TERRAIN:
      return {
        ...state,
        load: false,
        terrainList: payload.listTerrains,
      };

    case FAIL_TERRAIN:
      return { ...state, load: false, error: payload };

    default:
      return state;
  }
};
export default terrainReducer;

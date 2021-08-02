import {
  GET_TECHS,
  TECHS_ERROR,
  DELETE_TECH,
  ADD_TECH,
  SET_LOADING,
  UPDATE_TECH,
  SET_CURRENT_TECH,
  CLEAR_CURRENT_TECH,
  SEARCH_TECHS
} from "../actions/types";

const initialState = {
  techs: null,
  error: null,
  current: null,
  loading: false,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case TECHS_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TECH:
      return {
        ...state,
        techs: state.techs.map((tech) =>
          tech.id === action.payload.id ? action.payload : tech
        ),
        current: null,
      };
    case SET_CURRENT_TECH:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_TECH:
      return {
        ...state,
        current: action.payload,
      };

    case SEARCH_TECHS:
        return { ...state, techs: action.payload };

   

    default:
      return state;
  }
};

export default techReducer;

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  completedlogs:null
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        current:null
      };

    case SEARCH_LOGS:
      return { ...state, logs: action.payload };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
     
      return { ...state, error: action.payload };
    case 'ADD_COMPLETED_LOG':
      return {
        ...state,
        completedlogs:[...state.completedlogs , action.payload],
        loading:false
      }

    case 'GET_COMPLETED_LOGS':
      return { ...state, 
             completedlogs:action.payload,
             loading:false
           }
    default:
      return state;
  }
};

export default logReducer;

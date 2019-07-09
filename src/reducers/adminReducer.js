import { GET_ADMINS, GET_ADMIN, SET_FIRST_TYM } from "../actions/types";

const initialState = {
  admins: null,
  admin: {
    isFirstTym: true
  },
  message: null
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMINS: {
      if (action.payload) {
        return {
          ...state,
          admins: action.payload.record,
          message: action.payload.msg
        };
      } else {
        return { ...state };
      }
    }
    case GET_ADMIN: {
      console.log(action.payload);
      return {
        ...state,
        admin: action.payload
      };
    }
    case SET_FIRST_TYM: {
      return {
        ...state,
        admin: { ...state.admin, isFirstTym: false }
      };
    }
    default:
      return state;
  }
};

export default AdminReducer;

import { LOGIN, LOGOUT, ADMINLOGIN, USERLOGIN } from "../actions/types";
const initialState = {
  login: false,
  is_admin: false,
  token: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: true,
        is_admin: false
      };
    }

    case ADMINLOGIN: {
      return {
        ...state,
        login: true,
        is_admin: true,
        token: action.payload.token
      };
    }
    case USERLOGIN: {
      return {
        ...state,
        login: true,
        is_admin: false,
        token: action.payload.token
      };
    }
    case LOGOUT: {
      return {
        ...state,
        login: false,
        is_admin: false
      };
    }
    default:
      return { ...state };
  }
  return state;
};
export default authReducer;

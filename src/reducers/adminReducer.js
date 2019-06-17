import {
  PRODUCT_LOADING,
  GET_ADMINS,
  GET_ADMIN,
  GET_ADMIN_BY_ID
} from "../actions/types";

const initialState = {
  admins: null,
  admin: null,
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
        admin: action.payload.record,
        message: action.payload.message
      };
    }
    default:
      return state;
  }
};

export default AdminReducer;

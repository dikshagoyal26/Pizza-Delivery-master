import { GET_USER } from "../actions/types";

const initialState = {
  user: null,
  message: null
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      console.log(action.payload);
      return {
        ...state,
        user: action.payload.record,
        message: action.payload.message
      };
    }
    default:
      return state;
  }
};

export default AdminReducer;

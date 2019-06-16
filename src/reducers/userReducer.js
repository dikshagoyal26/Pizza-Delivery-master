import { GET_USER } from "../actions/types";

const initialState = {
  user: null,
  message: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      console.log(action.payload);
      return {
        ...state,
        user: action.payload
        //message: action.payload.message
      };
    }
    default:
      return state;
  }
};

export default UserReducer;

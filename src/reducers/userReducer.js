import { GET_USER } from "../actions/types";

const initialState = {
  user: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        userid: action.payload.userid
      };
    }
    default:
      return state;
  }
};

export default UserReducer;

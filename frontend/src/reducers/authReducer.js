import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT
} from "../actions/actionTypes";

const initialState = {
  user: {},
  isLoggedIn: false,
  message: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        message: "Welcome"
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        message: "Oops, something is messed up"
      };
    default:
      return state;

  }
};

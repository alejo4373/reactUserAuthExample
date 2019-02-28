import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT
} from "../actions/actionTypes";
import axios from "axios";

export const loginUser = userCredentials => dispatch =>  {
  axios.post("/users/login", userCredentials)
    .then(res => {
      const user = res.data;
      dispatch(loginSuccess(user))
    })
    .catch(err => {
      console.log(err);
      dispatch(loginFailure())
    })
}

// Action creators/generators => return action
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user: user
  }
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  }
}

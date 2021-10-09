/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */

import jwt_decode from "jwt-decode";
import { createUser, postLogin } from "../../api/api";
import { checkUserAuthAC, loginUserAC, setUser } from "../actions/actions";
import { CHECK_USER_AUTH, LOGIN_USER, REGISTER_USER } from "../consts/actionTypes";

const initialState = {
  isAuth: false,
  userId: 0,
  email: "",
  name: "",
  token: ""
};

const userReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case REGISTER_USER:
      stateCopy.isAuth = action.payload.isAuth;
      stateCopy.name = action.payload.name;
      return {
        ...stateCopy
      };
    case LOGIN_USER:
      stateCopy.email = action.payload.email;
      stateCopy.name = action.payload.name;
      stateCopy.id = action.payload.id;
      return {
        ...stateCopy
      };
    case CHECK_USER_AUTH:
      stateCopy.email = action.payload.email;
      stateCopy.name = action.payload.name;
      stateCopy.userId = action.payload.id;
      stateCopy.isAuth = false;
      if (stateCopy.name && stateCopy.email && stateCopy.userId) stateCopy.isAuth = true;
      return {
        ...stateCopy
      };
    default:
      return state;
  }
};

export const registerUser = (data) => {
  return function (dispatch) {
    dispatch(setUser(data));
    createUser(data);
  };
};
export const loginUser = (data) => {
  return async function (dispatch) {
    const login = await postLogin(data);
    localStorage.setItem('token', JSON.stringify(login));
    dispatch(checkAuth());
    if (login) {
      const decodedToke = jwt_decode(login);
      dispatch(loginUserAC(decodedToke));
    }
  };
};
export function checkAuth() {
  let decodedToken = "";
  return async function (dispatch) {
    const token = await JSON.parse(localStorage.getItem('token'));
    if (token) {
      decodedToken = jwt_decode(token);
    }
    dispatch(checkUserAuthAC(decodedToken));
  };
}
export function checkAuthh() {
  const token = JSON.parse(localStorage.getItem('token'));
}
export default userReducer;

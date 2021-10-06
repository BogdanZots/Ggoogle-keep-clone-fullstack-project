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
      console.log('act payload', action.payload);
      stateCopy.email = action.payload.email;
      return {
        ...stateCopy
      };
    case CHECK_USER_AUTH:
      stateCopy.email = action.payload.email;
      console.log(action);
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
    await console.log('loginb', login);
    localStorage.setItem('token', JSON.stringify(login));
    if (login) {
      const decodedToke = jwt_decode(login);
      dispatch(loginUserAC(decodedToke));
    }
    postLogin(data);
  };
};
export const checkAuth = () => {
  let decodedToken = "";
  return async function (dispatch) {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log('TOKEN', token);
    if (token) {
      decodedToken = jwt_decode(token);
    }
    await dispatch(checkUserAuthAC(decodedToken));
  };
};
export default userReducer;

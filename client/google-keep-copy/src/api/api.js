/* eslint-disable no-return-await */
import axios from "axios";
import { API_URL, LOGIN, REGISTRATON, USER } from "../consts/conts";

export const updateCurrentTask = (data, patch) => {
  axios.put(`${API_URL}${patch}`, { ...data });
};

export const getTasks = async (patch, userId) => await fetch(
  `${API_URL}${patch}?userId=${userId}`
).then((res) => res.json());

export const postNewTask = async (data, patch) => {
  let picked = {};
  return await axios
    .post(`${API_URL}${patch}`, {
      method: `POST`,
      body: data,
    })
    .then((res) => {
      picked = (({ endDate, id, isCompleted, name, text, typeId, userId }) => ({
        endDate,
        id,
        isCompleted,
        name,
        text,
        typeId,
        userId
      }))(res.data);
      return picked;
    });
};

export const removeCurrentTask = (uId, patch) => {
  axios.delete(`${API_URL}${patch}`, { data: { id: uId } });
};
export const updateTargetsItemStatus = (id, patch, isCompleted) => {
  axios.put(`${API_URL}${patch}/update`, { isCompleted, id });
};

// user

export const createUser = async (data) => {
  axios.post(`${API_URL}${USER}${REGISTRATON}`, {
    method: `POST`,
    body: data,
  });
};

export const postLogin = async (data) => {
  let token = "";
  return axios
    .post(`${API_URL}${USER}${LOGIN}`, {
      method: `POST`,
      body: data,
    })
    .then((res) => {
      token = res.data;
      return token;
    });
};

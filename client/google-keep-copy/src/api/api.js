/* eslint-disable no-return-await */
import axios from "axios";
import { API_URL } from "../consts/conts";
export const updateCurrentTask = (data, patch) => {
  axios.put(`${API_URL}${patch}`, { ...data });
};
export const getTasks = async (patch) => await fetch(`${API_URL}${patch}`).then((res) => res.json());
export const postNewTask = async (data, patch) => {
  let picked = {};
  await axios
    .post(`${API_URL}${patch}`, {
      method: `POST`,
      body: data,
    })
    .then((res) => {
      picked = (({ endDate, id, isCompleted, name, text, typeId }) => ({
        endDate,
        id,
        isCompleted,
        name,
        text,
        typeId,
      }))(res.data);
    });
  return picked;
};
export const removeCurrentTask = (uId, patch) => {
  axios.delete(`${API_URL}${patch}`, { data: { id: uId } });
};
export const updateTargetsItemStatus = (id, patch, isCompleted) => {
  console.log("in api", isCompleted);
  axios.put(`${API_URL}${patch}/update`, { isCompleted, id });
};

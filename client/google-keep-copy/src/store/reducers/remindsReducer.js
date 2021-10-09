/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
import { postNewTask, getTasks, updateCurrentTask, removeCurrentTask } from "../../api/api";
import { REMINDS_URL } from "../../consts/conts";
import {
  addRemindsItemAC,
  setRemindsArrayAC,
  changeRemindsItemAC,
  removeRemindsItemAC,
  setDeadlineArray
} from "../actions/actions";
import {
  SET_REMINDS_ARRAY,
  CHANGE_REMINDS_ITEM,
  REMOVE_REMINDS_ITEM,
  ADD_REMINDS_ITEM,
  SET_DEADLINE_ARRAY,
  SET_CURRENT_REMINDS_PAGE,
} from "../consts/actionTypes";

const initialState = {
  remindsArray: [],
  deadlineArray: [],
  currentPage: 1
};

const remindReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_REMINDS_ARRAY:
      stateCopy.remindsArray = [...stateCopy.remindsArray];
      stateCopy.remindsArray = [...action.payload];
      return {
        ...stateCopy,
      };
    case SET_DEADLINE_ARRAY:
      let deadlineArray = [...stateCopy.remindsArray];
      deadlineArray = deadlineArray.map((task) => {
        return {
          id: task.id,
          name: task.name,
          text: task.text,
          endDate: task.endDate
        };
      });
      return {
        ...stateCopy,
        deadlineArray
      };
    case SET_CURRENT_REMINDS_PAGE:
      stateCopy.currentPage = action.payload;
      return {
        ...stateCopy
      };
    case ADD_REMINDS_ITEM:
      stateCopy.remindsArray = [...stateCopy.remindsArray];
      delete action.payload.isCompleted;
      stateCopy.remindsArray.push(action.payload);
      return {
        ...stateCopy,
      };
    case CHANGE_REMINDS_ITEM:
      stateCopy.remindsArray = [...stateCopy.remindsArray];
      let i;
      stateCopy.remindsArray.find((task, index) => {
        i = index;
        if (task.id === action.payload.id) {
          return {
            task,
          };
        }
      });
      stateCopy.remindsArray[i] = action.payload.newData;
      return {
        ...stateCopy,
      };
    case REMOVE_REMINDS_ITEM:
      stateCopy.remindsArray = [...stateCopy.remindsArray];
      stateCopy.remindsArray = stateCopy.remindsArray.filter(
        (task) => task.id !== action.payload.uId
      );
      return {
        ...stateCopy,
      };
    default:
      return state;
  }
};
export const deleteCurrentTask = (uId) => {
  return function (dispatch) {
    dispatch(removeRemindsItemAC({ uId }));
    removeCurrentTask(uId, REMINDS_URL);
    dispatch(setDeadlineArray());
  };
};
export const changeCurrentTask = (data) => {
  return function (dispatch) {
    dispatch(
      changeRemindsItemAC({
        id: data.id,
        newData: {
          id: data.id,
          text: data.newData.text,
          name: data.newData.name,
          typeId: data.newData.typeId,
          endDate: data.newData.endDate,
        },
      })
    );
    dispatch(setDeadlineArray());
    updateCurrentTask({
      text: data.newData.text,
      name: data.newData.name,
      endDate: data.newData.endDate,
      searchId: data.newData.id,
    }, REMINDS_URL);
  };
};
export const addNewTask = (data) => {
  return async function (dispatch) {
    const res = await postNewTask(data, REMINDS_URL);
    dispatch(addRemindsItemAC({ ...res }));
    dispatch(setDeadlineArray());
  };
};
export const getAllTasks = (url, userId) => {
  return async function (dispatch) {
    const data = await getTasks(REMINDS_URL, userId);
    dispatch(setRemindsArrayAC(data.sort((a, b) => a.id - b.id)));
    dispatch(setDeadlineArray());
  };
};

export default remindReducer;

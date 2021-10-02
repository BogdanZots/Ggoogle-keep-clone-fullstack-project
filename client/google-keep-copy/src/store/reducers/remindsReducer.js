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
} from "../consts/actionTypes";

const initialState = {
  remindsArray: [],
  deadlineArray: [],
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

    case ADD_REMINDS_ITEM:
      stateCopy.remindsArray = [...stateCopy.remindsArray];
      const lastId = stateCopy.remindsArray[stateCopy.remindsArray.length - 1].id;
      stateCopy.remindsArray.push({ id: lastId + 1, ...action.payload });
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
    updateCurrentTask({
      text: data.newData.text,
      name: data.newData.name,
      endDate: data.newData.endDate,
      searchId: data.newData.id,
    }, REMINDS_URL);
  };
};
export const addNewTask = (data) => {
  return function (dispatch) {
    postNewTask(data, REMINDS_URL);
    dispatch(addRemindsItemAC({ ...data }));
  };
};
export const getAllTasks = () => {
  return async function (dispatch) {
    const data = await getTasks(REMINDS_URL);
    dispatch(setRemindsArrayAC(data.sort((a, b) => a.id - b.id)));
    dispatch(setDeadlineArray(data.sort((a, b) => a.id - b.id)));
  };
};

export default remindReducer;

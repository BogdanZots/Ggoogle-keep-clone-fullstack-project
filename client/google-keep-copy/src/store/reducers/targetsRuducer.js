/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
import { getTasks, postNewTask, removeCurrentTask, updateCurrentTask, updateTargetsItemStatus } from "../../api/api";
import { TARGETS_URL } from "../../consts/conts";
import { addTargetItemAC, removeTargetItemAC, setTargetsArrayAC, changeTargetsItemAC, changeTargetsItemStatusAC } from "../actions/actions";
import { ADD_TARGET_ITEM, SET_TARGETS_ARRAY, REMOVE_TARGET_ITEM, CHANGE_TARGETS_ITEM, CHANGE_TARGETS_ITEM_STATUS } from "../consts/actionTypes";

const initialState = {
  targetsArray: []
};

const remindReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_TARGETS_ARRAY:
      stateCopy.targetsArray = [...stateCopy.targetsArray];
      stateCopy.targetsArray = [...action.payload];
      return {
        ...stateCopy,
      };
    case ADD_TARGET_ITEM:
      console.log('ACTION PAYLOAD', action.payload);
      stateCopy.targetsArray = [...stateCopy.targetsArray];
      const lastId = stateCopy.targetsArray[stateCopy.targetsArray.length - 1].id;
      stateCopy.targetsArray.push({ id: lastId + 1, ...action.payload });
      return {
        ...stateCopy,
      };
    case CHANGE_TARGETS_ITEM:
      stateCopy.targetsArray = [...stateCopy.targetsArray];
      let i;
      stateCopy.targetsArray.find((task, index) => {
        i = index;
        if (task.id === action.payload.id) {
          return {
            task,
          };
        }
      });
      stateCopy.targetsArray[i] = action.payload.newData;
      return {
        ...stateCopy,
      };
    case CHANGE_TARGETS_ITEM_STATUS:
      stateCopy.targetsArray = [...stateCopy.targetsArray];
      let a;
      stateCopy.targetsArray.find((task, index) => {
        a = index;
        if (task.id === action.payload.id) {
          return {
            task,
          };
        }
      });
      stateCopy.targetsArray[a].isCompleted = action.payload.isCompleted;
      return {
        ...stateCopy,
      };
    case REMOVE_TARGET_ITEM:
      stateCopy.targetsArray = [...stateCopy.targetsArray];
      stateCopy.targetsArray = stateCopy.targetsArray.filter(
        (task) => task.id !== action.payload.uId
      );
      return {
        ...stateCopy,
      };
    default:
      return state;
  }
};
export const changeCurrentTask = (data) => {
  return function (dispatch) {
    dispatch(
      changeTargetsItemAC({
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
    }, TARGETS_URL);
  };
};
export const changeTaskCompletedStatus = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch(changeTargetsItemStatusAC({ id: data.id, isCompleted: data.isCompleted }));
    updateTargetsItemStatus(data.id, TARGETS_URL, data.isCompleted);
  };
};
export const deleteCurrentTask = (uId) => {
  return function (dispatch) {
    dispatch(removeTargetItemAC({ uId }));
    removeCurrentTask(uId, TARGETS_URL);
  };
};
export const addNewTask = (data) => {
  return async function (dispatch) {
    let date = {};
    const getData = async () => {
      const postData = await postNewTask(data, TARGETS_URL);
      date = { ...postData };
      console.log('date', date);
    };
    await getData();
    console.log('date', date);
    postNewTask(data, TARGETS_URL);
    dispatch(addTargetItemAC({ ...date }));
  };
};

export const getAllTasks = (url) => {
  return async function (dispatch) {
    const tasks = await getTasks(url);
    dispatch(setTargetsArrayAC(tasks.sort((a, b) => a.id - b.id)));
  };
};

export default remindReducer;

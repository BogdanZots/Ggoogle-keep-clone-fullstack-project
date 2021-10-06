/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
import { getTasks, postNewTask, removeCurrentTask, updateCurrentTask, updateTargetsItemStatus } from "../../api/api";
import { TARGETS_URL } from "../../consts/conts";
import { addTargetItemAC, removeTargetItemAC, setTargetsArrayAC, changeTargetsItemAC, changeTargetsItemStatusAC, setTargetsPages, setCurrentTargetsPage } from "../actions/actions";
import { ADD_TARGET_ITEM, SET_TARGETS_ARRAY, REMOVE_TARGET_ITEM, CHANGE_TARGETS_ITEM, CHANGE_TARGETS_ITEM_STATUS, SET_TARGETS_PAGES, SET_CURRENT_TARGETS_PAGE } from "../consts/actionTypes";

const initialState = {
  targetsArray: [],
  allTargetsCount: 0,
  currentPage: 1,
};

const remindReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case SET_TARGETS_ARRAY:
      console.log('ACTION', action);
      stateCopy.targetsArray = [...stateCopy.targetsArray];
      stateCopy.targetsArray = [...action.payload];
      return {
        ...stateCopy,
      };
    case SET_TARGETS_PAGES:
      stateCopy.allTargetsCount = action.payload;
      return {
        ...stateCopy
      };
    case ADD_TARGET_ITEM:
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
    case SET_CURRENT_TARGETS_PAGE:
      stateCopy.currentPage = action.payload;
      console.log('state copy', stateCopy);
      return {
        ...stateCopy
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
          isCompleted: data.newData.isCompleted,
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
    };
    await getData();
    postNewTask(data, TARGETS_URL);
    dispatch(addTargetItemAC({ ...date }));
  };
};

export const getAllTasks = (url, limit = 2, page = 1) => {
  return async function (dispatch) {
    const tasks = await getTasks(url, limit, page);
    console.log(page);
    /*     dispatch(setCurrentTargetsPage(page)); */
    dispatch(setTargetsPages(tasks.count));
    dispatch(setTargetsArrayAC(tasks.rows));
  };
};

export default remindReducer;

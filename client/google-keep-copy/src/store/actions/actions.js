import {
  SET_REMINDS_ARRAY,
  CHANGE_REMINDS_ITEM,
  REMOVE_REMINDS_ITEM,
  ADD_REMINDS_ITEM,
  SET_TARGETS_ARRAY,
  ADD_TARGET_ITEM,
  REMOVE_TARGET_ITEM,
  CHANGE_TARGETS_ITEM,
  CHANGE_TARGETS_ITEM_STATUS,
  SET_DEADLINE_ARRAY
} from "../consts/actionTypes";
// reminds page
export const setRemindsArrayAC = (payload) => ({
  type: SET_REMINDS_ARRAY,
  payload,
});
export const changeRemindsItemAC = (payload) => ({
  type: CHANGE_REMINDS_ITEM,
  payload,
});
export const removeRemindsItemAC = (payload) => ({
  type: REMOVE_REMINDS_ITEM,
  payload,
});
export const addRemindsItemAC = (payload) => ({
  type: ADD_REMINDS_ITEM,
  payload,
});
export const setDeadlineArray = (payload) => ({
  type: SET_DEADLINE_ARRAY,
  payload
});

// targets page

export const setTargetsArrayAC = (payload) => ({
  type: SET_TARGETS_ARRAY,
  payload
});
export const addTargetItemAC = (payload) => ({
  type: ADD_TARGET_ITEM,
  payload,
});
export const removeTargetItemAC = (payload) => ({
  type: REMOVE_TARGET_ITEM,
  payload
});
export const changeTargetsItemAC = (payload) => ({
  type: CHANGE_TARGETS_ITEM,
  payload,
});
export const changeTargetsItemStatusAC = (payload) => ({
  type: CHANGE_TARGETS_ITEM_STATUS,
  payload
});

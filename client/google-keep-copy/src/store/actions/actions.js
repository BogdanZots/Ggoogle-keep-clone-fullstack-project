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
  SET_DEADLINE_ARRAY,
  SET_TARGETS_PAGES,
  SET_CURRENT_TARGETS_PAGE,
  REGISTER_USER,
  LOGIN_USER,
  CHECK_USER_AUTH,
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
  payload,
});

// targets page

export const setTargetsArrayAC = (payload) => ({
  type: SET_TARGETS_ARRAY,
  payload,
});
export const addTargetItemAC = (payload) => ({
  type: ADD_TARGET_ITEM,
  payload,
});
export const removeTargetItemAC = (payload) => ({
  type: REMOVE_TARGET_ITEM,
  payload,
});
export const changeTargetsItemAC = (payload) => ({
  type: CHANGE_TARGETS_ITEM,
  payload,
});
export const changeTargetsItemStatusAC = (payload) => ({
  type: CHANGE_TARGETS_ITEM_STATUS,
  payload,
});
export const setTargetsPages = (payload) => ({
  type: SET_TARGETS_PAGES,
  payload,
});
export const setCurrentTargetsPage = (payload = 1) => ({
  type: SET_CURRENT_TARGETS_PAGE,
  payload,
});

// user

export const setUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});
export const loginUserAC = (payload) => ({
  type: LOGIN_USER,
  payload,
});
export const checkUserAuthAC = (payload) => ({
  type: CHECK_USER_AUTH,
  payload
});

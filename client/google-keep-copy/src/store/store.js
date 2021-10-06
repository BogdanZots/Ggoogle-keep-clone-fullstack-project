import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import remindsReducer from "./reducers/remindsReducer";
import targetsReducer from "./reducers/targetsRuducer";
import userReducer from "./reducers/userReducer";

const redusers = combineReducers({
  remindsPage: remindsReducer,
  targetsPage: targetsReducer,
  user: userReducer
});

const store = createStore(redusers, applyMiddleware(thunk));
window.store = store;

export default store;

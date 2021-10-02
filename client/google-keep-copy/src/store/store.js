import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import remindsReducer from "./reducers/remindsReducer";
import targetsReducer from "./reducers/targetsRuducer";

const redusers = combineReducers({
  remindsPage: remindsReducer,
  targetsPage: targetsReducer
});

const store = createStore(redusers, applyMiddleware(thunk));
window.store = store;

export default store;

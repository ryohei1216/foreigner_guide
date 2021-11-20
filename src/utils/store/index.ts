import { createStore, combineReducers } from "redux";

import { loginInfoReducer } from "./reducers";

const rootReducer = combineReducers({
  loginInfo: loginInfoReducer,
});

const store = createStore(rootReducer);
export default store;

import { count } from "console";
import { createStore } from "redux";

const initialState = {
  count: 1,
};
type Action = {
  type: string;
  payload?: any;
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        count: state.count + 1,
      };
    case "DECREASE_COUNT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;

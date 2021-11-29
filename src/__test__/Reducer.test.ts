import reducer, {
  increment,
  incrementByAmount,
} from "./features/customCounter/customCounterSlice";

describe("Reducer of RTK", () => {
  describe("increment action", () => {
    test("increment by 1 with mode 0", () => {
      let initialState = {
        mode: 0,
        value: 1,
        username: "",
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    });
    test("increment by 100 with mode 1", () => {
      let initialState = {
        mode: 1,
        value: 1,
        username: "",
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });
    test("increment by 1000 with mode 2", () => {
      let initialState = {
        mode: 2,
        value: 1,
        username: "",
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(1001);
    });
  });
  describe("incrementByAmount action", () => {
    test("increment by payload value with mode 0", () => {
      let initialState = {
        mode: 0,
        value: 1,
        username: "",
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    test("increment by 100 * payload value with mode 1", () => {
      let initialState = {
        mode: 1,
        value: 1,
        username: "",
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(301);
    });
    test("increment by 1000 * payload value with mode 2", () => {
      let initialState = {
        mode: 2,
        value: 1,
        username: "",
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(3001);
    });
  });
});

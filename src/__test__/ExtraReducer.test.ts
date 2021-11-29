import reducer, {
  fetchDummy,
} from "./features/customCounter/customCounterSlice";

describe("extraReducer", () => {
  const initialState = {
    mode: 0,
    value: 0,
    username: "",
  };
  test("100 + payload fulfilled", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  });
  test("100 - payload rejected", () => {
    const action = { type: fetchDummy.rejected.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(95);
  });
});

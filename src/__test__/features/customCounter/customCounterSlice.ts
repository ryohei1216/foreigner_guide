import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

const sleep = async (msec: number) => {
  await setTimeout(() => {}, msec);
};

export const fetchDummy = createAsyncThunk<
  number,
  number,
  { rejectValue: number }
>("fetch/dummy", async (num: number, thunkApi) => {
  await sleep(2000).then(() => {
    console.log("timeout");
  });
  return num;
  // try {
  // } catch (err) {
  //   return thunkApi.rejectWithValue(150);
  // }
});
export const fetchJSON = createAsyncThunk("fetch/api", async () => {
  const res = (await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  )) as any;
  const { username } = res.data;
  return username;
});
export const customCounterSlice = createSlice({
  name: "customCounter",
  initialState: {
    mode: 0,
    value: 0,
    username: "",
  },
  reducers: {
    increment: (state) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 1000;
          break;
        default:
          break;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += 100 * action.payload;
          break;
        case 2:
          state.value += 1000 * action.payload;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchDummy.rejected, (state, action) => {
      if (action.payload) {
        state.value = 100 - action.payload;
      }
    });
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
      if (action.payload) {
        state.username = action.payload;
      }
    });
    builder.addCase(fetchJSON.rejected, (state, action) => {
      if (action.payload) {
        state.username = "anonymous";
      }
    });
  },
});

export const { increment, decrement, incrementByAmount } =
  customCounterSlice.actions;

export const selectCount = (state: RootState) => state.customCounter.value;
export const selectUsername = (state: RootState) =>
  state.customCounter.username;
// export const selectUsername = (state: RootState) =>
//   state.customCounter.username;

export default customCounterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SignInInfo {
  email: string;
  password: string;
}

const initialState: SignInInfo = {
  email: "",
  password: "",
};

export const signInInfoSlice = createSlice({
  name: "signInInfo",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { signIn } = signInInfoSlice.actions;

export const selectSignInInfo = (state: RootState) => state.signInInfo;

export default signInInfoSlice.reducer;

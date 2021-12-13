import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SignInInfo } from "../../../../types";

const initialState: SignInInfo = {
  id: "",
  email: "",
  password: "",
};

export const signInInfoSlice = createSlice({
  name: "signInInfo",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { signIn } = signInInfoSlice.actions;

export const selectSignInInfo = (state: RootState) => state.signInInfo;

export default signInInfoSlice.reducer;

import { LoginInfo, LoginInfoAction } from "./type";

const loginInfoInitialState: LoginInfo = {
  email: "",
  password: "",
};
export const loginInfoReducer = (
  state = loginInfoInitialState,
  action: LoginInfoAction
) => {
  switch (action.type) {
    case "SAVE_SIGNIN_INFO":
      return {
        email: action.payload?.email,
        password: action.payload?.password,
      };
    default:
      return state;
  }
};

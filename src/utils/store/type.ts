export type LoginInfo = {
  email: string;
  password: string;
};

export type LoginInfoAction = {
  type: string;
  payload: LoginInfo;
};

export type DefaultRootState = { loginInfo: LoginInfo };

import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import signInInfoReducer from "../../store/features/signInInfo/signInInfoSlice";
import { configureStore } from "@reduxjs/toolkit";
import SignIn from "../../pages/SignIn";
import { getApiDomain } from "../../utils/config";

const apiDomain = getApiDomain();

//useHistoryのmock
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

//APIMockServerの設定
const server = setupServer(
  rest.post(`${apiDomain}/signIn`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        getUser: {
          email: "ryohei1000000000@gmail.com",
          password: "38ryohei38",
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("pages/SignIn", () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        signInInfo: signInInfoReducer,
      },
    });
  });

  test("signInAPIのfetch成功⇒userObj取得してStoreに保存", async () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
    //データ入力
    const inputEmail = screen.getByTestId("input_email") as HTMLInputElement;
    const inputPassword = screen.getByTestId(
      "input_password"
    ) as HTMLInputElement;
    userEvent.type(inputEmail, "ryohei1000000000@gmail.com");
    userEvent.type(inputPassword, "38ryohei38");

    //submitHandler
    userEvent.click(screen.getByText("Sign In"));
  });
});

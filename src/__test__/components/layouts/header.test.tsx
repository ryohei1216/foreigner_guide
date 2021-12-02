import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import signInInfoReducer from "../../../store/features/signInInfo/signInInfoSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Header } from "../../../components/layouts/Header";

afterEach(() => {
  cleanup();
});

//useHistoryのmock
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("components/layouts/Header", () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        signInInfo: signInInfoReducer,
      },
    });
  });
  test("SIGN OUT⇒store更新してSIGN IN表示", () => {
    const headerProps = {
      sections: [
        { title: "TOP", url: "/" },
        { title: "Countries", url: "/countries" },
      ],
      title: "Foreigner Guide",
    };
    render(
      <Provider store={store}>
        <Header {...headerProps} />
      </Provider>
    );
  });
});

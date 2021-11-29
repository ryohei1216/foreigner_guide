import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Redux from "./Redux";
import { configureStore } from "@reduxjs/toolkit";
import customCounterReducer from "./features/customCounter/customCounterSlice";

afterEach(() => {
  cleanup();
});

describe("Redux Integration Test", () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });
  test("Increment", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("+"));
    userEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("3");
  });
  test("Decrement", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.click(screen.getByText("-"));
    userEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("-2");
  });
  test("IncrementByAmount", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText("Enter"), "30");
    userEvent.click(screen.getByText("IncrementByAmount"));
    expect(screen.getByTestId("count-value")).toHaveTextContent("30");
  });
});

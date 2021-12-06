import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Main from "../../pages/Main";
import { menuItems } from "../../pages/Main";

//useHistoryのmock
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

afterEach(() => {
  cleanup();
});

describe("page/Main", () => {
  test("MenuItemの表示", () => {
    render(<Main />);
    menuItems.forEach((item) => {
      expect(screen.getByText(`${item.title}`)).toBeTruthy();
    });
  });
});

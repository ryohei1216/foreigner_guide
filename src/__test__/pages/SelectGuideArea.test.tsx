import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SelectGuideArea from "../../pages/SelectGuideArea";
import { areaItems } from "../../pages/SelectGuideArea";

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

describe("page/SelectGuideArea", () => {
  test("areaItemの表示", () => {
    render(<SelectGuideArea />);
    areaItems.forEach((item) => {
      expect(screen.getByText(`${item.title}`)).toBeTruthy();
    });
  });
});

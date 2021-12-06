import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SelectGuideCountry from "../../pages/SelectGuideCountry";
import { countryItems } from "../../pages/SelectGuideCountry";

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

describe("page/SelectGuideCountry", () => {
  test("countryItemの表示", () => {
    render(<SelectGuideCountry />);
    countryItems.forEach((item) => {
      expect(screen.getByText(`${item.title}`)).toBeTruthy();
    });
  });
});

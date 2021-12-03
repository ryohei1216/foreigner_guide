import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { CountriesCard } from "../../components/CountriesCard";

afterEach(() => cleanup());

describe("components/CommonCard", () => {
  test("CommonCardにpropsを渡してタイトル表示", () => {
    render(<CountriesCard country="アメリカ" />);
    console.log(screen.debug());
    expect(screen.getByTestId("country")).toHaveTextContent("アメリカ");
  });
});

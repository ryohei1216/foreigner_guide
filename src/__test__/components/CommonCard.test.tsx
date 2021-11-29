import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { CommonCard } from "../../components/CommonCard";

afterEach(() => cleanup());

describe("components/CommonCard", () => {
  test("CommonCardにpropsを渡してタイトル表示", () => {
    render(<CommonCard country="アメリカ" />);
    console.log(screen.debug());
    expect(screen.getByTestId("country")).toHaveTextContent("アメリカ");
  });
});

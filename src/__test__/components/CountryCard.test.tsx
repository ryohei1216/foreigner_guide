import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { CountryCard } from "../../components/CountryCard";

afterEach(() => cleanup());

describe("components/CountryCard", () => {
  test("CommonCardにpropsを渡してタイトル表示", () => {
    render(
      <CountryCard webUrl="weburl" imageUrl="imageUrl" title="アメリカ" />
    );
    expect(screen.getByTestId("title")).toHaveTextContent("アメリカ");
  });
});

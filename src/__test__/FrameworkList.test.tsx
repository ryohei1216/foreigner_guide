/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FrameworkList from "./FramewotkList";

afterEach(() => cleanup());

describe("popsテスト", () => {
  test("propsを渡さない⇒No data!", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data!")).toBeInTheDocument();
  });
  test("propsを渡すとlist表示", () => {
    const dummyData = [
      { id: 1, item: "React" },
      { id: 2, item: "Angular" },
      { id: 4, item: "Vue" },
    ];
    render(<FrameworkList data={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((el) => el.textContent);
    const dummyItems = dummyData.map((el) => el.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data!")).toBeNull();
  });
});

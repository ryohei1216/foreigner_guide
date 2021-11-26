/**
 * @jest-environment jsdom
 */
// import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FrameworkList from "./FramewotkList";

afterEach(() => cleanup());

describe("popsテスト", () => {
  test("propsを渡さない", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data!")).toBeInTheDocument();
  });
});

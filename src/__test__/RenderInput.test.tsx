/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

const mockFn = jest.fn((str: string) => {
  console.log(str);
});

afterEach(() => cleanup());

describe("Rendering", () => {
  test("テスト", () => {
    render(<RenderInput outputConsole={mockFn} />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getAllByPlaceholderText("Enter")).toBeTruthy();
  });

  test("Formにインプットする", () => {
    render(<RenderInput outputConsole={mockFn} />);
    const inputValue = screen.getByPlaceholderText("Enter") as HTMLInputElement;
    userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });

  test("ボタンが反応しない", () => {
    render(<RenderInput outputConsole={mockFn} />);
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).not.toHaveBeenCalled();
  });
  test("ボタンが反応する", () => {
    render(<RenderInput outputConsole={mockFn} />);
    const inputValue = screen.getByPlaceholderText("Enter") as HTMLInputElement;
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

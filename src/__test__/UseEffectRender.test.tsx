import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./useEffectRender";

describe("useRffectテスト", () => {
  test("レンダリングテスト", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});

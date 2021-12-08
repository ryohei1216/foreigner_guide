import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getApiDomain } from "../../utils/config";
import SignUp from "../../pages/SignUp";

const apiDomain = getApiDomain();

//SignUpAPIMockServerの設定
const server = setupServer(
  rest.post(`${apiDomain}/signUp`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ result: "succeed" }));
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("page/SignUp", () => {
  test("SignUp成功", async () => {
    const { getByTestId, getByText } = render(<SignUp />); //レンダリング
  });
});

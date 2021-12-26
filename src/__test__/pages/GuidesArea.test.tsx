import React from "react";
import { Provider } from "react-redux";
import { rest } from "msw";
import { setupServer } from "msw/node";
import signInInfoReducer from "../../store/features/signInInfo/signInInfoSlice";
import { configureStore } from "@reduxjs/toolkit";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import GuidesArea from "../../pages/GuidesArea";
import { getApiDomain } from "../../utils/config";

const apiDomain = getApiDomain();

//初期QueryParamsの設定

//1.実際の振る舞いを定義
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
//   useParams: () => ({
//     area: "ヨーロッパ",
//   }),
//   useRouteMatch: () => ({ url: "/guides/ヨーロッパ" }),
// }));

//2.返り値を定義
jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ area: "ヨーロッパ" }),
}));

//storeの定義
let store: any;
beforeEach(() => {
  store = configureStore({
    reducer: {
      signInInfo: signInInfoReducer,
    },
  });
});

//APIServerの設定
const server = setupServer(
  rest.get(`${apiDomain}/users_area`, (req, res, ctx) => {
    const area = req.url.searchParams.get("area");
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            id: "testId",
            firstName: "miyamoto",
            lastName: "ryohei",
            email: "test@gmail.com",
            password: "testPass",
            country: "フランス",
            area: area,
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("page/GuidesArea", () => {
  test("fetch成功", async () => {
    render(
      <Provider store={store}>
        <GuidesArea />
      </Provider>
    );
    expect(screen.getByTestId("title")).toHaveTextContent("ヨーロッパ"); //queryparamsから国名取得
    expect(screen.queryByTestId("guide_card_grid")).toBeFalsy(); //fetch前は非表示
    await waitFor(() => {
      expect(screen.queryByTestId("guide_card_grid")).toBeTruthy(); //fetch後は表示
    });
  });
});

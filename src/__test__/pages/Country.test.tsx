import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Country from "../../pages/Country";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { getApiDomain } from "../../utils/config";

const apiDomain = getApiDomain();

//初期QueryParamsの設定
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "アメリカ",
  }),
  useRouteMatch: () => ({ url: "/country/アメリカ" }),
}));

//DummyData
const countryDummy = {
  countries: {
    value: [
      {
        webSearchUrl: "testWebUrl",
        contentUrl: "testContentUrl",
        name: "アメリカ",
        imageId: "testId",
      },
    ],
  },
};

//APIServerの設定
const server = setupServer(
  rest.get(`${apiDomain}/country`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(countryDummy));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("pages/Country", () => {
  test("CountryAPI成功時", async () => {
    render(<Country />);
    //fetch前
    expect(screen.getByTestId("id")).toHaveTextContent("アメリカ"); //queryparamsから国名取得
    expect(screen.getByTestId("loading")).toBeTruthy(); //loading表示
    expect(screen.queryByTestId("country-card")).toBeFalsy(); //CountryCard非表示
    //fetch後
    await waitFor(() => {
      expect(screen.queryByTestId("loading")).toBeFalsy(); //loading非表示
    });
    expect(await screen.findByTestId("country-card-wrap")).toBeTruthy(); //CountryCard表示
  });

  test("CountryAPI失敗時", async () => {
    server.use(
      rest.get(`${apiDomain}/country`, (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<Country />); //レンダリング
    //fetch前
    expect(screen.getByTestId("id")).toHaveTextContent("アメリカ"); //queryparamsから国名取得
    expect(screen.getByTestId("loading")).toBeTruthy(); //loading表示
    expect(screen.queryByTestId("failedMessage")).toBeFalsy(); //エラーメッセージ非表示
    //fetch後
    await waitFor(() => {
      //非表示になるまで待つ
      expect(screen.queryByTestId("loading")).toBeFalsy(); //loading非表示
    });
    expect(await screen.findByTestId("failedMessage")).toBeTruthy(); //エラーメッセージ表示
  });
});

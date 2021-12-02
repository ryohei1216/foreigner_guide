import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Country from "../../pages/Country";
import { rest } from "msw";
import { setupServer } from "msw/node";

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
  webSearchUrl: "testWebUrl",
  contentUrl: "testContentUrl",
  name: "",
};

//APIServerの設定
const server = setupServer(
  rest.get("https://localhost:8080/country", (req, res, ctx) => {
    const country = req.url.searchParams.get("q");
    if (country) {
      countryDummy.name = country;
    }
    return res(ctx.status(200), ctx.json([countryDummy]));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe("pages/Country", () => {
  test("CountryAPI成功時⇒testidがある", async () => {
    render(<Country />);
    console.log(await screen.debug());
    //Typography(queryParamsから国名取得)
    expect(await screen.findByTestId("id")).toHaveTextContent("アメリカ");
  });
});

import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { CountriesCard } from "../../components/CountriesCard";
import { getApiDomain } from "../../utils/config";

const apiDomain = getApiDomain();

//WikiAPIMockServerの設定
const server = setupServer(
  rest.get(`${apiDomain}/country_wiki`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        wiki: {
          description: "test_description",
          thumbnail: {
            url: "test_image_url",
          },
        },
      })
    );
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

describe("components/CountriesCard", () => {
  test("CountriesCardにpropsを渡してタイトル表示", async () => {
    render(<CountriesCard country="アメリカ" />);
    expect(screen.getByTestId("country")).toHaveTextContent("アメリカ");
  });

  test("WikiAPIFetchのuseEffect非同期処理成功⇒imageとtextの表示,loadingの非表示", async () => {
    await waitFor(() => {
      render(<CountriesCard country="アメリカ" />);
    });
    expect(screen.getByTestId("description")).not.toHaveTextContent(
      "test_description"
    );
    expect(screen.queryByTestId("loading")).toBeTruthy();
    expect(await screen.findByTestId("description")).toHaveTextContent(
      "test_description"
    );
    expect(screen.queryByTestId("loading")).toBeFalsy();
  });

  test("WikiAPIFetchのuseEffect非同期処理失敗⇒表示テキストの変更,loadingの非表示", async () => {
    server.use(
      rest.get(`${apiDomain}/country_wiki`, (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    await waitFor(() => {
      render(<CountriesCard country="アメリカ" />);
    });
    expect(screen.queryByTestId("loading")).toBeTruthy();
    await waitFor(async () => {
      expect(await screen.findByTestId("description")).toHaveTextContent(
        "読み込み失敗"
      );
    });
    expect(screen.queryByTestId("loading")).toBeFalsy();
  });
});

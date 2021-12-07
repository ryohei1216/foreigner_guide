import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { CountriesCard } from "../../components/CountriesCard";
import { getApiDomain } from "../../utils/config";
import { setTimeout } from "timers";

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

  test("WikiAPIFetchのuseEffect非同期処理成功⇒imageとtextの表示", async () => {
    await waitFor(() => {
      render(<CountriesCard country="アメリカ" />);
    });
    expect(screen.getByTestId("description")).not.toHaveTextContent(
      "test_description"
    );
    expect(await screen.findByTestId("description")).toHaveTextContent(
      "test_description"
    );
  });

  test("WikiAPIFetchのuseEffect非同期処理失敗⇒testの変更", async () => {
    server.use(
      rest.get(`${apiDomain}/country_wiki`, (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    await waitFor(() => {
      render(<CountriesCard country="アメリカ" />);
    });
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(await screen.findByTestId("description")).toHaveTextContent(
      "読み込み失敗"
    );
  });
});

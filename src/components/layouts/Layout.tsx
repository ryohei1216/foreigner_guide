import React, { VFC } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  const headerProps = {
    sections: [
      { title: "TOP", url: "/" },
      { title: "COUNTRIES", url: "/countries" },
      { title: "GUIDES", url: "/search_guides" },
      { title: "GUIDE", url: "/guide" },
      { title: "MESSAGE", url: "/message" },
      { title: "MYPAGE", url: "/mypage" },
    ],
    title: "Foreigner Guide",
  };
  return (
    <>
      <HeaderMargin>
        <Header {...headerProps} />
      </HeaderMargin>
      {children}
      <Footer title={"Foreigner Guide"} description={"Have a Good Trip!"} />
    </>
  );
};

const HeaderMargin = styled.div`
  margin-bottom: 70px;
`;

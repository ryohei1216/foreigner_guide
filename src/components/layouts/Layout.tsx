import React, { VFC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  const headerProps = {
    sections: [
      { title: "TOP", url: "/" },
      { title: "Countries", url: "/countries" },
    ],
    title: "Foreigner Guide",
  };
  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer title={"Foreigner Guide"} description={"Have a Good Trip!"} />
    </>
  );
};

import React, { VFC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  const headerProps = {
    sections: [{ title: "TOP", url: "/" }],
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

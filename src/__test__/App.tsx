import React from "react";
import RenderInput from "./RenderInput";
import FrameworkList from "./FramewotkList";
import UseEffectRender from "./useEffectRender";
import MockServer from "./MockServer";
import Redux from "./Redux";
import ReduxAsync from "./ReduxAsync";

const App = () => {
  const data = [
    {
      id: 1,
      item: "React",
    },
    {
      id: 2,
      item: "Angular",
    },
    {
      id: 3,
      item: "Vue",
    },
  ];
  const outputConsole = (str: string) => {
    console.log(str);
  };
  return (
    <div>
      {/* <MockServer />
      <RenderInput outputConsole={outputConsole} />
      <FrameworkList />
      <UseEffectRender /> */}
      <Redux />
      <ReduxAsync />
    </div>
  );
};

export default App;

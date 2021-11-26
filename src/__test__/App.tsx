import React from "react";
import RenderInput from "./RenderInput";
import FrameworkList from "./FramewotkList";

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
      <RenderInput outputConsole={outputConsole} />
      <FrameworkList />
    </div>
  );
};

export default App;

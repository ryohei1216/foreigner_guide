import React from "react";
import RenderInput from "./RenderInput";

const App = () => {
  const outputConsole = (str: string) => {
    console.log(str);
  };
  return (
    <div>
      <RenderInput outputConsole={outputConsole} />
    </div>
  );
};

export default App;

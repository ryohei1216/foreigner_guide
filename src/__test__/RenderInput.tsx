import React, { useState, FC } from "react";

type Props = {
  outputConsole: (str: string) => void;
};

const RenderInput: FC<Props> = ({ outputConsole }) => {
  const [input, setInput] = useState<string>("");

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Enter</button>
    </div>
  );
};

export default RenderInput;

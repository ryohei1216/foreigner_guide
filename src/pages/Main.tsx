import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  console.log(count);
  return (
    <div>
      <button onClick={increase}>UP</button>
      <button onClick={decrease}>DOWN</button>
    </div>
  );
};

export default Main;

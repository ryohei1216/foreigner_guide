import React, { FC } from "react";

type Props = {
  data?: {
    id: number;
    item: string;
  }[];
};

const FramewotkList: FC<Props> = ({ data }) => {
  if (!data || !data.length) {
    return <h1>No data!</h1>;
  }
  return (
    <div>
      <ul>
        {data.map(({ id, item }) => {
          return <li key={id}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FramewotkList;

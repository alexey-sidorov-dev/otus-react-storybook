import { FC } from "react";
import { ColumnsProps } from "../../types";

export const Columns: FC<ColumnsProps> = ({ number, text }) => {
  const columns = [];
  for (let i = 0; i < number; i++) {
    columns.push(
      <div
        key={i}
        className="column"
        style={{ float: "left", width: "calc((100%-2rem*number)/number)" }}
      >
        {text}
        <br />
        {text}
        <br />
        {text}
      </div>
    );
  }

  return (
    <>
      <div className="columns" data-testid="columns">
        {columns}
      </div>
    </>
  );
};

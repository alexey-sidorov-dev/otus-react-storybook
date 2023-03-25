import { FC } from "react";
import { text } from "../../constants";
import { PictureProps } from "../../types";

export const Picture: FC<PictureProps> = ({ float: floatProp }) => (
  <div data-testid="picture">
    <img
      src=""
      alt="picture"
      className="picture"
      style={{ float: floatProp }}
    />
    <div>
      {text}
      <br />
      {text}
      <br />
      {text}
    </div>
  </div>
);

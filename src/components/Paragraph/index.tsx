import { FC } from "react";
import { ParagraphProps } from "../../types";

export const Paragraph: FC<ParagraphProps> = ({ style: fontStyle, text }) => {
  const Tag = fontStyle === "blockquote" ? "blockquote" : "div";

  return (
    <>
      <Tag className="paragraph" data-testid="paragraph">
        <p style={{ fontStyle }}>{text}</p>
      </Tag>
    </>
  );
};

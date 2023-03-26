import { useState, FC } from "react";
import { header } from "../../constants";
import { AccordionProps } from "../../types";

export const Accordion: FC<AccordionProps> = ({
  text,
  visible: visibleProp,
}) => {
  const [visible, setVisible] = useState(!!visibleProp);

  function clickHandler() {
    setVisible(!visible);
  }

  return (
    <div
      className="accordion"
      data-testid="accordion"
      style={{ margin: "0 1rem" }}
      onClick={clickHandler}
    >
      <div data-testid="accordion-header">
        {[header, !visible ? "-" : "+"].join(" ")}
      </div>
      <div data-testid="accordion-body" hidden={visible} onClick={clickHandler}>
        {text + text + text}
      </div>
    </div>
  );
};

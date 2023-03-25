import { useState, FC } from "react";
import { header } from "../../constants";
import { AccordionProps } from "../../types";

export const Accordion: FC<AccordionProps> = function ({
  text,
  visible: visibleProp,
}) {
  const [visible, setVisible] = useState(!!visibleProp);

  function clickHandler() {
    setVisible(!visible);
  }

  return (
    <div className="accordion" onClick={clickHandler}>
      <div data-accordion-header>
        {[header, !visible ? "-" : "+"].join(" ")}
      </div>
      <div
        data-accordion-body
        data-testid="accordion"
        hidden={visible}
        onClick={clickHandler}
      >
        {text}
      </div>
    </div>
  );
};

import { render, screen } from "@testing-library/react";
import { Paragraph } from ".";
import { text } from "../../constants";

describe("Paragraph", () => {
  it("should render paragraph", () => {
    const style = "normal";
    render(<Paragraph style={style} text={text} />);

    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });
});

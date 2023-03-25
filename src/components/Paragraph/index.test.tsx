import { render, screen } from "@testing-library/react";
import { Paragraph } from ".";

describe("Paragraph", () => {
  it("should find paragraph", () => {
    const style = "italic";
    const text = String(Math.random());
    render(<Paragraph style={style} text={text} />);

    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });
});
